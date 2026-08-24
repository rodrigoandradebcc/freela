import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { BREAKPOINTS } from "../../@types/breakpoints";

const IconButtonWithHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleOpen}
        sx={{
          display: "flex",
          flexShrink: 0,
          padding: "0.75rem 1.75rem 0.75rem 1.25rem",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
          borderRadius: "76.375rem",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: isHovered ? "transparent" : "#FFF",
          fontFamily: "var(--font-sf-pro-text)",
          color: "#E6E6E6",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "120%",
          transition: "background-color 0.3s ease, color 0.3s ease",
          "&:hover": {
            background: "#FE9AC1",
            color: "#000",
          },
          willChange: "transform, opacity",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
          [BREAKPOINTS.mobile]: {
            fontSize: "0.575rem",
          },
          [BREAKPOINTS.tablet]: {
            fontSize: "0.875rem",
          },
          [BREAKPOINTS.desktop]: {
            fontSize: "0.875rem",
          },
          [BREAKPOINTS.large]: {
            fontSize: "0.875rem",
          },
        }}
      >
        <Box
          component="img"
          src={
            isHovered
              ? "/home/dark-button-play-icon.svg"
              : "/home/light-button-play-icon.svg"
          }
          alt="Play Icon"
          sx={{
            width: "1.25rem",
            height: "1.25rem",
            flexShrink: 0,
            aspectRatio: "1/1",
            transition: "width 0.3s ease, height 0.3s ease",
          }}
        />
        <Typography
          sx={{
            color: "inherit",
            fontFamily: "inherit",
            lineHeight: "inherit",
          }}
        >
          Assista nosso vídeo
        </Typography>
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="2xl"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "transparent",
            boxShadow: "none",
            overflow: "hidden",
            height: "100%",
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            color: "white",
          }}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>

        <DialogContent
          sx={{ p: 0, position: "relative", paddingTop: "56.25%" }}
        >
          <iframe
            src="https://player.vimeo.com/video/1112906440?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0"
            title="MANIFESTO_FINAL"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "8px",
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default function FifthHomeSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.25,
        rootMargin: "-80px 0px",
      }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <Stack
      ref={sectionRef}
      justifyContent="flex-end"
      alignItems="center"
      sx={{
        height: "80vh",
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 100%), url('/home/background-fifth-home-section_mobile.jpg')`,

        backgroundPosition: {
          xs: "65% center",
          md: "center",
        },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        flexShrink: 0,
        paddingBottom: 8,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition:
          "opacity 1200ms cubic-bezier(0.22, 1, 0.36, 1), transform 1200ms cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "opacity, transform",
      }}
    >
      <Container
        component={Stack}
        width="100%"
        sx={{
          [BREAKPOINTS.mobile]: {
            maxWidth: "xs",
            flexDirection: "column-reverse",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            gap: "2rem",
          },
          [BREAKPOINTS.tablet]: {
            maxWidth: "md",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
          },
          [BREAKPOINTS.desktop]: {
            maxWidth: "lg",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
          },
          [BREAKPOINTS.large]: {
            maxWidth: "2xl",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
          },
        }}
      >
        <IconButtonWithHover />
        <Stack
          alignItems="flex-start"
          justifyContent="flex-end"
          gap={2}
          sx={{
            [BREAKPOINTS.mobile]: {
              maxWidth: "100%",
            },
            [BREAKPOINTS.tablet]: {
              maxWidth: "50%",
            },
            [BREAKPOINTS.desktop]: {
              maxWidth: "40%",
            },
            [BREAKPOINTS.large]: {
              maxWidth: "40%",
            },
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition:
              "opacity 1300ms cubic-bezier(0.22, 1, 0.36, 1) 200ms, transform 1300ms cubic-bezier(0.22, 1, 0.36, 1) 200ms",
            willChange: "opacity, transform",
          }}
        >
          <Typography
            sx={{
              color: "#E6E6E6",
              fontFamily: "var(--font-sf-pro-display)",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "110%",
              [BREAKPOINTS.mobile]: {
                fontSize: "1.5rem",
              },
              [BREAKPOINTS.tablet]: {
                fontSize: "2rem",
              },
              [BREAKPOINTS.desktop]: {
                fontSize: "2.5rem",
              },
              [BREAKPOINTS.large]: {
                fontSize: "2.5rem",
              },
            }}
          >
            Descubra o segredo
            <br />
            por trás da{" "}
            <span
              style={{
                color: "#FE9AC1",
                fontFamily: "Kombin",
              }}
            >
              Doseday
            </span>
          </Typography>
          <Typography
            sx={{
              color: "#CCCCCC",
              fontFamily: "var(--font-sf-pro-text)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "150%",
              fontSize: "1rem",
            }}
          >
            Conheça a harmonia entre sabor, ingredientes funcionais e uma
            experiência que vai além do café, conectando corpo, mente e
            comunidade.
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
}
