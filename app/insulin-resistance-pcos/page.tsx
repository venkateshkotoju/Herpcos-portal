import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insulin Resistance and PCOS: The Connection Explained | HerPCOS Portal",
  description:
    "Learn what insulin resistance is, why it's linked to PCOS, how to test for it, and natural and medical ways to manage it. Beginner-friendly guide.",
};

const SIGNS = [
  "Dark, velvety patches of skin (acanthosis nigricans) on the neck, armpits, or groin",
  "Persistent fatigue, especially after carbohydrate-heavy meals",
  "Strong sugar and carb cravings",
  "Difficulty losing weight despite diet and exercise",
  "Frequent hunger shortly after eating",
  "Brain fog and difficulty concentrating",
  "Abdominal weight gain (belly fat)",
  "High fasting blood glucose or triglycerides on a blood test",
];

const TESTS = [
  {
    name: "Fasting Insulin Test",
    desc: "Measures insulin level after an overnight fast. Elevated fasting insulin is the most direct indicator of insulin resistance. Normal is typically below 25 mIU/L, but many integrative doctors prefer below 10.",
  },
  {
    name: "HOMA-IR Score",
    desc: "Calculated from fasting insulin and fasting glucose. A score above 2.0–2.5 suggests insulin resistance. Your doctor can calculate this from a standard blood draw.",
  },
  {
    name: "Fasting Blood Glucose",
    desc: "Values between 100–125 mg/dL (prediabetes range) suggest impaired glucose regulation. Above 126 indicates type 2 diabetes.",
  },
  {
    name: "Oral Glucose Tolerance Test (OGTT)",
    desc: "You drink a sugar solution and blood glucose is measured at intervals. Shows how well your body clears glucose — more comprehensive than fasting glucose alone.",
  },
  {
    name: "HbA1c",
    desc: "Measures average blood sugar over 2–3 months. Values of 5.7–6.4% indicate prediabetes. Useful for seeing the longer-term picture.",
  },
];

const MANAGEMENT = [
  {
    icon: "🥗",
    title: "Low-GI Diet",
    desc: "Eating foods that digest slowly (vegetables, legumes, whole grains, lean protein) prevents blood sugar spikes and reduces the insulin demand on your body.",
    link: { href: "/pcos-diet", label: "See the full PCOS diet guide →" },
  },
  {
    icon: "🏃",
    title: "Regular Exercise",
    desc: "Muscle contractions during exercise allow cells to absorb glucose without insulin. Even a 30-minute walk after meals significantly improves insulin sensitivity.",
    link: null,
  },
  {
    icon: "🌙",
    title: "Quality Sleep",
    desc: "Just one night of poor sleep can reduce insulin sensitivity by up to 25%. Prioritise 7–9 hours and address sleep apnea if present — it's much more common in women with PCOS.",
    link: null,
  },
  {
    icon: "🧘",
    title: "Stress Reduction",
    desc: "Cortisol (the stress hormone) directly opposes insulin. Chronic stress keeps insulin resistance elevated even with a perfect diet. Meditation, yoga, and nature walks all help.",
    link: null,
  },
  {
    icon: "💊",
    title: "Inositol Supplements",
    desc: "Myo-inositol (and the combination with d-chiro-inositol in a 40:1 ratio) has strong evidence for improving insulin sensitivity in PCOS. Widely available and generally well-tolerated.",
    link: null,
  },
  {
    icon: "💉",
    title: "Metformin (Prescription)",
    desc: "A medication that reduces glucose production in the liver and improves cell insulin sensitivity. Often prescribed for PCOS women with significant insulin resistance or prediabetes.",
    link: null,
  },
];

const FAQS = [
  {
    q: "What is insulin resistance exactly?",
    a: "Normally, insulin acts like a key that unlocks your cells to let glucose (sugar) in for energy. With insulin resistance, the cells don't respond well to the key — so the pancreas produces more and more insulin to compensate. High insulin levels then drive many PCOS symptoms.",
  },
  {
    q: "How does insulin resistance cause PCOS symptoms?",
    a: "High insulin levels signal the ovaries to produce excess androgens (male hormones like testosterone). This disrupts ovulation, causes irregular periods, drives acne, excess hair growth, and hair thinning. Insulin resistance also promotes fat storage and makes weight loss harder.",
  },
  {
    q: "Do all women with PCOS have insulin resistance?",
    a: "Not all, but the majority — estimates range from 65–80% of women with PCOS have some degree of insulin resistance, including lean women. Even if you're at a healthy weight, insulin resistance can be present and driving PCOS symptoms.",
  },
  {
    q: "Can I reverse insulin resistance with PCOS?",
    a: "Yes, insulin resistance is reversible (or significantly improvable) with lifestyle changes. Diet, exercise, sleep, and stress management can dramatically improve insulin sensitivity. Medications like metformin and supplements like inositol can also help. It typically takes 3–6 months to see meaningful changes.",
  },
  {
    q: "Is metformin the only medication for insulin resistance in PCOS?",
    a: "Metformin is the most commonly prescribed, but others exist. GLP-1 receptor agonists (like semaglutide/Ozempic) are increasingly used for PCOS-related insulin resistance and weight loss. Speak to your doctor about which option is appropriate for your situation.",
  },
  {
    q: "Will treating insulin resistance improve my periods?",
    a: "Often yes. Since insulin resistance is a key driver of the androgen excess that disrupts ovulation, addressing it can lead to more regular cycles. Many women see period regularity improve within 3–6 months of lifestyle changes or metformin treatment.",
  },
];

const RELATED = [
  { href: "/pcos-symptoms", label: "PCOS Symptoms Guide" },
  { href: "/pcos-diet", label: "Best Diet for PCOS" },
  { href: "/pcos-weight-loss", label: "PCOS Weight Loss Guide" },
  { href: "/pcos-irregular-periods", label: "PCOS & Irregular Periods" },
];

export default function InsulinResistancePcosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="inline-block bg-white/20 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            PCOS Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Insulin Resistance and PCOS
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            The connection between insulin and PCOS — explained clearly, with
            practical steps to improve your insulin sensitivity.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* What Is It */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Is Insulin Resistance?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            When you eat carbohydrates, your digestive system breaks them down
            into glucose. Your pancreas then releases <strong>insulin</strong> — a
            hormone that acts like a key, unlocking your cells so they can
            absorb glucose for energy.
          </p>
          <p className="text-gray-600 leading-relaxed mb-3">
            With <strong>insulin resistance</strong>, your cells stop responding
            well to insulin. The lock becomes stiff. To compensate, your
            pancreas pumps out more and more insulin — and those persistently
            high insulin levels are what drive many PCOS symptoms.
          </p>
          <div className="bg-pink-50 rounded-xl p-4 text-sm text-gray-600">
            <strong className="text-pink-700">The PCOS link:</strong> High
            insulin directly signals the ovaries to produce excess androgens
            (male hormones). This disrupts ovulation, causes irregular periods,
            fuels acne, excess hair growth, and makes weight loss very
            difficult.
          </div>
        </section>

        {/* Signs */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Signs You May Have Insulin Resistance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {SIGNS.map((sign) => (
              <div
                key={sign}
                className="flex items-start gap-2 text-sm text-gray-600 bg-pink-50 rounded-xl px-4 py-3"
              >
                <span className="text-pink-500 font-bold mt-0.5">→</span>
                {sign}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            These signs are not diagnostic — only a blood test can confirm insulin resistance.
          </p>
        </section>

        {/* Tests */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            How to Test for Insulin Resistance
          </h2>
          <div className="space-y-4">
            {TESTS.map((t) => (
              <div key={t.name} className="border-l-4 border-pink-300 pl-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Management */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How to Improve Insulin Sensitivity
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MANAGEMENT.map((m) => (
              <div
                key={m.title}
                className="bg-white rounded-2xl border border-pink-100 shadow-sm p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{m.icon}</span>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {m.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{m.desc}</p>
                {m.link && (
                  <Link
                    href={m.link.href}
                    className="inline-block mt-3 text-sm text-pink-600 font-medium hover:underline"
                  >
                    {m.link.label}
                  </Link>
                )}
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
            Want to Learn More About Insulin and PCOS?
          </h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">
            Ask our AI assistant specific questions about insulin resistance,
            testing, supplements, and how to approach your doctor.
          </p>
          <Link
            href="/chat"
            className="inline-block bg-white text-pink-600 font-bold px-8 py-3 rounded-full hover:bg-pink-50 transition-colors"
          >
            Ask the AI Chat Assistant →
          </Link>
        </section>

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
