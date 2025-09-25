// src/components/site/HowItWorks.tsx
"use client";

import { motion } from "framer-motion";
import { TypeCycle } from "@/components/typing/TypeCycle";

const steps = [
  {
    n: "1",
    title: "Pair your glasses",
    body:
      "Connect Ray-Ban Meta in a tap. MetaSense runs alongside the official app—no jailbreaks or hacks.",
  },
  {
    n: "2",
    title: "Teach familiar faces",
    body:
      "Add trusted profiles (family, friends, caregivers). MetaSense stores embeddings locally first and syncs securely.",
  },
  {
    n: "3",
    title: "Use gentle cues",
    body:
      "Get subtle haptics or spoken hints like names, relationships, and context—tuned to reduce cognitive load.",
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
              { text: "simple.", accent: true },
              { text: "hands-free.", accent: true },
              { text: "private.", accent: true },
              { text: "ready.", accent: true },
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
