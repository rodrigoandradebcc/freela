/**
 * App — router do site.
 *
 * Árvore:
 *   BrowserRouter → PlayerProvider → AppLayout → Suspense → Routes
 *
 * PlayerProvider fica DENTRO do router e FORA do layout: o player mock é
 * global (a faixa continua tocando ao trocar de rota) e componentes do próprio
 * layout podem vir a consumi-lo.
 *
 * Cada página entra por `lazy()` para que o bundle inicial carregue só a rota
 * aberta — as outras cinco viram chunks sob demanda. O `<Suspense>` está
 * dentro do AppLayout (portanto dentro do <main>), então header, rodapé e tab
 * bar permanecem na tela enquanto o chunk da rota chega.
 */

import { lazy, Suspense } from 'react';
import type { JSX } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import { AppLayout } from '@/components/layout/AppLayout';
import { PlayerProvider } from '@/player/PlayerContext';

import styles from './App.module.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const AgendaPage = lazy(() => import('./pages/AgendaPage'));
const MusicaPage = lazy(() => import('./pages/MusicaPage'));
const VideosPage = lazy(() => import('./pages/VideosPage'));
const SobrePage = lazy(() => import('./pages/SobrePage'));
const MidiaKitPage = lazy(() => import('./pages/MidiaKitPage'));

/**
 * Estado de espera do chunk da rota. `role="status"` faz leitores de tela
 * anunciarem a troca; a altura mínima evita o rodapé subir e descer entre uma
 * rota e outra.
 */
function RouteFallback(): JSX.Element {
  return (
    <div className={styles.routeFallback} role="status">
      Carregando…
    </div>
  );
}

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <PlayerProvider>
        <AppLayout>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/agenda" element={<AgendaPage />} />
              <Route path="/musica" element={<MusicaPage />} />
              <Route path="/videos" element={<VideosPage />} />
              <Route path="/sobre" element={<SobrePage />} />
              <Route path="/midia-kit" element={<MidiaKitPage />} />
            </Routes>
          </Suspense>
        </AppLayout>
      </PlayerProvider>
    </BrowserRouter>
  );
}
