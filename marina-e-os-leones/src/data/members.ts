/**
 * Formação — seção "Quem sobe no palco" da tela 5 · Sobre.
 *
 * Nota do design original (legenda logo abaixo da grade de integrantes):
 * "Fotos ao vivo no Bosque Shopping (13.09.2025). Nomes e instrumentos supostos
 * — me manda a formação que eu ajusto."
 * Ou seja, tudo exceto "Marina" é placeholder. Preservado como está; ajustar
 * quando o cliente enviar a formação real.
 *
 * DECISÃO DE TIPO: `Member` em `src/types.ts` exige `image: ImageMeta`, que só
 * existe no manifesto gerado (`src/assets/images.ts`, outra etapa). Exportamos
 * dados crus com `imageKey: string`; a etapa de páginas faz o join.
 */

import type { Member } from '@/types';

export type MemberData = Omit<Member, 'image'> & { imageKey: string };

export const members: MemberData[] = [
  { id: 'marina', name: 'Marina', role: 'VOZ', imageKey: 'memberMarina' },
  {
    id: 'integrante-1',
    name: 'Integrante',
    role: 'GUITARRA E VOZ',
    imageKey: 'memberGuitarraVoz',
  },
  {
    id: 'integrante-2',
    name: 'Integrante',
    role: 'BAIXO',
    imageKey: 'memberBaixo',
  },
  {
    id: 'integrante-3',
    name: 'Integrante',
    role: 'BATERIA E PERCUSSÃO',
    imageKey: 'memberBateria',
  },
];
