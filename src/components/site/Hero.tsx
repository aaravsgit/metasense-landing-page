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
            Gentle <span className="font-accent">memory</span> cues.
          </h1>

          <p className="text-lg text-white/80">
            Face recognition and reminders—private by default. Optional speech check-ins to watch trends early.
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

          <div className="text-sm text-white/50 mt-2">Your data, your control.</div>
        </div>
      </Reveal>
    </section>
  );
}
