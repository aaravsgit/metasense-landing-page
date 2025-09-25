"use client";
import Image from "next/image";
import { Reveal } from "@/components/anim/Reveal";

export function Hero() {
  return (
    <div className="section-narrow relative z-10 text-center">
      <Reveal delay={0.05}>
        <div className="mb-7 flex justify-center">
          <span className="badge">Built for Ray-Ban Meta smart glasses</span>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <h1 className="heading-hero">
          Gentle <span className="font-display">memory</span> cues.
        </h1>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-5 max-w-[680px] text-base text-white/70">
          Face recognition and reminders—private by default. Optional speech check-ins to watch trends early.
        </p>
      </Reveal>

      <Reveal delay={0.28}>
        <div className="mt-7 flex justify-center gap-3">
          <a href="#get" className="btn-primary">Get Started</a>
          <a href="#how" className="badge">How it works</a>
        </div>
      </Reveal>

      <Reveal delay={0.36}>
        <p className="mt-3 text-xs text-white/40">Your data, your control.</p>
      </Reveal>

      <Reveal delay={0.44}>
        <div className="glass mx-auto mt-12 max-w-[900px] overflow-hidden p-3">
          <div className="relative aspect-[16/9] w-full rounded-[20px] bg-black">
            <Image
              src="/demos/demo-dashboard.svg"
              alt="MetaSense dashboard demo"
              fill
              className="object-cover rounded-[20px]"
              priority
            />
          </div>
        </div>
      </Reveal>
    </div>
  );
}
