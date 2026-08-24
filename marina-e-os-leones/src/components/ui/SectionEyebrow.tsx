/**
 * SectionEyebrow — rótulo curto em caixa alta que antecede o título de uma
 * seção ("AGENDA", "OUÇA AGORA", "PARA CONTRATANTES"...).
 *
 * É decoração tipográfica, não hierarquia: NÃO use como heading. Se a seção
 * precisa de um título semântico, use um `<h2>` logo abaixo. Dentro de um
 * parágrafo ou heading, passe `as="span"` para manter o HTML válido.
 */

import type { JSX, ReactNode } from 'react';

import styles from './SectionEyebrow.module.css';

export interface SectionEyebrowProps {
  children: ReactNode;
  as?: 'div' | 'span';
  className?: string;
}

export function SectionEyebrow({
  children,
  as = 'div',
  className,
}: SectionEyebrowProps): JSX.Element {
  const Component = as;
  const classes = [styles.eyebrow, className].filter(Boolean).join(' ');

  return <Component className={classes}>{children}</Component>;
}
