import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GA4_MEASUREMENT_ID = "G-Z5N5FLWPP8";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://herpcos.com";
const SITE_NAME = "HerPCOS Portal";
const OG_IMAGE = `${SITE_URL}/opengraph-image`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — AI-Powered PCOS Support & Information`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "HerPCOS helps women understand PCOS symptoms, diet, and hormones with free AI-powered guidance, expert guides, and community Q&A — available 24/7.",
  keywords: [
    "PCOS",
    "polycystic ovary syndrome",
    "PCOS symptoms",
    "PCOS diet",
    "PCOS treatment",
    "insulin resistance",
    "hormone health",
    "women's health",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — AI-Powered PCOS Support`,
    description:
      "HerPCOS helps women with PCOS understand their symptoms, diet, hormones, and treatment options. Free AI-powered guidance available 24/7.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "HerPCOS Portal — AI-Powered PCOS Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — AI-Powered PCOS Support`,
    description:
      "Free AI-powered PCOS guidance, expert guides, and community Q&A. Available 24/7.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification token here:
    // google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "AI-powered PCOS support platform providing evidence-based health information for women with Polycystic Ovary Syndrome.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@herpcos.com",
    contactType: "customer support",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Evidence-based PCOS information, AI-powered guidance, and community support for women with Polycystic Ovary Syndrome.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/qa?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4_MEASUREMENT_ID}');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
