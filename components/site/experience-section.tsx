import { Container } from "@/components/ui/container";

const pillars = [
  {
    title: "Physician Focused",
    description: "Strategies designed to maintain your clinical autonomy and vision.",
    icon: (
      <path d="M9 3v4a5 5 0 0 0 10 0V3M7 3h4M17 3h4M14 14v2a4 4 0 0 0 8 0v-1M22 15a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
    ),
  },
  {
    title: "Regulatory Expertise",
    description:
      "Navigating complex compliance and licensing landscapes effectively.",
    icon: (
      <>
        <path d="M7 3h7l4 4v14H7V3Z" />
        <path d="M14 3v5h4" />
        <path d="M10 12h5M10 16h7" />
      </>
    ),
  },
  {
    title: "Strategic Growth",
    description:
      "Data-driven financial and market strategies for sustainable expansion.",
    icon: <path d="m4 16 5-5 4 4 7-8M16 7h4v4" />,
  },
  {
    title: "Operational Excellence",
    description: "Building efficient, scalable operations from the ground up.",
    icon: (
      <>
        <path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
  },
];

export function ExperienceSection() {
  return (
    <section className="border-b border-[#dddddd] bg-white py-20 text-[#111111] md:py-32">
      <Container>
        <div className="mx-auto max-w-[780px] text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-[-0.025em]">
            Built on Real-World Healthcare Experience
          </h2>
          <p className="mt-6 text-[18px] leading-8 text-[#6f6f6f] sm:text-[20px]">
            We bring proven methodologies to the complex process of developing
            specialized medical facilities.
          </p>
        </div>

        <div className="mt-16 grid gap-y-14 md:mt-28 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="relative px-8 text-center lg:px-12"
            >
              {index > 0 ? (
                <div
                  className="absolute left-0 top-2 hidden h-full w-px bg-[#dddddd] lg:block"
                  aria-hidden="true"
                />
              ) : null}
              <svg
                className="mx-auto size-8 text-crimson"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {pillar.icon}
              </svg>
              <h3 className="mt-7 text-label-sm text-[#222222]">
                {pillar.title}
              </h3>
              <p className="mx-auto mt-4 max-w-[250px] text-[17px] leading-7 text-[#707070]">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
