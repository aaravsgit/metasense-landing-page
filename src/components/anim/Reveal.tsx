"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type Props = {
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  once = true,
  className,
}: PropsWithChildren<Props>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once, amount: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
