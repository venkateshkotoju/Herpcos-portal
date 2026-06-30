import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import AuthorCard from "@/components/AuthorCard";
import GuideSchema from "@/components/GuideSchema";

export const metadata: Metadata = {
  title: "What Is PCOS? Causes, Symptoms, Diagnosis & Treatment | HerPCOS",
  description:
    "PCOS (Polycystic Ovary Syndrome) is a hormonal condition affecting 1 in 10 women. Learn what it is, what causes it, how it's diagnosed, and how to manage it — explained simply.",
  openGraph: {
    title: "What Is PCOS? Causes, Symptoms, Diagnosis & Treatment",
    description:
      "PCOS (Polycystic Ovary Syndrome) is a hormonal condition affecting 1 in 10 women. Learn what it is, what causes it, how it's diagnosed, and how to manage it.",
    url: "https://herpcos.com/what-is-pcos",
    type: "article",
  },
};

const PCOS_TYPES = [
  {
    name: "Insulin-Resistant PCOS",
    prevalence: "~70% of cases",
    desc: "The most common type. High insulin levels stimulate the ovaries to overproduce androgens. Responds well to dietary changes, Metformin, and inositol. Often associated with weight gain but can occur in lean women too.",
    color: "bg-pink-50 border-pink-200",
    badge: "Most common",
  },
  {
    name: "Adrenal PCOS",
    prevalence: "~10% of cases",
    desc: "Driven by elevated DHEAS (an adrenal androgen) rather than ovarian androgens. Often triggered by stress. Testosterone and insulin may be normal. Requires a different management focus — stress reduction and adrenal support.",
    color: "bg-purple-50 border-purple-200",
    badge: null,
  },
  {
    name: "Inflammatory PCOS",
    prevalence: "~10–20% of cases",
    desc: "Chronic low-grade inflammation stimulates the adrenal glands and ovaries to produce excess androgens. Often associated with fatigue, headaches, skin issues, and bowel problems. An anti-inflammatory diet is key.",
    color: "bg-orange-50 border-orange-200",
    badge: null,
  },
  {
    name: "Post-Pill PCOS",
    prevalence: "Temporary condition",
    desc: "Some women develop PCOS-like symptoms after stopping hormonal contraception as the body recalibrates. Androgens can temporarily surge and periods may become irregular. Usually resolves within 3–6 months without treatment.",
    color: "bg-blue-50 border-blue-200",
    badge: null,
  },
];

const SYMPTOMS_OVERVIEW = [
  { symptom: "Irregular or absent periods", detail: "Cycles longer than 35 days, or fewer than 8 per year" },
  { symptom: "Excess hair growth (hirsutism)", detail: "On face, chest, abdomen, or back — driven by androgens" },
  { symptom: "Acne", detail: "Hormonal acne, typically along the jawline and chin" },
  { symptom: "Scalp hair thinning", detail: "Androgenic alopecia — thinning at the part or crown" },
  { symptom: "Weight gain or difficulty losing weight", detail: "Especially around the abdomen — linked to insulin resistance" },
  { symptom: "Fatigue", detail: "Often related to blood sugar instability and poor sleep" },
  { symptom: "Mood changes", detail: "Anxiety and depression are 2–3× more common in PCOS" },
  { symptom: "Difficulty getting pregnant", detail: "Irregular ovulation is the main cause of PCOS-related infertility" },
];

const DIAGNOSIS_CRITERIA = [
  {
    number: "01",
    title: "Irregular or Absent Ovulation",
    detail: "Cycles that are consistently longer than 35 days, shorter than 21 days, or absent. This is the hallmark feature and the most common.",
  },
  {
    number: "02",
    title: "Elevated Androgens",
    detail: "Either clinically (symptoms like acne, hirsutism, or scalp hair loss) or biochemically (elevated testosterone or DHEAS on blood tests).",
  },
  {
    number: "03",
    title: "Polycystic Ovaries on Ultrasound",
    detail: "12 or more small follicles (2–9mm) in at least one ovary, or an ovarian volume greater than 10 mL. Despite the name, true 'cysts' are rarely present.",
  },
];

const TREATMENT_OVERVIEW = [
  {
    icon: "🥗",
    title: "Diet & Lifestyle",
    desc: "A low-GI, anti-inflammatory diet is the foundation of PCOS management. Even modest improvements in diet and exercise can restore ovulation and reduce symptoms.",
    href: "/pcos-diet",
    link: "Read the diet guide",
  },
  {
    icon: "💊",
    title: "Metformin",
    desc: "The most commonly prescribed medication for PCOS — improves insulin sensitivity, lowers androgens, and may restore regular periods.",
    href: "/metformin-for-pcos",
    link: "Read the Metformin guide",
  },
  {
    icon: "🌿",
    title: "Inositol",
    desc: "A natural supplement with strong research support for improving insulin sensitivity, restoring ovulation, and reducing androgen levels without a prescription.",
    href: "/inositol-for-pcos",
    link: "Read the inositol guide",
  },
  {
    icon: "💉",
    title: "Hormonal Contraceptives",
    desc: "Combined oral contraceptives regulate periods and reduce androgen-driven symptoms like acne and hirsutism. They don't treat the underlying cause but manage symptoms effectively.",
    href: "/pcos-symptoms",
    link: "See all symptom treatments",
  },
  {
    icon: "🤰",
    title: "Fertility Treatments",
    desc: "If pregnancy is the goal, letrozole (ovulation induction) is first-line. IVF is available if simpler treatments don't work. PCOS responds well to fertility treatment.",
    href: "/pcos-and-pregnancy",
    link: "Read the fertility guide",
  },
  {
    icon: "🧪",
    title: "Monitoring with Labs",
    desc: "Regular blood tests track hormone levels, insulin, and metabolic health. Understanding your results helps you measure progress and guide treatment decisions.",
    href: "/pcos-lab-results",
    link: "Read the lab results guide",
  },
];

const FAQS = [
  {
    q: "What does PCOS stand for?",
    a: "PCOS stands for Polycystic Ovary Syndrome. The name comes from the appearance of the ovaries on ultrasound — many small follicles that can look like 'cysts' arranged around the edge of the ovary. Despite the name, these aren't true cysts and don't always need to be present for a PCOS diagnosis.",
  },
  {
    q: "Is PCOS common?",
    a: "Yes — PCOS affects approximately 1 in 10 women of reproductive age worldwide, making it the most common hormonal disorder in women. It is estimated that up to 70% of women with PCOS remain undiagnosed, often because symptoms are dismissed or attributed to other causes.",
  },
  {
    q: "What causes PCOS?",
    a: "The exact cause of PCOS is not fully understood, but it involves a combination of genetic predisposition and environmental factors. The central mechanisms are insulin resistance (in most cases) and abnormal signalling between the brain and ovaries, which leads to excess androgen production. Genetics play a role — daughters and sisters of women with PCOS have a higher risk.",
  },
  {
    q: "Can you have PCOS without cysts on your ovaries?",
    a: "Yes. The presence of ovarian cysts on ultrasound is just one of three diagnostic criteria — you only need to meet two of the three to be diagnosed. Many women with PCOS have normal-looking ovaries on ultrasound but have irregular periods and elevated androgens, which is sufficient for diagnosis.",
  },
  {
    q: "Can thin or lean women get PCOS?",
    a: "Absolutely. While PCOS is associated with weight gain and obesity, approximately 20–30% of women with PCOS are of normal weight (lean PCOS). Lean PCOS often goes undiagnosed longer because doctors may not consider it without weight-related symptoms. Insulin resistance can be present even without excess body weight.",
  },
  {
    q: "Is PCOS the same as having polycystic ovaries?",
    a: "No — these are different things. Having polycystic-looking ovaries on ultrasound alone (without irregular periods or elevated androgens) is not PCOS. Up to 25% of women with regular periods and no androgen symptoms have polycystic-looking ovaries — this is a normal variant, not PCOS.",
  },
  {
    q: "Does PCOS go away after menopause?",
    a: "Some PCOS symptoms improve after menopause as androgen levels naturally decline. Irregular periods are no longer relevant after menopause. However, the underlying metabolic risks (insulin resistance, cardiovascular risk, diabetes risk) persist and can worsen with age if not managed. PCOS requires lifelong attention to metabolic health.",
  },
  {
    q: "Can PCOS be cured?",
    a: "PCOS cannot currently be cured, but it can be very effectively managed. Many women achieve significant symptom improvement — including regular periods, clearer skin, reduced hair growth, and improved fertility — through lifestyle changes, medication, and targeted supplements. Symptoms often return if treatment stops, which is why ongoing management matters.",
  },
];

const CITATIONS = [
  {
    ref: "1",
    text: "Azziz R, et al. (2016). Polycystic ovary syndrome. Nat Rev Dis Primers. 2:16057.",
  },
  {
    ref: "2",
    text: "March WA, et al. (2010). The prevalence of polycystic ovary syndrome in a community sample assessed under contrasting diagnostic criteria. Hum Reprod. 25(2):544–551.",
  },
  {
    ref: "3",
    text: "Rotterdam ESHRE/ASRM-Sponsored PCOS Consensus Workshop Group. (2004). Revised 2003 consensus on diagnostic criteria and long-term health risks related to polycystic ovary syndrome. Fertil Steril. 81(1):19–25.",
  },
  {
    ref: "4",
    text: "Teede HJ, et al. (2018). International evidence-based guideline for the assessment and management of polycystic ovary syndrome. Hum Reprod. 33(9):1602–1618.",
  },
  {
    ref: "5",
    text: "Dunaif A. (1997). Insulin resistance and the polycystic ovary syndrome: mechanism and implications for pathogenesis. Endocr Rev. 18(6):774–800.",
  },
];

const RELATED = [
  { href: "/pcos-symptoms", label: "PCOS Symptoms" },
  { href: "/pcos-diet", label: "Best Diet for PCOS" },
  { href: "/insulin-resistance-pcos", label: "Insulin Resistance" },
  { href: "/pcos-lab-results", label: "PCOS Lab Results" },
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

export default function WhatIsPcosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="inline-block bg-white/20 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            PCOS Beginner&apos;s Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            What Is PCOS?
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            Polycystic Ovary Syndrome is the most common hormonal disorder
            in women — yet most women go years without a diagnosis. Here&apos;s
            everything you need to understand it.
          </p>
          <p className="text-pink-200 text-xs mt-4">Last reviewed: June 25, 2025</p>
        </div>
      </div>

      <GuideSchema
        title="What Is PCOS? Causes, Symptoms, Diagnosis & Treatment"
        description="PCOS (Polycystic Ovary Syndrome) is a hormonal condition affecting 1 in 10 women. Learn what it is, what causes it, how it's diagnosed, and how to manage it — explained simply."
        url="https://herpcos.com/what-is-pcos"
        datePublished="2025-06-25"
        breadcrumbLabel="What Is PCOS?"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <AuthorCard lastUpdated="June 25, 2025" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-10">

        {/* Definition */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            PCOS in Plain Language
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            <strong>PCOS (Polycystic Ovary Syndrome)</strong> is a hormonal condition in which the
            ovaries produce too many androgens — the hormones often thought of as &quot;male hormones,&quot;
            like testosterone. Every woman produces some androgens naturally, but in PCOS, levels
            are higher than normal, which disrupts the hormonal signals needed for regular ovulation.
          </p>
          <p className="text-gray-600 leading-relaxed mb-3">
            PCOS affects approximately <strong>1 in 10 women</strong> of reproductive age worldwide —
            around 200 million women globally. It is the most common endocrine disorder in women and
            the leading cause of ovulatory infertility. Despite being so common, up to{" "}
            <strong>70% of women with PCOS go undiagnosed</strong>, often for years.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The name &quot;polycystic&quot; refers to the appearance of the ovaries on ultrasound — many small
            follicles (immature eggs) that didn&apos;t develop fully. Importantly, these aren&apos;t true cysts
            and don&apos;t always cause pain. You can also have PCOS without them showing up on an
            ultrasound at all.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[
              { stat: "1 in 10", label: "Women affected" },
              { stat: "70%", label: "Go undiagnosed" },
              { stat: "#1", label: "Cause of ovulatory infertility" },
            ].map((s) => (
              <div key={s.label} className="bg-pink-50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-pink-600">{s.stat}</p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What Causes PCOS */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Causes PCOS?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            PCOS doesn&apos;t have a single cause — it results from a combination of genetic
            predisposition and metabolic dysfunction. Two mechanisms are central to most cases:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4 bg-pink-50 rounded-xl px-5 py-4">
              <span className="text-pink-600 font-bold text-sm w-8 shrink-0 mt-0.5">01</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1">Insulin Resistance</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Up to 70% of women with PCOS have insulin resistance — their cells don&apos;t
                  respond well to insulin, so the body produces more of it to compensate. High
                  insulin levels directly signal the ovaries to produce excess testosterone and
                  other androgens, triggering the hormonal cascade behind most PCOS symptoms.
                  This is why{" "}
                  <Link href="/insulin-resistance-pcos" className="text-pink-600 hover:underline font-medium">
                    insulin resistance
                  </Link>{" "}
                  is considered the primary driver of PCOS in most women.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-pink-50 rounded-xl px-5 py-4">
              <span className="text-pink-600 font-bold text-sm w-8 shrink-0 mt-0.5">02</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1">Abnormal Brain–Ovary Signalling</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The hypothalamus (brain) sends signals (GnRH pulses) to the pituitary gland,
                  which releases LH and FSH to control the menstrual cycle. In PCOS, these pulses
                  are faster than normal, causing LH levels to stay chronically elevated. High LH
                  stimulates the ovaries to overproduce androgens and prevents the LH surge needed
                  for ovulation — which is why periods become irregular or absent.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-pink-50 rounded-xl px-5 py-4">
              <span className="text-pink-600 font-bold text-sm w-8 shrink-0 mt-0.5">03</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1">Genetics</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  PCOS runs in families. If your mother or sister has PCOS, your risk is
                  significantly higher. Multiple genes involved in insulin signalling, androgen
                  production, and gonadotropin regulation have been linked to PCOS. Environmental
                  factors — diet, stress, exposure to endocrine disruptors — can trigger or
                  worsen PCOS in those who are genetically predisposed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The 4 Types of PCOS
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Not all PCOS is the same. Understanding which type you have helps explain your
            specific symptoms and guides which treatments are most likely to work.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PCOS_TYPES.map((type) => (
              <div key={type.name} className={`rounded-2xl border p-6 ${type.color}`}>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-bold text-gray-900">{type.name}</h3>
                  {type.badge && (
                    <span className="text-xs font-semibold bg-pink-600 text-white px-2.5 py-1 rounded-full shrink-0">
                      {type.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs font-medium text-gray-500 mb-2">{type.prevalence}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Note: These categories are based on common clinical patterns and are not official
            WHO classifications. Many women have features of more than one type.
          </p>
        </section>

        {/* Symptoms */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Common PCOS Symptoms
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            PCOS presents differently in every woman — you may have all, some, or only a few
            of these symptoms. Their severity also varies widely. See our full{" "}
            <Link href="/pcos-symptoms" className="text-pink-600 hover:underline font-medium">
              PCOS symptoms guide
            </Link>{" "}
            for detailed explanations of each.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SYMPTOMS_OVERVIEW.map((s) => (
              <div key={s.symptom} className="flex items-start gap-3 bg-pink-50 rounded-xl px-4 py-3">
                <span className="text-pink-500 mt-0.5 shrink-0">✓</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">{s.symptom}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Diagnosis */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            How Is PCOS Diagnosed?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            There is no single test for PCOS. Diagnosis is based on the{" "}
            <strong>Rotterdam Criteria</strong> — the internationally accepted standard since
            2003. You need to meet <strong>at least 2 of the following 3 criteria</strong>, after
            ruling out other conditions that could explain your symptoms:
          </p>
          <div className="space-y-4 mb-5">
            {DIAGNOSIS_CRITERIA.map((c) => (
              <div key={c.number} className="flex items-start gap-4 border border-pink-100 rounded-xl p-5">
                <span className="text-2xl font-bold text-pink-200 shrink-0">{c.number}</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{c.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
            <p className="text-sm text-gray-700">
              <strong>Before diagnosing PCOS</strong>, your doctor should rule out other
              conditions with similar symptoms: thyroid disease, hyperprolactinaemia, congenital
              adrenal hyperplasia, and Cushing&apos;s syndrome. Our{" "}
              <Link href="/pcos-lab-results" className="text-pink-600 hover:underline font-medium">
                lab results guide
              </Link>{" "}
              covers all the tests involved.
            </p>
          </div>
        </section>

        {/* Treatment Overview */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            How Is PCOS Treated?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            PCOS management is personalised — your treatment depends on your symptoms, whether
            you want to conceive, and your underlying metabolic picture. There is no one-size-fits-all
            approach, but these are the main tools available:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TREATMENT_OVERVIEW.map((t) => (
              <div key={t.title} className="bg-white rounded-2xl border border-pink-100 shadow-sm p-6">
                <div className="text-3xl mb-3">{t.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{t.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{t.desc}</p>
                <Link href={t.href} className="text-sm text-pink-600 font-medium hover:underline">
                  {t.link} →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Long-term health */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Long-Term Health With PCOS
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            PCOS is a lifelong condition. Beyond reproductive symptoms, women with PCOS carry
            an elevated risk of several long-term health conditions — especially if insulin
            resistance is not managed:
          </p>
          <div className="space-y-3">
            {[
              { risk: "Type 2 Diabetes", detail: "Women with PCOS have 5–10× higher lifetime risk. Up to 10% have type 2 diabetes by age 40." },
              { risk: "Cardiovascular Disease", detail: "Higher rates of high blood pressure, high triglycerides, and low HDL cholesterol increase heart disease risk." },
              { risk: "Endometrial Cancer", detail: "Infrequent or absent periods mean the uterine lining builds up without regular shedding, raising cancer risk if untreated." },
              { risk: "Sleep Apnoea", detail: "5–10× more common in women with PCOS, even in those who are not overweight. Often underdiagnosed." },
              { risk: "Mental Health", detail: "Anxiety and depression are 2–3× more prevalent in PCOS. The chronic nature of the condition and body image concerns contribute." },
            ].map((r) => (
              <div key={r.risk} className="flex items-start gap-3 bg-red-50 rounded-xl px-4 py-3">
                <span className="text-red-400 font-bold mt-0.5 shrink-0">!</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{r.risk}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-5 leading-relaxed">
            The good news: managing PCOS proactively — through diet, lifestyle, and appropriate
            treatment — significantly reduces all of these long-term risks. Early diagnosis and
            management matter.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="bg-white rounded-2xl border border-pink-100 shadow-sm group"
              >
                <summary className="flex justify-between items-center px-6 py-4 cursor-pointer font-medium text-gray-900 list-none">
                  {faq.q}
                  <span className="text-pink-500 text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-pink-50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Citations */}
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
            This content is for general informational purposes only and does not constitute
            medical advice. Always consult a qualified healthcare provider for diagnosis and treatment.
          </p>
        </section>

        {/* Chatbot CTA */}
        <section className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">
            Still Have Questions About PCOS?
          </h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">
            Ask our AI assistant anything — symptoms, diagnosis, treatment options,
            or what to discuss with your doctor at your next appointment.
          </p>
          <Link
            href="/chat"
            className="inline-block bg-white text-pink-600 font-bold px-8 py-3 rounded-full hover:bg-pink-50 transition-colors"
          >
            Ask the AI Chat Assistant →
          </Link>
        </section>

        {/* Newsletter */}
        <NewsletterSignup />

        {/* Related Guides */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Explore PCOS Guides</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {RELATED.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="bg-white rounded-xl border border-pink-100 shadow-sm px-4 py-3 text-sm font-medium text-pink-700 hover:bg-pink-50 transition-colors text-center"
              >
                {r.label}
              </Link>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/guides" className="text-sm text-pink-600 font-medium hover:underline">
              Browse all guides →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
