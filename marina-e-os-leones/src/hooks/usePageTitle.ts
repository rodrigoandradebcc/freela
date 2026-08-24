/**
 * Define o `document.title` da rota atual.
 *
 * Não restaura no unmount de propósito: é uma SPA com uma página visível por
 * vez — o `usePageTitle` da próxima rota já sobrescreve o título.
 */

import { useEffect } from 'react';

const SUFFIX = 'Marina & Os Leones';

export function usePageTitle(pageTitle: string): void {
  useEffect(() => {
    document.title = `${pageTitle} · ${SUFFIX}`;
  }, [pageTitle]);
}
