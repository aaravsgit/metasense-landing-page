import * as React from "react";
import { cn } from "@/lib/cn";

export function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return <div className={cn("rounded-xl border border-border bg-card text-card-foreground shadow-sm", className)} {...rest} />;
}
export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return <div className={cn("p-6 pb-2", className)} {...rest} />;
}
export function CardTitle(props: React.HTMLAttributes<HTMLHeadingElement>) {
  const { className, ...rest } = props;
  return <h3 className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...rest} />;
}
export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return <div className={cn("p-6 pt-0", className)} {...rest} />;
}
