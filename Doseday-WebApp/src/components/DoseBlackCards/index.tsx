import { Box, Button, Chip, Typography } from "@mui/material";
import React from "react";
import { DiscountBadge } from "../DiscountBage";
import { redirect } from "next/navigation";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  sachetLabel: string;
  oldPrice: number;
  newPrice: number;
  discount: number;
  duration: string;
  isBlackExclusive?: boolean;
}

export const ProductCard = ({
  title,
  sachetLabel,
  oldPrice,
  newPrice,
  discount,
  duration,
  isBlackExclusive = false,
}: ProductCardProps) => (
  <Box
    sx={{
      position: "relative",
      width: 342,
      maxHeight: 600,
      bgcolor: "#FE9AC1",
      borderRadius: "20px",
      textAlign: "center",
      p: 3,
      fontFamily: "var(--font-public-sans)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    {isBlackExclusive && (
      <Chip
        label="Exclusivo Doseblack"
        color="default"
        size="small"
        sx={{
          position: "absolute",
          top: -10,
          left: -5,
          bottom: 0,
          bgcolor: "#151212",
          color: "#fff",
          fontWeight: 500,
          fontSize: "1rem",
          borderRadius: "10px 10px 28px 10px",
          padding: "10px 10px 10px 20px",
          maxWidth: "236px",
          display: "flex",
        }}
        icon={
          <Box
            component="img"
            src="/home/coruja_doseday.png"
            alt="Coruja"
            sx={{
              position: "absolute",
              height: 36,
              width: "auto",
              left: -15,
              transform: "scaleX(-1)",
            }}
          />
        }
      />
    )}
    <DiscountBadge discount={discount} />

    <Box>
      <Typography variant="h6" fontWeight="500" sx={{ mb: 1, fontSize: 28 }}>
        {title}
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography
          variant="body2"
          sx={{
            bgcolor: "black",
            px: 2.5,
            borderRadius: "28px",
            textAlign: "center",
            fontSize: 18,
            color: "white",
            maxWidth: "126px",
          }}
        >
          {sachetLabel}
        </Typography>
      </Box>

      {/* Placeholder da imagem do produto */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
          mb: 6,
        }}
      >
        {/* Círculo */}
        <Box
          sx={{
            width: 190,
            height: 190,
            borderRadius: "50%",
            backgroundColor: "rgba(252, 173, 203, 0.95)",
            position: "relative",
            zIndex: 1,
          }}
        />

        {/* Imagem que “sai” do círculo */}
        <Box
          sx={{
            position: "absolute",
            zIndex: 2,
          }}
        >
          <Image
            src="/home/products_img.png"
            alt="Produto"
            width={300}
            height={200}
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Box>

      <Typography
        sx={{
          textDecoration: "line-through",
          fontSize: 16,
        }}
      >
        De R$ {oldPrice.toFixed(2)} por apenas
      </Typography>
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: 32,
        }}
      >
        R$ {newPrice.toFixed(2)}
      </Typography>
    </Box>

    <Box>
      <Button
        onClick={() => redirect(`/product?selectedProduct=${title}`)}
        sx={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "30px",
          textTransform: "none",
          fontWeight: "bold",
          py: 1.2,
          width: "100%",
          fontSize: 16,
          mt: 2,
        }}
      >
        Comprar agora
      </Button>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 2,
          gap: 1,
        }}
      >
        <Box
          component="img"
          src="/home/calendar-icon.svg"
          alt="Calendário"
          sx={{ width: 20, height: 20 }}
        />
        <Typography fontSize="1" fontWeight="bold">
          Ideal para {duration}
        </Typography>
      </Box>
    </Box>
  </Box>
);
