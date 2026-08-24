import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import img from "../../assets/images/fourth-section-img.jpg";

export function CheckoutFourthSection() {
  return (
    <Box textAlign="center" width="100%">
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        sx={{
          fontSize: { xs: "2rem", md: "2.5rem" },
        }}
      >
        Desfrute de uma{" "}
        <Typography
          component="span"
          variant="h2"
          fontFamily="Kombin"
          sx={{
            fontWeight: 500,
            color: "#FE9AC1",
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}
        >
          experiência
        </Typography>{" "}
        <br />
        que vai além do sabor
      </Typography>

      <Typography
        variant="subtitle2"
        sx={{
          width: "22rem",
          mb: { xs: 4, md: 6 },
          mx: "auto",
          fontSize: "1rem",
        }}
      >
        Doseday é um convite diário ao autocuidado. Um café que nutre por
        dentro, reflete por fora e conecta você ao que realmente importa.
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 250, sm: 350, md: 480, xl: 650 },
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <Image
          src={img}
          alt="Influenciadoras tomando café"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Button
        onClick={() => {
          const section = document.getElementById("section-1");
          section?.scrollIntoView({ behavior: "smooth" });
        }}
        sx={{
          mt: { xs: 4, md: 6 },
          padding: "0.5rem 1.25rem",
          borderRadius: "2.5rem",
          backgroundColor: "#FE9AC1",
          color: "var(--brand-black, #35271B)",
          fontFamily: "var(--font-sf-pro-display)",
          fontSize: "1rem",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "150%",
          px: "1.5rem",
          transition: "padding 0.2s ease",
          "&:hover": {
            paddingLeft: "3rem",
            paddingRight: "3rem",
          },
        }}
      >
        Adquira o seu
      </Button>
    </Box>
  );
}
