import type { Metadata } from "next";
import { Hanken_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import CustomCursor from "@/components/cursor/CustomCursor";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "optional",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HUED — Multidisciplinary Design & Architecture Studio",
    template: "%s | HUED",
  },
  description:
    "HUED is a multidisciplinary design studio shaping architecture, interiors, objects, and experiences through emotion, materiality, and timeless craftsmanship.",
  keywords: [
    "HUED",
    "HUED Spaces",
    "Kritika Khandelwal",
    "Indore Architecture Firm",
    "Indore Interior Designer",
    "Multidisciplinary Design Studio",
    "Premium Architecture India",
    "Timeless Spaces",
    "Minimalist Interior Design"
  ],
  authors: [{ name: "Ar. Kritika Khandelwal", url: "https://huedspaces.com" }],
  creator: "HUED",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://huedspaces.com"),
  openGraph: {
    title: "HUED — Multidisciplinary Design & Architecture Studio",
    description:
      "Shaping architecture, interiors, objects, and experiences through emotion, materiality, and timeless craftsmanship.",
    url: "https://huedspaces.com",
    siteName: "HUED",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HUED — Multidisciplinary Design & Architecture Studio",
    description:
      "Shaping architecture, interiors, objects, and experiences through emotion, materiality, and timeless craftsmanship.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://huedspaces.com/#organization",
        "name": "HUED",
        "url": "https://huedspaces.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://huedspaces.com/favicon.ico"
        },
        "founder": {
          "@type": "Person",
          "name": "Ar. Kritika Khandelwal"
        },
        "sameAs": [
          "https://www.instagram.com/hued.in_",
          "https://www.behance.net/kritikakhandel1"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://huedspaces.com/#localbusiness",
        "name": "HUED Studio",
        "image": "https://huedspaces.com/hero-fallback.jpg",
        "priceRange": "$$$$",
        "telephone": "+919999999999",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Old Palasia",
          "addressLocality": "Indore",
          "addressRegion": "Madhya Pradesh",
          "postalCode": "452001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "22.7244",
          "longitude": "75.8839"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${hanken.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bone text-charcoal min-h-full flex flex-col relative overflow-x-hidden selection:bg-sand/65 selection:text-charcoal">
        <SmoothScroll>
          <CustomCursor />
          <Header />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
