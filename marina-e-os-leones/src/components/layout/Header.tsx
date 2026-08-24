/**
 * Header — barra superior fixa (sticky) presente em todas as rotas.
 *
 * DUAS VARIANTES
 *   'default' (padrão) → logo + navegação + CTA "CONTRATAR A BANDA".
 *   'press'            → logo + CTA "ÁREA DE IMPRENSA", sem navegação.
 *                        Usada só na rota /midia-kit, onde o visitante é
 *                        contratante/imprensa e a barra vira um atalho único.
 *   Quem escolhe a variante é o AppLayout, a partir do pathname.
 *
 * RESPONSIVO (mobile-first)
 *   Abaixo de 1024px o header carrega só logo + CTA curto: a navegação por
 *   rota mora na BottomTabBar. A partir de 1024px a nav aparece e o CTA volta
 *   ao texto longo. Os dois lados são wrappers distintos no DOM (e não um
 *   único bloco com `display` alternado nos filhos) para que o `display:none`
 *   não dependa da ordem de injeção dos CSS modules.
 */

import type { JSX } from 'react';
import { Link, NavLink } from 'react-router';

import { images } from '@/assets/images';
import { AppImage } from '@/components/ui/AppImage';
import { Button } from '@/components/ui/Button';

import styles from './Header.module.css';

export type HeaderVariant = 'default' | 'press';

export interface HeaderProps {
  variant?: HeaderVariant;
}

const NAV_ITEMS = [
  { to: '/agenda', label: 'Agenda' },
  { to: '/musica', label: 'Música' },
  { to: '/videos', label: 'Vídeos' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/midia-kit', label: 'Mídia kit' },
] as const;

/** `className` do NavLink: acrescenta o modificador ativo à classe base. */
const navLinkClass = ({ isActive }: { isActive: boolean }): string =>
  isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;

export function Header({ variant = 'default' }: HeaderProps): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Um único link para a Home envolve símbolo + logotipo: os dois formam
            uma marca só, então também devem formar um só alvo de clique. As
            imagens vão com alt="" e o nome acessível vem do aria-label. */}
        <Link to="/" className={styles.logo} aria-label="Marina & Os Leones — ir para o início">
          <AppImage image={images.logoMark} alt="" priority className={styles.logoMark} />
          <AppImage image={images.logoWordmark} alt="" priority className={styles.logoWordmark} />
        </Link>

        {variant === 'press' ? (
          /* `href="#recursos"` e não `href="#"`: a variante 'press' só existe
             em /midia-kit, e um link para "#" seria um alvo de teclado que
             rola a página para o topo sem levar a lugar nenhum. #recursos é a
             grade de arquivos daquela página — a "área de imprensa" de fato.
             O alvo já tem `scroll-margin-top` para não ficar sob este header
             sticky (ver `.anchorTarget` em MidiaKitPage.module.css). */
          <Button variant="dark" as="a" href="#recursos">
            Área de imprensa
          </Button>
        ) : (
          <>
            <div className={styles.mobileActions}>
              <Button variant="orange" as="link" to="/midia-kit" size="md">
                Contratar
              </Button>
            </div>

            <div className={styles.desktopActions}>
              <nav aria-label="Principal" className={styles.nav}>
                {NAV_ITEMS.map((item) => (
                  <NavLink key={item.to} to={item.to} className={navLinkClass}>
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <Button variant="orange" as="link" to="/midia-kit" size="md">
                Contratar a banda
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
