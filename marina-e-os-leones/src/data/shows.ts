/**
 * Agenda de shows — extraída de `agendaData` (preview da Home) e `agendaFull`
 * (página 2 · Agenda) do design fonte.
 *
 * Os dois arrays são INTENCIONALMENTE separados e não derivados um do outro:
 * o design formata o horário de modo diferente ('22h' vs 'sáb · 22h'), muda a
 * tag do primeiro item ('SHOW COMPLETO' na Home vs 'ÚLTIMOS INGRESSOS' na
 * Agenda), omite `price` na prévia e não lista o show da Estação das Docas
 * (esgotado) na Home.
 *
 * Nota: `agendaData` do design não traz `region` — os valores abaixo espelham a
 * região do mesmo local em `agendaFull`, para que o filtro Belém/Interior
 * funcione de forma consistente nas duas telas.
 */

import type { Show } from '@/types';

/** Prévia da Home — 4 datas, sem preço. */
export const showsPreview: Show[] = [
  {
    id: 'casa-blues',
    day: '29',
    month: 'AGO',
    venue: 'Casa Blues',
    city: 'Belém · PA',
    weekdayTime: '22h',
    tag: 'SHOW COMPLETO',
    soldOut: false,
    region: 'belem',
  },
  {
    id: 'festival-cidade-verde',
    day: '05',
    month: 'SET',
    venue: 'Festival Cidade Verde',
    city: 'Ananindeua · PA',
    weekdayTime: '20h',
    tag: 'FESTIVAL',
    soldOut: false,
    region: 'interior',
  },
  {
    id: 'mangal-das-garcas',
    day: '13',
    month: 'SET',
    venue: 'Mangal das Garças',
    city: 'Belém · PA',
    weekdayTime: '19h',
    tag: 'AO AR LIVRE',
    soldOut: false,
    region: 'belem',
  },
  {
    id: 'arena-maraba',
    day: '27',
    month: 'SET',
    venue: 'Arena Marabá',
    city: 'Marabá · PA',
    weekdayTime: '21h',
    tag: 'TURNÊ INTERIOR',
    soldOut: false,
    region: 'interior',
  },
];

/** Página 2 · Agenda — 6 datas, com preço e dia da semana. */
export const showsFull: Show[] = [
  {
    id: 'casa-blues-full',
    day: '29',
    month: 'AGO',
    venue: 'Casa Blues',
    city: 'Belém · PA',
    weekdayTime: 'sáb · 22h',
    tag: 'ÚLTIMOS INGRESSOS',
    soldOut: false,
    region: 'belem',
    price: 'R$ 60',
  },
  {
    id: 'festival-cidade-verde-full',
    day: '05',
    month: 'SET',
    venue: 'Festival Cidade Verde',
    city: 'Ananindeua · PA',
    weekdayTime: 'sex · 20h',
    tag: 'FESTIVAL',
    soldOut: false,
    region: 'interior',
    price: 'GRATUITO',
  },
  {
    id: 'mangal-das-garcas-full',
    day: '13',
    month: 'SET',
    venue: 'Mangal das Garças',
    city: 'Belém · PA',
    weekdayTime: 'sáb · 19h',
    tag: 'AO AR LIVRE',
    soldOut: false,
    region: 'belem',
    price: 'R$ 40',
  },
  {
    id: 'estacao-das-docas',
    day: '20',
    month: 'SET',
    venue: 'Estação das Docas',
    city: 'Belém · PA',
    weekdayTime: 'sáb · 21h',
    tag: 'ESGOTADO',
    soldOut: true,
    region: 'belem',
    price: 'ESGOTADO',
  },
  {
    id: 'arena-maraba-full',
    day: '27',
    month: 'SET',
    venue: 'Arena Marabá',
    city: 'Marabá · PA',
    weekdayTime: 'sáb · 21h',
    tag: 'TURNÊ INTERIOR',
    soldOut: false,
    region: 'interior',
    price: 'R$ 80',
  },
  {
    id: 'bar-do-parque',
    day: '11',
    month: 'OUT',
    venue: 'Bar do Parque',
    city: 'Santarém · PA',
    weekdayTime: 'sáb · 22h',
    tag: 'TURNÊ INTERIOR',
    soldOut: false,
    region: 'interior',
    price: 'R$ 50',
  },
];
