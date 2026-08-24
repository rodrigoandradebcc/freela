import { Box, Stack, Typography } from "@mui/material";
import PreSaleContainer from "./PreSaleContainer";

export default function SecondSection() {
    return (
        <PreSaleContainer
            maxWidth="xl"
            component={Stack}
            direction={{ xs: 'column', lg: 'row' }}
            gap={6}
            sx={{
                backgroundColor: "#F4EDE3",
                alignSelf: "stretch"
            }}
        >
            <Stack
                gap={2}
                sx={{
                    width: "100%",
                    alignItems: { xs: "center", lg: "start" },
                }}
            >
                <Box
                    component="img"
                    src="/pre-sale/second-section/owl-seal.svg"
                    alt="Coruja"
                    sx={{
                        width: '125px',
                        height: '125px',
                        flexShrink: 0,
                        marginBottom: "1.25rem"
                    }}
                />
                <Box sx={{ alignSelf: "stretch", textAlign: { xs: "center", lg: "start" } }}>
                    <Typography
                        sx={{
                            color: "#35271B",
                            fontFamily: "Kombin",
                            fontSize: { xs: "1.75rem", lg: "2.25rem" },
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: { xs: "2.25rem", lg: "normal" }
                        }}
                    >
                        Essa é sua dose.
                    </Typography>
                    <Typography
                        sx={{
                            color: "#F095BA",
                            fontFamily: "Kombin",
                            fontSize: { xs: "1.75rem", lg: "2.25rem" },
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: { xs: "2.25rem", lg: "normal" }
                        }}
                    >
                        E ela muda tudo.
                    </Typography>
                </Box>
                <Box sx={{ alignSelf: "stretch", textAlign: { xs: "center", lg: "start" } }}>
                    <Typography
                        sx={{
                            color: "#35271B",
                            fontFamily: "Space Grotesk",
                            fontSize: { xs: "1rem", lg: "1.5rem" },
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: { xs: "1.5rem", lg: "1.75rem" }
                        }}
                    >
                        Enquanto o mercado divide beleza e energia em produtos
                        separados, a DoseDay une tudo em um só ritual.
                        <br />
                        <br />
                        Criamos uma nova categoria para uma nova geração:
                    </Typography>
                    <Typography
                        sx={{
                            margin: 0,
                            padding: 0,
                            color: "#35271B",
                            fontFamily: "Space Grotesk",
                            fontSize: { xs: "1rem", lg: "1.5rem" },
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight: { xs: "1.5rem", lg: "1.75rem" },
                        }}
                    >
                        Beleza real. Energia limpa. Adeus inchaço.
                    </Typography>
                    <Typography
                        sx={{
                            margin: 0,
                            padding: 0,
                            color: "#35271B",
                            fontFamily: "Space Grotesk",
                            fontSize: { xs: "1rem", lg: "1.5rem" },
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: { xs: "1.5rem", lg: "1.75rem" },
                        }}
                    >
                        <br />
                        Porque café que só acorda é passado.
                        <br />
                        O futuro é um café que transforma.
                        <br />
                        <br />
                        Conheça DoseDay: um cappuccino funcional que ativa a sua
                        melhor versão.
                    </Typography>
                </Box>
            </Stack>
            <Stack
                width="100%"
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                position="relative"
                paddingTop={4}
            >
                <Box
                    component="img"
                    src="/pre-sale/second-section/photo-second-section-1.webp"
                    sx={{
                        height: '100%',
                        width: { xs: '80%', lg: '60%' },
                        borderRadius: { xs: '0.92625rem', lg: '1.5rem' },
                        objectFit: 'cover',
                        display: 'block'
                    }}
                />
                <Box
                    component="img"
                    src="/pre-sale/second-section/photo-second-section-2.webp"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: { xs: '35%', lg: '30%' },
                        height: { xs: '10.52788rem', lg: '16.75rem' },
                        borderRadius: { xs: '0.92625rem', lg: '1.5rem' },
                        objectFit: 'cover'
                    }}
                />
            </Stack>
        </PreSaleContainer >
    );
}