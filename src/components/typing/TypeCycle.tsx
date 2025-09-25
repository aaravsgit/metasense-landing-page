"use client";

import * as React from "react";

type Props = {
  phrases: string[];
  typingSpeed?: number;    // ms per char while typing
  deletingSpeed?: number;  // ms per char while deleting
  pauseAfterWord?: number; // ms pause after finishing a word
  className?: string;
};

/**
 * Dependency-free typing loop: type → pause → delete → next.
 * Keeps looping forever so it never “disappears”.
 */
export function TypeCycle({
  phrases,
  typingSpeed = 36,
  deletingSpeed = 28,
  pauseAfterWord = 900,
  className = "",
}: Props) {
  const [phraseIndex, setPhraseIndex] = React.useState(0);
  const [chars, setChars] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  const word = phrases[phraseIndex] ?? "";
  const visible = word.slice(0, chars);

  React.useEffect(() => {
    let t: number;

    if (!deleting && chars === word.length) {
      // finished typing → pause → start deleting
      t = window.setTimeout(() => setDeleting(true), pauseAfterWord);
    } else if (deleting && chars === 0) {
      // finished deleting → next phrase
      t = window.setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, 140);
    } else {
      // keep stepping
      const speed = deleting ? deletingSpeed : typingSpeed;
      t = window.setTimeout(
        () => setChars((c) => c + (deleting ? -1 : 1)),
        speed
      );
    }

    return () => window.clearTimeout(t);
  }, [chars, deleting, word, phrases.length, typingSpeed, deletingSpeed, pauseAfterWord]);

  return (
    <span className={className}>
      {visible}
      <span aria-hidden className="type-caret">|</span>
    </span>
  );
}
