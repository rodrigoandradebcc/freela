import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import { BREAKPOINTS } from "../../@types/breakpoints";
import { useRef, useEffect, useState } from "react";

interface NinethHomeSectionProps {
    isEnable?: boolean;
}

export default function NinethHomeSection({ isEnable = true }: NinethHomeSectionProps) {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2,
                rootMargin: "-60px 0px"
            }
        );

        observer.observe(el);
        return () => observer.unobserve(el);
    }, []);

    return (
        <Stack
            ref={sectionRef}
            justifyContent="center"
            alignItems="center"
            sx={{
                height: "70vh",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                [BREAKPOINTS.mobile]: {
                    backgroundImage: `url('/home/background-nineth-home-section-mobile.png')`,
                },
                [BREAKPOINTS.tablet]: {
                    backgroundImage: `url('/home/background-nineth-home-section-tablet.png')`,
                },
                [BREAKPOINTS.desktop]: {
                    backgroundImage: `url('/home/background-nineth-home-section-desktop.png')`,
                },
                [BREAKPOINTS.large]: {
                    backgroundImage: `url('/home/background-nineth-home-section.png')`,
                },
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'opacity 1200ms cubic-bezier(0.22, 1, 0.36, 1) 100ms, transform 1200ms cubic-bezier(0.22, 1, 0.36, 1) 100ms',
                willChange: 'opacity, transform',
            }}
        >
            <Container
                component={Stack}
                alignItems="flex-start"
                flexShrink={0}
                gap={3}
                sx={{
                    [BREAKPOINTS.mobile]: {
                        maxWidth: "xs",
                    },
                    [BREAKPOINTS.tablet]: {
                        maxWidth: "md"
                    },
                    [BREAKPOINTS.desktop]: {
                        maxWidth: "lg"
                    },
                    [BREAKPOINTS.large]: {
                        maxWidth: "2xl"
                    }
                }}
            >
                <Stack
                    direction="row"
                    width="26rem"
                    flexShrink={0}
                >
                    <Typography
                        sx={{
                            color: "#FFF",
                            fontFamily: "var(--font-sf-pro-display)",
                            fontSize: "2.25rem",
                            fontStyle: "normal",
                            fontWeight: 600,
                            lineHeight: "120%",
                        }}
                    >
                        O único café funcional
                        <br />
                        feito para elas {" "}
                        <Box
                            component="img"
                            src="/home/text-photo-nineth-home-section.png"
                            alt="Foto"
                            sx={{
                                display: "inline-block",
                                verticalAlign: "middle"
                            }}
                        />
                    </Typography>
                </Stack>
                {isEnable && <Button
                    onClick={() => redirect('/product')}
                    sx={{
                        display: 'flex',
                        height: '3rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '2.5rem',
                        backgroundColor: '#FE9AC1',
                        color: '#35271B',
                        fontFamily: 'var(--font-sf-pro-display)',
                        fontSize: '1rem',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '150%',
                        transition: 'padding 0.2s ease',
                        '&:hover': {
                            paddingLeft: '3rem',
                            paddingRight: '3rem',
                        },
                    }}
                >
                    Comprar agora
                </Button>}
            </Container>
        </Stack>
    );
}