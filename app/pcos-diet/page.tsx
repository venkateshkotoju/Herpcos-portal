import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Best Diet for PCOS: What to Eat & Avoid in 2025 | HerPCOS Portal",
  description:
    "Discover the best PCOS diet — what foods help, what to avoid, meal ideas, and how diet affects hormones and insulin resistance. Beginner-friendly guide.",
  openGraph: {
    title: "Best Diet for PCOS: What to Eat & Avoid in 2025",
    description:
      "Discover the best PCOS diet — what foods help, what to avoid, meal ideas, and how diet affects hormones and insulin resistance.",
    url: "https://herpcos.com/pcos-diet",
    type: "article",
  },
};

const EAT_MORE = [
  {
    icon: "🥦",
    title: "Non-Starchy Vegetables",
    desc: "Broccoli, spinach, kale, peppers, zucchini, and leafy greens are low in sugar, high in fiber, and packed with anti-inflammatory nutrients. Aim for half your plate at every meal.",
  },
  {
    icon: "🫐",
    title: "Low-GI Fruits",
    desc: "Berries, cherries, apples, and pears release sugar slowly into the bloodstream, avoiding the insulin spikes that worsen PCOS symptoms. Great as snacks or added to yogurt.",
  },
  {
    icon: "🐟",
    title: "Fatty Fish",
    desc: "Salmon, sardines, mackerel, and trout are rich in omega-3 fatty acids, which reduce inflammation and may lower androgen levels. Aim for 2–3 servings per week.",
  },
  {
    icon: "🫘",
    title: "Legumes & Beans",
    desc: "Lentils, chickpeas, black beans, and kidney beans are high in fiber and plant protein. They digest slowly, keeping blood sugar stable for hours.",
  },
  {
    icon: "🥑",
    title: "Healthy Fats",
    desc: "Avocados, olive oil, nuts, and seeds support hormone production and reduce inflammation. They also keep you feeling full and satisfied longer.",
  },
  {
    icon: "🌾",
    title: "Whole Grains",
    desc: "Oats, quinoa, brown rice, and whole-grain bread have more fiber than refined grains, which slows digestion and reduces blood sugar spikes.",
  },
];

const AVOID = [
  { item: "White bread, white rice, and refined pasta", reason: "Rapidly spike blood sugar and insulin" },
  { item: "Sugary drinks (soda, juice, energy drinks)", reason: "Deliver large sugar loads with no fiber buffer" },
  { item: "Ultra-processed snacks and fast food", reason: "High in trans fats, salt, and hidden sugars" },
  { item: "Sweetened cereals and pastries", reason: "Refined carbs with minimal nutritional value" },
  { item: "Excessive dairy (for some women)", reason: "May raise IGF-1, which can worsen acne in sensitive individuals" },
  { item: "Alcohol", reason: "Disrupts hormone balance and liver function" },
];

const MEAL_IDEAS = [
  {
    time: "Breakfast",
    idea: "Overnight oats with berries, chia seeds, and almond butter",
  },
  {
    time: "Lunch",
    idea: "Grilled salmon over a large salad with avocado, chickpeas, and olive oil dressing",
  },
  {
    time: "Snack",
    idea: "Apple slices with a small handful of walnuts",
  },
  {
    time: "Dinner",
    idea: "Stir-fried tofu or chicken with broccoli, bell peppers, and brown rice",
  },
];

const FAQS = [
  {
    q: "Is a low-carb or keto diet good for PCOS?",
    a: "Low-carb diets can help some women with PCOS by reducing insulin levels and promoting weight loss. However, very strict keto isn't necessary — a moderate low-GI approach works well for most women and is easier to maintain long term.",
  },
  {
    q: "What foods trigger PCOS symptoms?",
    a: "Foods that spike blood sugar quickly are the biggest triggers — refined carbs (white bread, sugary cereals), sugary drinks, and ultra-processed foods. These raise insulin levels, which in turn raises androgen production and worsens symptoms.",
  },
  {
    q: "Can changing my diet cure PCOS?",
    a: "Diet cannot cure PCOS, but it can significantly manage symptoms. Women who improve their diet often notice more regular periods, clearer skin, reduced hair growth, and better energy levels — sometimes within a few months.",
  },
  {
    q: "Is intermittent fasting helpful for PCOS?",
    a: "Some women with PCOS benefit from intermittent fasting (e.g., 16:8) as it can improve insulin sensitivity. However, it's not for everyone — some women find extended fasting increases cortisol and worsens hormonal balance. Talk to your doctor before starting.",
  },
  {
    q: "Should I avoid gluten if I have PCOS?",
    a: "Only if you have celiac disease or a genuine gluten sensitivity. For most women with PCOS, gluten itself isn't the problem — it's refined gluten-containing foods (white bread, pastries) that spike insulin. Whole-grain options are generally fine.",
  },
  {
    q: "How much protein should I eat with PCOS?",
    a: "Protein helps stabilize blood sugar and keeps you full. Aim for 20–30g of protein per meal. Good sources include eggs, chicken, fish, Greek yogurt, legumes, and tofu.",
  },
];

const RELATED = [
  { href: "/pcos-symptoms", label: "PCOS Symptoms Guide" },
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

export default function PcosDietPage() {
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
            Best Diet for PCOS
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            What to eat, what to avoid, and why food choices matter so much
            for managing PCOS symptoms — explained simply.
          </p>
          <p className="text-pink-200 text-xs mt-4">Last reviewed: June 24, 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Why Diet Matters */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Diet Matters for PCOS
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            The connection between food and PCOS comes down to{" "}
            <strong>insulin</strong>. Most women with PCOS have insulin
            resistance — their cells don&apos;t respond well to insulin, so the
            body produces more of it. High insulin levels signal the ovaries to
            produce more androgens (male hormones), which drives many PCOS
            symptoms.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Eating in a way that keeps blood sugar steady reduces insulin
            spikes, which calms androgen production and can improve periods,
            skin, hair growth, and even mood. Diet is one of the most powerful
            levers you have.
          </p>
        </section>

        {/* Eat More */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Foods That Help PCOS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EAT_MORE.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl border border-pink-100 shadow-sm p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{f.icon}</span>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {f.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Avoid */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Foods to Limit or Avoid
          </h2>
          <div className="space-y-3">
            {AVOID.map((a) => (
              <div
                key={a.item}
                className="flex items-start gap-3 bg-red-50 rounded-xl px-4 py-3"
              >
                <span className="text-red-400 font-bold mt-0.5 text-lg">✗</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">{a.item}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{a.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sample Day */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Sample Day of PCOS-Friendly Eating
          </h2>
          <div className="space-y-3">
            {MEAL_IDEAS.map((m) => (
              <div
                key={m.time}
                className="flex items-start gap-4 bg-pink-50 rounded-xl px-5 py-4"
              >
                <span className="text-sm font-bold text-pink-600 w-20 shrink-0">
                  {m.time}
                </span>
                <p className="text-sm text-gray-700">{m.idea}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            These are examples only — not a personalised meal plan. Consult a
            registered dietitian for guidance tailored to you.
          </p>
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
            Not Sure Where to Start With Your Diet?
          </h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">
            Ask our AI assistant specific questions about PCOS nutrition,
            meal planning, and what works for your situation.
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
