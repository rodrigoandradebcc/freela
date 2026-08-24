/**
 * Footer — rodapé escuro comum a todas as rotas.
 *
 * Reúne a marca, a linha de contato (`CONTACT`) e as redes (`SOCIAL_LINKS`),
 * todos vindos de `@/data/site` — nenhum texto de contato é escrito aqui.
 *
 * Também é o lugar do link para /sobre: essa rota não tem aba na BottomTabBar,
 * então sem este link ela ficaria inalcançável no mobile.
 *
 * O `padding-bottom` grande do mobile (ver Footer.module.css) é o que impede a
 * BottomTabBar fixa de cobrir o fim da página.
 */

import type { JSX } from 'react';
import { Link } from 'react-router';

import { images } from '@/assets/images';
import { iconByName } from '@/components/icons';
import { AppImage } from '@/components/ui/AppImage';
import { CONTACT, SOCIAL_LINKS } from '@/data/site';

import styles from './Footer.module.css';

export function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.identity}>
          <div className={styles.brand}>
            <AppImage image={images.logoMark} alt="" className={styles.brandMark} />
            <span className={styles.brandName}>Marina &amp; Os Leones</span>
          </div>
          <p className={styles.contact}>
            {CONTACT.city} · {CONTACT.phone} · {CONTACT.email}
          </p>
        </div>

        <div className={styles.side}>
          <div className={styles.socials}>
            {SOCIAL_LINKS.map((social) => {
              const Icon = iconByName[social.icon];
              return (
                <a
                  key={social.id}
                  href={social.href}
                  className={styles.social}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={18} />
                  {social.label}
                </a>
              );
            })}
          </div>

          <div className={styles.meta}>
            <Link to="/sobre" className={styles.aboutLink}>
              Sobre a banda
            </Link>
            <span>© {new Date().getFullYear()} Marina &amp; Os Leones</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
