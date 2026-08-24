import { Box, Container, Stack, Typography, keyframes, useMediaQuery, useTheme } from "@mui/material";
import { SxProps, Theme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { BREAKPOINTS } from "../../@types/breakpoints";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

interface RotatingTextProps {
    sx?: SxProps<Theme>;
}

export const RotatingText: React.FC<RotatingTextProps> = ({ sx }) => {
    const text = 'Self-Love • Beauty Coffee • Wellness Ritual • ';
    const characters = text.split('');
    const radius = 95;
    const circleSize = radius * 1.15;

    return (
        <Box
            sx={{
                width: circleSize+85,
                height: circleSize,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                ...sx,
            }}
        >
            <Box
                sx={{
                    width: '1%',
                    height: '1%',
                    animation: `${spin} 20s linear infinite`,
                }}
            >
                {characters.map((char, index) => {
                    const angleDeg = (360 / characters.length) * index - 90;

                    return (
                        <Box
                            key={index}
                            sx={{
                                position: 'absolute',
                                height: `${radius}px`,
                                transform: `translate(-50%, -100%) rotate(${angleDeg}deg)`,
                                transformOrigin: 'bottom center',
                                fontFamily: 'SF Pro Display, sans-serif',
                                fontSize: '1.25rem',
                                fontWeight: 400,
                                color: 'rgb(53, 39, 27)',
                                userSelect: 'none',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            {char}
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

export default function SecondHomeSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.only('xs'));

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <Container
            component={Stack}
            direction="row"
            alignItems="flex-start"
            justifyContent="space-between"
            flexShrink={0}
            sx={{
                [BREAKPOINTS.mobile]: {
                    maxWidth: "xs",
                    paddingY: "1.5rem"
                },
                [BREAKPOINTS.tablet]: {
                    maxWidth: "md",
                    paddingY: "2rem"
                },
                [BREAKPOINTS.desktop]: {
                    maxWidth: "lg",
                    paddingY: "3.75rem"
                },
                [BREAKPOINTS.large]: {
                    maxWidth: "2xl",
                    paddingY: "3.75rem"
                }
            }}
        >
            <Stack
                alignItems="flex-start"
                flexShrink={0}
                sx={{
                    [BREAKPOINTS.mobile]: {
                        flexDirection: "column",
                        gap: "1rem"
                    },
                    [BREAKPOINTS.tablet]: {
                        flexDirection: "column",
                        gap: "1rem"
                    },
                    [BREAKPOINTS.desktop]: {
                        flexDirection: "row",
                        gap: "3rem"
                    },
                    [BREAKPOINTS.large]: {
                        flexDirection: "row",
                        gap: "6rem"
                    }
                }}
            >
                <Typography
                    sx={{
                        color: '#52514F',
                        textAlign: 'center',
                        fontFamily: 'var(--font-sf-pro-display)',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '150%',
                        transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
                        opacity: isVisible ? 1 : 0,
                        transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        [BREAKPOINTS.mobile]: {
                            fontSize: '0.75rem',
                        },
                        [BREAKPOINTS.tablet]: {
                            fontSize: '0.875rem',
                        },
                        [BREAKPOINTS.desktop]: {
                            fontSize: '1.125rem',
                        },
                        [BREAKPOINTS.large]: {
                            fontSize: '1.125rem',
                        }
                    }}
                >
                    Cada dose, um cuidado
                </Typography>
                <Stack
                    alignItems="flex-start"
                    gap={2}
                    sx={{
                        transform: isVisible ? 'translateX(0)' : 'translateX(120px)',
                        opacity: isVisible ? 1 : 0,
                        transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s',
                        [BREAKPOINTS.mobile]: {
                            maxWidth: '350px',
                        },
                        [BREAKPOINTS.tablet]: {
                            maxWidth: 'md',
                        },
                        [BREAKPOINTS.desktop]: {
                            maxWidth: 'lg',
                        },
                        [BREAKPOINTS.large]: {
                            maxWidth: '2xl',
                        }
                    }}
                >
                    <Typography
                        sx={{
                            color: '#35271B',
                            fontFamily: 'var(--font-sf-pro-display)',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            lineHeight: '110%',
                            [BREAKPOINTS.mobile]: {
                                fontSize: '1.25rem',
                            },
                            [BREAKPOINTS.tablet]: {
                                fontSize: '1.75rem',
                            },
                            [BREAKPOINTS.desktop]: {
                                fontSize: '2.25rem',
                            },
                            [BREAKPOINTS.large]: {
                                fontSize: '2.5rem',
                            }
                        }}
                    >
                        Não apenas um café. Sua melhor
                        <br />
                        versão, em uma <span
                            style={{
                                fontFamily: 'Kombin',
                                color: '#FE9AC1',
                                fontWeight: '400'
                            }}
                        >
                            dose
                        </span> por dia!
                    </Typography>
                    <Typography
                        sx={{
                            color: '#7A7D85',
                            fontFamily: 'var(--font-sf-pro-text)',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '150%',
                            [BREAKPOINTS.mobile]: {
                                fontSize: '0.75rem',
                            },
                            [BREAKPOINTS.tablet]: {
                                fontSize: '1rem',
                            },
                            [BREAKPOINTS.desktop]: {
                                fontSize: '1rem',
                            },
                            [BREAKPOINTS.large]: {
                                fontSize: '1rem',
                            }
                        }}
                    >
                        Cada detalhe da Doseday foi pensado para oferecer autocuidado,
                        {!isMobile && <br />}
                        leveza e energia. Esqueça o café comum, abrace sua melhor versão.
                    </Typography>
                </Stack>
            </Stack>
            {!isMobile && <RotatingText
                sx={{
                    transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(80px) scale(0.8)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'all 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s',
                    [BREAKPOINTS.tablet]: {
                        mt: 3,
                    },
                    [BREAKPOINTS.desktop]: {
                        mt: 1,
                        ml: -1
                    },
                    [BREAKPOINTS.large]: {
                        mt: 2,
                        ml: -5
                    }
                }} />}
        </Container>
    )
}