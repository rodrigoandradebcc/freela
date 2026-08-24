/**
 * NextShowBanner — painel verde "PRÓXIMO SHOW" da Home: local, data e a
 * contagem regressiva até o horário do show.
 *
 * Lê `NEXT_SHOW` direto de `@/data/site` (dado único do site, não vale a pena
 * passar por props). Mobile-first: base empilhada, lado a lado a partir de 768px.
 */

import type { JSX } from 'react';

import { CountdownTimer } from '@/components/shared/CountdownTimer';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { TexturedPanel } from '@/components/ui/TexturedPanel';
import { NEXT_SHOW } from '@/data/site';

import styles from './NextShowBanner.module.css';

export function NextShowBanner(): JSX.Element {
  return (
    <TexturedPanel tone="green" className={styles.panel}>
      <div className={styles.inner}>
        <div className={styles.info}>
          <SectionEyebrow className={styles.eyebrow}>PRÓXIMO SHOW</SectionEyebrow>
          <h2 className={styles.venue}>{NEXT_SHOW.venue}</h2>
          <p className={styles.date}>{NEXT_SHOW.dateLabel}</p>
        </div>

        <CountdownTimer targetIso={NEXT_SHOW.targetIso} />
      </div>
    </TexturedPanel>
  );
}
