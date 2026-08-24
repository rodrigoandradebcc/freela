/**
 * AppLayout — moldura fixa do site: skip link, Header, <main>, Footer e
 * BottomTabBar, mais o ScrollToTop que reseta o scroll a cada navegação.
 *
 * CHILDREN, NÃO <Outlet />
 * ------------------------
 * O layout recebe o conteúdo da rota por `children`. A alternativa seria
 * declará-lo como rota-layout (`<Route element={<AppLayout />}>` + `<Outlet/>`),
 * mas aqui o layout é o MESMO para as seis rotas — não há nada para uma rota
 * pai decidir. Com `children`, o App fica com a árvore literal
 * (`<AppLayout><Suspense><Routes/></Suspense></AppLayout>`), o AppLayout não
 * depende de estar dentro de um `<Route>` (é montável em teste/Storybook sem
 * router aninhado) e o `<Suspense>` do code-splitting fica dentro do <main>,
 * então header e rodapé continuam pintados enquanto o chunk da rota carrega.
 * Se um dia houver layouts diferentes por grupo de rotas, aí sim vale migrar
 * para rotas-layout com <Outlet/>.
 *
 * O <main id="main-content"> é responsabilidade DESTE componente: as páginas
 * NÃO devem renderizar outro <main> (dois <main> no mesmo documento é HTML
 * inválido e quebra o alvo do skip link).
 */

import type { JSX, ReactNode } from 'react';
import { useLocation } from 'react-router';

import { BottomTabBar } from './BottomTabBar';
import { Footer } from './Footer';
import { Header } from './Header';
import { ScrollToTop } from './ScrollToTop';

import styles from './AppLayout.module.css';

/** Única rota com o header em modo imprensa. */
const PRESS_ROUTE = '/midia-kit';

export interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps): JSX.Element {
  const { pathname } = useLocation();

  return (
    <div className={styles.shell}>
      {/* Primeiro elemento focável da página: pula header e nav de uma vez. */}
      <a className={`visually-hidden ${styles.skipLink}`} href="#main-content">
        Pular para o conteúdo
      </a>

      <Header variant={pathname === PRESS_ROUTE ? 'press' : 'default'} />

      <main id="main-content" className={styles.main} key={pathname}>
        {children}
      </main>

      <Footer />
      <BottomTabBar />
      <ScrollToTop />
    </div>
  );
}
