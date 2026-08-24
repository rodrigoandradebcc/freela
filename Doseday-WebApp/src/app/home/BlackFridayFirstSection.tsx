import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { AnimatedBanner } from "@/components/AnimatedBanner";
import Image from "next/image";
import { ProductCard } from "@/components/DoseBlackCards";

export default function DoseBlackSection() {
  const packs = [
    {
      title: "Starter Pack",
      sachets: "15 Sachês",
      price: 79.9,
      oldPrice: 169.9,
      discount: "40% OFF",
      duration: "15 dias",
      isBlackExclusive: true,
    },
    {
      title: "Premium Pack",
      sachets: "30 Sachês",
      price: 139.9,
      oldPrice: 189.9,
      discount: "30% OFF",
      duration: "30 dias",
    },
    {
      title: "Lover Pack",
      sachets: "60 Sachês",
      price: 259.9,
      oldPrice: 329.9,
      discount: "30% OFF",
      duration: "60 dias",
    },
  ];
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box sx={{ textAlign: "center", backgroundColor: "#FCADCB59" }}>
      <AnimatedBanner direction="right" />

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 520, xl: 650 },
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src={
            isSmUp ? "/home/black_hero.png" : "/home/doseday_black_mobile.jpeg"
          }
          alt="Produto DoseDay"
          fill
          style={{
            filter: "brightness(0.9)",
          }}
        />
      </Box>

      <Box sx={{ py: 5, fontFamily: "var(--font-public-sans)" }}>
        <Typography
          variant="h5"
          fontSize={{ xs: "25px", md: "40px" }}
          fontWeight="500"
          sx={{ mb: 4 }}
        >
          💗 Super ofertas <span style={{ fontWeight: "700" }}>#Doseblack</span>{" "}
          💗
        </Typography>

        <Box
          display="flex"
          gap={{ xs: 6 }}
          justifyContent="center"
          flexDirection={{ xs: "column", lg: "row" }}
          alignItems={{ xs: "center", lg: "flex-start" }}
        >
          {packs.map((pack, index) => (
            <ProductCard
              key={index}
              title={pack.title}
              sachetLabel={pack.sachets}
              oldPrice={pack.oldPrice}
              newPrice={pack.price}
              discount={
                Math.round(
                  ((pack.oldPrice - pack.price) / pack.oldPrice) * 100
                ) ?? 0
              }
              duration={pack.duration}
              isBlackExclusive={pack.isBlackExclusive}
            />
          ))}
        </Box>
      </Box>

      {/* Bottom banner */}
      <AnimatedBanner direction="left" />
    </Box>
  );
}
