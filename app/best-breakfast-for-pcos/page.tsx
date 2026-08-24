import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import AuthorCard from "@/components/AuthorCard";
import GuideSchema from "@/components/GuideSchema";
import QuickAnswer from "@/components/QuickAnswer";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Best Breakfast for PCOS: What to Eat & Ideas That Work",
  description:
    "The best PCOS breakfast is high in protein and fiber and low in refined carbs. Learn why breakfast matters so much and get 10 beginner-friendly ideas.",
  alternates: {
    canonical: "/best-breakfast-for-pcos",
  },
  openGraph: {
    title: "Best Breakfast for PCOS: What to Eat & Ideas That Work",
    description:
      "The best PCOS breakfast is high in protein and fiber and low in refined carbs. Learn why breakfast matters so much and get 10 beginner-friendly ideas.",
    url: "https://www.herpcos.com/best-breakfast-for-pcos",
    type: "article",
    siteName: "HerPCOS Portal",
    locale: "en_US",
    images: [
      {
        url: "https://www.herpcos.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Best Breakfast for PCOS — HerPCOS Portal",
      },
    ],
  },
};

const TOC = [
  { id: "overview", label: "Why Breakfast Matters More With PCOS" },
  { id: "building-blocks", label: "The Building Blocks of a PCOS Breakfast" },
  { id: "ideas", label: "10 PCOS-Friendly Breakfast Ideas" },
  { id: "mistakes", label: "Common Breakfast Mistakes" },
  { id: "timing", label: "Meal Timing Tips" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const BUILDING_BLOCKS = [
  { icon: "🥚", title: "Protein (20–30g)", desc: "The single most important lever for a PCOS-friendly breakfast. Protein slows digestion, blunts the blood sugar spike from any carbs you eat, and keeps you full for hours. Eggs, Greek yogurt, cottage cheese, and protein powder are easy options." },
  { icon: "🌾", title: "Fiber (5g+)", desc: "Fiber further slows glucose absorption and supports gut health, which is increasingly linked to hormone regulation. Look for it in berries, chia seeds, oats, and vegetables added to savory breakfasts." },
  { icon: "🥑", title: "Healthy Fat", desc: "Fat adds satiety and helps slow the overall glycemic impact of a meal. Avocado, nuts, seeds, and olive oil are easy additions that don't spike blood sugar." },
  { icon: "🍎", title: "Lower-GI Carbohydrates", desc: "You don't need to avoid carbs — just choose ones that digest more slowly, like berries, whole oats, or sprouted-grain bread, rather than refined cereal, pastries, or juice." },
];

const IDEAS = [
  { name: "Veggie Scramble + Avocado", detail: "3 eggs scrambled with spinach and peppers, topped with sliced avocado. ~24g protein, high fiber, minimal refined carbs." },
  { name: "Greek Yogurt Parfait", detail: "Plain Greek yogurt layered with berries, chia seeds, and a small handful of walnuts. ~22g protein, naturally sweet without added sugar." },
  { name: "Overnight Oats (Protein-Boosted)", detail: "Rolled oats soaked overnight in milk or a milk alternative, with a scoop of protein powder, cinnamon, and berries. Slow-digesting and portable." },
  { name: "Cottage Cheese Toast", detail: "Sprouted-grain toast topped with cottage cheese, sliced tomato, and black pepper. Simple, high-protein, and quick." },
  { name: "Chia Pudding", detail: "Chia seeds soaked in milk overnight with vanilla and a touch of maple syrup, topped with nuts. High in fiber and omega-3s." },
  { name: "Smoothie With Protein & Greens", detail: "Protein powder, spinach, frozen berries, and nut butter blended with unsweetened milk. Balanced macros in one glass — avoid juice-only smoothies, which spike blood sugar quickly." },
  { name: "Savory Oatmeal", detail: "Oats cooked in broth, topped with a fried egg, greens, and everything-bagel seasoning. A lower-sugar twist on a breakfast staple." },
  { name: "Egg Muffins (Meal-Prepped)", detail: "Whisked eggs baked in a muffin tin with vegetables and cheese, made in batches for busy mornings. Grab 2–3 for a fast, protein-rich start." },
  { name: "Tofu Scramble", detail: "Crumbled tofu sautéed with turmeric, nutritional yeast, and vegetables — a plant-based, high-protein option for vegetarians and vegans." },
  { name: "Nut Butter & Apple With Protein", detail: "Apple slices with natural nut butter, paired with a hard-boiled egg or a small serving of Greek yogurt to round out the protein." },
];

const MISTAKES = [
  "Skipping breakfast entirely — some research links skipping breakfast to worse insulin and androgen levels later in the day",
  "Relying on cereal, granola bars, or pastries, which are high in refined carbs with little protein or fiber",
  "Drinking fruit juice or a sugar-heavy smoothie as your only 'breakfast'",
  "Eating carbs alone without any protein or fat to slow digestion",
  "Under-eating in the morning and overcompensating with a large meal later in the day",
];

const FAQS = [
  {
    q: "Why is breakfast especially important for PCOS?",
    a: "Insulin sensitivity tends to be highest earlier in the day, and cortisol — which affects blood sugar — naturally peaks in the morning. A protein-and-fiber-forward breakfast helps you start the day with more stable blood sugar, which can reduce the insulin spikes that drive excess androgen production in PCOS.",
  },
  {
    q: "Should I skip breakfast if I'm doing intermittent fasting for PCOS?",
    a: "Intermittent fasting isn't required for PCOS management, and evidence on its specific benefit for PCOS is still limited. If you do fast, make sure your first meal — whenever it happens — follows the same protein-and-fiber-first principles described here, and pay attention to how you feel and function.",
  },
  {
    q: "How much protein should be in a PCOS breakfast?",
    a: "A reasonable target is 20–30 grams of protein at breakfast, which is more than a typical Western breakfast usually provides. This amount is generally enough to meaningfully blunt post-meal blood sugar spikes and support satiety through the morning.",
  },
  {
    q: "Are eggs bad for PCOS?",
    a: "No — eggs are an excellent PCOS breakfast choice. They're high in protein, contain choline (important for hormone metabolism), and have minimal impact on blood sugar. Concerns about dietary cholesterol and heart disease have been largely revised in recent nutrition research for most people.",
  },
  {
    q: "Can I still have oatmeal with PCOS?",
    a: "Yes. Oats are a lower-GI whole grain and a fine choice for PCOS, especially when paired with protein (like protein powder or Greek yogurt) and fiber-rich toppings like berries or chia seeds, which further slow the blood sugar response.",
  },
  {
    q: "What's the worst breakfast for PCOS?",
    a: "A carb-only breakfast with little protein or fiber — think a bagel with jam, sugary cereal, or a large glass of juice — is the least PCOS-friendly option. These cause a rapid blood sugar spike and crash, which can contribute to fatigue, cravings, and elevated insulin over time.",
  },
];

const CITATIONS = [
  { ref: "1", text: "Jakubowicz D, et al. (2013). Effects of caloric intake timing on insulin resistance and hyperandrogenism in lean women with PCOS. Clin Sci. 125(9):423–432." },
  { ref: "2", text: "Douglas CC, et al. (2006). Role of diet in the treatment of polycystic ovary syndrome. Fertil Steril. 85(3):679–688." },
  { ref: "3", text: "Barrea L, et al. (2021). Nutrition and dietary approaches to the management of PCOS. Nutrients. 13(6):1848." },
  { ref: "4", text: "Jakubowicz D, et al. (2015). High-energy breakfast with low-energy dinner decreases overall daily hyperglycemia in type 2 diabetic patients. Diabetologia. 58(5):912–919." },
  { ref: "5", text: "Farshchi HR, et al. (2005). Beneficial metabolic effects of regular meal frequency on dietary thermogenesis, insulin sensitivity, and fasting lipid profiles. Am J Clin Nutr. 81(2):388–396." },
];

const RELATED = [
  { href: "/what-is-pcos", label: "What Is PCOS?" },
  { href: "/pcos-diet", label: "Best Diet for PCOS" },
  { href: "/7-day-pcos-meal-plan", label: "7-Day PCOS Meal Plan" },
  { href: "/insulin-resistance-pcos", label: "Insulin Resistance & PCOS" },
  { href: "/pcos-weight-loss", label: "PCOS Weight Loss Guide" },
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

export default function BestBreakfastForPcosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="inline-block bg-white/20 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            PCOS Nutrition Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Best Breakfast for PCOS</h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            Why what you eat first thing matters so much with PCOS, and 10 protein-forward
            breakfast ideas to help stabilize blood sugar.
          </p>
          <p className="text-pink-200 text-xs mt-4">Last reviewed: August 24, 2026</p>
        </div>
      </div>

      <GuideSchema
        title="Best Breakfast for PCOS: What to Eat & Ideas That Work"
        description="The best PCOS breakfast is high in protein and fiber and low in refined carbs. Learn why breakfast matters so much and get 10 beginner-friendly ideas."
        url="https://www.herpcos.com/best-breakfast-for-pcos"
        datePublished="2026-08-24"
        breadcrumbLabel="Best Breakfast for PCOS"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <AuthorCard lastUpdated="August 24, 2026" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-10">
        <QuickAnswer
          question="What is the best breakfast for PCOS?"
          answer="The best PCOS breakfast has at least 20–30 grams of protein, a source of fiber, and healthy fat, with minimal refined carbs or added sugar — for example, a veggie egg scramble with avocado, or Greek yogurt with berries and chia seeds. This combination helps blunt the morning blood sugar and insulin spikes that can worsen PCOS symptoms."
        />

        <TableOfContents items={TOC} />

        <section id="overview" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8 scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Breakfast Matters More With PCOS</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Insulin resistance is a central driver of PCOS symptoms for most women, and how you
            eat in the morning has an outsized effect on blood sugar stability for the rest of
            the day. Research on meal timing suggests insulin sensitivity is generally highest
            earlier in the day, which makes breakfast a strategic opportunity, not just a routine meal.
          </p>
          <p className="text-gray-600 leading-relaxed mb-3">
            A breakfast heavy in refined carbs — cereal, pastries, juice — causes a rapid glucose
            spike followed by a crash, prompting your body to release more insulin. Since excess
            insulin drives the ovaries to produce more androgens, this pattern can directly
            contribute to symptoms like acne, irregular cycles, and cravings later in the day.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This guide is part of our nutrition cluster — for the full picture of PCOS-friendly
            eating, see our{" "}
            <Link href="/pcos-diet" className="text-pink-600 hover:underline font-medium">
              complete PCOS diet guide
            </Link>.
          </p>
        </section>

        <section id="building-blocks">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Building Blocks of a PCOS Breakfast</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BUILDING_BLOCKS.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl border border-pink-100 shadow-sm p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{b.icon}</span>
                  <h3 className="font-semibold text-gray-900 text-sm">{b.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="ideas" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">10 PCOS-Friendly Breakfast Ideas</h2>
          <div className="space-y-4">
            {IDEAS.map((idea, i) => (
              <div key={idea.name} className="border border-pink-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{i + 1}. {idea.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{idea.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="mistakes" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Common Breakfast Mistakes</h2>
          <ul className="space-y-3">
            {MISTAKES.map((m) => (
              <li key={m} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-pink-500 mt-1 shrink-0">✗</span>
                {m}
              </li>
            ))}
          </ul>
        </section>

        <section id="timing" className="bg-amber-50 rounded-2xl border border-amber-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Meal Timing Tips</h2>
          <ul className="space-y-2">
            {[
              "Try to eat breakfast within 1–2 hours of waking to help regulate your body's blood sugar rhythm",
              "Don't wait until you're overly hungry — this often leads to reaching for quick refined carbs",
              "If you exercise in the morning, a small protein-containing snack beforehand can help too",
              "Batch-prep breakfasts (egg muffins, overnight oats) on a weekend to remove the morning decision fatigue",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-amber-500 mt-1 shrink-0">💡</span>
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
            Always consult a qualified healthcare provider or registered dietitian before making
            major dietary changes.
          </p>
        </section>

        <section className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Want More Personalized Breakfast Ideas?</h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">
            Ask our AI assistant for breakfast ideas based on your preferences, dietary
            restrictions, and schedule.
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
