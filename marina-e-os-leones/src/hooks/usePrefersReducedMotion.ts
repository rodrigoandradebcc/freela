/**
 * Espelha a preferência de sistema `prefers-reduced-motion: reduce`,
 * reagindo a mudanças em tempo real (o usuário pode ligar/desligar sem recarregar).
 */

import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/** Robustez mínima: `window`/`matchMedia` ausentes → assume "sem redução". */
function readPreference(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
  return window.matchMedia(QUERY).matches;
}

export function usePrefersReducedMotion(): boolean {
  // Inicialização lazy: `readPreference` roda só na primeira renderização.
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(readPreference);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;

    const mediaQuery = window.matchMedia(QUERY);
    const handleChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);

    // Só assina o evento: o valor inicial já veio da inicialização lazy do estado,
    // então não há setState síncrono aqui (que causaria um render em cascata).
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}
