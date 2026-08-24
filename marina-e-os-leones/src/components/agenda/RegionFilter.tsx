/**
 * RegionFilter — pills TODAS / BELÉM / INTERIOR da página Agenda.
 *
 * Componente controlado: não guarda estado, a página é dona do `value`.
 *
 * Acessibilidade: é um `radiogroup` de verdade, não três botões soltos —
 * um único ponto de tabulação (tabindex móvel, "roving tabindex") e as setas
 * navegam entre as opções, selecionando conforme se move, como manda o padrão
 * ARIA de radio group. Por isso os botões são `<button role="radio">` e não
 * `Button` (que é pill de ação, ver Tag.tsx / Button.tsx).
 */

import type { JSX, KeyboardEvent } from 'react';
import { useRef } from 'react';

import type { Region } from '@/types';

import styles from './RegionFilter.module.css';

export type RegionFilterValue = Region | 'todas';

interface RegionOption {
  value: RegionFilterValue;
  label: string;
}

const OPTIONS: RegionOption[] = [
  { value: 'todas', label: 'TODAS' },
  { value: 'belem', label: 'BELÉM' },
  { value: 'interior', label: 'INTERIOR' },
];

const PREVIOUS_KEYS = ['ArrowLeft', 'ArrowUp'];
const NEXT_KEYS = ['ArrowRight', 'ArrowDown'];

export interface RegionFilterProps {
  value: RegionFilterValue;
  onChange: (value: RegionFilterValue) => void;
}

export function RegionFilter({ value, onChange }: RegionFilterProps): JSX.Element {
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const selectedIndex = Math.max(
    0,
    OPTIONS.findIndex((option) => option.value === value),
  );

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>): void {
    const isPrevious = PREVIOUS_KEYS.includes(event.key);
    const isNext = NEXT_KEYS.includes(event.key);

    if (!isPrevious && !isNext) return;

    event.preventDefault();

    const step = isNext ? 1 : -1;
    const nextIndex = (selectedIndex + step + OPTIONS.length) % OPTIONS.length;

    onChange(OPTIONS[nextIndex].value);
    buttonsRef.current[nextIndex]?.focus();
  }

  return (
    <div
      className={styles.group}
      role="radiogroup"
      aria-label="Filtrar por região"
      onKeyDown={handleKeyDown}
    >
      {OPTIONS.map((option, index) => {
        const isSelected = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            tabIndex={index === selectedIndex ? 0 : -1}
            ref={(node) => {
              buttonsRef.current[index] = node;
            }}
            className={[styles.option, isSelected ? styles.selected : null]
              .filter(Boolean)
              .join(' ')}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
