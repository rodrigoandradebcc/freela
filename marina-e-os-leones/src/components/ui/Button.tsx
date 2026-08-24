/**
 * Button — pill de ação usada em CTAs, navegação e links do rodapé.
 *
 * Renderiza três elementos diferentes com a MESMA aparência:
 *   as="button" (default) → <button>          ação na própria página
 *   as="link"             → <Link to>         navegação interna (react-router)
 *   as="a"                → <a href>          link externo / download
 *
 * `react-router` v7+ unificou os pacotes: importe `Link` de 'react-router',
 * nunca de 'react-router-dom'.
 *
 * Acessibilidade: o `:focus-visible` global (global.css) já cobre os três
 * elementos — não remova outline aqui. Quando o conteúdo for só um ícone,
 * passe `aria-label` (vai direto para o elemento renderizado via `...rest`).
 */

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, JSX, ReactNode } from 'react';
import { Link } from 'react-router';

import styles from './Button.module.css';

export type ButtonVariant = 'dark' | 'orange' | 'outline' | 'ghost';
export type ButtonSize = 'md' | 'lg';

interface ButtonOwnProps {
  variant: ButtonVariant;
  size?: ButtonSize;
  /** Elemento renderizado. Default: 'button'. */
  as?: 'button' | 'a' | 'link';
  /** Destino interno — obrigatório quando `as="link"`. */
  to?: string;
  /** Destino externo — obrigatório quando `as="a"`. */
  href?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  children: ReactNode;
  className?: string;
}

type NativeProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof ButtonOwnProps
>;

export type ButtonProps = ButtonOwnProps & NativeProps;

export function Button({
  variant,
  size = 'md',
  as = 'button',
  to,
  href,
  icon,
  iconPosition = 'left',
  children,
  className,
  ...rest
}: ButtonProps): JSX.Element {
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ');

  const iconNode = icon ? <span className={styles.icon}>{icon}</span> : null;

  const content = (
    <>
      {iconPosition === 'left' ? iconNode : null}
      {children}
      {iconPosition === 'right' ? iconNode : null}
    </>
  );

  if (as === 'link') {
    return (
      <Link {...rest} to={to ?? ''} className={classes}>
        {content}
      </Link>
    );
  }

  if (as === 'a') {
    return (
      <a {...rest} href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button {...rest} type={rest.type ?? 'button'} className={classes}>
      {content}
    </button>
  );
}
