"use client";

import { useEffect } from "react";

/**
 * Updates CSS custom properties --mx / --my / --spot-opacity
 * so the ::after spotlight in globals.css can follow the mouse.
 */
export function MouseSpotlight() {
  useEffect(() => {
    const r = document.documentElement;

    const onMove = (e: MouseEvent) => {
      r.style.setProperty("--mx", `${e.clientX}px`);
      r.style.setProperty("--my", `${e.clientY}px`);
      r.style.setProperty("--spot-opacity", "1");
    };

    const onLeave = () => {
      r.style.setProperty("--spot-opacity", "0");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return null;
}
