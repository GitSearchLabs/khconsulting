import { Container } from "@/components/ui/container";

const reasons = [
  {
    title: "Real-World Experience",
    description:
      "We don't just offer theory. Our guidance is rooted in the actual trenches of building and launching specialized medical facilities.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16M12 4a11 11 0 0 1 0 16M12 4a11 11 0 0 0 0 16" />
      </>
    ),
  },
  {
    title: "Physician-Centered Approach",
    description:
      "We fiercely advocate for the independent physician, ensuring your autonomy and vision are preserved in every strategic move.",
    icon: (
      <>
        <path d="M12 4v16M6 8h12M7 8l-3 7h6L7 8ZM17 8l-3 7h6l-3-7Z" />
        <path d="M9 20h6" />
      </>
    ),
  },
  {
    title: "Strategic Partnership",
    description:
      "We view ourselves as an extension of your leadership team, invested in your long-term operational and clinical success.",
    icon: (
      <path d="m8.5 12.5 3-3a3 3 0 0 1 4.24 0l.76.76a3 3 0 0 1 0 4.24l-3.5 3.5a3 3 0 0 1-4.24 0l-.76-.76M15.5 11.5l-3 3a3 3 0 0 1-4.24 0l-.76-.76a3 3 0 0 1 0-4.24L11 6a3 3 0 0 1 4.24 0l.76.76" />
    ),
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="bg-[#f5f5f5] py-20 md:py-32">
      <Container>
        <h2 className="text-center font-display text-[clamp(2.1rem,10vw,3.25rem)] font-bold leading-tight tracking-[-0.03em] text-[#111111]">
          Why Healthcare Leaders Choose Us
        </h2>

        <div className="mt-14 grid gap-6 sm:gap-8 md:mt-20 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-lg border border-[#dedede] bg-white p-8 shadow-[0_2px_8px_rgb(0_0_0_/_0.04)] md:p-10"
            >
              <div className="flex size-14 items-center justify-center rounded border border-[#dedede] bg-[#f2f2f2] text-crimson">
                <svg
                  className="size-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {reason.icon}
                </svg>
              </div>

              <h3 className="mt-8 font-display text-[24px] font-bold uppercase leading-tight tracking-[-0.02em] text-[#111111] sm:mt-10 sm:text-[28px]">
                {reason.title}
              </h3>
              <p className="mt-5 max-w-[390px] text-[17px] leading-8 text-[#707070] sm:text-[19px]">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
