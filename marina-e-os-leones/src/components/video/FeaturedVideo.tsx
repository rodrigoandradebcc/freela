/**
 * FeaturedVideo — bloco largo de vídeo em destaque: foto de fundo, gradiente
 * escuro, badge + título + meta na base à esquerda e botão de play grande à
 * direita.
 *
 * Apresentacional: recebe os campos soltos, nunca importa `src/data/videos.ts`.
 *
 * TODO: trocar por embed real (YouTube/Vimeo) quando os links existirem — hoje
 * o botão de play é decorativo e não faz nada ao ser clicado.
 *
 * Decisões:
 *   - o bloco NÃO é um link: só o botão de play é interativo, evitando aninhar
 *     um clicável dentro de outro;
 *   - o badge usa `Tag tone="orange"` (pêssego + laranja escuro) em vez do
 *     laranja sólido do design: `--color-accent` com texto claro fica em ~4,4:1,
 *     abaixo do mínimo AA (4,5:1) para os 10,5px do rótulo;
 *   - o título usa `<h3>`: padrão do site é h1 (página) → h2 (seção) → h3 (card).
 */

import type { JSX } from 'react';

import { PlayIcon } from '@/components/icons';
import { AppImage } from '@/components/ui/AppImage';
import { Tag } from '@/components/ui/Tag';
import type { ImageMeta } from '@/types';

import styles from './FeaturedVideo.module.css';

export interface FeaturedVideoProps {
  title: string;
  badge?: string;
  meta?: string;
  image: ImageMeta;
}

export function FeaturedVideo({ title, badge, meta, image }: FeaturedVideoProps): JSX.Element {
  return (
    <article className={styles.card}>
      <AppImage image={image} cinematic className={styles.image} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.text}>
          {badge ? (
            <Tag tone="orange" className={styles.badge}>
              {badge}
            </Tag>
          ) : null}
          <h3 className={styles.title}>{title}</h3>
          {meta ? <p className={styles.meta}>{meta}</p> : null}
        </div>

        {/* Sem `onClick`: decorativo até existir o embed. */}
        <button type="button" className={styles.playButton} aria-label={`Assistir: ${title}`}>
          <PlayIcon className={styles.playIcon} />
        </button>
      </div>
    </article>
  );
}
