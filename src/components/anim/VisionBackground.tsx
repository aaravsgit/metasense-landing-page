"use client";

export function VisionBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Pulsing concentric rings (retina vibe) */}
      <div className="vision-radials" />

      {/* Subtle diagonal scan lines */}
      <div className="vision-scan" />

      {/* Few drifting “neurons” */}
      <div className="vision-dots">
        <span style={{ left: "12%", top: "26%" }} />
        <span style={{ left: "28%", top: "64%" }} />
        <span style={{ left: "48%", top: "18%" }} />
        <span style={{ left: "70%", top: "34%" }} />
        <span style={{ left: "82%", top: "66%" }} />
        <span style={{ left: "38%", top: "78%" }} />
        <span style={{ left: "60%", top: "54%" }} />
      </div>
    </div>
  );
}
