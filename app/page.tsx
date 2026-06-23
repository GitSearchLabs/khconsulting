import { AboutSection } from "@/components/site/about-section";
import { CtaSection } from "@/components/site/cta-section";
import { ExperienceSection } from "@/components/site/experience-section";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { ResultsSection } from "@/components/site/results-section";
import { ServicesSection } from "@/components/site/services-section";
import { WhyChooseUsSection } from "@/components/site/why-choose-us-section";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://karinghearts.com";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Karing Hearts Consulting",
      url: siteUrl,
      description:
        "Karing Hearts Consulting helps independent physician practices navigate the regulatory, strategic, and operational path to launching advanced outpatient healthcare facilities and services.",
      email: "info@karinghearts.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Johnson City",
        addressRegion: "TN",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      sameAs: ["https://www.linkedin.com"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Karing Hearts Consulting",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#professional-service`,
      name: "Karing Hearts Consulting",
      url: siteUrl,
      image: `${siteUrl}/hero-outpatient-suite.png`,
      description:
        "Healthcare strategy and advisory services for independent physician practices, cardiology groups, specialty practices, healthcare executives, and practice administrators.",
      serviceType: [
        "Regulatory Strategy",
        "Facility Development",
        "Strategic Planning",
        "Operational Launch",
        "Advocacy and Relations",
      ],
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
