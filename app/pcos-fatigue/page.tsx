import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import AuthorCard from "@/components/AuthorCard";
import GuideSchema from "@/components/GuideSchema";
import QuickAnswer from "@/components/QuickAnswer";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "PCOS Fatigue: Why You're Always Tired & How to Fix It",
  description:
    "PCOS fatigue is driven by blood sugar swings, poor sleep, inflammation, and thyroid overlap. Learn why PCOS is so exhausting and what actually helps.",
  alternates: {
    canonical: "/pcos-fatigue",
  },
  openGraph: {
    title: "PCOS Fatigue: Why You're Always Tired & How to Fix It",
    description:
      "PCOS fatigue is driven by blood sugar swings, poor sleep, inflammation, and thyroid overlap. Learn why PCOS is so exhausting and what actually helps.",
    url: "https://www.herpcos.com/pcos-fatigue",
    type: "article",
    siteName: "HerPCOS Portal",
    locale: "en_US",
    images: [
      {
        url: "https://www.herpcos.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PCOS Fatigue — HerPCOS Portal",
      },
    ],
  },
};

const TOC = [
  { id: "overview", label: "Why PCOS Leaves You Exhausted" },
  { id: "causes", label: "The Root Causes of PCOS Fatigue" },
  { id: "rule-out", label: "Ruling Out Other Causes" },
  { id: "strategies", label: "Strategies That Actually Help" },
  { id: "doctor", label: "When to See a Doctor" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const CAUSES = [
  {
    icon: "📉",
    title: "Blood Sugar Swings",
    desc: "Insulin resistance means your cells don't absorb glucose efficiently, causing blood sugar to spike after meals and then crash. Those crashes are a major, direct trigger of the 'wall of tiredness' many women with PCOS describe an hour or two after eating.",
  },
  {
    icon: "😴",
    title: "Disrupted Sleep",
    desc: "PCOS raises the risk of insomnia and obstructive sleep apnea, independent of body weight. Poor-quality or fragmented sleep is one of the most common — and most fixable — contributors to daytime exhaustion. See our full sleep guide for details.",
  },
  {
    icon: "🔥",
    title: "Chronic Low-Grade Inflammation",
    desc: "PCOS is associated with elevated inflammatory markers, and inflammation itself is a known driver of fatigue, independent of sleep or blood sugar. This is one reason fatigue can persist even when you feel like you're doing everything right.",
  },
  {
    icon: "🦋",
    title: "Overlapping Thyroid Issues",
    desc: "Autoimmune thyroid disease is more common in women with PCOS, and an underactive thyroid causes fatigue as a hallmark symptom. It's worth ruling out — see our PCOS vs. thyroid guide for the tests that distinguish the two.",
  },
  {
    icon: "🧠",
    title: "Mental Health Load",
    desc: "Anxiety and depression are significantly more common with PCOS, and both are strongly linked to fatigue — mentally and physically. The emotional weight of managing a chronic condition is real and can compound physical tiredness.",
  },
  {
    icon: "🩸",
    title: "Iron Deficiency",
    desc: "Heavy or prolonged periods, common with PCOS-related irregular cycles, can lead to low iron stores over time. Even mild iron deficiency (without full anemia) is a well-documented cause of persistent fatigue.",
  },
];

const STRATEGIES = [
  {
    category: "Stabilize Blood Sugar",
    tips: [
      "Pair carbohydrates with protein and fiber at every meal to blunt post-meal energy crashes",
      "Avoid skipping meals, which can worsen the highs and lows",
      "Try our 7-day PCOS meal plan for a structured starting point",
    ],
  },
  {
    category: "Protect Your Sleep",
    tips: [
      "Keep a consistent sleep and wake time, even on weekends",
      "Ask your doctor about a sleep study if you snore, wake gasping, or never feel rested",
      "Limit screens and bright light for an hour before bed",
    ],
  },
  {
    category: "Move — But Don't Overdo It",
    tips: [
      "Moderate movement (walking, strength training) improves energy more reliably than intense exercise, which can add stress to an already taxed system",
      "See our exercise guide for PCOS-specific recommendations",
    ],
  },
  {
    category: "Address Nutrient Gaps",
    tips: [
      "Ask for a ferritin (iron stores) and vitamin D test if fatigue is persistent",
      "Discuss B12 status if you take metformin long-term, since it can lower absorption",
    ],
  },
];

const FAQS = [
  {
    q: "Is fatigue a real symptom of PCOS, or just from being busy?",
    a: "Fatigue is a well-documented PCOS symptom, driven by measurable factors like insulin resistance, inflammation, and disrupted sleep — not simply a byproduct of a busy schedule. Many women report that fatigue improves noticeably once these underlying factors are addressed.",
  },
  {
    q: "Why am I tired even after 8 hours of sleep?",
    a: "PCOS can affect sleep quality, not just quantity. Fragmented sleep from undiagnosed sleep apnea, blood sugar dips overnight, or elevated cortisol can leave you feeling unrested even after a full night in bed. A sleep study can clarify whether sleep quality is part of the picture.",
  },
  {
    q: "Can losing weight fix PCOS fatigue?",
    a: "Weight loss isn't required to reduce fatigue, and it isn't a guaranteed fix on its own. What tends to help most is improving insulin sensitivity through diet and movement, regardless of whether that leads to weight change. Lean PCOS also causes fatigue, which shows the connection isn't only about body weight.",
  },
  {
    q: "Should I get my thyroid checked for PCOS fatigue?",
    a: "Yes — thyroid conditions are more common in women with PCOS and cause overlapping symptoms, including fatigue. A simple TSH blood test can help rule this in or out. See our PCOS vs. thyroid guide for what a full thyroid workup includes.",
  },
  {
    q: "What supplements help with PCOS fatigue?",
    a: "There's no single 'energy supplement' proven for PCOS fatigue, but correcting an underlying deficiency (iron, vitamin D, B12) if one is found can make a real difference. Inositol and other insulin-supporting supplements may help indirectly by reducing blood sugar swings. Always test before supplementing.",
  },
  {
    q: "Is PCOS fatigue linked to depression?",
    a: "The two often overlap. Depression is more common in women with PCOS and fatigue is a core symptom of depression, so it can be hard to separate hormonal fatigue from a mood-related cause. If fatigue is paired with low mood, loss of interest in activities, or hopelessness, talk to a provider about a mental health evaluation alongside the physical workup.",
  },
];

const CITATIONS = [
  { ref: "1", text: "Moran LJ, et al. (2015). Sleep disturbances in women with polycystic ovary syndrome: prevalence, pathophysiology, and management. Sleep Med Rev. 22:75–83." },
  { ref: "2", text: "Cooney LG, Dokras A. (2018). Depression and anxiety in polycystic ovary syndrome: etiology and treatment. Curr Psychiatry Rep. 20(11):83." },
  { ref: "3", text: "González F. (2012). Inflammation in polycystic ovary syndrome: underpinning of insulin resistance and ovarian dysfunction. Steroids. 77(4):300–305." },
  { ref: "4", text: "Romitti M, et al. (2018). Association between PCOS and autoimmune thyroid disease: a systematic review and meta-analysis. Eur J Endocrinol. 179(4):R79–R87." },
  { ref: "5", text: "Trost LB, et al. (2006). The diagnosis and treatment of iron deficiency and its potential relationship to fatigue. J Am Acad Dermatol. 54(5):824–844." },
];

const RELATED = [
  { href: "/what-is-pcos", label: "What Is PCOS?" },
  { href: "/pcos-symptoms", label: "PCOS Symptoms Guide" },
  { href: "/pcos-and-sleep", label: "PCOS & Sleep" },
  { href: "/pcos-and-mental-health", label: "PCOS & Mental Health" },
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

export default function PcosFatiguePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="inline-block bg-white/20 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            PCOS Symptom Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">PCOS Fatigue</h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            Why PCOS leaves so many women exhausted — even with a full night&apos;s sleep — and
            the evidence-based fixes that make the biggest difference.
          </p>
          <p className="text-pink-200 text-xs mt-4">Last reviewed: August 31, 2026</p>
        </div>
      </div>

      <GuideSchema
        title="PCOS Fatigue: Why You're Always Tired & How to Fix It"
        description="PCOS fatigue is driven by blood sugar swings, poor sleep, inflammation, and thyroid overlap. Learn why PCOS is so exhausting and what actually helps."
        url="https://www.herpcos.com/pcos-fatigue"
        datePublished="2026-08-31"
        breadcrumbLabel="PCOS Fatigue"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <AuthorCard lastUpdated="August 31, 2026" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-10">
        <QuickAnswer
          question="Why does PCOS make you so tired?"
          answer="PCOS fatigue usually comes from a combination of blood sugar swings due to insulin resistance, poor sleep quality (including a higher risk of sleep apnea), chronic low-grade inflammation, and overlapping conditions like thyroid disease or depression. Because it's multi-factorial, the most effective fixes usually combine blood sugar stabilization, better sleep habits, and — when relevant — treating an underlying deficiency or thyroid issue."
        />

        <TableOfContents items={TOC} />

        <section id="overview" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8 scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why PCOS Leaves You Exhausted</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Fatigue doesn&apos;t get talked about as much as PCOS&apos;s more visible symptoms, but it&apos;s
            one of the most commonly reported — and most disruptive to daily life. Many women describe
            it as a heavy, persistent tiredness that doesn&apos;t fully resolve with rest.
          </p>
          <p className="text-gray-600 leading-relaxed mb-3">
            Unlike ordinary tiredness, PCOS fatigue usually has several overlapping physical causes
            working together, which is why it can feel so stubborn. Understanding each contributing
            factor makes it much easier to target the right fix instead of guessing.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you&apos;re new to PCOS, our{" "}
            <Link href="/pcos-symptoms" className="text-pink-600 hover:underline font-medium">
              full symptoms guide
            </Link>{" "}
            covers how fatigue fits alongside the condition&apos;s other common signs.
          </p>
        </section>

        <section id="causes">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Root Causes of PCOS Fatigue</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CAUSES.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl border border-pink-100 shadow-sm p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{c.icon}</span>
                  <h3 className="font-semibold text-gray-900 text-sm">{c.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="rule-out" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ruling Out Other Causes</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Because fatigue is such a nonspecific symptom, it&apos;s worth confirming it&apos;s truly
            PCOS-related and not something separate that simply overlaps. A reasonable baseline
            workup includes a thyroid panel (TSH, Free T4), a complete blood count and ferritin to
            check for anemia or low iron stores, and a vitamin D level.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you have loud snoring, gasping during sleep, or morning headaches, ask your doctor
            about screening for obstructive sleep apnea — it&apos;s more common in PCOS and often missed.
          </p>
        </section>

        {STRATEGIES.map((group) => (
          <section key={group.category} className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8" id={group.category === "Stabilize Blood Sugar" ? "strategies" : undefined}>
            <h2 className="text-xl font-bold text-gray-900 mb-4">{group.category}</h2>
            <ul className="space-y-2">
              {group.tips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-pink-500 mt-1 shrink-0">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section id="doctor" className="bg-amber-50 rounded-2xl border border-amber-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When to See a Doctor</h2>
          <ul className="space-y-2">
            {[
              "Fatigue is severe enough to interfere with work, relationships, or daily functioning",
              "You have symptoms of sleep apnea (loud snoring, gasping, morning headaches)",
              "Fatigue is paired with persistent low mood or loss of interest in things you enjoy",
              "You have signs of anemia, such as pale skin, dizziness, or shortness of breath",
              "Fatigue is new, sudden, or rapidly worsening",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-amber-500 mt-1 shrink-0">⚠</span>
                {point}
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
            This content is for informational purposes only and does not constitute medical advice.
            Always consult a qualified healthcare provider before starting any treatment.
          </p>
        </section>

        <section className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Have Questions About PCOS Fatigue?</h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">
            Ask our AI assistant about what might be driving your fatigue and which tests to
            request from your doctor.
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
