import { useState, type JSX } from 'react';

import { PlayIcon } from '@/components/icons';
import { AppImage } from '@/components/ui/AppImage';
import type { ImageMeta } from '@/types';

import styles from './YoutubeEmbed.module.css';

export interface YoutubeEmbedProps {
  /** Apenas o ID do vídeo (11 caracteres), não a URL completa. */
  videoId: string;
  /** Nome acessível do iframe — descreva o que é, não invente detalhes do conteúdo. */
  title: string;
  /** Segundo inicial de reprodução, se o link de origem apontava para um trecho. */
  start?: number;
  poster?: ImageMeta;
  className?: string;
}

/**
 * Embed 16:9 do player do YouTube em duas etapas: capa primeiro, iframe só no
 * clique. Autoplay com som é bloqueado pelos navegadores; como o clique é um
 * gesto do usuário, o `autoplay=1` do iframe montado depois dele roda com som.
 */
export function YoutubeEmbed({
  videoId,
  title,
  start,
  poster,
  className,
}: YoutubeEmbedProps): JSX.Element {
  const [playing, setPlaying] = useState(false);

  const params = new URLSearchParams({
    autoplay: '1',
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
  });
  if (start) {
    params.set('start', String(start));
  }

  const classes = [styles.wrapper, className].filter(Boolean).join(' ');

  if (!playing) {
    return (
      <div className={classes}>
        {poster ? (
          <AppImage image={poster} alt="" cinematic className={styles.poster} />
        ) : (
          <img
            className={styles.poster}
            src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
            alt=""
            loading="lazy"
            onError={(event) => {
              event.currentTarget.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
            }}
          />
        )}

        <button
          type="button"
          className={styles.play}
          aria-label={`Assistir: ${title}`}
          onClick={() => setPlaying(true)}
        >
          <PlayIcon size={30} />
        </button>
      </div>
    );
  }

  return (
    <div className={classes}>
      <iframe
        className={styles.iframe}
        src={`https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
