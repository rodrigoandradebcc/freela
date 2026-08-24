import type { JSX } from 'react';

import styles from './YoutubeEmbed.module.css';

export interface YoutubeEmbedProps {
  /** Apenas o ID do vídeo (11 caracteres), não a URL completa. */
  videoId: string;
  /** Nome acessível do iframe — descreva o que é, não invente detalhes do conteúdo. */
  title: string;
  /** Segundo inicial de reprodução, se o link de origem apontava para um trecho. */
  start?: number;
  className?: string;
}

/**
 * Embed responsivo (16:9) do player do YouTube, com autoplay.
 *
 * Autoplay COM SOM é bloqueado por todo navegador moderno — só é permitido
 * mudo. Por isso `mute=1` é obrigatório aqui: sem ele o autoplay simplesmente
 * não dispara em Chrome/Safari/Firefox. O próprio player do YouTube mostra o
 * botão de "ativar som" para quem quiser ouvir.
 *
 * `loading="lazy"` faz o iframe (e portanto o autoplay) só iniciar quando o
 * elemento entra na viewport — é o que faz "tocar na hora que aparece" valer
 * tanto para quem carrega a página já na seção quanto para quem rola até ela.
 *
 * `youtube-nocookie.com` (modo de privacidade avançada) evita cookies de
 * rastreamento antes de qualquer interação do usuário com o player.
 */
export function YoutubeEmbed({ videoId, title, start, className }: YoutubeEmbedProps): JSX.Element {
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
  });
  if (start) {
    params.set('start', String(start));
  }

  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      <iframe
        className={styles.iframe}
        src={`https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
