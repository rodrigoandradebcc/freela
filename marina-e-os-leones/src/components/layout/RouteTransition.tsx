import type { JSX, ReactNode } from 'react';
import { useLocation } from 'react-router';

import styles from './RouteTransition.module.css';

export interface RouteTransitionProps {
  children: ReactNode;
}

export function RouteTransition({ children }: RouteTransitionProps): JSX.Element {
  const { pathname } = useLocation();

  return (
    <div key={pathname} className={styles.route}>
      {children}
    </div>
  );
}
