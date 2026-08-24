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
 * Acessibilidade: selecionar a faixa é um `<button type="button">`, nunca um
 * `<div onClick>` — assim ganha foco, Enter/Espaço e papel correto de graça. A
 * linha da faixa tocando leva `aria-current="true"`.
 *
 * A linha tem DOIS destinos (tocar no player daqui / abrir a faixa no Spotify),
 * então não pode ser um único elemento clicável: o botão e o link são irmãos
 * dentro de `.row` (link dentro de botão é HTML inválido). O botão continua
 * cobrindo a linha inteira por um `::after` esticado, e o link do Spotify fica
 * acima dele — ver `.select::after` / `.spotify` no CSS.
 */

import type { JSX } from 'react';

import { ExternalLinkIcon } from '@/components/icons';
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
    <div className={classes}>
      <button
        type="button"
        className={styles.select}
        aria-current={isActive ? 'true' : undefined}
        onClick={() => onSelect(index)}
      >
        <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
        <span className={styles.title}>{track.title}</span>
        <span className={styles.style}>{track.style}</span>
        <span className={styles.duration}>{track.durationLabel}</span>
      </button>

      <a
        className={styles.spotify}
        href={track.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ouvir ${track.title} no Spotify`}
      >
        <ExternalLinkIcon size={dense ? 14 : 18} />
      </a>
    </div>
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
