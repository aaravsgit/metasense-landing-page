// src/components/site/Hero.tsx
"use client";

import Link from "next/link";
import Reveal from "@/components/anim/Reveal";

export function Hero() {
  return (
    <section className="section pt-28 md:pt-32 text-center relative z-10">
      <Reveal>
        <div className="mx-auto max-w-3xl flex flex-col items-center gap-6">
          <div className="badge">Built for Ray-Ban Meta smart glasses</div>

          <h1 className="heading-hero">
            Memoray
          </h1>

          <p className="text-lg text-white/80">
            Your memories, supported.
          </p>

          <p className="text-base text-white/70 max-w-2xl">
            Memoray turns everyday moments into calm, confident living—face recognition, gentle reminders, and safe zones that feel invisible until you need them.
          </p>

          <div className="flex items-center gap-4 mt-1">
            <Link href="#get-started" className="btn-primary">Get Started</Link>
            <Link
              href="#how-it-works"
              className="glass px-5 py-3 rounded-full text-white/90 hover:bg-white/10 transition"
            >
              How it works
            </Link>
          </div>

          <div className="text-sm text-white/50 mt-2">Calm, private, and caregiver-ready—creating memorays.</div>
        </div>
      </Reveal>
    </section>
  );
}
