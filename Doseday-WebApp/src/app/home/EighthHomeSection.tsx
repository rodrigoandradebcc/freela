import { ArrowBack, ArrowForward, Close, PlayArrow } from "@mui/icons-material";
import {
  Box,
  Card,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "@mui/material/Link";
import { useCallback, useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { BREAKPOINTS } from "../../@types/breakpoints";

const BoxStyled = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  aspectRatio: "9 / 16",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "12px",
  overflow: "hidden",
  backgroundColor: "#f5f5f5",
  position: "relative",
}));

interface VideoBoxProps {
  thumbnailUrl: string;
  onPlay: () => void;
}

const VideoBox = ({ thumbnailUrl, onPlay }: VideoBoxProps) => {
  return (
    <BoxStyled>
      <Box
        component="img"
        src={thumbnailUrl}
        alt="thumbnail"
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          objectFit: "cover",
          borderRadius: "inherit",
        }}
      />
      <IconButton
        onClick={onPlay}
        sx={{
          position: "absolute",
          bottom: "1rem",
          left: "1rem",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 1)",
          },
        }}
      >
        <PlayArrow />
      </IconButton>
    </BoxStyled>
  );
};

interface VideoCarouselProps {
  onVideoPlay: (videoUrl: string) => void;
  isVisible: boolean;
}

interface VideoPopupProps {
  videoUrl?: string | null;
  onClose: () => void;
}

const VideoPopup = ({ videoUrl, onClose }: VideoPopupProps) => {
  if (!videoUrl) return null;

  return (
    <Stack
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        width: { xs: "90%", sm: "70%", md: "40%", lg: "25%" },
        height: { xs: "30%", sm: "40%", md: "50%" },
        backgroundColor: "#000",
        boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column",
        borderRadius: 1,
        overflow: "hidden",
        zIndex: 999,
      }}
    >
      <IconButton
        size="small"
        onClick={onClose}
        sx={{
          position: "absolute",
          color: "white",
          right: 10,
          top: 10,
          zIndex: 1,
        }}
      >
        <Close />
      </IconButton>
      <video
        src={videoUrl}
        controls
        controlsList="nodownload"
        autoPlay
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </Stack>
  );
};

export default function EighthHomeSection() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [popupVideoUrl, setPopupVideoUrl] = useState<string | null>(null);
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);

  const theme = useTheme();
  const isDesktopOrGreater = useMediaQuery(theme.breakpoints.up("lg"));

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
        rootMargin: "-60px 0px",
      }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  const videos = [
    {
      videoUrl: "https://doseday-bkt.s3.us-east-2.amazonaws.com/video-1.mp4",
      thumbnailUrl:
        "https://doseday-bkt.s3.us-east-2.amazonaws.com/thumb-1.png",
    },
    {
      videoUrl: "https://doseday-bkt.s3.us-east-2.amazonaws.com/video-2.mp4",
      thumbnailUrl:
        "https://doseday-bkt.s3.us-east-2.amazonaws.com/thumb-2.png",
    },
    {
      videoUrl: "https://doseday-bkt.s3.us-east-2.amazonaws.com/video-3.mp4",
      thumbnailUrl:
        "https://doseday-bkt.s3.us-east-2.amazonaws.com/thumb-3.png",
    },
    {
      videoUrl: "https://doseday-bkt.s3.us-east-2.amazonaws.com/video-4.mp4",
      thumbnailUrl:
        "https://doseday-bkt.s3.us-east-2.amazonaws.com/thumb-4.png",
    },
    {
      videoUrl: "https://doseday-bkt.s3.us-east-2.amazonaws.com/video-5.mp4",
      thumbnailUrl:
        "https://doseday-bkt.s3.us-east-2.amazonaws.com/thumb-5.png",
    },
  ];

  const getMaxSlidesPerView = () => {
    if (window.innerWidth >= 2000) return 5;
    if (window.innerWidth >= 1200) return 4;
    if (window.innerWidth >= 900) return 3.3;
    if (window.innerWidth >= 600) return 2.3;
    return 1.3;
  };

  const needToDisableNavigationButtons =
    isDesktopOrGreater && videos.length <= getMaxSlidesPerView();

  const VideoCarousel = useCallback(
    ({ onVideoPlay, isVisible }: VideoCarouselProps) => {
      return (
        <Swiper
          modules={[Navigation]}
          breakpoints={{
            0: { slidesPerView: 1.3, spaceBetween: 10 },
            600: { slidesPerView: 2.3, spaceBetween: 15 },
            900: { slidesPerView: 3.3, spaceBetween: 15 },
            1200: { slidesPerView: 4, spaceBetween: 10 },
            2000: { slidesPerView: 5, spaceBetween: 10 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setIsEnd(swiper.isEnd);
            setIsBeginning(swiper.isBeginning);
          }}
          style={{ marginTop: "2rem" }}
        >
          {videos.map(({ thumbnailUrl, videoUrl }, index) => (
            <SwiperSlide
              key={index}
              onClick={() => openVideoPopup(videoUrl)}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
                transition: `opacity 1000ms cubic-bezier(0.22, 1, 0.36, 1) ${
                  200 + index * 100
                }ms, transform 1000ms cubic-bezier(0.22, 1, 0.36, 1) ${
                  200 + index * 100
                }ms`,
                willChange: "opacity, transform",
              }}
            >
              <Card
                sx={{
                  borderRadius: 1,
                  width: "100%",
                  maxWidth: { xs: 290, "2xl": 350 },
                  display: "inline-block",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
              >
                <VideoBox
                  key={index}
                  thumbnailUrl={thumbnailUrl}
                  onPlay={() => onVideoPlay(videoUrl)}
                />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      );
    },
    []
  );

  const openVideoPopup = (videoUrl: string) => {
    setPopupVideoUrl(videoUrl);
  };

  const closeVideoPopup = () => {
    setPopupVideoUrl(null);
  };

  return (
    <>
      <Container
        component={Stack}
        ref={sectionRef}
        direction="row"
        justifyContent="space-between"
        flexShrink={0}
        height="100%"
        paddingTop={5}
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
          direction={{ xs: "column", md: "row" }}
          pr={{ xs: 0, md: 10 }}
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: { xs: 4, md: 0 },
            paddingRight: "0 !important",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            transition:
              "opacity 1200ms cubic-bezier(0.22, 1, 0.36, 1) 100ms, transform 1200ms cubic-bezier(0.22, 1, 0.36, 1) 100ms",
            willChange: "opacity, transform",
          }}
        >
          <Stack width="100%" alignItems="flex-start" gap={2} flexShrink={0}>
            <Typography
              sx={{
                alignSelf: "stretch",
                color: "#35271B",
                fontFamily: "var(--font-sf-pro-display)",
                fontSize: { xs: "1.5rem", md: "2.5rem" },
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "120%",
              }}
            >
              O café preferido das
              <br />
              <span
                style={{
                  fontFamily: "Kombin",
                  color: "#FE9AC1",
                }}
              >
                {" "}
                influenciadoras digitais
              </span>
            </Typography>

            <Typography
              sx={{
                color: "#7A7D85",
                fontFamily: "var(--font-sf-pro-text)",
                fontSize: "1rem",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "150%",
              }}
            >
              Escolhido por mulheres que buscam beleza,
              <br />
              energia e autenticidade em cada gole.
            </Typography>
          </Stack>

          {!needToDisableNavigationButtons && (
            <Stack
              direction="row"
              sx={{
                gap: 1,
                alignItems: "center",
              }}
            >
              <IconButton
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isBeginning}
                sx={{
                  border: "1px solid #D9D9D9",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  color: "#35271B",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "#FE9AC1",
                    color: "white",
                    borderColor: "#FE9AC1",
                  },
                  "&:disabled": {
                    opacity: 0.7,
                    cursor: "not-allowed",
                    borderColor: "#D9D9D9",
                  },
                }}
              >
                <ArrowBack fontSize="small" />
              </IconButton>
              <IconButton
                onClick={() => swiperRef.current?.slideNext()}
                disabled={isEnd}
                sx={{
                  border: "1px solid #D9D9D9",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  color: "#35271B",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "#FE9AC1",
                    color: "white",
                    borderColor: "#FE9AC1",
                  },
                  "&:disabled": {
                    opacity: 0.7,
                    cursor: "not-allowed",
                    borderColor: "#D9D9D9",
                  },
                }}
              >
                <ArrowForward fontSize="small" />
              </IconButton>
            </Stack>
          )}
        </Stack>
      </Container>
      <Container
        sx={{
          [BREAKPOINTS.mobile]: {
            maxWidth: "xs",
          },
          [BREAKPOINTS.tablet]: {
            maxWidth: "md",
          },
          [BREAKPOINTS.desktop]: {
            maxWidth: "lg",
            "& .swiper-wrapper": {
              alignItems: "left !important",
              justifyContent: "left !important",
            },
          },
          [BREAKPOINTS.large]: {
            maxWidth: "2xl",
            "& .swiper-wrapper": {
              alignItems: "center !important",
              justifyContent: "center !important",
            },
          },
          "& .swiper-slide:last-child": {
            marginRight: "0 !important",
          },
        }}
      >
        <VideoCarousel onVideoPlay={openVideoPopup} isVisible={isVisible} />
      </Container>

      <Container
        component={Stack}
        justifyContent="center"
        alignItems="center"
        flexShrink={0}
        height="100%"
        paddingY={5}
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
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          transition:
            "opacity 1200ms cubic-bezier(0.22, 1, 0.36, 1) 300ms, transform 1200ms cubic-bezier(0.22, 1, 0.36, 1) 300ms",
          willChange: "opacity, transform",
        }}
      >
        <Divider
          sx={{
            width: "100%",
            height: "0.06rem",
            backgroundColor: "#EBEDF0",
            marginBottom: 5,
          }}
        />
        <Stack
          direction={{ xs: "column", md: "row" }}
          width="100%"
          alignItems={{ md: "center" }}
          justifyContent="space-between"
          gap={{ xs: 4, md: 6 }}
        >
          <Stack
            alignItems={{ xs: "center", md: "flex-start" }}
            justifyContent="space-between"
            direction={{ xs: "row", md: "column" }}
            gap={{ md: 5 }}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={1}
            >
              <Box
                component="a"
                href="https://www.instagram.com/dosedaybrasil"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "inline-block",
                  width: 22,
                  height: 22,
                  cursor: "pointer",
                }}
              >
                <Box
                  component="img"
                  src="/home/instagram-logo.svg"
                  alt="Instagram"
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Link
                href="https://www.instagram.com/dosedaybrasil"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{
                  color: "#F095BA",
                  fontFamily: "var(--font-sf-pro-text)",
                  fontSize: "1.2rem",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "110%",
                }}
              >
                @dosedaybrasil
              </Link>
            </Stack>
            <Typography
              sx={{
                color: "#52514F",
                fontFamily: "var(--font-sf-pro-text)",
                fontSize: "0.875rem",
                fontStyle: "italic",
                fontWeight: "400",
                lineHeight: "150%",
              }}
            >
              Feito delas para elas!
            </Typography>
          </Stack>
          <Typography
            sx={{
              color: "#35271B",
              fontFamily: "var(--font-sf-pro-text)",
              fontSize: "1rem",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%",
            }}
            maxWidth={750}
          >
            Doseday não é apenas um café, é um convite à experiência completa do
            autocuidado feminino,{" "}
            <span style={{ color: "#7A7D85" }}>
              uma celebração da força, da leveza e da autenticidade que cada
              mulher carrega. Nosso blend exclusivo nutre corpo, mente e alma,
              conectando mulheres reais que inspiram, transformam e vivem com
              propósito, elegância e poder em cada momento da sua rotina.
            </span>
          </Typography>
        </Stack>
      </Container>
      <VideoPopup videoUrl={popupVideoUrl} onClose={closeVideoPopup} />
    </>
  );
}
