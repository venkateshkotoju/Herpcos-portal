import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import AuthorCard from "@/components/AuthorCard";
import GuideSchema from "@/components/GuideSchema";
import QuickAnswer from "@/components/QuickAnswer";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Best Exercise for PCOS: What Works & What to Avoid",
  description:
    "Strength training and moderate cardio improve insulin sensitivity and hormone balance in PCOS. Learn what works, why more isn't always better, and a sample weekly plan.",
  alternates: {
    canonical: "/best-exercise-for-pcos",
  },
  openGraph: {
    title: "Best Exercise for PCOS: What Works & What to Avoid",
    description:
      "Strength training and moderate cardio improve insulin sensitivity and hormone balance in PCOS. Learn what works, why more isn't always better, and a sample weekly plan.",
    url: "https://www.herpcos.com/best-exercise-for-pcos",
    type: "article",
    siteName: "HerPCOS Portal",
    locale: "en_US",
    images: [
      {
        url: "https://www.herpcos.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Best Exercise for PCOS — HerPCOS Portal",
      },
    ],
  },
};

const TOC = [
  { id: "overview", label: "How Exercise Helps With PCOS" },
  { id: "why-not-more", label: "Why More Isn't Always Better" },
  { id: "types", label: "The Best Types of Exercise for PCOS" },
  { id: "weekly-plan", label: "A Sample Weekly Structure" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const BENEFITS = [
  { icon: "💪", title: "Improved Insulin Sensitivity", desc: "Muscle contraction during exercise allows cells to take up glucose without relying as heavily on insulin — a direct, well-studied benefit that happens independent of weight loss." },
  { icon: "⚖️", title: "Hormone Balance", desc: "Regular movement can lower circulating androgens over time by improving insulin sensitivity, which reduces the ovaries' androgen output." },
  { icon: "😌", title: "Lower Stress & Cortisol", desc: "Moderate, consistent exercise helps regulate cortisol, while excessive or high-intensity training can do the opposite — more on this below." },
  { icon: "❤️", title: "Cardiometabolic Health", desc: "PCOS carries a higher long-term risk of cardiovascular and metabolic conditions; regular movement is one of the most effective tools for reducing that risk over time." },
];

const TYPES = [
  {
    name: "Strength (Resistance) Training",
    detail: "Has the strongest evidence base for improving insulin sensitivity in PCOS. Building muscle mass increases your body's overall capacity to store and use glucose. Aim for 2–3 sessions per week covering major muscle groups.",
    tag: "Most evidence",
  },
  {
    name: "Moderate-Intensity Cardio",
    detail: "Brisk walking, cycling, or swimming for 30+ minutes most days supports insulin sensitivity and cardiovascular health without adding excess physical stress. A highly accessible starting point for beginners.",
    tag: "Beginner-friendly",
  },
  {
    name: "HIIT (in Moderation)",
    detail: "High-intensity interval training can improve insulin sensitivity efficiently in shorter sessions, but overuse can raise cortisol and worsen symptoms in some women, particularly those with lean PCOS or high baseline stress. 1–2 sessions per week is a reasonable ceiling for most people.",
    tag: "Use sparingly",
  },
  {
    name: "Yoga & Low-Impact Movement",
    detail: "Several small studies show yoga can improve menstrual regularity and reduce androgen levels, likely through stress reduction. A valuable complement to strength and cardio, especially on recovery days.",
    tag: "Stress support",
  },
  {
    name: "Daily Walking",
    detail: "Often underrated — consistent daily walking (even in short bouts) measurably improves insulin sensitivity and is sustainable for almost everyone, regardless of fitness level or time constraints.",
    tag: "Sustainable",
  },
];

const WEEKLY_PLAN = [
  { day: "Monday", activity: "Strength training (full body)" },
  { day: "Tuesday", activity: "30-minute brisk walk or light cardio" },
  { day: "Wednesday", activity: "Strength training (full body) or yoga" },
  { day: "Thursday", activity: "Rest or gentle walk" },
  { day: "Friday", activity: "Strength training (full body)" },
  { day: "Saturday", activity: "Optional: 1 HIIT session (15–20 min) or moderate cardio" },
  { day: "Sunday", activity: "Rest, stretching, or yoga" },
];

const MISTAKES = [
  "Doing intense exercise every day without rest — this can raise cortisol and worsen symptoms rather than help",
  "Focusing only on cardio while skipping strength training, which has the strongest evidence for improving insulin sensitivity",
  "Using exercise purely as a weight-loss tool rather than a metabolic health tool — the insulin benefits happen regardless of the number on the scale",
  "Starting with intense programs when you're new to exercise, which raises injury and burnout risk",
  "Ignoring signs of overtraining, like disrupted sleep, missed periods, or persistent fatigue",
];

const FAQS = [
  {
    q: "What is the best type of exercise for PCOS?",
    a: "Strength training has the strongest evidence for improving insulin sensitivity in PCOS, and combining it with regular moderate cardio (like walking) tends to produce the best overall results. The 'best' exercise is ultimately one you can do consistently, since consistency matters more than intensity for long-term hormone benefits.",
  },
  {
    q: "Can too much exercise make PCOS worse?",
    a: "Yes, for some women. Excessive high-intensity exercise without adequate recovery can raise cortisol and, in some cases, disrupt ovulation further — particularly relevant for lean PCOS or anyone with a history of very low energy availability. Balance and recovery matter as much as the workouts themselves.",
  },
  {
    q: "How often should I exercise with PCOS?",
    a: "A common evidence-based target is at least 150 minutes of moderate-intensity activity per week, plus 2–3 strength-training sessions. This can be adjusted based on your fitness level, other health conditions, and how your body responds — more isn't automatically better.",
  },
  {
    q: "Does exercise help with PCOS even without weight loss?",
    a: "Yes. Multiple studies show exercise improves insulin sensitivity and some hormonal markers in PCOS independent of weight change. This is especially relevant for lean PCOS, where weight loss isn't a relevant goal but metabolic benefits are still achievable.",
  },
  {
    q: "Is walking enough exercise for PCOS?",
    a: "Walking alone can meaningfully improve insulin sensitivity, especially if you're currently inactive, and it's a great sustainable starting point. Adding strength training on top of regular walking tends to produce more complete metabolic benefits over time.",
  },
  {
    q: "Should I avoid HIIT if I have PCOS?",
    a: "Not necessarily — HIIT can be an efficient tool in moderation, but it's easy to overdo. Limiting it to 1–2 sessions per week and paying attention to how your energy, sleep, and cycle respond is a reasonable, evidence-informed approach.",
  },
];

const CITATIONS = [
  { ref: "1", text: "Harrison CL, et al. (2011). Exercise therapy in polycystic ovary syndrome: a systematic review. Hum Reprod Update. 17(2):171–183." },
  { ref: "2", text: "Kite C, et al. (2019). Exercise, or exercise and diet for the management of polycystic ovary syndrome. Syst Rev. 8:51." },
  { ref: "3", text: "Teede HJ, et al. (2023). International evidence-based guideline for the assessment and management of PCOS. Monash University." },
  { ref: "4", text: "Nidhi R, et al. (2013). Effect of a yoga program on glucose metabolism and blood lipid levels in adolescent girls with PCOS. J Pediatr Adolesc Gynecol. 26(3):e59–e62." },
  { ref: "5", text: "Hakimi O, Cameron LC. (2017). Effect of exercise on ovulation: a systematic review. Sports Med. 47(8):1555–1567." },
];

const RELATED = [
  { href: "/what-is-pcos", label: "What Is PCOS?" },
  { href: "/pcos-weight-loss", label: "PCOS Weight Loss Guide" },
  { href: "/pcos-diet", label: "Best Diet for PCOS" },
  { href: "/insulin-resistance-pcos", label: "Insulin Resistance & PCOS" },
  { href: "/lean-pcos", label: "Lean PCOS" },
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

export default function BestExerciseForPcosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="inline-block bg-white/20 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            PCOS Lifestyle Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Best Exercise for PCOS</h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            Which types of movement improve insulin sensitivity and hormone balance — and why
            more isn&apos;t always better with PCOS.
          </p>
          <p className="text-pink-200 text-xs mt-4">Last reviewed: September 7, 2026</p>
        </div>
      </div>

      <GuideSchema
        title="Best Exercise for PCOS: What Works & What to Avoid"
        description="Strength training and moderate cardio improve insulin sensitivity and hormone balance in PCOS. Learn what works, why more isn't always better, and a sample weekly plan."
        url="https://www.herpcos.com/best-exercise-for-pcos"
        datePublished="2026-09-07"
        breadcrumbLabel="Best Exercise for PCOS"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <AuthorCard lastUpdated="September 7, 2026" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-10">
        <QuickAnswer
          question="What is the best exercise for PCOS?"
          answer="Strength training 2–3 times a week, combined with regular moderate-intensity cardio like walking, has the strongest evidence for improving insulin sensitivity and hormone balance in PCOS. Consistency matters more than intensity — and more exercise isn't always better, since excessive high-intensity training can raise cortisol and worsen symptoms for some women."
        />

        <TableOfContents items={TOC} />

        <section id="overview" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8 scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Exercise Helps With PCOS</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Because insulin resistance underlies most PCOS symptoms, exercise is one of the most
            effective non-medication tools available — not because of the calories it burns, but
            because muscle activity directly improves how your body uses insulin.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This matters for every PCOS phenotype, including{" "}
            <Link href="/lean-pcos" className="text-pink-600 hover:underline font-medium">
              lean PCOS
            </Link>
            , where weight loss isn&apos;t a relevant goal but the same metabolic benefits still apply.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Exercise Matters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl border border-pink-100 shadow-sm p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{b.icon}</span>
                  <h3 className="font-semibold text-gray-900 text-sm">{b.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="why-not-more" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why More Isn&apos;t Always Better</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            It&apos;s tempting to think that if moderate exercise helps, intense daily exercise must
            help more. With PCOS, that&apos;s not always true. Excessive high-intensity training
            without adequate recovery raises cortisol, your body&apos;s primary stress hormone —
            and elevated cortisol can worsen insulin resistance and disrupt ovulation.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This is especially relevant for women with lean PCOS or a history of disordered
            eating or overtraining, where very low energy availability can suppress reproductive
            hormones further. The goal is consistent, sustainable movement — not maximum intensity.
          </p>
        </section>

        <section id="types" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">The Best Types of Exercise for PCOS</h2>
          <div className="space-y-4">
            {TYPES.map((t) => (
              <div key={t.name} className="border border-pink-50 rounded-xl p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm">{t.name}</h3>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full shrink-0 bg-pink-100 text-pink-700">{t.tag}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{t.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="weekly-plan" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">A Sample Weekly Structure</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is a starting template — adjust volume and intensity based on your fitness
            level and how your body responds.
          </p>
          <div className="space-y-2">
            {WEEKLY_PLAN.map((d) => (
              <div key={d.day} className="flex items-center justify-between border border-pink-50 rounded-xl px-5 py-3">
                <span className="font-semibold text-gray-900 text-sm">{d.day}</span>
                <span className="text-sm text-gray-600">{d.activity}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="mistakes" className="bg-amber-50 rounded-2xl border border-amber-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="space-y-2">
            {MISTAKES.map((m) => (
              <li key={m} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-amber-500 mt-1 shrink-0">⚠</span>
                {m}
              </li>
            ))}
          </ul>
        </section>

        <section id="faq">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="bg-white rounded-2xl border border-pink-100 shadow-sm group">
                <summary className="flex justify-between items-center px-6 py-4 cursor-pointer font-medium text-gray-900 list-none">
                  {faq.q}
                  <span className="text-pink-500 text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-pink-50 pt-4">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Medical References</h2>
          <ol className="space-y-2">
            {CITATIONS.map((c) => (
              <li key={c.ref} className="flex gap-3 text-xs text-gray-500">
                <span className="text-pink-500 font-bold shrink-0">[{c.ref}]</span>
                <span>{c.text}</span>
              </li>
            ))}
          </ol>
          <p className="text-xs text-gray-400 mt-4">
            This content is for informational purposes only and does not constitute medical
            advice. Talk to a healthcare provider before starting a new exercise program,
            especially if you have other health conditions.
          </p>
        </section>

        <section className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Have Questions About Exercise & PCOS?</h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">
            Ask our AI assistant to help you build a routine that fits your fitness level and schedule.
          </p>
          <Link href="/chat" className="inline-block bg-white text-pink-600 font-bold px-8 py-3 rounded-full hover:bg-pink-50 transition-colors">
            Ask the AI Chat Assistant →
          </Link>
        </section>

        <NewsletterSignup />

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related PCOS Guides</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {RELATED.map((r) => (
              <Link key={r.href} href={r.href} className="bg-white rounded-xl border border-pink-100 shadow-sm px-4 py-3 text-sm font-medium text-pink-700 hover:bg-pink-50 transition-colors text-center">
                {r.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
