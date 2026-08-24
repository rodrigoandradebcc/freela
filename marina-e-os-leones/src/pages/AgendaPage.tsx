/**
 * Página 2 · Agenda — hero com filtro por região + lista completa de datas +
 * faixa de captação.
 *
 * O elemento <main id="main-content"> é do AppLayout: esta página devolve um
 * <div> (dois <main> no mesmo documento é HTML inválido).
 *
 * DECISÕES
 * --------
 * - o filtro é estado LOCAL desta página: `RegionFilter` é controlado e não
 *   guarda nada, e nenhuma outra tela precisa saber da região escolhida (se um
 *   dia precisar, o lugar é a URL, não um estado global);
 * - a contagem do parágrafo do hero sai de `showsFull.length`, nunca de um
 *   número escrito à mão — mexeu nos dados, o texto acompanha;
 * - a lista vazia tem estado próprio. Com os dados atuais nenhum filtro zera a
 *   lista, mas renderizar nada em silêncio seria um beco sem saída se um dia
 *   zerar;
 * - o `<h2>` da lista é visualmente oculto: o design não mostra título nessa
 *   seção, mas a hierarquia h1 → h2 → h3 (o `<h3>` está dentro do ShowCard)
 *   precisa existir para quem navega por headings.
 */

import type { JSX } from 'react';
import { useId, useState, type CSSProperties } from 'react';

import { RegionFilter } from '@/components/agenda/RegionFilter';
import type { RegionFilterValue } from '@/components/agenda/RegionFilter';
import { ShowCard } from '@/components/agenda/ShowCard';
import { BookingBanner } from '@/components/shared/BookingBanner';
import { Blob } from '@/components/ui/Blob';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { showsFull } from '@/data/shows';
import { usePageTitle } from '@/hooks/usePageTitle';

import styles from './AgendaPage.module.css';

export default function AgendaPage(): JSX.Element {
  usePageTitle('Agenda');

  /* `RegionFilterValue` é exatamente `Region | 'todas'` — o alias vem do
     próprio RegionFilter para os dois lados não saírem do sincronismo. */
  const [filter, setFilter] = useState<RegionFilterValue>('todas');
  const headingId = useId();

  const visibleShows = showsFull.filter((show) => filter === 'todas' || show.region === filter);

  return (
    <div className={styles.page}>
      {/* `overflow: hidden` recorta o blob que sangra pelo canto superior. */}
      <section className={styles.hero}>
        <Blob tone="green" className={styles.heroBlob} />

        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <SectionEyebrow>Temporada 2026</SectionEyebrow>

            <h1 className={styles.title}>
              Agenda
              <br />
              de shows
            </h1>

            <p className={styles.paragraph}>
              {showsFull.length} datas confirmadas entre Belém e o interior do Pará. Produtor?
              Baixe o mapa de palco junto com o mídia kit.
            </p>
          </div>

          <RegionFilter value={filter} onChange={setFilter} />
        </div>
      </section>

      <section aria-labelledby={headingId}>
        <h2 className="visually-hidden" id={headingId}>
          Datas confirmadas
        </h2>

        {/* Quem usa teclado muda o filtro com as setas, sem ver a lista atrás:
            o status anuncia quantas datas sobraram. */}
        <p className="visually-hidden" role="status">
          {visibleShows.length} de {showsFull.length} datas em exibição.
        </p>

        {visibleShows.length > 0 ? (
          <div className={styles.list} key={filter}>
            {visibleShows.map((show, index) => (
              <div
                key={show.id}
                className={styles.listItem}
                style={{ '--enter-index': index } as CSSProperties}
              >
                <ShowCard show={show} variant="full" />
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.empty}>Nenhum show encontrado nessa região no momento.</p>
        )}
      </section>

      <BookingBanner />
    </div>
  );
}
