// src/components/site/HowItWorks.tsx
"use client";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section py-24">
      {/* Heading + subhead */}
      <div className="text-center">
        <div className="badge w-fit mx-auto">How it works</div>

        <h2 className="heading-section mt-6">
          Getting started is <span className="font-accent">hands-free</span>.
        </h2>

        {/* ⬇️ This subhead now has consistent spacing below it */}
        <p className="mx-auto mt-4 max-w-3xl text-white/80">
          Pair the glasses once, then let MetaSense do the gentle memory work in
          the background.
        </p>
      </div>

      {/* ⬇️ Increased gap from the subhead to the cards */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {/* Card 1 */}
        <div className="relative rounded-[28px] glass p-6 md:p-8">
          {/* number badge */}
          <div className="absolute -top-4 left-6">
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/90 font-medium">
              1
              <span className="absolute inset-0 -z-10 rounded-full bg-purple-600/25 blur-md" />
            </span>
          </div>

          <h3 className="pt-4 text-2xl font-semibold">Pair your glasses</h3>
          <p className="mt-3 text-white/80">
            Connect Ray-Ban Meta in the app. Choose what to remember and keep
            everything local by default.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-[28px] glass p-6 md:p-8">
          <div className="absolute -top-4 left-6">
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/90 font-medium">
              2
              <span className="absolute inset-0 -z-10 rounded-full bg-purple-600/25 blur-md" />
            </span>
          </div>

          <h3 className="pt-4 text-2xl font-semibold">Wear &amp; capture</h3>
          <p className="mt-3 text-white/80">
            Say a voice phrase or tap in the app to remember a face, moment, or
            place. We turn it into a cue.
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative rounded-[28px] glass p-6 md:p-8">
          <div className="absolute -top-4 left-6">
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/90 font-medium">
              3
              <span className="absolute inset-0 -z-10 rounded-full bg-purple-600/25 blur-md" />
            </span>
          </div>

          <h3 className="pt-4 text-2xl font-semibold">Get gentle cues</h3>
          <p className="mt-3 text-white/80">
            MetaSense surfaces helpful context when you need it—plus optional
            speech check-ins for early trends.
          </p>
        </div>
      </div>
    </section>
  );
}
