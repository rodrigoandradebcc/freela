/**
 * Repertório — extraído do array `tracks` do design fonte
 * (`dur` → `durationLabel`, `s` → `durationSec`, `url` → `url`).
 *
 * São as faixas reais da banda no Spotify: o `url` de cada uma é o link da
 * própria faixa, usado pelo botão redondo de cada linha do repertório e pela
 * pill "ABRIR NO SPOTIFY" do player. Título e `url` andam juntos — não troque
 * um sem o outro.
 */

import type { PlatformLink, Track } from '@/types';

export const tracks: Track[] = [
  {
    id: 'blindado',
    title: 'Blindado',
    album: 'Asas & Raízes',
    style: 'SINGLE',
    durationLabel: '3:11',
    durationSec: 191,
    url: 'https://open.spotify.com/intl-pt/track/5JE7OVxZ098Cw790PWr0MG',
  },
  {
    id: 'templo-de-sol',
    title: 'Templo de Sol',
    album: 'Asas & Raízes',
    style: 'SINGLE',
    durationLabel: '3:03',
    durationSec: 183,
    url: 'https://open.spotify.com/intl-pt/track/4gmYkA861nPTuvv78szAwD',
  },
  {
    id: 'ceu-de-estrelas',
    title: 'Céu de Estrelas',
    album: 'Asas & Raízes',
    style: 'SINGLE',
    durationLabel: '2:41',
    durationSec: 161,
    url: 'https://open.spotify.com/intl-pt/track/6LUkETyVV9WmzDeNqGKLx6',
  },
];

/** Perfil da banda no Spotify — destino da pill SPOTIFY do bloco de plataformas. */
export const SPOTIFY_ARTIST_URL =
  'https://open.spotify.com/intl-pt/artist/4z7SXa0y7AHVMIoMoEFHfe';

/**
 * Bloco "OUÇA NA SUA PLATAFORMA" da página 3 · Música (lista completa).
 * A Home mostra só as quatro primeiras — o componente decide quantas exibir.
 *
 * Só o Spotify tem link: o design fonte não traz URL das outras plataformas
 * (o cliente ainda não forneceu). Ver PlatformLinks para o que acontece quando
 * `url` está ausente.
 */
export const PLATFORMS: readonly PlatformLink[] = [
  { name: 'SPOTIFY', url: SPOTIFY_ARTIST_URL },
  { name: 'APPLE MUSIC' },
  { name: 'DEEZER' },
  { name: 'YOUTUBE MUSIC' },
  { name: 'TIDAL' },
];

/** Legenda ao lado do título "Repertório" na página 3 · Música. */
export const REPERTOIRE_NOTE = '32 FAIXAS NO SHOW COMPLETO';
