/**
 * CountdownTimer — contagem regressiva até a data de um show.
 *
 * ACESSIBILIDADE
 * --------------
 * O valor muda a cada segundo. Anunciar isso seria insuportável em leitor de
 * tela, então a grade é `aria-live="off"` e o contexto vem de um resumo
 * ESTÁTICO (`.visually-hidden`) que não muda a cada tick.
 *
 * Quando a data já passou NÃO renderizamos "00:00:00:00" — zeros parados são
 * indistinguíveis de um relógio quebrado. Mostramos um estado próprio com
 * saída para a agenda.
 */

import type { JSX } from 'react';

import { Button } from '@/components/ui/Button';
import { useCountdown } from '@/hooks/useCountdown';

import styles from './CountdownTimer.module.css';

export interface CountdownTimerProps {
  targetIso: string;
}

export function CountdownTimer({ targetIso }: CountdownTimerProps): JSX.Element {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(targetIso);

  if (isExpired) {
    return (
      <div className={styles.expired}>
        <p className={styles.expiredText}>Esse show já aconteceu</p>
        <Button variant="dark" as="link" to="/agenda" size="md">
          VER PRÓXIMAS DATAS
        </Button>
      </div>
    );
  }

  const units = [
    { key: 'days', value: days, label: 'DIAS' },
    { key: 'hours', value: hours, label: 'HORAS' },
    { key: 'minutes', value: minutes, label: 'MIN' },
    { key: 'seconds', value: seconds, label: 'SEG' },
  ];

  return (
    <div className={styles.timer}>
      <span className="visually-hidden">Contagem regressiva para o próximo show</span>

      {/* aria-live="off": o tick de 1s nunca deve virar anúncio. */}
      <div className={styles.grid} aria-live="off">
        {units.map((unit) => {
          const isSeconds = unit.key === 'seconds';
          const blockClasses = [styles.block, isSeconds ? styles.blockAccent : null]
            .filter(Boolean)
            .join(' ');

          return (
            <div key={unit.key} className={blockClasses}>
              <span className={styles.value}>{unit.value}</span>
              <span className={styles.label}>{unit.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
