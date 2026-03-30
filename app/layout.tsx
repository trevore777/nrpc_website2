import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: site.churchName,
  description:
    "A small, welcoming Pentecostal church serving the Northern Rivers community. Join us for worship, prayer, Bible teaching, and fellowship.",
  keywords: [
    "Northern Rivers church",
    "Pentecostal church",
    "small church",
    "church Banora Point",
    "Christian church Northern Rivers",
    "family church"
  ],
  openGraph: {
    title: site.churchName,
    description:
      "A small, welcoming Pentecostal church serving the Northern Rivers community.",
    images: ["/og-image.jpg"]
  }
};

const churchJsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: site.churchName,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.addressLine1,
    addressLocality: site.suburb,
    addressRegion: site.state,
    addressCountry: "AU"
  },
  url: site.website,
  telephone: site.phone,
  openingHours: ["Su 10:00"],
  description:
    "A small, welcoming Pentecostal church serving the Northern Rivers community."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(churchJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}