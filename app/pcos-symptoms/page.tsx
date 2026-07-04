import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import AuthorCard from "@/components/AuthorCard";
import GuideSchema from "@/components/GuideSchema";

export const metadata: Metadata = {
  title: "PCOS Symptoms: Complete Guide for 2025",
  description:
    "Learn about all PCOS symptoms — from irregular periods and hair loss to acne and mood changes. Beginner-friendly guide with FAQs and expert tips.",
  openGraph: {
    title: "PCOS Symptoms: Complete Guide for 2025",
    description:
      "Learn about all PCOS symptoms — from irregular periods and hair loss to acne and mood changes. Beginner-friendly guide with FAQs.",
    url: "https://herpcos.com/pcos-symptoms",
    type: "article",
    siteName: "HerPCOS Portal",
    locale: "en_US",
    images: [
      {
        url: "https://herpcos.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PCOS Symptoms — HerPCOS Portal",
      },
    ],
  },
};

const SYMPTOMS = [
  {
    icon: "🔴",
    title: "Irregular or Missed Periods",
    desc: "One of the most common signs. PCOS disrupts ovulation, causing cycles that are longer than 35 days, shorter than 21 days, or skipped entirely. Some women have fewer than 8 periods a year.",
  },
  {
    icon: "💉",
    title: "High Androgen Levels",
    desc: "Androgens are often called 'male hormones,' but women produce them too. With PCOS, levels are elevated — causing excess facial or body hair (hirsutism), acne, and scalp hair thinning.",
  },
  {
    icon: "🔬",
    title: "Polycystic Ovaries",
    desc: "An ultrasound may show ovaries that are enlarged and contain many small follicles (fluid-filled sacs). Note: not everyone with PCOS has cysts, and not everyone with cysts has PCOS.",
  },
  {
    icon: "⚖️",
    title: "Weight Gain or Difficulty Losing Weight",
    desc: "Insulin resistance — common in PCOS — makes the body store more fat, especially around the abdomen. Losing weight is harder even with a healthy diet and exercise.",
  },
  {
    icon: "🌿",
    title: "Excess Hair Growth (Hirsutism)",
    desc: "Dark, coarse hair appears on the face, chest, back, or stomach — areas where men typically grow hair. This affects up to 70% of women with PCOS and is driven by high androgen levels.",
  },
  {
    icon: "💆",
    title: "Acne and Oily Skin",
    desc: "Elevated androgens trigger the skin's oil glands to overproduce sebum, leading to persistent acne on the face, chest, or upper back that doesn't respond well to typical skincare.",
  },
  {
    icon: "💇",
    title: "Hair Thinning on the Scalp",
    desc: "Also called female pattern hair loss. Hair on the top of the head may become thinner or fall out more than usual — again linked to high androgen activity.",
  },
  {
    icon: "😔",
    title: "Mood Changes and Depression",
    desc: "Hormonal imbalances in PCOS are strongly linked to anxiety, depression, and mood swings. Studies show women with PCOS are 3× more likely to experience depression.",
  },
  {
    icon: "😴",
    title: "Fatigue and Sleep Problems",
    desc: "Insulin resistance and hormonal disruption often cause persistent fatigue. Sleep apnea — where breathing repeatedly stops during sleep — is also significantly more common in PCOS.",
  },
  {
    icon: "🤰",
    title: "Difficulty Getting Pregnant",
    desc: "PCOS is one of the leading causes of female infertility. Irregular ovulation means fewer chances to conceive naturally — though many women with PCOS do get pregnant with support.",
  },
];

const FAQS = [
  {
    q: "How do I know if I have PCOS?",
    a: "PCOS is diagnosed using the Rotterdam criteria — you need at least 2 of these 3: irregular or absent periods, elevated androgen levels (on a blood test or visible symptoms like excess hair), and polycystic ovaries on ultrasound. Only a doctor can give you an official diagnosis.",
  },
  {
    q: "Can I have PCOS without cysts on my ovaries?",
    a: "Yes. Despite the name, you do not need to have ovarian cysts to be diagnosed with PCOS. You only need 2 of the 3 Rotterdam criteria. Many women with PCOS have no cysts at all.",
  },
  {
    q: "What age does PCOS usually start?",
    a: "PCOS typically begins during puberty when hormones first become active. However, many women aren't diagnosed until their 20s or 30s when they notice symptoms like irregular periods or difficulty conceiving.",
  },
  {
    q: "Do PCOS symptoms get worse over time?",
    a: "Not necessarily. Many women find symptoms improve after lifestyle changes like diet and exercise. Some symptoms like irregular periods can also become more regular as hormone levels shift with age.",
  },
  {
    q: "Is PCOS the same as having high testosterone?",
    a: "Not exactly. PCOS involves elevated androgens (a group of hormones that includes testosterone), but the issue is broader — it also involves insulin resistance and disrupted ovulation. High testosterone is one part of the picture.",
  },
  {
    q: "Can thin women have PCOS?",
    a: "Absolutely. About 20% of women with PCOS are normal weight or underweight. This is sometimes called 'lean PCOS.' Thin women can still have hormonal imbalances, irregular periods, and other PCOS symptoms.",
  },
];

const RELATED = [
  { href: "/pcos-diet", label: "Best Diet for PCOS" },
  { href: "/pcos-weight-loss", label: "PCOS Weight Loss Guide" },
  { href: "/pcos-irregular-periods", label: "PCOS & Irregular Periods" },
  { href: "/insulin-resistance-pcos", label: "Insulin Resistance & PCOS" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "PCOS Symptoms: The Complete Guide",
  description:
    "Everything you need to know about PCOS symptoms — explained simply, backed by science.",
  url: "https://herpcos.com/pcos-symptoms",
  datePublished: "2025-06-01",
  dateModified: "2025-06-24",
  publisher: {
    "@type": "Organization",
    name: "HerPCOS Portal",
    url: "https://herpcos.com",
  },
  medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
};

export default function PcosSymptomsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Hero */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            PCOS Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            PCOS Symptoms: The Complete Guide
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about PCOS symptoms — explained simply,
            backed by science, and written for real women.
          </p>
          <p className="text-pink-200 text-xs mt-4">
            Last reviewed: June 24, 2025
          </p>
        </div>
      </div>

      <GuideSchema
        title="PCOS Symptoms: Complete Guide for 2025"
        description="Learn about all PCOS symptoms — from irregular periods and hair loss to acne and mood changes. Beginner-friendly guide with FAQs and expert tips."
        url="https://herpcos.com/pcos-symptoms"
        datePublished="2025-06-24"
        breadcrumbLabel="PCOS Symptoms"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <AuthorCard lastUpdated="June 24, 2025" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-10">
        {/* Intro */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Is PCOS?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Polycystic Ovary Syndrome (PCOS) is a hormonal disorder affecting
            1 in 10 women of reproductive age. It disrupts how the ovaries
            work, leading to a wide range of symptoms that vary from person to
            person.
          </p>
          <p className="text-gray-600 leading-relaxed">
            No two women experience PCOS the same way. Some have many symptoms,
            others just a few. Understanding what to look for is the first step
            toward getting the right support.
          </p>
        </section>

        {/* Symptoms Grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            10 Common PCOS Symptoms
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SYMPTOMS.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl border border-pink-100 shadow-sm p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{s.icon}</span>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {s.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* When to See a Doctor */}
        <section className="bg-amber-50 border border-amber-200 rounded-2xl p-7">
          <h2 className="text-xl font-bold text-amber-800 mb-3">
            ⚠️ When to See a Doctor
          </h2>
          <p className="text-amber-800 text-sm leading-relaxed mb-3">
            See a gynecologist or endocrinologist if you experience any of the
            following:
          </p>
          <ul className="space-y-1.5 text-sm text-amber-800">
            {[
              "Periods more than 35 days apart, or fewer than 8 per year",
              "No period for 3+ months and you're not pregnant",
              "Sudden or significant increase in facial or body hair",
              "Severe acne that doesn't respond to skincare",
              "Difficulty getting pregnant after 12 months of trying",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5">•</span> {item}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="bg-white rounded-2xl border border-pink-100 shadow-sm group"
              >
                <summary className="flex justify-between items-center px-6 py-4 cursor-pointer font-medium text-gray-900 list-none">
                  {faq.q}
                  <span className="text-pink-500 text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-pink-50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">
            Have Questions About Your Symptoms?
          </h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">
            Our AI assistant can answer your PCOS questions instantly — no
            waiting, no judgment, available 24/7.
          </p>
          <Link
            href="/chat"
            className="inline-block bg-white text-pink-600 font-bold px-8 py-3 rounded-full hover:bg-pink-50 transition-colors"
          >
            Ask the AI Chat Assistant →
          </Link>
        </section>

        {/* Newsletter */}
        <NewsletterSignup />

        {/* Related Guides */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Related PCOS Guides
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {RELATED.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="bg-white rounded-xl border border-pink-100 shadow-sm px-4 py-3 text-sm font-medium text-pink-700 hover:bg-pink-50 transition-colors text-center"
              >
                {r.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
