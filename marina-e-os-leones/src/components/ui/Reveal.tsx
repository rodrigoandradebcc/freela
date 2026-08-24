/**
 * Reveal — entrada suave quando o bloco chega à viewport.
 *
 * O bloco nasce ESCONDIDO, já na primeira renderização. Aplicar o estado
 * escondido depois (dentro do efeito) não funciona: o observer dispara no mesmo
 * tick para quem já está na viewport, o navegador nunca pinta o frame inicial e
 * a transição não roda.
 *
 * Dispara uma vez por elemento (o observer se desconecta no primeiro
 * cruzamento): reanimar a cada rolagem cansa em quem sobe e desce a página.
 *
 * `prefers-reduced-motion` ou `IntersectionObserver` indisponível → revela na
 * hora, no primeiro efeito. O conteúdo nunca fica preso em `opacity: 0`.
 */

import { useEffect, useRef, useState, type CSSProperties, type JSX, type ReactNode } from 'react';

import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

import styles from './Reveal.module.css';

export interface RevealProps {
  children: ReactNode;
  /** Posição do bloco numa sequência: multiplica o atraso (60ms por passo). */
  index?: number;
  className?: string;
}

export function Reveal({ children, index = 0, className }: RevealProps): JSX.Element {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined' || !node) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { rootMargin: '0px 0px -12% 0px' },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const classes = [styles.reveal, shown ? styles.shown : null, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={ref}
      className={classes}
      style={index ? ({ '--reveal-index': index } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
