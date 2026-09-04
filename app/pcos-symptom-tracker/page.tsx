import type { Metadata } from "next";
import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";
import NewsletterSignup from "@/components/NewsletterSignup";
import SymptomTrackerApp from "./SymptomTrackerApp";

export const metadata: Metadata = {
  title: "PCOS Symptom & Period Tracker | HerPCOS",
  description:
    "Track PCOS symptoms and period dates privately in your browser. Keep a simple history and create an appointment summary to discuss with your healthcare professional.",
  alternates: {
    canonical: "/pcos-symptom-tracker",
  },
  openGraph: {
    title: "PCOS Symptom & Period Tracker | HerPCOS",
    description:
      "Track PCOS symptoms and period dates privately in your browser. Keep a simple history and create an appointment summary to discuss with your healthcare professional.",
    url: "https://www.herpcos.com/pcos-symptom-tracker",
    type: "website",
    siteName: "HerPCOS Portal",
    locale: "en_US",
    images: [
      {
        url: "https://www.herpcos.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PCOS Symptom & Period Tracker — HerPCOS",
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.herpcos.com/" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://www.herpcos.com/tools" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Symptom & Period Tracker",
      item: "https://www.herpcos.com/pcos-symptom-tracker",
    },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "PCOS Symptom & Period Tracker",
  url: "https://www.herpcos.com/pcos-symptom-tracker",
  applicationCategory: "HealthApplication",
  operatingSystem: "Any (web browser)",
  description:
    "A free, private browser-based tool for tracking PCOS symptoms and period dates to prepare for conversations with a healthcare professional.",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  publisher: {
    "@type": "Organization",
    name: "HerPCOS Portal",
    url: "https://www.herpcos.com",
  },
};

export default function PcosSymptomTrackerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Free Tool · No Signup · Private
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            PCOS Symptom &amp; Period Tracker
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            Track your PCOS symptoms and periods — then bring a clear summary to your
            next appointment.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-1" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1.5 text-xs text-gray-400">
          <li>
            <Link href="/" className="hover:text-pink-600 transition-colors">
              Home
            </Link>
          </li>
          <li>›</li>
          <li>
            <Link href="/tools" className="hover:text-pink-600 transition-colors">
              Tools
            </Link>
          </li>
          <li>›</li>
          <li className="text-gray-600 font-medium">Symptom &amp; Period Tracker</li>
        </ol>
      </nav>

      <div className="pt-6">
        <SymptomTrackerApp />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 space-y-8">
        <NewsletterSignup />
        <Disclaimer />
      </div>
    </div>
  );
}
