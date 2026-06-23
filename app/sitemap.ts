import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://karinghearts.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}/hero-outpatient-suite.png`,
        `${siteUrl}/jeff-schoondyke-healthcare-advisor.png`,
      ],
    },
  ];
}
