import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CtaSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-white/10 bg-[#111111] py-20 md:py-32"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(198,40,40,0.2)_0%,rgba(198,40,40,0.12)_20%,rgba(17,17,17,0)_52%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,#111111_0%,#1b1010_32%,#1a0f0f_68%,#111111_100%)] opacity-80"
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center">
        <h2 className="mx-auto max-w-[1500px] font-display text-[clamp(2.75rem,13vw,5.8rem)] font-bold leading-[1.04] tracking-[-0.035em] text-foreground sm:leading-[1.02]">
          Ready to Build the Future of{" "}
          <span className="text-crimson">Specialty Care?</span>
        </h2>
        <p className="mx-auto mt-8 max-w-[910px] text-[18px] leading-8 text-[#e4beba] sm:mt-12 sm:text-[20px] md:text-[22px]">
          Let&apos;s discuss how we can help navigate your next healthcare
          growth initiative with executive precision and proven strategy.
        </p>

        <ButtonLink
          href="mailto:info@karinghearts.com"
          className="mt-14 h-14 min-w-[390px] rounded bg-crimson px-8 text-[12px] tracking-[0.07em] hover:bg-crimson-deep max-sm:min-w-0 max-sm:w-full sm:mt-24 sm:h-[72px] sm:px-12 sm:text-[14px]"
        >
          SCHEDULE A CONSULTATION
        </ButtonLink>
      </Container>
    </section>
  );
}
