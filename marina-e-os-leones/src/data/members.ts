/**
 * Formação — seção "Quem sobe no palco" da tela 5 · Sobre.
 *
 * DECISÃO DE TIPO: `Member` em `src/types.ts` exige `image: ImageMeta`, que só
 * existe no manifesto gerado (`src/assets/images.ts`, outra etapa). Exportamos
 * dados crus com `imageKey: string`; a etapa de páginas faz o join.
 */

import type { Member } from '@/types';

export type MemberData = Omit<Member, 'image'> & { imageKey: string };

export const members: MemberData[] = [
  {
    id: 'marina-morais',
    name: 'Marina Morais',
    role: 'VOZ',
    imageKey: 'memberMarina',
    instagram: 'https://www.instagram.com/mariinamorais/',
    instagramHandle: '@mariinamorais',
    objectPosition: '50% 14%',
  },
  {
    id: 'erick-braga',
    name: 'Erick Braga',
    role: 'GUITARRA E VOZ',
    imageKey: 'memberGuitarraVoz',
    instagram: 'https://www.instagram.com/erick_braga/',
    instagramHandle: '@erick_braga',
    objectPosition: '50% 16%',
  },
  {
    id: 'flavio-qv',
    name: 'Flávio QV',
    role: 'BAIXO',
    imageKey: 'memberBaixo',
    instagram: 'https://www.instagram.com/flavioqv/',
    instagramHandle: '@flavioqv',
    objectPosition: '50% 30%',
  },
  {
    id: 'rod-andrade',
    name: 'Rod Andrade',
    role: 'BATERIA E PERCUSSÃO',
    imageKey: 'memberBateria',
    instagram: 'https://www.instagram.com/rod_andrade_____/',
    instagramHandle: '@rod_andrade_____',
    objectPosition: '50% 30%',
  },
];
