"use client";
import { KitCardData } from "@/@types/KitCardData";
import KitCard from "@/components/kitCard/kitCard";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import lowCaloriesFreeOutline from "../../assets/icons/balance-icon.svg";
import glutenFreeOutline from "../../assets/icons/gluten-free-icon.svg";
import sugarFreeOutline from "../../assets/icons/sugar-free-icon.svg";
import dosedayCheckoutImg1 from "../../assets/images/doseday-checkout-1.jpg";
import dosedayCheckoutImg2 from "../../assets/images/doseday-checkout-2.jpg";
import productDosedayImg from "../../assets/images/product-doseday-img.jpg";
import { useSearchParams } from "next/navigation";

const CustomAccordion = styled(Accordion)({
  boxShadow: "none",
  borderBottom: `1px solid #35271B80`,
  margin: 0,
  "&.Mui-expanded": {
    margin: 0,
  },
  "&:before": {
    display: "none",
  },
});

const CustomAccordionSummary = styled(AccordionSummary)({
  "& .MuiAccordionSummary-content": {
    justifyContent: "space-between",
  },
});

export default function CheckoutFirstSection({ id }: { id: string }) {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<number | false>(false);
  const [selectedItem, setSelectedItem] = useState<KitCardData>();

  const handleChange = (panel: number) => (_: unknown, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const sections = [
    {
      title: "Descrição do produto",
      description:
        "DoseDay Beauty Coffee ✨ \n\n  O primeiro Beauty Coffee funcional do Brasil.\n\n   Um ritual diário 3 em 1 que combina beleza, performance e energia em cada dose:\n\n   Pele, cabelos e unhas mais rejuvenescidos, fortes e radiantes, graças ao colágeno e vitaminas antioxidantes.\n\n   Redução do inchaço e suporte ao metabolismo, ajudando na queima calórica.\n\n   Energia limpa e disposição equilibrada para você se sentir bem do início ao fim do dia.\n\n   Mais que café: uma experiência de Beauty Energy que transforma sua rotina em autocuidado, vitalidade e brilho visível.",
    },
    {
      title: "Ingredientes",
      description:
        "Leite em Pó, Peptídeos de colágeno, Taurina, Arginina, L-Carnitina, Ácido Ascórbico (Vitamina C), Café Solúvel em Pó, Cacau em Pó, Coenzima Q10, Nicotinamida (Vitamina B3), Tocoferol (Vitamina E), Piridoxina (Vitamina B6), Pantotenato de Sódio (Vitamina B5), Ácido Fólico, Tiamina (Vitamina B1), Picolinato de Cromo, Biotina, Metilcobalamina (Vitamina B12), Espessante Goma Xantana, Edulcorante Sucralose (INS 955).",
    },
    {
      title: "Tabela Nutricional",
      description:
        "Porções por embalagem: 30\nPorção: 9 g (1 e 1/2 dosadores)\n\nValor nutricional por porção:\n- Valor energético: 10 kcal (2% VD*)\n- Carboidratos: 5 g (2% VD*)\n- Peptídeos de Colágeno: 2500 mg\n- Arginina: 300 mg\n- Coenzima Q10: 30 mg\n- Carnitina: 300 mg\n- Taurina: 900 mg\n- Ácido Fólico: 1 mg (416% VD*)\n- Biotina: 45 mcg (150% VD*)\n- Vitamina B1: 1 mg (83% VD*)\n- Vitamina B3: 15 mg (93% VD*)\n- Vitamina B5: 5 mg (100% VD*)\n- Vitamina B6: 6 mg (461% VD*)\n- Vitamina B12: 5 mcg (208% VD*)\n- Vitamina C: 250 mg (555% VD*)\n- Vitamina E: 10 mg (100% VD*)",
    },
    {
      title: "Sugestão de preparo",
      description:
        "Misture 1 sachê em 120 ml de leite ou água morna ou gelada.",
    },
    {
      title: "Momentos de consumo",
      description:
        "Ritual matinal:\nO início perfeito para o seu dia. DoseDay desperta corpo e mente com energia limpa, enquanto nutre a pele, cabelos e unhas com colágeno e vitaminas essenciais. Um momento de autocuidado que transforma sua manhã em um ritual de beleza e vitalidade.\n\nAntes do treino:\nA dose certa para aumentar a disposição e preparar o corpo para a performance. Ingredientes funcionais que auxiliam no metabolismo, reduzem o inchaço e fornecem energia equilibrada, sem picos ou quedas bruscas. A companhia ideal para quem busca resultados com leveza.\n\nAntes do trabalho:\nMais foco, clareza e energia para atravessar o dia com confiança. DoseDay combina ativos cognitivos e vitaminas do complexo B, ajudando você a manter produtividade e equilíbrio, sem abrir mão do bem-estar.\n\nQuando você quiser:\nDoseDay se adapta ao seu ritmo e ao seu estilo de vida. Em qualquer momento do dia, ele entrega beleza de dentro para fora e energia suave, criando uma experiência única que une prazer, autocuidado e performance.",
    },
    {
      title: "Benefícios",
      description:
        "• Contribui para a firmeza e luminosidade da pele, estimulando a produção de colágeno.\n• Auxilia no fortalecimento de cabelos e unhas, promovendo um aspecto saudável e resistente.\n• Favorece a redução do inchaço e melhora o equilíbrio do corpo por meio de ativos funcionais.\n• Estimula o metabolismo, apoiando o processo natural de queima calórica.\n• Fornece energia limpa e equilibrada, sem picos de ansiedade ou quedas bruscas de disposição.\n• Melhora a clareza mental e o foco ao longo do dia, com suporte do complexo de vitaminas B e aminoácidos funcionais.\n• Oferece ação antioxidante, ajudando a proteger as células contra os efeitos dos radicais livres.\n• Apoia o bem-estar diário, integrando beleza de dentro para fora e vitalidade em um só ritual.\n• Reúne ingredientes selecionados com padrão de qualidade premium, traduzidos em uma experiência única de café funcional.",
    },
  ];

  const saleCardData = [
    {
      title: "Starter Pack",
      description: "Pounch Especial (15 Sachês)",
      totalValue: 169.9,
      isBestSeller: true,
      currentValue: 79.9,
      checkoutLink: "https://checkout.b4you.com.br/JMcM_mI-zq/3Steps",
    },
    {
      title: "Premium Pack",
      description: "1 Pouch (30 Sachês)",
      isBestSeller: false,
      totalValue: 189.9,
      currentValue: 139.9,
      checkoutLink: "https://checkout.b4you.com.br/iyJWhddYKz/3Steps",
    },
    {
      title: "Lover Pack",
      description: "2 Pouch (60 Sachês)",
      isBestSeller: false,
      totalValue: 329.6,
      currentValue: 259.9,
      checkoutLink: "https://checkout.b4you.com.br/mXT3cwfpi3/3Steps",
    },
  ];

  const searchParams = useSearchParams();
  const selected = searchParams.get("selectedProduct");

  useEffect(() => {
    if (selected) {
      setSelectedItem(saleCardData.find((data) => data.title === selected));
    }
  }, [selected]);

  return (
    <>
      <Grid container spacing={6} alignItems="flex-start" id={id}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderRadius: 2,
              position: "relative",
              width: "100%",
              height: { xs: 250, sm: 300, md: 430, xl: 530 },
              textAlign: "center",
            }}
          >
            <Image
              src={productDosedayImg}
              alt="Produto DoseDay"
              fill
              style={{
                borderRadius: "24px",
                objectFit: "cover",
              }}
            />
          </Box>

          <Grid container spacing={2.5} sx={{ mt: 2.5, mb: 2.5 }}>
            {[
              { img: sugarFreeOutline, label: "Sem Açúcar" },
              { img: lowCaloriesFreeOutline, label: "Baixa Caloria" },
              { img: glutenFreeOutline, label: "Sem Glúten" },
            ].map((item, idx) => (
              <Grid item xs={4} key={idx} sx={{ py: "0 !important" }}>
                <Card
                  sx={{
                    p: 1,
                    textAlign: "center",
                    background: "#FE9AC1",
                    boxShadow: 0,
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={45}
                    height={45}
                    style={{ objectFit: "contain" }}
                  />
                  <Typography variant="body2" fontWeight="500">
                    {item.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={2}>
            {[dosedayCheckoutImg1, dosedayCheckoutImg2].map((img, idx) => (
              <Grid item xs={6} key={idx}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { sm: 450, md: 550 },
                    aspectRatio: "3/4",
                    borderRadius: "24px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={img}
                    alt="Pessoa consumindo produto"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            fontSize={{ xs: "1.5rem", md: "2rem" }}
            fontWeight="bold"
            gutterBottom
          >
            Doseday Beauty Coffee - Capuccino
          </Typography>

          <Typography
            variant="body1"
            fontSize={{ xs: "1rem" }}
            color="#7A7D85"
            gutterBottom
          >
            Cada detalhe da Doseday foi pensado para oferecer bem-estar com{" "}
            <br />
            sofisticação. Do design à fórmula: menos ruído, mais resultado.
          </Typography>

          {/* <Box mt={3}>
                        <Typography
                            variant="h3"
                            fontSize={{ xs: "1.25rem", md: "1.75rem" }}
                            fontWeight="500"
                            color="#35271B"
                            fontFamily="var(--font-sf-pro-display)"
                        >
                            A partir de R$ 169,00 (Pouch)
                        </Typography>
                        <Typography
                            variant="body1"
                            fontSize={{ xs: "1rem" }}
                            color="#7A7D85"
                            gutterBottom
                            fontStyle="italic"
                            mt={1.5}
                        >
                            Cada Pouch (pacote) contém 30 sachês.
                        </Typography>
                    </Box> */}

          <Divider
            sx={{
              width: "100%",
              height: "0.06rem",
              backgroundColor: "#EBEDF0",
              marginY: 2.5,
            }}
          />

          <Typography
            variant="body1"
            fontSize={{ xs: "1rem" }}
            color="#7A7D85"
            fontWeight={600}
            gutterBottom
          >
            Escolha a quantidade ideal:
          </Typography>

          <Box mt={3}>
            {saleCardData.map((item, index) => (
              <KitCard
                key={index}
                title={item.title}
                description={item.description}
                isBestSeller={item.isBestSeller}
                totalValue={item.totalValue}
                currentValue={item.currentValue}
                selected={selectedItem?.title === item.title}
                onSelect={() => setSelectedItem(item)}
              />
            ))}
          </Box>

          <Button
            fullWidth
            onClick={() => window.open(selectedItem?.checkoutLink, "_self")}
            disabled={!selectedItem}
            sx={{
              mt: 3,
              py: 2,
              borderRadius: "30px",
              fontFamiliy: "var(--font-sf-pro-display)",
              fontWeight: "bold",
              backgroundColor: "#FE9AC1",
              color: theme.palette.text.primary,
              "&:hover": {
                backgroundColor: "#EC6CA0",
                boxShadow: 0,
              },
              "&.Mui-disabled": {
                backgroundColor: "#E0E0E0",
                color: "#9E9E9E",
                cursor: "not-allowed",
              },
            }}
          >
            Comprar agora
          </Button>

          <Box mt={4}>
            {sections.map((item, idx) => (
              <CustomAccordion
                key={idx}
                expanded={expanded === idx}
                onChange={handleChange(idx)}
                square
              >
                <CustomAccordionSummary
                  sx={{
                    mt: 0,
                    p: 0,
                  }}
                  expandIcon={expanded === idx ? <RemoveIcon /> : <AddIcon />}
                >
                  <Typography
                    variant="body1"
                    fontSize="0.9rem"
                    fontWeight={500}
                  >
                    {item?.title}
                  </Typography>
                </CustomAccordionSummary>
                <AccordionDetails
                  sx={{
                    p: 0,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontSize="0.8rem"
                    sx={{ whiteSpace: "pre-line", mb: "1rem" }}
                  >
                    {item?.description}
                  </Typography>
                </AccordionDetails>
              </CustomAccordion>
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
