import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-background pt-[72px]"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/hero-outpatient-suite.png"
        alt="Premium outpatient specialty care facility with interventional procedure equipment"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/52" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,15,15,0.8)_0%,rgba(15,15,15,0.52)_38%,rgba(15,15,15,0.34)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,15,15,0.2)_0%,rgba(15,15,15,0.05)_45%,rgba(15,15,15,0.62)_100%)]" />

      <Container className="relative z-10 flex min-h-[calc(100svh-72px)] items-center py-12 sm:py-16">
        <div className="max-w-[760px]">
          <p className="mb-8 flex items-center gap-3 text-label-sm text-muted">
            <span className="h-5 w-0.5 bg-crimson" aria-hidden="true" />
            Independent Healthcare Consulting
          </p>

          <h1
            id="hero-heading"
            className="font-display text-[clamp(2.65rem,13vw,5rem)] font-bold leading-[1.02] tracking-[-0.035em] text-foreground sm:leading-[0.98] sm:tracking-[-0.06em]"
          >
            Helping Independent Physicians Navigate{" "}
            <span className="text-crimson">Healthcare Growth.</span>
          </h1>

          <p className="mt-8 max-w-[590px] text-[17px] leading-7 text-[#f0cfcb] sm:mt-10 sm:text-body-lg">
            Built from real-world experience establishing an independent
            cardiovascular facility in Tennessee, Karing Hearts Consulting helps
            physician groups navigate regulatory approvals, facility
            development, and strategic expansion with confidence.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:mt-16 sm:flex-row">
            <ButtonLink
              href="#contact"
              className="h-14 w-full rounded px-7 text-[12px] tracking-[0.06em] sm:w-auto sm:px-9 sm:text-[13px]"
            >
              SCHEDULE A CONSULTATION
            </ButtonLink>
            <ButtonLink
              href="#services"
              variant="secondary"
              className="h-14 w-full rounded border-white/45 px-7 text-[12px] tracking-[0.06em] hover:border-white/70 sm:w-auto sm:px-9 sm:text-[13px]"
            >
              EXPLORE SERVICES
              <span className="ml-3" aria-hidden="true">
                -&gt;
              </span>
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
