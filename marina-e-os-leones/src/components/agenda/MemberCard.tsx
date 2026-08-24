/**
 * MemberCard — foto + nome + instrumento de um integrante da banda.
 *
 * Recebe os campos soltos (não o `Member` inteiro) para poder ser usado também
 * com dados montados na página; quem renderiza a lista faz
 * `<MemberCard key={m.id} name={m.name} role={m.role} image={m.image} />`.
 *
 * `role` aqui é o PAPEL MUSICAL ("VOZ E VIOLÃO"), não o atributo ARIA — nada é
 * repassado para o DOM como `role`.
 *
 * O nome usa `<h3>`: padrão do site é h1 (página) → h2 (seção) → h3 (card).
 */

import type { JSX } from 'react';

import { SocialInstagramIcon } from '@/components/icons';
import { AppImage } from '@/components/ui/AppImage';
import type { ImageMeta } from '@/types';

import styles from './MemberCard.module.css';

export interface MemberCardProps {
  name: string;
  role: string;
  image: ImageMeta;
  instagram?: string;
  instagramHandle?: string;
  objectPosition?: string;
}

export function MemberCard({
  name,
  role,
  image,
  instagram,
  instagramHandle,
  objectPosition,
}: MemberCardProps): JSX.Element {
  return (
    <article className={styles.card}>
      <AppImage
        image={image}
        cinematic
        className={styles.photo}
        style={objectPosition ? { objectPosition } : undefined}
      />
      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>

        {instagram ? (
          <a
            className={styles.instagram}
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram de ${name}`}
          >
            <SocialInstagramIcon size={14} />
            {instagramHandle ?? 'Instagram'}
          </a>
        ) : null}
      </div>
    </article>
  );
}
