import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import AuthorCard from "@/components/AuthorCard";
import GuideSchema from "@/components/GuideSchema";

export const metadata: Metadata = {
  title: "Inositol for PCOS: Myo-Inositol vs D-Chiro, Benefits & Dosage",
  description:
    "Everything you need to know about inositol for PCOS — how myo-inositol and D-chiro-inositol work, the research-backed 40:1 ratio, dosage, and what to expect.",
  openGraph: {
    title: "Inositol for PCOS: Myo-Inositol vs D-Chiro, Benefits & Dosage",
    description:
      "Everything you need to know about inositol for PCOS — how myo-inositol and D-chiro-inositol work, the research-backed 40:1 ratio, dosage, and what to expect.",
    url: "https://herpcos.com/inositol-for-pcos",
    type: "article",
    images: [
      {
        url: "https://herpcos.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Inositol for PCOS — HerPCOS Portal",
      },
    ],
  },
};

const BENEFITS = [
  {
    icon: "⚡",
    title: "Improves Insulin Sensitivity",
    desc: "Inositol is a second messenger in the insulin signalling pathway. Supplementing with myo-inositol helps cells respond to insulin more effectively, lowering insulin and blood sugar levels without a prescription.",
  },
  {
    icon: "🥚",
    title: "Promotes Ovulation",
    desc: "Multiple clinical trials show myo-inositol improves ovulation rates in women with PCOS. In one study, 65% of women restored ovulation after 3 months of supplementation compared to 15% in the placebo group.",
  },
  {
    icon: "📅",
    title: "Regulates Menstrual Cycles",
    desc: "By reducing insulin and androgen levels, inositol helps normalise the hormonal environment needed for regular periods. Many women notice improvement within 2–3 menstrual cycles.",
  },
  {
    icon: "💆",
    title: "Reduces Testosterone & Androgens",
    desc: "Lower insulin means the ovaries produce fewer androgens. Women using myo-inositol often see improvements in acne, hirsutism (excess hair growth), and androgenic hair thinning.",
  },
  {
    icon: "🧬",
    title: "Improves Egg Quality",
    desc: "For women undergoing IVF or other fertility treatments, myo-inositol has been shown to improve oocyte (egg) quality and embryo development — particularly important because PCOS can affect egg maturation.",
  },
  {
    icon: "😊",
    title: "Supports Mood & Anxiety",
    desc: "Inositol was originally studied for mood disorders. Some research suggests supplementation may reduce anxiety and depression symptoms in women with PCOS, where mood issues are disproportionately common.",
  },
];

const COMPARISON = [
  {
    feature: "Primary role",
    myo: "Insulin signalling, FSH signalling",
    dci: "Glycogen synthesis, androgen regulation",
  },
  {
    feature: "Natural ratio in body",
    myo: "~40 parts myo-inositol",
    dci: "~1 part D-chiro-inositol",
  },
  {
    feature: "Ovulation benefit",
    myo: "Strong — most evidence here",
    dci: "Moderate when combined with myo",
  },
  {
    feature: "Egg quality",
    myo: "Well-documented improvement",
    dci: "Less studied independently",
  },
  {
    feature: "Androgen reduction",
    myo: "Indirect (via insulin reduction)",
    dci: "More direct effect on androgens",
  },
  {
    feature: "Optimal dosage",
    myo: "2,000–4,000 mg/day",
    dci: "50–100 mg/day (much lower)",
  },
];

const FOOD_SOURCES = [
  { food: "Citrus fruits (oranges, grapefruits)", amount: "Moderate myo-inositol" },
  { food: "Whole grains (oats, brown rice)", amount: "Good source of inositol" },
  { food: "Beans and legumes (lentils, chickpeas)", amount: "High myo-inositol" },
  { food: "Nuts (almonds, walnuts)", amount: "Moderate myo-inositol" },
  { food: "Fresh vegetables (especially leafy greens)", amount: "Low-moderate amounts" },
  { food: "Liver (beef, chicken)", amount: "High myo-inositol" },
];

const FAQS = [
  {
    q: "What is the best form of inositol for PCOS?",
    a: "Most research supports using a combination of myo-inositol and D-chiro-inositol in a 40:1 ratio — the same ratio found naturally in healthy human tissue. This combination is more effective than either form alone. Brands like Ovasitol and Theralogix market this specific ratio.",
  },
  {
    q: "How long does inositol take to work for PCOS?",
    a: "Most women notice improvements in blood sugar and energy within 4–6 weeks. Menstrual cycle improvements typically take 2–3 cycles (2–4 months). Ovulation restoration and androgen-related symptoms (acne, hair) can take 3–6 months of consistent use.",
  },
  {
    q: "Can I take inositol instead of Metformin?",
    a: "Some women prefer inositol as a natural, supplement-based alternative to Metformin. For mild-to-moderate insulin resistance, inositol can be effective. For more significant insulin resistance, prediabetes, or when Metformin is prescribed, both can sometimes be used together. This decision should be made with your doctor.",
  },
  {
    q: "Is inositol safe during pregnancy?",
    a: "Myo-inositol appears to be safe during pregnancy based on current studies and is being researched as a way to prevent gestational diabetes in women with PCOS. However, always discuss any supplement with your OB-GYN before and during pregnancy.",
  },
  {
    q: "Are there any side effects of inositol?",
    a: "Inositol is generally very well-tolerated. At high doses (above 4g/day), some women experience mild nausea, loose stools, or headaches — similar to Metformin but less common and less intense. Starting with a lower dose and building up gradually helps minimise these effects.",
  },
  {
    q: "Can inositol help with PCOS weight loss?",
    a: "Inositol can support weight management by improving insulin sensitivity, which reduces fat storage and carbohydrate cravings. However, it is not a weight-loss supplement on its own. It works best alongside a low-GI diet and regular exercise — the same lifestyle foundation that benefits all PCOS management.",
  },
  {
    q: "Does inositol work for lean PCOS?",
    a: "Yes — lean PCOS (PCOS without obesity) still often involves insulin resistance. Myo-inositol has been studied in lean women with PCOS and shows benefits for ovulation and androgen levels. The metabolic improvements may be less dramatic than in overweight women, but the hormonal benefits are still meaningful.",
  },
];

const CITATIONS = [
  {
    ref: "1",
    text: "Unfer V, et al. (2017). Effects of Myo-Inositol in Women with PCOS: A Systematic Review of Randomized Controlled Trials. Gynecol Endocrinol. 33(7):509–515.",
  },
  {
    ref: "2",
    text: "Nestler JE, et al. (1999). Ovulatory and Metabolic Effects of D-Chiro-Inositol in the Polycystic Ovary Syndrome. NEJM. 340(17):1314–1320.",
  },
  {
    ref: "3",
    text: "Pkhaladze L, et al. (2020). Myo-Inositol Is More Effective than D-Chiro-Inositol in Women with PCOS. Eur Rev Med Pharmacol Sci. 24(22):11567–11574.",
  },
  {
    ref: "4",
    text: "Pundir J, et al. (2018). Inositol treatment of PCOS for ovulation induction: a meta-analysis. BJOG. 125(3):299–308.",
  },
  {
    ref: "5",
    text: "Colazingari S, et al. (2013). The combined therapy myo-inositol plus D-chiro-inositol, rather than D-chiro-inositol alone, is able to improve IVF outcomes. Arch Gynecol Obstet. 288(6):1405–1411.",
  },
];

const RELATED = [
  { href: "/metformin-for-pcos", label: "Metformin for PCOS" },
  { href: "/insulin-resistance-pcos", label: "Insulin Resistance & PCOS" },
  { href: "/pcos-diet", label: "Best Diet for PCOS" },
  { href: "/pcos-and-pregnancy", label: "PCOS & Pregnancy" },
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

export default function InositolForPcosPage() {
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
            PCOS Supplement Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Inositol for PCOS
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            Why this natural supplement is one of the most researched options
            for improving insulin sensitivity, ovulation, and hormonal balance
            in PCOS — without a prescription.
          </p>
          <p className="text-pink-200 text-xs mt-4">Last reviewed: June 25, 2025</p>
        </div>
      </div>

      <GuideSchema
        title="Inositol for PCOS: Myo-Inositol vs D-Chiro, Benefits & Dosage"
        description="Everything you need to know about inositol for PCOS — how myo-inositol and D-chiro-inositol work, the research-backed 40:1 ratio, dosage, and what to expect."
        url="https://herpcos.com/inositol-for-pcos"
        datePublished="2025-06-25"
        breadcrumbLabel="Inositol for PCOS"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <AuthorCard lastUpdated="June 25, 2025" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-10">

        {/* What is Inositol */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Is Inositol?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Inositol is a naturally occurring sugar alcohol that plays a key role in cell
            signalling throughout the body. While it&apos;s sometimes called &quot;vitamin B8,&quot; it&apos;s
            not technically a vitamin — your body can produce it from glucose, and you also
            get it from food. However, women with PCOS may have impaired inositol metabolism,
            meaning they don&apos;t produce or use it efficiently.
          </p>
          <p className="text-gray-600 leading-relaxed mb-3">
            There are nine forms of inositol, but two are most relevant to PCOS:{" "}
            <strong>myo-inositol (MI)</strong> and{" "}
            <strong>D-chiro-inositol (DCI)</strong>. Both act as second messengers in the
            insulin signalling pathway — meaning they help carry the message &quot;insulin is here,
            open up and take in glucose&quot; to your cells. When this messaging is impaired, as it
            is in{" "}
            <Link href="/insulin-resistance-pcos" className="text-pink-600 hover:underline font-medium">
              insulin resistance
            </Link>
            , supplementing with inositol can help restore normal signalling.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Unlike{" "}
            <Link href="/metformin-for-pcos" className="text-pink-600 hover:underline font-medium">
              Metformin
            </Link>
            , inositol is available without a prescription and has an excellent safety profile
            with very few side effects. This makes it a popular first-choice supplement for
            women newly diagnosed with PCOS, or for those who prefer a natural approach before
            considering medication.
          </p>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Evidence-Based Benefits for PCOS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-2xl border border-pink-100 shadow-sm p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{b.icon}</span>
                  <h3 className="font-semibold text-gray-900 text-sm">{b.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Myo vs DCI Comparison */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Myo-Inositol vs D-Chiro-Inositol
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            The two main forms have different but complementary roles. Research consistently
            shows the <strong>40:1 ratio of myo-inositol to D-chiro-inositol</strong> works
            better than either alone — this mirrors the ratio found naturally in healthy human
            plasma and follicular fluid.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-pink-100">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Feature</th>
                  <th className="text-left py-3 px-4 font-semibold text-pink-600">Myo-Inositol</th>
                  <th className="text-left py-3 px-4 font-semibold text-purple-600">D-Chiro-Inositol</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-50">
                {COMPARISON.map((row) => (
                  <tr key={row.feature} className="hover:bg-pink-50/50">
                    <td className="py-3 px-4 font-medium text-gray-700">{row.feature}</td>
                    <td className="py-3 px-4 text-gray-600">{row.myo}</td>
                    <td className="py-3 px-4 text-gray-600">{row.dci}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-pink-50 rounded-xl">
            <p className="text-sm text-gray-700">
              <strong>Bottom line:</strong> Look for a supplement containing both myo-inositol
              and D-chiro-inositol in a <strong>40:1 ratio</strong>. Products like Ovasitol
              are formulated specifically to this ratio. Avoid very high doses of D-chiro-inositol
              alone, which may actually harm egg quality at excessive amounts.
            </p>
          </div>
        </section>

        {/* Dosage */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Take Inositol for PCOS
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-pink-50 rounded-xl px-5 py-4">
              <span className="text-pink-600 font-bold text-sm w-28 shrink-0">Standard dose</span>
              <p className="text-sm text-gray-700">
                2,000 mg myo-inositol + 50 mg D-chiro-inositol twice daily (total 4,000 mg MI + 100 mg DCI per day)
              </p>
            </div>
            <div className="flex items-start gap-4 bg-pink-50 rounded-xl px-5 py-4">
              <span className="text-pink-600 font-bold text-sm w-28 shrink-0">Timing</span>
              <p className="text-sm text-gray-700">
                Split into two doses — morning and evening. Taking with meals reduces the chance
                of any GI discomfort.
              </p>
            </div>
            <div className="flex items-start gap-4 bg-pink-50 rounded-xl px-5 py-4">
              <span className="text-pink-600 font-bold text-sm w-28 shrink-0">Form</span>
              <p className="text-sm text-gray-700">
                Powder mixed in water is better absorbed than capsules. Most clinical trials
                used powder form.
              </p>
            </div>
            <div className="flex items-start gap-4 bg-pink-50 rounded-xl px-5 py-4">
              <span className="text-pink-600 font-bold text-sm w-28 shrink-0">Duration</span>
              <p className="text-sm text-gray-700">
                Give it at least 3 months before evaluating results. Hormonal changes take time;
                many women need 4–6 months to see the full benefit.
              </p>
            </div>
          </div>
        </section>

        {/* Food Sources */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Natural Food Sources of Inositol
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            While supplemental doses (2,000–4,000 mg/day) far exceed what you get from food,
            eating inositol-rich foods as part of a{" "}
            <Link href="/pcos-diet" className="text-pink-600 hover:underline font-medium">
              PCOS-friendly diet
            </Link>{" "}
            supports overall metabolic health.
          </p>
          <div className="space-y-2">
            {FOOD_SOURCES.map((f) => (
              <div key={f.food} className="flex items-center justify-between bg-green-50 rounded-xl px-5 py-3">
                <span className="text-sm text-gray-700">{f.food}</span>
                <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-0.5 rounded-full">{f.amount}</span>
              </div>
            ))}
          </div>
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

        {/* Medical Citations */}
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
            This content is for informational purposes only. Supplements are not FDA-evaluated
            for the treatment of PCOS. Always consult a healthcare provider before starting supplementation.
          </p>
        </section>

        {/* Chatbot CTA */}
        <section className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">
            Not Sure If Inositol Is Right for You?
          </h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">
            Ask our AI assistant about inositol dosing, which form to choose,
            how it compares to Metformin, and whether it could help your specific symptoms.
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related PCOS Guides</h2>
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
        </section>
      </div>
    </div>
  );
}
