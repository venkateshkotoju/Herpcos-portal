import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import AuthorCard from "@/components/AuthorCard";
import GuideSchema from "@/components/GuideSchema";
import QuickAnswer from "@/components/QuickAnswer";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "PCOS & Sleep: Why It's Disrupted and How to Sleep Better",
  description:
    "PCOS raises the risk of insomnia and sleep apnea, independent of body weight. Learn why PCOS disrupts sleep and the strategies that help you rest better.",
  alternates: {
    canonical: "/pcos-and-sleep",
  },
  openGraph: {
    title: "PCOS & Sleep: Why It's Disrupted and How to Sleep Better",
    description:
      "PCOS raises the risk of insomnia and sleep apnea, independent of body weight. Learn why PCOS disrupts sleep and the strategies that help you rest better.",
    url: "https://www.herpcos.com/pcos-and-sleep",
    type: "article",
    siteName: "HerPCOS Portal",
    locale: "en_US",
    images: [
      {
        url: "https://www.herpcos.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PCOS & Sleep — HerPCOS Portal",
      },
    ],
  },
};

const TOC = [
  { id: "overview", label: "The PCOS-Sleep Connection" },
  { id: "why", label: "Why PCOS Disrupts Sleep" },
  { id: "apnea", label: "PCOS & Sleep Apnea" },
  { id: "tips", label: "How to Sleep Better With PCOS" },
  { id: "doctor", label: "When to See a Doctor" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const CAUSES = [
  {
    icon: "📉",
    title: "Blood Sugar Swings",
    desc: "A drop in blood sugar overnight can trigger a stress-hormone response that wakes you up or leaves sleep feeling shallow and fragmented, even if you don't fully remember waking.",
  },
  {
    icon: "😮‍💨",
    title: "Obstructive Sleep Apnea",
    desc: "Women with PCOS have a significantly higher risk of sleep apnea than the general population — independent of body weight — likely related to elevated androgens affecting airway tone and fat distribution.",
  },
  {
    icon: "😰",
    title: "Cortisol Dysregulation",
    desc: "PCOS is associated with an altered stress-hormone rhythm, which can make it harder to wind down at night and easier to wake feeling 'wired but tired.'",
  },
  {
    icon: "🧠",
    title: "Anxiety & Racing Thoughts",
    desc: "Anxiety is more common in PCOS and is one of the most frequent causes of difficulty falling or staying asleep, separate from any hormonal sleep-architecture changes.",
  },
  {
    icon: "🌙",
    title: "Melatonin & Circadian Shifts",
    desc: "Some research suggests altered melatonin signaling in PCOS, which may affect circadian rhythm and make it harder to feel sleepy at a consistent time each night.",
  },
  {
    icon: "🔥",
    title: "Night Sweats & Temperature Shifts",
    desc: "Irregular hormone fluctuations can cause night sweats or temperature dysregulation for some women, similar to (though generally milder than) perimenopausal symptoms.",
  },
];

const TIPS = [
  "Keep a consistent sleep and wake time — even on weekends — to support your circadian rhythm",
  "Avoid large, high-carbohydrate meals close to bedtime, which can contribute to overnight blood sugar swings",
  "Limit caffeine after early afternoon, since PCOS can already predispose you to lighter, more fragmented sleep",
  "Keep your bedroom cool, dark, and quiet — especially useful if night sweats or temperature shifts are an issue",
  "Build a consistent wind-down routine (dim lights, no screens) for 30–60 minutes before bed",
  "Move your body during the day — regular exercise (not too close to bedtime) supports deeper sleep",
  "Address anxiety directly, through therapy, mindfulness, or medical support if racing thoughts are the main barrier to sleep",
];

const APNEA_SIGNS = [
  "Loud, frequent snoring",
  "Gasping or choking sounds during sleep",
  "Waking up with a headache or dry mouth",
  "Excessive daytime sleepiness despite adequate time in bed",
  "A partner noticing pauses in your breathing while asleep",
];

const FAQS = [
  {
    q: "Does PCOS cause insomnia?",
    a: "PCOS is associated with a higher rate of sleep difficulties, including trouble falling asleep and fragmented sleep. Contributing factors include blood sugar swings, altered cortisol rhythms, and higher rates of anxiety — all of which are more common with PCOS than in the general population.",
  },
  {
    q: "Why is sleep apnea more common with PCOS?",
    a: "Research shows women with PCOS have a substantially higher risk of obstructive sleep apnea than women without PCOS, even at a similar body weight. Elevated androgens are thought to play a role in airway structure and fat distribution around the neck and throat, which can narrow the airway during sleep.",
  },
  {
    q: "Can poor sleep make PCOS symptoms worse?",
    a: "Yes — sleep deprivation itself worsens insulin resistance, which can amplify other PCOS symptoms like irregular cycles, acne, and weight changes. This creates a cycle where PCOS disrupts sleep and poor sleep, in turn, worsens PCOS. Breaking the cycle usually starts with addressing whichever piece is easiest to act on first (often blood sugar or a sleep study).",
  },
  {
    q: "Do I need a sleep study if I have PCOS?",
    a: "Not automatically, but it's worth asking your doctor about if you have any signs of sleep apnea — loud snoring, gasping, morning headaches, or persistent daytime sleepiness despite adequate time in bed. A home sleep study is a low-effort way to rule it in or out.",
  },
  {
    q: "What is the best sleep position for PCOS?",
    a: "There's no PCOS-specific 'best' sleep position, but side-sleeping can reduce airway obstruction for anyone at elevated risk of sleep apnea, which includes many women with PCOS. If you snore heavily or suspect apnea, this is a reasonable low-risk change to try alongside a medical evaluation.",
  },
  {
    q: "Can melatonin supplements help with PCOS sleep issues?",
    a: "Some limited research has looked at melatonin in PCOS, mostly for its antioxidant and hormone-related effects rather than purely as a sleep aid, with mixed results. If you're considering melatonin for sleep, use it short-term and talk to your doctor first, especially if you're also taking other hormonal medications.",
  },
];

const CITATIONS = [
  { ref: "1", text: "Moran LJ, et al. (2015). Sleep disturbances in women with polycystic ovary syndrome: prevalence, pathophysiology, and management. Sleep Med Rev. 22:75–83." },
  { ref: "2", text: "Tasali E, et al. (2008). Polycystic ovary syndrome and obstructive sleep apnea. Sleep Med Clin. 3(1):37–46." },
  { ref: "3", text: "Fernandez RC, et al. (2018). Sleep disturbances in women with polycystic ovary syndrome: prevalence, associated factors, and management. Nat Sci Sleep. 10:45–64." },
  { ref: "4", text: "Shreeve N, et al. (2013). Poor sleep in PCOS; is melatonin the culprit? Hum Reprod. 28(5):1348–1353." },
  { ref: "5", text: "Spiegel K, et al. (1999). Impact of sleep debt on metabolic and endocrine function. Lancet. 354(9188):1435–1439." },
];

const RELATED = [
  { href: "/what-is-pcos", label: "What Is PCOS?" },
  { href: "/pcos-symptoms", label: "PCOS Symptoms Guide" },
  { href: "/pcos-fatigue", label: "PCOS Fatigue" },
  { href: "/pcos-and-mental-health", label: "PCOS & Mental Health" },
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

export default function PcosAndSleepPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="inline-block bg-white/20 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            PCOS Symptom Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">PCOS & Sleep</h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            Why PCOS makes falling and staying asleep harder — including a higher risk of sleep
            apnea — and evidence-based ways to sleep better.
          </p>
          <p className="text-pink-200 text-xs mt-4">Last reviewed: September 21, 2026</p>
        </div>
      </div>

      <GuideSchema
        title="PCOS & Sleep: Why It's Disrupted and How to Sleep Better"
        description="PCOS raises the risk of insomnia and sleep apnea, independent of body weight. Learn why PCOS disrupts sleep and the strategies that help you rest better."
        url="https://www.herpcos.com/pcos-and-sleep"
        datePublished="2026-09-21"
        breadcrumbLabel="PCOS & Sleep"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <AuthorCard lastUpdated="September 21, 2026" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-10">
        <QuickAnswer
          question="Why does PCOS make it harder to sleep?"
          answer="PCOS disrupts sleep through several pathways: blood sugar swings from insulin resistance, a significantly higher risk of obstructive sleep apnea (even independent of body weight), altered cortisol rhythms, and higher rates of anxiety. Because there are multiple possible causes, the most effective approach usually starts with identifying which one applies to you — including asking your doctor about a sleep study if you snore or wake unrested."
        />

        <TableOfContents items={TOC} />

        <section id="overview" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8 scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The PCOS-Sleep Connection</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Sleep problems are far more common in women with PCOS than in the general population,
            yet they&apos;re rarely part of the first conversation about the condition. Research
            suggests women with PCOS report insomnia symptoms at meaningfully higher rates, and
            carry a substantially elevated risk of obstructive sleep apnea.
          </p>
          <p className="text-gray-600 leading-relaxed mb-3">
            This matters beyond just feeling tired: sleep and PCOS influence each other in both
            directions. Poor sleep worsens insulin resistance, and insulin resistance, in turn,
            makes sleep less restorative — a cycle that&apos;s worth breaking deliberately.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If daytime exhaustion is your main concern, our{" "}
            <Link href="/pcos-fatigue" className="text-pink-600 hover:underline font-medium">
              PCOS fatigue guide
            </Link>{" "}
            covers the broader picture beyond sleep alone.
          </p>
        </section>

        <section id="why">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why PCOS Disrupts Sleep</h2>
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

        <section id="apnea" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">PCOS & Sleep Apnea</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Obstructive sleep apnea deserves its own mention because it&apos;s both common and
            commonly missed in women with PCOS — partly because sleep apnea is still often thought
            of as a condition that mainly affects men or people who are significantly overweight.
            Studies show the risk is elevated in PCOS regardless of body weight.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">Watch for these signs:</p>
          <ul className="space-y-2">
            {APNEA_SIGNS.map((sign) => (
              <li key={sign} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-pink-500 mt-1 shrink-0">✓</span>
                {sign}
              </li>
            ))}
          </ul>
        </section>

        <section id="tips" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">How to Sleep Better With PCOS</h2>
          <ul className="space-y-3">
            {TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-pink-500 mt-1 shrink-0">✓</span>
                {tip}
              </li>
            ))}
          </ul>
        </section>

        <section id="doctor" className="bg-amber-50 rounded-2xl border border-amber-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When to See a Doctor</h2>
          <ul className="space-y-2">
            {[
              "You have signs of sleep apnea listed above",
              "Insomnia persists most nights for more than a few weeks",
              "Poor sleep is significantly affecting your mood, work, or relationships",
              "You rely on caffeine or naps just to get through the day",
              "You suspect a co-occurring condition like anxiety or thyroid dysfunction",
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
          <h2 className="text-2xl font-bold mb-3">Have Questions About PCOS & Sleep?</h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">
            Ask our AI assistant about your specific sleep symptoms and whether a sleep study
            might be worth requesting.
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
