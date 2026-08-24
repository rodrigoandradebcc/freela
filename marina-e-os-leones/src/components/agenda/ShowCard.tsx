/**
 * ShowCard — uma data da agenda (círculo de data · local · tag · CTA).
 *
 * Puramente apresentacional: recebe o `Show` por prop, nunca importa
 * `src/data/shows.ts`. Quem monta a lista (Home ou página Agenda) escolhe a
 * `variant`:
 *   'preview' → prévia da Home, sem preço, CTA "+ DETALHES";
 *   'full'    → página Agenda, mostra `show.price` e CTA "INGRESSOS".
 *
 * Acessibilidade — decisões importantes:
 *   - o card é um `<article>`, NÃO um link/botão: ele já contém um CTA
 *     clicável e aninhar interativos dentro de interativo quebra teclado e
 *     leitor de tela. Só o CTA é focável;
 *   - quando `show.soldOut`, o botão fica com `aria-disabled="true"` (em vez de
 *     `disabled` nativo): continua focável e anunciado, mas sem `onClick` não
 *     dispara nada. O texto "Este show já esgotou" é ligado a ele por
 *     `aria-describedby`, para o motivo ser lido junto com o rótulo.
 *
 * O título usa `<h3>`: o padrão do site é h1 (página) → h2 (seção) → h3 (card).
 */

import type { JSX } from 'react';
import { useId } from 'react';

import { Button } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';
import type { TagTone } from '@/components/ui/Tag';
import type { Show } from '@/types';

import styles from './ShowCard.module.css';

/** Caixa alta e sem acentos — deixa a comparação de `tag` imune a variações. */
function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toUpperCase();
}

/**
 * Escolhe o tom da Tag a partir do conteúdo do show. Função pura: mesma entrada,
 * mesma saída — a `Tag` não deduz nada dos dados sozinha (ver Tag.tsx).
 */
function resolveTagTone(show: Show): TagTone {
  if (show.soldOut) return 'gray';

  const tag = normalize(show.tag);

  if (tag.includes('FESTIVAL') || tag.includes('AO AR LIVRE')) return 'green';
  if (tag.includes('ULTIMOS INGRESSOS')) return 'peach';

  return 'orange';
}

export interface ShowCardProps {
  show: Show;
  variant: 'preview' | 'full';
}

export function ShowCard({ show, variant }: ShowCardProps): JSX.Element {
  const soldOutNoteId = useId();

  return (
    <article className={styles.card}>
      <div className={styles.date}>
        <span className={styles.day}>{show.day}</span>
        <span className={styles.month}>{show.month}</span>
      </div>

      <div className={styles.info}>
        <h3 className={styles.venue}>{show.venue}</h3>
        <p className={styles.place}>
          {show.city} · {show.weekdayTime}
        </p>
      </div>

      <div className={styles.meta}>
        <Tag tone={resolveTagTone(show)} className={styles.tag}>
          {show.tag}
        </Tag>

        {variant === 'full' && show.price ? (
          <span className={styles.price}>{show.price}</span>
        ) : null}

        {show.soldOut ? (
          <span className={styles.soldOut}>
            {/* Sem `onClick`: o clique não faz nada, mas o botão continua
                focável e anunciado com o motivo (aria-describedby). */}
            <Button variant="outline" aria-disabled="true" aria-describedby={soldOutNoteId}>
              LISTA DE ESPERA
            </Button>
            <span className={styles.soldOutNote} id={soldOutNoteId}>
              Este show já esgotou
            </span>
          </span>
        ) : (
          /* TODO: linkar para checkout externo quando disponível
             (trocar por `as="a" href={show.ticketUrl}`). */
          <Button variant="dark">{variant === 'full' ? 'INGRESSOS' : '+ DETALHES'}</Button>
        )}
      </div>
    </article>
  );
}
