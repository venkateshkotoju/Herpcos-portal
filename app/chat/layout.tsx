import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Chat Assistant",
  description:
    "Get instant, compassionate AI-powered answers about PCOS symptoms, diet, treatments, and lifestyle — available 24/7.",
  openGraph: {
    title: "AI Chat Assistant | HerPCOS Portal",
    description:
      "Get instant, compassionate AI-powered answers about PCOS symptoms, diet, treatments, and lifestyle — available 24/7.",
    url: "https://herpcos.com/chat",
    type: "website",
    images: [
      {
        url: "https://herpcos.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "HerPCOS AI Chat Assistant",
      },
    ],
  },
};

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return children;
}
