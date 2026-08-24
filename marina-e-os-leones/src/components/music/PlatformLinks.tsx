/**
 * PlatformLinks — fileira de pills "OUÇA NA SUA PLATAFORMA".
 *
 * O design fonte não traz URLs reais das plataformas (o cliente ainda não
 * forneceu). Cada pill é um `<a href="#">` com `preventDefault` no clique: sem
 * isso o `#` levaria o usuário ao topo da página, que é pior do que não fazer
 * nada. Quando os links reais chegarem, basta trocar `href` e remover o
 * handler — a marcação já é a de um link de verdade.
 *
 * O nome acessível ("Ouvir no SPOTIFY") contém o texto visível ("SPOTIFY"),
 * como exige o critério "Label in Name" (WCAG 2.5.3).
 *
 * `layout` escolhe a paleta conforme a superfície:
 *   'dark'  → sobre o card escuro do player (NowPlayingCard);
 *   'light' → sobre os fundos creme das seções.
 */

import type { JSX, MouseEvent } from 'react';

import styles from './PlatformLinks.module.css';

export type PlatformLinksLayout = 'dark' | 'light';

export interface PlatformLinksProps {
  platforms: readonly string[];
  /** Default: 'light'. */
  layout?: PlatformLinksLayout;
  className?: string;
}

/** Definido fora do componente: handler estável, uma função só para todas as pills. */
function preventNavigation(event: MouseEvent<HTMLAnchorElement>): void {
  event.preventDefault();
}

export function PlatformLinks({
  platforms,
  layout = 'light',
  className,
}: PlatformLinksProps): JSX.Element {
  const listClasses = [styles.list, className].filter(Boolean).join(' ');
  const pillClasses = [styles.pill, styles[layout]].join(' ');

  return (
    <ul className={listClasses}>
      {platforms.map((platform) => (
        <li key={platform}>
          <a
            href="#"
            className={pillClasses}
            aria-label={`Ouvir no ${platform}`}
            onClick={preventNavigation}
          >
            {platform}
          </a>
        </li>
      ))}
    </ul>
  );
}
