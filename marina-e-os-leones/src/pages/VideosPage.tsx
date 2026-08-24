/**
 * 4 · Vídeos — cabeçalho da página, vídeo em destaque e grade com o restante
 * do canal.
 *
 * O elemento <main id="main-content"> é do AppLayout: as páginas NÃO devem
 * renderizar outro <main> (dois <main> no mesmo documento é HTML inválido).
 *
 * JOIN DE IMAGENS
 * ---------------
 * `src/data/videos.ts` guarda `imageKey: string` em vez do `ImageMeta`
 * completo, para não acoplar os dados ao manifesto gerado. A página faz o
 * join `imageKey` → `images[key]` na hora de renderizar (ver o comentário no
 * topo de `src/data/videos.ts`).
 *
 * HEADINGS
 * --------
 * `FeaturedVideo` e `VideoCard` são componentes de card e usam h3/span
 * internamente. Os h2 das duas seções existem só para o leitor de tela —
 * sem eles a página saltaria de h1 direto para h3.
 *
 * TODO: a contagem "18 VÍDEOS" vem do design e ainda não tem fonte real.
 *
 * VÍDEO EM DESTAQUE
 * -----------------
 * Este slot toca um vídeo real do canal oficial (embed do YouTube), não o
 * card estático mockado do design original — troca pedida depois da entrega
 * inicial. O `YoutubeEmbed` mostra a capa e só monta o player no clique: é o
 * que permite tocar COM SOM (autoplay com áudio é bloqueado pelos
 * navegadores — ver YoutubeEmbed). O `FeaturedVideo` (card com imagem +
 * overlay) segue disponível em
 * `@/components/video/FeaturedVideo` para quando houver conteúdo sem embed
 * real disponível — só não é mais usado nesta seção.
 */

import type { JSX } from 'react';

import { images } from '@/assets/images';
import { Button } from '@/components/ui/Button';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { VideoCard } from '@/components/video/VideoCard';
import { YoutubeEmbed } from '@/components/video/YoutubeEmbed';
import { videos } from '@/data/videos';
import { CHANNEL_URL } from '@/data/site';
import { usePageTitle } from '@/hooks/usePageTitle';
import type { ImageMeta } from '@/types';

import styles from './VideosPage.module.css';

/** Resolve a chave do manifesto para o `ImageMeta` que os cards esperam. */
function imageFor(key: string): ImageMeta {
  return images[key as keyof typeof images];
}

export default function VideosPage(): JSX.Element {
  usePageTitle('Vídeos');

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerText}>
          <SectionEyebrow>Canal oficial · 18 vídeos</SectionEyebrow>
          <h1 className={styles.title}>Vídeos</h1>
        </div>

        <Button
          variant="outline"
          as="a"
          href={CHANNEL_URL}
          target="_blank"
          rel="noreferrer"
          className={styles.subscribe}
        >
          Inscrever-se no canal
        </Button>
      </header>

      <section className={styles.section}>
        <h2 className="visually-hidden">Vídeo em destaque</h2>
        <YoutubeEmbed
          videoId="YmR-FVpggzo"
          title="Marina & Os Leones no YouTube"
          start={1079}
        />
        <a
          href="https://www.youtube.com/watch?v=YmR-FVpggzo"
          target="_blank"
          rel="noreferrer"
          className={styles.watchOnYoutube}
        >
          Assistir no YouTube ↗
        </a>
      </section>

      <section className={styles.section}>
        <h2 className="visually-hidden">Todos os vídeos</h2>
        <div className={styles.grid}>
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              size="small"
              title={video.title}
              duration={video.duration}
              description={video.description}
              image={imageFor(video.imageKey)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
