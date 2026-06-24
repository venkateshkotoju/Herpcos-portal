import { Metadata } from "next";
import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "PCOS and Irregular Periods: What You Need to Know | HerPCOS",
  description:
    "Learn how PCOS affects your menstrual cycle, what irregular periods look like, why they happen, and what you can do about them. Beginner-friendly guide.",
};

const whatCounts = [
  {
    title: "Infrequent Periods",
    desc: "Fewer than 8 periods per year, or cycles longer than 35 days. This is one of the most common signs of PCOS-related hormonal imbalance.",
  },
  {
    title: "No Period at All (Amenorrhea)",
    desc: "Going 3 or more months without a period is called amenorrhea. PCOS is one of the most common causes in women of reproductive age.",
  },
  {
    title: "Unpredictable Cycle Length",
    desc: "A cycle that varies dramatically from month to month — sometimes 25 days, sometimes 60 days — makes it very difficult to predict ovulation or plan for pregnancy.",
  },
  {
    title: "Very Heavy or Prolonged Bleeding",
    desc: "When the uterine lining builds up over many weeks without shedding, when a period does arrive it can be unusually heavy or last longer than 7 days.",
  },
  {
    title: "Spotting Between Periods",
    desc: "Irregular spotting outside of a normal period can occur due to hormonal fluctuations related to anovulation (not releasing an egg).",
  },
];

const whatHelps = [
  {
    title: "Diet & Blood Sugar Management",
    desc: "Reducing refined carbohydrates and added sugars lowers insulin levels, which reduces androgen production — the primary driver of anovulation in PCOS.",
  },
  {
    title: "Regular Movement",
    desc: "Exercise improves insulin sensitivity and helps regulate hormones. Even 30 minutes of walking daily can have a positive effect on cycle regularity over time.",
  },
  {
    title: "Stress Reduction",
    desc: "High cortisol directly suppresses the hormones needed for ovulation. Managing stress through sleep, breathwork, and rest is not optional — it is essential.",
  },
  {
    title: "Healthy Weight Range",
    desc: "Even a 5-10% reduction in body weight (if above healthy range) can restore ovulation in some people with PCOS. Weight below healthy range can also disrupt cycles.",
  },
  {
    title: "Medical Support",
    desc: "Hormonal contraceptives can regulate cycles. Medications like metformin can improve insulin sensitivity. Clomiphene or letrozole may be used to induce ovulation for those trying to conceive.",
  },
];

const faqs = [
  {
    q: "Can you have PCOS with regular periods?",
    a: "Yes. Some people with PCOS have relatively regular periods but still have elevated androgens and other signs of the condition. Regular periods do not rule out PCOS — a full hormonal blood panel and ultrasound are needed for accurate diagnosis.",
  },
  {
    q: "Why does PCOS cause irregular periods?",
    a: "PCOS disrupts the normal hormonal signals that trigger ovulation. Without ovulation, the uterine lining does not shed on a regular schedule, leading to irregular, delayed, or absent periods.",
  },
  {
    q: "Does having irregular periods mean I cannot get pregnant?",
    a: "Irregular periods make conception more difficult because it is harder to predict ovulation, but most people with PCOS can get pregnant with appropriate support. Lifestyle changes, medication, or fertility treatments can help restore ovulation.",
  },
  {
    q: "How long does it take for periods to become regular after starting PCOS treatment?",
    a: "It depends on the approach. Hormonal contraceptives can regulate periods within 1-2 cycles. Lifestyle changes typically take 3-6 months to show meaningful cycle improvements. Patience and consistency are key.",
  },
  {
    q: "When should I see a doctor about irregular periods?",
    a: "See a doctor if your cycles are consistently shorter than 21 days or longer than 35 days, if you have not had a period in 3 months, if periods are extremely heavy, or if you are experiencing any other PCOS symptoms. Early diagnosis leads to better long-term outcomes.",
  },
];

const relatedGuides = [
  { href: "/pcos-symptoms", title: "PCOS Symptoms Guide", desc: "Recognize all the signs of PCOS" },
  { href: "/pcos-diet", title: "Best Diet for PCOS", desc: "Eat to support hormone balance" },
  { href: "/pcos-weight-loss", title: "PCOS Weight Loss Guide", desc: "Manage weight to restore cycles" },
  { href: "/insulin-resistance-pcos", title: "Insulin Resistance & PCOS", desc: "The root cause of cycle disruption" },
];

export default function PcosIrregularPeriodsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          PCOS & Periods
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          PCOS and Irregular Periods
        </h1>
        <p className="text-2xl font-semibold text-pink-600 mb-6">
          What Is Happening and What You Can Do
        </p>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Irregular periods are one of the most common and frustrating symptoms of PCOS.
          Understanding why they happen — and what affects them — puts you back in control
          of your reproductive health.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
        <Disclaimer />

        {/* How PCOS affects your period */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How PCOS Disrupts Your Menstrual Cycle
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-pink-100">
            <p className="text-gray-700 leading-relaxed mb-4">
              A normal menstrual cycle depends on a precise sequence of hormone signals.
              Each month, rising estrogen levels should trigger ovulation — the release of
              an egg from the ovary. After ovulation, progesterone rises, and if pregnancy
              does not occur, it falls, triggering a period.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              In PCOS, elevated androgens and insulin resistance disrupt this sequence.
              The hormonal environment prevents follicles from maturing and releasing an egg
              (a condition called anovulation). Without ovulation, progesterone does not rise,
              and the uterine lining does not shed on schedule.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The result: cycles are delayed, unpredictable, absent — or when a period does
              arrive, the lining that has been building up may shed all at once, causing
              unusually heavy or prolonged bleeding.
            </p>
          </div>
        </section>

        {/* What counts as irregular */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What Counts as an Irregular Period?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whatCounts.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact on fertility callout */}
        <section>
          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What This Means for Fertility
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Irregular periods are often a sign of irregular or absent ovulation.
              Since pregnancy requires ovulation, unpredictable cycles make it harder
              to conceive — but not impossible.
            </p>
            <p className="text-gray-700 leading-relaxed">
              PCOS is one of the most treatable causes of infertility. Many people with
              PCOS conceive successfully with lifestyle adjustments, medication to induce
              ovulation, or fertility treatment. Speaking with a reproductive endocrinologist
              early can make a significant difference.
            </p>
          </div>
        </section>

        {/* What helps */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What Helps Regulate Your Cycle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whatHelps.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Guides */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Explore Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="bg-white rounded-xl p-5 shadow-sm border border-pink-100 hover:shadow-md hover:border-pink-300 transition-all flex items-center justify-between group"
              >
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                    {guide.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">{guide.desc}</p>
                </div>
                <svg
                  className="w-5 h-5 text-pink-400 flex-shrink-0 ml-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Questions About Your Cycle?</h2>
            <p className="text-pink-100 mb-6 max-w-xl mx-auto">
              Our AI assistant can help you understand your PCOS-related cycle changes and
              point you toward the right next steps — available 24/7 with evidence-based guidance.
            </p>
            <Link
              href="/chat"
              className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors inline-block"
            >
              Chat with AI Assistant
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
