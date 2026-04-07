import Link from "next/link";
import Disclaimer from "./components/Disclaimer";

// Feature cards shown on the homepage
const features = [
  {
    icon: "💬",
    title: "Ask Questions",
    description:
      "Chat with our PCOS knowledge base and get answers to your questions instantly.",
    href: "/chat",
    cta: "Start chatting",
  },
  {
    icon: "📋",
    title: "Browse Q&A",
    description:
      "Explore a curated list of common PCOS questions answered by experts.",
    href: "/qa",
    cta: "View Q&A",
  },
  {
    icon: "🌿",
    title: "Manage Symptoms",
    description:
      "Learn about lifestyle, diet, and medical options to manage PCOS symptoms effectively.",
    href: "/qa",
    cta: "Learn more",
  },
];

// Stats to build awareness
const stats = [
  { value: "1 in 10", label: "Women affected by PCOS" },
  { value: "70%", label: "Cases go undiagnosed" },
  { value: "100+", label: "Expert Q&A answers" },
];

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-5">
        <div className="inline-block bg-rose-100 text-rose-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
          PCOS Expert Portal
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 leading-tight">
          HerPCOS &ndash;{" "}
          <span className="text-rose-500">Expert Portal</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          A trusted educational space helping women understand, track, and
          manage Polycystic Ovary Syndrome (PCOS) — with expert-backed
          information and community support.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            href="/chat"
            className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm"
          >
            Ask a Question
          </Link>
          <Link
            href="/qa"
            className="bg-white hover:bg-rose-50 text-rose-500 font-semibold px-6 py-3 rounded-xl border border-rose-200 transition-colors shadow-sm"
          >
            Browse Q&amp;A
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <Disclaimer />

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center"
          >
            <div className="text-3xl font-bold text-rose-500">{stat.value}</div>
            <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Features */}
      <section>
        <h2 className="text-2xl font-bold text-slate-700 mb-6 text-center">
          How HerPCOS Can Help You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-slate-700">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 flex-1">
                {feature.description}
              </p>
              <Link
                href={feature.href}
                className="text-sm font-medium text-rose-500 hover:text-rose-600 transition-colors"
              >
                {feature.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* What is PCOS Section */}
      <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
        <h2 className="text-2xl font-bold text-slate-700 mb-4">
          What is PCOS?
        </h2>
        <div className="space-y-3 text-slate-500 text-sm leading-relaxed">
          <p>
            <strong className="text-slate-700">
              Polycystic Ovary Syndrome (PCOS)
            </strong>{" "}
            is a common hormonal disorder affecting women of reproductive age.
            It is characterized by irregular menstrual cycles, elevated androgen
            (male hormone) levels, and/or polycystic ovaries seen on ultrasound.
          </p>
          <p>
            Symptoms can include irregular periods, acne, excess hair growth
            (hirsutism), thinning hair, weight gain, and difficulty getting
            pregnant. PCOS is also associated with insulin resistance and an
            increased risk of type 2 diabetes.
          </p>
          <p>
            While there is no cure, PCOS is manageable with lifestyle changes,
            medication, and regular monitoring. Early diagnosis and
            personalized care can significantly improve quality of life.
          </p>
        </div>
      </section>
    </div>
  );
}
