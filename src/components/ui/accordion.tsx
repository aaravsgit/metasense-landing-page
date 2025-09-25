"use client";
import * as React from "react";
import { cn } from "@/lib/cn";

type AccordionProps = { type?: "single"; collapsible?: boolean; className?: string; children: React.ReactNode };
export function Accordion({ className, children }: AccordionProps) {
  return <div className={cn("space-y-2", className)}>{children}</div>;
}

type ItemProps = { value: string; className?: string; children: React.ReactNode };
export function AccordionItem({ className, children }: ItemProps) {
  return <div className={cn("rounded-lg border border-border bg-background/80 backdrop-blur", className)}>{children}</div>;
}

type TriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string };
export function AccordionTrigger({ className, children, ...props }: TriggerProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(o => !o)} className={cn("w-full px-4 py-3 text-left font-medium hover:text-primary", className)} {...props}>
        {children}
      </button>
      <span data-accordion-open={open} className="hidden" />
    </>
  );
}

type ContentProps = { className?: string; children: React.ReactNode };
export function AccordionContent({ className, children }: ContentProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const trigger = ref.current?.previousElementSibling as HTMLElement | null;
    const update = () => {
      const mark = trigger?.querySelector("[data-accordion-open]") as HTMLElement | null;
      setOpen(mark?.getAttribute("data-accordion-open") === "true");
    };
    update();
    const obs = new MutationObserver(update);
    if (trigger) obs.observe(trigger, { attributes: true, subtree: true });
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("px-4 pb-4 text-sm text-foreground/70 transition-[max-height,opacity] duration-200", open ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0", className)}>
      {children}
    </div>
  );
}
