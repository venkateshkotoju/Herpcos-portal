import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import AuthorCard from "@/components/AuthorCard";

export const metadata: Metadata = {
  title: "Metformin for PCOS: Benefits, Side Effects & What to Expect | HerPCOS",
  description:
    "Learn how Metformin works for PCOS, its benefits for insulin resistance and periods, common side effects, dosage, and what questions to ask your doctor.",
  openGraph: {
    title: "Metformin for PCOS: Benefits, Side Effects & What to Expect",
    description:
      "Learn how Metformin works for PCOS, its benefits for insulin resistance and periods, common side effects, dosage, and what questions to ask your doctor.",
    url: "https://herpcos.com/metformin-for-pcos",
    type: "article",
  },
};

const BENEFITS = [
  {
    icon: "📉",
    title: "Lowers Insulin & Blood Sugar",
    desc: "Metformin reduces the amount of glucose your liver releases into the bloodstream and makes your cells more responsive to insulin. For women with PCOS, this directly targets the root hormonal driver of many symptoms.",
  },
  {
    icon: "🔄",
    title: "May Restore Regular Periods",
    desc: "By reducing insulin and androgen levels, Metformin can help restore ovulation in some women with PCOS. Studies show up to 50% of women experience more regular cycles within 6 months.",
  },
  {
    icon: "⚖️",
    title: "Supports Weight Management",
    desc: "Metformin may help with modest weight loss in women with PCOS, particularly by reducing appetite and lowering insulin-driven fat storage. It works best alongside dietary changes.",
  },
  {
    icon: "🌱",
    title: "Improves Fertility Outcomes",
    desc: "Metformin is sometimes used alongside fertility treatments to improve ovulation rates. It may also reduce the risk of miscarriage in women with PCOS, though evidence is mixed.",
  },
  {
    icon: "💇",
    title: "Reduces Androgen Levels",
    desc: "Lower insulin means the ovaries produce less testosterone. Over time this can reduce acne, slow excess hair growth (hirsutism), and ease other androgen-driven symptoms.",
  },
  {
    icon: "🛡️",
    title: "Long-Term Metabolic Protection",
    desc: "Because PCOS raises lifetime risk of type 2 diabetes and cardiovascular disease, Metformin provides ongoing metabolic protection — especially important for women with prediabetes.",
  },
];

const SIDE_EFFECTS = [
  { effect: "Nausea and stomach upset", tip: "Start with a low dose and take with food to minimize GI symptoms" },
  { effect: "Diarrhea or loose stools", tip: "Most common in the first 2–4 weeks; usually improves over time" },
  { effect: "Loss of appetite", tip: "Often a welcome effect for weight management, but ensure adequate nutrition" },
  { effect: "Metallic taste in mouth", tip: "Temporary; usually resolves after the first few weeks" },
  { effect: "Vitamin B12 depletion", tip: "Long-term use can lower B12; ask your doctor about periodic testing and supplementation" },
  { effect: "Lactic acidosis (rare)", tip: "Very rare but serious; risk increases with kidney disease, alcohol overuse, or contrast dye procedures" },
];

const DOSAGE_INFO = [
  { phase: "Starting dose", detail: "500 mg once daily with dinner, or 850 mg once daily" },
  { phase: "Week 2–4", detail: "Often increased to 500 mg twice daily (with breakfast and dinner)" },
  { phase: "Maintenance", detail: "Most women with PCOS take 1,000–2,000 mg/day divided across meals" },
  { phase: "Extended-release (XR)", detail: "Taken once daily with the evening meal; causes fewer GI side effects for many women" },
  { phase: "Maximum dose", detail: "2,550 mg/day (rarely needed for PCOS)" },
];

const FAQS = [
  {
    q: "Is Metformin FDA-approved for PCOS?",
    a: "Metformin is FDA-approved for type 2 diabetes, not PCOS specifically. However, doctors commonly prescribe it off-label for PCOS because strong evidence supports its benefits for insulin resistance, ovulation, and androgen levels. Off-label use is legal and common in medicine.",
  },
  {
    q: "How long does Metformin take to work for PCOS?",
    a: "Most women notice improvements in blood sugar and insulin levels within 4–8 weeks. Menstrual regularity and hormonal improvements typically take 3–6 months. Hair and skin changes may take 6–12 months. Consistency matters — skipping doses slows results.",
  },
  {
    q: "Can I take Metformin while trying to get pregnant?",
    a: "Many doctors continue Metformin during pregnancy, particularly in women with PCOS who are at higher miscarriage risk. However, the evidence is evolving and guidelines vary. Discuss this specifically with your OB or reproductive endocrinologist.",
  },
  {
    q: "Do I need to change my diet while on Metformin?",
    a: "Yes — Metformin works best alongside dietary changes. Continuing to eat high-sugar, high-refined-carb foods blunts its benefits. A low-GI diet with adequate protein and fiber works synergistically with Metformin to lower insulin and improve PCOS symptoms.",
  },
  {
    q: "What is the difference between regular Metformin and extended-release (XR)?",
    a: "Extended-release Metformin is absorbed more slowly, which significantly reduces nausea and diarrhea compared to immediate-release. It's taken once daily with dinner rather than with multiple meals. If GI side effects are a problem, ask your doctor about switching to XR.",
  },
  {
    q: "Can Metformin cause low blood sugar (hypoglycemia)?",
    a: "Unlike some diabetes medications, Metformin rarely causes hypoglycemia on its own because it doesn't increase insulin secretion — it improves insulin sensitivity. Hypoglycemia risk increases if you take it alongside other diabetes medications, skip meals, or drink excessive alcohol.",
  },
  {
    q: "How do I know if Metformin is working for my PCOS?",
    a: "Signs Metformin is working include: more regular menstrual cycles, lower fasting glucose on blood tests, gradual weight loss, and reduced acne or hair growth. Your doctor should monitor HbA1c, fasting insulin, and testosterone levels every 3–6 months.",
  },
];

const CITATIONS = [
  {
    ref: "1",
    text: "Diamanti-Kandarakis E, et al. (2010). Metformin: An Old Medication of New Fashion. Eur J Endocrinol. 162(2):193–212.",
  },
  {
    ref: "2",
    text: "Lord JM, et al. (2003). Metformin in polycystic ovary syndrome: systematic review and meta-analysis. BMJ. 327(7421):951–953.",
  },
  {
    ref: "3",
    text: "Palomba S, et al. (2009). Metformin administration and laparoscopic ovarian drilling improve ovarian response to clomiphene citrate in PCOS. Hum Reprod. 24(11):2715–2722.",
  },
  {
    ref: "4",
    text: "Teede HJ, et al. (2018). Recommendations from the international evidence-based guideline for the assessment and management of polycystic ovary syndrome. Hum Reprod. 33(9):1602–1618.",
  },
  {
    ref: "5",
    text: "Morin-Papunen LC, et al. (2012). Metformin reduces miscarriage in women with PCOS. Hum Reprod. 27(6):1586–1592.",
  },
];

const RELATED = [
  { href: "/inositol-for-pcos", label: "Inositol for PCOS" },
  { href: "/insulin-resistance-pcos", label: "Insulin Resistance & PCOS" },
  { href: "/pcos-lab-results", label: "PCOS Lab Results Guide" },
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

export default function MetforminForPcosPage() {
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
            PCOS Treatment Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Metformin for PCOS
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            How this common diabetes medication targets the insulin resistance
            at the root of most PCOS symptoms — and what to expect if your
            doctor prescribes it.
          </p>
          <p className="text-pink-200 text-xs mt-4">Last reviewed: June 25, 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <AuthorCard lastUpdated="June 25, 2025" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-10">

        {/* What is Metformin */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Is Metformin?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Metformin (brand names: Glucophage, Glumetza) is a biguanide medication originally
            developed to treat type 2 diabetes. It has been used safely for over 60 years and
            is one of the most studied medications in the world. For women with PCOS, it has
            become one of the most commonly prescribed treatments — even though PCOS is technically
            an off-label use.
          </p>
          <p className="text-gray-600 leading-relaxed mb-3">
            The reason Metformin is so relevant to PCOS comes down to one word:{" "}
            <strong>insulin</strong>. Up to 70% of women with PCOS have some degree of insulin
            resistance, meaning their cells don&apos;t respond properly to insulin. The body
            compensates by producing more insulin, which in turn signals the ovaries to produce
            excess androgens (male hormones like testosterone). These elevated androgens are
            responsible for many classic PCOS symptoms: irregular periods, acne, excess hair
            growth, and difficulty losing weight.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By directly improving how your body handles insulin, Metformin attacks the hormonal
            cascade at its source — which is why it can improve so many different PCOS symptoms
            at once. It is typically used alongside{" "}
            <Link href="/pcos-diet" className="text-pink-600 hover:underline font-medium">
              dietary changes
            </Link>{" "}
            and lifestyle modifications for best results.
          </p>
        </section>

        {/* How It Works */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Metformin Works for PCOS
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Metformin works through three main mechanisms that are particularly relevant to PCOS:
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-pink-50 rounded-xl px-5 py-4">
              <span className="text-pink-600 font-bold text-sm w-8 shrink-0 mt-0.5">01</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1">Reduces Liver Glucose Output</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The liver releases stored glucose into the bloodstream, especially overnight.
                  Metformin suppresses this process, lowering fasting blood sugar and reducing
                  the insulin spike needed to manage it.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-pink-50 rounded-xl px-5 py-4">
              <span className="text-pink-600 font-bold text-sm w-8 shrink-0 mt-0.5">02</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1">Improves Insulin Sensitivity in Muscle</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Metformin activates an enzyme called AMPK, which helps muscle cells absorb
                  glucose more efficiently without requiring as much insulin. Less insulin circulating
                  means the ovaries produce fewer androgens.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-pink-50 rounded-xl px-5 py-4">
              <span className="text-pink-600 font-bold text-sm w-8 shrink-0 mt-0.5">03</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1">Slows Intestinal Glucose Absorption</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Metformin slows how quickly carbohydrates are absorbed from the gut,
                  blunting the post-meal blood sugar spike and reducing the insulin response needed.
                  This is partly why GI side effects occur in the gut.
                </p>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Note: Metformin does not directly suppress androgen production in the ovaries — its
            benefit comes from lowering insulin, which then indirectly reduces androgen signaling.
          </p>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Benefits of Metformin for PCOS
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

        {/* Dosage */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Typical Metformin Dosing for PCOS
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Doctors typically start low and increase gradually to minimize side effects. Your
            dose will be personalised based on your body weight, lab results, and how well
            you tolerate the medication.
          </p>
          <div className="space-y-3">
            {DOSAGE_INFO.map((d) => (
              <div key={d.phase} className="flex items-start gap-4 bg-purple-50 rounded-xl px-5 py-4">
                <span className="text-sm font-bold text-purple-600 w-40 shrink-0">{d.phase}</span>
                <p className="text-sm text-gray-700">{d.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Always follow your doctor&apos;s specific instructions. Never adjust your dose without medical guidance.
          </p>
        </section>

        {/* Side Effects */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Side Effects & How to Manage Them
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Metformin&apos;s most common side effects are gastrointestinal and are usually temporary.
            Starting with a low dose and increasing slowly dramatically reduces them.
          </p>
          <div className="space-y-3">
            {SIDE_EFFECTS.map((s) => (
              <div key={s.effect} className="bg-amber-50 rounded-xl px-5 py-4">
                <p className="text-sm font-semibold text-gray-900 mb-1">{s.effect}</p>
                <p className="text-xs text-gray-600">{s.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who Should Consider It */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Who Is Metformin Most Useful For?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Not every woman with PCOS needs Metformin — it&apos;s most beneficial for those
            with underlying metabolic dysfunction. You may be a good candidate if you:
          </p>
          <ul className="space-y-2">
            {[
              "Have confirmed insulin resistance (elevated fasting insulin or glucose)",
              "Have prediabetes or type 2 diabetes alongside PCOS",
              "Have irregular or absent periods and want to restore ovulation",
              "Have not had adequate improvement from diet and lifestyle changes alone",
              "Are planning pregnancy and want to reduce miscarriage risk",
              "Have a BMI above 25 and are struggling to lose weight despite lifestyle efforts",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-pink-500 mt-1 shrink-0">✓</span>
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-5 p-4 bg-pink-50 rounded-xl">
            <p className="text-sm text-gray-700">
              <strong>Important:</strong> Metformin requires a prescription. Have a conversation
              with your endocrinologist or OB-GYN about your{" "}
              <Link href="/pcos-lab-results" className="text-pink-600 hover:underline font-medium">
                lab results
              </Link>{" "}
              (fasting insulin, glucose, HbA1c) before deciding if it&apos;s right for you. Some women
              prefer to try{" "}
              <Link href="/inositol-for-pcos" className="text-pink-600 hover:underline font-medium">
                inositol supplements
              </Link>{" "}
              first as a natural insulin sensitizer.
            </p>
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
            This content is for informational purposes only. Always consult a healthcare
            provider before starting or stopping any medication.
          </p>
        </section>

        {/* Chatbot CTA */}
        <section className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">
            Have Questions About Metformin and PCOS?
          </h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">
            Ask our AI assistant about Metformin dosing, side effects, alternatives,
            and how it fits into your PCOS management plan.
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
