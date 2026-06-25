import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import AuthorCard from "@/components/AuthorCard";

export const metadata: Metadata = {
  title: "PCOS and Pregnancy: Getting Pregnant, Risks & What to Expect | HerPCOS",
  description:
    "A complete guide to PCOS and pregnancy — how PCOS affects fertility, how to improve your chances of conceiving, risks during pregnancy, and how to manage PCOS while pregnant.",
  openGraph: {
    title: "PCOS and Pregnancy: Getting Pregnant, Risks & What to Expect",
    description:
      "A complete guide to PCOS and pregnancy — how PCOS affects fertility, how to improve your chances of conceiving, risks during pregnancy, and how to manage PCOS while pregnant.",
    url: "https://herpcos.com/pcos-and-pregnancy",
    type: "article",
  },
};

const FERTILITY_BOOSTERS = [
  {
    icon: "🥗",
    title: "Optimise Diet First",
    desc: "A low-GI, anti-inflammatory diet improves insulin sensitivity, which can restore ovulation. Research shows women with PCOS who improve their diet see menstrual cycle improvements within 2–3 months.",
  },
  {
    icon: "🏃",
    title: "Regular Exercise",
    desc: "Even 30 minutes of moderate exercise 4–5 days per week significantly improves insulin sensitivity and can restore ovulation in PCOS. Resistance training and aerobic exercise are both beneficial.",
  },
  {
    icon: "⚖️",
    title: "5–10% Weight Loss (If Overweight)",
    desc: "In women with PCOS who are overweight, losing as little as 5–10% of body weight significantly improves ovulation rates, hormone levels, and fertility. You don't need to reach an 'ideal' weight.",
  },
  {
    icon: "💊",
    title: "Inositol Supplementation",
    desc: "Myo-inositol + D-chiro-inositol (40:1 ratio) improves ovulation rates in women with PCOS. Clinical trials show 65% of women restore ovulation within 3 months, compared to 15% with placebo.",
  },
  {
    icon: "🔬",
    title: "Ovulation Tracking",
    desc: "Because PCOS cycles are irregular, standard 28-day tracking doesn't work. Use basal body temperature tracking and LH surge ovulation predictor kits to identify when you actually ovulate.",
  },
  {
    icon: "👩‍⚕️",
    title: "Seek Specialist Care Early",
    desc: "If you haven't conceived after 6 months of trying (or 3 months if over 35), see a reproductive endocrinologist. Many women with PCOS respond well to first-line fertility medications like letrozole.",
  },
];

const FERTILITY_TREATMENTS = [
  {
    name: "Letrozole (Femara)",
    detail: "The current first-line ovulation induction medication for PCOS. It temporarily blocks estrogen, triggering the body to release FSH and stimulate egg growth. More effective than Clomid in PCOS with fewer side effects.",
    line: "First-line",
  },
  {
    name: "Clomiphene Citrate (Clomid)",
    detail: "An older ovulation induction medication, now considered second-line in PCOS. Stimulates ovulation in 70–80% of women with PCOS, but pregnancy rates per cycle are lower than letrozole.",
    line: "Second-line",
  },
  {
    name: "Metformin + Letrozole",
    detail: "Adding Metformin to letrozole may improve ovulation and pregnancy rates, particularly in women with high insulin or BMI over 30. Often used for 4–6 months before moving to more intensive treatments.",
    line: "Combination",
  },
  {
    name: "Injectable Gonadotropins (FSH/LH)",
    detail: "Powerful hormone injections that directly stimulate egg development. Used when oral medications fail. Require careful monitoring to prevent multiple pregnancies and ovarian hyperstimulation syndrome (OHSS).",
    line: "Second-line",
  },
  {
    name: "IVF (In Vitro Fertilisation)",
    detail: "Used when other treatments have failed or there are additional fertility factors. Women with PCOS have good IVF outcomes but are at higher risk of OHSS. Frozen embryo transfer cycles can reduce OHSS risk.",
    line: "Advanced",
  },
];

const PREGNANCY_RISKS = [
  {
    risk: "Gestational Diabetes",
    detail: "Women with PCOS have 3× higher risk of developing gestational diabetes. Early glucose screening (before 28 weeks) is recommended. A low-GI diet, appropriate weight gain, and regular exercise significantly reduce risk.",
    level: "High",
  },
  {
    risk: "Preeclampsia",
    detail: "High blood pressure during pregnancy is more common in PCOS due to underlying insulin resistance and inflammation. Regular blood pressure monitoring throughout pregnancy is essential.",
    level: "Elevated",
  },
  {
    risk: "Preterm Birth",
    detail: "PCOS is associated with a modestly increased risk of preterm delivery (before 37 weeks). Risk is higher in pregnancies conceived with fertility treatments. Regular prenatal monitoring helps detect issues early.",
    level: "Elevated",
  },
  {
    risk: "Miscarriage",
    detail: "Women with PCOS have approximately 2–3× higher miscarriage rates, particularly in the first trimester. Elevated LH, high androgens, and insulin resistance are thought to contribute. Metformin and inositol may help reduce this risk.",
    level: "Elevated",
  },
  {
    risk: "Caesarean Section",
    detail: "C-section rates are higher in PCOS pregnancies, partly due to gestational diabetes, larger babies, and other complications. Choosing an experienced obstetric team is important.",
    level: "Elevated",
  },
];

const PREGNANCY_MANAGEMENT = [
  "Schedule an early preconception appointment to review medications and optimise health",
  "Discuss with your doctor whether to continue Metformin during pregnancy (often recommended through the first trimester)",
  "Take folic acid (at least 400–800 mcg daily) for 3 months before conception and through the first trimester",
  "Get tested for gestational diabetes at 16–18 weeks, not just at 26–28 weeks as standard",
  "Monitor blood pressure at every prenatal appointment and at home if advised",
  "Maintain a low-GI diet throughout pregnancy to manage insulin and reduce gestational diabetes risk",
  "Attend all recommended prenatal appointments — PCOS pregnancies benefit from closer monitoring",
  "Discuss postpartum PCOS management plans with your doctor before delivery",
];

const FAQS = [
  {
    q: "Can women with PCOS get pregnant naturally?",
    a: "Yes — many women with PCOS conceive naturally, especially when PCOS is well-managed through diet, lifestyle, and supplements. PCOS causes irregular ovulation, not permanent infertility. Women who do ovulate, even irregularly, can and do conceive without medical intervention. Lifestyle changes often restore regular ovulation.",
  },
  {
    q: "Does PCOS get better or worse during pregnancy?",
    a: "Some PCOS symptoms actually improve during pregnancy as progesterone and estrogen naturally rise and androgen levels often decrease. However, the metabolic risks (gestational diabetes, preeclampsia) increase. After delivery, PCOS symptoms typically return — some women notice temporary improvement in cycles postpartum.",
  },
  {
    q: "Should I keep taking Metformin during pregnancy?",
    a: "This is a nuanced decision best made with your doctor. Many reproductive endocrinologists recommend continuing Metformin through the first trimester in women with PCOS, particularly to reduce miscarriage risk. Evidence for benefit beyond the first trimester is more mixed. Never stop or start Metformin during pregnancy without medical guidance.",
  },
  {
    q: "Does PCOS affect my baby's health?",
    a: "Babies born to mothers with PCOS generally have good outcomes. There is some research suggesting a slightly increased risk of being large for gestational age (macrosomia) and a higher rate of NICU admission — largely linked to gestational diabetes complications. Daughters of women with PCOS have a higher genetic likelihood of developing PCOS themselves.",
  },
  {
    q: "What is OHSS and am I at risk?",
    a: "Ovarian hyperstimulation syndrome (OHSS) is an exaggerated response to fertility medications, where the ovaries become swollen and fluid leaks into the abdomen. Women with PCOS are at significantly higher risk because they have more follicles. Symptoms include bloating, abdominal pain, nausea, and rapid weight gain. Mild OHSS is manageable at home; severe OHSS requires hospitalisation. Your fertility doctor will monitor carefully to prevent it.",
  },
  {
    q: "Will losing weight before pregnancy improve my chances?",
    a: "For women with PCOS who are overweight, even a 5–10% weight loss before pregnancy significantly improves ovulation rates, reduces miscarriage risk, and lowers gestational diabetes risk. However, weight is not the only factor — lean women with PCOS also face fertility challenges. Focus on metabolic health (insulin sensitivity, androgen levels) rather than weight alone.",
  },
  {
    q: "Does breastfeeding affect PCOS?",
    a: "Breastfeeding may help by suppressing ovulation temporarily and improving insulin sensitivity. Some women find PCOS symptoms are milder while breastfeeding. However, symptoms typically return after weaning. There is no evidence that breastfeeding 'cures' or permanently improves PCOS.",
  },
];

const CITATIONS = [
  {
    ref: "1",
    text: "Joham AE, et al. (2014). Prevalence of infertility and use of fertility treatment in women with polycystic ovary syndrome. Fertil Steril. 102(5):1487–1493.",
  },
  {
    ref: "2",
    text: "Legro RS, et al. (2014). Letrozole versus Clomiphene for Infertility in the Polycystic Ovary Syndrome. NEJM. 371(2):119–129.",
  },
  {
    ref: "3",
    text: "Qin JZ, et al. (2013). Obstetric complications in women with polycystic ovary syndrome: a systematic review and meta-analysis. Reprod Biol Endocrinol. 11:56.",
  },
  {
    ref: "4",
    text: "Morin-Papunen L, et al. (2012). Metformin reduces pregnancy complications without affecting androgen levels in pregnant PCOS women. Hum Reprod. 27(5):1295–1302.",
  },
  {
    ref: "5",
    text: "Teede HJ, et al. (2018). International evidence-based guideline for the assessment and management of polycystic ovary syndrome. Hum Reprod. 33(9):1602–1618.",
  },
];

const RELATED = [
  { href: "/pcos-irregular-periods", label: "PCOS & Irregular Periods" },
  { href: "/inositol-for-pcos", label: "Inositol for PCOS" },
  { href: "/metformin-for-pcos", label: "Metformin for PCOS" },
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

export default function PcosAndPregnancyPage() {
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
            PCOS Fertility Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            PCOS and Pregnancy
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            Getting pregnant with PCOS is absolutely possible — here&apos;s everything
            you need to know about improving fertility, managing pregnancy risks,
            and what to expect every step of the way.
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
            PCOS and Fertility: The Honest Picture
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            PCOS is the most common cause of ovulatory infertility in women of reproductive age,
            accounting for approximately <strong>70% of ovulatory infertility cases</strong>.
            But it&apos;s important to separate two very different realities:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-red-50 rounded-xl p-5">
              <p className="text-sm font-semibold text-red-800 mb-2">What PCOS does cause</p>
              <p className="text-sm text-gray-700">
                Irregular or absent ovulation, which makes timing conception difficult and reduces
                the monthly chance of pregnancy.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-5">
              <p className="text-sm font-semibold text-green-800 mb-2">What PCOS does NOT cause</p>
              <p className="text-sm text-gray-700">
                Permanent infertility. Most women with PCOS can and do have children — often with
                relatively simple interventions.
              </p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Many PCOS-related fertility challenges are very responsive to treatment. Before exploring
            fertility medications, understanding where you are in your cycle is helpful — our{" "}
            <Link href="/pcos-irregular-periods" className="text-pink-600 hover:underline font-medium">
              irregular periods guide
            </Link>{" "}
            covers how to track your cycle when it&apos;s unpredictable.
          </p>
        </section>

        {/* Fertility Boosters */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How to Improve Fertility With PCOS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FERTILITY_BOOSTERS.map((b) => (
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

        {/* Fertility Treatments */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Medical Fertility Treatments for PCOS
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            If lifestyle changes haven&apos;t restored ovulation, a reproductive endocrinologist
            can guide you through a stepwise treatment approach. PCOS typically responds well
            to first-line treatments.
          </p>
          <div className="space-y-4">
            {FERTILITY_TREATMENTS.map((t) => (
              <div key={t.name} className="border border-pink-50 rounded-xl p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm">{t.name}</h3>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${
                    t.line === "First-line"
                      ? "bg-green-100 text-green-700"
                      : t.line === "Advanced"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-amber-100 text-amber-700"
                  }`}>
                    {t.line}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{t.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pregnancy Risks */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Pregnancy Risks in PCOS
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            PCOS pregnancies have higher rates of certain complications — but awareness and
            monitoring significantly reduce their impact. Being informed helps you advocate
            for appropriate care.
          </p>
          <div className="space-y-4">
            {PREGNANCY_RISKS.map((r) => (
              <div key={r.risk} className="border border-pink-50 rounded-xl p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm">{r.risk}</h3>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${
                    r.level === "High"
                      ? "bg-red-100 text-red-700"
                      : "bg-amber-100 text-amber-700"
                  }`}>
                    {r.level} risk
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Managing PCOS During Pregnancy */}
        <section className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Managing PCOS During Pregnancy
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Proactive management reduces complications and gives you and your baby the best
            possible outcome:
          </p>
          <ul className="space-y-3">
            {PREGNANCY_MANAGEMENT.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-pink-500 mt-1 shrink-0">✓</span>
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
            Fertility treatment and pregnancy management should always be guided by a qualified
            healthcare provider.
          </p>
        </section>

        {/* Chatbot CTA */}
        <section className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">
            Questions About Getting Pregnant With PCOS?
          </h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">
            Ask our AI assistant about fertility strategies, what to discuss with your
            reproductive endocrinologist, and managing PCOS symptoms during pregnancy.
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
