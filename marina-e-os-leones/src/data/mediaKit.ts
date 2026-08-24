/**
 * Mídia kit / imprensa — grade de quatro recursos da tela 6 · Mídia kit.
 *
 * Só o release tem arquivo real previsto (`/release.pdf`); os demais ficam
 * `onRequest: true` — o CTA rola até o formulário "Solicitar proposta".
 */

import type { Resource } from '@/types';

export const resources: Resource[] = [
  {
    id: 'release',
    title: 'Release',
    description: 'PDF · 1 página · pt-BR',
    icon: 'resourceRelease',
    href: '/release.pdf',
  },
  {
    id: 'rider',
    title: 'Rider técnico',
    description: 'Backline, PA e monitor',
    icon: 'resourceRider',
    onRequest: true,
  },
  {
    id: 'fotos',
    title: 'Fotos em alta',
    description: '12 arquivos · 300 dpi',
    icon: 'resourcePhotos',
    onRequest: true,
  },
  {
    id: 'logos',
    title: 'Logos em vetor',
    description: 'AI, SVG e PNG',
    icon: 'resourceLogos',
    onRequest: true,
  },
];

/** Rótulo do botão principal de download no hero da tela 6. */
export const MEDIA_KIT_DOWNLOAD_LABEL = 'MÍDIA KIT COMPLETO · 24 MB';

export const MEDIA_KIT_HOME_CTA_LABEL = 'BAIXAR MÍDIA KIT (24 MB)';
