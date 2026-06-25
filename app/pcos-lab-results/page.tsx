import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import AuthorCard from "@/components/AuthorCard";

export const metadata: Metadata = {
  title: "Understanding PCOS Lab Results: Complete Blood Test Guide | HerPCOS",
  description:
    "Understand your PCOS blood test results — testosterone, LH/FSH, AMH, insulin, glucose, thyroid, and more. Learn what each test means and what ranges to aim for.",
  openGraph: {
    title: "Understanding PCOS Lab Results: Complete Blood Test Guide",
    description:
      "Understand your PCOS blood test results — testosterone, LH/FSH, AMH, insulin, glucose, thyroid, and more. Learn what each test means and what ranges to aim for.",
    url: "https://herpcos.com/pcos-lab-results",
    type: "article",
  },
};

const HORMONE_LABS = [
  {
    test: "Total Testosterone",
    why: "The primary androgen in PCOS. Elevated in most women with PCOS and drives symptoms like acne, hirsutism, and hair loss.",
    normal: "Women: 15–70 ng/dL",
    pcos: "Often >70 ng/dL (may be mildly elevated or at high-normal)",
    timing: "Days 2–5 of cycle, or any day if irregular",
  },
  {
    test: "Free Testosterone",
    why: "The fraction not bound to protein — the biologically active form. More sensitive than total testosterone for detecting androgen excess.",
    normal: "0.3–1.9 ng/dL (varies by lab)",
    pcos: "Elevated free testosterone even with normal total is significant",
    timing: "Same as total testosterone",
  },
  {
    test: "DHEAS (Dehydroepiandrosterone Sulfate)",
    why: "An adrenal androgen. Elevated in 20–30% of women with PCOS, pointing to adrenal involvement. Also elevated in adrenal tumours (rare).",
    normal: "35–430 mcg/dL (age-dependent)",
    pcos: "May be elevated — adrenal contribution to androgen excess",
    timing: "Any time of day",
  },
  {
    test: "LH (Luteinizing Hormone)",
    why: "LH triggers ovulation. In PCOS, LH is often chronically elevated, disrupting the normal LH surge needed for ovulation.",
    normal: "Follicular phase: 2–15 IU/L",
    pcos: "Often elevated — LH:FSH ratio >2:1 is classic PCOS finding",
    timing: "Days 2–5 of cycle (follicular phase)",
  },
  {
    test: "FSH (Follicle Stimulating Hormone)",
    why: "FSH stimulates follicle (egg) development. Often normal or low-normal in PCOS. Used alongside LH to calculate the LH:FSH ratio.",
    normal: "Follicular phase: 3–10 IU/L",
    pcos: "Often normal; LH:FSH ratio > 2 suggests PCOS",
    timing: "Days 2–5 of cycle",
  },
  {
    test: "AMH (Anti-Müllerian Hormone)",
    why: "Produced by ovarian follicles. Elevated in PCOS due to the large number of small follicles. Also a marker of ovarian reserve (egg supply).",
    normal: "1–3.5 ng/mL (varies by age)",
    pcos: "Typically >3.5–4 ng/mL; can be 2–3× higher than average",
    timing: "Any time of cycle — very stable",
  },
  {
    test: "Estradiol (E2)",
    why: "The primary oestrogen. Helps interpret LH/FSH results. In the follicular phase, low or normal estradiol is expected; very high levels may indicate a large cyst.",
    normal: "Follicular phase: 20–150 pg/mL",
    pcos: "Varies — usually normal but can be elevated with large follicles",
    timing: "Days 2–5 of cycle",
  },
  {
    test: "Progesterone",
    why: "Confirms whether ovulation occurred. A level above 3 ng/mL on Day 21–23 (or 7 days post-ovulation) indicates ovulation. Low in anovulatory cycles.",
    normal: "Mid-luteal: >10 ng/mL (confirms ovulation)",
    pcos: "Often low (<3 ng/mL) due to infrequent ovulation",
    timing: "Day 21–23 (7 days after presumed ovulation)",
  },
];

const METABOLIC_LABS = [
  {
    test: "Fasting Glucose",
    why: "Screens for prediabetes and diabetes. High glucose indicates poor insulin response. Women with PCOS have 5–10× higher risk of developing type 2 diabetes.",
    normal: "70–99 mg/dL (normal), 100–125 (prediabetes)",
    pcos: "Even 'normal' levels in the 90–99 range deserve attention in PCOS",
    timing: "After 8–12 hours fasting",
  },
  {
    test: "Fasting Insulin",
    why: "The most sensitive test for insulin resistance in PCOS. Can be high even with normal glucose — glucose stays normal initially because more insulin is produced to compensate.",
    normal: "2–20 mIU/L (ideally below 10)",
    pcos: "Often elevated (>15–20 mIU/L); >25 suggests significant resistance",
    timing: "After 8–12 hours fasting",
  },
  {
    test: "HbA1c (Glycated Haemoglobin)",
    why: "Reflects average blood sugar over the past 3 months. Useful for longer-term metabolic tracking and detecting prediabetes before fasting glucose becomes abnormal.",
    normal: "Below 5.7% (normal), 5.7–6.4% (prediabetes)",
    pcos: "Aim for below 5.5% in PCOS for optimal metabolic health",
    timing: "Any time — no fasting required",
  },
  {
    test: "HOMA-IR (Calculated)",
    why: "A calculated measure of insulin resistance using fasting glucose and fasting insulin. Not a direct blood test — your doctor calculates it. Score above 2.0–2.5 suggests insulin resistance.",
    normal: "HOMA-IR < 2.0",
    pcos: "Formula: (fasting insulin × fasting glucose) ÷ 405",
    timing: "Calculated from fasting labs",
  },
  {
    test: "Lipid Panel",
    why: "PCOS is associated with dyslipidaemia: high triglycerides, low HDL ('good' cholesterol), and elevated small dense LDL. This raises cardiovascular risk.",
    normal: "TG <150, LDL <100, HDL >60 mg/dL (general targets)",
    pcos: "Often shows high TG, low HDL — metabolic syndrome pattern",
    timing: "Fasting for most accurate TG measurement",
  },
];

const OTHER_LABS = [
  {
    test: "TSH (Thyroid Stimulating Hormone)",
    why: "Thyroid disorders are more common in women with PCOS and can cause symptoms that overlap or worsen PCOS. Hypothyroidism causes irregular periods, weight gain, fatigue, and hair loss — all symptoms that can be misattributed to PCOS.",
    normal: "0.4–4.0 mIU/L (optimal for PCOS: 1–2 mIU/L)",
    timing: "Any time of day",
  },
  {
    test: "Ferritin (Iron Stores)",
    why: "Low ferritin is the most common nutritional deficiency in women with PCOS, particularly those with heavy periods. Low ferritin causes fatigue and hair shedding even without full anaemia.",
    normal: "12–150 ng/mL (aim for >70 for hair health)",
    timing: "Any time; repeat with iron panel if low",
  },
  {
    test: "Vitamin D",
    why: "Deficiency is extremely common in PCOS and is linked to worse insulin resistance, mood, and fertility outcomes. Supplementation may improve insulin sensitivity.",
    normal: "30–100 ng/mL (aim for 50–70 in PCOS)",
    timing: "Any time",
  },
  {
    test: "Prolactin",
    why: "Elevated prolactin can cause irregular periods and mimic PCOS symptoms. Should be checked at initial PCOS workup to rule out a pituitary adenoma as an alternative cause.",
    normal: "3–30 ng/mL",
    timing: "Morning, ideally at rest; stress can elevate it acutely",
  },
];

const CYCLE_TIMING = [
  { day: "Days 2–5", tests: "LH, FSH, Estradiol, Total Testosterone, Free Testosterone, DHEAS" },
  { day: "Day 21–23", tests: "Progesterone (confirms whether ovulation occurred)" },
  { day: "Any time", tests: "AMH, HbA1c, Prolactin, TSH, Vitamin D, Ferritin" },
  { day: "Fasting (any day)", tests: "Fasting Glucose, Fasting Insulin, Lipid Panel" },
];

const FAQS = [
  {
    q: "What blood tests should I ask for if I think I have PCOS?",
    a: "Ask your doctor for: LH, FSH, total and free testosterone, DHEAS, AMH, estradiol (day 2–5), fasting glucose and insulin, HbA1c, TSH, prolactin, ferritin, and vitamin D. Also request a pelvic ultrasound for ovarian morphology. Not every lab in the list is essential — your doctor will prioritise based on your symptoms.",
  },
  {
    q: "My testosterone is 'normal' but I have PCOS symptoms. Is that possible?",
    a: "Yes — many women with PCOS have androgens in the 'normal' female range but still have symptoms. This can happen when free testosterone is elevated even with normal total levels, when your follicles are more sensitive to normal androgen levels (genetic), or when elevated insulin is driving symptoms through non-androgen pathways. Always request free testosterone alongside total.",
  },
  {
    q: "When should I get my hormone labs done in my cycle?",
    a: "Key hormone tests (LH, FSH, estradiol, testosterone) are best done on Days 2–5 of your menstrual cycle when they're most interpretable. If your cycles are very irregular or you don't have periods, you can get them done at any time — let your doctor know and they'll interpret accordingly. AMH, TSH, and metabolic labs can be done any time.",
  },
  {
    q: "What is AMH and what does it tell me about PCOS?",
    a: "AMH (Anti-Müllerian Hormone) is produced by your ovarian follicles. In PCOS, the large number of small, arrested follicles causes AMH to be 2–3× higher than average. AMH also reflects ovarian reserve (how many eggs you have remaining). A very high AMH isn't a sign of better fertility in PCOS — it means many follicles aren't maturing to the point of ovulation.",
  },
  {
    q: "My doctor says my labs are 'normal' but I still feel unwell. What should I do?",
    a: "Standard reference ranges are based on population averages and don't account for PCOS-specific optimal ranges. For example, fasting insulin of 18 mIU/L is technically within 'normal' range but suggests significant insulin resistance in a PCOS context. Ask specifically for fasting insulin (often not part of standard panels), free testosterone, and AMH — these are routinely omitted from basic screens. Consider seeing an endocrinologist who specialises in PCOS.",
  },
  {
    q: "Do I need to fast before my hormone blood tests?",
    a: "Fasting is required for fasting glucose, fasting insulin, and lipid panels. Hormone tests (LH, FSH, AMH, testosterone) don't require fasting but are cycle-day dependent. TSH, vitamin D, ferritin, and prolactin can be done any time without fasting. When in doubt, fast overnight (8–12 hours) before your early-morning test appointment — it won't affect hormone results and gives you flexibility.",
  },
];

const CITATIONS = [
  {
    ref: "1",
    text: "Azziz R, et al. (2009). The Androgen Excess and PCOS Society criteria for the polycystic ovary syndrome. Fertil Steril. 91(2):456–488.",
  },
  {
    ref: "2",
    text: "Dunaif A. (1997). Insulin resistance and the polycystic ovary syndrome: mechanism and implications for pathogenesis. Endocr Rev. 18(6):774–800.",
  },
  {
    ref: "3",
    text: "Teede HJ, et al. (2018). International evidence-based guideline for the assessment and management of polycystic ovary syndrome. Hum Reprod. 33(9):1602–1618.",
  },
  {
    ref: "4",
    text: "Pigny P, et al. (2016). Elevated serum level of anti-Mullerian hormone in patients with polycystic ovary syndrome. J Clin Endocrinol Metab. 88(12):5957–5962.",
  },
  {
    ref: "5",
    text: "Escobar-Morreale HF. (2018). Polycystic ovary syndrome: definition, aetiology, diagnosis and treatment. Nat Rev Endocrinol. 14(5):270–284.",
  },
];

const RELATED = [
  { href: "/pcos-symptoms", label: "PCOS Symptoms Guide" },
  { href: "/insulin-resistance-pcos", label: "Insulin Resistance & PCOS" },
  { href: "/metformin-for-pcos", label: "Metformin for PCOS" },
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

export default function PcosLabResultsPage() {
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
            PCOS Diagnosis Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Understanding PCOS Lab Results
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            A plain-language guide to every blood test relevant to PCOS —
            what each measures, what ranges mean, when to get tested, and
            how to use results to advocate for better care.
          </p>
          <p className="text-pink-200 text-xs mt-4">Last reviewed: June 25, 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <AuthorCard lastUpdated="June 25, 2025" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-10">

        {/* Overview */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Lab Results Matter in PCOS
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            PCOS is a complex hormonal condition with no single definitive test. Diagnosis
            uses a combination of symptoms, ultrasound findings, and blood work. But lab
            results don&apos;t just confirm diagnosis — they guide treatment, reveal hidden metabolic
            risks, and track your progress over time.
          </p>
          <p className="text-gray-600 leading-relaxed mb-3">
            The challenge is that standard laboratory reference ranges are often too broad to
            catch the subtle imbalances common in PCOS. A result labelled &quot;normal&quot; on your report
            may still be contributing to your symptoms. Understanding what your specific numbers
            mean — and what ranges to aim for — empowers you to have more productive conversations
            with your healthcare team.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This guide covers three categories of tests: <strong>reproductive hormones</strong>,{" "}
            <strong>metabolic markers</strong>, and <strong>other important labs</strong>. We also
            cover when in your cycle to get each test for the most accurate results.
          </p>
        </section>

        {/* Cycle Timing */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            When to Get Each Test
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Hormone levels fluctuate throughout your menstrual cycle. Testing at the wrong
            time makes results hard to interpret. Use this timing guide when scheduling labs:
          </p>
          <div className="space-y-3">
            {CYCLE_TIMING.map((t) => (
              <div key={t.day} className="flex items-start gap-4 bg-purple-50 rounded-xl px-5 py-4">
                <span className="text-sm font-bold text-purple-600 w-36 shrink-0">{t.day}</span>
                <p className="text-sm text-gray-700">{t.tests}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            If your cycles are irregular or absent, many labs can still be done at any time —
            inform your doctor and they will interpret accordingly.
          </p>
        </section>

        {/* Hormone Labs */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Reproductive Hormone Tests
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            These tests evaluate the hormones directly involved in ovulation, androgens, and
            the PCOS diagnostic criteria. Most doctors order a subset — knowing what to ask
            for ensures you get a complete picture.
          </p>
          <div className="space-y-5">
            {HORMONE_LABS.map((lab) => (
              <div key={lab.test} className="border border-pink-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3">{lab.test}</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Why it matters: </span>
                    <span className="text-gray-600">{lab.why}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex-1 bg-green-50 rounded-lg px-3 py-2">
                      <span className="font-medium text-green-700 text-xs block mb-0.5">Normal range</span>
                      <span className="text-gray-700 text-xs">{lab.normal}</span>
                    </div>
                    <div className="flex-1 bg-pink-50 rounded-lg px-3 py-2">
                      <span className="font-medium text-pink-700 text-xs block mb-0.5">In PCOS</span>
                      <span className="text-gray-700 text-xs">{lab.pcos}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">
                    <span className="font-medium">Best timing:</span> {lab.timing}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Metabolic Labs */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Metabolic & Insulin Tests
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Up to 70% of women with PCOS have{" "}
            <Link href="/insulin-resistance-pcos" className="text-pink-600 hover:underline font-medium">
              insulin resistance
            </Link>
            . These tests identify metabolic dysfunction that drives many PCOS symptoms and
            long-term health risks. Many are not automatically ordered — you may need to ask.
          </p>
          <div className="space-y-5">
            {METABOLIC_LABS.map((lab) => (
              <div key={lab.test} className="border border-pink-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3">{lab.test}</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Why it matters: </span>
                    <span className="text-gray-600">{lab.why}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex-1 bg-green-50 rounded-lg px-3 py-2">
                      <span className="font-medium text-green-700 text-xs block mb-0.5">Normal / Target</span>
                      <span className="text-gray-700 text-xs">{lab.normal}</span>
                    </div>
                    <div className="flex-1 bg-pink-50 rounded-lg px-3 py-2">
                      <span className="font-medium text-pink-700 text-xs block mb-0.5">In PCOS</span>
                      <span className="text-gray-700 text-xs">{lab.pcos}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">
                    <span className="font-medium">Timing:</span> {lab.timing}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Labs */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Other Important Tests
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            These tests rule out conditions that can mimic PCOS and identify treatable
            nutrient deficiencies that worsen symptoms.
          </p>
          <div className="space-y-4">
            {OTHER_LABS.map((lab) => (
              <div key={lab.test} className="border border-pink-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{lab.test}</h3>
                <p className="text-sm text-gray-600 mb-2">{lab.why}</p>
                <div className="flex flex-col sm:flex-row gap-2 text-xs">
                  <div className="flex-1 bg-green-50 rounded-lg px-3 py-2">
                    <span className="font-medium text-green-700">Target: </span>
                    <span className="text-gray-700">{lab.normal}</span>
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-lg px-3 py-2">
                    <span className="font-medium text-gray-600">Timing: </span>
                    <span className="text-gray-600">{lab.timing}</span>
                  </div>
                </div>
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
            Reference ranges and interpretations in this guide are based on published medical
            literature. Individual labs may use slightly different reference ranges.
            Always discuss your specific results with your healthcare provider.
          </p>
        </section>

        {/* Chatbot CTA */}
        <section className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">
            Confused by Your Lab Results?
          </h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">
            Ask our AI assistant to help you understand specific test values,
            what to ask your doctor, or what your results might mean for your
            PCOS management.
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
