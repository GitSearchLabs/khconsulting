import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

export function AboutSection() {
  return (
    <section className="bg-[#f7f7f7] py-20 md:py-32" id="about">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
          <div className="max-w-[710px]">
            <SectionLabel className="flex items-center gap-3 text-crimson">
              <span className="h-5 w-0.5 bg-crimson" aria-hidden="true" />
              About Us
            </SectionLabel>

            <h2 className="mt-7 font-display text-[clamp(2.1rem,10vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#111111] sm:mt-9">
              We&apos;ve Been Through the Process.
            </h2>

            <div className="mt-9 space-y-6 text-[17px] leading-8 text-[#707070] sm:mt-12 sm:space-y-8 sm:text-[18px]">
              <p>
                Launching an advanced healthcare facility requires far more than
                a business plan. It demands regulatory navigation, strategic
                planning, stakeholder engagement, operational readiness, and
                relentless attention to detail.
              </p>

              <p>
                Karing Hearts Consulting was created after helping navigate the
                complex path to establishing an independent cardiovascular
                facility in Tennessee. That experience provides a practical
                understanding of the challenges healthcare organizations face
                when pursuing growth initiatives.
              </p>

              <p>
                We help independent physicians and healthcare leaders navigate
                those challenges and bring their vision to life.
              </p>
            </div>
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-lg border border-[#dedede] bg-[#d9d9d9] shadow-[0_10px_32px_rgb(0_0_0_/_0.08)] sm:min-h-[360px] md:min-h-[470px]">
            <Image
              src="/jeff-schoondyke-healthcare-advisor.png"
              alt="Jeff, Karing Hearts Consulting healthcare advisor"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover object-[50%_34%]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
