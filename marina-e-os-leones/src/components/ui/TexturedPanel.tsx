/**
 * TexturedPanel — bloco colorido com textura diagonal, usado nas seções
 * "Mídia kit & contratação" (marrom) e nos painéis verdes de destaque.
 *
 * A textura é aplicada pela classe utilitária global no PRÓPRIO painel (ver a
 * convenção documentada em global.css) — nada de pseudo-elemento ou wrapper
 * extra. O conteúdo vai dentro de `.content`, que é `position: relative` para
 * ficar acima do `background-image` e servir de âncora a filhos absolutos.
 *
 * Espaçamento interno é decisão de quem usa: passe `className` com o padding.
 */

import type { JSX, ReactNode } from 'react';

import styles from './TexturedPanel.module.css';

export type PanelTone = 'green' | 'orange';

export interface TexturedPanelProps {
  tone: PanelTone;
  children: ReactNode;
  className?: string;
}

export function TexturedPanel({ tone, children, className }: TexturedPanelProps): JSX.Element {
  const textureClass = tone === 'green' ? 'texture-diagonal--green' : 'texture-diagonal--orange';
  const classes = [styles.panel, styles[tone], textureClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
