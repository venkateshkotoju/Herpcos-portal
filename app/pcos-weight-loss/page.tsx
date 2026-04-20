import Link from "next/link";
import { Metadata } from "next";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "PCOS Weight Loss: Proven Tips to Lose Weight with PCOS | HerPCOS Portal",
  description:
    "Struggling to lose weight with PCOS? Learn why PCOS makes weight loss harder and get proven, science-backed strategies to shed weight, balance hormones, and feel better.",
  keywords: [
    "PCOS weight loss",
    "lose weight with PCOS",
    "PCOS and obesity",
    "PCOS insulin resistance weight gain",
    "PCOS weight management",
    "how to lose weight PCOS",
    "PCOS exercise tips",
    "PCOS belly fat",
  ],
  openGraph: {
    title: "PCOS Weight Loss: Proven Tips to Lose Weight with PCOS",
    description:
      "Science-backed strategies to manage weight, improve insulin resistance, and ease PCOS symptoms.",
    type: "article",
  },
};

const weightLossTips = [
  {
    number: "01",
    title: "Target Insulin Resistance First",
    description:
      "Insulin resistance is the main driver of weight gain in PCOS. Focus on a low-glycemic diet, reduce refined carbs, and consider speaking to your doctor about metformin or inositol supplements — both can significantly improve insulin sensitivity.",
  },
  {
    number: "02",
    title: "Incorporate Strength Training",
    description:
      "Resistance training (weights, resistance bands, bodyweight exercises) builds lean muscle, which increases your metabolic rate and improves insulin sensitivity. Aim for 2–3 sessions per week.",
  },
  {
    number: "03",
    title: "Add Moderate Cardio — Don't Overdo It",
    description:
      "30–45 minutes of moderate-intensity cardio (brisk walking, cycling, swimming) most days is effective. Avoid excessive high-intensity exercise, which can spike cortisol and worsen hormonal imbalance.",
  },
  {
    number: "04",
    title: "Prioritize Sleep Quality",
    description:
      "Poor sleep raises cortisol and ghrelin (the hunger hormone), making weight loss extremely difficult. Aim for 7–9 hours per night. Treat sleep apnea if present — it is common in women with PCOS.",
  },
  {
    number: "05",
    title: "Manage Stress Actively",
    description:
      "Chronic stress elevates cortisol, which promotes fat storage around the abdomen. Practice stress-reduction techniques such as yoga, meditation, journaling, or therapy regularly.",
  },
  {
    number: "06",
    title: "Set Realistic, Small Goals",
    description:
      "Even a 5–10% reduction in body weight can significantly improve PCOS symptoms, including menstrual regularity and androgen levels. Focus on sustainable habits rather than rapid weight loss.",
  },
];

const myths = [
  {
    myth: "\"Just eat less and exercise more\"",
    reality:
      "PCOS women have metabolic differences that make standard calorie-restriction advice less effective. Hormonal factors, insulin resistance, and medication effects all influence weight.",
  },
  {
    myth: "\"Cardio is the best way to lose weight with PCOS\"",
    reality:
      "Strength training is equally or more effective for PCOS weight loss because it improves insulin sensitivity and builds muscle that burns calories at rest.",
  },
  {
    myth: "\"You need to be thin to manage PCOS\"",
    reality:
      "PCOS affects women of all body sizes. Many lean women have PCOS. Weight loss helps many symptoms, but it is not required for treatment or to feel well.",
  },
];

export default function PCOSWeightLossPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-pink-600 transition-colors">Home</Link></li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-700 font-medium">PCOS Weight Loss</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Weight &amp; Metabolism
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            PCOS Weight Loss:{" "}
            <span className="text-pink-600">Why It&apos;s Hard</span> and How to Make It Work
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Losing weight with PCOS can feel frustrating and unfair. Women with PCOS often gain weight
            more easily and find it harder to lose — even with diet and exercise. This is not a
            willpower problem. Hormonal and metabolic differences in PCOS make standard advice fall
            short. Here&apos;s what actually works.
          </p>
        </header>

        {/* Why PCOS Makes Weight Loss Hard */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-purple-100 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Why PCOS Makes Weight Loss Harder
          </h2>
          <div className="space-y-3">
            {[
              {
                heading: "Insulin Resistance",
                text: "High insulin levels promote fat storage — especially around the abdomen — and make it difficult to burn fat for energy.",
              },
              {
                heading: "Elevated Androgens",
                text: "High testosterone and DHEA contribute to central (belly) fat accumulation and can reduce the effectiveness of fat-burning processes.",
              },
              {
                heading: "Slower Metabolism",
                text: "Research shows women with PCOS may burn fewer calories at rest compared to women without PCOS, even at the same body weight.",
              },
              {
                heading: "Hormonal Hunger Signals",
                text: "Disrupted leptin and ghrelin levels in PCOS can increase appetite and reduce feelings of fullness, making calorie control more difficult.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="mt-1 w-5 h-5 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong className="text-gray-800">{item.heading}: </strong>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Actionable Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            6 Proven PCOS Weight Loss Strategies
          </h2>
          <div className="space-y-4">
            {weightLossTips.map((tip, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-5 items-start"
              >
                <span className="text-2xl font-bold text-pink-200 flex-shrink-0 leading-none mt-0.5">
                  {tip.number}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{tip.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Myths Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common PCOS Weight Loss Myths — Debunked
          </h2>
          <div className="space-y-4">
            {myths.map((item, i) => (
              <div key={i} className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                <p className="font-semibold text-amber-800 mb-1 text-sm">{item.myth}</p>
                <p className="text-amber-700 text-sm leading-relaxed">
                  <strong>Reality: </strong>{item.reality}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Key stat callout */}
        <section className="bg-gradient-to-r from-pink-600 to-rose-500 rounded-2xl p-6 text-white text-center mb-10">
          <p className="text-4xl font-bold mb-2">5–10%</p>
          <p className="text-pink-100 text-sm max-w-sm mx-auto">
            Even a 5–10% reduction in body weight can restore ovulation, improve insulin levels,
            and significantly reduce PCOS symptoms.
          </p>
        </section>

        {/* Disclaimer */}
        <Disclaimer />

        {/* CTA */}
        <section className="mt-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Need a personalized PCOS weight loss plan?</h2>
          <p className="text-pink-100 mb-6 text-sm max-w-md mx-auto">
            Our AI assistant can help you build a sustainable plan tailored to your PCOS type, lifestyle, and goals.
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
              { href: "/pcos-diet-guide", label: "PCOS Diet Guide" },
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
