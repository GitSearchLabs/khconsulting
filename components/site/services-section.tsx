import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

const services = [
  {
    title: "Regulatory Strategy",
    description:
      "Expert navigation of complex healthcare regulations and licensing requirements.",
    icon: (
      <path d="M7 3h7l4 4v14H7V3ZM14 3v5h4M10 12h5M10 16h7" />
    ),
  },
  {
    title: "Facility Development",
    description:
      "Comprehensive project management for new clinic and outpatient facility builds.",
    icon: (
      <>
        <path d="M4 21h16M6 21V8h6v13M12 21V4h6v17" />
        <path d="M8 11h2M8 15h2M14 7h2M14 11h2M14 15h2" />
      </>
    ),
  },
  {
    title: "Strategic Planning",
    description:
      "Data-driven market analysis and financial modeling to ensure sustainable growth.",
    icon: (
      <>
        <path d="M12 3v18M21 12H3" />
        <circle cx="12" cy="12" r="8" />
      </>
    ),
  },
  {
    title: "Operational Launch",
    description:
      "Streamlining workflows, staffing, and technology for a successful opening day.",
    icon: (
      <>
        <path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
  },
  {
    title: "Advocacy & Relations",
    description:
      "Building critical alignment with community stakeholders and healthcare partners.",
    icon: (
      <>
        <path d="M8 19v-1a4 4 0 0 1 8 0v1M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 18v-1a3 3 0 0 1 4-2.83M20 18v-1a3 3 0 0 0-4-2.83" />
        <path d="M5.5 10.5a2 2 0 1 0 0-4M18.5 10.5a2 2 0 1 1 0-4" />
      </>
    ),
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 md:py-32">
      <Container>
        <div className="max-w-[720px]">
          <SectionLabel className="text-crimson">How We Help</SectionLabel>
          <h2 className="mt-5 font-display text-[clamp(2.1rem,10vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#111111]">
            End-to-end guidance for complex healthcare growth.
          </h2>
          <p className="mt-7 max-w-[680px] text-[18px] leading-8 text-[#707070] sm:mt-9 sm:text-[20px]">
            From strategy to launch, we help independent physicians navigate
            every challenge and capitalize on every opportunity.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:mt-24 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded border border-[#dedede] bg-white p-8 shadow-[0_2px_8px_rgb(0_0_0_/_0.04)]"
            >
              <svg
                className="size-8 text-crimson"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {service.icon}
              </svg>
              <h3 className="mt-9 font-display text-[22px] font-semibold leading-7 tracking-[-0.025em] text-[#111111]">
                {service.title}
              </h3>
              <p className="mt-5 text-[16px] leading-7 text-[#707070] xl:min-h-[112px]">
                {service.description}
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center text-label-sm text-crimson hover:text-crimson-deep"
              >
                Learn More
                <span className="ml-3" aria-hidden="true">
                  -&gt;
                </span>
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
