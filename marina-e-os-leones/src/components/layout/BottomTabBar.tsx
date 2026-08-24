/**
 * BottomTabBar — navegação principal do mobile, fixa no rodapé.
 *
 * Só existe abaixo de 1024px (o CSS a esconde acima disso): no desktop quem
 * navega é a nav do Header. É a contrapartida do header mobile enxuto — as
 * cinco rotas de maior uso ficam ao alcance do polegar.
 *
 * /sobre NÃO tem aba: são cinco alvos num viewport estreito e "Sobre" é a rota
 * menos acessada. Ela continua alcançável pelo link no Footer e pela nav do
 * desktop. Consequência esperada: em /sobre nenhuma aba fica destacada.
 *
 * A aba "/" usa `end` para casar apenas com a raiz — sem isso qualquer rota a
 * deixaria ativa (o NavLink já trata "/" como caso especial, mas o `end`
 * explícito documenta a intenção).
 */

import type { JSX } from 'react';
import { NavLink } from 'react-router';

import {
  TabAgendaIcon,
  TabBookIcon,
  TabHomeIcon,
  TabMusicIcon,
  TabVideoIcon,
  type IconComponent,
} from '@/components/icons';

import styles from './BottomTabBar.module.css';

interface TabItem {
  to: string;
  label: string;
  Icon: IconComponent;
  /** Só a raiz precisa de correspondência exata. */
  end?: boolean;
}

const TABS: readonly TabItem[] = [
  { to: '/', label: 'Início', Icon: TabHomeIcon, end: true },
  { to: '/agenda', label: 'Agenda', Icon: TabAgendaIcon },
  { to: '/musica', label: 'Música', Icon: TabMusicIcon },
  { to: '/videos', label: 'Vídeos', Icon: TabVideoIcon },
  { to: '/midia-kit', label: 'Contratar', Icon: TabBookIcon },
];

const tabClass = ({ isActive }: { isActive: boolean }): string =>
  isActive ? `${styles.tab} ${styles.tabActive}` : styles.tab;

export function BottomTabBar(): JSX.Element {
  return (
    <nav aria-label="Navegação" className={styles.tabbar}>
      {TABS.map(({ to, label, Icon, end }) => (
        <NavLink key={to} to={to} end={end} className={tabClass}>
          {/* O ícone é decorativo (aria-hidden vem do próprio componente);
              o nome acessível da aba é o texto visível ao lado. */}
          <Icon size={20} />
          <span className={styles.label}>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
