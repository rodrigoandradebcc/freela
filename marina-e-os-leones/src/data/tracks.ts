import type { PlatformLink, Track } from '@/types';

const trackUrl = (spotifyId: string): string =>
  `https://open.spotify.com/intl-pt/track/${spotifyId}`;

export const spotifyEmbedUrl = (spotifyId: string): string =>
  `https://open.spotify.com/embed/track/${spotifyId}?utm_source=generator&theme=0`;

const TRACK_SEEDS = [
  {
    id: 'blindado',
    title: 'Blindado',
    album: 'Asas & Raízes',
    style: 'SINGLE',
    durationLabel: '3:11',
    durationSec: 191,
    spotifyId: '5JE7OVxZ098Cw790PWr0MG',
  },
  {
    id: 'templo-de-sol',
    title: 'Templo de Sol',
    album: 'Asas & Raízes',
    style: 'SINGLE',
    durationLabel: '3:03',
    durationSec: 183,
    spotifyId: '4gmYkA861nPTuvv78szAwD',
  },
  {
    id: 'ceu-de-estrelas',
    title: 'Céu de Estrelas',
    album: 'Asas & Raízes',
    style: 'SINGLE',
    durationLabel: '2:41',
    durationSec: 161,
    spotifyId: '6LUkETyVV9WmzDeNqGKLx6',
  },
] as const;

export const tracks: Track[] = TRACK_SEEDS.map((seed) => ({
  ...seed,
  url: trackUrl(seed.spotifyId),
}));

export const SPOTIFY_ARTIST_URL =
  'https://open.spotify.com/intl-pt/artist/4z7SXa0y7AHVMIoMoEFHfe';

export const PLATFORMS: readonly PlatformLink[] = [
  { name: 'SPOTIFY', url: SPOTIFY_ARTIST_URL },
  { name: 'APPLE MUSIC' },
  { name: 'DEEZER' },
  { name: 'YOUTUBE MUSIC' },
  { name: 'TIDAL' },
];

export const REPERTOIRE_NOTE = '32 FAIXAS NO SHOW COMPLETO';
