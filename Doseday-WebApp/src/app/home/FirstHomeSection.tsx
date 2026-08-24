import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import { BREAKPOINTS } from "../../@types/breakpoints";
import { useEffect, useState } from "react";

export default function FirstHomeSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <Stack
      sx={{
        height: "100%",
        backgroundImage: {
          xs: `linear-gradient(0deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.25) 100%), url('/home/first_section_mobile_image.png')`,
          sm: `linear-gradient(0deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.25) 100%), url('/home/background-first-home-section.png')`,
        },
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        flexShrink: 0,
      }}
    >
      <Container
        component={Stack}
        flexShrink={0}
        sx={{
          [BREAKPOINTS.mobile]: {
            maxWidth: "xs",
            paddingTop: "3rem",
          },
          [BREAKPOINTS.tablet]: {
            paddingTop: "4rem",
          },
          [BREAKPOINTS.desktop]: {
            maxWidth: "lg",
            paddingTop: "5rem",
          },
          [BREAKPOINTS.large]: {
            maxWidth: "2xl",
            paddingTop: "6rem",
          },
        }}
      >
        <Stack
          alignItems="flex-start"
          sx={{
            display: "inline-flex",
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            opacity: isVisible ? 1 : 0,
            transition: "all 1.2s ease-out",
            [BREAKPOINTS.mobile]: {
              gap: "1rem",
            },
            [BREAKPOINTS.tablet]: {
              gap: "1rem",
            },
            [BREAKPOINTS.desktop]: {
              gap: "1.5rem",
            },
            [BREAKPOINTS.large]: {
              gap: "1.5rem",
            },
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              fontFamily: "var(--font-sf-pro-display)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%",
              [BREAKPOINTS.mobile]: {
                fontSize: "1rem",
              },
              [BREAKPOINTS.tablet]: {
                fontSize: "1.15rem",
              },
              [BREAKPOINTS.desktop]: {
                fontSize: "1.15rem",
              },
              [BREAKPOINTS.large]: {
                fontSize: "1.15rem",
              },
            }}
          >
            FEITO PARA MULHERES QUE SE CUIDAM
          </Typography>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontFamily: "var(--font-sf-pro-display)",
              fontSize: "3.5rem",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "120%",
              [BREAKPOINTS.mobile]: {
                fontSize: "1.75rem",
                width: "21rem",
              },
              [BREAKPOINTS.tablet]: {
                fontSize: "2.25rem",
                width: "24rem",
              },
              [BREAKPOINTS.desktop]: {
                fontSize: "2.75rem",
                width: "30rem",
              },
              [BREAKPOINTS.large]: {
                fontSize: "3.25rem",
                width: "35rem",
              },
            }}
          >
            O primeiro
            <span
              style={{
                marginLeft: "5px",
                fontFamily: "Kombin",
                color: "#FE9AC1",
              }}
            >
              Beauty Coffee
            </span>{" "}
            do Brasil. <br /> O café que te deixa bonita, focada e gostosa
          </Typography>
          <Button
            onClick={() => redirect("/product")}
            sx={{
              display: "flex",
              padding: "0.5rem 1.25rem",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              borderRadius: "2.5rem",
              backgroundColor: "#FE9AC1",
              color: "#35271B",
              fontFamily: "var(--font-sf-pro-display)",
              fontWeight: "500",
              lineHeight: "150%",
              fontSize: "1rem",
              [BREAKPOINTS.mobile]: {},
              [BREAKPOINTS.tablet]: {},
              [BREAKPOINTS.desktop]: {
                "&:hover": {
                  paddingLeft: "3rem",
                  paddingRight: "3rem",
                },
                transition: "padding 0.2s ease",
                paddingLeft: "2rem",
                paddingRight: "2rem",
              },
              [BREAKPOINTS.large]: {
                "&:hover": {
                  paddingLeft: "3rem",
                  paddingRight: "3rem",
                },
                transition: "padding 0.2s ease",
                paddingLeft: "2rem",
                paddingRight: "2rem",
              },
            }}
          >
            Comprar agora
          </Button>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            opacity: isVisible ? 1 : 0,
            transition: "all 0.8s ease-out 0.3s",
            [BREAKPOINTS.mobile]: {
              paddingTop: "22rem",
              paddingBottom: "2rem",
            },
            [BREAKPOINTS.tablet]: {
              paddingTop: "25rem",
              paddingBottom: "2rem",
            },
            [BREAKPOINTS.desktop]: {
              paddingTop: "26rem",
              paddingBottom: "5rem",
            },
            [BREAKPOINTS.large]: {
              paddingTop: "40rem",
              paddingBottom: "5rem",
            },
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              textAlign: "center",
              fontFamily: "var(--font-sf-pro-display)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%",
              whiteSpace: "nowrap",
              flexShrink: 0,
              [BREAKPOINTS.mobile]: {
                fontSize: "1rem",
              },
              [BREAKPOINTS.tablet]: {
                fontSize: "1.25rem",
              },
              [BREAKPOINTS.desktop]: {
                fontSize: "1.25rem",
              },
              [BREAKPOINTS.large]: {
                fontSize: "1.25rem",
              },
            }}
          >
            Beauty Coffee Brasil
          </Typography>
          <Box
            component="img"
            src="/home/arrows-down.svg"
            alt="Setas para baixo"
            sx={{
              [BREAKPOINTS.mobile]: {
                width: 24,
                height: 24,
              },
              [BREAKPOINTS.tablet]: {
                width: 24,
                height: 24,
              },
              [BREAKPOINTS.desktop]: {
                width: 36,
                height: 36,
              },
              [BREAKPOINTS.large]: {
                width: 36,
                height: 36,
              },
            }}
          />
        </Stack>
      </Container>
    </Stack>
  );
}
