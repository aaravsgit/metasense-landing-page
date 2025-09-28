// src/components/site/HowItWorks.tsx
"use client";

import { motion } from "framer-motion";
import { TypeCycle } from "@/components/typing/TypeCycle";

const steps = [
  {
    n: "1",
    title: "Sign in and set your circle",
    body:
      "Add people you trust and the places that matter.",
  },
  {
    n: "2",
    title: "Wear or carry your companion",
    body:
      "Use the app—or pair with Ray-Ban Meta—for context when you need it.",
  },
  {
    n: "3",
    title: "Live your day, creating memorays",
    body:
      "Subtle cues and reminders fade into the background until they're helpful.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section py-20">
      <div className="section-narrow">
        <h2 className="heading-section">
          Getting started is{" "}
          <TypeCycle
            // Starts at first phrase ("simple.") and all variants are italicized
            phrases={[
              { text: "remember faces", accent: true },
              { text: "find your people", accent: true },
              { text: "never miss meds", accent: true },
              { text: "stay in safe zones", accent: true },
              { text: "share updates with caregivers", accent: true },
              { text: "creating memorays", accent: true },
            ]}
            typeMs={34}
            holdMs={900}
            eraseMs={16}
          />
        </h2>

        {/* Steps grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              className="glass p-6 rounded-3xl"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.35 }} // animates once when it first enters view
            >
              <div className="text-sm text-white/50">Step {s.n}</div>
              <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/75 leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
