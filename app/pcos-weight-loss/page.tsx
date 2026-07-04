import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import AuthorCard from "@/components/AuthorCard";
import GuideSchema from "@/components/GuideSchema";

export const metadata: Metadata = {
  title: "PCOS Weight Loss Guide: What Actually Works",
  description:
    "Struggling to lose weight with PCOS? Learn why it's harder, what actually helps, and evidence-based strategies for lasting results. Beginner-friendly.",
  openGraph: {
    title: "PCOS Weight Loss Guide: What Actually Works",
    description:
      "Struggling to lose weight with PCOS? Learn why it's harder and what evidence-based strategies actually work.",
    url: "https://herpcos.com/pcos-weight-loss",
    type: "article",
    siteName: "HerPCOS Portal",
    locale: "en_US",
    images: [
      {
        url: "https://herpcos.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PCOS Weight Loss Guide — HerPCOS Portal",
      },
    ],
  },
};

const STRATEGIES = [
  {
    icon: "🥗",
    title: "Eat to Stabilise Blood Sugar",
    desc: "Focus on low-GI foods, adequate protein (20–30g per meal), and healthy fats. Avoid skipping meals — erratic eating patterns worsen insulin resistance and make weight loss harder.",
    link: { href: "/pcos-diet", label: "See the full PCOS diet guide →" },
  },
  {
    icon: "🏋️",
    title: "Combine Cardio With Strength Training",
    desc: "Cardio burns calories, but strength training builds muscle — and muscle is metabolically active, meaning it burns more calories at rest. A mix of both is most effective for PCOS.",
    link: null,
  },
  {
    icon: "😴",
    title: "Prioritise Sleep",
    desc: "Poor sleep raises cortisol and ghrelin (the hunger hormone), making it harder to control appetite and lose weight. Aim for 7–9 hours per night. Sleep apnea — common in PCOS — should be treated.",
    link: null,
  },
  {
    icon: "🧘",
    title: "Manage Stress",
    desc: "Chronic stress raises cortisol, which promotes fat storage — especially around the abdomen. Yoga, meditation, walks, or any enjoyable activity that reduces stress can support weight loss.",
    link: null,
  },
  {
    icon: "💊",
    title: "Consider Medication Support",
    desc: "Metformin (prescribed by a doctor) can improve insulin sensitivity and aid weight loss in PCOS. Inositol supplements (myo-inositol + d-chiro-inositol) are also evidence-backed. Always consult your doctor.",
    link: null,
  },
  {
    icon: "📊",
    title: "Track Progress Beyond the Scale",
    desc: "With PCOS, the scale may not move for weeks even when you're making real progress. Track energy levels, period regularity, waist measurements, and how your clothes fit — these often change before weight does.",
    link: null,
  },
];

const EXERCISE = [
  {
    type: "Strength Training",
    examples: "Weight lifting, resistance bands, bodyweight exercises",
    frequency: "2–3× per week",
    why: "Increases insulin sensitivity and builds calorie-burning muscle mass",
  },
  {
    type: "Low-Intensity Cardio",
    examples: "Walking, cycling, swimming",
    frequency: "Daily or 4–5× per week",
    why: "Burns fat without spiking cortisol; easy to maintain long term",
  },
  {
    type: "HIIT",
    examples: "Sprint intervals, circuit training",
    frequency: "1–2× per week",
    why: "Improves insulin sensitivity and boosts metabolism in short sessions",
  },
  {
    type: "Yoga / Pilates",
    examples: "Hatha yoga, reformer Pilates",
    frequency: "2–3× per week",
    why: "Reduces cortisol and stress; improves flexibility and body awareness",
  },
];

const FAQS = [
  {
    q: "Why is it so hard to lose weight with PCOS?",
    a: "Insulin resistance is the main reason. When cells don't respond to insulin properly, the body produces more of it — and high insulin promotes fat storage (especially around the belly) while blocking fat burning. Elevated androgens also slow metabolism. This doesn't mean weight loss is impossible; it just requires a more tailored approach.",
  },
  {
    q: "How much weight do I need to lose to improve PCOS symptoms?",
    a: "Research shows that losing just 5–10% of your body weight can significantly improve PCOS symptoms — including more regular periods, lower androgen levels, improved insulin sensitivity, and better fertility outcomes. Even small losses matter.",
  },
  {
    q: "Does losing weight cure PCOS?",
    a: "No — PCOS is a lifelong condition. But weight loss (if you're overweight) can put PCOS into remission, meaning symptoms become minimal or manageable. Many women see their periods regulate, acne clear, and androgen levels drop after sustained weight loss.",
  },
  {
    q: "Is calorie counting useful for PCOS weight loss?",
    a: "It can be, but food quality often matters more than raw calories for PCOS. A 1,600-calorie day of whole foods affects insulin very differently from 1,600 calories of refined carbs. That said, a moderate caloric deficit (300–500 calories below maintenance) combined with low-GI eating is a solid approach.",
  },
  {
    q: "Should I avoid exercise if I have PCOS?",
    a: "The opposite — exercise is one of the most effective tools for PCOS. Even walking 30 minutes a day improves insulin sensitivity. The key is consistency. Avoid overtraining, which raises cortisol and can worsen hormonal imbalance.",
  },
  {
    q: "Can PCOS cause weight gain even if I eat well?",
    a: "Yes. Insulin resistance can cause weight gain or make it very hard to lose weight even with a healthy diet. If you're eating well and exercising but seeing no change, speak to your doctor about testing insulin levels and exploring medication options like metformin.",
  },
];

const RELATED = [
  { href: "/pcos-symptoms", label: "PCOS Symptoms Guide" },
  { href: "/pcos-diet", label: "Best Diet for PCOS" },
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

export default function PcosWeightLossPage() {
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
            PCOS Weight Loss Guide
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            Why weight loss feels impossible with PCOS — and what actually
            works, based on science, not fads.
          </p>
          <p className="text-pink-200 text-xs mt-4">Last reviewed: June 24, 2025</p>
        </div>
      </div>

      <GuideSchema
        title="PCOS Weight Loss Guide: What Actually Works"
        description="Struggling to lose weight with PCOS? Learn why it's harder, what actually helps, and evidence-based strategies for lasting results. Beginner-friendly."
        url="https://herpcos.com/pcos-weight-loss"
        datePublished="2025-06-24"
        breadcrumbLabel="PCOS Weight Loss"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <AuthorCard lastUpdated="June 24, 2025" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-10">
        {/* Why It's Harder */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Weight Loss Is Harder With PCOS
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            If you feel like your body is fighting against you, you&apos;re not
            imagining it. PCOS creates real biological barriers to weight loss:
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            {[
              "Insulin resistance causes the body to store more fat and burn less of it",
              "Elevated androgens slow metabolism and promote abdominal fat storage",
              "Hormonal imbalances disrupt hunger and fullness signals",
              "Sleep disruption and low energy make exercise harder to sustain",
              "Inflammation in PCOS promotes fat storage and slows fat burning",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-pink-500 mt-0.5 font-bold">→</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            Understanding this means you can stop blaming willpower and start
            addressing the actual root causes.
          </p>
        </section>

        {/* Strategies */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            6 Evidence-Based Strategies
          </h2>
          <div className="space-y-4">
            {STRATEGIES.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl border border-pink-100 shadow-sm p-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{s.icon}</span>
                  <h3 className="font-semibold text-gray-900">{s.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {s.desc}
                </p>
                {s.link && (
                  <Link
                    href={s.link.href}
                    className="inline-block mt-3 text-sm text-pink-600 font-medium hover:underline"
                  >
                    {s.link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Exercise Table */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Best Exercise Types for PCOS
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-pink-100">
                  <th className="text-left py-2 pr-4 text-gray-700 font-semibold">Type</th>
                  <th className="text-left py-2 pr-4 text-gray-700 font-semibold">Examples</th>
                  <th className="text-left py-2 pr-4 text-gray-700 font-semibold">Frequency</th>
                  <th className="text-left py-2 text-gray-700 font-semibold">Why It Helps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-50">
                {EXERCISE.map((e) => (
                  <tr key={e.type}>
                    <td className="py-3 pr-4 font-medium text-gray-900">{e.type}</td>
                    <td className="py-3 pr-4 text-gray-500">{e.examples}</td>
                    <td className="py-3 pr-4 text-gray-500">{e.frequency}</td>
                    <td className="py-3 text-gray-500">{e.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            Need Personalised Weight Loss Advice?
          </h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">
            Ask our AI assistant about PCOS-specific weight loss strategies,
            exercise plans, and what to discuss with your doctor.
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
