import { AboutSection } from "@/components/site/about-section";
import { CtaSection } from "@/components/site/cta-section";
import { ExperienceSection } from "@/components/site/experience-section";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { ResultsSection } from "@/components/site/results-section";
import { ServicesSection } from "@/components/site/services-section";
import { WhyChooseUsSection } from "@/components/site/why-choose-us-section";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <ExperienceSection />
        <AboutSection />
        <ServicesSection />
        <ResultsSection />
        <WhyChooseUsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
