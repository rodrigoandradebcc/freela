import type { JSX } from 'react';

import { PlayIcon } from '@/components/icons';
import { AppImage } from '@/components/ui/AppImage';
import type { ImageMeta } from '@/types';

import styles from './ReelCard.module.css';

export interface ReelCardProps {
  title: string;
  image: ImageMeta;
  onOpen: () => void;
}

export function ReelCard({ title, image, onOpen }: ReelCardProps): JSX.Element {
  return (
    <button
      type="button"
      className={styles.card}
      aria-label={`Assistir ao reel: ${title}`}
      onClick={onOpen}
    >
      <AppImage image={image} alt="" cinematic className={styles.image} />

      <span className={styles.scrim} aria-hidden="true" />

      <span className={styles.playBadge} aria-hidden="true">
        <PlayIcon size={17} />
      </span>

      <span className={styles.caption}>
        <span className={styles.kicker}>REELS</span>
        <span className={styles.title}>{title}</span>
      </span>
    </button>
  );
}
