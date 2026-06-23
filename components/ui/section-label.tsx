import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function SectionLabel({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-label-sm text-crimson-soft", className)}
      {...props}
    />
  );
}
