import { Box, Button, Container, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BREAKPOINTS } from "../../@types/breakpoints";

interface TextAndImagesProps {
    isVisibleText: boolean;
    isVisibleImages: boolean;
}

const TextAndImages = ({ isVisibleText, isVisibleImages }: TextAndImagesProps) => {
    return (
        <>
            <Stack
                justifyContent="space-between"
                alignItems="flex-start"
                width="100%"
                sx={{
                    [BREAKPOINTS.mobile]: {
                        flexDirection: "column",
                        gap: "1.5rem"
                    },
                    [BREAKPOINTS.tablet]: {
                        flexDirection: "column",
                        gap: "1.5rem"
                    },
                    [BREAKPOINTS.desktop]: {
                        flexDirection: "row"
                    },
                    [BREAKPOINTS.large]: {
                        flexDirection: "row"
                    }
                }}
            >
                <Stack
                    alignItems="flex-start"
                    gap={4}
                    flexShrink={0}
                    sx={{
                        transform: isVisibleText ? "translateY(0)" : "translateY(40px)",
                        transition: "transform 1100ms cubic-bezier(0.22, 1, 0.36, 1) 120ms",
                        willChange: "transform",
                        [BREAKPOINTS.tablet]: {
                            width: "34rem"
                        },
                        [BREAKPOINTS.desktop]: {
                            width: "34rem"
                        },
                        [BREAKPOINTS.large]: {
                            width: "34rem"
                        }
                    }}
                >
                    <Typography
                        sx={{
                            gap: '0.625rem',
                            alignSelf: 'stretch',
                            color: '#35271B',
                            fontFamily: 'var(--font-sf-pro-display)',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            lineHeight: '120%',
                            [BREAKPOINTS.mobile]: {
                                fontSize: '1.5rem',
                            },
                            [BREAKPOINTS.tablet]: {
                                fontSize: '2rem',
                            },
                            [BREAKPOINTS.desktop]: {
                                fontSize: '2.5rem',
                            },
                            [BREAKPOINTS.large]: {
                                fontSize: '2.5rem',
                            }
                        }}
                    >
                        Desfrute de uma <span style={{ color: "#FE9AC1", fontFamily: "Kombin", fontWeight: "400" }}>experiência</span>
                        <br />
                        que vai além do sabor
                    </Typography>
                    <Button
                        onClick={() => redirect('/product')}
                        sx={{
                            display: 'flex',
                            height: '3rem',
                            padding: '0.5rem 1.25rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '0.5rem',
                            borderRadius: '2.5rem',
                            backgroundColor: '#FE9AC1',
                            color: 'var(--brand-black, #35271B)',
                            fontFamily: 'var(--font-sf-pro-display)',
                            fontSize: '1rem',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '150%',
                            paddingLeft: '1.5rem',
                            paddingRight: '1.5rem',
                            transition: 'padding 0.2s ease',
                            '&:hover': {
                                paddingLeft: '3rem',
                                paddingRight: '3rem',
                            },
                        }}
                    >
                        Comprar agora
                    </Button>
                </Stack>

                <Typography
                    sx={{
                        width: '22rem',
                        flexShrink: 0,
                        color: '#7A7D85',
                        textAlign: 'right',
                        fontFamily: 'var(--font-sf-pro-text)',
                        fontSize: '1rem',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '150%',
                        transform: isVisibleText ? "translateY(0)" : "translateY(48px)",
                        transition: "transform 1150ms cubic-bezier(0.22, 1, 0.36, 1) 220ms",
                        willChange: "transform",
                        [BREAKPOINTS.mobile]: {
                            textAlign: 'left',
                        },
                        [BREAKPOINTS.tablet]: {
                            textAlign: 'left',
                        },
                        [BREAKPOINTS.desktop]: {
                            textAlign: 'right',
                        },
                        [BREAKPOINTS.large]: {
                            textAlign: 'right',
                        }
                    }}
                >
                    Doseday é um convite diário ao autocuidado. Um café que nutre por dentro, reflete por fora e conecta você ao que realmente importa.
                </Typography>
            </Stack>

            <Stack
                direction="row"
                alignItems="flex-start"
                gap={5}
                width="100%"
                sx={{
                    [BREAKPOINTS.mobile]: {
                        flexDirection: "column"
                    },
                    [BREAKPOINTS.tablet]: {
                        flexDirection: "row",
                    },
                    [BREAKPOINTS.desktop]: {
                        flexDirection: "row"
                    },
                    [BREAKPOINTS.large]: {
                        flexDirection: "row"
                    }
                }}
            >
                <Box
                    component="img"
                    src="/home/photo-1-fourth-home-section-large.png"
                    alt="Foto 1"
                    borderRadius="1.5rem"
                    sx={{
                        objectFit: 'cover',
                        objectPosition: 'top',
                        width: "100%",
                        transform: isVisibleImages ? "translateY(0)" : "translateY(70px)",
                        opacity: isVisibleImages ? 1 : 0,
                        transition: "transform 1300ms cubic-bezier(0.22, 1, 0.36, 1) 160ms, opacity 1200ms ease-out 160ms",
                        willChange: "transform, opacity",
                        [BREAKPOINTS.mobile]: {
                            height: "21rem"
                        },
                        [BREAKPOINTS.tablet]: {
                            height: "14rem"
                        },
                        [BREAKPOINTS.desktop]: {
                            height: "23rem"
                        },
                        [BREAKPOINTS.large]: {
                            height: "33rem"
                        }
                    }}
                />
                <Box
                    component="img"
                    src="/home/photo-2-fourth-home-section-large.png"
                    alt="Foto 2"
                    borderRadius="1.5rem"
                    sx={{
                        objectFit: 'cover',
                        transform: isVisibleImages ? "translateY(0)" : "translateY(80px)",
                        opacity: isVisibleImages ? 1 : 0,
                        transition: "transform 1450ms cubic-bezier(0.22, 1, 0.36, 1) 280ms, opacity 1250ms ease-out 280ms",
                        willChange: "transform, opacity",
                        [BREAKPOINTS.mobile]: {
                            width: "100%",
                            height: "21rem"
                        },
                        [BREAKPOINTS.tablet]: {
                            marginTop: "-7rem",
                            width: "100%",
                            height: "21rem"
                        },
                        [BREAKPOINTS.desktop]: {
                            marginTop: "-7rem",
                            width: "100%",
                            height: "30rem"
                        },
                        [BREAKPOINTS.large]: {
                            marginTop: "-7rem",
                            width: "30rem",
                            height: "40rem"
                        }
                    }}
                />
            </Stack>
        </>
    );
};

interface InfoBoxProps {
    iconUrl: string;
    text: string;
    isVisible: boolean;
    index: number;
}

const InfoBox = ({ iconUrl, text, isVisible, index }: InfoBoxProps) => {
    const imgDelay = 180 + index * 180;
    const textDelay = 260 + index * 180;

    return (
        <Stack
            alignItems="flex-start"
            gap={2}
            flex="1 0 0"
            sx={{
                [BREAKPOINTS.mobile]: {
                    flexDirection: "column",
                },
                [BREAKPOINTS.tablet]: {
                    flexDirection: "row",
                },
                [BREAKPOINTS.desktop]: {
                    flexDirection: "column",
                },
                [BREAKPOINTS.large]: {
                    flexDirection: "column",
                }
            }}
        >
            <Image
                src={iconUrl}
                alt="Doseday"
                width={35}
                height={34}
                style={{
                    objectFit: 'cover',
                    transform: isVisible ? "translateY(0)" : "translateY(40px)",
                    opacity: isVisible ? 1 : 0,
                    transition: `transform 1200ms cubic-bezier(0.22, 1, 0.36, 1) ${imgDelay}ms, opacity 1000ms ease-out ${imgDelay}ms`,
                    willChange: 'transform, opacity'
                }}
            />
            <Typography
                sx={{
                    alignSelf: 'stretch',
                    color: 'var(--subtitle, #7A7D85)',
                    fontFamily: 'var(--font-sf-pro-text)',
                    fontSize: '0.875rem',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '150%',
                    transform: isVisible ? "translateY(0)" : "translateY(44px)",
                    transition: `transform 1250ms cubic-bezier(0.22, 1, 0.36, 1) ${textDelay}ms`,
                    willChange: 'transform'
                }}
            >
                {text}
            </Typography>
        </Stack>
    );
};

export default function FourthHomeSection() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [visibleText, setVisibleText] = useState(false);
    const [visibleImages, setVisibleImages] = useState(false);
    const [visibleInfo, setVisibleInfo] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setVisibleText(true), 200);
                    setTimeout(() => setVisibleImages(true), 500);
                    setTimeout(() => setVisibleInfo(true), 800);
                }
            },
            {
                threshold: 0.15,
                rootMargin: "-80px 0px"
            }
        );

        observer.observe(el);
        return () => observer.unobserve(el);
    }, []);

    return (
        <Container
            component={Stack}
            ref={sectionRef}
            padding="5rem 22rem"
            justifyContent="center"
            alignItems="center"
            sx={{
                [BREAKPOINTS.mobile]: {
                    maxWidth: "xs",
                    gap: "2rem",
                    paddingTop: "3rem",
                },
                [BREAKPOINTS.tablet]: {
                    maxWidth: "md",
                    gap: "2rem",
                    paddingTop: "3rem",
                },
                [BREAKPOINTS.desktop]: {
                    maxWidth: "lg",
                    gap: "4rem",
                    paddingTop: "5rem",
                },
                [BREAKPOINTS.large]: {
                    maxWidth: "2xl",
                    gap: "4.5rem",
                }
            }}
        >
            <TextAndImages
                isVisibleText={visibleText}
                isVisibleImages={visibleImages}
            />

            <Stack alignItems="flex-start" gap={8}>
                <Divider
                    sx={{
                        width: '100%',
                        height: '0.06rem',
                        backgroundColor: '#EBEDF0'
                    }}
                />

                <Stack
                    alignItems="flex-start"
                    alignSelf="stretch"
                    sx={{
                        [BREAKPOINTS.mobile]: {
                            flexDirection: "column",
                            gap: "2rem"
                        },
                        [BREAKPOINTS.tablet]: {
                            flexDirection: "column",
                            gap: "2.5rem"
                        },
                        [BREAKPOINTS.desktop]: {
                            flexDirection: "row",
                            gap: "3rem"
                        },
                        [BREAKPOINTS.large]: {
                            flexDirection: "row",
                            gap: "3.5rem"
                        }
                    }}
                >
                    <InfoBox
                        iconUrl={"/home/body-icon.svg"}
                        text={"Com colágeno Verisol®, biotina e vitaminas antioxidantes, Doseday fortalece pele, cabelos e unhas, promovendo firmeza, brilho e vitalidade visível de dentro para fora."}
                        isVisible={visibleInfo}
                        index={0}
                    />
                    <InfoBox
                        iconUrl={"/home/face-icon.svg"}
                        text={"Ingredientes naturais que ajudam a reduzir o inchaço e ativam o metabolismo com suavidade, promovendo uma sensação de leveza e bem-estar ao longo do dia."}
                        isVisible={visibleInfo}
                        index={1}
                    />
                    <InfoBox
                        iconUrl={"/home/thunder-icon.svg"}
                        text={"Com cafeína time-release, CoQ10 e vitaminas do complexo B, Doseday oferece energia equilibrada e foco duradouro, mantendo sua vitalidade sem picos ou quedas bruscas."}
                        isVisible={visibleInfo}
                        index={2}
                    />
                </Stack>
            </Stack>
        </Container>
    );
}