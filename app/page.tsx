import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";
import NewsletterSignup from "@/components/NewsletterSignup";
import { TOTAL_GUIDES_COUNT } from "@/lib/guides";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HerPCOS Portal — AI-Powered PCOS Support & Information",
  description:
    "HerPCOS helps women understand PCOS symptoms, diet, and hormones with free AI-powered guidance, expert guides, and community Q&A — available 24/7.",
  openGraph: {
    title: "HerPCOS Portal — AI-Powered PCOS Support",
    description:
      "Free AI-powered PCOS guidance, expert guides on symptoms, diet, weight loss, and hormones — available 24/7.",
    url: "https://herpcos.com",
    type: "website",
    siteName: "HerPCOS Portal",
    locale: "en_US",
    images: [
      {
        url: "https://herpcos.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "HerPCOS Portal — AI-Powered PCOS Support",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
            AI-Powered PCOS Support
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Irregular periods? Hair loss?{" "}
            <span className="text-pink-600">Confused about PCOS?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-3">
            Get clear, evidence-based answers about your symptoms, hormones,
            and treatment options — in plain English, in seconds.
          </p>
          <p className="text-base text-gray-500 max-w-2xl mx-auto mb-10">
            Personalized education, not diagnosis, to help you feel informed
            before your next doctor&apos;s visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/chat"
              className="bg-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors shadow-lg shadow-pink-200"
            >
              Ask Your First PCOS Question
            </Link>
            <Link
              href="/qa"
              className="bg-white text-pink-600 border-2 border-pink-200 px-8 py-4 rounded-full text-lg font-semibold hover:border-pink-400 transition-colors"
            >
              Browse Q&amp;A
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-5">
            Free &bull; No signup required &bull; Available 24/7
          </p>
        </div>
      </section>

      {/* Guided Journey Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">
          I&apos;m here because&hellip;
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Tell us why you&apos;re visiting and we&apos;ll point you to the right place.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              href: "/pcos-symptoms",
              emoji: "🔍",
              label: "I think I have PCOS",
            },
            {
              href: "/what-is-pcos",
              emoji: "📋",
              label: "I was just diagnosed",
            },
            {
              href: "/pcos-and-pregnancy",
              emoji: "🤰",
              label: "I'm trying to conceive",
            },
            {
              href: "/pcos-weight-loss",
              emoji: "⚖️",
              label: "I want to manage my weight",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-pink-100 hover:shadow-md hover:border-pink-300 transition-all"
            >
              <div className="text-3xl mb-3">{item.emoji}</div>
              <p className="font-semibold text-gray-900">{item.label}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          How HerPCOS Works
        </h2>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-12">
          Three simple steps to feel more informed about your PCOS.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI Chat */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
            <div className="inline-flex items-center gap-1.5 bg-pink-50 text-pink-600 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
              STEP 1
            </div>
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-5">
              <svg
                className="w-6 h-6 text-pink-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              AI Chat Assistant
            </h3>
            <p className="text-gray-600 mb-4">
              Get instant, personalized answers to your PCOS questions from our
              AI assistant — available around the clock.
            </p>
            <Link
              href="/chat"
              className="text-pink-600 font-medium hover:text-pink-700 inline-flex items-center gap-1"
            >
              Start chatting
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Hormone Health / Guides */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-rose-100 hover:shadow-md transition-shadow">
            <div className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-600 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
              STEP 2
            </div>
            <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-5">
              <svg
                className="w-6 h-6 text-rose-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Read Beginner Guides
            </h3>
            <p className="text-gray-600 mb-4">
              Understand your hormones with evidence-based guidance on managing
              insulin resistance, androgens, and more.
            </p>
            <Link
              href="/guides"
              className="text-rose-600 font-medium hover:text-rose-700 inline-flex items-center gap-1"
            >
              Browse guides
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Q&A Community */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
            <div className="inline-flex items-center gap-1.5 bg-purple-50 text-purple-600 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
              STEP 3
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Join the Community
            </h3>
            <p className="text-gray-600 mb-4">
              Browse and ask questions in our community forum. Share experiences
              and learn from others living with PCOS.
            </p>
            <Link
              href="/qa"
              className="text-purple-600 font-medium hover:text-purple-700 inline-flex items-center gap-1"
            >
              Explore Q&amp;A
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* PCOS Guides Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            PCOS Guides
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Free, beginner-friendly guides on the most important PCOS topics —
            written clearly, backed by research.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              href: "/what-is-pcos",
              emoji: "💡",
              title: "What Is PCOS?",
              desc: "The complete beginner's guide — causes, types, diagnosis, and treatment explained simply.",
              color: "border-purple-100",
            },
            {
              href: "/pcos-symptoms",
              emoji: "🔍",
              title: "PCOS Symptoms Guide",
              desc: "Understand the 10 most common PCOS symptoms and when to see a doctor.",
              color: "border-pink-100",
            },
            {
              href: "/pcos-diet",
              emoji: "🥗",
              title: "Best Diet for PCOS",
              desc: "What to eat, what to avoid, and why food choices matter so much for PCOS.",
              color: "border-purple-100",
            },
            {
              href: "/pcos-weight-loss",
              emoji: "⚖️",
              title: "PCOS Weight Loss Guide",
              desc: "Why weight loss is harder with PCOS and the strategies that actually work.",
              color: "border-pink-100",
            },
            {
              href: "/insulin-resistance-pcos",
              emoji: "💉",
              title: "Insulin Resistance & PCOS",
              desc: "The core link between insulin and PCOS — explained simply, with next steps.",
              color: "border-purple-100",
            },
            {
              href: "/pcos-irregular-periods",
              emoji: "📅",
              title: "PCOS & Irregular Periods",
              desc: "Why PCOS disrupts your cycle and the treatment options available.",
              color: "border-pink-100",
            },
          ].map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className={`bg-white rounded-2xl p-6 shadow-sm border ${guide.color} hover:shadow-md transition-shadow group`}
            >
              <div className="text-3xl mb-3">{guide.emoji}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                {guide.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{guide.desc}</p>
              <span className="inline-block mt-4 text-sm text-pink-600 font-medium">
                Read guide →
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/guides"
            className="inline-block bg-white border-2 border-pink-200 text-pink-600 font-semibold px-8 py-3 rounded-full hover:border-pink-400 hover:bg-pink-50 transition-colors"
          >
            Browse All {TOTAL_GUIDES_COUNT} PCOS Guides →
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-pink-600 py-16 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-2">
            You&apos;re Not Alone
          </h2>
          <p className="text-center text-pink-100 max-w-xl mx-auto mb-10">
            PCOS is common and manageable — the right information makes all
            the difference.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl font-bold mb-1">1 in 10</p>
              <p className="text-pink-200 text-sm">Women have PCOS</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-1">70%</p>
              <p className="text-pink-200 text-sm">Go undiagnosed</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-1">24/7</p>
              <p className="text-pink-200 text-sm">AI Support Available</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-1">100%</p>
              <p className="text-pink-200 text-sm">Free to Use</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-purple-50/60 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 bg-white text-purple-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-purple-100">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Evidence-Based
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Grounded in Trusted Medical Guidance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our guides and AI responses are written and reviewed to reflect
            major clinical references on PCOS, including the Rotterdam
            criteria, ACOG, and Endocrine Society guidelines — presented here
            for general education, not as an endorsement by those
            organizations. HerPCOS never diagnoses; it helps you understand
            your options so you can have a more informed conversation with
            your own healthcare provider.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <NewsletterSignup />
      </section>

      {/* Disclaimer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Disclaimer />
      </section>
    </div>
  );
}
