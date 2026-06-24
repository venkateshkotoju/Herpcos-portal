import { Metadata } from "next";
import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "PCOS Symptoms Guide: Signs & What to Expect | HerPCOS",
  description:
    "Learn the most common PCOS symptoms including irregular periods, acne, hair loss, and weight gain. A clear, beginner-friendly guide backed by evidence.",
};

const symptoms = [
  {
    title: "Irregular or Missed Periods",
    desc: "One of the most common signs. Your cycle may be longer than 35 days, unpredictable, or completely absent. This happens because PCOS disrupts ovulation.",
  },
  {
    title: "Excess Hair Growth (Hirsutism)",
    desc: "Unwanted hair on the face, chin, chest, or stomach caused by elevated androgen levels. Affects up to 70% of people with PCOS.",
  },
  {
    title: "Acne & Oily Skin",
    desc: "Hormonal acne, often on the jawline, chin, and back. Androgens stimulate excess oil production, which clogs pores and leads to breakouts.",
  },
  {
    title: "Hair Thinning or Loss",
    desc: "Thinning on the scalp (similar to male-pattern baldness) can occur when androgens affect hair follicles — this is different from normal daily shedding.",
  },
  {
    title: "Weight Gain",
    desc: "Many people with PCOS gain weight, especially around the abdomen. This is closely linked to insulin resistance, which affects how the body processes sugar.",
  },
  {
    title: "Fatigue & Low Energy",
    desc: "Feeling tired even after a full night of sleep is common. Insulin resistance and hormonal imbalances disrupt how the body produces and uses energy.",
  },
  {
    title: "Mood Changes",
    desc: "Anxiety, depression, and mood swings are more common with PCOS. Hormonal fluctuations and the ongoing stress of managing symptoms both play a role.",
  },
  {
    title: "Dark Skin Patches (Acanthosis Nigricans)",
    desc: "Dark, velvety patches of skin, typically in skin folds like the neck, armpits, or groin. This is a visible sign of insulin resistance.",
  },
];

const faqs = [
  {
    q: "Can you have PCOS without cysts on your ovaries?",
    a: "Yes. Despite the name, you do not need cysts on your ovaries to be diagnosed. Diagnosis is based on a combination of criteria — irregular periods, elevated androgens, and ovarian appearance on ultrasound — and not all three are required.",
  },
  {
    q: "What is the most common symptom of PCOS?",
    a: "Irregular or missed periods are the most common and often the first noticed symptom. This happens because PCOS disrupts ovulation, which directly affects the menstrual cycle.",
  },
  {
    q: "Can PCOS symptoms get worse over time?",
    a: "Symptoms can change as your hormones shift, particularly around puberty, pregnancy, and perimenopause. Lifestyle factors like diet, exercise, and stress management can significantly influence symptom severity.",
  },
  {
    q: "Is PCOS the same for everyone?",
    a: "No. PCOS presents very differently from person to person. Some experience mainly irregular periods with few other symptoms, while others deal with significant acne, hair changes, or weight gain. This variability is why it is called a syndrome.",
  },
  {
    q: "Can PCOS be cured?",
    a: "PCOS has no known cure, but symptoms can be effectively managed with lifestyle changes, medical support, and a personalized care plan. Many people with PCOS live healthy, fulfilling lives.",
  },
];

const relatedGuides = [
  { href: "/pcos-diet", title: "Best Diet for PCOS", desc: "Foods that support hormone balance" },
  { href: "/pcos-weight-loss", title: "PCOS Weight Loss Guide", desc: "Why it is harder and how to succeed" },
  { href: "/pcos-irregular-periods", title: "PCOS & Irregular Periods", desc: "Understanding your menstrual cycle" },
  { href: "/insulin-resistance-pcos", title: "Insulin Resistance & PCOS", desc: "The hidden hormonal connection" },
];

export default function PcosSymptomsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          PCOS Education
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          PCOS Symptoms Guide
        </h1>
        <p className="text-2xl font-semibold text-pink-600 mb-6">
          What Are the Signs of PCOS?
        </p>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          PCOS affects 1 in 10 women — yet 70% go undiagnosed. Here is everything you
          need to know about the signs, symptoms, and what they mean for your health.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
        <Disclaimer />

        {/* What is PCOS */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is PCOS?</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-pink-100">
            <p className="text-gray-700 leading-relaxed mb-4">
              PCOS (Polycystic Ovary Syndrome) is a hormonal condition that affects the ovaries
              and overall hormone balance. Despite the name, you do not need to have cysts on
              your ovaries to be diagnosed.
            </p>
            <p className="text-gray-700 leading-relaxed">
              PCOS is a syndrome — a collection of symptoms, not a single disease. This is why
              it looks different from person to person. Doctors look for three main features:
              irregular periods, high androgen (male hormone) levels, and polycystic ovary
              appearance on ultrasound. You typically only need two of the three for a diagnosis.
            </p>
          </div>
        </section>

        {/* Symptoms grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common PCOS Symptoms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {symptoms.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Callout */}
        <section>
          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Symptoms Look Different for Everyone
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You might have just two or three symptoms, or you might experience most of them.
              Some people have a lean body type with PCOS (called lean PCOS), while others are
              significantly affected by weight changes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This variability is also why many people go years without a diagnosis. If you
              suspect PCOS, speak with a doctor who can review your hormone levels, cycle
              history, and arrange an ultrasound if needed.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
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
            <h2 className="text-2xl font-bold mb-3">Have a Question About Your Symptoms?</h2>
            <p className="text-pink-100 mb-6 max-w-xl mx-auto">
              Our AI assistant is available 24/7 to answer your specific PCOS questions with
              evidence-based, beginner-friendly guidance.
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
