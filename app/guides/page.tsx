import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import { GUIDES, TOTAL_GUIDES_COUNT } from "@/lib/guides";

export const metadata: Metadata = {
  title: "PCOS Guides: Evidence-Based Information for Every Symptom",
  description:
    "Free, evidence-based PCOS guides covering symptoms, diet, weight loss, hormones, medications, hair loss, fertility, and lab results — written for real women.",
  openGraph: {
    title: "PCOS Guides: Evidence-Based Information for Every Symptom",
    description:
      "Free, evidence-based PCOS guides covering symptoms, diet, weight loss, hormones, medications, hair loss, fertility, lab results, and more.",
    url: "https://herpcos.com/guides",
    type: "website",
    siteName: "HerPCOS Portal",
    locale: "en_US",
    images: [
      {
        url: "https://herpcos.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PCOS Guides — HerPCOS Portal",
      },
    ],
  },
};

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="inline-block bg-white/20 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            HerPCOS Library
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">PCOS Guides</h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            Evidence-based guides written in plain language — covering every aspect
            of PCOS from diagnosis to daily management.
          </p>
          <p className="text-pink-200 text-sm mt-4">
            {TOTAL_GUIDES_COUNT} guides · Updated June 2025
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {GUIDES.map((group) => (
          <section key={group.category}>
            <h2 className="text-lg font-bold text-gray-500 uppercase tracking-wider mb-4">
              {group.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {group.items.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group bg-white rounded-2xl border border-pink-100 shadow-sm p-6 hover:shadow-md hover:border-pink-200 transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-3xl">{guide.emoji}</span>
                    {guide.badge && (
                      <span className="text-xs font-semibold bg-pink-100 text-pink-700 px-2.5 py-1 rounded-full shrink-0">
                        {guide.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{guide.desc}</p>
                  <p className="text-xs text-pink-500 font-medium mt-3">Read guide →</p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* Chatbot CTA */}
        <section className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Can&apos;t Find What You&apos;re Looking For?</h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">
            Ask our AI assistant any PCOS question — symptoms, treatments, diet,
            medications, or anything else on your mind.
          </p>
          <Link
            href="/chat"
            className="inline-block bg-white text-pink-600 font-bold px-8 py-3 rounded-full hover:bg-pink-50 transition-colors"
          >
            Ask the AI Chat Assistant →
          </Link>
        </section>

        <NewsletterSignup />
      </div>
    </div>
  );
}
