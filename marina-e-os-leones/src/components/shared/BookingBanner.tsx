/**
 * BookingBanner — faixa verde de captação ("A gente vai até aí"), usada no fim
 * da agenda e de outras seções para levar quem contrata ao mídia kit.
 *
 * O botão deste bloco é claro sobre o verde, combinação que não existe nas
 * variantes do `Button`. Em vez de inflar o componente compartilhado com uma
 * variante de uso único, a cor é sobrescrita aqui via `className`
 * (ver `.cta` em BookingBanner.module.css).
 */

import type { JSX } from 'react';

import { Button } from '@/components/ui/Button';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { TexturedPanel } from '@/components/ui/TexturedPanel';

import styles from './BookingBanner.module.css';

export function BookingBanner(): JSX.Element {
  return (
    <TexturedPanel tone="green" className={styles.panel}>
      <div className={styles.inner}>
        <SectionEyebrow className={styles.eyebrow}>Sua cidade não está na lista?</SectionEyebrow>
        <p className={styles.title}>A gente vai até aí.</p>
        <Button variant="dark" as="link" to="/midia-kit" className={styles.cta}>
          PEDIR ORÇAMENTO
        </Button>
      </div>
    </TexturedPanel>
  );
}
