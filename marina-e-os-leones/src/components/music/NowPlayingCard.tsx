import type { JSX } from 'react';

import { images } from '@/assets/images';
import { AppImage } from '@/components/ui/AppImage';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { PLATFORMS, spotifyEmbedUrl } from '@/data/tracks';
import type { PlatformLink } from '@/types';
import { usePlayer } from '@/player/PlayerContext';

import { PlatformLinks } from './PlatformLinks';
import styles from './NowPlayingCard.module.css';

export type NowPlayingCardVariant = 'home' | 'full';

export interface NowPlayingCardProps {
  variant: NowPlayingCardVariant;
  className?: string;
}

const HOME_PLATFORMS = PLATFORMS.slice(0, 4);

function platformsFor(track: { title: string; url: string }, isFull: boolean): PlatformLink[] {
  if (isFull) {
    return [
      {
        name: 'ABRIR NO SPOTIFY',
        url: track.url,
        ariaLabel: `Abrir no Spotify: ${track.title}`,
      },
    ];
  }

  return HOME_PLATFORMS.map((platform) =>
    platform.name === 'SPOTIFY'
      ? { ...platform, url: track.url, ariaLabel: `Ouvir no Spotify: ${track.title}` }
      : platform,
  );
}

export function NowPlayingCard({ variant, className }: NowPlayingCardProps): JSX.Element {
  const { currentTrack } = usePlayer();

  const isFull = variant === 'full';
  const classes = [styles.card, styles[variant], className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      <AppImage image={images.logoMark} alt="" className={styles.watermark} />

      <div className={styles.content}>
        <SectionEyebrow className={styles.eyebrow}>TOCANDO AGORA</SectionEyebrow>

        <div className={styles.main}>
          <span className={styles.markCircle}>
            <AppImage image={images.logoMark} alt="" className={styles.markImage} />
          </span>

          <div className={styles.meta}>
            <p className={styles.title}>{currentTrack.title}</p>
            <p className={styles.album}>{currentTrack.album}</p>
          </div>
        </div>

        <iframe
          key={currentTrack.spotifyId}
          className={styles.embed}
          src={spotifyEmbedUrl(currentTrack.spotifyId)}
          title={`Spotify: ${currentTrack.title}`}
          height={80}
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />

        <PlatformLinks
          platforms={platformsFor(currentTrack, isFull)}
          layout="dark"
          className={styles.platforms}
        />
      </div>
    </section>
  );
}
