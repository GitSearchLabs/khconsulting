import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const proofPoints = [
  {
    title: "Independent Cardiovascular Facility Experience",
    description: "Proven success in specialized facility launch.",
  },
  {
    title: "Regulatory & Strategic Expertise",
    description: "Mastery over complex compliance landscapes.",
  },
  {
    title: "Physician-Centered Growth Approach",
    description: "Strategies designed specifically for independent practitioners.",
  },
];

export function ResultsSection() {
  return (
    <section
      id="expertise"
      className="bg-[#0f0f0f] py-20 md:py-32"
      aria-labelledby="results-heading"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1fr] lg:gap-24">
          <div>
            <h2
              id="results-heading"
              className="font-display text-[clamp(2.1rem,10vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-foreground"
            >
              Real-World Experience.{" "}
              <span className="text-crimson">Real Results.</span>
            </h2>

            <p className="mt-7 max-w-[690px] text-[18px] leading-8 text-[#e4beba] sm:mt-9 sm:text-[20px]">
              Our methodology is forged from actual experience. We recently led
              the complex regulatory and strategic process to establish a
              pioneering independent cardiovascular facility in Tennessee,
              navigating stringent Certificate of Need (CON) requirements and
              operational hurdles.
            </p>

            <div className="mt-12 space-y-9 sm:mt-20 sm:space-y-10">
              {proofPoints.map((point) => (
                <article
                  key={point.title}
                  className="grid grid-cols-[1px_32px_1fr] gap-x-5 sm:grid-cols-[1px_40px_1fr] sm:gap-x-8"
                >
                  <div className="bg-white/15" aria-hidden="true" />
                  <div
                    className="mt-3 flex size-7 items-center justify-center rounded-full border border-crimson text-crimson"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4"
                    >
                      <path d="m6 12 4 4 8-8" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-label-sm text-foreground">
                      {point.title}
                    </h3>
                    <p className="mt-3 text-[17px] leading-7 text-[#e4beba]">
                      {point.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <ButtonLink
              href="#about"
              variant="secondary"
              className="mt-12 h-14 w-full rounded border-white/70 px-7 text-[12px] tracking-[0.06em] hover:border-white hover:bg-white/10 sm:mt-20 sm:w-auto sm:px-9 sm:text-[13px]"
            >
              LEARN OUR STORY
              <span className="ml-3" aria-hidden="true">
                -&gt;
              </span>
            </ButtonLink>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-white/15 bg-surface-high shadow-[0_32px_80px_rgb(0_0_0_/_0.42)] sm:min-h-[420px] md:min-h-[620px]">
            <Image
              src="/hero-outpatient-suite.png"
              alt="Advanced outpatient cardiovascular facility interior"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[70%_50%]"
            />
            <div className="absolute inset-0 bg-black/25" />
          </div>
        </div>
      </Container>
    </section>
  );
}
