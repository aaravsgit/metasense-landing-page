"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Where is my data stored?",
    a: "Profiles and recognition history live in your MetaSense account. You can delete faces, entries, or your entire history at any time.",
  },
  {
    q: "Does MetaSense work offline?",
    a: "Face detection runs on-device; recognition may use a secure local model cache. Some features (backup, sharing) sync when online.",
  },
  {
    q: "Can caregivers use it too?",
    a: "Yes. You can invite a caregiver to help curate faces, add reminders, or review progress—always with your permission.",
  },
  {
    q: "Is speech screening a diagnosis?",
    a: "No. It’s an optional trend check inspired by research on early Alzheimer’s indicators in speech. Always consult a clinician for diagnosis.",
  },
  {
    q: "Which devices are supported?",
    a: "Ray-Ban Meta glasses are our first target. A companion mobile app is used for setup, notes, and practice.",
  },
  {
    q: "What about privacy in public?",
    a: "Recognition is on-demand (voice or tap). We don’t auto-tag everyone around you. You decide when to scan and what to save.",
  },
];

export function FAQ() {
  return (
    <div id="faq" className="section-narrow">
      <div className="mb-10 flex justify-center">
        <span className="badge">Frequently Asked Questions</span>
      </div>
      <h2 className="h1 text-center font-bold">
        Everything you <span className="font-display">need</span> to know.
      </h2>
      <p className="mx-auto mt-3 max-w-[680px] text-center text-white/60">
        Transparent, privacy-first, and built for real-world use.
      </p>

      <div className="mt-10 space-y-3">
        {faqs.map((f, i) => (
          <Accordion key={i} type="single" collapsible className="w-full">
            <AccordionItem value={`i-${i}`} className="glass overflow-hidden px-2">
              <AccordionTrigger className="px-4 py-4 text-left text-[15px]">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-sm text-white/70">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
