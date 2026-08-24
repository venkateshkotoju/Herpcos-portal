import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import AuthorCard from "@/components/AuthorCard";
import GuideSchema from "@/components/GuideSchema";
import QuickAnswer from "@/components/QuickAnswer";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "PCOS Acne: Why It Happens & How to Actually Treat It",
  description:
    "PCOS acne is caused by excess androgens and insulin resistance, often showing up along the jawline and chin. Learn why it happens and which treatments work.",
  alternates: {
    canonical: "/pcos-acne",
  },
  openGraph: {
    title: "PCOS Acne: Why It Happens & How to Actually Treat It",
    description:
      "PCOS acne is caused by excess androgens and insulin resistance, often showing up along the jawline and chin. Learn why it happens and which treatments work.",
    url: "https://www.herpcos.com/pcos-acne",
    type: "article",
    siteName: "HerPCOS Portal",
    locale: "en_US",
    images: [
      {
        url: "https://www.herpcos.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PCOS Acne — HerPCOS Portal",
      },
    ],
  },
};

const TOC = [
  { id: "overview", label: "The PCOS-Acne Connection" },
  { id: "why", label: "Why PCOS Causes Acne" },
  { id: "how-different", label: "How PCOS Acne Differs From Regular Acne" },
  { id: "treatments", label: "Treatment Options That Work" },
  { id: "diet-lifestyle", label: "Diet & Lifestyle Support" },
  { id: "doctor", label: "When to See a Doctor" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const CAUSES = [
  {
    icon: "🔬",
    title: "Elevated Androgens",
    desc: "Excess testosterone and other androgens overstimulate sebaceous (oil) glands, causing them to produce more sebum. Oilier skin combined with clogged pores creates the ideal environment for acne-causing bacteria to thrive.",
  },
  {
    icon: "📈",
    title: "Insulin Resistance",
    desc: "High circulating insulin pushes the ovaries and adrenal glands to make more androgens, and it also increases a growth factor (IGF-1) that directly stimulates oil production. This is why acne and blood sugar are so closely linked in PCOS.",
  },
  {
    icon: "🔥",
    title: "Low-Grade Inflammation",
    desc: "PCOS is associated with chronic, low-grade systemic inflammation. Inflammatory skin cells are more prone to clogging and irritation, which can make breakouts more inflamed, deeper, and slower to heal.",
  },
  {
    icon: "🔄",
    title: "Hormonal Fluctuations",
    desc: "Irregular cycles mean estrogen and progesterone don't rise and fall predictably. Because estrogen has some protective, skin-calming effects, irregular or absent ovulation can leave androgens relatively unopposed for longer stretches.",
  },
  {
    icon: "🧬",
    title: "Genetics",
    desc: "A family history of both PCOS and acne is common — genetic variations that affect androgen receptor sensitivity can make certain people's skin react more strongly to the same hormone levels as someone else.",
  },
];

const DIFFERENCES = [
  "Tends to cluster along the jawline, chin, and lower cheeks rather than the T-zone",
  "Often deep, cystic, and tender rather than surface-level whiteheads",
  "Flares in a cyclical pattern tied to your cycle (or lack of one)",
  "Persists into adulthood rather than resolving after the teenage years",
  "Frequently resistant to over-the-counter acne washes alone",
];

const TREATMENTS = [
  {
    category: "Topical Treatments",
    treatments: [
      {
        name: "Topical Retinoids",
        detail: "Prescription-strength tretinoin or adapalene (available OTC at lower strength) normalize skin cell turnover and prevent clogged pores. First-line for most acne types, including hormonal acne. Start low and slow to reduce irritation.",
        type: "First-line",
      },
      {
        name: "Azelaic Acid",
        detail: "A gentler option that reduces inflammation, bacteria, and pigmentation left behind by old breakouts. Well tolerated, available by prescription or in lower-strength OTC formulas, and safe during pregnancy.",
        type: "First-line",
      },
      {
        name: "Benzoyl Peroxide",
        detail: "Kills acne-causing bacteria and reduces inflammation. Often paired with a retinoid for a more complete routine. Can bleach fabrics and towels, so use light-colored linens.",
        type: "OTC",
      },
    ],
  },
  {
    category: "Hormonal & Prescription Treatments",
    treatments: [
      {
        name: "Combined Oral Contraceptives",
        detail: "Pills containing an anti-androgenic progestin (such as drospirenone) lower free testosterone and are FDA-approved for hormonal acne. Often the most effective single intervention for cyclical, jawline breakouts.",
        type: "Prescription",
      },
      {
        name: "Spironolactone",
        detail: "An anti-androgen that blocks testosterone's effect at the skin level. Frequently combined with a topical routine or birth control for stubborn hormonal acne. Not used during pregnancy.",
        type: "Prescription",
      },
      {
        name: "Metformin",
        detail: "By improving insulin sensitivity, metformin can indirectly reduce androgen-driven acne, especially in women with confirmed insulin resistance. Effects on skin are gradual — expect changes over 3–6 months.",
        type: "Prescription",
      },
    ],
  },
  {
    category: "Supplements With Evidence",
    treatments: [
      {
        name: "Myo-Inositol",
        detail: "Improves insulin sensitivity and lowers androgens, which can reduce breakouts over time as part of a broader PCOS management plan. See our full inositol guide for dosing details.",
        type: "Supplement",
      },
      {
        name: "Zinc",
        detail: "Has anti-inflammatory and mild anti-androgen properties. Several small trials show improvement in inflammatory acne with zinc supplementation, particularly in people with low baseline levels.",
        type: "Supplement",
      },
      {
        name: "Omega-3 Fatty Acids",
        detail: "May reduce inflammatory acne lesions by lowering overall inflammation. A reasonable, low-risk addition to a broader skin and hormone strategy.",
        type: "Supplement",
      },
    ],
  },
];

const DIET_TIPS = [
  "Favor a lower glycemic-load diet — swapping refined carbs and sugary drinks for whole grains, protein, and fiber helps blunt the insulin spikes that drive androgen production",
  "Include fatty fish, walnuts, or flaxseed a few times a week for anti-inflammatory omega-3s",
  "Limit dairy if you notice a personal pattern — some (not all) women report fewer breakouts on a lower-dairy diet, though evidence is mixed",
  "Stay consistent rather than perfect — hormonal acne responds to weeks-to-months of steady habits, not a single 'clean' day",
  "Manage stress where you can; cortisol can indirectly worsen androgen-driven breakouts",
  "Avoid picking or over-exfoliating, which can turn inflammatory acne into scarring",
];

const FAQS = [
  {
    q: "What does PCOS acne look like?",
    a: "PCOS-related hormonal acne typically appears as deep, tender bumps concentrated along the jawline, chin, and lower cheeks. It tends to be cyclical, flaring around certain points in your cycle (or unpredictably if your cycles are irregular), and is often more resistant to standard acne washes than typical teenage acne.",
  },
  {
    q: "How long does it take to clear PCOS acne?",
    a: "Because it's hormonally driven, PCOS acne responds more slowly than surface-level acne. Topical treatments typically take 8–12 weeks to show real improvement, while hormonal treatments (birth control, spironolactone) often take 3–6 months to reach their full effect. Consistency matters more than any single product.",
  },
  {
    q: "Can PCOS acne go away without medication?",
    a: "For some women, improving insulin sensitivity through diet, exercise, and weight management (if applicable) meaningfully reduces breakouts. However, if androgen levels remain elevated, many women need a topical or hormonal treatment to see full clearance. There's no single fix that works for everyone — it often takes a combined approach.",
  },
  {
    q: "Is PCOS acne the same as regular acne?",
    a: "The underlying process — clogged pores, bacteria, inflammation — is similar, but the trigger is different. PCOS acne is driven primarily by excess androgens and insulin resistance rather than just excess surface oil, which is why it often needs treatments that address hormones, not just topical skin care.",
  },
  {
    q: "Does birth control help PCOS acne?",
    a: "Combined oral contraceptives containing an anti-androgenic progestin are FDA-approved for hormonal acne and are one of the most effective single treatments available. They work by lowering free testosterone levels. They're not right for everyone, so discuss your full health history with your provider.",
  },
  {
    q: "Should I see a dermatologist or my OB-GYN for PCOS acne?",
    a: "Either can help, and they often work best together. A dermatologist can build a topical and prescription skin-care plan, while your OB-GYN or endocrinologist can address the underlying hormonal and insulin drivers. If your acne is severe, cystic, or scarring, prioritize a dermatologist referral.",
  },
];

const CITATIONS = [
  { ref: "1", text: "Housman E, Reynolds RV. (2014). Polycystic ovary syndrome: A review for dermatologists. J Am Acad Dermatol. 71(5):847.e1–847.e10." },
  { ref: "2", text: "Zaenglein AL, et al. (2016). Guidelines of care for the management of acne vulgaris. J Am Acad Dermatol. 74(5):945–973.e33." },
  { ref: "3", text: "Legro RS, et al. (2013). Diagnosis and treatment of PCOS: An Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 98(12):4565–4592." },
  { ref: "4", text: "Fabbrocini G, et al. (2010). Acne, quality of life and psychological state. Dermatoendocrinol. 2(1):23–27." },
  { ref: "5", text: "Elsaie ML. (2016). Hormonal treatment of acne vulgaris: an update. Clin Cosmet Investig Dermatol. 9:241–248." },
];

const RELATED = [
  { href: "/what-is-pcos", label: "What Is PCOS?" },
  { href: "/pcos-symptoms", label: "PCOS Symptoms Guide" },
  { href: "/pcos-hair-loss", label: "PCOS Hair Loss" },
  { href: "/insulin-resistance-pcos", label: "Insulin Resistance & PCOS" },
  { href: "/best-supplements-for-pcos", label: "Best Supplements for PCOS" },
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

export default function PcosAcnePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="inline-block bg-white/20 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            PCOS Symptom Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">PCOS Acne</h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            Why hormonal acne shows up along your jawline with PCOS, how it&apos;s different
            from typical breakouts, and the treatments that actually work.
          </p>
          <p className="text-pink-200 text-xs mt-4">Last reviewed: August 24, 2026</p>
        </div>
      </div>

      <GuideSchema
        title="PCOS Acne: Why It Happens & How to Actually Treat It"
        description="PCOS acne is caused by excess androgens and insulin resistance, often showing up along the jawline and chin. Learn why it happens and which treatments work."
        url="https://www.herpcos.com/pcos-acne"
        datePublished="2026-08-24"
        breadcrumbLabel="PCOS Acne"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <AuthorCard lastUpdated="August 24, 2026" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-10">
        <QuickAnswer
          question="Why does PCOS cause acne?"
          answer="PCOS acne is driven mainly by elevated androgens (like testosterone) and insulin resistance, both of which increase oil production and inflammation in the skin. It typically appears as deep, tender breakouts along the jawline and chin, and it usually responds best to treatments that address hormones and insulin — not just topical skin care alone."
        />

        <TableOfContents items={TOC} />

        <section id="overview" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8 scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The PCOS-Acne Connection</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Acne is one of the most common — and most emotionally difficult — symptoms of PCOS.
            Studies suggest that roughly <strong>a third to a half of women with PCOS</strong> experience
            acne beyond their teenage years, often persisting well into their 20s, 30s, and beyond.
          </p>
          <p className="text-gray-600 leading-relaxed mb-3">
            Unlike typical teenage acne, which usually improves with basic skin care, PCOS-related
            hormonal acne is driven by an internal hormonal imbalance. That means it frequently
            resists over-the-counter washes and spot treatments until the underlying androgen and
            insulin picture is addressed.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The encouraging news is that hormonal acne is very treatable once you understand what&apos;s
            driving it. If you haven&apos;t reviewed your full symptom picture yet, start with our{" "}
            <Link href="/pcos-symptoms" className="text-pink-600 hover:underline font-medium">
              PCOS symptoms guide
            </Link>{" "}
            for context on how acne fits alongside other signs of PCOS.
          </p>
        </section>

        <section id="why">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why PCOS Causes Acne</h2>
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

        <section id="how-different" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How PCOS Acne Differs From Regular Acne</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Not all acne is the same, and recognizing the hormonal pattern can help you and your
            provider choose the right treatment faster. PCOS-related acne commonly:
          </p>
          <ul className="space-y-2">
            {DIFFERENCES.map((d) => (
              <li key={d} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-pink-500 mt-1 shrink-0">✓</span>
                {d}
              </li>
            ))}
          </ul>
        </section>

        {TREATMENTS.map((group) => (
          <section key={group.category} className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8" id={group.category === "Topical Treatments" ? "treatments" : undefined}>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">{group.category}</h2>
            <div className="space-y-4">
              {group.treatments.map((t) => (
                <div key={t.name} className="border border-pink-50 rounded-xl p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900 text-sm">{t.name}</h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${
                      t.type === "First-line" ? "bg-green-100 text-green-700" : t.type === "Prescription" ? "bg-amber-100 text-amber-700" : "bg-pink-100 text-pink-700"
                    }`}>
                      {t.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{t.detail}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section id="diet-lifestyle" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Diet & Lifestyle Support</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Because insulin resistance is such a strong driver of hormonal acne, dietary changes
            that stabilize blood sugar can meaningfully support (though not replace) medical treatment.
            For a full plan, see our{" "}
            <Link href="/pcos-diet" className="text-pink-600 hover:underline font-medium">
              PCOS diet guide
            </Link>.
          </p>
          <ul className="space-y-3">
            {DIET_TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-pink-500 mt-1 shrink-0">✓</span>
                {tip}
              </li>
            ))}
          </ul>
        </section>

        <section id="doctor" className="bg-amber-50 rounded-2xl border border-amber-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When to See a Doctor</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Reach out to a dermatologist or your OB-GYN if:</p>
          <ul className="space-y-2">
            {[
              "Your acne is cystic, painful, or leaving scars",
              "Over-the-counter treatments haven't helped after 2–3 months of consistent use",
              "Breakouts are accompanied by other signs of high androgens, like excess facial hair or hair thinning",
              "Acne is affecting your confidence or mental health",
              "You haven't yet been evaluated for PCOS despite a pattern of jawline breakouts and irregular periods",
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
          <h2 className="text-2xl font-bold mb-3">Have Questions About PCOS Acne?</h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">
            Ask our AI assistant about which treatments to try first and how to talk to your
            doctor about hormonal acne.
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
