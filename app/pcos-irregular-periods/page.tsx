import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import AuthorCard from "@/components/AuthorCard";
import GuideSchema from "@/components/GuideSchema";

export const metadata: Metadata = {
  title: "PCOS and Irregular Periods: Causes & What to Do",
  description:
    "Learn why PCOS causes irregular, missed, or heavy periods, how to track your cycle, and what treatment options exist. Clear, beginner-friendly guide.",
  openGraph: {
    title: "PCOS and Irregular Periods: Causes & What to Do",
    description:
      "Learn why PCOS causes irregular, missed, or heavy periods, how to track your cycle, and what treatment options exist.",
    url: "https://herpcos.com/pcos-irregular-periods",
    type: "article",
    siteName: "HerPCOS Portal",
    locale: "en_US",
    images: [
      {
        url: "https://herpcos.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PCOS and Irregular Periods — HerPCOS Portal",
      },
    ],
  },
};

const CYCLE_TYPES = [
  {
    icon: "📅",
    title: "Oligomenorrhea",
    desc: "Cycles longer than 35 days or fewer than 8 periods per year. This is the most common menstrual pattern in PCOS — caused by delayed or absent ovulation.",
  },
  {
    icon: "❌",
    title: "Amenorrhea",
    desc: "Complete absence of periods for 3 or more consecutive months (when not pregnant or menopausal). More severe disruption of ovulation, often seen with significant hormonal imbalance.",
  },
  {
    icon: "🔴",
    title: "Heavy or Prolonged Bleeding",
    desc: "When periods do come, they may be heavier and longer than usual. The uterine lining builds up over time without regular shedding, leading to heavier flow when it finally arrives.",
  },
  {
    icon: "🔄",
    title: "Unpredictable Cycles",
    desc: "Some women alternate between long gaps and then two periods close together. The irregularity itself — not knowing when to expect a period — is a defining feature of PCOS-related cycles.",
  },
];

const TRACKING_TIPS = [
  "Log the first day of every period in an app (Clue, Flo, or a simple calendar)",
  "Note how heavy the flow is each day (light / medium / heavy / spotting)",
  "Track symptoms like cramping, bloating, or mood changes",
  "Record any days you notice fertile cervical mucus (clear, stretchy discharge)",
  "Share 3–6 months of data with your doctor for a clearer picture",
];

const TREATMENTS = [
  {
    name: "Hormonal Birth Control",
    desc: "The pill, patch, or hormonal IUD can regulate or stop periods, reduce androgen levels, and protect the uterine lining. Often the first-line treatment for menstrual irregularity in PCOS.",
    forWho: "Women not trying to conceive",
  },
  {
    name: "Progestin Therapy",
    desc: "Progestin taken for 10–14 days every 1–3 months can trigger a withdrawal bleed and protect the uterine lining from abnormal thickening (endometrial hyperplasia).",
    forWho: "Women who prefer not to use estrogen-containing contraceptives",
  },
  {
    name: "Metformin",
    desc: "An insulin-sensitising medication that can restore more regular ovulation and periods by addressing insulin resistance — a root driver of PCOS-related hormonal disruption.",
    forWho: "Women with significant insulin resistance or type 2 diabetes risk",
  },
  {
    name: "Lifestyle Changes",
    desc: "Losing 5–10% of body weight (if overweight) through diet and exercise can significantly improve period regularity by lowering insulin and androgen levels.",
    forWho: "All women with PCOS — often the most sustainable approach",
  },
  {
    name: "Clomiphene / Letrozole",
    desc: "Ovulation-inducing medications prescribed when trying to conceive. They stimulate the ovaries to release an egg, giving more predictable cycles and a chance to get pregnant.",
    forWho: "Women actively trying to conceive",
  },
];

const FAQS = [
  {
    q: "Why does PCOS cause irregular periods?",
    a: "PCOS disrupts the hormonal signals that trigger ovulation. Without regular ovulation, the body doesn't produce the progesterone surge needed to shed the uterine lining on schedule. The result: delayed, missed, or unpredictable periods.",
  },
  {
    q: "Is it dangerous to have very infrequent periods?",
    a: "Having fewer than 4 periods a year is worth investigating. Without regular shedding, the uterine lining can build up and thicken — a condition called endometrial hyperplasia — which, over time, increases the risk of endometrial cancer. Doctors typically recommend triggering a bleed at least every 3 months.",
  },
  {
    q: "Can I still get pregnant if my periods are irregular?",
    a: "Yes, but it's more challenging because irregular periods often mean irregular or absent ovulation. Fertility treatments like letrozole can help induce ovulation. Many women with PCOS do conceive — with the right support.",
  },
  {
    q: "How do I know if I'm ovulating with PCOS?",
    a: "Ovulation predictor kits (OPKs) can detect the LH surge before ovulation, though PCOS can cause false positives. Basal body temperature tracking and monitoring cervical mucus changes can also provide clues. A progesterone blood test in the second half of your cycle is the most reliable indicator.",
  },
  {
    q: "Will my periods become regular on their own?",
    a: "For some women, periods become more regular with age or after lifestyle changes. For others, medical management is needed. It depends on the severity of hormonal imbalance and individual factors — your doctor can assess your specific situation.",
  },
  {
    q: "Can stress make PCOS-related period irregularity worse?",
    a: "Yes. Chronic stress raises cortisol, which further disrupts the hypothalamic-pituitary-ovarian axis — the hormonal system that controls ovulation. Managing stress through sleep, exercise, and relaxation techniques can sometimes help improve cycle regularity.",
  },
];

const RELATED = [
  { href: "/pcos-symptoms", label: "PCOS Symptoms Guide" },
  { href: "/pcos-diet", label: "Best Diet for PCOS" },
  { href: "/pcos-weight-loss", label: "PCOS Weight Loss Guide" },
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

export default function PcosIrregularPeriodsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="inline-block bg-white/20 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            PCOS Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            PCOS and Irregular Periods
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            Why PCOS disrupts your cycle, what types of irregularity to expect,
            and the treatment options that can help.
          </p>
          <p className="text-pink-200 text-xs mt-4">Last reviewed: June 24, 2025</p>
        </div>
      </div>

      <GuideSchema
        title="PCOS and Irregular Periods: Causes & What to Do"
        description="Learn why PCOS causes irregular, missed, or heavy periods, how to track your cycle, and what treatment options exist. Clear, beginner-friendly guide."
        url="https://herpcos.com/pcos-irregular-periods"
        datePublished="2025-06-24"
        breadcrumbLabel="Irregular Periods"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <AuthorCard lastUpdated="June 24, 2025" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-10">
        {/* How PCOS Affects the Cycle */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How PCOS Disrupts Your Cycle
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            A normal menstrual cycle depends on a precise sequence of hormonal
            signals that trigger ovulation — the release of a mature egg. PCOS
            disrupts this process at the source.
          </p>
          <p className="text-gray-600 leading-relaxed mb-3">
            High levels of insulin stimulate the ovaries to produce too many
            androgens (male hormones). This prevents follicles from maturing
            properly, so ovulation either happens erratically or not at all.
            Without ovulation, the progesterone that normally triggers the
            uterine lining to shed is never produced — leading to a missed or
            delayed period.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The follicles that didn&apos;t ovulate remain in the ovaries as small
            fluid-filled sacs — the &quot;cysts&quot; that give PCOS its name.
          </p>
        </section>

        {/* Types of Irregularity */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Types of Menstrual Irregularity in PCOS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CYCLE_TYPES.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-2xl border border-pink-100 shadow-sm p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{c.icon}</span>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {c.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tracking */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Track Your Cycle With PCOS
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tracking is one of the most valuable things you can do — both for
            understanding your own patterns and for giving your doctor useful
            data. Here&apos;s what to log:
          </p>
          <ul className="space-y-2">
            {TRACKING_TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="text-pink-500 font-bold mt-0.5">✓</span>
                {tip}
              </li>
            ))}
          </ul>
        </section>

        {/* Treatments */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Treatment Options
          </h2>
          <p className="text-xs text-gray-400 mb-5">
            Always discuss treatment options with a qualified healthcare provider. This is for informational purposes only.
          </p>
          <div className="space-y-4">
            {TREATMENTS.map((t) => (
              <div
                key={t.name}
                className="bg-pink-50 rounded-xl p-5"
              >
                <h3 className="font-semibold text-gray-900 mb-1">{t.name}</h3>
                <p className="text-sm text-gray-600 mb-2 leading-relaxed">{t.desc}</p>
                <span className="inline-block text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
                  Best for: {t.forWho}
                </span>
              </div>
            ))}
          </div>
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
            Questions About Your Cycle?
          </h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">
            Our AI assistant can answer questions about period irregularity,
            ovulation tracking, and what to ask your doctor.
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
