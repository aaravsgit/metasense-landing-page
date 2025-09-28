// src/components/site/GlassesPanel.tsx
"use client";

import Image from "next/image";
import Reveal from "@/components/anim/Reveal";

const GLASSES_SRC = "/images/ray-ban-meta-smart-glass-png-removebg-preview.png";

export function GlassesPanel() {
  return (
    <section className="section mt-20 md:mt-28 relative z-10" id="glasses">
      <Reveal>
        <div className="text-center mb-8">
          <h2 className="heading-section">Works with Ray-Ban Meta glasses</h2>
          <p className="mt-4 text-zinc-300/80 max-w-2xl mx-auto">
            See the day through your lens. Memoray pairs with Ray-Ban Meta to bring gentle prompts and recognition cues—hands-free, glance-quick, and always your data.
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-4xl rounded-3xl glass overflow-hidden">
          <div className="relative aspect-[16/7]">
            <Image
              src={GLASSES_SRC}
              alt="Ray-Ban Meta smart glasses with Memoray integration"
              fill
              priority
              sizes="(min-width: 1024px) 800px, 92vw"
              className="object-contain p-6 md:p-10"
            />
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-white/45">
          Product shot shown with Ray-Ban Meta smart glasses.
        </p>
        <div className="text-center mt-6">
          <a href="#get-started" className="btn-primary">Explore the experience</a>
        </div>
      </Reveal>
    </section>
  );
}
