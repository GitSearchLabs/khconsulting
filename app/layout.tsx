import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://karinghearts.com",
);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default:
      "Karing Hearts Consulting | Healthcare Strategy for Independent Physicians",
    template: "%s | Karing Hearts Consulting",
  },
  description:
    "Karing Hearts Consulting helps independent physician practices navigate regulatory strategy, facility development, operational launch, and specialty care growth.",
  keywords: [
    "healthcare consulting",
    "physician practice consulting",
    "independent physician practice",
    "outpatient facility development",
    "regulatory strategy",
    "cardiology practice consulting",
    "Certificate of Need consulting",
    "specialty care growth",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Karing Hearts Consulting | Healthcare Strategy for Independent Physicians",
    description:
      "Executive healthcare consulting for independent physician practices launching advanced outpatient facilities and specialty care services.",
    url: "/",
    siteName: "Karing Hearts Consulting",
    images: [
      {
        url: "/hero-outpatient-suite.png",
        width: 1807,
        height: 870,
        alt: "Premium outpatient specialty care facility with interventional procedure equipment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Karing Hearts Consulting | Healthcare Strategy for Independent Physicians",
    description:
      "Strategic healthcare consulting for regulatory, operational, and facility growth initiatives.",
    images: ["/hero-outpatient-suite.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  authors: [{ name: "Karing Hearts Consulting" }],
  creator: "Karing Hearts Consulting",
  publisher: "Karing Hearts Consulting",
  category: "Healthcare Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
