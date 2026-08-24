import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { BREAKPOINTS } from "../../@types/breakpoints";

export default function ThirdHomeSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Stack
      ref={sectionRef}
      direction="row"
      justifyContent="space-between"
      sx={{
        height: "80vh",
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.25) 100%), url('/home/background-third-home-section-large.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        flexShrink: 0,
      }}
    >
      <Container
        component={Stack}
        direction="row"
        justifyContent="space-between"
        flexShrink={0}
        sx={{
          [BREAKPOINTS.mobile]: {
            maxWidth: "xs",
          },
          [BREAKPOINTS.tablet]: {
            maxWidth: "md",
          },
          [BREAKPOINTS.desktop]: {
            maxWidth: "lg",
          },
          [BREAKPOINTS.large]: {
            maxWidth: "2xl",
          },
        }}
      >
        <Stack
          width="30rem"
          alignItems="flex-start"
          gap={1}
          justifyContent="flex-end"
          height="100%"
          sx={{
            transform: isVisible
              ? "translateX(0) rotateY(0deg)"
              : "translateX(-150px) rotateY(-15deg)",
            opacity: isVisible ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            transformStyle: "preserve-3d",
            [BREAKPOINTS.mobile]: {
              paddingBottom: "2rem",
            },
            [BREAKPOINTS.tablet]: {
              paddingBottom: "5rem",
            },
            [BREAKPOINTS.desktop]: {
              paddingBottom: "5rem",
            },
            [BREAKPOINTS.large]: {
              paddingBottom: "7rem",
            },
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              fontFamily: "var(--font-sf-pro-display)",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "110%",
              transform: isVisible
                ? "translateX(0) scale(1)"
                : "translateX(-80px) scale(0.9)",
              opacity: isVisible ? 1 : 0,
              transition:
                "all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s",
              [BREAKPOINTS.mobile]: {
                fontSize: "2rem",
              },
              [BREAKPOINTS.tablet]: {
                fontSize: "3rem",
              },
              [BREAKPOINTS.desktop]: {
                fontSize: "3rem",
              },
              [BREAKPOINTS.large]: {
                fontSize: "3rem",
              },
            }}
          >
            Muito mais que
            <br />
            um{" "}
            <span
              style={{
                color: "#FE9AC1",
                fontFamily: "Kombin",
                fontWeight: "400",
              }}
            >
              café funcional
            </span>
          </Typography>
          <Typography
            sx={{
              color: "#FFFFFFCC",
              fontFamily: "var(--font-sf-pro-display-text",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "150%",
              transform: isVisible ? "translateX(0)" : "translateX(-120px)",
              opacity: isVisible ? 1 : 0,
              transition: "all 1.8s cubic-bezier(0.23, 1, 0.32, 1) 0.5s",
              [BREAKPOINTS.mobile]: {
                fontSize: "1rem",
              },
              [BREAKPOINTS.tablet]: {
                fontSize: "2rem",
              },
              [BREAKPOINTS.desktop]: {
                fontSize: "2rem",
              },
              [BREAKPOINTS.large]: {
                fontSize: "2rem",
              },
            }}
          >
            Doseday Beauty Coffee é o café funcional mais completo do mercado e
            o primeiro do Brasil criado e pensado para mulheres. Além de cuidar
            da sua pele e cabelo de dentro pra fora, ele também te dá energia
            limpa e acelera seu metabolismo, auxiliando na redução do inchaço e
            queima calórica.
          </Typography>
        </Stack>
        {!isMobile && (
          <Box
            component="img"
            src="/home/big-arrow-down.svg"
            alt="Seta para baixo"
            sx={{
              position: "relative",
              transform: isVisible ? "translateY(0)" : "translateY(-160px)",
              opacity: isVisible ? 1 : 0,
              transition:
                "transform 700ms cubic-bezier(.2,.9,.1,1) 0.6s, opacity 300ms ease-out 0.6s",
              [BREAKPOINTS.mobile]: { width: 24, height: "70%" },
              [BREAKPOINTS.tablet]: { top: "10rem", width: 24, height: "70%" },
              [BREAKPOINTS.desktop]: { top: "8rem", width: 36, height: "70%" },
              [BREAKPOINTS.large]: { top: "11rem", width: 60, height: "70%" },
            }}
          />
        )}
      </Container>
    </Stack>
  );
}
