import {
    Box,
    Button,
    Stack,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import { useState } from "react";
import { SignupModal } from "../modal/modal";
import PreSaleContainer from "./PreSaleContainer";

interface InfoGroupProps {
    imageUrl: string;
    title: string;
    content: string;
}

const InfoGroup = ({ imageUrl, title, content }: InfoGroupProps) => {
    return (
        <Box width="100%" height="3.5rem">
            <Stack
                direction="row"
                justifyContent={{ xs: "center", lg: "start" }}
                alignItems={{ xs: "center", lg: "start" }}
                gap={1}
            >
                <Box
                    component="img"
                    width="1.5rem"
                    height="1.5rem"
                    src={imageUrl}
                    sx={{
                        aspectRatio: "1/1",
                    }}
                />
                <Typography
                    gap={1}
                    display="inline-flex"
                    alignItems="center"
                    color="#35271B"
                    fontFamily="Kombin"
                    fontSize={{ xs: "1rem", lg: "1.25rem" }}
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="1.625rem"
                    textTransform="capitalize"
                    textAlign={{ xs: "center", lg: "start" }}
                >
                    {title}
                </Typography>
            </Stack>
            <Typography
                color="#35271B"
                fontFamily="Space Grotesk"
                fontSize={{ xs: "0.875rem", lg: "1rem" }}
                fontStyle="normal"
                fontWeight="400"
                lineHeight="1.5rem"
                textAlign={{ xs: "center", lg: "start" }}
            >
                {content}
            </Typography>
        </Box>
    );
};

export default function FifthSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
    const [open, setOpen] = useState(false);

    return (
        <PreSaleContainer
            maxWidth="xl"
            component={Stack}
            bgcolor="#F4EDE3"
        >
            <Stack direction={{ xs: "column", lg: "row" }} gap={6}>
                <Box
                    component="img"
                    src="/pre-sale/fifth-section/photo-fifth-section-desktop.webp"
                    flex="1 0 0"
                    borderRadius="2rem"
                    bgcolor="lightgray"
                    width="100%"
                    order={{ xs: 2, lg: 0 }}
                    sx={{
                        backgroundPosition: "50%",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        objectFit: "cover"
                    }}
                />
                <Stack gap={4} alignItems={{ xs: "center", lg: "start" }}>
                    <Stack gap={2} textAlign={{ xs: "center", lg: "start" }}>
                        <Box>
                            <Typography
                                color="#35271B"
                                fontFamily="Kombin"
                                fontSize={{ xs: "1.625rem", lg: "2.25rem" }}
                                fontStyle="normal"
                                fontWeight="400"
                                lineHeight="normal"
                            >
                                Quem se cadastra primeiro,
                            </Typography>
                            <Typography
                                color="#F095BA"
                                fontFamily="Kombin"
                                fontSize={{ xs: "1.625rem", lg: "2.25rem" }}
                                fontStyle="normal"
                                fontWeight="400"
                                lineHeight="normal"
                            >
                                recebe mais desconto.
                            </Typography>
                        </Box>
                        <Typography
                            color="#35271B"
                            fontFamily="Space Grotesk"
                            fontSize={{ xs: "1rem", lg: "1.5rem" }}
                            fontStyle="normal"
                            fontWeight="400"
                            lineHeight={{ xs: "1.5rem", lg: "1.75rem" }}
                        >
                            Ao ser uma Doselover e entrar na pré-lista da DoseDay, você
                            garante:
                        </Typography>
                    </Stack>
                    <Stack gap={2} alignItems={{ xs: "center", lg: "start" }}>
                        <InfoGroup
                            imageUrl="/pre-sale/fifth-section/percent-seal.svg"
                            title="Desconto Exclusivo"
                            content="Receba 15% de desconto no lançamento do Doseday"
                        />
                        <InfoGroup
                            imageUrl="/pre-sale/fifth-section/number-one-circle.svg"
                            title="Prioridade Na Compra"
                            content="Tenha acesso antecipado à loja antes de todo mundo"
                        />
                        <InfoGroup
                            imageUrl="/pre-sale/fifth-section/gift-box.svg"
                            title="Mimos Especiais"
                            content="Receba um brinde surpresa na primeira compra"
                        />
                        <InfoGroup
                            imageUrl="/pre-sale/fifth-section/calendar-star.svg"
                            title="Doselovers Experience"
                            content="Seja convidada para experiências da comunidade Beauty Energy"
                        />
                    </Stack>
                    {isMobile ? (
                        <></>
                    ) : (
                        <Button
                            onClick={() => setOpen(true)}
                            component={Stack}
                            gap={1}
                            sx={{
                                width: "100%",
                                height: "3.5rem",
                                padding: "1rem 0.625rem",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "6.1875rem",
                                backgroundColor: "#F095BA",
                                color: "#000",
                                fontFamily: "Space Grotesk",
                                fontSize: "1.25rem",
                                fontStyle: "normal",
                                fontWeight: "500",
                                lineHeight: "2rem",
                            }}
                        >
                            QUERO GARANTIR MINHA DOSE COM PRIORIDADE
                        </Button>
                    )}
                    <SignupModal open={open} onClose={() => setOpen(false)} />
                </Stack>
            </Stack>
        </PreSaleContainer>
    );
}
