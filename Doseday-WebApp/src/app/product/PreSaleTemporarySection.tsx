import { DescriptionCards } from "@/components/descriptionCards/descriptionCards";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import img from "../../assets/images/doseday-bag-img.png";
import cupomImg from "../../assets/images/doseday-cupom-img.png";
import kitImg from "../../assets/images/doseday-kit-img.png";
import raffleImg from "../../assets/images/doseday-raffle-img.png";

export function PreSaleTemporarySection() {
  const cardsData = [
    {
      imgSrc: kitImg,
      title: "Kit Doseday Personalizado",
      desciption:
        "Mixer, eco bag, copo exclusivo e um item surpresa pensado para elevar sua experiência.",
    },
    {
      imgSrc: cupomImg,
      title: "Desconto exclusivo",
      desciption:
        "Valor promocional único, disponível apenas para o primeiro lote. ",
    },
    {
      imgSrc: raffleImg,
      title: "Sorteio para as 100 primeiras",
      desciption:
        "Para as primeiras compradoras, faremos um sorteio de um item especial.",
    },
  ];
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={6}
      alignItems="stretch"
      mt={{ xs: 0, lg: 4 }}
      direction={{ xs: "column", lg: "row" }}
    >
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 500,
              color: theme.palette.text.primary,
              mb: { xs: 4 },
              textAlign: "left",
              fontSize: { xs: "2rem", lg: "2.5rem" },
            }}
          >
            O que você ganha
            <br /> comprando na{" "}
            <Typography
              component="span"
              variant="h2"
              fontFamily="Kombin"
              sx={{
                fontWeight: 500,
                color: "#FE9AC1",
                textAlign: "left",
                fontSize: { xs: "2rem", lg: "2.5rem" },
              }}
            >
              pré-venda
            </Typography>
          </Typography>
        </Box>

        <Box>
          {cardsData.map((item, index) => (
            <DescriptionCards
              key={index}
              description={item.desciption}
              imgSrc={item.imgSrc}
              title={item.title}
              isLast={index === cardsData.length - 1}
            />
          ))}
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={7}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            borderRadius: 2,
            position: "relative",
            width: "100%",
            height: { xs: 300, md: "100%" },
            textAlign: "center",
          }}
        >
          <Image
            alt="doseday_bag_products"
            fill
            style={{
              borderRadius: "24px",
              objectFit: "cover",
            }}
            src={img}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
