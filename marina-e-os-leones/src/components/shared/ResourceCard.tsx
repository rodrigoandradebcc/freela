/**
 * ResourceCard — um item da grade de recursos do mídia kit (release, rider,
 * fotos, logos).
 *
 * Dois CTAs bem diferentes, de propósito:
 *   `href`      → <a download> de verdade, pill sólida (o arquivo baixa agora).
 *   `onRequest` → <button> em contorno que rola até o formulário #contato
 *                 ("Sob solicitação" — ninguém baixa nada clicando aqui).
 * A diferença sólido/contorno existe para que o usuário não espere um download
 * ao clicar num botão que só o leva a um formulário.
 */

import type { JSX } from 'react';

import { DownloadIcon, iconByName } from '@/components/icons';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import type { Resource } from '@/types';

import styles from './ResourceCard.module.css';

export interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps): JSX.Element {
  const prefersReducedMotion = usePrefersReducedMotion();
  const Icon = iconByName[resource.icon];

  const handleRequest = (): void => {
    document.getElementById('contato')?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <div className={styles.card}>
      <span className={styles.iconCircle}>
        <Icon size={22} />
      </span>

      <h3 className={styles.title}>{resource.title}</h3>
      <p className={styles.description}>{resource.description}</p>

      {resource.href ? (
        <a className={`${styles.cta} ${styles.ctaDownload}`} href={resource.href} download>
          <DownloadIcon size={16} />
          BAIXAR
          <span className="visually-hidden">{resource.title}</span>
        </a>
      ) : null}

      {!resource.href && resource.onRequest ? (
        <button
          className={`${styles.cta} ${styles.ctaRequest}`}
          type="button"
          onClick={handleRequest}
        >
          Sob solicitação
          <span className="visually-hidden">— {resource.title}: ir para o formulário de contato</span>
        </button>
      ) : null}
    </div>
  );
}
