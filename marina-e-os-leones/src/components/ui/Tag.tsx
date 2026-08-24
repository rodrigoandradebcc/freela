/**
 * Tag — pill pequena de rótulo: tipo de show ("FESTIVAL"), estado ("ESGOTADO"),
 * estilo musical ("REGGAE"), badge de vídeo ("LANÇAMENTO").
 *
 * O tom é decisão de apresentação de quem usa (a partir de `show.soldOut`, por
 * exemplo); a Tag não deduz nada dos dados. Ela também não vira botão: para
 * filtros clicáveis, use `Button`.
 */

import type { JSX, ReactNode } from 'react';

import styles from './Tag.module.css';

export type TagTone = 'orange' | 'green' | 'gray' | 'peach';

export interface TagProps {
  tone: TagTone;
  children: ReactNode;
  className?: string;
}

export function Tag({ tone, children, className }: TagProps): JSX.Element {
  const classes = [styles.tag, styles[tone], className].filter(Boolean).join(' ');

  return <span className={classes}>{children}</span>;
}
