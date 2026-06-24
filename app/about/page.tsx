import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About HerPCOS Portal – Our Mission & Story",
  description:
    "Learn about HerPCOS Portal, our mission to provide AI-powered PCOS education, support, and guidance to women worldwide.",
};

const STATS = [
  { value: "1 in 10", label: "Women of reproductive age affected by PCOS" },
  { value: "70%", label: "Go undiagnosed for years" },
  { value: "~5–13%", label: "Global prevalence across all populations" },
  { value: "50%+", label: "Develop type 2 diabetes by age 40 if untreated" },
];

const OFFERINGS = [
  {
    icon: "💬",
    title: "AI Chat Assistant",
    desc: "Get instant, compassionate answers about PCOS symptoms, treatments, and lifestyle tips — available 24/7.",
  },
  {
    icon: "🙋",
    title: "Community Q&A",
    desc: "Browse real questions with expert-reviewed answers, searchable by category across the PCOS spectrum.",
  },
  {
    icon: "📚",
    title: "Health Guidance",
    desc: "Access curated, evidence-based content on hormone health, nutrition, fertility, and mental well-being.",
  },
];

const VALUES = [
  {
    icon: "🔬",
    title: "Evidence-Based",
    desc: "Every piece of content is grounded in published medical research and clinical guidelines.",
  },
  {
    icon: "🔒",
    title: "Privacy-First",
    desc: "We never sell your data. Your health conversations stay private and are never linked to your identity.",
  },
  {
    icon: "🤝",
    title: "Community-Driven",
    desc: "Built with feedback from real women living with PCOS, clinicians, and patient advocates.",
  },
  {
    icon: "🌙",
    title: "Always Available",
    desc: "PCOS doesn't keep office hours. Our AI assistant and resources are here whenever you need them.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About HerPCOS Portal
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            We exist to make PCOS less overwhelming — one clear answer, one
            supportive conversation, one empowered woman at a time.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {/* Mission */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            HerPCOS Portal was built for the millions of women living with
            Polycystic Ovary Syndrome who need clear, accessible, and
            compassionate information. PCOS is the most common hormonal disorder
            in women of reproductive age — yet it is still widely misunderstood,
            underdiagnosed, and undertreated.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We combine the power of artificial intelligence with evidence-based
            health content to give every woman a knowledgeable companion on her
            PCOS journey — no waiting rooms, no judgment, no jargon.
          </p>
        </section>

        {/* Why PCOS Matters — Stats Banner */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why PCOS Matters
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div
                key={s.value}
                className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-5 text-center text-white shadow-sm"
              >
                <div className="text-3xl font-extrabold mb-2">{s.value}</div>
                <div className="text-xs text-pink-100 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-3">
            Sources: WHO, Endocrine Society, PCOS Awareness Association
          </p>
        </section>

        {/* What We Offer */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFERINGS.map((item) => (
              <div
                key={item.title}
                className="bg-pink-50 rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl border border-pink-100 shadow-sm p-6 flex gap-4 items-start"
              >
                <div className="text-3xl">{v.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{v.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Amber Medical Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <p className="text-sm font-semibold text-amber-800 mb-1">
            ⚠️ Important Medical Notice
          </p>
          <p className="text-sm text-amber-700 leading-relaxed">
            HerPCOS Portal is an educational resource, not a medical service.
            All content is for general informational purposes only and is not a
            substitute for professional medical advice, diagnosis, or treatment.
            Always consult a qualified healthcare provider for any medical
            concern.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center space-x-4">
          <Link
            href="/chat"
            className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors"
          >
            Try the AI Chat
          </Link>
          <Link
            href="/qa"
            className="inline-block border border-pink-200 text-pink-700 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
          >
            Browse Q&amp;A
          </Link>
        </div>
      </div>
    </div>
  );
}
