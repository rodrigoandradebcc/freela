import { useEffect, useRef, type JSX } from 'react';

import styles from './ReelLightbox.module.css';

export interface ReelLightboxProps {
  title: string;
  url: string;
  onClose: () => void;
}

function embedUrl(postUrl: string): string {
  return `${postUrl.endsWith('/') ? postUrl.slice(0, -1) : postUrl}/embed/`;
}

export function ReelLightbox({ title, url, onClose }: ReelLightboxProps): JSX.Element {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.showModal();

    return () => {
      if (dialog.open) dialog.close();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-label={title}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current?.close();
      }}
    >
      <div className={styles.panel}>
        <button
          type="button"
          className={styles.close}
          aria-label="Fechar"
          onClick={() => dialogRef.current?.close()}
        >
          ✕
        </button>

        <iframe
          className={styles.frame}
          src={embedUrl(url)}
          title={title}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />

        <a className={styles.external} href={url} target="_blank" rel="noopener noreferrer">
          Ver no Instagram ↗
        </a>
      </div>
    </dialog>
  );
}
