import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import CustomCursor from "@/components/cursor/CustomCursor";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
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
  metadataBase: new URL("https://huedspaces.com"),
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
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <link rel="preload" href="/video.mp4" as="video" type="video/mp4" />
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
