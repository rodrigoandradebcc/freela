"use client";

import { ArrowBack, ArrowForward } from "@mui/icons-material";
import {
  Box,
  Card,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import carouselImg6 from "../../assets/images/img-background-1.png";
import carouselImg7 from "../../assets/images/img-background-2.png";
import carouselImg2 from "../../assets/images/img-background-3.png";
import carouselImg1 from "../../assets/images/img-background-4.png";
import carouselImg3 from "../../assets/images/img-background-5.png";
import carouselImg5 from "../../assets/images/img-background-6.png";
import carouselImg4 from "../../assets/images/img-background.png";

const ingredients = [
  {
    title: "Cafeína Time Release",
    subtitle:
      "Uma forma inteligente de cafeína, desenvolvida para ser liberada de forma gradual no organismo. Isso garante energia estável e prolongada, sem picos de ansiedade ou quedas bruscas de disposição. Ideal para manter o foco e a clareza mental durante todo o dia, seja no trabalho, no treino ou no seu ritual matinal.",
    img: carouselImg1,
  },
  {
    title: "Colágeno Verisol®",
    subtitle:
      "O colágeno mais testado e aprovado do mundo, com eficácia comprovada em estudos clínicos. Seus peptídeos bioativos atuam diretamente na produção natural de colágeno, promovendo pele mais firme e luminosa, redução de linhas de expressão, fortalecimento de cabelos e unhas. Um ingrediente essencial para quem busca beleza de dentro para fora com resultados visíveis.",
    img: carouselImg2,
  },
  {
    title: "Complexos de Vitamina B",
    subtitle:
      "As vitaminas do complexo B são responsáveis por otimizar o metabolismo energético e a síntese de neurotransmissores. Na DoseDay, elas foram incluídas em doses equilibradas para entregar mais disposição, foco e clareza mental, além de apoiar a saúde da pele, cabelos e unhas. Um reforço essencial para transformar cada dose em um ritual de performance e vitalidade diária.",
    img: carouselImg3,
  },
  {
    title: "Vitaminas C",
    subtitle:
      "Nutriente essencial para a síntese natural de colágeno, a vitamina C potencializa a ação do Verisol® e atua como poderoso antioxidante. Protege contra os radicais livres, ajuda na luminosidade da pele e fortalece o sistema imunológico, tornando-se indispensável em um ritual de beleza e vitalidade.",
    img: carouselImg4,
  },
  {
    title: "Vitaminas E",
    subtitle:
      "Conhecida como a “vitamina da juventude”, a vitamina E é um antioxidante lipossolúvel que protege as células contra o envelhecimento precoce. Seu consumo regular contribui para uma pele mais saudável e radiante, além de potencializar a ação sinérgica da vitamina C, formando um escudo protetor contra o estresse oxidativo",
    img: carouselImg5,
  },
  {
    title: "Cromo",
    subtitle:
      "Mineral fundamental no metabolismo da glicose e no equilíbrio dos níveis de insulina. O cromo auxilia na redução do desejo por doces, contribui para a regulação do apetite e favorece o controle de peso corporal. É um aliado poderoso para quem busca equilíbrio metabólico e definição.",
    img: carouselImg7,
  },
  {
    title: "Coenzima Q10",
    subtitle:
      "Molécula natural presente em todas as células, a CoQ10 é essencial na produção de energia (ATP) e atua como um dos antioxidantes mais potentes conhecidos. Além de proteger contra o estresse oxidativo, ela está diretamente ligada à vitalidade celular, saúde cardiovascular e luminosidade da pele, trazendo mais energia e juventude de dentro para fora",

    img: carouselImg6,
  },
];

export default function CheckoutThirdSection() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ sm: "center" }}
        justifyContent="space-between"
      >
        <Box>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            fontWeight="500"
            sx={{
              mb: { xs: 2, md: 4 },
              textAlign: "left",
              width: { xs: "31rem" },
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            A ciência por trás dos <br />
            <Typography
              component="span"
              variant="h2"
              fontFamily="Kombin"
              fontWeight="500"
              sx={{
                color: "#FE9AC1",
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Ingredientes especiais
            </Typography>
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{
              width: "22rem",
              mb: { xs: 4, md: 6 },
              textAlign: "left",
              fontSize: "1rem",
            }}
          >
            Escolhido por mulheres que buscam beleza, energia e autenticidade em
            cada xícara.
          </Typography>
        </Box>

        <Stack direction="row" gap={2}>
          <IconButton
            onClick={() => swiperRef.current?.slidePrev()}
            sx={{
              border: "1px solid #D9D9D9",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              color: "#35271B",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "#FE9AC1",
                color: "white",
                borderColor: "#FE9AC1",
              },
              "&:disabled": {
                opacity: 0.3,
                cursor: "not-allowed",
                borderColor: "#D9D9D9",
              },
            }}
          >
            <ArrowBack fontSize="small" />
          </IconButton>

          <IconButton
            onClick={() => swiperRef.current?.slideNext()}
            sx={{
              border: "1px solid #D9D9D9",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              color: "#35271B",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "#FE9AC1",
                color: "white",
                borderColor: "#FE9AC1",
              },
              "&:disabled": {
                opacity: 0.3,
                cursor: "not-allowed",
                borderColor: "#D9D9D9",
              },
            }}
          >
            <ArrowForward fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          ml: 0,
          mt: 4,
          overflow: "hidden",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            width: { xs: "32px", md: "64px" },
            zIndex: 2,
            pointerEvents: "none",
          },
          "&::before": {
            left: 0,
          },
          "&::after": {
            right: 0,
            background:
              "linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
          },
        }}
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView="auto"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {ingredients.map((item, idx) => (
            <SwiperSlide
              key={idx}
              style={{
                width: "100%",
                minWidth: isSmUp ? "280px" : "150px",
                maxWidth: isSmUp ? "350px" : "270px",
                flexShrink: 0,
              }}
            >
              <Card
                sx={{
                  borderRadius: 1,
                  width: "100%",
                  display: "inline-block",
                  backgroundColor: "transparent",
                  boxShadow: 0,
                  cursor: "pointer",
                  "&:hover .title": {
                    opacity: 0,
                  },
                  "&:hover .subtitle": {
                    opacity: 1,
                  },
                  "&:hover .overlay": {
                    opacity: 1,
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "300 / 450",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    style={{
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />

                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.5)",
                      opacity: 0,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  />

                  <Box
                    className="title"
                    sx={{
                      position: "absolute",
                      bottom: 24,
                      left: 24,
                      color: "white",
                      fontWeight: "700",
                      fontFamily: "var(--font-sf-pro-display)",
                      fontSize: "18px",
                      zIndex: 2,
                      opacity: 1,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  >
                    {item.title}
                  </Box>

                  <Box
                    className="subtitle"
                    sx={{
                      position: "absolute",
                      bottom: 24,
                      left: 24,
                      right: 24,
                      color: "white",
                      zIndex: 2,
                      opacity: 0,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  >
                    <Typography
                      variant="body1"
                      fontFamily="var(--font-sf-pro-display)"
                      fontSize="18px"
                      color="#fff"
                      mb={0.5}
                    >
                      {item.title}
                    </Typography>{" "}
                    <Typography
                      variant="subtitle2"
                      fontSize="0.9rem"
                      color="#FFFFFF"
                    >
                      {item.subtitle}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
