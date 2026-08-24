import type { CSSProperties, JSX } from 'react';

import { PlayIcon } from '@/components/icons';
import { AppImage } from '@/components/ui/AppImage';
import type { ImageMeta } from '@/types';

import styles from './ReelCard.module.css';

interface ReelCardBaseProps {
  title: string;
  image: ImageMeta;
  /** Altura da capa. Default: 340px no mobile / 420px a partir de 1024px. */
  height?: string;
}

/** Abre o lightbox com o embed do Instagram (página Vídeos). */
interface ReelCardButtonProps extends ReelCardBaseProps {
  onOpen: () => void;
  href?: never;
}

/** Vai direto para o post (prévia da Home, que não tem lightbox). */
interface ReelCardLinkProps extends ReelCardBaseProps {
  href: string;
  onOpen?: never;
}

export type ReelCardProps = ReelCardButtonProps | ReelCardLinkProps;

export function ReelCard({ title, image, height, href, onOpen }: ReelCardProps): JSX.Element {
  const style = height ? ({ '--reel-height': height } as CSSProperties) : undefined;

  const content = (
    <>
      <AppImage image={image} alt="" cinematic className={styles.image} />

      <span className={styles.scrim} aria-hidden="true" />

      <span className={styles.playBadge} aria-hidden="true">
        <PlayIcon size={17} />
      </span>

      <span className={styles.caption}>
        <span className={styles.kicker}>REELS</span>
        <span className={styles.title}>{title}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        className={styles.card}
        style={style}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver no Instagram: ${title}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={styles.card}
      style={style}
      aria-label={`Assistir ao reel: ${title}`}
      onClick={onOpen}
    >
      {content}
    </button>
  );
}
