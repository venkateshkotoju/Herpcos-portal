import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import AuthorCard from "@/components/AuthorCard";
import GuideSchema from "@/components/GuideSchema";
import QuickAnswer from "@/components/QuickAnswer";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Lean PCOS: Symptoms, Causes & Why It's Often Missed",
  description:
    "Lean PCOS happens without excess weight, which often delays diagnosis. Learn the symptoms, hidden insulin resistance, and how management differs.",
  alternates: {
    canonical: "/lean-pcos",
  },
  openGraph: {
    title: "Lean PCOS: Symptoms, Causes & Why It's Often Missed",
    description:
      "Lean PCOS happens without excess weight, which often delays diagnosis. Learn the symptoms, hidden insulin resistance, and how management differs.",
    url: "https://www.herpcos.com/lean-pcos",
    type: "article",
    siteName: "HerPCOS Portal",
    locale: "en_US",
    images: [
      {
        url: "https://www.herpcos.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Lean PCOS — HerPCOS Portal",
      },
    ],
  },
};

const TOC = [
  { id: "overview", label: "What Is Lean PCOS?" },
  { id: "why-missed", label: "Why Lean PCOS Is Often Missed" },
  { id: "symptoms", label: "Recognizing Lean PCOS" },
  { id: "insulin", label: "The Hidden Insulin Resistance" },
  { id: "management", label: "How Management Differs" },
  { id: "doctor", label: "Getting an Accurate Diagnosis" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const SYMPTOMS = [
  { icon: "📅", title: "Irregular or Absent Periods", desc: "The same ovulatory disruption seen in all PCOS types, driven by elevated androgens interfering with regular ovulation." },
  { icon: "🌸", title: "Acne & Oily Skin", desc: "Lean PCOS is often more androgen-dominant in presentation, which can mean more prominent acne relative to other symptoms." },
  { icon: "🧔", title: "Hirsutism", desc: "Excess hair growth on the face, chest, or abdomen from elevated androgens — frequently one of the more noticeable signs in lean PCOS." },
  { icon: "💇", title: "Scalp Hair Thinning", desc: "Androgenic alopecia can occur regardless of body weight, since it's driven by hormone levels and follicle sensitivity, not BMI." },
  { icon: "🥚", title: "Fertility Challenges", desc: "Irregular ovulation affects fertility independent of weight — lean PCOS is a common, sometimes overlooked cause of unexplained difficulty conceiving." },
  { icon: "😴", title: "Fatigue & Mood Changes", desc: "Even without insulin resistance showing up as weight gain, blood sugar swings and hormonal shifts can still cause fatigue and mood symptoms." },
];

const MANAGEMENT = [
  {
    title: "Diet Still Matters",
    desc: "A lower glycemic-load diet can improve insulin sensitivity and androgen levels even without any need for weight loss. The goal is metabolic health, not a smaller body size.",
  },
  {
    title: "Strength & Moderate Cardio",
    desc: "Resistance training improves how your muscles use glucose, which can lower insulin resistance independent of weight change. See our exercise guide for specifics.",
  },
  {
    title: "Targeted Supplements",
    desc: "Inositol and other insulin-supporting supplements are studied across BMI ranges, not just in women who are overweight — lean women with PCOS can also benefit.",
  },
  {
    title: "Medication When Indicated",
    desc: "Metformin, anti-androgens, or hormonal birth control may still be appropriate for lean PCOS, based on symptoms and lab findings rather than body weight.",
  },
];

const FAQS = [
  {
    q: "What is lean PCOS?",
    a: "Lean PCOS refers to PCOS occurring in someone with a body mass index (BMI) in the 'normal' range, roughly under 25. It's not a separate medical diagnosis from PCOS — it's the same underlying condition, just without the excess weight that's often (incorrectly) assumed to be a requirement for PCOS.",
  },
  {
    q: "How common is lean PCOS?",
    a: "Estimates vary by population and diagnostic criteria, but research suggests roughly 20–30% of women diagnosed with PCOS have a BMI in the normal range. It's likely underrepresented in these figures too, since lean PCOS is frequently missed or diagnosed later.",
  },
  {
    q: "Can you have insulin resistance without being overweight?",
    a: "Yes. This is sometimes called 'metabolically obese, normal weight.' Insulin resistance can occur due to genetics, visceral (internal) fat that isn't visible externally, and androgen levels themselves — regardless of BMI. Standard weight-based screening can miss this, so targeted insulin and glucose testing matters.",
  },
  {
    q: "Why is lean PCOS harder to diagnose?",
    a: "Many people (including some clinicians) associate PCOS primarily with weight gain, so irregular periods or acne in someone at a normal weight may be attributed to other causes first. This can delay diagnosis by months or years, and delay access to appropriate treatment.",
  },
  {
    q: "Does lean PCOS still require treatment?",
    a: "Yes. Lean PCOS carries the same reproductive and metabolic considerations as PCOS at higher body weights, including irregular ovulation, elevated androgens, and increased long-term risk for conditions like type 2 diabetes. Treatment is guided by your symptoms and lab results, not your weight.",
  },
  {
    q: "Is lean PCOS less severe than other types?",
    a: "Not necessarily. Some research suggests lean PCOS can present with more pronounced androgen-related symptoms (like hirsutism and acne) since insulin resistance — while often present — may be less obvious externally. Severity varies by individual, not by body weight category.",
  },
];

const CITATIONS = [
  { ref: "1", text: "Kiconco S, et al. (2022). Lean women with polycystic ovary syndrome: a systematic review. Clin Endocrinol. 96(3):304–318." },
  { ref: "2", text: "Toosy S, et al. (2018). Lean polycystic ovary syndrome (PCOS): an evidence-based practical approach. J Diabetes Metab Disord. 17(2):277–285." },
  { ref: "3", text: "Teede HJ, et al. (2023). International evidence-based guideline for the assessment and management of polycystic ovary syndrome. Monash University." },
  { ref: "4", text: "Ruan X, Mueck AO. (2015). Impact of smoking and body weight on the risk of polycystic ovary syndrome. Gynecol Endocrinol. 31(5):342–347." },
  { ref: "5", text: "Amato MC, et al. (2013). Visceral adiposity index in relation to insulin sensitivity and cardiometabolic risk in women with PCOS. Clin Endocrinol. 78(4):578–583." },
];

const RELATED = [
  { href: "/what-is-pcos", label: "What Is PCOS?" },
  { href: "/pcos-symptoms", label: "PCOS Symptoms Guide" },
  { href: "/pcos-lab-results", label: "PCOS Lab Results" },
  { href: "/insulin-resistance-pcos", label: "Insulin Resistance & PCOS" },
  { href: "/pcos-diet", label: "Best Diet for PCOS" },
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

export default function LeanPcosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="inline-block bg-white/20 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            PCOS Symptom Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Lean PCOS</h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            PCOS doesn&apos;t require excess weight. Here&apos;s why lean PCOS is so often
            missed, and how it&apos;s recognized and managed.
          </p>
          <p className="text-pink-200 text-xs mt-4">Last reviewed: September 7, 2026</p>
        </div>
      </div>

      <GuideSchema
        title="Lean PCOS: Symptoms, Causes & Why It's Often Missed"
        description="Lean PCOS happens without excess weight, which often delays diagnosis. Learn the symptoms, hidden insulin resistance, and how management differs."
        url="https://www.herpcos.com/lean-pcos"
        datePublished="2026-09-07"
        breadcrumbLabel="Lean PCOS"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <AuthorCard lastUpdated="September 7, 2026" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-10">
        <QuickAnswer
          question="Can you have PCOS without being overweight?"
          answer="Yes. Lean PCOS occurs in women with a BMI in the normal range and involves the same core features — irregular ovulation and elevated androgens — as PCOS at any body weight. It's frequently missed because PCOS is often (incorrectly) assumed to always involve weight gain, which can delay diagnosis and treatment."
        />

        <TableOfContents items={TOC} />

        <section id="overview" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8 scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Lean PCOS?</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            &quot;Lean PCOS&quot; describes PCOS in someone with a body mass index generally under 25.
            It is not a separate condition — it meets the same diagnostic criteria as PCOS at any
            weight — but it&apos;s a useful term because the experience of getting diagnosed and
            managing symptoms can look meaningfully different.
          </p>
          <p className="text-gray-600 leading-relaxed mb-3">
            PCOS is caused by a combination of elevated androgens, irregular ovulation, and often
            insulin resistance. None of these require excess body weight to occur — weight gain is
            a common consequence of PCOS&apos;s metabolic effects for many women, but it isn&apos;t a
            defining feature of the condition itself.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you&apos;re unfamiliar with how PCOS is diagnosed more broadly, start with our{" "}
            <Link href="/what-is-pcos" className="text-pink-600 hover:underline font-medium">
              What Is PCOS guide
            </Link>{" "}
            for the full picture, including the Rotterdam diagnostic criteria.
          </p>
        </section>

        <section id="why-missed" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Lean PCOS Is Often Missed</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Because PCOS is so strongly associated with weight gain in public awareness — and even in
            some clinical training — irregular periods, acne, or excess hair growth in a lean woman
            are sometimes attributed to stress, diet, or &quot;normal variation&quot; before PCOS is
            considered. This can mean months or years of delay before an accurate diagnosis.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The delay matters because untreated PCOS — regardless of weight — carries real
            implications for fertility, long-term metabolic health, and quality of life. Getting
            an accurate diagnosis earlier means earlier access to effective management.
          </p>
        </section>

        <section id="symptoms">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recognizing Lean PCOS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SYMPTOMS.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl border border-pink-100 shadow-sm p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{s.icon}</span>
                  <h3 className="font-semibold text-gray-900 text-sm">{s.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="insulin" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Hidden Insulin Resistance</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            One of the most important — and most missed — facts about lean PCOS is that insulin
            resistance can still be present, even without visible weight gain. This is sometimes
            described as being &quot;metabolically obese at normal weight&quot;: internal (visceral)
            fat and genetic factors can drive insulin resistance independent of what shows up on a scale.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Because standard screening sometimes relies on BMI as a shortcut for metabolic risk,
            lean women with PCOS may not automatically be offered glucose or insulin testing. If
            you have PCOS symptoms and a normal BMI, it&apos;s worth specifically asking for these
            tests. Our{" "}
            <Link href="/pcos-lab-results" className="text-pink-600 hover:underline font-medium">
              lab results guide
            </Link>{" "}
            explains what each one means.
          </p>
        </section>

        <section id="management" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">How Management Differs</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Because weight loss isn&apos;t a relevant goal for many women with lean PCOS, treatment
            focuses on the underlying hormonal and metabolic picture instead.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MANAGEMENT.map((m) => (
              <div key={m.title} className="border border-pink-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{m.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="doctor" className="bg-amber-50 rounded-2xl border border-amber-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting an Accurate Diagnosis</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have a normal BMI but suspect PCOS, come prepared to advocate for a full workup:
          </p>
          <ul className="space-y-2">
            {[
              "Ask specifically for androgen testing (total and free testosterone, DHEAS)",
              "Request a glucose tolerance test or fasting insulin, not just a fasting glucose",
              "Track your cycle length for at least 2–3 months before your appointment",
              "Mention any hirsutism, acne, or hair thinning even if it seems mild",
              "Ask for a pelvic ultrasound if ovarian appearance hasn't been evaluated",
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
          <h2 className="text-2xl font-bold mb-3">Have Questions About Lean PCOS?</h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">
            Ask our AI assistant about symptoms, what tests to request, and how lean PCOS is treated.
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
