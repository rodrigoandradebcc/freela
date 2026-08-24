/**
 * Biblioteca de ícones do site.
 *
 * CONVENÇÕES
 * ----------
 * - Todo ícone é DECORATIVO: `aria-hidden="true"` + `focusable="false"`.
 *   O texto acessível vem sempre de fora — `aria-label` no elemento clicável
 *   que envolve o ícone, ou um `<span class="visually-hidden">` irmão.
 * - Ícones de contorno herdam `stroke: currentColor`, então basta definir
 *   `color` no pai para tingir o ícone (inclusive em `:hover`).
 * - Ícones preenchidos (play/pause) herdam `fill: currentColor`.
 * - `size` controla largura E altura (todos são quadrados, viewBox 24x24).
 *
 * Para resolver um ícone a partir de dados (`icon: IconName` em `Resource`,
 * `SocialLink`, etc.), use o mapa `iconByName` no fim do arquivo.
 */

import type { ComponentType, JSX, ReactNode } from 'react';

import type { IconName } from '@/types';

export interface IconProps {
  /** Largura e altura em px. Default: 22 (contorno) / 20 (play e pause). */
  size?: number;
  className?: string;
}

export type IconComponent = (props: IconProps) => JSX.Element;

/** Tamanho padrão dos ícones de contorno (abas, recursos, sociais, download). */
const STROKE_SIZE = 22;
/** Tamanho padrão dos ícones preenchidos (play/pause). */
const FILL_SIZE = 20;

/* -----------------------------------------------------------------------------
   Wrappers internos — mantêm o traço/viewBox idênticos em todos os ícones.
   -------------------------------------------------------------------------- */

function StrokeIcon({
  size = STROKE_SIZE,
  className,
  children,
}: IconProps & { children: ReactNode }): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

function FillIcon({
  size = FILL_SIZE,
  className,
  children,
}: IconProps & { children: ReactNode }): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

/* -----------------------------------------------------------------------------
   Abas (tab bar mobile)
   -------------------------------------------------------------------------- */

export function TabHomeIcon(props: IconProps): JSX.Element {
  return (
    <StrokeIcon {...props}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </StrokeIcon>
  );
}

export function TabAgendaIcon(props: IconProps): JSX.Element {
  return (
    <StrokeIcon {...props}>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <path d="M3 10h18" />
      <path d="M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    </StrokeIcon>
  );
}

export function TabMusicIcon(props: IconProps): JSX.Element {
  return (
    <StrokeIcon {...props}>
      <path d="M9 18V5l12-2v13" />
      <path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M18 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    </StrokeIcon>
  );
}

export function TabVideoIcon(props: IconProps): JSX.Element {
  return (
    <StrokeIcon {...props}>
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <path d="M2 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
    </StrokeIcon>
  );
}

export function TabBookIcon(props: IconProps): JSX.Element {
  return (
    <StrokeIcon {...props}>
      <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </StrokeIcon>
  );
}

/* -----------------------------------------------------------------------------
   Transporte do player (botão do player, botão "OUVIR", play dos vídeos)
   -------------------------------------------------------------------------- */

export function PlayIcon(props: IconProps): JSX.Element {
  return (
    <FillIcon {...props}>
      <polygon points="6 3 20 12 6 21 6 3" fill="currentColor" />
    </FillIcon>
  );
}

export function PauseIcon(props: IconProps): JSX.Element {
  return (
    <FillIcon {...props}>
      <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" />
      <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" />
    </FillIcon>
  );
}

/* -----------------------------------------------------------------------------
   Recursos do mídia kit
   -------------------------------------------------------------------------- */

export function ResourceReleaseIcon(props: IconProps): JSX.Element {
  return (
    <StrokeIcon {...props}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
      <path d="M14 2v5h6" />
    </StrokeIcon>
  );
}

export function ResourceRiderIcon(props: IconProps): JSX.Element {
  return (
    <StrokeIcon {...props}>
      <path d="M6 3v18" />
      <path d="M18 3v18" />
      <path d="M3 12h18" />
    </StrokeIcon>
  );
}

export function ResourcePhotosIcon(props: IconProps): JSX.Element {
  return (
    <StrokeIcon {...props}>
      <path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
      <path d="M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="m21 15-5-5L5 21" />
    </StrokeIcon>
  );
}

export function ResourceLogosIcon(props: IconProps): JSX.Element {
  return (
    <StrokeIcon {...props}>
      <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </StrokeIcon>
  );
}

/* -----------------------------------------------------------------------------
   Download (botões "MÍDIA KIT COMPLETO · 24 MB")
   -------------------------------------------------------------------------- */

export function DownloadIcon(props: IconProps): JSX.Element {
  return (
    <StrokeIcon {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </StrokeIcon>
  );
}

/* -----------------------------------------------------------------------------
   Sociais
   -----------------------------------------------------------------------------
   O design original não traz glifos de marca — só pills de texto no rodapé.
   Estes são pictogramas MINIMALISTAS e genéricos, desenhados no mesmo estilo de
   contorno dos demais ícones; não são reproduções dos logotipos oficiais
   (o que exigiria licença de marca) e não devem ser "corrigidos" para tal.
   -------------------------------------------------------------------------- */

export function SocialInstagramIcon(props: IconProps): JSX.Element {
  return (
    <StrokeIcon {...props}>
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z" />
      <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
    </StrokeIcon>
  );
}

export function SocialYoutubeIcon(props: IconProps): JSX.Element {
  return (
    <StrokeIcon {...props}>
      <path d="M5 5h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z" />
      <path d="m11 10.5 3 1.5-3 1.5z" fill="currentColor" />
    </StrokeIcon>
  );
}

export function SocialSpotifyIcon(props: IconProps): JSX.Element {
  return (
    <StrokeIcon {...props}>
      <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
      <path d="M7.4 9.4c2.9-1 6-.6 8.6 1" />
      <path d="M8 12.8c2.3-.8 4.8-.4 6.8 1" />
      <path d="M8.9 16.1c1.6-.5 3.3-.3 4.7.8" />
    </StrokeIcon>
  );
}

/* -----------------------------------------------------------------------------
   Mapa nome → componente
   -----------------------------------------------------------------------------
   Permite que componentes orientados a dados (ResourceCard, links sociais do
   footer, tab bar) resolvam o ícone a partir de um campo `icon: IconName`.

   O disable abaixo é intencional: `only-export-components` protege o Fast
   Refresh, e este módulo é estático (nenhum ícone tem estado ou muda em dev),
   então o custo é nulo e vale manter mapa e componentes no mesmo lugar.
   -------------------------------------------------------------------------- */

// eslint-disable-next-line react/only-export-components
export const iconByName: Record<IconName, ComponentType<IconProps>> = {
  tabHome: TabHomeIcon,
  tabAgenda: TabAgendaIcon,
  tabMusic: TabMusicIcon,
  tabVideo: TabVideoIcon,
  tabBook: TabBookIcon,
  play: PlayIcon,
  pause: PauseIcon,
  resourceRelease: ResourceReleaseIcon,
  resourceRider: ResourceRiderIcon,
  resourcePhotos: ResourcePhotosIcon,
  resourceLogos: ResourceLogosIcon,
  socialInstagram: SocialInstagramIcon,
  socialYoutube: SocialYoutubeIcon,
  socialSpotify: SocialSpotifyIcon,
  download: DownloadIcon,
};
