import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import AuthorCard from "@/components/AuthorCard";
import GuideSchema from "@/components/GuideSchema";

export const metadata: Metadata = {
  title: "PCOS Hair Loss: Why It Happens & What Actually Helps",
  description:
    "PCOS causes hair loss through elevated androgens and DHT. Learn why it happens, which treatments work, and what to expect.",
  openGraph: {
    title: "PCOS Hair Loss: Why It Happens & What Actually Helps",
    description:
      "PCOS causes hair loss through elevated androgens and DHT. Learn why it happens, which treatments work (minoxidil, spironolactone, supplements), and what to expect.",
    url: "https://herpcos.com/pcos-hair-loss",
    type: "article",
    siteName: "HerPCOS Portal",
    locale: "en_US",
    images: [
      {
        url: "https://herpcos.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PCOS Hair Loss — HerPCOS Portal",
      },
    ],
  },
};

const CAUSES = [
  {
    icon: "🔬",
    title: "Elevated Androgens (Testosterone)",
    desc: "Most women with PCOS produce excess androgens. Hair follicles on the scalp are sensitive to testosterone and its more potent derivative DHT, which shrinks them over time — causing hairs to become thinner and shorter with each growth cycle.",
  },
  {
    icon: "⚡",
    title: "DHT (Dihydrotestosterone)",
    desc: "Testosterone converts to DHT via an enzyme called 5-alpha reductase. DHT binds strongly to hair follicle receptors, shortening the growth phase and eventually causing the follicle to stop producing hair. This is the same mechanism as male-pattern baldness.",
  },
  {
    icon: "📈",
    title: "Insulin Resistance",
    desc: "High insulin levels stimulate the ovaries to produce more androgens and may also directly sensitize hair follicles to androgen damage. Improving insulin sensitivity often slows hair loss as a side effect.",
  },
  {
    icon: "😰",
    title: "Cortisol & Stress",
    desc: "Women with PCOS tend to have dysregulated cortisol levels. Chronic stress and high cortisol can trigger telogen effluvium — a type of diffuse shedding — which compounds androgenic hair loss.",
  },
  {
    icon: "🥗",
    title: "Nutritional Deficiencies",
    desc: "Iron deficiency (common with heavy PCOS periods), low zinc, and inadequate protein can all worsen hair loss independent of androgens. Getting key nutrients tested can reveal treatable contributors.",
  },
];

const TREATMENTS = [
  {
    category: "Medical Treatments",
    treatments: [
      {
        name: "Minoxidil (Rogaine)",
        detail: "FDA-approved for female hair loss. Applied to the scalp once or twice daily, it prolongs the hair growth phase and increases follicle size. Available OTC. Results take 4–6 months; must be used continuously.",
        type: "First-line",
      },
      {
        name: "Spironolactone",
        detail: "A prescription anti-androgen that blocks testosterone's effect on hair follicles. Often used in PCOS for both hair loss and hirsutism. Not suitable during pregnancy. Requires a doctor's prescription.",
        type: "Prescription",
      },
      {
        name: "Oral Contraceptives",
        detail: "Combined pills containing low-androgen progestins (like drospirenone) reduce free testosterone, which can slow androgenic hair loss and reduce hirsutism. Takes 6–12 months to see scalp improvement.",
        type: "Prescription",
      },
      {
        name: "Finasteride / Dutasteride",
        detail: "5-alpha reductase inhibitors that block DHT production. Sometimes prescribed off-label for women with PCOS-related hair loss, but require strict contraception due to birth defect risk.",
        type: "Off-label",
      },
    ],
  },
  {
    category: "Supplements with Evidence",
    treatments: [
      {
        name: "Saw Palmetto",
        detail: "A natural 5-alpha reductase inhibitor that may block DHT. Weaker than finasteride but available OTC. Some positive studies in androgenic alopecia. Generally safe; start at 320 mg/day.",
        type: "Supplement",
      },
      {
        name: "Inositol (Myo-Inositol)",
        detail: "Reduces insulin and androgen levels, which indirectly reduces DHT-driven hair loss. Works best as part of an overall PCOS management plan. See our inositol guide for full details.",
        type: "Supplement",
      },
      {
        name: "Zinc",
        detail: "Zinc has mild anti-androgen properties and is essential for hair growth. Deficiency worsens hair loss. Test your zinc levels first; supplement at 25–50 mg/day if deficient.",
        type: "Supplement",
      },
      {
        name: "Iron (Ferritin)",
        detail: "Low ferritin (stored iron) is a common, treatable cause of hair shedding — even without anaemia. Target a ferritin level above 70 ng/mL for optimal hair growth. Test before supplementing.",
        type: "Supplement",
      },
    ],
  },
];

const HAIR_CARE_TIPS = [
  "Use a gentle, sulphate-free shampoo to reduce scalp irritation and breakage",
  "Avoid tight hairstyles (ponytails, buns) that cause traction alopecia on already fragile hair",
  "Use a wide-tooth comb on wet hair, starting from the ends upward",
  "Limit heat styling — use the lowest effective temperature and always use heat protectant",
  "Try scalp massages for 4 minutes daily — a 2019 study showed this can increase hair thickness",
  "Eat adequate protein (aim for 1.2–1.6g per kg body weight) — hair is 95% keratin protein",
  "Consider a hair-specific supplement like Nutrafol Women&apos;s Balance, which contains ashwagandha and tocotrienols",
];

const FAQS = [
  {
    q: "Is PCOS hair loss permanent?",
    a: "Not necessarily. Androgenic alopecia from PCOS involves follicle miniaturization, but as long as the follicle is still present, it can potentially respond to treatment. The sooner you act, the better — follicles that have been dormant for many years are harder to reactivate. Early treatment with minoxidil and anti-androgens gives the best outcomes.",
  },
  {
    q: "Does PCOS cause hair loss on the scalp or hair growth elsewhere?",
    a: "Both. PCOS-related androgen excess causes a paradox: androgenic alopecia (scalp hair thinning, especially at the part or crown) alongside hirsutism (excess hair growth on the face, chest, and abdomen). The same hormones cause both patterns simultaneously in different body areas.",
  },
  {
    q: "How is PCOS hair loss different from normal shedding?",
    a: "Normal hair loss is 50–100 strands per day. PCOS-related androgenic alopecia causes gradual thinning rather than sudden shedding — you'll notice your part widening, your scalp becoming more visible, or individual hairs becoming finer. Telogen effluvium (sudden diffuse shedding) can also occur in PCOS, often triggered by stress or hormonal shifts.",
  },
  {
    q: "What blood tests should I get for PCOS hair loss?",
    a: "Ask your doctor to check: total and free testosterone, DHEAS (adrenal androgen), ferritin (iron stores), thyroid panel (TSH, Free T4), zinc, and vitamin D. These tests help distinguish androgenic alopecia from other treatable causes and guide the right treatment approach.",
  },
  {
    q: "Can diet help with PCOS hair loss?",
    a: "Yes — a low-GI diet that reduces insulin levels indirectly lowers androgen production, which can slow androgenic hair loss. Adequate iron, zinc, and protein from food are also essential. Anti-inflammatory foods (oily fish, berries, leafy greens) may help reduce the inflammatory component of PCOS that contributes to follicle damage.",
  },
  {
    q: "Will my hair grow back after treating PCOS?",
    a: "With effective treatment (controlling androgens, using minoxidil), many women experience slowing or halting of hair loss, and some experience regrowth. Results are best when treatment starts early. Regrowth takes at least 6–12 months, and results vary by individual. Set realistic expectations — the goal is often to preserve and strengthen existing hair while stimulating some regrowth.",
  },
];

const CITATIONS = [
  {
    ref: "1",
    text: "Herskovitz I, Tosti A. (2013). Female Pattern Hair Loss. Int J Endocrinol Metab. 11(4):e9860.",
  },
  {
    ref: "2",
    text: "Vexiau P, et al. (2002). Effects of minoxidil versus cyproterone acetate/ethinylestradiol on female androgenetic alopecia: a controlled, randomized, comparative trial. Dermatology. 204(3):232–234.",
  },
  {
    ref: "3",
    text: "Kanti V, et al. (2018). Evidence-based (S3) guideline for the treatment of androgenetic alopecia in women. J Dtsch Dermatol Ges. 16(S2):1–29.",
  },
  {
    ref: "4",
    text: "Trost LB, et al. (2006). The diagnosis and treatment of iron deficiency and its potential relationship to hair loss. J Am Acad Dermatol. 54(5):824–844.",
  },
  {
    ref: "5",
    text: "Fukuyama M, et al. (2022). Efficacy of Scalp Massage in Androgenetic Alopecia. J Clin Med. 11(8):2307.",
  },
];

const RELATED = [
  { href: "/pcos-symptoms", label: "PCOS Symptoms Guide" },
  { href: "/inositol-for-pcos", label: "Inositol for PCOS" },
  { href: "/pcos-diet", label: "Best Diet for PCOS" },
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

export default function PcosHairLossPage() {
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
            PCOS Symptom Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            PCOS Hair Loss
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            Why PCOS causes scalp hair thinning, which treatments are backed
            by evidence, and how to build an effective strategy to slow loss
            and encourage regrowth.
          </p>
          <p className="text-pink-200 text-xs mt-4">Last reviewed: June 25, 2025</p>
        </div>
      </div>

      <GuideSchema
        title="PCOS Hair Loss: Why It Happens & What Actually Helps"
        description="PCOS causes hair loss through elevated androgens and DHT. Learn why it happens, which treatments work (minoxidil, spironolactone, supplements), and what to expect."
        url="https://herpcos.com/pcos-hair-loss"
        datePublished="2025-06-25"
        breadcrumbLabel="PCOS Hair Loss"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <AuthorCard lastUpdated="June 25, 2025" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-10">

        {/* Overview */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The PCOS-Hair Loss Connection
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Hair loss is one of the most distressing — and least talked about — symptoms of PCOS.
            Approximately <strong>40–70% of women with PCOS</strong> experience some degree of scalp
            hair thinning, medically known as <em>androgenic alopecia</em> or female pattern hair loss.
          </p>
          <p className="text-gray-600 leading-relaxed mb-3">
            What makes PCOS-related hair loss particularly confusing is the paradox: the same hormonal
            imbalance that causes scalp hair to thin also causes excess hair growth on the face and body
            (hirsutism). This seems contradictory — but different hair follicles respond differently to
            the same androgens, depending on their location and genetic sensitivity.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The good news: PCOS hair loss is treatable, especially when caught early. Understanding
            why it happens is the first step to choosing the right treatment approach. If you haven&apos;t
            yet confirmed your hormone levels, our{" "}
            <Link href="/pcos-lab-results" className="text-pink-600 hover:underline font-medium">
              PCOS lab results guide
            </Link>{" "}
            explains which tests to ask for.
          </p>
        </section>

        {/* Causes */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why PCOS Causes Hair Loss
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CAUSES.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-2xl border border-pink-100 shadow-sm p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{c.icon}</span>
                  <h3 className="font-semibold text-gray-900 text-sm">{c.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Treatments */}
        {TREATMENTS.map((group) => (
          <section key={group.category} className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">{group.category}</h2>
            <div className="space-y-4">
              {group.treatments.map((t) => (
                <div key={t.name} className="border border-pink-50 rounded-xl p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900 text-sm">{t.name}</h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${
                      t.type === "First-line"
                        ? "bg-green-100 text-green-700"
                        : t.type === "Prescription" || t.type === "Off-label"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-pink-100 text-pink-700"
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

        {/* Hair Care Tips */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Hair Care Tips That Help
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            While treating the underlying hormonal cause is essential, how you care for your
            hair day-to-day can reduce additional breakage and protect fragile follicles.
          </p>
          <ul className="space-y-3">
            {HAIR_CARE_TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-pink-500 mt-1 shrink-0">✓</span>
                {tip}
              </li>
            ))}
          </ul>
        </section>

        {/* When to See a Doctor */}
        <section className="bg-amber-50 rounded-2xl border border-amber-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            When to See a Doctor
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            See a dermatologist or your OB-GYN promptly if:
          </p>
          <ul className="space-y-2">
            {[
              "You notice visible scalp through your hair at your part or crown",
              "Hair is shedding in clumps or you see significant hair on your pillow and shower drain",
              "Hair loss started or accelerated suddenly",
              "You have patches of complete hair loss (which may indicate alopecia areata, not PCOS)",
              "You have not yet been evaluated for PCOS despite other symptoms",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-amber-500 mt-1 shrink-0">⚠</span>
                {point}
              </li>
            ))}
          </ul>
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
            This content is for informational purposes only and does not constitute medical advice.
            Always consult a qualified healthcare provider before starting any treatment.
          </p>
        </section>

        {/* Chatbot CTA */}
        <section className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">
            Have Questions About PCOS Hair Loss?
          </h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">
            Ask our AI assistant about specific treatments, which supplements to try first,
            and how to discuss hair loss with your doctor.
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
