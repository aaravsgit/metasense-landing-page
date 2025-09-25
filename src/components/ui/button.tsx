import * as React from "react";
import { cn } from "@/lib/cn";

export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button ref={ref} className={cn("inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-white hover:opacity-90", className)} {...props} />
  )
);
Button.displayName = "Button";
