/**
 * Blob — círculo colorido puramente decorativo que aparece atrás de fotos e
 * painéis. Sem conteúdo e `aria-hidden`: nunca carrega informação.
 *
 * É `position: absolute` — o container precisa ter `position: relative` e,
 * quase sempre, `overflow: hidden`. Tamanho e posição vêm da `className` que o
 * componente pai passa (definida no *.module.css da página/seção), porque
 * dependem do layout local, não do blob.
 *
 *     <Blob tone="green" className={s.heroBlob} />
 */

import type { JSX } from 'react';

import styles from './Blob.module.css';

export type BlobTone = 'green' | 'orange';

export interface BlobProps {
  tone: BlobTone;
  className?: string;
}

export function Blob({ tone, className }: BlobProps): JSX.Element {
  const classes = [styles.blob, styles[tone], className].filter(Boolean).join(' ');

  return <div className={classes} aria-hidden="true" />;
}
