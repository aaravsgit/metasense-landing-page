"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  ScanFace,
  Mic,
  ShieldCheck,
  Sparkles,
  Brain,
  Database,
} from "lucide-react";

/** Easing as a cubic-bezier tuple (typed so framer-motion v11 TS accepts it) */
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Fade + rise animation helpers */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(2px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: EASE }, // <-- fixed
  },
};

export function FeatureBlocks() {
  const features = [
    {
      title: "Know who's with you",
      description:
        "Memoray helps you recognize familiar faces and relationships, right when it matters—subtle, private, and on your terms.",
      Icon: ScanFace,
    },
    {
      title: "Move with confidence",
      description:
        "Create gentle boundaries and get peace-of-mind updates, so independence stays safe for you and your circle.",
      Icon: ShieldCheck,
    },
    {
      title: "Remember what matters",
      description:
        "From medication to appointments, reminders arrive when they're useful—not noisy. Fewer taps, more clarity.",
      Icon: Sparkles,
    },
    {
      title: "Care, together",
      description:
        "Share the right info with the right people. Notes, updates, and reminders that keep caregivers aligned.",
      Icon: Brain,
    },
  ];

  return (
    <section className="relative">
      {/* Subtle moving background accents (classes defined in globals.css) */}
      <div className="vision-radials" aria-hidden />
      <div className="vision-scan" aria-hidden />

      <div className="section relative z-10">
        <div className="text-center mb-10">
          <div className="badge mx-auto">Why Memoray</div>
          <h2 className="heading-section mt-5">
            Designed for real life—private by default.
          </h2>
          <p className="mt-4 text-zinc-300/80 max-w-2xl mx-auto">
            Memoray pairs Ray-Ban Meta glasses with gentle software to support
            day-to-day memory, without getting in the way.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ margin: "0px 0px -20% 0px", amount: 0.2, once: false }}
        >
          {features.map(({ title, description, Icon }, i) => (
            <motion.div key={i} variants={item}>
              <div className="glass h-full p-5 sm:p-6 hover:shadow-[0_20px_60px_-20px_rgba(147,51,234,.55)] transition-shadow">
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl
                               bg-gradient-to-br from-violet-600/25 to-fuchsia-500/20
                               border border-white/10"
                  >
                    <Icon className="h-6 w-6 text-violet-300" />
                  </div>
                  <div>
                    <h3 className="text-[1.05rem] font-semibold leading-tight">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300/85">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
