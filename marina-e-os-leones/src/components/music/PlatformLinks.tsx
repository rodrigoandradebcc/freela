/**
 * PlatformLinks — fileira de pills "OUÇA NA SUA PLATAFORMA".
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
