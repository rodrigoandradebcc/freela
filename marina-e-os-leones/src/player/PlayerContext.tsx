/**
 * Player global: mantém apenas a faixa selecionada. A faixa é escolhida na
 * lista de repertório (Home ou /musica) e tocada no card do player; como o
 * provider vive acima do layout, a escolha sobrevive à navegação.
 */

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import { tracks } from '@/data/tracks';
import type { PlayerContextValue } from './player.types';

const PlayerContext = createContext<PlayerContextValue | null>(null);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [trackIndex, setTrackIndex] = useState(0);

  const selectTrack = useCallback((index: number) => {
    // Índice fora do repertório: ignora em vez de quebrar `tracks[trackIndex]`.
    if (index < 0 || index >= tracks.length) return;
    setTrackIndex(index);
  }, []);

  const currentTrack = tracks[trackIndex];

  const value = useMemo<PlayerContextValue>(
    () => ({ currentTrack, trackIndex, selectTrack }),
    [currentTrack, trackIndex, selectTrack],
  );

  return <PlayerContext value={value}>{children}</PlayerContext>;
}

// Provider e hook moram juntos de propósito: o Context é privado do módulo e
// `usePlayer` é a única porta de entrada. O custo é perder Fast Refresh neste
// arquivo em dev — trade-off consciente, padrão em arquivos de contexto.
// oxlint-disable-next-line react/only-export-components
export function usePlayer(): PlayerContextValue {
  const context = useContext(PlayerContext);
  if (context === null) {
    throw new Error('usePlayer deve ser usado dentro de <PlayerProvider>');
  }
  return context;
}
