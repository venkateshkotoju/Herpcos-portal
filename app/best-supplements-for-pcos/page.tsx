import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import AuthorCard from "@/components/AuthorCard";
import GuideSchema from "@/components/GuideSchema";
import QuickAnswer from "@/components/QuickAnswer";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Best Supplements for PCOS: What the Evidence Actually Shows",
  description:
    "Inositol, vitamin D, and omega-3s have the strongest evidence for PCOS. See which supplements are worth considering, which are unproven, and how to use them safely.",
  alternates: {
    canonical: "/best-supplements-for-pcos",
  },
  openGraph: {
    title: "Best Supplements for PCOS: What the Evidence Actually Shows",
    description:
      "Inositol, vitamin D, and omega-3s have the strongest evidence for PCOS. See which supplements are worth considering, which are unproven, and how to use them safely.",
    url: "https://www.herpcos.com/best-supplements-for-pcos",
    type: "article",
    siteName: "HerPCOS Portal",
    locale: "en_US",
    images: [
      {
        url: "https://www.herpcos.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Best Supplements for PCOS — HerPCOS Portal",
      },
    ],
  },
};

const TOC = [
  { id: "overview", label: "What Supplements Can (and Can't) Do" },
  { id: "strong", label: "Strong Evidence" },
  { id: "moderate", label: "Moderate Evidence" },
  { id: "limited", label: "Limited or Mixed Evidence" },
  { id: "safety", label: "Using Supplements Safely" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const STRONG = [
  {
    name: "Myo-Inositol (± D-Chiro-Inositol)",
    detail: "The most studied PCOS supplement. Improves insulin sensitivity, supports ovulation, and may lower androgens. Most research uses a 40:1 myo-inositol to D-chiro-inositol ratio, roughly mirroring the body's natural balance. See our full inositol guide for dosing.",
  },
  {
    name: "Vitamin D",
    detail: "Deficiency is common in PCOS and is linked to worse insulin resistance and menstrual irregularity. Correcting a confirmed deficiency is one of the better-supported supplement interventions — test your level before supplementing high doses.",
  },
  {
    name: "Omega-3 Fatty Acids",
    detail: "Fish oil supplementation has shown modest improvements in triglycerides, inflammation, and in some studies, menstrual regularity. A reasonable, low-risk addition for most women, especially those who don't eat fatty fish regularly.",
  },
];

const MODERATE = [
  {
    name: "Berberine",
    detail: "A plant compound with insulin-sensitizing effects comparable to metformin in some studies, though research quality and long-term safety data are less robust. Can cause GI side effects and interacts with several medications — discuss with your doctor first.",
  },
  {
    name: "N-Acetylcysteine (NAC)",
    detail: "An antioxidant studied for improving insulin sensitivity and ovulation, with some trials showing effects comparable to metformin for fertility outcomes specifically. Generally well tolerated.",
  },
  {
    name: "Chromium",
    detail: "Some studies show modest improvements in insulin sensitivity, though results are inconsistent across trials. Considered low-risk at standard doses.",
  },
  {
    name: "Cinnamon Extract",
    detail: "Several small trials suggest cinnamon may modestly improve insulin sensitivity and cycle regularity. Evidence is preliminary but the risk profile is low as a dietary addition.",
  },
];

const LIMITED = [
  {
    name: "Saw Palmetto",
    detail: "Sometimes used for androgen-related hair thinning, acting as a mild 5-alpha reductase inhibitor. Evidence specific to PCOS is limited; see our hair loss guide for more context.",
  },
  {
    name: "Zinc",
    detail: "May have mild anti-androgen and anti-inflammatory effects relevant to acne, but evidence specific to broader PCOS outcomes is limited. Testing before high-dose supplementation is reasonable.",
  },
  {
    name: "Spearmint Tea",
    detail: "A couple of small studies suggest possible mild anti-androgen effects, but the evidence base is thin. Low risk as an occasional beverage, but not a primary treatment strategy.",
  },
  {
    name: "Maca Root",
    detail: "Popular in wellness circles for hormone balance, but there is minimal quality research specific to PCOS. Treat claims about maca with caution until better evidence exists.",
  },
];

const SAFETY_TIPS = [
  "Talk to your doctor before starting any supplement, especially if you take metformin, birth control, or other medications",
  "Choose products that are third-party tested (look for USP, NSF, or Informed Choice seals) since supplements aren't FDA-regulated the same way medications are",
  "Test relevant levels (like vitamin D or ferritin) before supplementing high doses rather than guessing",
  "Give supplements 8–12 weeks before judging effectiveness — hormonal changes take time",
  "Be skeptical of any supplement marketed as a 'PCOS cure' — no supplement reverses PCOS on its own",
];

const FAQS = [
  {
    q: "What is the best supplement for PCOS?",
    a: "Myo-inositol has the strongest and most consistent evidence base for PCOS, supporting insulin sensitivity, ovulation, and androgen levels. Vitamin D and omega-3s also have solid supporting evidence, particularly for correcting a confirmed deficiency.",
  },
  {
    q: "Can supplements replace medication for PCOS?",
    a: "For some women with milder insulin resistance, supplements like inositol may reduce or delay the need for medication, but this should be guided by your doctor based on your specific labs and symptoms — not decided on your own. Supplements and medications aren't mutually exclusive; many women use both.",
  },
  {
    q: "Are PCOS supplements safe to take together?",
    a: "Many of the higher-evidence options (inositol, vitamin D, omega-3s) are commonly combined and generally considered safe together. Still, run your full supplement list past your doctor or pharmacist, especially if you're also taking prescription medications, since interactions are possible.",
  },
  {
    q: "How long before supplements start working for PCOS?",
    a: "Most PCOS supplements take 8–12 weeks of consistent use before meaningful changes appear, since they work by gradually shifting insulin sensitivity and hormone levels rather than producing an immediate effect. Cycle regularity often takes a few months to normalize.",
  },
  {
    q: "Do I need to take supplements forever once I start?",
    a: "Not necessarily. Some women use certain supplements (like inositol) long-term as part of an ongoing management plan, while others use them temporarily alongside other lifestyle changes. This is worth revisiting periodically with your doctor based on your symptoms and goals.",
  },
  {
    q: "Should I test my levels before taking vitamin D or iron for PCOS?",
    a: "Yes — testing avoids unnecessary supplementation and helps you dose appropriately. Very high doses of fat-soluble vitamins like vitamin D can accumulate to unsafe levels, and unnecessary iron supplementation can cause its own problems, so testing first is the safer approach.",
  },
];

const CITATIONS = [
  { ref: "1", text: "Unfer V, et al. (2017). Myo-inositol effects in women with PCOS: a meta-analysis of randomized controlled trials. Endocr Connect. 6(8):647–658." },
  { ref: "2", text: "Krul-Poel YHM, et al. (2013). The role of vitamin D in metabolic disturbances in polycystic ovary syndrome: a systematic review. Eur J Endocrinol. 169(6):853–865." },
  { ref: "3", text: "Yang K, et al. (2018). Efficacy of berberine in patients with type 2 diabetes. Endocr J. 65(10):1035–1044." },
  { ref: "4", text: "Thakker D, et al. (2015). N-acetylcysteine for polycystic ovary syndrome: a systematic review and meta-analysis. Obstet Gynecol Int. 2015:817849." },
  { ref: "5", text: "Teede HJ, et al. (2023). International evidence-based guideline for the assessment and management of PCOS. Monash University." },
];

const RELATED = [
  { href: "/what-is-pcos", label: "What Is PCOS?" },
  { href: "/inositol-for-pcos", label: "Inositol for PCOS" },
  { href: "/metformin-for-pcos", label: "Metformin for PCOS" },
  { href: "/pcos-diet", label: "Best Diet for PCOS" },
  { href: "/pcos-acne", label: "PCOS Acne" },
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

export default function BestSupplementsForPcosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="inline-block bg-white/20 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            PCOS Supplements Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Best Supplements for PCOS</h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            Which PCOS supplements have real evidence behind them, which are promising but
            unproven, and how to use them safely.
          </p>
          <p className="text-pink-200 text-xs mt-4">Last reviewed: September 14, 2026</p>
        </div>
      </div>

      <GuideSchema
        title="Best Supplements for PCOS: What the Evidence Actually Shows"
        description="Inositol, vitamin D, and omega-3s have the strongest evidence for PCOS. See which supplements are worth considering, which are unproven, and how to use them safely."
        url="https://www.herpcos.com/best-supplements-for-pcos"
        datePublished="2026-09-14"
        breadcrumbLabel="Best Supplements for PCOS"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <AuthorCard lastUpdated="September 14, 2026" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-10">
        <QuickAnswer
          question="What are the best supplements for PCOS?"
          answer="Myo-inositol, vitamin D (if deficient), and omega-3 fatty acids have the strongest research support for PCOS, primarily by improving insulin sensitivity and supporting more regular ovulation. Berberine and NAC show moderate promise. No supplement replaces medical treatment or reverses PCOS on its own — think of supplements as one part of a broader plan."
        />

        <TableOfContents items={TOC} />

        <section id="overview" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8 scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Supplements Can (and Can&apos;t) Do</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            PCOS supplement marketing can be overwhelming, and not all products are backed by
            equally strong research. This guide organizes the most commonly discussed options by
            the strength of their evidence, so you can make an informed decision with your provider.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Supplements can meaningfully support insulin sensitivity, inflammation, and hormone
            balance for many women, but they work best alongside — not instead of — the
            foundational pieces of PCOS management: nutrition, movement, sleep, and, when
            appropriate, medication. For the full picture, see our{" "}
            <Link href="/pcos-diet" className="text-pink-600 hover:underline font-medium">
              PCOS diet guide
            </Link>.
          </p>
        </section>

        <section id="strong" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Strong Evidence</h2>
          <div className="space-y-4">
            {STRONG.map((s) => (
              <div key={s.name} className="border border-pink-50 rounded-xl p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm">{s.name}</h3>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full shrink-0 bg-green-100 text-green-700">Strong</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="moderate" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Moderate Evidence</h2>
          <div className="space-y-4">
            {MODERATE.map((s) => (
              <div key={s.name} className="border border-pink-50 rounded-xl p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm">{s.name}</h3>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full shrink-0 bg-amber-100 text-amber-700">Moderate</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="limited" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Limited or Mixed Evidence</h2>
          <div className="space-y-4">
            {LIMITED.map((s) => (
              <div key={s.name} className="border border-pink-50 rounded-xl p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm">{s.name}</h3>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full shrink-0 bg-gray-100 text-gray-600">Limited</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="safety" className="bg-amber-50 rounded-2xl border border-amber-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Using Supplements Safely</h2>
          <ul className="space-y-2">
            {SAFETY_TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-amber-500 mt-1 shrink-0">⚠</span>
                {tip}
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
            advice. Supplements can interact with medications and health conditions — always
            consult a qualified healthcare provider before starting one.
          </p>
        </section>

        <section className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Not Sure Which Supplements Are Right for You?</h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">
            Ask our AI assistant to help you think through options based on your symptoms and
            current medications.
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
