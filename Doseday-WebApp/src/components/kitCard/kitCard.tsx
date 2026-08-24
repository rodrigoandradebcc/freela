"use client";
import { Card, CardContent, Typography, Chip, Box } from "@mui/material";

interface KitCardProps {
  title: string;
  description: string;
  totalValue: number;
  currentValue: number;
  isBestSeller: boolean;
  selected?: boolean;
  onSelect?: () => void;
}

export default function KitCard({
  title,
  description,
  totalValue,
  currentValue,
  isBestSeller = false,
  selected,
  onSelect,
}: KitCardProps) {
  const hasDiscount = totalValue > currentValue;
  const discountPercent = hasDiscount
    ? Math.round(((totalValue - currentValue) / totalValue) * 100)
    : 0;

  return (
    <Card
      onClick={onSelect}
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: selected ? "2px solid" : "1px solid",
        borderColor: selected ? "#FE9AC1" : "grey.300",
        borderRadius: 1.5,
        mb: 2,
        p: 0.5,
        boxShadow: selected ? 2 : 0,
        cursor: "pointer",
        transform: selected ? "scale(1.02)" : "scale(1)",
        "&:hover": {
          border: "2px solid #000",
          transform: "scale(1.02)",
          boxShadow: 0,
        },
      }}
    >
      {isBestSeller && (
        <Chip
          label="Exclusivo Doseblack"
          color="secondary"
          size="small"
          sx={{
            bgcolor: "#35271B",
            color: "#fff",
            position: "absolute",
            top: -4,
            padding: "1rem 0.5rem 0.75rem 0.5rem",
            right: -3,
            borderRadius: 0.5,
            fontWeight: "500",
          }}
        />
      )}

      <CardContent sx={{ flex: 1 }}>
        <Typography
          variant="h6"
          fontSize="20px"
          fontFamily="var(--font-sf-pro-display)"
          fontWeight="semibold"
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          fontSize="1rem"
          fontFamily="var(--font-sf-pro-display)"
          color="text.secondary"
        >
          {description}
        </Typography>

        {hasDiscount && (
          <Typography
            variant="body2"
            fontFamily="var(--font-sf-pro-display)"
            sx={{ color: "#0BC111", fontWeight: "bold" }}
          >
            Economize {discountPercent}%
          </Typography>
        )}
      </CardContent>

      <Box textAlign="right" pr={2}>
        <Typography
          fontSize="20px"
          variant="h6"
          fontFamily="var(--font-sf-pro-display)"
          fontWeight="semibold"
        >
          R$ {currentValue.toFixed(2)}
        </Typography>
        {hasDiscount && (
          <Typography
            variant="subtitle2"
            sx={{ textDecoration: "line-through", color: "text.secondary" }}
          >
            R$ {totalValue.toFixed(2)}
          </Typography>
        )}
      </Box>
    </Card>
  );
}
