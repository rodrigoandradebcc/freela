/**
 * HomePage — tela 1 do design: hero, próximo show, prévia da agenda, música,
 * vídeos, prévia do "Sobre" e prévia do mídia kit.
 *
 * O <main id="main-content"> é do AppLayout: esta página devolve um <div> e
 * organiza o conteúdo em <section>s.
 *
 * PAPÉIS
 * ------
 * A página é só composição + layout: nenhum dado é escrito aqui. Textos e
 * listas vêm de `@/data/*`; a aparência de cada peça vem dos componentes
 * (`ShowCard`, `VideoCard`, `NowPlayingCard`...). O que sobra para o CSS module
 * desta página é o container (max-width + padding horizontal padrão) e as
 * grades que posicionam essas peças.
 *
 * DADOS COM IMAGEM
 * ----------------
 * `@/data/videos` guarda `imageKey: string` em vez de `ImageMeta` para não se
 * acoplar ao manifesto (ver o cabeçalho daquele arquivo). O join
 * `imageKey` → `images[key]` acontece aqui, em `resolveImage`.
 */

import type { JSX } from "react";

import { images } from "@/assets/images";
import { ShowCard } from "@/components/agenda/ShowCard";
import { HeroHome } from "@/components/home/HeroHome";
import { NextShowBanner } from "@/components/home/NextShowBanner";
import { DownloadIcon } from "@/components/icons";
import { NowPlayingCard } from "@/components/music/NowPlayingCard";
import { TrackList } from "@/components/music/TrackList";
import { ContactForm } from "@/components/shared/ContactForm";
import { AppImage } from "@/components/ui/AppImage";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TexturedPanel } from "@/components/ui/TexturedPanel";
import { ReelCard } from "@/components/video/ReelCard";
import { VideoCard } from "@/components/video/VideoCard";
import { MEDIA_KIT_HOME_CTA_LABEL } from "@/data/mediaKit";
import { showsPreview } from "@/data/shows";
import { ABOUT_TEXT, INSTAGRAM_URL, OPENED_FOR } from "@/data/site";
import {
  homeReels,
  homeVideoPreviewCaption,
  homeVideoPreviewImageKey,
  homeVideoPreviewTitle,
} from "@/data/videos";
import { usePageTitle } from "@/hooks/usePageTitle";
import type { ImageMeta } from "@/types";

import styles from "./HomePage.module.css";

/** Resolve a `imageKey` de um dado contra o manifesto de imagens. */
function resolveImage(key: string): ImageMeta {
  return images[key as keyof typeof images];
}

export default function HomePage(): JSX.Element {
  usePageTitle("Início");

  return (
    <div className={styles.page}>
      {/* HeroHome não tem padding próprio: quem o posiciona é a página. */}
      <div className={styles.heroSection}>
        <HeroHome />
      </div>

      <div className={styles.bannerSection}>
        <NextShowBanner />
      </div>

      {/* --- prévia da agenda ------------------------------------------- */}
      <section className={styles.section} aria-labelledby="home-agenda-title">
        <header className={styles.sectionHeader}>
          <div className={styles.sectionHeading}>
            <SectionEyebrow>AGENDA 2026</SectionEyebrow>
            <h2 className={styles.sectionTitle} id="home-agenda-title">
              Onde a gente toca
            </h2>
          </div>

          <Button variant="outline" as="link" to="/agenda">
            TODAS AS DATAS
          </Button>
        </header>

        <div className={styles.showList}>
          {showsPreview.map((show, index) => (
            <Reveal key={show.id} index={index}>
              <ShowCard show={show} variant="preview" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* --- música ------------------------------------------------------ */}
      <section
        className={styles.section}
        aria-labelledby="home-repertoire-title"
      >
        <div className={styles.musicGrid}>
          <Reveal>
            <NowPlayingCard variant="home" />
          </Reveal>

          <div className={styles.repertoire}>
            <h2 className={styles.sectionTitle} id="home-repertoire-title">
              Repertório
            </h2>
            <TrackList dense />
          </div>
        </div>
      </section>

      {/* --- vídeos ------------------------------------------------------ */}
      <section className={styles.section} aria-labelledby="home-videos-title">
        <header className={styles.videosHeader}>
          <h2 className={styles.sectionTitle} id="home-videos-title">
            Vídeos
          </h2>

          <Button variant="outline" as="a" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            VER TODOS OS REELS
          </Button>
        </header>

        <div className={styles.videoGrid}>
          <Reveal>
            <VideoCard
              size="large"
              title={homeVideoPreviewTitle}
              description={homeVideoPreviewCaption}
              image={resolveImage(homeVideoPreviewImageKey)}
              href="/videos"
            />
          </Reveal>

          {homeReels.map((reel, index) => (
            <Reveal key={reel.id} index={index + 1}>
              <ReelCard
                title={reel.title}
                image={resolveImage(reel.imageKey)}
                href={reel.url}
                height="300px"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* --- prévia do "Sobre" -------------------------------------------- */}
      <section className={styles.section} aria-labelledby="home-about-title">
        <div className={styles.aboutGrid}>
          <AppImage
            image={images.aboutPreview}
            cinematic
            sizes="(min-width: 1024px) 45vw, 100vw"
            className={styles.aboutImage}
          />

          <div className={styles.aboutCopy}>
            <SectionEyebrow>{ABOUT_TEXT.eyebrowHome}</SectionEyebrow>

            <h2 className={styles.sectionTitle} id="home-about-title">
              {ABOUT_TEXT.titleHome}
            </h2>

            {ABOUT_TEXT.paragraphsHome.map((paragraph) => (
              <p key={paragraph} className={styles.aboutParagraph}>
                {paragraph}
              </p>
            ))}

            {/* DECISÃO: pills próprias em vez de <Tag>. `Tag` exige um `tone`
                semântico (orange/green/gray/peach, usado para estado de show e
                estilo musical); nome de artista não carrega estado nenhum, e
                escolher um tom aqui daria significado a uma cor que não tem.
                São chips decorativos — o texto que importa está no parágrafo
                acima, que já cita os três nomes. */}
            <div className={styles.artistTags}>
              {OPENED_FOR.map((artist) => (
                <span key={artist} className={styles.artistTag}>
                  {artist}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- prévia do mídia kit ------------------------------------------ */}
      <section
        className={styles.section}
        aria-labelledby="home-media-kit-title"
      >
        <div className={styles.mediaKitGrid}>
          <Reveal>
            <TexturedPanel tone="orange" className={styles.mediaKitPanel}>
              <SectionEyebrow className={styles.panelEyebrow}>
                PARA CONTRATANTES
              </SectionEyebrow>

              <h2 className={styles.panelTitle} id="home-media-kit-title">
                Mídia kit &amp; contratação
              </h2>

              <p className={styles.panelText}>
                Release, rider técnico, mapa de palco, fotos em alta e logos:
                tudo em um pacote único, pronto para a sua produção.
              </p>

              {/* Os três botões levam à página Mídia kit, onde ficam os arquivos
                reais e o `href` do release — nada de duplicar lógica de
                download na Home. */}
              <div className={styles.panelActions}>
                <Button
                  variant="dark"
                  as="link"
                  to="/midia-kit"
                  icon={<DownloadIcon />}
                >
                  {MEDIA_KIT_HOME_CTA_LABEL}
                </Button>

                <Button
                  variant="outline"
                  as="link"
                  to="/midia-kit"
                  className={styles.panelOutlineButton}
                >
                  RIDER TÉCNICO (PDF)
                </Button>

                <Button
                  variant="outline"
                  as="link"
                  to="/midia-kit"
                  className={styles.panelOutlineButton}
                >
                  FOTOS EM ALTA
                </Button>
              </div>
            </TexturedPanel>
          </Reveal>

          <Reveal index={1}>
            <div className={styles.contactCard}>
              <h3 className={styles.contactTitle}>Fale com a produção</h3>
              <ContactForm variant="quick" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
