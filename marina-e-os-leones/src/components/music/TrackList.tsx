/**
 * TrackList — lista do repertório, igual na Home e na página Música.
 *
 * Sem props obrigatórias de propósito: `tracks` é a única lista de faixas do
 * site (importada direto de `@/data/tracks`) e a faixa selecionada vem do
 * player global via `usePlayer()`. Passar isso por prop só criaria duas fontes
 * de verdade para o mesmo estado.
 *
 * `TrackRow` mora AQUI, no mesmo arquivo, e não é exportado: ele existe só
 * para esta lista, compartilha o mesmo CSS module e não tem uso isolado —
 * separar em `TrackRow.tsx` só espalharia o componente em dois arquivos que
 * sempre mudam juntos.
 *
 * Acessibilidade: cada linha é um `<button type="button">` de largura total,
 * nunca um `<div onClick>` — assim ganha foco, Enter/Espaço e papel correto de
 * graça. A linha da faixa tocando leva `aria-current="true"`.
 */

import type { JSX } from 'react';

import { tracks } from '@/data/tracks';
import type { Track } from '@/types';
import { usePlayer } from '@/player/PlayerContext';

import styles from './TrackList.module.css';

export interface TrackListProps {
  /** Padding menor entre as linhas — usado na Home; a página Música usa o default. */
  dense?: boolean;
  className?: string;
}

interface TrackRowProps {
  track: Track;
  index: number;
  isActive: boolean;
  dense: boolean;
  onSelect: (index: number) => void;
}

function TrackRow({ track, index, isActive, dense, onSelect }: TrackRowProps): JSX.Element {
  const classes = [styles.row, dense ? styles.dense : null, isActive ? styles.active : null]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={classes}
      aria-current={isActive ? 'true' : undefined}
      onClick={() => onSelect(index)}
    >
      <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
      <span className={styles.title}>{track.title}</span>
      <span className={styles.style}>{track.style}</span>
      <span className={styles.duration}>{track.durationLabel}</span>
    </button>
  );
}

export function TrackList({ dense = false, className }: TrackListProps): JSX.Element {
  const { trackIndex, selectTrack } = usePlayer();

  const classes = [styles.list, className].filter(Boolean).join(' ');

  return (
    <ul className={classes}>
      {tracks.map((track, index) => (
        <li key={track.id}>
          <TrackRow
            track={track}
            index={index}
            isActive={index === trackIndex}
            dense={dense}
            onSelect={selectTrack}
          />
        </li>
      ))}
    </ul>
  );
}
