import type { Metadata } from "next";
import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";
import { TOOLS } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Free PCOS Tools",
  description:
    "Free, private tools to help you understand and manage PCOS — starting with a symptom and period tracker you can use without an account.",
  alternates: {
    canonical: "/tools",
  },
  openGraph: {
    title: "Free PCOS Tools | HerPCOS",
    description:
      "Free, private tools to help you understand and manage PCOS — starting with a symptom and period tracker you can use without an account.",
    url: "https://www.herpcos.com/tools",
    type: "website",
    siteName: "HerPCOS Portal",
    locale: "en_US",
    images: [
      {
        url: "https://www.herpcos.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Free PCOS Tools — HerPCOS Portal",
      },
    ],
  },
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="inline-block bg-white/20 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            HerPCOS Tools
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Free PCOS Tools</h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            Simple, private tools that help you organize information for your own
            understanding and for conversations with your healthcare provider.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group bg-white rounded-2xl border border-pink-100 shadow-sm p-6 hover:shadow-md hover:border-pink-300 transition-all"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-3xl">{tool.emoji}</span>
                {tool.badge && (
                  <span className="text-xs font-semibold bg-pink-100 text-pink-700 px-2.5 py-1 rounded-full shrink-0">
                    {tool.badge}
                  </span>
                )}
              </div>
              <h2 className="font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                {tool.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">{tool.desc}</p>
              <p className="text-xs text-pink-500 font-medium mt-3">Open tool →</p>
            </Link>
          ))}
        </div>

        <Disclaimer />
      </div>
    </div>
  );
}
