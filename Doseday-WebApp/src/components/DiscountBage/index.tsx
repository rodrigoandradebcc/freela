import React from "react";
import { Box, Typography } from "@mui/material";

function starPoints(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  spikes: number
) {
  const pts: string[] = [];
  const step = Math.PI / spikes;
  let rot = -Math.PI / 2;

  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const x = cx + Math.cos(rot) * r;
    const y = cy + Math.sin(rot) * r;
    pts.push(`${x},${y}`);
    rot += step;
  }

  return pts.join(" ");
}

export function DiscountBadge({ discount = 50 }: { discount?: number }) {
  const size = 89;
  const center = size / 2;
  const outerRadius = 42;
  const innerRadius = 36;
  const spikes = 12;

  const polygonPoints = starPoints(
    center,
    center,
    outerRadius,
    innerRadius,
    spikes
  );

  return (
    <Box
      sx={{
        position: "absolute",
        width: size,
        height: size,
        right: -20,
        top: -18,
        bgcolor: "transparent",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        fontWeight: 700,
        fontSize: "16px",
        textAlign: "center",
        lineHeight: 1.2,
        zIndex: 1,
        padding: 2,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ position: "absolute", left: 0, top: 0, zIndex: 0 }}
        aria-hidden
      >
        <polygon
          points={polygonPoints}
          fill="#09790D"
          stroke="#09790D"
          strokeWidth={6}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <circle
          cx={center}
          cy={center}
          r={30}
          fill="none"
          stroke="white"
          strokeWidth={2}
        />
      </svg>

      <Typography
        component="span"
        fontWeight="bold"
        lineHeight="100%"
        sx={{
          zIndex: 2,
          textAlign: "center",
          pointerEvents: "none",
          color: "#fff",
        }}
      >
        {discount}% OFF
      </Typography>
    </Box>
  );
}
