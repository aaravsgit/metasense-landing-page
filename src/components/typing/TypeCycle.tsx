// src/components/typing/TypeCycle.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Phrase = string | { text: string; accent?: boolean };

function getText(p: Phrase) {
  return typeof p === "string" ? p : p.text;
}
function getAccent(p: Phrase) {
  return typeof p === "object" && !!p.accent;
}

export function TypeCycle({
  phrases,
  typeMs = 36,   // per-character type speed
  holdMs = 1050,  // pause after finishing a phrase
  eraseMs = 18,   // per-character erase speed
}: {
  phrases: Phrase[];
  typeMs?: number;
  holdMs?: number;
  eraseMs?: number;
}) {
  // Keep a stable reference to the array
  const items = useMemo(() => phrases, [phrases]);

  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "erasing">("typing");

  const timerRef = useRef<number | null>(null);
  const clearTimer = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    const full = getText(items[idx]);

    if (phase === "typing") {
      if (typed.length < full.length) {
        timerRef.current = window.setTimeout(() => {
          setTyped(full.slice(0, typed.length + 1));
        }, typeMs) as unknown as number;
      } else {
        timerRef.current = window.setTimeout(() => setPhase("holding"), holdMs) as unknown as number;
      }
    } else if (phase === "holding") {
      timerRef.current = window.setTimeout(() => setPhase("erasing"), holdMs) as unknown as number;
    } else if (phase === "erasing") {
      if (typed.length > 0) {
        timerRef.current = window.setTimeout(() => {
          setTyped(full.slice(0, typed.length - 1));
        }, eraseMs) as unknown as number;
      } else {
        setIdx((i) => (i + 1) % items.length);
        setPhase("typing");
      }
    }

    return clearTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typed, phase, idx, items, typeMs, holdMs, eraseMs]);

  const accent = getAccent(items[idx]);

  return (
    <span>
      <span className={accent ? "font-accent" : undefined}>{typed}</span>
      <span className="type-caret">|</span>
    </span>
  );
}
