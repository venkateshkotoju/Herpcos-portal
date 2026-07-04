import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Q&A",
  description:
    "Browse real questions about PCOS with expert-reviewed answers, searchable by category across symptoms, diet, and treatment.",
  openGraph: {
    title: "Community Q&A | HerPCOS Portal",
    description:
      "Browse real questions about PCOS with expert-reviewed answers, searchable by category across symptoms, diet, and treatment.",
    url: "https://herpcos.com/qa",
    type: "website",
    images: [
      {
        url: "https://herpcos.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "HerPCOS Community Q&A",
      },
    ],
  },
};

export default function QaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
