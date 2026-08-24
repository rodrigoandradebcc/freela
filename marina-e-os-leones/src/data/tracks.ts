/**
 * Repertório — extraído do array `tracks` do design fonte
 * (`dur` → `durationLabel`, `s` → `durationSec`).
 */

import type { Track } from '@/types';

export const tracks: Track[] = [
  {
    id: 'mare-de-igarape',
    title: 'Maré de Igarapé',
    album: 'Ao vivo em Belém · 2026',
    style: 'REGGAE',
    durationLabel: '3:58',
    durationSec: 238,
  },
  {
    id: 'leoes-da-estacao',
    title: 'Leões da Estação',
    album: 'Single · 2025',
    style: 'POP ROCK',
    durationLabel: '4:12',
    durationSec: 252,
  },
  {
    id: 'reggae-do-ver-o-peso',
    title: 'Reggae do Ver-o-Peso',
    album: 'Ao vivo em Belém · 2026',
    style: 'REGGAE',
    durationLabel: '3:24',
    durationSec: 204,
  },
  {
    id: 'amazonia-sound-system',
    title: 'Amazônia Sound System',
    album: 'EP Brasilidades',
    style: 'REGGAETON',
    durationLabel: '5:02',
    durationSec: 302,
  },
];

/**
 * Bloco "OUÇA NA SUA PLATAFORMA" da página 3 · Música (lista completa).
 * A Home mostra só as quatro primeiras — o componente decide quantas exibir.
 */
export const PLATFORMS = [
  'SPOTIFY',
  'APPLE MUSIC',
  'DEEZER',
  'YOUTUBE MUSIC',
  'TIDAL',
] as const;

/** Legenda ao lado do título "Repertório" na página 3 · Música. */
export const REPERTOIRE_NOTE = '32 FAIXAS NO SHOW COMPLETO';
