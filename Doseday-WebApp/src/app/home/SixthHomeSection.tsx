import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { redirect } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { BREAKPOINTS } from "../../@types/breakpoints";

interface TextsProps {
  isVisible: boolean;
}

const Texts = ({ isVisible }: TextsProps) => {
  const theme = useTheme();
  const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      alignItems="flex-start"
      gap={4}
      sx={{
        [BREAKPOINTS.mobile]: {
          width: "100%",
        },
        [BREAKPOINTS.tablet]: {
          width: "80%",
        },
        [BREAKPOINTS.desktop]: {
          width: "60rem",
        },
        [BREAKPOINTS.large]: {
          width: "22rem",
        },
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition:
          "opacity 1200ms cubic-bezier(0.22, 1, 0.36, 1) 100ms, transform 1200ms cubic-bezier(0.22, 1, 0.36, 1) 100ms",
        willChange: "opacity, transform",
      }}
    >
      <Stack alignItems="flex-start" gap={2} alignSelf="stretch">
        <Typography
          sx={{
            alignSelf: "stretch",
            color: "#35271B",
            fontFamily: "var(--font-sf-pro-display)",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "120%",
            [BREAKPOINTS.mobile]: {
              fontSize: "1.5rem",
              paddingTop: "4rem",
            },
            [BREAKPOINTS.tablet]: {
              fontSize: "2rem",
              paddingTop: "2rem",
            },
            [BREAKPOINTS.desktop]: {
              fontSize: "2rem",
              paddingTop: "0",
            },
            [BREAKPOINTS.large]: {
              fontSize: "2.5rem",
              paddingTop: "0",
            },
          }}
        >
          Energia que flui
          {isTabletOrSmaller ? " " : <br />}
          com sua
          <span
            style={{
              color: "#FE9AC1",
              fontFamily: "Kombin",
              fontWeight: "400",
              marginLeft: "8px",
            }}
          >
            leveza
          </span>
        </Typography>
        <Typography
          sx={{
            alignSelf: "stretch",
            color: "#7A7D85",
            fontFamily: "var(--font-sf-pro-text)",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "150%",
            [BREAKPOINTS.mobile]: {
              fontSize: "0.875rem",
            },
            [BREAKPOINTS.tablet]: {
              fontSize: "0.875rem",
            },
            [BREAKPOINTS.desktop]: {
              fontSize: "0.875rem",
            },
            [BREAKPOINTS.large]: {
              fontSize: "1rem",
            },
          }}
        >
          Uma energia suave que dança junto ao seu tempo, despertando força com
          delicadeza. Doseday é o toque sutil que transforma sua rotina em um
          fluxo de vitalidade e leveza, onde corpo e mente encontram harmonia.
        </Typography>
      </Stack>
      <Button
        onClick={() => redirect("/product")}
        sx={{
          display: "flex",
          height: "3rem",
          padding: "0.5rem 1.25rem",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
          borderRadius: "2.5rem",
          backgroundColor: "#FE9AC1",
          color: "var(--brand-black, #35271B)",
          fontFamily: "var(--font-sf-pro-display)",
          fontSize: "1rem",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "150%",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          transition: "padding 0.2s ease",
          "&:hover": {
            paddingLeft: "3rem",
            paddingRight: "3rem",
          },
        }}
      >
        Comprar agora
      </Button>
    </Stack>
  );
};

interface ImageBoxProps {
  imageUrl: string;
  text: string;
  offsetY?: string;
  isVisible: boolean;
  index: number;
}

const ImageBox = ({
  imageUrl,
  text,
  offsetY = "0",
  isVisible,
  index,
}: ImageBoxProps) => {
  const delay = 200 + index * 150;

  return (
    <Box
      height="100%"
      flexShrink={0}
      borderRadius="2.25rem"
      sx={{
        aspectRatio: "555/1000",
        background: `linear-gradient(0deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.20) 100%), url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        position: "relative",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(60px)",
        transition: `opacity 1300ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 1300ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: "opacity, transform",
        [BREAKPOINTS.mobile]: {
          marginTop: 0,
          width: "100%",
        },
        [BREAKPOINTS.tablet]: {
          marginTop: offsetY,
          width: "34%",
        },
        [BREAKPOINTS.desktop]: {
          marginTop: offsetY,
          width: "34%",
        },
        [BREAKPOINTS.large]: {
          marginTop: offsetY,
          width: "34%",
        },
      }}
    >
      <Stack
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          sx={{
            width: { xs: "15rem", md: "11rem" },
            color: "#E6E6E6",
            textAlign: "center",
            fontFamily: "Kombin",
            fontWeight: 400,
            lineHeight: "120%",
            fontSize: "1.125rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 1000ms cubic-bezier(0.22, 1, 0.36, 1) ${
              delay + 300
            }ms, transform 1000ms cubic-bezier(0.22, 1, 0.36, 1) ${
              delay + 300
            }ms`,
            willChange: "opacity, transform",
          }}
        >
          {text}
        </Typography>
      </Stack>
    </Box>
  );
};

const EasterEggCoupon = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));

  const [isVisible, setIsVisible] = useState(false);
  const [showCouponCode, setShowCouponCode] = useState(false);
  const [position, setPosition] = useState({ x: 200 });

  const handleOwlClick = () => {
    if (isVisible) {
      setIsVisible(false);
      setPosition({ x: 200 });
      setShowCouponCode(false);
    } else {
      setIsVisible(true);
      setPosition({ x: 186 });
    }
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        position: "absolute",
        right: position.x - 190,
        top: isMobile ? "16rem" : "6rem",
        width: "fit-content",
        height: "fit-content",
        zIndex: 1000,
        transform: isVisible ? "none" : "translateX(92%)",
        transition: "all 0.3s ease",
      }}
    >
      <Box
        component="img"
        src="/home/owl-sided.png"
        onClick={handleOwlClick}
        sx={{
          width: "4rem",
          height: "4rem",
          aspectRatio: "1/1",
          flexShrink: 0,
          zIndex: 1,
          position: "relative",
          marginRight: "-2rem",
          animation: !isVisible ? "shake 0.5s infinite" : "none",
          cursor: "pointer",
          "@keyframes shake": {
            "0%, 100%": { transform: "translateX(0)" },
            "25%": { transform: "translateX(-2px)" },
            "75%": { transform: "translateX(2px)" },
          },
        }}
      />

      <Stack
        sx={{
          position: "relative",
          width: "17.7rem",
          height: "5.4rem",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "3rem",
          paddingRight: "3rem",
          backgroundImage: 'url("/home/coupon.svg")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          zIndex: 2,
          cursor: "pointer",
        }}
        onClick={() => setShowCouponCode(true)}
      >
        <Typography
          sx={{
            color: "#35271B",
            fontFamily: "var(--font-sf-pro-display)",
            fontSize: "1.15rem",
            fontWeight: 600,
            lineHeight: 1.3,
            margin: 0,
            textAlign: "center",
            maxWidth: "12.5rem",
            opacity: showCouponCode ? 0 : 1,
            transition: "opacity 0.3s ease",
          }}
        >
          {showCouponCode ? "" : "Clique para ganhar um cupom de desconto."}
        </Typography>

        <Typography
          sx={{
            color: "#35271B",
            fontFamily: "var(--font-sf-pro-display)",
            fontSize: "1.5rem",
            fontWeight: 700,
            lineHeight: 1.3,
            margin: 0,
            textAlign: "center",
            position: "absolute",
            opacity: showCouponCode ? 1 : 0,
            transform: showCouponCode ? "scale(1)" : "scale(0.8)",
            transition: "all 0.3s ease",
          }}
        >
          DOSEDAY10
        </Typography>
      </Stack>
    </Stack>
  );
};

export default function SixthHomeSection() {
  const sectionRef = useRef(null);
  const [visibleText, setVisibleText] = useState(false);
  const [visibleImages, setVisibleImages] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisibleText(true), 150);
          setTimeout(() => setVisibleImages(true), 400);
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
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Container
        component={Stack}
        ref={sectionRef}
        direction="row"
        justifyContent="space-between"
        flexShrink={0}
        height="100%"
        sx={{
          [BREAKPOINTS.mobile]: {
            maxWidth: "xs",
            flexDirection: "column",
            gap: "2rem",
          },
          [BREAKPOINTS.tablet]: {
            maxWidth: "md",
            flexDirection: "column",
            gap: "6rem",
          },
          [BREAKPOINTS.desktop]: {
            maxWidth: "lg",
            flexDirection: "row",
            paddingTop: "10rem",
            paddingBottom: "7rem",
          },
          [BREAKPOINTS.large]: {
            maxWidth: "2xl",
            flexDirection: "row",
            paddingTop: "10rem",
            paddingBottom: "7rem",
          },
        }}
      >
        <Texts isVisible={visibleText} />
        <Stack
          flexShrink={0}
          gap={4}
          sx={{
            [BREAKPOINTS.mobile]: {
              maxWidth: "xs",
              flexDirection: "column",
              height: "100%",
            },
            [BREAKPOINTS.tablet]: {
              maxWidth: "md",
              flexDirection: "row",
              marginRight: "5rem",
              height: "100%",
            },
            [BREAKPOINTS.desktop]: {
              maxWidth: "lg",
              flexDirection: "row",
              marginRight: "5rem",
              height: "20rem",
            },
            [BREAKPOINTS.large]: {
              maxWidth: "2xl",
              flexDirection: "row",
              marginRight: "7rem",
              height: "24rem",
            },
          }}
        >
          <ImageBox
            imageUrl={"/home/photo-1-sixth-home-section.png"}
            text={"Beleza de dentro pra fora"}
            isVisible={visibleImages}
            index={0}
          />
          <ImageBox
            imageUrl={"/home/photo-2-sixth-home-section.png"}
            text={"Leveza real"}
            offsetY="-3rem"
            isVisible={visibleImages}
            index={1}
          />
          <ImageBox
            imageUrl={"/home/photo-3-sixth-home-section.png"}
            text={"Energia limpa"}
            isVisible={visibleImages}
            index={2}
          />
        </Stack>
      </Container>
      <EasterEggCoupon />
    </Box>
  );
}
