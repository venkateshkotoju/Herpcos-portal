import Link from "next/link";
import { Metadata } from "next";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "PCOS & Irregular Periods: Causes, Signs & How to Regulate Your Cycle | HerPCOS Portal",
  description:
    "Understand the link between PCOS and irregular periods. Learn why PCOS causes cycle irregularities, what normal vs. abnormal looks like, and how to regulate your period naturally and medically.",
  keywords: [
    "PCOS irregular periods",
    "PCOS missed periods",
    "polycystic ovary syndrome periods",
    "how to regulate period PCOS",
    "PCOS menstrual cycle",
    "PCOS and anovulation",
    "PCOS period treatment",
    "PCOS cycle tracking",
    "irregular periods hormones",
  ],
  openGraph: {
    title: "PCOS & Irregular Periods: Causes, Signs & How to Regulate Your Cycle",
    description:
      "Understand why PCOS disrupts your menstrual cycle and what you can do to regulate it.",
    type: "article",
  },
};

const causes = [
  {
    title: "Anovulation (Lack of Ovulation)",
    description:
      "In PCOS, elevated androgens and disrupted FSH/LH hormone signals prevent follicles from maturing and releasing an egg. Without ovulation, the normal hormonal cascade that triggers a period does not occur.",
  },
  {
    title: "Insulin Resistance",
    description:
      "High insulin levels worsen androgen production, which further suppresses ovulation. This creates a hormonal feedback loop that keeps cycles irregular.",
  },
  {
    title: "Elevated LH (Luteinizing Hormone)",
    description:
      "Many women with PCOS have chronically elevated LH levels. This stimulates excess androgen production from the ovaries and interferes with the LH surge needed to trigger ovulation.",
  },
  {
    title: "Chronic Low-Grade Inflammation",
    description:
      "Inflammation associated with PCOS may affect ovarian function directly and worsen insulin resistance, contributing to cycle disruption.",
  },
];

const regulationTips = [
  {
    category: "Lifestyle",
    icon: "🏃",
    tips: [
      {
        title: "Lose 5–10% of Body Weight (if applicable)",
        detail:
          "Even modest weight loss in overweight women with PCOS can restore ovulation and regular periods within months by reducing insulin resistance and androgen levels.",
      },
      {
        title: "Follow a Low-GI Diet",
        detail:
          "Reducing refined carbohydrates and sugar lowers insulin levels, which reduces ovarian androgen production and supports more regular ovulation.",
      },
      {
        title: "Exercise Regularly — Especially Strength Training",
        detail:
          "Regular physical activity improves insulin sensitivity. Resistance training 2–3x per week is particularly effective for hormonal balance in PCOS.",
      },
      {
        title: "Manage Stress and Improve Sleep",
        detail:
          "Chronically high cortisol disrupts the hypothalamic-pituitary-ovarian (HPO) axis, which controls your menstrual cycle. Prioritize 7–9 hours of sleep and active stress management.",
      },
    ],
  },
  {
    category: "Supplements",
    icon: "💊",
    tips: [
      {
        title: "Inositol (Myo-Inositol + D-Chiro-Inositol)",
        detail:
          "One of the most evidence-backed supplements for PCOS cycle regulation. Improves insulin sensitivity and has been shown to restore ovulation in many women. Standard dose: 2000–4000mg myo-inositol daily.",
      },
      {
        title: "Vitamin D",
        detail:
          "Vitamin D deficiency is very common in PCOS and is linked to insulin resistance and irregular cycles. Supplementing if deficient may help normalize cycles.",
      },
      {
        title: "Magnesium",
        detail:
          "Supports insulin sensitivity and reduces inflammation. Many women with PCOS are deficient. 200–400mg per day is a typical supplemental dose.",
      },
    ],
  },
  {
    category: "Medical Treatments",
    icon: "🩺",
    tips: [
      {
        title: "Combined Oral Contraceptive Pill (OCP)",
        detail:
          "The most commonly prescribed treatment for PCOS cycle regulation. OCPs regulate cycles, reduce androgens, and protect the uterine lining from endometrial hyperplasia.",
      },
      {
        title: "Progestin Therapy",
        detail:
          "If you prefer not to take the pill, your doctor may prescribe progestin (e.g., medroxyprogesterone) for 10–14 days to induce a withdrawal bleed every 1–3 months.",
      },
      {
        title: "Metformin",
        detail:
          "An insulin-sensitizing medication primarily used for type 2 diabetes but widely prescribed in PCOS. It can improve cycle regularity in women with insulin resistance.",
      },
      {
        title: "Ovulation Induction (for fertility)",
        detail:
          "If you are trying to conceive, letrozole or clomiphene can be prescribed to stimulate ovulation under medical supervision.",
      },
    ],
  },
];

export default function PCOSIrregularPeriodsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-pink-600 transition-colors">Home</Link></li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-700 font-medium">PCOS &amp; Irregular Periods</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
            Menstrual Health
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            PCOS &amp; Irregular Periods:{" "}
            <span className="text-pink-600">Causes and How to Regulate Your Cycle</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Irregular periods are one of the most recognizable signs of PCOS — and one of the most
            frustrating to live with. Whether your cycle is unpredictable, very long, or missing
            entirely, understanding why it happens is the key to managing it. Here is everything you
            need to know.
          </p>
        </header>

        {/* What's Normal vs Abnormal */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
            <h2 className="text-base font-bold text-green-800 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              A Normal Menstrual Cycle
            </h2>
            <ul className="space-y-2 text-sm text-green-700">
              <li>21–35 days between periods</li>
              <li>Bleeding lasts 2–7 days</li>
              <li>8–13 periods per year</li>
              <li>Consistent, predictable cycle length</li>
              <li>Ovulation typically around day 14 in a 28-day cycle</li>
            </ul>
          </div>
          <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
            <h2 className="text-base font-bold text-rose-800 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Irregular Periods in PCOS
            </h2>
            <ul className="space-y-2 text-sm text-rose-700">
              <li>Fewer than 8 periods per year</li>
              <li>Cycles longer than 35 days</li>
              <li>Completely absent periods (amenorrhea)</li>
              <li>Very unpredictable cycle lengths</li>
              <li>No ovulation (anovulation)</li>
            </ul>
          </div>
        </section>

        {/* Why PCOS Causes Irregular Periods */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-pink-100 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5">
            Why Does PCOS Cause Irregular Periods?
          </h2>
          <div className="space-y-4">
            {causes.map((cause, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="w-7 h-7 bg-pink-100 text-pink-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{cause.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cause.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Regular Periods Matter */}
        <section className="bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-amber-800 mb-3">
            Why Regulating Your Cycle Is Important
          </h2>
          <p className="text-amber-700 text-sm leading-relaxed mb-3">
            Irregular periods with PCOS are more than an inconvenience. Without regular shedding of
            the uterine lining, the endometrium can build up over time — increasing the risk of{" "}
            <strong>endometrial hyperplasia</strong> and, in some cases, endometrial cancer.
          </p>
          <p className="text-amber-700 text-sm leading-relaxed">
            If you have fewer than 4 periods per year, speak to your doctor about options to induce
            regular bleeds to protect your uterine health.
          </p>
        </section>

        {/* How to Regulate Periods */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How to Regulate Your Period with PCOS
          </h2>
          <div className="space-y-6">
            {regulationTips.map((group, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-xl">{group.icon}</span>
                  {group.category}
                </h3>
                <div className="space-y-3">
                  {group.tips.map((tip, j) => (
                    <div key={j} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">{tip.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{tip.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cycle Tracking Tip */}
        <section className="bg-purple-50 border border-purple-100 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-purple-900 mb-3">
            Track Your Cycle — Even When It&apos;s Irregular
          </h2>
          <p className="text-purple-700 text-sm leading-relaxed mb-3">
            Tracking your periods — even if they are unpredictable — gives your doctor valuable
            information and helps you notice patterns or changes over time. Record:
          </p>
          <ul className="space-y-1 text-sm text-purple-700">
            {[
              "Date your period starts and ends",
              "Flow heaviness (light, medium, heavy)",
              "Any spotting between periods",
              "PMS symptoms (cramping, bloating, mood changes)",
              "Cervical mucus changes (if tracking ovulation)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">&#10148;</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-purple-600 text-xs mt-3">
            Apps like Clue, Flo, or a simple calendar all work well for tracking.
          </p>
        </section>

        {/* Disclaimer */}
        <Disclaimer />

        {/* CTA */}
        <section className="mt-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Questions about your irregular periods?</h2>
          <p className="text-pink-100 mb-6 text-sm max-w-md mx-auto">
            Our AI assistant can help you understand what your cycle is telling you and what steps
            to take next.
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
              { href: "/pcos-symptoms", label: "PCOS Symptoms" },
              { href: "/pcos-diet-guide", label: "PCOS Diet Guide" },
              { href: "/pcos-weight-loss", label: "PCOS Weight Loss" },
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
