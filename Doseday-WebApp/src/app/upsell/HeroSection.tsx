"use client";

import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { BREAKPOINTS } from "@/@types/breakpoints";

declare global {
  interface Window {
    upsellOffer: string;
    upsellPlan: string;
    acceptUpsellURL: string;
    refuseUpsellURL: string;
    deliveryURL: string;
    oneClick: boolean;
  }
}

export default function HeroSection() {
  useEffect(() => {
    window.upsellOffer = "EKLy1uNGrX";
    window.upsellPlan = "";
    window.acceptUpsellURL = "";
    window.refuseUpsellURL = "";
    window.deliveryURL = "https://checkout.b4you.com.br/compra-realizada";
    window.oneClick = true;
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.b4you.com.br/upsell-script/production/css/style.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* 2️⃣ Estrutura principal da seção */}
      <Container component={Stack} paddingY={7} alignItems="center" gap={4}>
        <Stack alignItems="center" gap={2} alignSelf="stretch">
          <Typography
            alignSelf="stretch"
            color="#35271B"
            textAlign="center"
            fontFamily="var(--font-sf-pro-display)"
            fontSize="2.25rem"
            fontWeight="700"
            sx={{
              [BREAKPOINTS.mobile]: { fontSize: "1.75rem" },
              [BREAKPOINTS.tablet]: { fontSize: "2rem" },
            }}
          >
            ESPERA UM INSTANTE…{" "}
            <span style={{ color: "#F095BA" }}>
              VOCÊ GANHOU UMA CHANCE EXCLUSIVA!
            </span>
          </Typography>

          <Typography
            color="#3F3F3F"
            textAlign="center"
            fontFamily="var(--font-sf-pro-display)"
            fontSize="1.5rem"
            fontWeight="400"
            lineHeight="1.75rem"
            maxWidth="45rem"
            sx={{
              [BREAKPOINTS.mobile]: { fontSize: "1rem" },
              [BREAKPOINTS.tablet]: { fontSize: "1.25rem" },
            }}
          >
            Você acabou de garantir sua DoseDay — e isso já é incrível. Mas e se
            você pudesse aumentar os resultados, economizar dinheiro e ainda
            garantir mais 30 dias da sua melhor versão?
          </Typography>
        </Stack>

        <Stack alignItems="center" gap={3}>
          <Image
            src="/upsell/product.png"
            alt="Doseday Beauty Coffee"
            width={500}
            height={450}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "500px",
            }}
          />

          <Typography
            color="#35271B"
            textAlign="center"
            fontFamily="var(--font-sf-pro-display)"
            fontSize="2rem"
            fontWeight="700"
            lineHeight="2.5rem"
            sx={{
              [BREAKPOINTS.mobile]: { fontSize: "1.5rem" },
              [BREAKPOINTS.tablet]: { fontSize: "1.75rem" },
            }}
          >
            LEVE AGORA O KIT PREMIUM DE
            <br />
            <span style={{ textDecorationLine: "line-through" }}>
              R$ 189,00
            </span>{" "}
            POR <span style={{ color: "#0FC116" }}>R$ 109,90</span>
          </Typography>
        </Stack>

        <div
          dangerouslySetInnerHTML={{
            __html: `
              <div class="buttons-root" style="border:unset">
                <div class="buttons-container" style="display:flex;flex-direction:column;align-items:center;gap:16px;width:100%;max-width:500px;margin:0 auto;">
                  
                  <button 
                    id="acceptUpsell" 
                    class="accept-upsell"
                    style="
                      width:100%;
                      background-color:#FE9AC1;
                      color:#35271B;
                      font-family:Poppins,sans-serif;
                      font-weight:600;
                      font-size:1.25rem;
                      border:none;
                      border-radius:2.5rem;
                      padding:0.875rem 1.25rem;
                      cursor:pointer;
                      transition:all 0.2s ease-in-out;
                    "
                    onmouseover="this.style.opacity='0.9';"
                    onmouseout="this.style.opacity='1';"
                  >
                    Sim, eu aceito essa oferta especial!
                  </button>
            
                  <div 
                    id="refuseUpsell" 
                    class="refuse-upsell"
                    style="
                      background:none;
                      border:none;
                      color:#35271B;
                      font-family:Poppins,sans-serif;
                      font-weight:700;
                      font-size:1rem;
                      text-transform:uppercase;
                      cursor:pointer;
                      text-align:center;
                    "
                  >
                    Não, eu gostaria de recusar essa oferta
                  </div>
                </div>
              </div>
            
              <div id="modal-upsell-container" class="modal-container">
                <div class="modal" id="modal-upsell">
                  <div class="border"></div>
                  <div class="modal-body">
                    <iframe id="frameModalBody" src=""></iframe>
                  </div>
                  <div class="modal-footer">
                    <div class="protected-buy" style="display:flex;align-items:center;gap:8px;">
                      <div class="frame">
                        <img src="https://cdn.b4you.com.br/upsell-script/production/css/images/bxs-check-shield.svg"/>
                      </div>
                      <span>Protegemos suas informações de pagamento usando criptografia para fornecer segurança</span>
                    </div>
                  </div>
                </div>
              </div>
            `,
          }}
        />

        <Stack
          width="80rem"
          padding="0.5rem 0"
          justifyContent="center"
          alignItems="center"
          borderRadius="0.5rem"
          bgcolor="#F53B3B"
          sx={{
            [BREAKPOINTS.mobile]: { width: "90%" },
            [BREAKPOINTS.tablet]: { width: "95%" },
          }}
        >
          <Typography
            maxWidth="90%"
            color="#FFF"
            textAlign="center"
            fontFamily="var(--font-sf-pro-display)"
            fontSize="1.5rem"
            fontWeight="700"
            sx={{
              [BREAKPOINTS.mobile]: { fontSize: "1rem" },
              [BREAKPOINTS.tablet]: { fontSize: "1.25rem" },
            }}
          >
            Oferta exclusiva apenas agora, depois disso ela expira
            automaticamente
          </Typography>
        </Stack>
      </Container>

      <Script
        src="https://cdn.b4you.com.br/upsell-script/production/js/script.js"
        strategy="afterInteractive"
      />
    </>
  );
}
