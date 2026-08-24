import { keyframes } from "@emotion/react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const scrollRight = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollLeft = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

export const AnimatedBanner = ({
  direction = "right",
}: {
  direction?: "left" | "right";
}) => (
  <Box
    sx={{
      overflow: "hidden",
      whiteSpace: "nowrap",
      bgcolor: "secondary.main",
      py: 1.5,
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "end",
        animation: `${
          direction === "right" ? scrollRight : scrollLeft
        } 8s linear infinite`,
      }}
    >
      {Array(12)
        .fill(null)
        .map((_, i) => (
          <React.Fragment key={i}>
            <Box
              component="img"
              src="/home/coruja_doseday.png"
              alt="Coruja"
              sx={{
                height: 30,
                width: "auto",
                mx: "1.13rem",
                transform: "scaleX(-1)",
              }}
            />
            <Typography
              component="span"
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
                fontFamily: "var(--font-public-sans)",
                letterSpacing: "1px",
              }}
            >
              ATÉ 40% OFF
            </Typography>

            <Box
              component="img"
              src="/home/coruja_doseday.png"
              alt="Coruja"
              sx={{
                height: 30,
                width: "auto",
                mx: "1.13rem",
                transform: "scaleX(-1)",
              }}
            />
            <Typography
              component="span"
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
                fontFamily: "var(--font-public-sans)",
                letterSpacing: "1px",
              }}
            >
              #DOSEBLACK
            </Typography>
          </React.Fragment>
        ))}
    </Box>
  </Box>
);
