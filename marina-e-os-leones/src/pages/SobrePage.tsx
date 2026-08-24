/**
 * Tela 5 · Sobre — história da banda, formação e trajetória.
 *
 * Três seções, na ordem do design:
 *   1. Hero — eyebrow + h1 + parágrafos, com a foto grande ao lado (desktop)
 *      e um Blob verde decorativo sangrando pelo canto superior direito.
 *   2. "Quem sobe no palco" — grade de MemberCard + nota sobre as fotos.
 *   3. "Trajetória" — painel verde texturizado com três cartões translúcidos.
 *
 * O <main id="main-content"> é do AppLayout: esta página devolve um <div>.
 *
 * As imagens dos integrantes moram no manifesto (`src/assets/images.ts`) e os
 * dados de formação em `src/data/members.ts`, que só carrega a `imageKey` —
 * o join entre os dois acontece aqui, na camada de página.
 */

import type { JSX } from 'react';

import { images } from '@/assets/images';
import { MemberCard } from '@/components/agenda/MemberCard';
import { AppImage } from '@/components/ui/AppImage';
import { Blob } from '@/components/ui/Blob';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { TexturedPanel } from '@/components/ui/TexturedPanel';
import { ABOUT_TEXT, TRAJECTORY } from '@/data/site';
import { members } from '@/data/members';
import { usePageTitle } from '@/hooks/usePageTitle';

import styles from './SobrePage.module.css';

export default function SobrePage(): JSX.Element {
  usePageTitle('Sobre');

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Blob tone="green" className={styles.heroBlob} />

        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <SectionEyebrow>{ABOUT_TEXT.eyebrowPage}</SectionEyebrow>
            <h1 className={styles.heroTitle}>{ABOUT_TEXT.titlePage}</h1>
            {ABOUT_TEXT.paragraphsPage.map((paragraph) => (
              <p key={paragraph} className={styles.heroParagraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className={styles.heroFigure}>
            <AppImage
              image={images.aboutHero}
              cinematic
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.members} aria-labelledby="formacao">
        <div className={styles.sectionInner}>
          <h2 id="formacao" className={styles.sectionTitle}>
            Quem sobe no palco
          </h2>

          <ul className={styles.memberGrid}>
            {members.map((member) => (
              <li key={member.id}>
                <MemberCard
                  name={member.name}
                  role={member.role}
                  image={images[member.imageKey as keyof typeof images]}
                  instagram={member.instagram}
                  instagramHandle={member.instagramHandle}
                  objectPosition={member.objectPosition}
                />
              </li>
            ))}
          </ul>

          <p className={styles.membersNote}>
            Fotos ao vivo no Bosque Shopping (13.09.2025). Confirme quem toca o quê e eu troco os
            instrumentos.
          </p>
        </div>
      </section>

      <section className={styles.trajectory} aria-labelledby="trajetoria">
        <div className={styles.sectionInner}>
          <TexturedPanel tone="green" className={styles.trajectoryPanel}>
            <SectionEyebrow className={styles.trajectoryEyebrow}>Trajetória</SectionEyebrow>

            <h2 id="trajetoria" className={styles.trajectoryTitle}>
              A força do som do Norte para todo o Brasil
            </h2>

            <div className={styles.trajectoryGrid}>
              {TRAJECTORY.map((item) => (
                <div key={item.title} className={styles.trajectoryCard}>
                  <h3 className={styles.trajectoryCardTitle}>{item.title}</h3>
                  <p className={styles.trajectoryCardText}>{item.description}</p>
                </div>
              ))}
            </div>
          </TexturedPanel>
        </div>
      </section>
    </div>
  );
}
