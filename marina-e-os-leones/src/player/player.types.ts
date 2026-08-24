/** Contratos do player. O áudio é do embed do Spotify (ver NowPlayingCard). */

import type { Track } from '@/types';

export interface PlayerState {
  trackIndex: number;
}

export interface PlayerContextValue {
  currentTrack: Track;
  trackIndex: number;
  selectTrack: (index: number) => void;
}
