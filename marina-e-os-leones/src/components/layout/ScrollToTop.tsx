/**
 * ScrollToTop — restaura o topo da janela a cada troca de rota.
 *
 * Numa SPA o browser não reseta o scroll sozinho: sem isto, sair do fim da
 * Home e entrar em /agenda deixa a página nova aberta no meio.
 *
 * Não renderiza nada (retorna `null`); é montado uma única vez pelo AppLayout.
 * A dependência do efeito é `pathname` (string primitiva) e não o objeto
 * `location` inteiro — `location` é recriado a cada navegação, inclusive quando
 * só muda a query string ou o `key`, e aí o scroll saltaria sem necessidade.
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function ScrollToTop(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    // `behavior: 'instant'` é obrigatório aqui: o global.css define
    // `html { scroll-behavior: smooth }` para as âncoras internas, e sem este
    // override o `scrollTo` HERDA o smooth — trocar de rota no fim de uma
    // página longa vira uma rolagem animada de ~1s com o conteúdo novo já na
    // tela. Numa troca de página o salto tem de ser imediato.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
