import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import AuthorCard from "@/components/AuthorCard";
import GuideSchema from "@/components/GuideSchema";
import QuickAnswer from "@/components/QuickAnswer";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "PCOS & Mental Health: Anxiety, Depression & Support",
  description:
    "PCOS raises the risk of anxiety and depression through hormonal, metabolic, and body-image pathways. Learn why, and evidence-based support strategies that help.",
  alternates: {
    canonical: "/pcos-and-mental-health",
  },
  openGraph: {
    title: "PCOS & Mental Health: Anxiety, Depression & Support",
    description:
      "PCOS raises the risk of anxiety and depression through hormonal, metabolic, and body-image pathways. Learn why, and evidence-based support strategies that help.",
    url: "https://www.herpcos.com/pcos-and-mental-health",
    type: "article",
    siteName: "HerPCOS Portal",
    locale: "en_US",
    images: [
      {
        url: "https://www.herpcos.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PCOS & Mental Health — HerPCOS Portal",
      },
    ],
  },
};

const TOC = [
  { id: "overview", label: "The PCOS-Mental Health Link" },
  { id: "why", label: "Why PCOS Affects Mental Health" },
  { id: "body-image", label: "The Body Image Dimension" },
  { id: "support", label: "Support Strategies That Help" },
  { id: "doctor", label: "When to Get Professional Support" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const CAUSES = [
  {
    icon: "🧬",
    title: "Hormonal Fluctuations",
    desc: "Irregular ovulation means estrogen and progesterone don't rise and fall in a predictable rhythm, and both hormones influence mood-regulating neurotransmitters like serotonin.",
  },
  {
    icon: "📈",
    title: "Insulin Resistance",
    desc: "Insulin resistance and blood sugar instability are independently linked to anxiety and depressive symptoms, separate from any hormonal or situational factors.",
  },
  {
    icon: "🔥",
    title: "Chronic Inflammation",
    desc: "PCOS involves low-grade systemic inflammation, and a growing body of research links inflammation to depression through effects on brain chemistry.",
  },
  {
    icon: "😴",
    title: "Sleep Disruption",
    desc: "Poor sleep quality, common in PCOS, is both a symptom and a driver of anxiety and depression, creating a two-way relationship that can be hard to untangle.",
  },
  {
    icon: "🏥",
    title: "Diagnostic Delay & Uncertainty",
    desc: "Many women wait years for a PCOS diagnosis while experiencing unexplained symptoms, which itself is a documented source of anxiety, frustration, and diminished trust in the healthcare system.",
  },
  {
    icon: "🤰",
    title: "Fertility Concerns",
    desc: "Worry about future fertility, even years before trying to conceive, is a significant and often unaddressed source of anxiety for many women with PCOS.",
  },
];

const SUPPORT = [
  {
    title: "Talk Therapy",
    desc: "Cognitive behavioral therapy (CBT) has evidence specifically in PCOS populations for reducing anxiety and depressive symptoms, and can also help with body image and disordered eating patterns sometimes triggered by PCOS symptoms.",
  },
  {
    title: "Peer & Community Support",
    desc: "Connecting with others who understand PCOS — through support groups, online communities, or our own Q&A community — can reduce the isolation that often accompanies a chronic, sometimes invisible condition.",
  },
  {
    title: "Addressing the Physical Drivers",
    desc: "Because insulin resistance, sleep, and inflammation all contribute to mood, working on these (through diet, movement, and sleep habits) can have a meaningful, if gradual, effect on mental health too.",
  },
  {
    title: "Self-Compassion Practices",
    desc: "PCOS symptoms can affect self-esteem in ways that are easy to internalize as personal failure. Actively practicing self-compassion — treating yourself as you would a friend — is a small but evidence-supported habit for reducing distress.",
  },
];

const FAQS = [
  {
    q: "Does PCOS cause anxiety and depression?",
    a: "Research consistently shows higher rates of anxiety and depression in women with PCOS compared to the general population — some studies suggest three to four times higher rates of depression. The relationship involves multiple pathways: hormonal, metabolic, inflammatory, and psychosocial (like body image and diagnostic delays).",
  },
  {
    q: "Are mood swings a symptom of PCOS?",
    a: "Yes, many women with PCOS report mood swings, often tied to irregular hormonal fluctuations and blood sugar instability. These are real physiological contributors, not just 'being emotional' — and they're worth mentioning to your doctor as part of your full symptom picture.",
  },
  {
    q: "Can treating PCOS improve my mental health?",
    a: "For many women, yes — addressing insulin resistance, improving sleep, and reducing symptoms like acne or hirsutism that affect self-esteem can meaningfully improve mood over time. However, PCOS management alone isn't always sufficient, and dedicated mental health support (therapy, and medication if appropriate) is often still valuable.",
  },
  {
    q: "Should I see a therapist who specializes in PCOS or chronic illness?",
    a: "It can help, but isn't required. A therapist experienced with chronic health conditions or body image concerns can offer more targeted support, but any qualified therapist you feel comfortable with is a reasonable place to start.",
  },
  {
    q: "Is it normal to feel grief about a PCOS diagnosis?",
    a: "Yes. Many women describe a real sense of loss — around fertility uncertainty, body image, or simply the shift in how they see their health — after a PCOS diagnosis. This is a valid emotional response, not an overreaction, and it's worth processing rather than dismissing.",
  },
  {
    q: "What should I do if I'm having thoughts of self-harm?",
    a: "Please reach out for help right away. In the US, you can call or text 988 to reach the Suicide & Crisis Lifeline, available 24/7. If you're outside the US, search for your country's crisis line, or go to your nearest emergency room. You deserve support, and these feelings are treatable.",
  },
];

const CITATIONS = [
  { ref: "1", text: "Cooney LG, Dokras A. (2018). Depression and anxiety in polycystic ovary syndrome: etiology and treatment. Curr Psychiatry Rep. 20(11):83." },
  { ref: "2", text: "Brutocao C, et al. (2018). Psychiatric disorders in women with polycystic ovary syndrome: a systematic review and meta-analysis. Endocrine. 62(2):318–325." },
  { ref: "3", text: "Cooney LG, et al. (2017). High prevalence of moderate and severe depressive and anxiety symptoms in polycystic ovary syndrome: a systematic review and meta-analysis. Hum Reprod. 32(5):1075–1091." },
  { ref: "4", text: "Teede HJ, et al. (2023). International evidence-based guideline for the assessment and management of PCOS. Monash University." },
  { ref: "5", text: "Jones GL, et al. (2008). Health-related quality of life measurement in women with polycystic ovary syndrome. Hum Reprod Update. 14(1):15–25." },
];

const RELATED = [
  { href: "/what-is-pcos", label: "What Is PCOS?" },
  { href: "/pcos-symptoms", label: "PCOS Symptoms Guide" },
  { href: "/pcos-fatigue", label: "PCOS Fatigue" },
  { href: "/pcos-and-sleep", label: "PCOS & Sleep" },
  { href: "/chat", label: "Ask the AI Chat" },
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

export default function PcosAndMentalHealthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="inline-block bg-white/20 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            PCOS Mental Health Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">PCOS & Mental Health</h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            Why PCOS raises the risk of anxiety and depression, the biology and body-image
            factors behind it, and support strategies that actually help.
          </p>
          <p className="text-pink-200 text-xs mt-4">Last reviewed: September 14, 2026</p>
        </div>
      </div>

      <GuideSchema
        title="PCOS & Mental Health: Anxiety, Depression & Support"
        description="PCOS raises the risk of anxiety and depression through hormonal, metabolic, and body-image pathways. Learn why, and evidence-based support strategies that help."
        url="https://www.herpcos.com/pcos-and-mental-health"
        datePublished="2026-09-14"
        breadcrumbLabel="PCOS & Mental Health"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <AuthorCard lastUpdated="September 14, 2026" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-10">
        <QuickAnswer
          question="Why does PCOS affect mental health?"
          answer="PCOS raises the risk of anxiety and depression through several overlapping pathways: hormonal fluctuations, insulin resistance, chronic inflammation, disrupted sleep, and the emotional toll of visible symptoms like acne, hirsutism, or hair loss. Research shows women with PCOS experience notably higher rates of anxiety and depression than the general population — this is a real, biologically grounded part of the condition, not 'just stress.'"
        />

        <TableOfContents items={TOC} />

        <section id="overview" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8 scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The PCOS-Mental Health Link</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            The emotional side of PCOS doesn&apos;t get nearly as much attention as symptoms like
            irregular periods or acne, but it deserves to. Multiple studies show women with PCOS
            experience anxiety and depression at meaningfully higher rates than women without the
            condition — this isn&apos;t incidental, it&apos;s part of the condition&apos;s broader impact.
          </p>
          <p className="text-gray-600 leading-relaxed mb-3">
            Understanding why can help take some of the self-blame out of the picture: PCOS-related
            mood changes have real biological roots, alongside the very real emotional weight of
            managing a chronic, often misunderstood condition.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For the full symptom picture, see our{" "}
            <Link href="/pcos-symptoms" className="text-pink-600 hover:underline font-medium">
              PCOS symptoms guide
            </Link>
            . If fatigue and low mood tend to show up together for you, our{" "}
            <Link href="/pcos-fatigue" className="text-pink-600 hover:underline font-medium">
              fatigue guide
            </Link>{" "}
            covers that overlap in more depth.
          </p>
        </section>

        <section id="why">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why PCOS Affects Mental Health</h2>
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

        <section id="body-image" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Body Image Dimension</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            PCOS often affects the parts of appearance our culture places enormous weight on:
            skin, hair, weight, and body hair. Living with visible symptoms like acne, hirsutism,
            or scalp thinning — often for years — can take a genuine toll on self-esteem and body
            image, separate from the direct hormonal effects on mood.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This is a legitimate part of the PCOS experience worth naming and addressing directly,
            rather than treating it as vanity or something to simply push through.
          </p>
        </section>

        <section id="support" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Support Strategies That Help</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SUPPORT.map((s) => (
              <div key={s.title} className="border border-pink-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="doctor" className="bg-amber-50 rounded-2xl border border-amber-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Get Professional Support</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Reach out to a doctor or mental health professional if:</p>
          <ul className="space-y-2 mb-5">
            {[
              "Low mood, anxiety, or irritability persist most days for two weeks or more",
              "You've lost interest in activities you used to enjoy",
              "Anxiety or mood changes are interfering with work, relationships, or daily functioning",
              "You notice signs of disordered eating alongside body image struggles",
              "You're relying on avoidance or isolation to cope",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-amber-500 mt-1 shrink-0">⚠</span>
                {point}
              </li>
            ))}
          </ul>
          <div className="bg-white rounded-xl p-5 border border-amber-200">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>If you&apos;re having thoughts of self-harm or suicide,</strong> please reach out
              for immediate support. In the US, call or text <strong>988</strong> to reach the
              Suicide &amp; Crisis Lifeline, available 24/7. If you&apos;re outside the US, search for
              your country&apos;s crisis line, or go to your nearest emergency room.
            </p>
          </div>
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
            This content is for informational purposes only and does not constitute medical or
            mental health advice. Always consult a qualified healthcare provider or licensed
            mental health professional for diagnosis and treatment.
          </p>
        </section>

        <section className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Want to Talk Through How You&apos;re Feeling?</h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">
            Ask our AI assistant about the PCOS-mental health connection or how to find support —
            it&apos;s not a replacement for therapy, but it&apos;s a starting point.
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
