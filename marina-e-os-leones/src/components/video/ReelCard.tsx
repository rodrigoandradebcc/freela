/**
 * ReelCard — card vertical de um Reel do Instagram (página 4 · Vídeos).
 *
 * O card INTEIRO é o link para o post: capa, gradiente, selo de play e título
 * vivem dentro do `<a>`. Não existe embed — o Instagram só permite incorporar
 * Reels via SDK oficial, que exige script de terceiro; o design também trata o
 * card como capa + link.
 *
 * Apresentacional: recebe os campos soltos, nunca importa `src/data/videos.ts`.
 *
 * Acessibilidade: o `aria-label` ("Ver no Instagram: <título>") substitui o
 * conteúdo lido do link, então o selo "REELS" e o título não são repetidos pelo
 * leitor de tela. A imagem é decorativa (`alt=""`) pelo mesmo motivo, e o
 * título é um `<span>`, não um heading — um heading dentro do link duplicaria o
 * texto na navegação por títulos.
 */

import type { JSX } from 'react';

import { PlayIcon } from '@/components/icons';
import { AppImage } from '@/components/ui/AppImage';
import type { ImageMeta } from '@/types';

import styles from './ReelCard.module.css';

export interface ReelCardProps {
  title: string;
  url: string;
  image: ImageMeta;
}

export function ReelCard({ title, url, image }: ReelCardProps): JSX.Element {
  return (
    <a
      className={styles.card}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ver no Instagram: ${title}`}
    >
      <AppImage image={image} alt="" cinematic className={styles.image} />

      {/* Gradiente que garante o contraste do título sobre qualquer capa. */}
      <span className={styles.scrim} aria-hidden="true" />

      <span className={styles.playBadge} aria-hidden="true">
        <PlayIcon size={17} />
      </span>

      <span className={styles.caption}>
        <span className={styles.kicker}>REELS</span>
        <span className={styles.title}>{title}</span>
      </span>
    </a>
  );
}
