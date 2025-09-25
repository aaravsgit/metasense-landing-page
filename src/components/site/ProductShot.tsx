// src/components/site/ProductShot.tsx
"use client";

import Image from "next/image";
import Reveal from "@/components/anim/Reveal";

const DASHBOARD_SRC = "/demos/demo-dashboard.svg";

export function ProductShot() {
  return (
    <section className="section mt-14 md:mt-16 relative z-10">
      <Reveal>
        <div className="relative mx-auto w-full max-w-5xl rounded-3xl glass overflow-hidden">
          <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-fuchsia-500/20 via-purple-500/30 to-fuchsia-500/20 blur-xl" />
          <div className="relative aspect-[16/8] md:aspect-[16/7]">
            <Image
              src={DASHBOARD_SRC}
              alt="MetaSense prototype dashboard"
              fill
              priority
              sizes="(min-width: 1024px) 960px, 92vw"
              className="object-contain p-6 md:p-10"
            />
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-white/45">
          Prototype visuals. Replace with your own photo or render.
        </p>
      </Reveal>
    </section>
  );
}
