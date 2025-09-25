"use client";
import { useEffect, useState } from "react";

type Props = {
  phrases: string[];
  typingSpeed?: number;   // ms per char while typing
  deletingSpeed?: number; // ms per char while deleting
  pause?: number;         // ms to hold at full word
  className?: string;
};

export default function TypeCycle({
  phrases,
  typingSpeed = 65,
  deletingSpeed = 40,
  pause = 1200,
  className,
}: Props) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[i % phrases.length];
    let t: ReturnType<typeof setTimeout> | undefined;

    if (!deleting && text.length < current.length) {
      t = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
    } else if (!deleting && text.length === current.length) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setI((n) => n + 1);
    }

    return () => t && clearTimeout(t);
  }, [deleting, text, i, phrases, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={className}>
      {text}
      <span className="type-caret">|</span>
    </span>
  );
}
