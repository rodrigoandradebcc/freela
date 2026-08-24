import { useState, useEffect, useRef } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: Date | string): TimeLeft {
  const now = new Date().getTime();
  const target = new Date(targetDate).getTime();
  const difference = Math.max(target - now, 0);

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(targetDate)
  );
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const tick = () => {
      const newTimeLeft = calculateTimeLeft(targetDate);

      if (
        newTimeLeft.days !== timeLeft.days ||
        newTimeLeft.hours !== timeLeft.hours ||
        newTimeLeft.minutes !== timeLeft.minutes ||
        newTimeLeft.seconds !== timeLeft.seconds
      ) {
        setTimeLeft(newTimeLeft);
      }

      const now = Date.now();
      const delay = 1000 - (now % 1000);

      timeoutRef.current = setTimeout(tick, delay);
    };

    tick();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [targetDate, timeLeft]);

  return timeLeft;
}
