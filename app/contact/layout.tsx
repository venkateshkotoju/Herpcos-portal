import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the HerPCOS team for questions, feedback, technical support, or partnership opportunities.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us",
    description:
      "Get in touch with the HerPCOS team for questions, feedback, technical support, or partnership opportunities.",
    url: "https://www.herpcos.com/contact",
    type: "website",
    siteName: "HerPCOS Portal",
    locale: "en_US",
    images: [
      {
        url: "https://www.herpcos.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Contact HerPCOS Portal",
      },
    ],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
