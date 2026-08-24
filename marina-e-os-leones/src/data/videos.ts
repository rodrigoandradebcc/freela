/**
 * Vídeos — extraídos das telas 1 · Home e 4 · Vídeos do design fonte.
 *
 * DECISÃO DE TIPO (importante):
 * `Video` em `src/types.ts` exige `image: ImageMeta` (objeto completo com
 * src/width/height/alt). Esses objetos só existem no manifesto gerado
 * (`src/assets/images.ts`), que é responsabilidade de outra etapa. Para não
 * acoplar este arquivo ao manifesto — e não travar em uma etapa que roda em
 * paralelo — exportamos dados "crus" com `imageKey: string` no lugar de
 * `image`. A etapa de páginas faz o join `imageKey` → `images[imageKey]` e
 * monta o `Video` completo na hora de renderizar.
 *
 * Os tipos abaixo derivam de `Video` via `Omit`, então qualquer mudança em
 * `src/types.ts` continua propagando para cá.
 */

import type { Video } from '@/types';

/** Card de vídeo com imagem por chave de manifesto em vez de `ImageMeta`. */
export type VideoData = Omit<Video, 'image'> & { imageKey: string };

/** Vídeo em destaque: não tem duração no design, mas tem `badge` e `meta`. */
export type FeaturedVideoData = Omit<Video, 'image' | 'duration'> & {
  imageKey: string;
};

/** Página 4 · Vídeos — banner grande no topo. */
export const featuredVideo: FeaturedVideoData = {
  id: 'ao-vivo-ver-o-peso',
  title: 'Ao vivo no Ver-o-Peso',
  badge: 'LANÇAMENTO',
  meta: 'Show completo · 1h48 · 24 mil visualizações',
  imageKey: 'videoFeaturedPress',
};

/** Página 4 · Vídeos — grade de três cards. */
export const videos: VideoData[] = [
  {
    id: 'mare-de-igarape-clipe',
    title: 'Maré de Igarapé',
    duration: '4:12',
    description: 'Clipe oficial · 2026',
    imageKey: 'videoMareIgarapeFull',
  },
  {
    id: 'making-of',
    title: 'Making of do ensaio',
    duration: '8:30',
    description: 'Documentário · 2025',
    imageKey: 'videoMakingOf',
  },
  {
    id: 'leoes-da-estacao-video',
    title: 'Leões da Estação',
    duration: '3:58',
    description: 'Ao vivo · Estação das Docas',
    imageKey: 'videoLeoesEstacao',
  },
];

/**
 * A Home não reusa `videos[0]`: o design original usa live01.jpeg com a legenda
 * "AO VIVO · CIRCUITO REGGAE AMAZÔNIA" no card grande da Home, enquanto a
 * página 4 · Vídeos usa ml05.jpeg com duração/meta para o mesmo título.
 * Mantemos as duas versões e a Home referencia estes valores próprios.
 */
export const homeVideoPreviewCaption = 'AO VIVO · CIRCUITO REGGAE AMAZÔNIA';
export const homeVideoPreviewTitle = 'Maré de Igarapé';
export const homeVideoPreviewImageKey = 'videoFeaturedLarge';
