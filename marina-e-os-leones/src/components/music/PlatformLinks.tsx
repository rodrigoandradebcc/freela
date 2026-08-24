/**
 * PlatformLinks — fileira de pills "OUÇA NA SUA PLATAFORMA".
 *
 * Cada pill é um `PlatformLink`. Quando ele traz `url`, vira um link real que
 * abre em nova aba (`rel="noopener noreferrer"`); quando não traz — as
 * plataformas cujo endereço o cliente ainda não forneceu —, continua sendo um
 * `<a href="#">` com `preventDefault` no clique: sem isso o `#` levaria o
 * usuário ao topo da página, que é pior do que não fazer nada. Quando o link
 * chegar, basta preencher `url` no dado; a marcação já é a de um link.
 *
 * O nome acessível padrão ("Ouvir no SPOTIFY") contém o texto visível
 * ("SPOTIFY"), como exige o critério "Label in Name" (WCAG 2.5.3). Quem passa
 * `ariaLabel` precisa manter essa regra — ver NowPlayingCard, que anexa o nome
 * da faixa ao rótulo sem tirar o texto da pill de dentro dele.
 *
 * `layout` escolhe a paleta conforme a superfície:
 *   'dark'  → sobre o card escuro do player (NowPlayingCard);
 *   'light' → sobre os fundos creme das seções.
 */

import type { JSX, MouseEvent } from 'react';

import type { PlatformLink } from '@/types';

import styles from './PlatformLinks.module.css';

export type PlatformLinksLayout = 'dark' | 'light';

export interface PlatformLinksProps {
  platforms: readonly PlatformLink[];
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
        <li key={platform.name}>
          <a
            href={platform.url ?? '#'}
            className={pillClasses}
            aria-label={platform.ariaLabel ?? `Ouvir no ${platform.name}`}
            target={platform.url ? '_blank' : undefined}
            rel={platform.url ? 'noopener noreferrer' : undefined}
            onClick={platform.url ? undefined : preventNavigation}
          >
            {platform.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
