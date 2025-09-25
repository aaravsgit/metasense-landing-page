// src/components/anim/Reveal.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  delayMs?: number;
  /** how much must be visible to trigger (0..1) */
  threshold?: number;
};

export default function Reveal({ children, delayMs = 0, threshold = 0.2 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect(); // once only
          }
        });
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [shown, threshold]);

  return (
    <div
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0px)" : "translateY(16px)",
        filter: shown ? "blur(0px)" : "blur(2px)",
        transition: "opacity 700ms ease, transform 700ms ease, filter 700ms ease",
        transitionDelay: `${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}
