import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState, type ReactNode } from "react";
import { SignupModal } from "../modal/modal";
import PreSaleContainer from "./PreSaleContainer";

const TARGET_DATE = new Date("2025-08-18T00:00:00");

interface FullTimerBoxProperties {
  value: string;
  text: string;
}

function FullTimerBox({ value, text }: FullTimerBoxProperties) {
  return (
    <Stack
      gap={{ xs: "0.75rem", lg: "1.25rem" }}
      alignItems="center"
      justifyContent="center"
    >
      <TimerBox>{value}</TimerBox>
      <TimerText>{text}</TimerText>
    </Stack>
  );
}

interface ChildrenProperties {
  children: ReactNode;
}

function TimerBox({ children }: ChildrenProperties) {
  return (
    <Stack
      gap={{ xs: "0.25rem", lg: "1rem" }}
      padding="1rem"
      justifyContent="center"
      alignItems="center"
      borderRadius="1rem"
      bgcolor="#F4EDE3"
    >
      <Typography
        sx={{
          color: "#35271B",
          textAlign: "center",
          fontFamily: "Kombin",
          fontSize: { xs: "1.625rem", lg: "3rem" },
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: { xs: "1.625rem", lg: "3rem" },
        }}
      >
        {children}
      </Typography>
    </Stack>
  );
}

function TimerText({ children }: ChildrenProperties) {
  return (
    <Typography
      sx={{
        color: "#F4EDE3",
        textAlign: "center",
        fontFamily: "Kombin",
        fontSize: { xs: "0.625rem", lg: "1.25rem" },
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
      }}
    >
      {children}
    </Typography>
  );
}

const TimerPoint = () => {
  return (
    <Box
      sx={{
        width: { xs: "0.3rem", lg: "0.625rem" },
        height: { xs: "0.3rem", lg: "0.625rem" },
        borderRadius: "50%",
        backgroundColor: "#F4EDE3",
        alignSelf: "stretch",
      }}
    />
  );
};

const TimerTwoPoints = () => {
  return (
    <Stack gap={{ xs: "0.5rem", lg: "1rem" }}>
      <TimerPoint />
      <TimerPoint />
    </Stack>
  );
};

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};

const AvatarList = () => {
  const avatars = [];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));

  const maxAvatars = isMobile ? 5 : 14;

  for (let i = 1; i <= maxAvatars; i++) {
    avatars.push(
      <Avatar
        key={i}
        src={`/pre-sale/third-section/avatars/avatar${i}.png`}
        sx={{
          width: "3.4375rem",
          height: "3.5rem", 
          border: "1.5px solid #F095BA",
          bgcolor: "lightgray",
        }}
      />
    );
  }

  return (
    <AvatarGroup
      max={maxAvatars}
      spacing={10}
      sx={{
        "& .MuiAvatar-root": {
          width: "3.4375rem",
          height: "3.5rem",
          border: "1.5px solid #F095BA",
          bgcolor: "lightgray",
        },
      }}
    >
      {avatars}
    </AvatarGroup>
  );
};

export default function ThirdSection() {
  const timeLeft = useCountdown(TARGET_DATE);
  const [open, setOpen] = useState(false);

  const formatTimeValue = (value: number): string => {
    return value.toString().padStart(2, "0");
  };

  return (
    <PreSaleContainer
      component={Stack}
      maxWidth="xl"
      alignItems="flex-start"
      gap={7}
      alignSelf="stretch"
    >
      <Stack
        gap={1}
        padding={{ xs: "1.5rem 1rem", lg: "3.5rem 3.5rem" }}
        justifyContent="center"
        alignItems="center"
        alignSelf="stretch"
        borderRadius="3rem"
        sx={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url('/pre-sale/third-section/timer-background.webp')",
          backgroundPosition: "center, 50%",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "100% 100%, cover",
        }}
      >
        <Stack
          gap={{ xs: "0.625rem", lg: "1.125rem" }}
          alignItems="center"
          alignSelf="stretch"
          flex="1"
        >
          <Typography
            sx={{
              color: "#F4EDE3",
              textAlign: "center",
              fontFamily: "Kombin",
              fontSize: { xs: "1.5rem", lg: "2.25rem" },
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: { xs: "2.25rem", lg: "3.5rem" },
            }}
          >
            Faltam apenas...
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            gap={{ xs: "0.75rem", lg: "2.5rem" }}
          >
            <FullTimerBox value={formatTimeValue(timeLeft.days)} text="Dias" />
            <TimerTwoPoints />
            <FullTimerBox
              value={formatTimeValue(timeLeft.hours)}
              text="horas"
            />
            <TimerTwoPoints />
            <FullTimerBox
              value={formatTimeValue(timeLeft.minutes)}
              text="minutos"
            />
            <TimerTwoPoints />
            <FullTimerBox
              value={formatTimeValue(timeLeft.seconds)}
              text="segundos"
            />
          </Stack>
          <Typography
            sx={{
              color: "#F4EDE3",
              textAlign: "center",
              fontFamily: "Kombin",
              fontSize: { xs: "1.25rem", lg: "2.25rem" },
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: { xs: "1.5rem", lg: "normal" },
            }}
          >
            Para o início da pré-venda
          </Typography>
          <Stack
            gap={2}
            width="100%"
            padding="2rem"
            justifyContent="center"
            alignItems="center"
            borderRadius="2rem"
            bgcolor="#F4EDE3"
          >
            <AvatarList />
            <Typography
              sx={{
                color: "#35271B",
                textAlign: "center",
                fontFamily: "Space Grotesk",
                fontSize: { xs: "1rem", lg: "1.25rem" },
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            >
              + 2.000 mulheres já estão cadastradas para a nova era da beleza.
            </Typography>
            <Button
              onClick={() => setOpen(true)}
              sx={{
                display: "flex",
                width: "100%",
                maxWidth: "25.6875rem",
                height: "3.5rem",
                padding: "1rem 0.625rem",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.625rem",
                borderRadius: "6.1875rem",
                backgroundColor: "#F095BA",
                color: "#000",
                fontFamily: "Space Grotesk",
                fontSize: { xs: "1rem", lg: "1.25rem" },
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "2rem",
              }}
            >
              COMPRAR NA PRÉ-VENDA
            </Button>

            <SignupModal open={open} onClose={() => setOpen(false)} />
          </Stack>
        </Stack>
      </Stack>
    </PreSaleContainer>
  );
}
