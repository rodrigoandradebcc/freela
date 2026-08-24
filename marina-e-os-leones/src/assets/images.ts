/**
 * Manifesto de imagens do site.
 *
 * Os arquivos em `src/assets/img/` são gerados por `npm run optimize-images`
 * (ver `scripts/optimize-images.mjs`) a partir dos originais da marca, que ficam
 * fora do repositório. Nunca edite os `.webp` à mão: rode o script.
 *
 * Cada entrada é indexada por uma chave semântica (o lugar onde a imagem aparece),
 * não pelo nome do arquivo — assim trocar a foto de um integrante ou do hero não
 * exige mexer nos componentes.
 *
 * `width`/`height` são as dimensões reais de `src`, para reservar espaço no layout
 * (evita CLS). `src2x` existe só onde o original tinha resolução para uma variante
 * maior de verdade — use em `srcset`:
 *
 *   <img
 *     src={images.heroHome.src}
 *     srcSet={`${images.heroHome.src} 1x, ${images.heroHome.src2x} 2x`}
 *     width={images.heroHome.width}
 *     height={images.heroHome.height}
 *     alt={images.heroHome.alt}
 *   />
 */

import type { ImageMeta } from '@/types'

import markWebp from './img/mark.webp'
import wordmarkWebp from './img/wordmark.webp'

import ml07_800 from './img/ml07-800.webp'
import ml07_1600 from './img/ml07-1600.webp'
import ml01_800 from './img/ml01-800.webp'
import ml01_1600 from './img/ml01-1600.webp'
import showPlateia800 from './img/show-plateia-800.webp'
import showPlateia1600 from './img/show-plateia-1600.webp'
import showPalco800 from './img/show-palco-800.webp'
import showPalco1600 from './img/show-palco-1600.webp'
import showMarina2_800 from './img/show-marina2-800.webp'

import showMarina800 from './img/show-marina-800.webp'
import live01_800 from './img/live01-800.webp'
import ml02_800 from './img/ml02-800.webp'
import ml05_800 from './img/ml05-800.webp'
import ml09_800 from './img/ml09-800.webp'
import showMarina2Member480 from './img/show-marina2-member-480.webp'
import showVoz800 from './img/show-voz-800.webp'
import showGuitarra800 from './img/show-guitarra-800.webp'
import member1_800 from './img/member1-800.webp'
import ensaioAberto800 from './img/ensaio-aberto-800.webp'
import ensaioAberto1600 from './img/ensaio-aberto-1600.webp'
import reel1_800 from './img/reel1-800.webp'
import reel2_800 from './img/reel2-800.webp'
import reel3_800 from './img/reel3-800.webp'
import reel4_800 from './img/reel4-800.webp'

export const images = {
  /** Símbolo da marca. Usado no header, no footer, no player e como marca d'água. */
  logoMark: {
    src: markWebp,
    width: 480,
    height: 336,
    alt: 'Símbolo de Marina & Os Leones: cabeça de leão em traço ornamental',
  },
  /** Logotipo com o nome por extenso. */
  logoWordmark: {
    src: wordmarkWebp,
    width: 480,
    height: 144,
    alt: 'Marina & Os Leones',
  },

  /** Hero da Home. */
  heroHome: {
    src: ml07_800,
    src2x: ml07_1600,
    width: 800,
    height: 533,
    alt: 'Marina & Os Leones reunidos em foto de divulgação da banda',
  },
  /** Card flutuante "AO VIVO / PRÓXIMO SHOW" sobreposto ao hero da Home. */
  heroHomeShowCard: {
    src: showMarina800,
    width: 800,
    height: 1200,
    alt: 'Marina cantando ao microfone sob a luz do palco',
  },
  /** Imagem da seção "Sobre a banda" na Home (preview). */
  aboutPreview: {
    src: ml01_800,
    src2x: ml01_1600,
    width: 800,
    height: 1017,
    alt: 'Os integrantes de Marina & Os Leones posando juntos em ensaio fotográfico',
  },

  /** Vídeo em destaque na Home: "Maré de Igarapé". */
  videoFeaturedLarge: {
    src: live01_800,
    width: 800,
    height: 1200,
    alt: 'Marina & Os Leones em show ao vivo, banhados pela luz colorida do palco',
  },
  /** Vídeo "Making of do ensaio" (Home e página de Vídeos). */
  videoMakingOf: {
    src: ml02_800,
    width: 800,
    height: 1135,
    alt: 'Bastidores do ensaio fotográfico de Marina & Os Leones',
  },
  /** Vídeo "Leões da Estação" (Home e página de Vídeos). */
  videoLeoesEstacao: {
    src: ml09_800,
    width: 800,
    height: 1200,
    alt: 'Marina & Os Leones tocando ao vivo na Estação das Docas, em Belém',
  },
  /** Vídeo "Maré de Igarapé" na grade completa da página de Vídeos. */
  videoMareIgarapeFull: {
    src: ml05_800,
    width: 800,
    height: 1177,
    alt: 'Cena do clipe "Maré de Igarapé", de Marina & Os Leones',
  },
  /** Vídeo full-width em destaque na página de Vídeos: "Ao vivo no Ver-o-Peso". */
  videoFeaturedPress: {
    src: showPlateia800,
    src2x: showPlateia1600,
    width: 800,
    height: 533,
    alt: 'Plateia lotada dançando durante show de Marina & Os Leones no Ver-o-Peso',
  },
  /** Capa do vídeo em destaque da página 4 · Vídeos. */
  videoEnsaioAberto: {
    src: ensaioAberto800,
    src2x: ensaioAberto1600,
    width: 800,
    height: 423,
    alt: 'Marina & Os Leones tocando durante o Ensaio Aberto #1',
  },

  /** Reels do Instagram (página 4 · Vídeos): capa real de cada post. */
  reelHoldingYouClose: {
    src: reel1_800,
    width: 640,
    height: 1136,
    alt: 'Marina & Os Leones tocando em Igarapé-Açu',
  },
  reelPalpite: {
    src: reel2_800,
    width: 640,
    height: 1136,
    alt: 'Marina & Os Leones em Manaus',
  },
  reelJahCode: {
    src: reel3_800,
    width: 640,
    height: 1136,
    alt: 'Marina & Os Leones na versão reggae de Paramore',
  },
  reelDoIWannaKnow: {
    src: reel4_800,
    width: 640,
    height: 1136,
    alt: 'Marina & Os Leones na versão reggae de Arctic Monkeys',
  },

  /** Imagem grande da página "Sobre". */
  aboutHero: {
    src: showMarina2_800,
    width: 800,
    height: 1200,
    alt: 'Marina cantando ao vivo com a banda, de microfone em punho',
  },

  /** Grade de integrantes — Marina (voz). Mesma foto do hero de "Sobre", em corte menor. */
  memberMarina: {
    src: showMarina2Member480,
    width: 480,
    height: 720,
    alt: 'Marina, vocalista de Marina & Os Leones, cantando no palco',
  },
  /** Grade de integrantes — guitarra e voz. */
  memberGuitarraVoz: {
    src: showVoz800,
    width: 800,
    height: 1200,
    alt: 'Integrante de Marina & Os Leones na guitarra e voz durante apresentação',
  },
  /** Grade de integrantes — baixo. */
  memberBaixo: {
    src: showGuitarra800,
    width: 800,
    height: 1200,
    alt: 'Integrante de Marina & Os Leones no baixo durante apresentação',
  },
  /** Grade de integrantes — bateria e percussão. */
  memberBateria: {
    src: member1_800,
    width: 700,
    height: 900,
    alt: 'Integrante de Marina & Os Leones na bateria e percussão durante apresentação',
  },

  /** Imagem grande da página Mídia Kit. */
  mediaKitHero: {
    src: showPalco800,
    src2x: showPalco1600,
    width: 800,
    height: 1200,
    alt: 'Marina & Os Leones em cena aberta de palco, com a banda completa tocando',
  },
} satisfies Record<string, ImageMeta>

export type ImageKey = keyof typeof images

/** PDF do release, servido de `public/` (fica fora do bundle JS). */
export const releasePdfUrl = '/release.pdf'
