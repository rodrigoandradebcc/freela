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
  /**
   * Capa exibida antes do clique. Sem ela a capa vem de `i.ytimg.com` — serve,
   * mas é uma requisição a terceiro e o enquadramento é o que o YouTube
   * escolheu. Prefira passar a imagem do manifesto.
   */
  poster?: ImageMeta;
  className?: string;
}

/**
 * Embed responsivo (16:9) do player do YouTube, em duas etapas ("facade").
 *
 * POR QUE NÃO AUTOPLAY
 * --------------------
 * Autoplay COM SOM é bloqueado por todo navegador moderno: só toca sozinho se
 * for mudo. Como o vídeo começando mudo não serve, aqui a página mostra
 * primeiro a CAPA do vídeo e só monta o iframe no clique. Esse clique é um
 * gesto do usuário, então o `autoplay=1` que vai no `src` roda COM SOM — sem
 * `mute`, sem botão de "ativar som" do YouTube.
 *
 * De quebra o player do YouTube (várias centenas de KB) não é baixado por quem
 * nunca clica: até lá a seção é uma imagem e um botão.
 *
 * `youtube-nocookie.com` (modo de privacidade avançada) evita cookies de
 * rastreamento antes de qualquer interação do usuário com o player. A capa vem
 * de `i.ytimg.com`, que serve imagem estática e não grava cookie.
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
          /* `maxresdefault` não existe para todo vídeo; o `onError` cai no
             `hqdefault`, que o YouTube gera para todos. */
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
