/**
 * VideoCard — cartão de vídeo em dois tamanhos:
 *   size='large' → thumb alta com título SOBREPOSTO na base (gradiente escuro);
 *   size='small' → thumb + bloco de texto ABAIXO (título e descrição).
 *
 * Apresentacional: recebe os campos soltos, nunca importa `src/data/videos.ts`.
 *
 * TODO: embed real (YouTube/Vimeo) quando os links existirem — hoje o card é um
 * `<a href="#">` decorativo que cancela o clique, para já ter o alvo, o foco de
 * teclado e o rótulo corretos sem navegar para lugar nenhum.
 *
 * Acessibilidade: o `aria-label` "Assistir: <título>" substitui o conteúdo
 * lido do link, então o texto interno não é repetido pelo leitor de tela. O
 * ícone de play é decorativo (aria-hidden vem do próprio componente de ícone).
 * O título é um `<span>`, e não um heading: o card inteiro é o link, e um
 * heading dentro do link duplicaria o mesmo texto na navegação por títulos.
 */

import type { JSX, MouseEvent, ReactNode } from 'react';
import { Link } from 'react-router';

import { PlayIcon } from '@/components/icons';
import { AppImage } from '@/components/ui/AppImage';
import type { ImageMeta } from '@/types';

import styles from './VideoCard.module.css';

export interface VideoCardProps {
  title: string;
  duration?: string;
  description?: string;
  image: ImageMeta;
  size: 'large' | 'small';
  /** Rota interna ("/videos") ou URL externa. Sem ela o card não navega. */
  href?: string;
}

export function VideoCard({
  title,
  duration,
  description,
  image,
  size,
  href,
}: VideoCardProps): JSX.Element {
  const isLarge = size === 'large';

  function handleClick(event: MouseEvent<HTMLAnchorElement>): void {
    // Sem destino ainda: evita o salto para o topo do `href="#"`.
    event.preventDefault();
  }

  const className = [styles.card, isLarge ? styles.large : styles.small].join(' ');
  const label = `Assistir: ${title}`;

  const wrap = (children: ReactNode): JSX.Element => {
    if (href?.startsWith('/')) {
      return (
        <Link to={href} className={className} aria-label={label}>
          {children}
        </Link>
      );
    }

    if (href) {
      return (
        <a
          href={href}
          className={className}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <a href="#" className={className} aria-label={label} onClick={handleClick}>
        {children}
      </a>
    );
  };

  return wrap(
    <>
      <div className={styles.media}>
        <AppImage image={image} cinematic className={styles.image} />

        {isLarge ? <span className={styles.overlay} /> : null}

        <span className={styles.playBadge}>
          <PlayIcon className={styles.playIcon} />
        </span>

        {isLarge ? (
          <span className={styles.largeFooter}>
            {description ? <span className={styles.largeKicker}>{description}</span> : null}
            <span className={styles.largeTitle}>{title}</span>
            {duration ? <span className={styles.largeDuration}>{duration}</span> : null}
          </span>
        ) : (
          duration ? <span className={styles.durationBadge}>{duration}</span> : null
        )}
      </div>

      {isLarge ? null : (
        <div className={styles.body}>
          <span className={styles.title}>{title}</span>
          {description ? <span className={styles.description}>{description}</span> : null}
        </div>
      )}
    </>,
  );
}
