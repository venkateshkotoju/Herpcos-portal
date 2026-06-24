import { Metadata } from "next";
import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Insulin Resistance and PCOS: The Hidden Connection | HerPCOS",
  description:
    "Understand the link between insulin resistance and PCOS, how to recognize the signs, and evidence-based ways to improve insulin sensitivity naturally.",
};

const signs = [
  {
    title: "Weight Gain Around the Abdomen",
    desc: "Excess insulin promotes fat storage, particularly in the abdominal area. This type of fat (visceral fat) is metabolically active and worsens insulin resistance further.",
  },
  {
    title: "Cravings for Sugar and Carbs",
    desc: "When cells resist insulin, blood sugar levels fluctuate widely. This causes intense cravings for quick energy in the form of sugar and refined carbohydrates.",
  },
  {
    title: "Energy Crashes After Eating",
    desc: "Feeling tired or foggy shortly after meals — especially carb-heavy ones — is a common sign that your blood sugar is spiking and then crashing due to excess insulin.",
  },
  {
    title: "Dark Skin Patches (Acanthosis Nigricans)",
    desc: "Dark, velvety patches of skin in skin folds (neck, armpits, groin) are a visible skin response to high insulin levels and a classic sign of insulin resistance.",
  },
  {
    title: "Difficulty Losing Weight",
    desc: "High insulin keeps the body in fat-storage mode and makes burning fat for energy difficult — even with a calorie deficit. This is one of the most frustrating aspects of PCOS.",
  },
  {
    title: "High Fasting Blood Sugar or Pre-diabetes",
    desc: "Over time, insulin resistance can cause blood sugar to remain elevated even in a fasted state. Regular blood work can catch this early before it progresses to type 2 diabetes.",
  },
];

const improvements = [
  {
    title: "Reduce Refined Carbohydrates",
    desc: "Replacing white bread, pasta, rice, and sugary foods with low-GI alternatives (oats, lentils, vegetables) directly reduces the insulin demand on your body.",
  },
  {
    title: "Eat More Fiber",
    desc: "Fiber slows glucose absorption and reduces post-meal insulin spikes. Aim for 25-35g daily from vegetables, legumes, whole grains, and seeds.",
  },
  {
    title: "Strength Training",
    desc: "Muscle tissue is the primary site of glucose uptake. Building muscle through resistance training makes cells more responsive to insulin — even 2-3 sessions per week help significantly.",
  },
  {
    title: "Take a Walk After Meals",
    desc: "A 10-15 minute walk after eating can reduce post-meal blood sugar by up to 30%. This simple habit improves insulin sensitivity without any special equipment.",
  },
  {
    title: "Improve Sleep Quality",
    desc: "Even one night of poor sleep measurably reduces insulin sensitivity the next day. Prioritizing 7-9 hours of quality sleep is one of the most underrated PCOS interventions.",
  },
  {
    title: "Manage Chronic Stress",
    desc: "Cortisol (stress hormone) directly raises blood sugar and insulin. Stress management practices — meditation, nature walks, breathwork — have measurable effects on insulin sensitivity.",
  },
  {
    title: "Consider Inositol Supplements",
    desc: "Myo-inositol and D-chiro-inositol are naturally occurring compounds with strong evidence for improving insulin sensitivity in PCOS. Discuss with your doctor before starting.",
  },
  {
    title: "Medical Options (Metformin)",
    desc: "Metformin is a medication that directly reduces insulin resistance and is commonly prescribed for PCOS. It can improve cycle regularity, androgen levels, and weight management.",
  },
];

const faqs = [
  {
    q: "What is insulin resistance in simple terms?",
    a: "Normally, insulin acts like a key that unlocks cells to let blood sugar in for energy. With insulin resistance, the cells stop responding to that key properly. The pancreas compensates by producing more and more insulin, which causes a cascade of problems throughout the body.",
  },
  {
    q: "Does everyone with PCOS have insulin resistance?",
    a: "No, but it is very common — affecting up to 70% of people with PCOS, including those with a healthy body weight (lean PCOS). Even people without obvious weight gain can have significant insulin resistance.",
  },
  {
    q: "How is insulin resistance diagnosed?",
    a: "Your doctor can test for insulin resistance through fasting blood glucose, HbA1c (3-month blood sugar average), fasting insulin levels, or a glucose tolerance test (OGTT). Standard annual blood work often does not include fasting insulin — you may need to ask for it specifically.",
  },
  {
    q: "Can insulin resistance be reversed?",
    a: "Yes — insulin resistance is one of the most reversible metabolic conditions. Diet changes, exercise, better sleep, and stress management can significantly improve insulin sensitivity. Some people see major improvements within 8-12 weeks of consistent lifestyle changes.",
  },
  {
    q: "Will treating insulin resistance improve my other PCOS symptoms?",
    a: "Absolutely. Insulin resistance is one of the root drivers of PCOS. Reducing it lowers androgen levels, which improves irregular periods, reduces acne and excess hair growth, and makes weight management easier. Addressing insulin resistance often has a cascading positive effect on many PCOS symptoms at once.",
  },
];

const relatedGuides = [
  { href: "/pcos-symptoms", title: "PCOS Symptoms Guide", desc: "Recognize all the signs of PCOS" },
  { href: "/pcos-diet", title: "Best Diet for PCOS", desc: "Eat to improve insulin sensitivity" },
  { href: "/pcos-weight-loss", title: "PCOS Weight Loss Guide", desc: "Break the cycle of insulin-driven weight gain" },
  { href: "/pcos-irregular-periods", title: "PCOS & Irregular Periods", desc: "How insulin affects your cycle" },
];

export default function InsulinResistancePcosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          PCOS & Hormones
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Insulin Resistance and PCOS
        </h1>
        <p className="text-2xl font-semibold text-pink-600 mb-6">
          The Hidden Connection Behind Your Symptoms
        </p>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Insulin resistance is present in up to 70% of people with PCOS and is one of the
          primary drivers of its symptoms. Understanding this connection is key to managing
          PCOS effectively.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
        <Disclaimer />

        {/* What is it */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Is Insulin Resistance?
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-pink-100">
            <p className="text-gray-700 leading-relaxed mb-4">
              Insulin is a hormone produced by the pancreas that helps cells absorb glucose
              (blood sugar) from the bloodstream for energy. Think of it as a key that unlocks
              cells to let sugar in.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              With insulin resistance, the cells stop responding to insulin properly — the key
              no longer works as well. The pancreas compensates by producing more and more
              insulin to get the job done.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These high levels of insulin then signal the ovaries to produce excess androgens
              (male hormones like testosterone). Elevated androgens disrupt ovulation, cause
              irregular periods, drive acne, excess hair growth, and make weight loss harder.
              This is the core hormonal chain reaction behind most PCOS symptoms.
            </p>
          </div>
        </section>

        {/* The connection diagram-style section */}
        <section>
          <div className="bg-pink-600 rounded-2xl p-8 text-white">
            <h2 className="text-xl font-bold mb-6 text-center">How Insulin Resistance Drives PCOS</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center text-sm font-medium">
              <div className="bg-pink-500 rounded-xl px-4 py-3">Insulin Resistance</div>
              <svg className="w-6 h-6 text-pink-300 rotate-90 sm:rotate-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div className="bg-pink-500 rounded-xl px-4 py-3">High Insulin Levels</div>
              <svg className="w-6 h-6 text-pink-300 rotate-90 sm:rotate-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div className="bg-pink-500 rounded-xl px-4 py-3">Excess Androgens</div>
              <svg className="w-6 h-6 text-pink-300 rotate-90 sm:rotate-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div className="bg-pink-500 rounded-xl px-4 py-3">PCOS Symptoms</div>
            </div>
          </div>
        </section>

        {/* Signs */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Signs of Insulin Resistance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {signs.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to improve */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How to Improve Insulin Sensitivity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {improvements.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Callout */}
        <section>
          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">The Good News</h2>
            <p className="text-gray-700 leading-relaxed">
              Insulin resistance is one of the most responsive metabolic conditions to lifestyle
              intervention. Many people with PCOS see meaningful improvements in insulin
              sensitivity — and as a result, improvements in menstrual regularity, skin, hair,
              and weight — within 8-12 weeks of consistent diet and exercise changes. You do
              not need to do everything at once. Small, consistent improvements compound over time.
            </p>
          </div>
        </section>

        {/* Related Guides */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Explore Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="bg-white rounded-xl p-5 shadow-sm border border-pink-100 hover:shadow-md hover:border-pink-300 transition-all flex items-center justify-between group"
              >
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                    {guide.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">{guide.desc}</p>
                </div>
                <svg
                  className="w-5 h-5 text-pink-400 flex-shrink-0 ml-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Questions About Insulin Resistance?</h2>
            <p className="text-pink-100 mb-6 max-w-xl mx-auto">
              Our AI assistant can explain how insulin affects your specific PCOS symptoms and
              help you understand your next steps — available 24/7 with evidence-based answers.
            </p>
            <Link
              href="/chat"
              className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors inline-block"
            >
              Chat with AI Assistant
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
