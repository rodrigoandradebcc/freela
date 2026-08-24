/**
 * optimize-images.mjs
 *
 * Pipeline de otimização dos assets originais da marca "Marina & Os Leones".
 *
 * Os arquivos originais (~61MB, alguns com 20MB cada) vivem FORA do repositório.
 * Este script lê apenas as imagens efetivamente referenciadas no markup do design
 * (`Marina e os Leones.dc.html`), converte para WebP nas larguras que o site usa
 * e grava em `src/assets/img/` — que é o único diretório de imagens que entra no
 * bundle (via imports ES resolvidos pelo Vite, ver `src/assets/images.ts`).
 *
 * Também gera os favicons em `public/` a partir do `mark.png`.
 *
 * Orçamento (regra dura, o script falha se estourar):
 *   - nenhum arquivo de saída acima de 350KB
 *   - soma de todas as imagens em src/assets/img abaixo de 4MB
 *
 * Uso: npm run optimize-images
 */

import { mkdir, readdir, rm, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const SOURCE_DIR = '/Users/rodrigoandrade/Downloads/Marina e os Leones Brand/assets/'

const ROOT_DIR = fileURLToPath(new URL('..', import.meta.url))
const OUT_DIR = path.join(ROOT_DIR, 'src', 'assets', 'img')
const PUBLIC_DIR = path.join(ROOT_DIR, 'public')

const MAX_FILE_BYTES = 350 * 1024
const MAX_TOTAL_BYTES = 4 * 1024 * 1024

/** Larguras geradas para imagens full-bleed / hero (usadas em `srcset`). */
const HERO_WIDTHS = [1600, 800]
/** Largura única para cards, thumbnails de vídeo e fotos de integrantes. */
const CARD_WIDTH = 800

const HERO_QUALITY = 78
const CARD_QUALITY = 80
const LOGO_QUALITY = 90

/**
 * Lista das imagens realmente referenciadas no HTML do design.
 * Tudo que não está aqui (ml03, ml04, ml06, ml08, ml10, ml11, live02, marina00,
 * member2, member3, logo.png) não aparece no markup e por isso não é processado.

 *
 * kind:
 *   'hero'  -> duas larguras (1600 + 800) para srcset
 *   'card'  -> largura única (800)
 *   'logo'  -> preserva canal alpha, largura pequena
 */
const JOBS = [
  // Logos (únicos arquivos com transparência real).
  // O mark é usado no máximo a 300px de largura no design (marca d'água de fundo,
  // opacidade ~12%); 480px cobre isso e ainda dá ~7x a densidade do header (44px
  // de altura). Ir até 600px custaria +36KB num arquivo carregado em toda página.
  { source: 'mark.png', base: 'mark', kind: 'logo', width: 480 },
  { source: 'wordmark.png', base: 'wordmark', kind: 'logo', width: 480 },

  // Heros / full-bleed
  { source: 'ml07.jpeg', base: 'ml07', kind: 'hero' },
  { source: 'ml01.jpeg', base: 'ml01', kind: 'hero' },
  { source: 'show-marina2.png', base: 'show-marina2', kind: 'hero' },
  { source: 'show-plateia.png', base: 'show-plateia', kind: 'hero' },
  { source: 'show-palco.png', base: 'show-palco', kind: 'hero' },
  { source: 'ensaio-aberto.png', base: 'ensaio-aberto', kind: 'hero' },

  // Cards / thumbs
  { source: 'live01.jpeg', base: 'live01', kind: 'card' },
  { source: 'ml02.jpeg', base: 'ml02', kind: 'card' },
  { source: 'ml05.jpeg', base: 'ml05', kind: 'card' },
  { source: 'ml09.jpeg', base: 'ml09', kind: 'card' },
  { source: 'show-marina.png', base: 'show-marina', kind: 'card' },
  { source: 'show-voz.png', base: 'show-voz', kind: 'card' },
  { source: 'show-guitarra.png', base: 'show-guitarra', kind: 'card' },
  { source: 'member1-rod.png', base: 'member1-rod', kind: 'card' },

  // Reels do Instagram (página 4 · Vídeos). NÃO são os reelN.png do design
  // (aqueles são placeholders): a origem é a capa real de cada post, salva de
  // `instagram.com/p/CODIGO/embed/`. Ver `reels` em src/data/videos.ts.
  { source: 'reel1.jpg', base: 'reel1', kind: 'card' },
  { source: 'reel2.jpg', base: 'reel2', kind: 'card' },
  { source: 'reel3.jpg', base: 'reel3', kind: 'card' },
  { source: 'reel4.jpg', base: 'reel4', kind: 'card' },

  // show-marina2 é reaproveitada como foto de integrante (card menor)
  {
    source: 'show-marina2.png',
    base: 'show-marina2-member',
    kind: 'card',
    width: 480,
  },
]

/** Favicons derivados do símbolo da marca. */
const FAVICONS = [
  { source: 'mark.png', out: 'favicon.png', size: 32, background: null },
  {
    source: 'mark.png',
    out: 'apple-touch-icon.png',
    size: 180,
    // iOS não respeita transparência em apple-touch-icon: usa o creme da marca.
    background: { r: 245, g: 234, b: 216, alpha: 1 },
    padding: 0.14,
  },
]

const formatBytes = (bytes) =>
  bytes >= 1024 * 1024
    ? `${(bytes / 1024 / 1024).toFixed(2)} MB`
    : `${(bytes / 1024).toFixed(1)} KB`

async function emptyOutDir() {
  await mkdir(OUT_DIR, { recursive: true })
  const existing = await readdir(OUT_DIR)
  await Promise.all(
    existing
      .filter((name) => name.endsWith('.webp'))
      .map((name) => rm(path.join(OUT_DIR, name))),
  )
}

/**
 * Converte uma origem para WebP numa largura máxima.
 * Nunca faz upscale: se o original for mais estreito, a saída mantém a largura original.
 * @returns {Promise<{name: string, width: number, height: number, bytes: number, sourceBytes: number} | null>}
 */
async function toWebp({ source, outName, maxWidth, quality, keepAlpha }) {
  const sourcePath = path.join(SOURCE_DIR, source)
  const outPath = path.join(OUT_DIR, outName)
  const { size: sourceBytes } = await stat(sourcePath)

  let pipeline = sharp(sourcePath)
  // Todas as fotos PNG do design são opacas (verificado com sharp .stats()),
  // então o canal alpha é puro peso morto — só os logos precisam dele.
  if (!keepAlpha) pipeline = pipeline.removeAlpha()

  const info = await pipeline
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp(
      keepAlpha
        ? { quality, alphaQuality: 100, effort: 6 }
        : { quality, effort: 6 },
    )
    .toFile(outPath)

  return {
    name: outName,
    width: info.width,
    height: info.height,
    bytes: info.size,
    sourceBytes,
  }
}

async function buildImages() {
  const rows = []

  for (const job of JOBS) {
    const { width: sourceWidth } = await sharp(
      path.join(SOURCE_DIR, job.source),
    ).metadata()

    if (job.kind === 'logo') {
      rows.push(
        await toWebp({
          source: job.source,
          outName: `${job.base}.webp`,
          maxWidth: job.width,
          quality: LOGO_QUALITY,
          keepAlpha: true,
        }),
      )
      continue
    }

    if (job.kind === 'card') {
      rows.push(
        await toWebp({
          source: job.source,
          outName: `${job.base}-${job.width ?? CARD_WIDTH}.webp`,
          maxWidth: job.width ?? CARD_WIDTH,
          quality: CARD_QUALITY,
          keepAlpha: false,
        }),
      )
      continue
    }

    // hero: duas larguras para srcset.
    for (const targetWidth of HERO_WIDTHS) {
      // Sem upscale: se o original não tem resolução para a variante 2x, ela
      // seria byte a byte redundante com a 1x — melhor não colocar no bundle.
      if (targetWidth > HERO_WIDTHS[1] && sourceWidth <= HERO_WIDTHS[1]) {
        console.log(
          `  · ${job.base}-${targetWidth}.webp ignorado — original tem só ${sourceWidth}px de largura (seria idêntico à variante ${HERO_WIDTHS[1]})`,
        )
        continue
      }
      rows.push(
        await toWebp({
          source: job.source,
          outName: `${job.base}-${targetWidth}.webp`,
          maxWidth: targetWidth,
          quality: HERO_QUALITY,
          keepAlpha: false,
        }),
      )
    }
  }

  return rows
}

async function buildFavicons() {
  await mkdir(PUBLIC_DIR, { recursive: true })
  const rows = []

  for (const icon of FAVICONS) {
    const padding = icon.padding ?? 0
    const inner = Math.round(icon.size * (1 - padding * 2))
    const margin = Math.round((icon.size - inner) / 2)

    // `.trim()` remove a moldura transparente do mark.png (1200x840 com conteúdo
    // real de 744x811), para o glifo ocupar o quadrado inteiro do ícone.
    const glyph = await sharp(path.join(SOURCE_DIR, icon.source))
      .trim({ threshold: 1 })
      .resize(inner, inner, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer()

    const outPath = path.join(PUBLIC_DIR, icon.out)
    const info = await sharp(glyph)
      .extend({
        top: margin,
        bottom: icon.size - inner - margin,
        left: margin,
        right: icon.size - inner - margin,
        background: icon.background ?? { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .flatten(icon.background ? { background: icon.background } : false)
      .png({ compressionLevel: 9, palette: true })
      .toFile(outPath)

    rows.push({
      name: `public/${icon.out}`,
      width: info.width,
      height: info.height,
      bytes: info.size,
      sourceBytes: (await stat(path.join(SOURCE_DIR, icon.source))).size,
    })
  }

  return rows
}

function printTable(rows) {
  const header = ['arquivo', 'dimensões', 'original', 'otimizado', 'redução']
  const body = rows.map((row) => [
    row.name,
    `${row.width}×${row.height}`,
    formatBytes(row.sourceBytes),
    formatBytes(row.bytes),
    `-${(100 - (row.bytes / row.sourceBytes) * 100).toFixed(1)}%`,
  ])

  const widths = header.map((cell, index) =>
    Math.max(cell.length, ...body.map((line) => line[index].length)),
  )
  const line = (cells, pad = ' ') =>
    cells.map((cell, index) => cell.padEnd(widths[index], pad)).join('  ')

  console.log(line(header))
  console.log(line(widths.map((width) => ''.padEnd(width, '─')), '─'))
  for (const row of body) console.log(line(row))
}

async function main() {
  console.log(`\nOrigem: ${SOURCE_DIR}`)
  console.log(`Destino: ${path.relative(ROOT_DIR, OUT_DIR)}\n`)

  await emptyOutDir()
  const imageRows = await buildImages()
  const faviconRows = await buildFavicons()

  console.log('')
  printTable([...imageRows, ...faviconRows])

  // O orçamento vale para o que entra no bundle (src/assets/img).
  // Os favicons ficam em public/ e são servidos avulsos, mas ainda assim são
  // checados contra o limite por arquivo.
  const bundleBytes = imageRows.reduce((total, row) => total + row.bytes, 0)
  const sourceBytes = [...imageRows, ...faviconRows].reduce(
    (total, row) => total + row.sourceBytes,
    0,
  )

  console.log('')
  console.log(
    `Total no bundle (src/assets/img): ${formatBytes(bundleBytes)} em ${imageRows.length} arquivos  (limite ${formatBytes(MAX_TOTAL_BYTES)})`,
  )
  console.log(
    `Somatório dos originais lidos:    ${formatBytes(sourceBytes)}  →  redução de ${(100 - (bundleBytes / sourceBytes) * 100).toFixed(1)}%`,
  )

  const problems = []
  for (const row of [...imageRows, ...faviconRows]) {
    if (row.bytes > MAX_FILE_BYTES) {
      problems.push(
        `${row.name} tem ${formatBytes(row.bytes)} — acima do limite de ${formatBytes(MAX_FILE_BYTES)} por arquivo`,
      )
    }
  }
  if (bundleBytes > MAX_TOTAL_BYTES) {
    problems.push(
      `total de ${formatBytes(bundleBytes)} — acima do limite de ${formatBytes(MAX_TOTAL_BYTES)}`,
    )
  }

  if (problems.length > 0) {
    console.error('\nOrçamento de imagens estourado:')
    for (const problem of problems) console.error(`  ✗ ${problem}`)
    console.error(
      '\nAjuste qualidade ou largura máxima no topo deste script e rode de novo.',
    )
    process.exit(1)
  }

  console.log('\n✓ Dentro do orçamento: nenhum arquivo acima de 350KB, total abaixo de 4MB.\n')
}

await main()
