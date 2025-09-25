"use client";
import TypeCycle from "@/components/typing/TypeCycle";
import { Reveal } from "@/components/anim/Reveal";

const steps = [
  {
    title: "Pair your glasses & create a profile",
    desc: "Connect Ray-Ban Meta glasses and add trusted faces (family, friends, caregivers). Everything stays private and editable.",
  },
  {
    title: "On-demand recognition & gentle prompts",
    desc: "Say “MetaSense, who is this?” (or tap). We detect faces on-device and show names, context, and reminders—never intrusive.",
  },
  {
    title: "Practice & insights",
    desc: "Turn encounters into memory practice. Quick quizzes, streaks, and optional speech trend checks to watch for early signs.",
  },
];

export function HowItWorks() {
  return (
    <div id="how" className="section">
      <Reveal delay={0.05}>
        <div className="mb-8 flex justify-center">
          <span className="badge">How it works</span>
        </div>
      </Reveal>

      {/* Typing cycle in the section heading */}
      <Reveal delay={0.12}>
        <h2 className="heading-section text-center">
          Getting started is{" "}
          <span className="font-display">
            <TypeCycle
              phrases={[
                "private.",
                "hands-free.",
                "on-demand.",
                "gentle.",
                "built for real life.",
              ]}
              className="font-display"
            />
          </span>
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-3 max-w-[640px] text-center text-white/65">
          A streamlined, privacy-first flow designed for real life—at home or on the go.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={0.15 + i * 0.08}>
            <div className="glass relative p-7">
              <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs">
                  {i + 1}
                </div>
              </div>
              <div className="mt-3 text-[17px] font-semibold">{s.title}</div>
              <p className="mt-2 text-sm leading-6 text-white/70">{s.desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/5" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 rounded-b-[28px] bg-gradient-to-t from-violet-600/20 to-transparent" />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
