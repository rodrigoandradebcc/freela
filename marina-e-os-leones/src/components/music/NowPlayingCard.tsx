/**
 * NowPlayingCard — card escuro "TOCANDO AGORA" do player mock.
 *
 * Duas variantes da MESMA marcação (só muda escala e a lista de plataformas):
 *   'home' → versão compacta na Home, com as quatro plataformas principais;
 *   'full' → versão grande, sozinha no topo da página Música.
 *
 * O símbolo da marca aparece duas vezes: como marca d'água gigante ao fundo
 * (decorativa, `alt=""`, `pointer-events: none`) e dentro do círculo marrom ao
 * lado do título — os dois vêm do manifesto `images.logoMark`.
 *
 * O título da faixa é um `<p>`, não um heading: este card é montado dentro de
 * páginas que não conhecemos daqui, e um `<h3>` fixo poderia furar a hierarquia
 * de headings delas. A seção que usa o card provê o heading.
 */

import type { JSX } from 'react';

import { images } from '@/assets/images';
import { PauseIcon, PlayIcon } from '@/components/icons';
import { AppImage } from '@/components/ui/AppImage';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { PLATFORMS } from '@/data/tracks';
import type { PlatformLink } from '@/types';
import { usePlayer } from '@/player/PlayerContext';

import { PlatformLinks } from './PlatformLinks';
import styles from './NowPlayingCard.module.css';

export type NowPlayingCardVariant = 'home' | 'full';

export interface NowPlayingCardProps {
  variant: NowPlayingCardVariant;
  className?: string;
}

/** Home: Spotify, Apple Music, Deezer e YouTube Music (sem Tidal, como no design). */
const HOME_PLATFORMS = PLATFORMS.slice(0, 4);

/**
 * As pills do player apontam para a FAIXA que está tocando, não para o perfil
 * da banda (esse é o destino do bloco "ouça na sua plataforma", em outra
 * seção). Por isso a lista é montada a cada faixa, e não é uma constante.
 *
 * O `ariaLabel` acrescenta o nome da faixa sem tirar o texto visível da pill
 * de dentro do rótulo — exigência de "Label in Name" (ver PlatformLinks).
 */
function platformsFor(track: { title: string; url: string }, isFull: boolean): PlatformLink[] {
  if (isFull) {
    // Página Música: a lista completa já aparece embaixo; aqui só o atalho.
    return [
      {
        name: 'ABRIR NO SPOTIFY',
        url: track.url,
        ariaLabel: `Abrir no Spotify: ${track.title}`,
      },
    ];
  }

  return HOME_PLATFORMS.map((platform) =>
    platform.name === 'SPOTIFY'
      ? { ...platform, url: track.url, ariaLabel: `Ouvir no Spotify: ${track.title}` }
      : platform,
  );
}

export function NowPlayingCard({ variant, className }: NowPlayingCardProps): JSX.Element {
  const { currentTrack, playing, progressPct, currentTimeLabel, toggle } = usePlayer();

  const isFull = variant === 'full';
  const iconSize = isFull ? 26 : 22;
  const classes = [styles.card, styles[variant], className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      <AppImage image={images.logoMark} alt="" className={styles.watermark} />

      <div className={styles.content}>
        <SectionEyebrow className={styles.eyebrow}>TOCANDO AGORA</SectionEyebrow>

        <div className={styles.main}>
          <span className={styles.markCircle}>
            <AppImage image={images.logoMark} alt="" className={styles.markImage} />
          </span>

          <div className={styles.meta}>
            <p className={styles.title}>{currentTrack.title}</p>
            <p className={styles.album}>{currentTrack.album}</p>
          </div>

          <button
            type="button"
            className={styles.playButton}
            aria-label={`${playing ? 'Pausar' : 'Tocar'} ${currentTrack.title}`}
            onClick={toggle}
          >
            {playing ? <PauseIcon size={iconSize} /> : <PlayIcon size={iconSize} />}
          </button>
        </div>

        <div className={styles.progress}>
          <div
            className={styles.progressTrack}
            role="progressbar"
            aria-label={`Progresso de ${currentTrack.title}`}
            aria-valuenow={progressPct}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuetext={`${currentTimeLabel} de ${currentTrack.durationLabel}`}
          >
            {/* Sem transition: o valor muda a cada tick de 1s e animar a largura
                só produziria arrasto/jank. Ver NowPlayingCard.module.css. */}
            <div className={styles.progressFill} style={{ width: `${progressPct}%` }} />
          </div>

          <p className={styles.times}>
            <span>{currentTimeLabel}</span>
            <span>{currentTrack.durationLabel}</span>
          </p>
        </div>

        <PlatformLinks
          platforms={platformsFor(currentTrack, isFull)}
          layout="dark"
          className={styles.platforms}
        />
      </div>
    </section>
  );
}
