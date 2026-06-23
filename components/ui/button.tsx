import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-crimson text-white hover:bg-crimson-deep border border-transparent",
  secondary:
    "border border-white/15 bg-transparent text-foreground hover:border-white/30 hover:bg-white/10",
  tertiary:
    "border border-transparent bg-transparent text-muted hover:bg-white/10 hover:text-foreground",
};

const baseClass =
  "inline-flex h-11 items-center justify-center rounded px-5 text-sm font-semibold leading-none";

type ButtonVariant = keyof typeof variants;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(baseClass, variants[variant], className)}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <a className={cn(baseClass, variants[variant], className)} {...props} />
  );
}
