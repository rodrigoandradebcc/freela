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

import type { Reel, Video } from '@/types';

/** Card de vídeo com imagem por chave de manifesto em vez de `ImageMeta`. */
export type VideoData = Omit<Video, 'image'> & { imageKey: string };

/** Vídeo em destaque: não tem duração no design, mas tem `badge` e `meta`. */
export type FeaturedVideoData = Omit<Video, 'image' | 'duration'> & {
  imageKey: string;
};

export type ReelData = Omit<Reel, 'image'> & { imageKey: string };

/** Página 4 · Vídeos — vídeo em destaque no topo. */
export const featuredVideo: FeaturedVideoData & { youtubeId: string; start?: number } = {
  id: 'ensaio-aberto-1',
  title: 'Ensaio Aberto #1 (Ao Vivo)',
  badge: 'LANÇAMENTO',
  meta: 'Marina & Os Leones · ensaio completo · ao vivo',
  imageKey: 'videoEnsaioAberto',
  youtubeId: 'YmR-FVpggzo',
  start: 1079,
};

/** Página 4 · Vídeos — grade de Reels do Instagram. */
export const reels: ReelData[] = [
  {
    id: 'holding-you-close',
    title: 'Holding You Close · Igarapé-Açu',
    url: 'https://www.instagram.com/p/DbZMbnfJJLT/',
    imageKey: 'reelHoldingYouClose',
  },
  {
    id: 'palpite',
    title: 'Palpite · Manaus',
    url: 'https://www.instagram.com/p/DWHtSZACZhV/',
    imageKey: 'reelPalpite',
  },
  {
    id: 'jah-code',
    title: 'JAH-Code · Paramore em reggae',
    url: 'https://www.instagram.com/p/DWcYZhdiTC1/',
    imageKey: 'reelJahCode',
  },
  {
    id: 'do-i-wanna-know',
    title: 'Do I Wanna Know? · Arctic Monkeys',
    url: 'https://www.instagram.com/p/DP42-XiDQvK/',
    imageKey: 'reelDoIWannaKnow',
  },
];

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
export const homeVideoPreviewCaption = 'LANÇAMENTO · AO VIVO';
export const homeVideoPreviewTitle = 'Ensaio Aberto #1';
export const homeVideoPreviewImageKey = 'videoEnsaioAberto';

/** Os dois Reels que acompanham o destaque na Home. */
export const homeReels = reels.slice(0, 2);
