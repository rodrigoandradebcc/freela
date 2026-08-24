import { Box, Container, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { BREAKPOINTS } from "../../@types/breakpoints";
import { Logo } from "../default";

interface SocialMediaIconProps {
    icon: string;
    redirectUrl: string;
    enabled: boolean;
}

const SocialMediaIcon = ({ icon, redirectUrl, enabled = true }: SocialMediaIconProps) => {
    return (
        <Box
            component="a"
            href={enabled ? redirectUrl : undefined}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                display: enabled ? 'flex' : 'none',
                width: '1.5rem',
                height: '1.5rem',
                backgroundImage: `url(${icon})`,
                filter: enabled ? 'none' : 'grayscale(1) opacity(0.5)',
                pointerEvents: enabled ? 'auto' : 'none',
                opacity: enabled ? 1 : 0
            }}
            tabIndex={enabled ? 0 : -1}
            aria-disabled={!enabled}
        />
    );
}

interface FooterOptionButtonProps {
    redirectUrl?: string;
    title: string;
    enabled: boolean;
}

const FooterOptionButton = ({ redirectUrl, title, enabled }: FooterOptionButtonProps) => {
    return (
        <Box
            component="a"
            href={enabled ? redirectUrl : undefined}
            gap={2}
            tabIndex={enabled ? 0 : -1}
            aria-disabled={!enabled}
            sx={{
                display: enabled ? 'flex' : 'none',
                height: '3rem',
                padding: '1rem 0.5rem',
                justifyContent: 'center',
                alignItems: 'center',
                pointerEvents: enabled ? 'auto' : 'none',
                cursor: enabled ? 'pointer' : 'default',
                textDecoration: 'none'
            }}
        >
            <Typography sx={{
                color: enabled ? '#FFF' : 'transparent',
                fontFamily: 'Inter',
                fontSize: '1rem',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: '1.5rem'
            }}>
                {title}
            </Typography>
        </Box>
    );
}

export default function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.only('xs'));

    return (
        <Stack
            gap={6}
            bgcolor='#1C1C1C'
            sx={{
                padding: '3rem 5rem',
                justifyContent: 'center'
            }}
        >
            <Container
                component={Stack}
                direction={{ xs: 'column', lg: 'row' }}
                gap={6}
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    [BREAKPOINTS.mobile]: {
                        maxWidth: "xs"
                    },
                    [BREAKPOINTS.tablet]: {
                        maxWidth: "md"
                    },
                    [BREAKPOINTS.desktop]: {
                        maxWidth: "lg"
                    },
                    [BREAKPOINTS.large]: {
                        maxWidth: "2xl"
                    },
                }}>
                <Logo />
                <Stack
                    gap={2}
                    direction='row'
                    sx={{
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        flex: '1 0 0'
                    }}>
                    <SocialMediaIcon icon='/pre-sale/footer/facebook-icon.svg' redirectUrl='https://web.facebook.com/dosedaybrasil' enabled={false} />
                    <SocialMediaIcon icon='/pre-sale/footer/twitter-icon.svg' redirectUrl='https://x.com/dosedaybrasil' enabled={false} />
                    <SocialMediaIcon icon='/pre-sale/footer/youtube-icon.svg' redirectUrl='https://www.youtube.com/@dosedaybrasil' enabled={true} />
                    <SocialMediaIcon icon='/pre-sale/footer/instagram-icon.svg' redirectUrl='https://www.instagram.com/dosedaybrasil' enabled={true} />
                    <SocialMediaIcon icon='/pre-sale/footer/linkedin-icon.svg' redirectUrl='https://www.linkedin.com/company/doseday' enabled={true} />
                </Stack>
            </Container>
            <Container
                sx={{
                    [BREAKPOINTS.mobile]: {
                        maxWidth: "xs"
                    },
                    [BREAKPOINTS.tablet]: {
                        maxWidth: "md"
                    },
                    [BREAKPOINTS.desktop]: {
                        maxWidth: "lg"
                    },
                    [BREAKPOINTS.large]: {
                        maxWidth: "2xl"
                    },
                }}>
                <Divider sx={{ backgroundColor: '#FFF', }} />
            </Container>
            <Container
                component={Stack}
                direction={{ xs: 'column', lg: 'row' }}
                sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    [BREAKPOINTS.mobile]: {
                        maxWidth: "xs"
                    },
                    [BREAKPOINTS.tablet]: {
                        maxWidth: "md"
                    },
                    [BREAKPOINTS.desktop]: {
                        maxWidth: "lg"
                    },
                    [BREAKPOINTS.large]: {
                        maxWidth: "2xl"
                    },
                }}
            >
                <Typography
                    sx={{
                        color: '#FFF',
                        fontFamily: 'Maven Pro',
                        fontSize: '1rem',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal',
                        textAlign: isMobile ? 'center' : 'left'
                    }}>
                    DoseDay © {new Date().getFullYear()}.
                    {isMobile ? <br /> : " "}
                    Todos os direitos reservados.
                </Typography>
                <Stack gap={4} direction={{ xs: 'column', lg: 'row' }}>
                    <FooterOptionButton redirectUrl='/buy' title='Comprar' enabled={false} />
                    <FooterOptionButton redirectUrl='/about-product' title='Sobre o produto' enabled={false} />
                    <FooterOptionButton redirectUrl='/about-us' title='Sobre nós' enabled={false} />
                    <FooterOptionButton redirectUrl='/support' title='Suporte' enabled={false} />
                </Stack>
            </Container>
        </Stack>
    );
}