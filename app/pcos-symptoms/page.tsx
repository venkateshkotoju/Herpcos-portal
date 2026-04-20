import Link from "next/link";
import { Metadata } from "next";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "PCOS Symptoms: Complete List & What They Mean | HerPCOS Portal",
  description:
    "Learn about all PCOS symptoms — from irregular periods and acne to hair loss and mood changes. Understand what causes each symptom and what you can do about it.",
  keywords: [
    "PCOS symptoms",
    "symptoms of PCOS",
    "PCOS signs",
    "polycystic ovary syndrome symptoms",
    "PCOS acne",
    "PCOS hair loss",
    "PCOS weight gain",
    "PCOS hirsutism",
    "PCOS irregular periods",
    "PCOS diagnosis",
  ],
  openGraph: {
    title: "PCOS Symptoms: Complete List & What They Mean",
    description:
      "A comprehensive guide to recognizing and understanding PCOS symptoms.",
    type: "article",
  },
};

const symptoms = [
  {
    icon: "🩸",
    name: "Irregular or Absent Periods",
    description:
      "One of the most common signs of PCOS. Cycles may be longer than 35 days, very unpredictable, or completely absent (amenorrhea). This happens because PCOS disrupts ovulation.",
    severity: "Very Common",
    color: "pink",
  },
  {
    icon: "💪",
    name: "Excess Hair Growth (Hirsutism)",
    description:
      "Unwanted hair on the face (upper lip, chin), chest, back, or abdomen. Caused by elevated androgens (male hormones) that stimulate hair follicles.",
    severity: "Very Common",
    color: "pink",
  },
  {
    icon: "⚖️",
    name: "Weight Gain or Difficulty Losing Weight",
    description:
      "Many women with PCOS gain weight easily — especially around the abdomen. Insulin resistance makes it harder for the body to use glucose efficiently, promoting fat storage.",
    severity: "Very Common",
    color: "pink",
  },
  {
    icon: "✨",
    name: "Acne",
    description:
      "Hormonal acne from PCOS typically appears on the lower face, jawline, chin, and neck. High androgens stimulate excess sebum production, clogging pores.",
    severity: "Common",
    color: "purple",
  },
  {
    icon: "💆",
    name: "Thinning Hair or Hair Loss",
    description:
      "Also called androgenic alopecia — hair loss on the scalp, often starting at the crown or temples. The same androgens that cause hirsutism can thin scalp hair.",
    severity: "Common",
    color: "purple",
  },
  {
    icon: "🌑",
    name: "Dark Skin Patches (Acanthosis Nigricans)",
    description:
      "Dark, velvety patches of skin in the neck folds, armpits, or groin. This is a direct sign of insulin resistance and is not related to hygiene.",
    severity: "Common",
    color: "purple",
  },
  {
    icon: "🧠",
    name: "Mood Changes, Anxiety & Depression",
    description:
      "Women with PCOS have significantly higher rates of anxiety and depression. Hormonal imbalances, chronic inflammation, and the psychological burden of symptoms all contribute.",
    severity: "Common",
    color: "purple",
  },
  {
    icon: "🫀",
    name: "Fatigue",
    description:
      "Persistent tiredness and low energy are common in PCOS, often linked to insulin resistance, poor sleep, nutritional deficiencies, and thyroid issues that frequently co-occur with PCOS.",
    severity: "Common",
    color: "purple",
  },
  {
    icon: "🤰",
    name: "Fertility Problems",
    description:
      "PCOS is the leading cause of ovulatory infertility. Infrequent or absent ovulation means fewer chances for conception each year. Many women with PCOS do conceive with support.",
    severity: "Common",
    color: "purple",
  },
  {
    icon: "🏷️",
    name: "Skin Tags",
    description:
      "Small, soft growths of skin that appear in areas where skin rubs together — another marker of insulin resistance seen in PCOS.",
    severity: "Less Common",
    color: "rose",
  },
  {
    icon: "😣",
    name: "Pelvic Pain",
    description:
      "Some women with PCOS experience pelvic discomfort or pain, which may be related to ovarian cysts, endometrial changes, or associated conditions like endometriosis.",
    severity: "Less Common",
    color: "rose",
  },
  {
    icon: "🫧",
    name: "Oily Skin",
    description:
      "Elevated androgens increase sebum (oil) production, leading to persistently oily skin — often alongside acne.",
    severity: "Less Common",
    color: "rose",
  },
];

const severityColors: Record<string, string> = {
  "Very Common": "bg-pink-100 text-pink-700",
  "Common": "bg-purple-100 text-purple-700",
  "Less Common": "bg-rose-100 text-rose-700",
};

const diagnosisCriteria = [
  "Irregular or absent periods (oligo/anovulation)",
  "Clinical or biochemical signs of elevated androgens (e.g. hirsutism, acne, high testosterone on blood test)",
  "Polycystic ovaries seen on ultrasound (12+ follicles per ovary)",
];

export default function PCOSSymptomsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-pink-600 transition-colors">Home</Link></li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-700 font-medium">PCOS Symptoms</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
            Symptoms &amp; Signs
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            PCOS Symptoms:{" "}
            <span className="text-pink-600">Complete Guide</span> to Signs and What They Mean
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Polycystic Ovary Syndrome (PCOS) affects approximately 1 in 10 women of reproductive age,
            yet up to 70% go undiagnosed. PCOS symptoms vary widely between women — some experience
            many, others just a few. Understanding your symptoms is the first step toward getting the
            right diagnosis and treatment.
          </p>
        </header>

        {/* What is PCOS */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-pink-100 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">What Is PCOS?</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            PCOS is a hormonal and metabolic disorder characterized by elevated androgens (male
            hormones), disrupted ovulation, and often — but not always — multiple small cysts on the
            ovaries. Despite its name, you don&apos;t need to have cysts to have PCOS.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The root causes are complex and involve insulin resistance, chronic low-grade inflammation,
            genetics, and the environment. There is no single cause or cure, but symptoms are very
            manageable with the right approach.
          </p>
        </section>

        {/* Symptoms Grid */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Complete List of PCOS Symptoms
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            You do not need to have all of these symptoms to have PCOS. Diagnosis requires only
            2 of the 3 Rotterdam criteria (see below).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {symptoms.map((symptom, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-4 items-start"
              >
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  {symptom.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 text-sm">{symptom.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${severityColors[symptom.severity]}`}>
                      {symptom.severity}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{symptom.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Diagnosis Section */}
        <section className="bg-purple-50 border border-purple-100 rounded-2xl p-6 sm:p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            How Is PCOS Diagnosed? (Rotterdam Criteria)
          </h2>
          <p className="text-gray-600 text-sm mb-5 leading-relaxed">
            Doctors use the <strong>Rotterdam criteria</strong> to diagnose PCOS. You need at least
            2 of the following 3 features, after excluding other causes:
          </p>
          <ul className="space-y-3">
            {diagnosisCriteria.map((criterion, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 bg-purple-200 text-purple-800 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">{criterion}</p>
              </li>
            ))}
          </ul>
          <p className="text-gray-500 text-xs mt-5 leading-relaxed">
            Your doctor will also run blood tests (hormones, fasting glucose, cholesterol) and may
            order a pelvic ultrasound to confirm diagnosis and rule out other conditions such as
            thyroid disorders or congenital adrenal hyperplasia.
          </p>
        </section>

        {/* When to See a Doctor */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">When to See a Doctor</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            See your GP or gynecologist if you experience any of the following:
          </p>
          <ul className="space-y-2">
            {[
              "Periods that are more than 35 days apart or fewer than 8 per year",
              "Complete absence of periods for 3+ months (and not pregnant)",
              "Sudden increase in facial or body hair",
              "Persistent acne that does not respond to treatment",
              "Unexplained weight gain, especially around the belly",
              "Difficulty getting pregnant after 12 months of trying (6 months if over 35)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4 text-pink-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Disclaimer */}
        <Disclaimer />

        {/* CTA */}
        <section className="mt-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Recognize some of these symptoms?</h2>
          <p className="text-pink-100 mb-6 text-sm max-w-md mx-auto">
            Our AI assistant can help you understand your symptoms, prepare questions for your doctor,
            and learn about next steps.
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
              { href: "/pcos-weight-loss", label: "PCOS Weight Loss" },
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
