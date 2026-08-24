/**
 * Contratos do player.
 *
 * O áudio NÃO é nosso: quem toca é o embed oficial do Spotify dentro do
 * `NowPlayingCard`. Este contexto guarda apenas QUAL faixa está selecionada,
 * para que a lista de repertório (em qualquer página) e o card do player
 * apontem para a mesma faixa. Nada de `playing`/`elapsed`: esse estado vive
 * dentro do iframe do Spotify e é inacessível de fora (cross-origin).
 */

import type { Track } from '@/types';

/** Estado mínimo do player: só o índice da faixa selecionada. */
export interface PlayerState {
  trackIndex: number;
}

export interface PlayerContextValue {
  currentTrack: Track;
  trackIndex: number;
  selectTrack: (index: number) => void;
}
