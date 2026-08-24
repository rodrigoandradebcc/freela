export type Region = 'belem' | 'interior';

export interface ImageMeta {
  src: string;
  src2x?: string;
  width: number;
  height: number;
  alt: string;
}

export interface Show {
  id: string;
  day: string;         // "29"
  month: string;        // "AGO"
  venue: string;
  city: string;
  weekdayTime: string;   // ex: "sáb · 22h" (full) ou "22h" (preview)
  tag: string;           // "FESTIVAL" | "ESGOTADO" | "ÚLTIMOS INGRESSOS" | etc (texto livre)
  soldOut: boolean;
  region: Region;
  price?: string;        // só na versão "full"
}

export interface Track {
  id: string;
  title: string;
  album: string;
  style: string;          // "REGGAE" | "POP ROCK" | "REGGAETON" etc
  durationLabel: string;  // "3:58"
  durationSec: number;    // 238
  url: string;            // faixa no Spotify — abre em nova aba
}

/**
 * Pill de "OUÇA NA SUA PLATAFORMA" e do card do player.
 * `url` ausente = plataforma que o cliente ainda não forneceu (ver PlatformLinks).
 */
export interface PlatformLink {
  name: string;
  url?: string;
  /** Sobrescreve o nome acessível padrão ("Ouvir no {name}"). */
  ariaLabel?: string;
}

export interface Video {
  id: string;
  title: string;
  description?: string;
  duration: string;    // "4:12"
  image: ImageMeta;
  badge?: string;       // "LANÇAMENTO"
  meta?: string;        // "Show completo · 1h48 · 24 mil visualizações"
}

export interface Member {
  id: string;
  name: string;
  role: string;
  image: ImageMeta;
}

export type IconName =
  | 'tabHome' | 'tabAgenda' | 'tabMusic' | 'tabVideo' | 'tabBook'
  | 'play' | 'pause'
  | 'resourceRelease' | 'resourceRider' | 'resourcePhotos' | 'resourceLogos'
  | 'socialInstagram' | 'socialYoutube' | 'socialSpotify'
  | 'download';

export interface Resource {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  href?: string;       // se existir arquivo real (ex: release.pdf)
  onRequest?: boolean; // true = "sob solicitação", CTA rola até o formulário
}

export interface SocialLink {
  id: string;
  label: string;
  icon: IconName;
  href: string;
}

export interface NextShow {
  venue: string;
  dateLabel: string;   // "Sábado, 29 de agosto · 22h · abertura de portas 20h"
  targetIso: string;   // "2026-08-29T22:00:00-03:00"
}
