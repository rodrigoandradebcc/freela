/**
 * Tela 6 · Mídia kit — página de imprensa e booking.
 *
 * Três seções, na ordem do design:
 *   1. Hero — eyebrow + h1 + parágrafo + dois CTAs, com a foto grande ao lado
 *      (desktop) e um card flutuante com o número de músicos em palco.
 *      Sem Blob: esta é a única tela do design que não usa a mancha decorativa.
 *   2. "#recursos" — grade dos quatro ResourceCard (release, rider, fotos, logos).
 *   3. Painel escuro dividido — "EM NÚMEROS" à esquerda, card claro com o
 *      formulário "Solicitar proposta" à direita.
 *
 * O <main id="main-content"> é do AppLayout: esta página devolve um <div>.
 * O Header entra na variante 'press' sozinho (o AppLayout decide pelo pathname).
 *
 * DOIS CONTRATOS DE ÂNCORA QUE ESTA PÁGINA PRECISA HONRAR
 * ------------------------------------------------------
 *   #contato  — o CTA "Sob solicitação" do ResourceCard faz
 *               `document.getElementById('contato')?.scrollIntoView()`. O id
 *               mora no wrapper do <ContactForm variant="full" /> aqui embaixo;
 *               sem ele o botão dos cards vira um clique morto.
 *   #recursos — alvo do CTA principal do hero. Não existe um .zip do mídia kit
 *               completo, então o botão leva à grade de arquivos em vez de
 *               prometer um download que não acontece.
 * Os dois alvos têm `scroll-margin-top` (`.anchorTarget`) porque o Header é
 * sticky e cobriria o topo do elemento no fim da rolagem.
 *
 * DESVIO DO PLANO (documentado de propósito): o botão "VER RELEASE ONLINE"
 * estava previsto como decorativo, sem destino. Como `public/release.pdf`
 * existe de verdade (é o mesmo arquivo do card "Release"), ele abre o PDF em
 * nova aba — um <button> sem ação é um alvo de teclado que não faz nada.
 */

import type { JSX } from 'react';

import { images, releasePdfUrl } from '@/assets/images';
import { DownloadIcon } from '@/components/icons';
import { ContactForm } from '@/components/shared/ContactForm';
import { ResourceCard } from '@/components/shared/ResourceCard';
import { AppImage } from '@/components/ui/AppImage';
import { Button } from '@/components/ui/Button';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Stat } from '@/components/ui/Stat';
import { MEDIA_KIT_DOWNLOAD_LABEL, resources } from '@/data/mediaKit';
import { CONTACT, PRESS_STATS } from '@/data/site';
import { usePageTitle } from '@/hooks/usePageTitle';

import styles from './MidiaKitPage.module.css';

export default function MidiaKitPage(): JSX.Element {
  usePageTitle('Mídia Kit');

  return (
    <div className={styles.page}>
      {/* --- 1. Hero ------------------------------------------------------ */}
      <section className={`${styles.section} ${styles.hero}`} aria-labelledby="midia-kit-titulo">
        <div className={styles.heroCopy}>
          <SectionEyebrow>PRESS &amp; BOOKING</SectionEyebrow>

          <h1 className={styles.heroTitle} id="midia-kit-titulo">
            Tudo que a sua produção precisa.
          </h1>

          <p className={styles.heroParagraph}>
            Release atualizado, rider técnico, mapa de palco, fotos em alta resolução e logos em
            vetor. Um único pacote, sempre na versão mais recente.
          </p>

          <div className={styles.heroActions}>
            <Button variant="orange" as="a" href="#recursos" icon={<DownloadIcon size={18} />}>
              {MEDIA_KIT_DOWNLOAD_LABEL}
              <span className="visually-hidden"> — ir para a lista de arquivos</span>
            </Button>

            <Button
              variant="outline"
              as="a"
              href={releasePdfUrl}
              target="_blank"
              rel="noreferrer"
            >
              VER RELEASE ONLINE
              <span className="visually-hidden"> (PDF, abre em nova aba)</span>
            </Button>
          </div>
        </div>

        <div className={styles.heroMedia}>
          <AppImage
            image={images.mediaKitHero}
            cinematic
            priority
            className={styles.heroImage}
          />

          {/* Card flutuante sobreposto à foto. Ver o comentário de posição no
              CSS: no mobile ele fica DENTRO da foto; só a partir de 1024px
              sangra para fora, onde há folga de container para isso. */}
          <div className={styles.heroFloatingCard}>
            <Stat value="4" label="MÚSICOS EM PALCO" />
          </div>
        </div>
      </section>

      {/* --- 2. Recursos --------------------------------------------------- */}
      <section
        className={`${styles.section} ${styles.anchorTarget}`}
        id="recursos"
        aria-labelledby="midia-kit-recursos"
      >
        {/* O design não mostra título aqui (a grade fala por si), mas a página
            precisa do nível h2 para quem navega por headings. */}
        <h2 className="visually-hidden" id="midia-kit-recursos">
          Recursos disponíveis
        </h2>

        <div className={styles.resourcesGrid}>
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </section>

      {/* --- 3. Números + proposta ----------------------------------------- */}
      <section className={styles.section} aria-labelledby="midia-kit-proposta">
        <h2 className="visually-hidden" id="midia-kit-proposta">
          A banda em números e contato da produção
        </h2>

        <div className={styles.pressPanel}>
          <div className={styles.numbersColumn}>
            <SectionEyebrow className={styles.eyebrowOnDark}>EM NÚMEROS</SectionEyebrow>

            <div className={styles.pressStats}>
              {PRESS_STATS.map((stat) => (
                <Stat key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          <div className={styles.contactCard}>
            <h3 className={styles.contactTitle}>Solicitar proposta</h3>

            {/* id="contato" — alvo do scrollIntoView dos ResourceCard. */}
            <div className={`${styles.formAnchor} ${styles.anchorTarget}`} id="contato">
              <ContactForm variant="full" />
            </div>

            <p className={styles.contactNote}>Resposta em até 24h · {CONTACT.phone}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
