/** Contratos do player mock (não há áudio real — o tempo é simulado por interval). */

import type { Track } from '@/types';

/** Estado mínimo e ortogonal do player. Tudo o que dá para derivar fica fora daqui. */
export interface PlayerState {
  trackIndex: number;
  playing: boolean;
  /** Segundos decorridos da faixa atual. */
  elapsed: number;
}

export interface PlayerContextValue {
  currentTrack: Track;
  trackIndex: number;
  playing: boolean;
  elapsed: number;
  /** Derivado: `elapsed / currentTrack.durationSec * 100`, arredondado. */
  progressPct: number;
  /** Derivado: `elapsed` formatado como `m:ss`. */
  currentTimeLabel: string;
  toggle: () => void;
  selectTrack: (index: number) => void;
}
