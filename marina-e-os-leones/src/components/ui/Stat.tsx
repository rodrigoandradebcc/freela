/**
 * Stat — par número + rótulo dos blocos de números da banda
 * ("120 / SHOWS REALIZADOS", "8 / ANOS DE ESTRADA").
 *
 * `value` é string, não number: o design usa sufixos ("+120", "3 EPS").
 */

import type { JSX } from 'react';

import styles from './Stat.module.css';

export interface StatProps {
  value: string;
  label: string;
  className?: string;
}

export function Stat({ value, label, className }: StatProps): JSX.Element {
  const classes = [styles.stat, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
