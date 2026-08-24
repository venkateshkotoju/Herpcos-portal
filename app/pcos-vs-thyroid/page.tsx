import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import AuthorCard from "@/components/AuthorCard";
import GuideSchema from "@/components/GuideSchema";
import QuickAnswer from "@/components/QuickAnswer";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "PCOS vs. Thyroid Disorders: How to Tell Them Apart",
  description:
    "PCOS and thyroid disorders share overlapping symptoms like fatigue and irregular periods. Learn the differences, the tests that distinguish them, and why you can have both.",
  alternates: {
    canonical: "/pcos-vs-thyroid",
  },
  openGraph: {
    title: "PCOS vs. Thyroid Disorders: How to Tell Them Apart",
    description:
      "PCOS and thyroid disorders share overlapping symptoms like fatigue and irregular periods. Learn the differences, the tests that distinguish them, and why you can have both.",
    url: "https://www.herpcos.com/pcos-vs-thyroid",
    type: "article",
    siteName: "HerPCOS Portal",
    locale: "en_US",
    images: [
      {
        url: "https://www.herpcos.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PCOS vs Thyroid — HerPCOS Portal",
      },
    ],
  },
};

const TOC = [
  { id: "overview", label: "Why These Conditions Get Confused" },
  { id: "comparison", label: "PCOS vs. Thyroid: Key Differences" },
  { id: "both", label: "Can You Have Both?" },
  { id: "tests", label: "The Tests That Tell Them Apart" },
  { id: "doctor", label: "What to Do Next" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const OVERLAP = [
  { icon: "📅", title: "Irregular Periods", desc: "Both PCOS and thyroid disorders (especially hypothyroidism) can disrupt menstrual regularity, though through different hormonal mechanisms." },
  { icon: "😴", title: "Fatigue", desc: "A hallmark symptom of hypothyroidism, and also extremely common in PCOS due to insulin resistance and disrupted sleep." },
  { icon: "⚖️", title: "Weight Changes", desc: "Hypothyroidism classically causes weight gain from a slowed metabolism; PCOS-related weight changes stem primarily from insulin resistance." },
  { icon: "💇", title: "Hair Thinning", desc: "Both conditions can cause hair loss, but through different patterns — androgenic (PCOS) vs. diffuse (thyroid)." },
  { icon: "🌡️", title: "Mood Changes", desc: "Depression and anxiety are more common in both PCOS and thyroid disorders, making mood symptoms unhelpful for distinguishing between them alone." },
  { icon: "🥶", title: "Skin & Temperature Changes", desc: "Hypothyroidism often causes dry skin and cold intolerance, which aren't typical PCOS features — a useful distinguishing clue." },
];

const COMPARISON = [
  { feature: "Primary cause", pcos: "Hormonal imbalance affecting ovulation and androgen levels", thyroid: "Thyroid gland producing too much or too little hormone" },
  { feature: "Key hormone(s)", pcos: "Elevated androgens (testosterone), often high LH:FSH ratio", thyroid: "Abnormal TSH and Free T4 (thyroid-stimulating hormone and thyroxine)" },
  { feature: "Diagnostic test", pcos: "Clinical criteria + androgen labs + pelvic ultrasound", thyroid: "TSH, Free T4, and thyroid antibody blood tests" },
  { feature: "Distinctive symptoms", pcos: "Acne, hirsutism, androgenic hair loss, polycystic ovaries on ultrasound", thyroid: "Cold intolerance (hypo) or heat intolerance (hyper), dry skin, changes in heart rate" },
  { feature: "Autoimmune link", pcos: "Not classically autoimmune, though inflammation plays a role", thyroid: "Often autoimmune (Hashimoto's or Graves' disease)" },
];

const TESTS = [
  { name: "TSH (Thyroid-Stimulating Hormone)", detail: "The primary screening test for thyroid function. High TSH suggests an underactive thyroid; low TSH suggests an overactive one." },
  { name: "Free T4", detail: "Measures actual circulating thyroid hormone, used alongside TSH to confirm and characterize a thyroid abnormality." },
  { name: "Thyroid Peroxidase (TPO) Antibodies", detail: "Checks for autoimmune thyroid disease (Hashimoto's), which is more common in women with PCOS than in the general population." },
  { name: "Total & Free Testosterone", detail: "Elevated in most PCOS cases; not typically affected by thyroid disorders alone." },
  { name: "LH and FSH", detail: "An elevated LH-to-FSH ratio is a common (though not universal) PCOS pattern, distinct from thyroid-driven hormonal shifts." },
  { name: "Pelvic Ultrasound", detail: "Looks for the polycystic ovarian appearance sometimes seen in PCOS — not relevant to thyroid diagnosis, but useful when both are being evaluated together." },
];

const FAQS = [
  {
    q: "Can PCOS symptoms mimic a thyroid disorder?",
    a: "Yes — both conditions can cause irregular periods, fatigue, weight changes, hair thinning, and mood changes, which is why they're commonly confused, especially in the early stages before blood work is done. The distinguishing symptoms tend to be androgen-related (acne, hirsutism) for PCOS and temperature/metabolism-related (cold intolerance, dry skin) for thyroid disease.",
  },
  {
    q: "Can you have both PCOS and a thyroid disorder?",
    a: "Yes, and it's more common than you might expect. Research shows autoimmune thyroid disease (particularly Hashimoto's thyroiditis) occurs more frequently in women with PCOS than in the general population. This is why a full thyroid panel is typically recommended as part of a PCOS workup, and vice versa.",
  },
  {
    q: "What blood test tells the difference between PCOS and thyroid disease?",
    a: "A TSH and Free T4 test evaluates thyroid function, while androgen levels (total and free testosterone, DHEAS) and an LH:FSH ratio point toward PCOS. Because the two aren't mutually exclusive, both panels are often ordered together when symptoms overlap.",
  },
  {
    q: "Does treating my thyroid fix my PCOS symptoms?",
    a: "If your thyroid was contributing to some symptoms (like fatigue or irregular cycles), correcting it can help those specific symptoms. But if you also have PCOS, treating your thyroid alone won't resolve PCOS-driven symptoms like elevated androgens or insulin resistance — both conditions need to be addressed on their own terms.",
  },
  {
    q: "Why does my doctor want to test my thyroid if I already have a PCOS diagnosis?",
    a: "Because thyroid disorders are more common in women with PCOS and cause overlapping symptoms, ruling out (or identifying and treating) a thyroid issue helps ensure you're not missing a second, separately treatable condition contributing to how you feel.",
  },
  {
    q: "Which is more common, PCOS or thyroid disease?",
    a: "PCOS affects an estimated 8–13% of women of reproductive age, while thyroid disorders (particularly hypothyroidism) affect a slightly smaller but still substantial portion of women, with rates increasing with age. Both are common enough that overlap is expected, not rare.",
  },
];

const CITATIONS = [
  { ref: "1", text: "Romitti M, et al. (2018). Association between PCOS and autoimmune thyroid disease: a systematic review and meta-analysis. Eur J Endocrinol. 179(4):R79–R87." },
  { ref: "2", text: "Teede HJ, et al. (2023). International evidence-based guideline for the assessment and management of PCOS. Monash University." },
  { ref: "3", text: "Garber JR, et al. (2012). Clinical practice guidelines for hypothyroidism in adults. Endocr Pract. 18(6):988–1028." },
  { ref: "4", text: "Singla R, et al. (2015). Thyroid disorders and polycystic ovary syndrome: an emerging relationship. Indian J Endocrinol Metab. 19(1):25–29." },
  { ref: "5", text: "Legro RS, et al. (2013). Diagnosis and treatment of PCOS: An Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 98(12):4565–4592." },
];

const RELATED = [
  { href: "/what-is-pcos", label: "What Is PCOS?" },
  { href: "/pcos-lab-results", label: "PCOS Lab Results" },
  { href: "/pcos-symptoms", label: "PCOS Symptoms Guide" },
  { href: "/pcos-fatigue", label: "PCOS Fatigue" },
  { href: "/pcos-irregular-periods", label: "PCOS & Irregular Periods" },
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

export default function PcosVsThyroidPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="inline-block bg-white/20 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            PCOS Diagnosis Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">PCOS vs. Thyroid Disorders</h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            How to tell PCOS and thyroid conditions apart, the tests that distinguish them, and
            why you can have both at the same time.
          </p>
          <p className="text-pink-200 text-xs mt-4">Last reviewed: September 21, 2026</p>
        </div>
      </div>

      <GuideSchema
        title="PCOS vs. Thyroid Disorders: How to Tell Them Apart"
        description="PCOS and thyroid disorders share overlapping symptoms like fatigue and irregular periods. Learn the differences, the tests that distinguish them, and why you can have both."
        url="https://www.herpcos.com/pcos-vs-thyroid"
        datePublished="2026-09-21"
        breadcrumbLabel="PCOS vs. Thyroid"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <AuthorCard lastUpdated="September 21, 2026" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-10">
        <QuickAnswer
          question="How do you tell the difference between PCOS and a thyroid disorder?"
          answer="PCOS and thyroid disorders share overlapping symptoms — irregular periods, fatigue, and weight changes — but PCOS is distinguished by elevated androgens (acne, hirsutism, androgenic hair loss) while thyroid disorders show up in TSH and Free T4 blood tests, often with distinct symptoms like cold intolerance or dry skin. Because the two can occur together, doctors typically test for both when symptoms overlap."
        />

        <TableOfContents items={TOC} />

        <section id="overview" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8 scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why These Conditions Get Confused</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            PCOS and thyroid disorders are two of the most common hormonal conditions affecting
            women, and they share enough overlapping symptoms — irregular periods, fatigue, hair
            changes, weight shifts — that it&apos;s genuinely difficult to tell them apart based on
            symptoms alone.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The good news is that both are identified through relatively simple blood tests, and
            getting the right diagnosis (or diagnoses — you can have both) makes a real difference
            in how effectively each condition is treated. If you haven&apos;t reviewed the basics of
            PCOS yet, start with our{" "}
            <Link href="/what-is-pcos" className="text-pink-600 hover:underline font-medium">
              What Is PCOS guide
            </Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Where the Symptoms Overlap</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {OVERLAP.map((o) => (
              <div key={o.title} className="bg-white rounded-2xl border border-pink-100 shadow-sm p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{o.icon}</span>
                  <h3 className="font-semibold text-gray-900 text-sm">{o.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="comparison" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">PCOS vs. Thyroid: Key Differences</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-pink-100">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-left py-3 pr-4 font-semibold text-pink-600">PCOS</th>
                  <th className="text-left py-3 font-semibold text-purple-600">Thyroid Disorder</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.feature} className="border-b border-pink-50">
                    <td className="py-3 pr-4 font-medium text-gray-700 align-top">{row.feature}</td>
                    <td className="py-3 pr-4 text-gray-600 align-top">{row.pcos}</td>
                    <td className="py-3 text-gray-600 align-top">{row.thyroid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="both" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Can You Have Both?</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Yes — and it&apos;s more common than many people realize. Research shows autoimmune
            thyroid disease, particularly Hashimoto&apos;s thyroiditis, occurs at higher rates in
            women with PCOS than in the general population. The exact reason isn&apos;t fully
            understood, but shared inflammatory and autoimmune pathways are thought to play a role.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This is precisely why a thyroid panel is a standard part of a thorough PCOS workup —
            not to rule PCOS out, but to check for a second, separately treatable condition that
            could be contributing to your symptoms.
          </p>
        </section>

        <section id="tests" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">The Tests That Tell Them Apart</h2>
          <div className="space-y-4">
            {TESTS.map((t) => (
              <div key={t.name} className="border border-pink-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{t.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            For a full breakdown of what each PCOS-related lab value means, see our{" "}
            <Link href="/pcos-lab-results" className="text-pink-600 hover:underline font-medium">
              PCOS lab results guide
            </Link>.
          </p>
        </section>

        <section id="doctor" className="bg-amber-50 rounded-2xl border border-amber-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Do Next</h2>
          <ul className="space-y-2">
            {[
              "Ask your doctor for a full thyroid panel (TSH, Free T4, and TPO antibodies) alongside any PCOS-related testing",
              "Track your symptoms, including anything that doesn't fit the typical PCOS picture (like cold intolerance or dry skin)",
              "Don't assume one diagnosis rules out the other — both conditions can and do coexist",
              "Follow up on abnormal results with the appropriate specialist (endocrinologist, OB-GYN, or both)",
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
            This content is for informational purposes only and does not constitute medical
            advice. Always consult a qualified healthcare provider for diagnosis and treatment.
          </p>
        </section>

        <section className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Not Sure If It&apos;s PCOS, Thyroid, or Both?</h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">
            Ask our AI assistant about your symptoms and which tests to ask your doctor about.
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
