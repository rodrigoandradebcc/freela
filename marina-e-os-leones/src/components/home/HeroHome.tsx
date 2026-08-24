/**
 * HeroHome — bloco de abertura da Home (tela 1 do design).
 *
 * Sem props: todo o conteúdo é fixo e vem de `@/data/site` (`HERO`,
 * `HOME_STATS`) e do manifesto de imagens. O único estado é o do player
 * global, para o botão OUVIR/PAUSAR.
 *
 * Layout mobile-first: coluna única (texto → imagem) e, a partir de 1024px,
 * duas colunas lado a lado com a imagem esticando na altura do texto.
 *
 * DECISÃO DE RAIO DA IMAGEM
 * -------------------------
 * Mobile: os quatro cantos arredondados (`--radius-lg`). A imagem ali é um
 * bloco solto dentro do padding da página; arredondar só um lado deixaria os
 * cantos retos "flutuando" no meio da tela, o que só faz sentido quando a
 * imagem encosta na borda do viewport.
 * Desktop (>= 1024px): só `border-top-left-radius`/`border-bottom-left-radius`,
 * porque nessa largura a coluna da direita é feita para sangrar até a borda da
 * tela (o container da página é quem faz o full-bleed) — os cantos da direita
 * ficam retos porque saem de cena.
 */

import type { JSX } from 'react';

import { images } from '@/assets/images';
import { PauseIcon, PlayIcon } from '@/components/icons';
import { AppImage } from '@/components/ui/AppImage';
import { Button } from '@/components/ui/Button';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Stat } from '@/components/ui/Stat';
import { HERO, HOME_STATS } from '@/data/site';
import { usePlayer } from '@/player/PlayerContext';

import styles from './HeroHome.module.css';

/**
 * `HERO.titleParts` é uma tupla de 5 pedaços vinda do `<h1>` do design:
 * ["O som do", "Norte que faz", "a pista ", "rugir", "."] — os três primeiros
 * abrem linhas; os dois últimos completam a terceira linha, com "rugir" em
 * laranja. Aqui o display é grande, então `--color-accent` puro não tem
 * problema de contraste.
 */
const [titleLineOne, titleLineTwo, titleLineThree, titleAccent, titleTail] = HERO.titleParts;

export function HeroHome(): JSX.Element {
  const { playing, toggle } = usePlayer();

  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <SectionEyebrow>{HERO.eyebrow}</SectionEyebrow>

        <h1 className={styles.title}>
          <span className={styles.titleLine}>{titleLineOne}</span>
          <span className={styles.titleLine}>{titleLineTwo}</span>
          <span className={styles.titleLine}>
            {titleLineThree}
            <span className={styles.titleAccent}>{titleAccent}</span>
            {titleTail}
          </span>
        </h1>

        <p className={styles.paragraph}>{HERO.paragraph}</p>

        <div className={styles.actions}>
          <Button variant="dark" as="link" to="/agenda">
            VER AGENDA
          </Button>
          <Button
            variant="outline"
            icon={playing ? <PauseIcon /> : <PlayIcon />}
            onClick={toggle}
          >
            {playing ? 'PAUSAR' : 'OUVIR'}
          </Button>
        </div>

        <div className={styles.stats}>
          {HOME_STATS.map((stat) => (
            <Stat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>

      <div className={styles.mediaColumn}>
        <div className={styles.media}>
          <AppImage
            image={images.heroHome}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={styles.heroImage}
            cinematic
          />
        </div>

        {/* Card flutuante sobreposto à foto. Fica FORA de `.media` (que tem
            overflow hidden) para não ser cortado pelos cantos arredondados.
            `alt=""` porque a legenda do `<figcaption>` já é o texto acessível
            da miniatura — repetir o alt do manifesto só duplicaria a leitura. */}
        <figure className={styles.showCard}>
          <AppImage
            image={images.heroHomeShowCard}
            alt=""
            cinematic
            className={styles.showCardImage}
          />
          <figcaption className={styles.showCardCaption}>
            AO VIVO · CIRCUITO REGGAE AMAZÔNIA
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
