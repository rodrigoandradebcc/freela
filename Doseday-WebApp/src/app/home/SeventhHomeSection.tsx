import { Box, Container, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { BREAKPOINTS } from "../../@types/breakpoints";

export default function SeventhHomeSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.only('xs'));
    const sectionRef = useRef(null);
    const [visibleLeft, setVisibleLeft] = useState(false);
    const [visibleRight, setVisibleRight] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setVisibleLeft(true), 150);
                    setTimeout(() => setVisibleRight(true), 350);
                }
            },
            {
                threshold: 0.2,
                rootMargin: "-60px 0px",
            }
        );

        observer.observe(el);
        return () => observer.unobserve(el);
    }, []);

    return (
        <Container
            component={Stack}
            ref={sectionRef}
            direction="row"
            padding="3rem"
            justifyContent="center"
            alignItems="flex-start"
            gap={4}
            flexShrink={0}
            sx={{
                [BREAKPOINTS.mobile]: {
                    maxWidth: "xs",
                    flexDirection: "column",
                },
                [BREAKPOINTS.tablet]: {
                    maxWidth: "md",
                    flexDirection: "column",
                },
                [BREAKPOINTS.desktop]: {
                    maxWidth: "lg",
                    flexDirection: "row",
                },
                [BREAKPOINTS.large]: {
                    maxWidth: "2xl",
                    flexDirection: "row",
                },
            }}
        >
            <Stack
                flex={2}
                sx={{
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    borderRadius: '1rem',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    opacity: visibleLeft ? 1 : 0,
                    transform: visibleLeft ? 'translateX(0)' : 'translateX(-60px)',
                    transition: 'opacity 1200ms cubic-bezier(0.22, 1, 0.36, 1), transform 1200ms cubic-bezier(0.22, 1, 0.36, 1)',
                    willChange: 'opacity, transform',
                    [BREAKPOINTS.mobile]: {
                        backgroundImage: 'url("/home/photo-1-seventh-home-section-mobile.png")',
                        height: "100%",
                        minHeight: "40rem",
                        maxWidth: "100%",
                    },
                    [BREAKPOINTS.tablet]: {
                        backgroundImage: 'url("/home/photo-1-seventh-home-section-tablet.png")',
                        height: "50rem",
                        width: "50rem",
                        maxWidth: "100%",
                    },
                    [BREAKPOINTS.desktop]: {
                        backgroundImage: 'url("/home/photo-1-seventh-home-section.png")',
                        height: "50rem",
                    },
                    [BREAKPOINTS.large]: {
                        backgroundImage: 'url("/home/photo-1-seventh-home-section.png")',
                        height: "50rem",
                    },
                }}
            >
                <Stack
                    alignItems="flex-start"
                    gap={1}
                    maxWidth="25rem"
                    sx={{
                        [BREAKPOINTS.mobile]: {
                            padding: "2rem",
                        },
                        [BREAKPOINTS.tablet]: {
                            padding: "3rem",
                        },
                        [BREAKPOINTS.desktop]: {
                            padding: "3rem",
                        },
                        [BREAKPOINTS.large]: {
                            padding: "3rem",
                        },
                        opacity: visibleLeft ? 1 : 0,
                        transform: visibleLeft ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'opacity 1000ms cubic-bezier(0.22, 1, 0.36, 1) 300ms, transform 1000ms cubic-bezier(0.22, 1, 0.36, 1) 300ms',
                        willChange: 'opacity, transform',
                    }}
                >
                    <Typography
                        sx={{
                            color: '#35271B',
                            fontFamily: 'var(--font-sf-pro-display)',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '130%',
                            [BREAKPOINTS.mobile]: {
                                fontSize: '1.75rem',
                                width: "100%",
                            },
                            [BREAKPOINTS.tablet]: {
                                fontSize: '2rem',
                                width: "50%",
                            },
                            [BREAKPOINTS.desktop]: {
                                fontSize: '2rem',
                                width: "100%",
                            },
                            [BREAKPOINTS.large]: {
                                fontSize: '2rem',
                                width: "100%",
                            },
                        }}
                    >
                        Presença que se revela em detalhes
                    </Typography>

                    {!isMobile && (
                        <Typography
                            sx={{
                                color: '#3F3F3F',
                                fontFamily: 'var(--font-sf-pro-text)',
                                fontSize: '1rem',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '150%',
                            }}
                        >
                            Cada embalagem é um convite para mergulhar em uma experiência de cuidado, beleza e sabor pensada para você.
                        </Typography>
                    )}
                </Stack>

                {!isMobile && (
                    <Box
                        sx={{
                            [BREAKPOINTS.mobile]: {
                                padding: "2rem",
                            },
                            [BREAKPOINTS.tablet]: {
                                padding: "3rem",
                            },
                            [BREAKPOINTS.desktop]: {
                                padding: "3rem",
                            },
                            [BREAKPOINTS.large]: {
                                padding: "3rem",
                            },
                            opacity: visibleLeft ? 1 : 0,
                            transform: visibleLeft ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'opacity 800ms cubic-bezier(0.22, 1, 0.36, 1) 600ms, transform 800ms cubic-bezier(0.22, 1, 0.36, 1) 600ms',
                            willChange: 'opacity, transform',
                        }}
                    >
                        <Image
                            src="/home/cup-with-straw.svg"
                            alt="Ícone de Copo"
                            width={24}
                            height={32}
                        />
                    </Box>
                )}
            </Stack>

            <Stack
                flex={1}
                sx={{
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    borderRadius: '1rem',
                    minHeight: "50rem",
                    opacity: visibleRight ? 1 : 0,
                    transform: visibleRight ? 'translateX(0)' : 'translateX(60px)',
                    transition: 'opacity 1200ms cubic-bezier(0.22, 1, 0.36, 1), transform 1200ms cubic-bezier(0.22, 1, 0.36, 1)',
                    willChange: 'opacity, transform',
                    [BREAKPOINTS.mobile]: {
                        backgroundImage: 'url("/home/photo-2-seventh-home-section-mobile.png")',
                        maxWidth: "100%",
                    },
                    [BREAKPOINTS.tablet]: {
                        backgroundImage: 'url("/home/photo-2-seventh-home-section-tablet.png")',
                        height: "60rem",
                    },
                    [BREAKPOINTS.desktop]: {
                        backgroundImage: 'url("/home/photo-2-seventh-home-section.png")',
                        height: "50rem",
                    },
                    [BREAKPOINTS.large]: {
                        backgroundImage: 'url("/home/photo-2-seventh-home-section.png")',
                        height: "50rem",
                    },
                }}
            >
                <Typography
                    sx={{
                        padding: '2rem',
                        textAlign: 'left',
                        color: '#3F3F3F',
                        fontFamily: 'var(--font-sf-pro-text)',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '150%',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        opacity: visibleRight ? 1 : 0,
                        transform: visibleRight ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'opacity 1000ms cubic-bezier(0.22, 1, 0.36, 1) 300ms, transform 1000ms cubic-bezier(0.22, 1, 0.36, 1) 300ms',
                        willChange: 'opacity, transform',
                        [BREAKPOINTS.mobile]: {
                            width: "100%",
                        },
                        [BREAKPOINTS.tablet]: {
                            width: "50%",
                        },
                        [BREAKPOINTS.desktop]: {
                            width: "100%",
                        },
                        [BREAKPOINTS.large]: {
                            width: "100%",
                        },
                    }}
                >
                    Cada gole revela um equilíbrio perfeito
                    entre sabor e cuidado, pensado para
                    nutrir você.
                </Typography>
            </Stack>
        </Container>
    );
}