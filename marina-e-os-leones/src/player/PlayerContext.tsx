/**
 * Player mock global: mantém faixa atual, play/pause e tempo decorrido.
 *
 * Escolha: `useReducer` em vez de `useState`. As três transições (toggle,
 * selectTrack, tick) mexem em campos inter-relacionados do MESMO estado
 * (`selectTrack` altera trackIndex + elapsed + playing de uma vez, e o `tick`
 * precisa da duração da faixa corrente para dar a volta). Um reducer mantém
 * essas regras num único lugar puro e testável, e `dispatch` é estável por
 * definição — nada de closures obsoletas dentro do interval.
 */

import { createContext, useCallback, useContext, useEffect, useMemo, useReducer } from 'react';
import type { ReactNode } from 'react';

import { tracks } from '@/data/tracks';
import type { PlayerContextValue, PlayerState } from './player.types';

type PlayerAction =
  | { type: 'toggle' }
  | { type: 'selectTrack'; index: number }
  | { type: 'tick' };

const INITIAL_STATE: PlayerState = { trackIndex: 0, playing: true, elapsed: 0 };

function playerReducer(state: PlayerState, action: PlayerAction): PlayerState {
  switch (action.type) {
    case 'toggle':
      return { ...state, playing: !state.playing };

    case 'selectTrack': {
      // Índice fora do repertório: ignora em vez de quebrar `tracks[trackIndex]`.
      if (action.index < 0 || action.index >= tracks.length) return state;
      // Clicar numa faixa troca e já toca do zero (comportamento do design original).
      return { trackIndex: action.index, playing: true, elapsed: 0 };
    }

    case 'tick':
      // Ao fim da faixa volta para 0 e continua tocando — é um mock, não avança de faixa.
      return { ...state, elapsed: (state.elapsed + 1) % tracks[state.trackIndex].durationSec };
  }
}

/** `m:ss` a partir de segundos. */
const mmss = (n: number): string => `${Math.floor(n / 60)}:${String(n % 60).padStart(2, '0')}`;

const PlayerContext = createContext<PlayerContextValue | null>(null);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [{ trackIndex, playing, elapsed }, dispatch] = useReducer(playerReducer, INITIAL_STATE);

  useEffect(() => {
    // Pausado: nenhum interval existe enquanto `playing === false`.
    if (!playing) return;

    const id = setInterval(() => dispatch({ type: 'tick' }), 1000);

    return () => clearInterval(id);
    // `trackIndex` na lista reinicia o interval ao trocar de faixa, para o
    // primeiro segundo da faixa nova não herdar o resto do segundo da anterior.
  }, [playing, trackIndex]);

  const toggle = useCallback(() => dispatch({ type: 'toggle' }), []);
  const selectTrack = useCallback((index: number) => dispatch({ type: 'selectTrack', index }), []);

  // Tudo derivado no render — nada disto vira estado próprio.
  const currentTrack = tracks[trackIndex];

  const value = useMemo<PlayerContextValue>(
    () => ({
      currentTrack,
      trackIndex,
      playing,
      elapsed,
      progressPct: Math.round((elapsed / currentTrack.durationSec) * 100),
      currentTimeLabel: mmss(elapsed),
      toggle,
      selectTrack,
    }),
    [currentTrack, trackIndex, playing, elapsed, toggle, selectTrack],
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
