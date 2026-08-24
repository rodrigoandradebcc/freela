/**
 * Dados globais do site — textos e valores extraídos EXATAMENTE do design fonte
 * (`Marina e os Leones.dc.html`, telas 1 · Home, 5 · Sobre e 6 · Mídia kit).
 *
 * Nenhuma imagem é importada aqui. Onde um dado precisa de imagem, ele carrega
 * apenas uma `imageKey` (string) que a etapa de páginas resolve contra o
 * manifesto `src/assets/images.ts`.
 */

import { SPOTIFY_ARTIST_URL } from '@/data/tracks';
import type { NextShow, SocialLink } from '@/types';

/** Tela 1 · Home — bloco de contagem regressiva "PRÓXIMO SHOW". */
export const NEXT_SHOW = {
  venue: 'Casa Blues · Belém',
  dateLabel: 'Sábado, 29 de agosto · 22h · abertura de portas 20h',
  targetIso: '2026-08-29T22:00:00-03:00',
} as const satisfies NextShow;

/** Rodapé da Home: "Belém · Pará · (91) 98119-0005 · contato@marinaeosleones.com". */
export const CONTACT = {
  city: 'Belém · Pará',
  phone: '(91) 98119-0005',
  /** Mesmo número em E.164 sem símbolos — formato exigido pelo link wa.me. */
  whatsapp: '5591981190005',
  /** Quem atende do outro lado; entra na saudação da mensagem do WhatsApp. */
  whatsappContact: 'Kardec',
  email: 'contato@marinaeosleones.com',
} as const;

/** Canal oficial no YouTube. */
export const CHANNEL_URL = 'https://www.youtube.com/@MarinaEOsLeones';

/** Perfil oficial no Instagram — origem dos Reels da página 4 · Vídeos. */
export const INSTAGRAM_URL = 'https://www.instagram.com/marinaeosleones/';

/**
 * O design original só exibia os rótulos das redes (INSTAGRAM / YOUTUBE / SPOTIFY),
 * sem URLs reais. YouTube e Instagram já estão confirmados; o Spotify do rodapé
 * usa o perfil do artista (o mesmo do bloco de plataformas em `@/data/tracks`).
 */
export const SOCIAL_LINKS = [
  { id: 'instagram', label: 'Instagram', icon: 'socialInstagram', href: INSTAGRAM_URL },
  { id: 'youtube', label: 'YouTube', icon: 'socialYoutube', href: CHANNEL_URL },
  { id: 'spotify', label: 'Spotify', icon: 'socialSpotify', href: SPOTIFY_ARTIST_URL },
] as const satisfies readonly SocialLink[];

export interface Stat {
  value: string;
  label: string;
}

/** Tela 1 · Home — trio de números abaixo do hero. */
export const HOME_STATS = [
  { value: '+12', label: 'ANOS DE ESTRADA' },
  { value: '+400', label: 'SHOWS' },
  { value: '4', label: 'INTEGRANTES' },
] as const satisfies readonly Stat[];

/** Tela 6 · Mídia kit — bloco "EM NÚMEROS" (ordem e rótulos diferem da Home). */
export const PRESS_STATS = [
  { value: '+400', label: 'SHOWS REALIZADOS' },
  { value: '+12', label: 'ANOS DE ESTRADA' },
  { value: '32', label: 'FAIXAS NO REPERTÓRIO' },
] as const satisfies readonly Stat[];

/** Chips de aberturas na seção "Sobre a banda" da Home. */
export const OPENED_FOR = [
  'VANESSA DA MATA',
  'SAMUEL ROSA',
  'CIDADE VERDE SOUNDS',
] as const;

/**
 * Textos da seção "Sobre".
 * `*Home` = versão curta na Home; `*Page` = versão da página 5 · Sobre.
 * O título se repete nas duas telas, mas eyebrow e parágrafos divergem.
 */
export const ABOUT_TEXT = {
  eyebrowHome: 'SOBRE A BANDA',
  titleHome: 'Uma identidade que vem da Amazônia',
  paragraphsHome: [
    'O repertório dançante e inovador mistura batidas que vão do reggae ao reggaeton, pop rock nacional e internacional, ritmos regionais e brasilidades: hits atuais e clássicos em versões e releituras contagiantes.',
    'Com anos de estrada, já passaram por festivais e abriram grandes shows nacionais como Vanessa da Mata, Samuel Rosa e Cidade Verde Sounds, levando a força do som produzido no Norte para todo o Brasil.',
  ],
  eyebrowPage: 'DESDE 2013 · BELÉM DO PARÁ',
  titlePage: 'Uma identidade que vem da Amazônia',
  paragraphsPage: [
    'Marina & Os Leones é uma banda paraense de Belém que vem se destacando no cenário musical pela versatilidade e energia de seus shows, conquistando cada vez mais admiradores.',
    'O repertório dançante e inovador mistura reggae, reggaeton, pop rock nacional e internacional, ritmos regionais e brasilidades: hits atuais e clássicos em versões e releituras contagiantes, para públicos dos mais variados gostos e idades.',
  ],
} as const;

export interface TrajectoryItem {
  title: string;
  description: string;
}

/** Tela 5 · Sobre — bloco verde "TRAJETÓRIA". */
export const TRAJECTORY = [
  {
    title: 'Aberturas',
    description:
      'Vanessa da Mata, Samuel Rosa e Cidade Verde Sounds, entre outros grandes shows nacionais.',
  },
  {
    title: 'Festivais',
    description:
      'Presença constante em festivais dentro e fora de Belém, com público de todas as idades.',
  },
  {
    title: 'Casas e eventos',
    description:
      'Das melhores casas da capital a eventos corporativos e privados no interior do estado.',
  },
] as const satisfies readonly TrajectoryItem[];

/**
 * Tela 1 · Home — hero.
 * No HTML original o h1 é "O som do<br>Norte que faz<br>a pista <span>rugir</span>."
 * `titleParts` preserva esses pedaços na ordem; o componente decide como quebrar
 * (o trecho 'rugir' é o que renderiza em destaque laranja).
 */
export const HERO = {
  eyebrow: 'BELÉM · PARÁ · AMAZÔNIA',
  titleParts: ['O som do', 'Norte que faz', 'a pista ', 'rugir', '.'],
  paragraph:
    'Reggae, reggaeton, pop rock e ritmos regionais em versões dançantes. A energia amazônica nas melhores casas e eventos do país.',
} as const;
