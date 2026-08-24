import { Box, Card, CardContent, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface DescriptionCardsProps {
  imgSrc: StaticImageData;
  title: string;
  description: string;
  isLast: boolean;
}

export function DescriptionCards({
  imgSrc,
  title,
  description,
  isLast,
}: DescriptionCardsProps) {
  return (
    <Card
      sx={{
        mb: isLast ? 0 : 2,
        background: "#FED4ED4D",
        boxShadow: 0,
        "&:hover": {
          boxShadow: 0,
        },
        p: {
          xl: 0.5,
        },
        border: "1px solid #FE9AC199",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src={imgSrc}
          alt="kit_doseday_image"
          width={53}
          height={53}
          style={{ borderRadius: "8px", objectFit: "cover" }}
        />
        <Box ml={3}>
          <Typography variant="body2" fontWeight={700} fontSize="1rem">
            {title}
          </Typography>
          <Typography variant="body2" mt={0.5} fontSize="1rem">
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
