/**
 * AppImage — `<img>` padrão do site a partir de uma entrada de
 * `src/assets/images.ts`.
 *
 * Cuida do que é fácil esquecer imagem a imagem:
 *   - `width`/`height` reais → reserva de espaço, sem CLS;
 *   - `srcSet` 1x/2x quando o manifesto tem variante @2x de verdade;
 *   - `loading`/`fetchPriority` → só o hero (priority) é eager;
 *   - `alt` vindo do manifesto, com override pontual quando o mesmo arquivo
 *     aparece em dois contextos (passe `alt=""` para imagem decorativa).
 *
 * Não tem CSS module: layout (tamanho, object-fit, raio) é de quem usa, via
 * `className`. `cinematic` liga o tratamento fotográfico global `.img-cinematic`.
 */

import type { JSX } from 'react';

import type { ImageMeta } from '@/types';

export interface AppImageProps {
  image: ImageMeta;
  /** Sobrescreve o alt do manifesto. Use `""` quando a imagem for decorativa. */
  alt?: string;
  /** Acima da dobra: carrega eager e com prioridade alta. Use em 1–2 por página. */
  priority?: boolean;
  sizes?: string;
  /** Aplica o tratamento fotográfico `.img-cinematic` (global.css). */
  cinematic?: boolean;
  className?: string;
}

export function AppImage({
  image,
  alt,
  priority = false,
  sizes,
  cinematic = false,
  className,
}: AppImageProps): JSX.Element {
  const classes = [className, cinematic ? 'img-cinematic' : null].filter(Boolean).join(' ');

  return (
    <img
      src={image.src}
      srcSet={image.src2x ? `${image.src} 1x, ${image.src2x} 2x` : undefined}
      width={image.width}
      height={image.height}
      alt={alt ?? image.alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      sizes={sizes}
      className={classes || undefined}
    />
  );
}
