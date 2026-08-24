/**
 * Contagem regressiva até uma data ISO (ex: `2026-08-29T22:00:00-03:00`).
 *
 * O ISO já carrega o offset `-03:00`, então a conta é feita em epoch-ms puro:
 * funciona igual em qualquer fuso do cliente, sem conversão manual.
 */

import { useEffect, useMemo, useState } from 'react';

export interface CountdownValue {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isExpired: boolean;
}

const EXPIRED: CountdownValue = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
  isExpired: true,
};

const pad = (n: number): string => String(n).padStart(2, '0');

export function useCountdown(targetIso: string): CountdownValue {
  // Parse feito uma única vez por `targetIso` (dependência primitiva).
  const targetMs = useMemo(() => new Date(targetIso).getTime(), [targetIso]);

  // Único estado do hook: o "agora" do último tick. Tudo o mais é derivado no render.
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    // ISO inválido: não há o que contar, nem interval a criar.
    if (Number.isNaN(targetMs)) return;

    const id = setInterval(() => {
      // `Date.now()` só é lido dentro do callback — o corpo do render segue puro.
      setNow(() => Date.now());

      // Assim que a contagem zera, o relógio para: sem isto o interval seguiria
      // disparando um re-render por segundo para sempre depois de expirar.
      if (Date.now() >= targetMs) clearInterval(id);
    }, 1000);

    return () => clearInterval(id);
    // `targetMs` é primitivo e estável enquanto `targetIso` não muda, então o
    // interval não é recriado à toa; se a data mudar, o relógio reinicia certo.
  }, [targetMs]);

  // --- Estado derivado: calculado no render, nunca guardado em estado próprio. ---
  if (Number.isNaN(targetMs)) return EXPIRED;

  const diff = targetMs - now;
  if (diff <= 0) return EXPIRED;

  const sec = Math.floor(diff / 1000);

  return {
    days: pad(Math.floor(sec / 86400)),
    hours: pad(Math.floor(sec / 3600) % 24),
    minutes: pad(Math.floor(sec / 60) % 60),
    seconds: pad(sec % 60),
    isExpired: false,
  };
}
