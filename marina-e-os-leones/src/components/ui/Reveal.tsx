import { useEffect, useRef, useState, type CSSProperties, type JSX, type ReactNode } from 'react';

import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

import styles from './Reveal.module.css';

export interface RevealProps {
  children: ReactNode;
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
