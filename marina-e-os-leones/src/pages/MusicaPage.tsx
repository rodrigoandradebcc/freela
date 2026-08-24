/**
 * Página 3 · Música — player em destaque + repertório completo.
 *
 * O elemento <main id="main-content"> é do AppLayout: esta página devolve um
 * <div> e NUNCA outro <main> (dois <main> no mesmo documento é HTML inválido).
 *
 * Estado do player: nada aqui. `NowPlayingCard` e `TrackList` falam direto com
 * o `PlayerProvider` (que vive acima do layout, em App.tsx), então a faixa
 * selecionada aqui continua tocando ao navegar para a Home — a página não
 * intermedeia nem duplica esse estado.
 *
 * Hierarquia de headings: h1 "Música" → h2 "Repertório". O card do player não
 * traz heading próprio de propósito (ver NowPlayingCard): o rótulo "TOCANDO
 * AGORA" é um eyebrow, decoração tipográfica, não nível de hierarquia.
 */

import type { JSX } from 'react';

import { NowPlayingCard } from '@/components/music/NowPlayingCard';
import { PlatformLinks } from '@/components/music/PlatformLinks';
import { TrackList } from '@/components/music/TrackList';
import { Blob } from '@/components/ui/Blob';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { PLATFORMS, REPERTOIRE_NOTE } from '@/data/tracks';
import { usePageTitle } from '@/hooks/usePageTitle';

import styles from './MusicaPage.module.css';

export default function MusicaPage(): JSX.Element {
  usePageTitle('Música');

  return (
    <div className={styles.page}>
      {/* O hero é largura cheia (sem max-width) só para o blob poder vazar e
          ser cortado pela borda da viewport, não por uma coluna centralizada. */}
      <section className={styles.hero}>
        <Blob tone="orange" className={styles.heroBlob} />

        <div className={styles.heroInner}>
          <SectionEyebrow>DISCOGRAFIA E REPERTÓRIO</SectionEyebrow>
          <h1 className={styles.title}>Música</h1>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          <NowPlayingCard variant="full" />

          <div className={styles.repertoire}>
            <div className={styles.repertoireHeader}>
              <h2 className={styles.repertoireTitle}>Repertório</h2>
              <span className={styles.repertoireNote}>{REPERTOIRE_NOTE}</span>
            </div>

            {/* Sem `dense`: a Home usa a versão compacta, aqui a lista é o
                conteúdo principal da coluna e usa o padding cheio. */}
            <TrackList />

            <div className={styles.platforms}>
              <p className={styles.platformsTitle}>Ouça na sua plataforma</p>
              <PlatformLinks
                platforms={PLATFORMS}
                layout="light"
                className={styles.platformsLinks}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
