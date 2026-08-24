import { Box, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";

import consumingImg from "../../assets/images/doseday-consuming-img.jpg";
import drinkingImg from "../../assets/images/doseday-drinking-img.jpg";
import computerImg from "../../assets/images/doseday-computer-img.jpg";

export function CheckoutSecondSection() {
  const theme = useTheme();

  return (
    <Box sx={{ mb: { xs: 4, md: 8 } }} width="100%">
      <Box
        sx={{
          display: { xs: "grid", md: "flex" },
          gridTemplateColumns: { xs: "1fr", md: "350px 410px" },
          alignItems: "start",
          justifyContent: { xs: "start", md: "space-between" },
          mt: 10,
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "500",
            color: theme.palette.text.primary,
            mb: { xs: 2, md: 4 },
            textAlign: "left",
            width: { xs: "18rem", lg: "20rem" },
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}
        >
          Doseday em todos os{" "}
          <Typography
            component="span"
            variant="h2"
            fontFamily="Kombin"
            sx={{
              fontWeight: 500,
              color: "#FE9AC1",
              mb: 4,
              textAlign: "left",
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            momentos
          </Typography>
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 400,
            color: theme.palette.text.secondary,
            mb: 6,
            width: { md: "31rem" },
            textAlign: { xs: "left", md: "right" },
            lineHeight: 1.6,
            fontSize: { xs: "0.5", md: "1rem" },
          }}
        >
          Seja no seu ritual matinal, antes do treino ou no trabalho, a DoseDay
          acompanha seu ritmo. Uma dose diária para manter corpo e mente na sua
          melhor versão todos os dias.
        </Typography>
      </Box>

      <Grid container spacing={2} mt={2}>
        {[drinkingImg, computerImg, consumingImg].map((img, idx) => (
          <Grid item xs={12} sm={4} key={idx}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 250, sm: 350, md: 550 },
                borderRadius: "24px",
                overflow: "hidden",
              }}
            >
              <Image
                src={img}
                alt="Pessoa consumindo produto"
                fill
                style={{ objectFit: "cover", display: "block" }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
