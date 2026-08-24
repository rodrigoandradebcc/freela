import {
    Box,
    Button,
    Stack,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import { useState } from "react";
import { Logo } from "../default";
import { SignupModal } from "../modal/modal";
import PreSaleContainer from "./PreSaleContainer";

const MobileText = () => {
    return (
        <>
            <Box>
                <Typography
                    sx={{
                        color: "#F4EDE3",
                        fontFamily: "Kombin",
                        fontSize: "1.75rem",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "2.25rem",
                        textAlign: "center",
                    }}
                >
                    O primeiro café da beleza <br />
                    do Brasil está chegando. <br />
                </Typography>
                <Typography
                    sx={{
                        color: "#F095BA",
                        fontFamily: "Kombin",
                        fontSize: "1.75rem",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "2.25rem",
                        textAlign: "center",
                    }}
                >
                    Sua skincare agora tem <br />
                    gosto de cappuccino.
                </Typography>
            </Box>
        </>
    );
};

const DesktopText = () => {
    return (
        <>
            <Box>
                <Typography
                    sx={{
                        color: "#F4EDE3",
                        fontFamily: "Kombin",
                        fontSize: "2.5rem",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "3rem",
                        textAlign: "left",
                    }}
                >
                    O primeiro café da beleza
                    <br />
                    do Brasil está chegando.
                </Typography>
                <Typography
                    sx={{
                        color: "#F095BA",
                        fontFamily: "Kombin",
                        fontSize: "2.5rem",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "3rem",
                        textAlign: "left",
                    }}
                >
                    Sua skincare agora tem
                    <br />
                    gosto de cappuccino.
                </Typography>
            </Box>
            <Typography
                sx={{
                    color: "#F4EDE3",
                    fontFamily: "Space Grotesk",
                    fontSize: "1.5rem",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "2rem",
                    textAlign: "left",
                }}
            >
                Pele bonita, menos inchaço e foco sem
                <br />
                ansiedade, tudo em uma dose por dia.
            </Typography>
        </>
    );
};

export default function FirstSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
    const [open, setOpen] = useState(false);

    return (
        <Box
            sx={{
                width: "100%",
                height: "90vh",
                objectFit: "cover",
                backgroundImage: {
                    xs: `linear-gradient(270deg, rgba(0, 0, 0, 0.00) 42.59%, rgba(0, 0, 0, 0.20) 60.62%, rgba(0, 0, 0, 0.21) 62.31%, rgba(0, 0, 0, 0.40) 78.97%), url('/pre-sale/first-section/background-first-section-mobile.webp')`,
                    lg: `linear-gradient(270deg, rgba(0, 0, 0, 0.00) 42.59%, rgba(0, 0, 0, 0.20) 60.62%, rgba(0, 0, 0, 0.21) 62.31%, rgba(0, 0, 0, 0.40) 78.97%), url('/pre-sale/first-section/background-first-section-desktop.webp')`,
                },
                backgroundPosition: "center",
                backgroundColor: "lightgray",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
        >
            <PreSaleContainer component={Stack} gap={1} maxWidth="xl">
                <Stack
                    gap={4}
                    sx={{
                        width: { xs: "22.8125rem", lg: "33.1875rem" },
                        alignItems: { xs: "center", lg: "flex-start" },
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem'
                    }}
                >
                    <Logo />
                    {isMobile ? <MobileText /> : <DesktopText />}
                    <Button
                        onClick={() => setOpen(true)}
                        sx={{
                            width: { xs: "80%", lg: "100%" },
                            borderRadius: "6.1875rem",
                            background: "#F095BA",
                            color: "#000",
                            fontFamily: "Space Grotesk",
                            fontSize: { xs: "0.75rem", lg: "1rem" },
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight: "2rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            textAlign: { xs: "center", lg: "left" },
                            "&:hover": {
                                background: "#E085AA",
                            },
                        }}
                    >
                        GARANTA O ACESSO COM 15% OFF
                    </Button>

                    <SignupModal open={open} onClose={() => setOpen(false)} />
                </Stack>
            </PreSaleContainer>
        </Box>
    );
}