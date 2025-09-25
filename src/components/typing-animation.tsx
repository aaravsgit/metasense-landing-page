"use client";
import * as React from "react";
const TEXTS = ["Walk safely together", "Community over fear", "Smart, caring tech"];

export function TypingAnimation() {
  const [i, setI] = React.useState(0);
  const [sub, setSub] = React.useState("");
  React.useEffect(() => {
    let idx = 0;
    const text = TEXTS[i % TEXTS.length];
    const id = setInterval(() => {
      idx++; setSub(text.slice(0, idx));
      if (idx >= text.length) { clearInterval(id); setTimeout(() => setI(v => v + 1), 1000); }
    }, 50);
    return () => clearInterval(id);
  }, [i]);
  return <h1 className="font-heading text-4xl font-bold">{sub}&nbsp;</h1>;
}
