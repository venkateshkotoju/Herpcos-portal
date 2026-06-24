import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About HerPCOS Portal - Our Mission & Story",
  description:
    "Learn about HerPCOS Portal — an AI-powered PCOS support platform built to help women navigate symptoms, hormone health, and lifestyle management with evidence-based guidance.",
};

const values = [
  {
    title: "Evidence-Based",
    description:
      "Every answer and resource is grounded in current medical research and clinical guidelines on PCOS management.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Privacy-First",
    description:
      "Your health conversations are personal. We are designed from the ground up to keep your data private and secure.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Community-Driven",
    description:
      "Real questions, real experiences. Our Q&A library grows from the community and helps every woman feel less alone.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "bg-rose-100 text-rose-600",
  },
  {
    title: "Always Available",
    description:
      "PCOS questions don't keep office hours. Our AI assistant is available 24/7 — whenever you need answers.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "bg-amber-100 text-amber-600",
  },
];

const offerings = [
  {
    title: "AI Chat Assistant",
    description:
      "Ask anything about PCOS — symptoms, hormones, diet, fertility, and more. Get clear, evidence-based answers instantly.",
    href: "/chat",
    cta: "Start Chatting",
  },
  {
    title: "Community Q&A",
    description:
      "Browse hundreds of real questions from women navigating PCOS, organized by topic so you can find what matters most.",
    href: "/qa",
    cta: "Browse Q&A",
  },
  {
    title: "Hormone Health Guidance",
    description:
      "Understand how PCOS affects your hormones and what lifestyle, nutrition, and medical options can help you rebalance.",
    href: "/chat",
    cta: "Learn More",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Our Mission
          </span>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Built for Every Woman{" "}
            <span className="text-pink-600">Living With PCOS</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            HerPCOS Portal exists to close the information gap that leaves millions of women
            confused, undiagnosed, and without support. We combine AI-powered guidance with
            a trusted community — so you never have to navigate PCOS alone.
          </p>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why HerPCOS Exists</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Polycystic Ovary Syndrome affects approximately{" "}
                <strong className="text-gray-900">1 in 10 women</strong> of reproductive age,
                making it one of the most common hormonal disorders in the world. Yet up to{" "}
                <strong className="text-gray-900">70% of women with PCOS go undiagnosed</strong>{" "}
                — often dismissed, misdiagnosed, or left searching for answers alone.
              </p>
              <p>
                The path from symptoms to diagnosis can take years. And even after a diagnosis,
                navigating treatment options, lifestyle changes, and the emotional toll of PCOS
                remains an ongoing challenge without adequate support.
              </p>
              <p>
                HerPCOS Portal was built to change that. We created an accessible, always-on
                resource that helps women understand their bodies, ask questions freely, and
                access evidence-based information — without judgment, waiting rooms, or cost barriers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl font-bold text-center mb-10">The PCOS Reality</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { stat: "1 in 10", label: "Women have PCOS" },
                { stat: "70%", label: "Go undiagnosed" },
                { stat: "5–10 yrs", label: "Average diagnosis delay" },
                { stat: "100%", label: "Free to use" },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <p className="text-4xl font-bold mb-2">{stat}</p>
                  <p className="text-pink-100 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offerings.map(({ title, description, href, cta }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-pink-100 shadow-sm p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{description}</p>
                <Link
                  href={href}
                  className="text-pink-600 text-sm font-semibold hover:text-pink-700 transition-colors flex items-center gap-1"
                >
                  {cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map(({ title, description, icon, color }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-pink-100 shadow-sm p-6 flex gap-4"
              >
                <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${color}`}>
                  {icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4">
            <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <p className="text-amber-800 font-semibold mb-1">We Are Not a Medical Provider</p>
              <p className="text-amber-700 text-sm leading-relaxed">
                HerPCOS Portal provides general health information and educational content only.
                It is not a substitute for professional medical advice, diagnosis, or treatment.
                Always consult a qualified healthcare provider for your specific health needs.{" "}
                <Link href="/medical-disclaimer" className="underline hover:text-amber-900">
                  Read our full medical disclaimer.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Answers?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Start a conversation with our AI assistant or browse thousands of PCOS questions answered by the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/chat"
              className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors"
            >
              Start Chatting
            </Link>
            <Link
              href="/qa"
              className="bg-white border-2 border-pink-200 text-pink-600 px-8 py-3 rounded-full font-semibold hover:border-pink-400 transition-colors"
            >
              Browse Q&A
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
