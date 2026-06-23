"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const navItems = [
  { label: "Services", href: "#services", active: true },
  { label: "Expertise", href: "#expertise" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[72px] border-b border-white/10 bg-[#0b0f0f]/90 backdrop-blur-[10px]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-5 focus:z-50 focus:rounded focus:bg-crimson focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Container className="flex h-full items-center justify-between">
        <a
          href="#top"
          onClick={() => setIsOpen(false)}
          className="flex min-w-0 max-w-[230px] items-center gap-3 font-display text-[19px] font-bold tracking-[-0.025em] text-foreground sm:max-w-none sm:text-[24px] sm:tracking-[-0.04em]"
          aria-label="Karing Hearts Consulting home"
        >
          <Image
            src="/hand-in-hand-icon.png"
            alt=""
            width={36}
            height={36}
            className="size-8 shrink-0 object-contain sm:size-9"
            aria-hidden="true"
          />
          <span className="truncate">Karing Hearts Consulting</span>
        </a>

        <nav
          className="hidden items-center gap-10 xl:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-6 text-[16px] font-medium text-muted hover:text-foreground"
              aria-current={item.active ? "page" : undefined}
            >
              <span
                className={
                  item.active ? "text-crimson-soft" : "text-current"
                }
              >
                {item.label}
              </span>
              <span
                className={`absolute inset-x-0 bottom-[17px] h-px origin-left bg-crimson-soft transition-transform ${
                  item.active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          ))}
        </nav>

        <ButtonLink
          href="#contact"
          className="hidden h-11 rounded bg-crimson px-6 text-[13px] tracking-[0.04em] xl:inline-flex"
        >
          SCHEDULE A CONSULTATION
        </ButtonLink>

        <button
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded border border-white/15 text-foreground hover:border-white/35 hover:bg-white/10 xl:hidden"
          aria-controls={menuId}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition-transform ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      {isOpen ? (
        <>
          <div
            className="fixed inset-x-0 top-[72px] z-40 h-[calc(100svh-72px)] bg-black/55 xl:hidden"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />

          <div
            id={menuId}
            className="fixed inset-x-0 top-[72px] z-50 max-h-[calc(100svh-72px)] overflow-y-auto border-b border-white/10 bg-[#0b0f0f] px-4 py-6 shadow-[0_24px_80px_rgb(0_0_0_/_0.45)] xl:hidden"
          >
            <nav aria-label="Mobile navigation">
              <div className="flex flex-col divide-y divide-white/10">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex min-h-14 items-center justify-between py-4 text-[18px] font-semibold text-foreground"
                    aria-current={item.active ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                    <span className="text-crimson-soft" aria-hidden="true">
                      -&gt;
                    </span>
                  </a>
                ))}
              </div>

              <ButtonLink
                href="#contact"
                className="mt-6 h-14 w-full rounded bg-crimson px-6 text-[13px] tracking-[0.06em]"
                onClick={() => setIsOpen(false)}
              >
                SCHEDULE A CONSULTATION
              </ButtonLink>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
