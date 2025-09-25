// src/components/site/GlassesPanel.tsx
"use client";

import Image from "next/image";
import Reveal from "@/components/anim/Reveal";

const GLASSES_SRC = "/images/ray-ban-meta-smart-glass-png-removebg-preview.png";

export function GlassesPanel() {
  return (
    <section className="section mt-20 md:mt-28 relative z-10" id="glasses">
      <Reveal>
        <div className="relative mx-auto w-full max-w-4xl rounded-3xl glass overflow-hidden">
          <div className="relative aspect-[16/7]">
            <Image
              src={GLASSES_SRC}
              alt="Ray-Ban Meta smart glasses"
              fill
              priority
              sizes="(min-width: 1024px) 800px, 92vw"
              className="object-contain p-6 md:p-10"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
