import Link from "next/link";
import { Metadata } from "next";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "PCOS Diet Guide: Best Foods & Eating Plan | HerPCOS Portal",
  description:
    "Discover the best PCOS diet guide with evidence-based nutrition tips. Learn which foods to eat and avoid to manage insulin resistance, hormonal imbalance, and PCOS symptoms.",
  keywords: [
    "PCOS diet",
    "PCOS diet guide",
    "best diet for PCOS",
    "PCOS food list",
    "low glycemic diet PCOS",
    "PCOS nutrition",
    "anti-inflammatory diet PCOS",
    "PCOS meal plan",
  ],
  openGraph: {
    title: "PCOS Diet Guide: Best Foods & Eating Plan",
    description:
      "Evidence-based nutrition tips to manage PCOS symptoms through diet.",
    type: "article",
  },
};

const dietTips = [
  {
    icon: (
      <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Choose Low-Glycemic Index (GI) Carbohydrates",
    description:
      "Swap white bread, white rice, and sugary snacks for whole grains, legumes, oats, and quinoa. Low-GI foods release glucose slowly, preventing insulin spikes that worsen PCOS.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Prioritize Lean Protein at Every Meal",
    description:
      "Include chicken, turkey, eggs, tofu, lentils, or Greek yogurt at each meal. Protein stabilizes blood sugar, reduces cravings, and supports healthy testosterone levels.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Add Anti-Inflammatory Foods Daily",
    description:
      "Eat berries, leafy greens (spinach, kale), fatty fish (salmon, sardines), walnuts, and olive oil. These foods reduce chronic inflammation that drives PCOS symptoms.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Cut Back on Ultra-Processed Foods and Sugar",
    description:
      "Minimize packaged snacks, fast food, sugary drinks, and desserts. These spike insulin, fuel inflammation, and make hormonal imbalance worse.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Eat Regular, Balanced Meals",
    description:
      "Aim for 3 balanced meals a day with healthy snacks if needed. Skipping meals can cause blood sugar crashes and increase cortisol, both of which worsen PCOS.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Consider Inositol and Magnesium-Rich Foods",
    description:
      "Foods high in inositol (beans, nuts, citrus) and magnesium (dark chocolate, avocado, almonds) have been shown to improve insulin sensitivity and menstrual regularity in PCOS.",
  },
];

const eatMore = [
  "Leafy greens (spinach, kale, arugula)",
  "Berries (blueberries, strawberries, raspberries)",
  "Fatty fish (salmon, mackerel, sardines)",
  "Whole grains (oats, quinoa, brown rice)",
  "Legumes (lentils, chickpeas, black beans)",
  "Nuts & seeds (walnuts, flaxseed, chia seeds)",
  "Olive oil & avocado",
  "Cruciferous vegetables (broccoli, cauliflower)",
];

const eatLess = [
  "White bread, pastries, and white rice",
  "Sugary drinks (soda, juice, energy drinks)",
  "Processed and packaged snacks",
  "Fast food and fried foods",
  "Alcohol",
  "Dairy (may worsen acne in some women)",
  "Artificial sweeteners (controversial — use sparingly)",
];

export default function PCOSDietGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-pink-600 transition-colors">Home</Link></li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-700 font-medium">PCOS Diet Guide</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
            Nutrition &amp; Diet
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            PCOS Diet Guide: Best Foods to Eat{" "}
            <span className="text-pink-600">and Avoid</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Diet is one of the most powerful tools for managing Polycystic Ovary Syndrome (PCOS). The
            right eating plan can reduce insulin resistance, lower inflammation, balance hormones, and
            ease symptoms like irregular periods, acne, and weight gain. This evidence-based PCOS diet
            guide gives you a clear, actionable starting point.
          </p>
        </header>

        {/* Why Diet Matters */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-pink-100 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Why Diet Matters for PCOS
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Up to 70% of women with PCOS have some degree of{" "}
            <strong>insulin resistance</strong> — a condition where cells don&apos;t respond properly
            to insulin. This causes the pancreas to produce more insulin, which in turn signals the
            ovaries to produce more androgens (male hormones). High androgens drive most PCOS
            symptoms, including irregular periods, excess hair growth, and acne.
          </p>
          <p className="text-gray-600 leading-relaxed">
            A well-planned PCOS diet helps lower insulin levels, reduce chronic inflammation, and
            restore hormonal balance — naturally addressing the root drivers of the condition.
          </p>
        </section>

        {/* Actionable Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            6 PCOS Diet Tips to Start Today
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dietTips.map((tip, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-4 items-start"
              >
                <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{tip.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Eat More / Eat Less */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
            <h2 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Eat More
            </h2>
            <ul className="space-y-2">
              {eatMore.map((item, i) => (
                <li key={i} className="text-green-700 text-sm flex items-start gap-2">
                  <span className="mt-0.5 text-green-500">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
            <h2 className="text-lg font-bold text-rose-800 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Eat Less
            </h2>
            <ul className="space-y-2">
              {eatLess.map((item, i) => (
                <li key={i} className="text-rose-700 text-sm flex items-start gap-2">
                  <span className="mt-0.5 text-rose-400">&#10007;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Disclaimer */}
        <Disclaimer />

        {/* CTA */}
        <section className="mt-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Have questions about your PCOS diet?</h2>
          <p className="text-pink-100 mb-6 text-sm max-w-md mx-auto">
            Get personalized PCOS nutrition advice from our AI assistant — available 24/7, free to use.
          </p>
          <Link
            href="/chat"
            className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-semibold text-sm hover:bg-pink-50 transition-colors shadow-lg"
          >
            Ask AI Assistant
          </Link>
        </section>

        {/* Related Links */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Related PCOS Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { href: "/pcos-weight-loss", label: "PCOS Weight Loss" },
              { href: "/pcos-symptoms", label: "PCOS Symptoms" },
              { href: "/pcos-irregular-periods", label: "Irregular Periods & PCOS" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white border border-pink-100 rounded-xl px-4 py-3 text-sm font-medium text-pink-700 hover:border-pink-400 hover:bg-pink-50 transition-colors text-center"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
