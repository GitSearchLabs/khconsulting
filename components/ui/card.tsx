import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border border-white/15 bg-surface-card",
        "before:absolute before:inset-x-0 before:top-0 before:h-px before:origin-left before:scale-x-0 before:bg-crimson before:transition-transform before:duration-200",
        "hover:border-white/40 hover:before:scale-x-100",
        className,
      )}
      {...props}
    />
  );
}
