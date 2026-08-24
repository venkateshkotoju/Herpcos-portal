import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import AuthorCard from "@/components/AuthorCard";
import GuideSchema from "@/components/GuideSchema";
import QuickAnswer from "@/components/QuickAnswer";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "7-Day PCOS Meal Plan: A Beginner-Friendly Weekly Guide",
  description:
    "A full 7-day, low-GI, protein-forward PCOS meal plan with breakfast, lunch, dinner, and snacks for every day — designed to help stabilize insulin and symptoms.",
  alternates: {
    canonical: "/7-day-pcos-meal-plan",
  },
  openGraph: {
    title: "7-Day PCOS Meal Plan: A Beginner-Friendly Weekly Guide",
    description:
      "A full 7-day, low-GI, protein-forward PCOS meal plan with breakfast, lunch, dinner, and snacks for every day — designed to help stabilize insulin and symptoms.",
    url: "https://www.herpcos.com/7-day-pcos-meal-plan",
    type: "article",
    siteName: "HerPCOS Portal",
    locale: "en_US",
    images: [
      {
        url: "https://www.herpcos.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "7-Day PCOS Meal Plan — HerPCOS Portal",
      },
    ],
  },
};

const TOC = [
  { id: "overview", label: "How This Plan Was Built" },
  { id: "principles", label: "The Principles Behind the Plan" },
  { id: "plan", label: "The Full 7-Day Plan" },
  { id: "grocery", label: "Grocery List Tips" },
  { id: "adapt", label: "How to Adapt This Plan" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const PRINCIPLES = [
  { icon: "🍳", title: "Protein at Every Meal", desc: "20–30g at breakfast, 25–35g at lunch and dinner to blunt blood sugar spikes and support satiety." },
  { icon: "🌾", title: "Low-to-Moderate Glycemic Load", desc: "Whole grains, legumes, and non-starchy vegetables instead of refined carbs and added sugar." },
  { icon: "🥑", title: "Healthy Fats", desc: "Olive oil, avocado, nuts, and fatty fish included regularly to support hormone production and satiety." },
  { icon: "🥦", title: "Fiber-Rich", desc: "Vegetables and legumes at most meals to slow digestion and support gut and hormone health." },
];

const PLAN = [
  {
    day: "Day 1",
    breakfast: "Veggie egg scramble with avocado and a side of berries",
    lunch: "Grilled chicken salad with mixed greens, chickpeas, olive oil vinaigrette",
    dinner: "Baked salmon, roasted broccoli, quinoa",
    snack: "Greek yogurt with a handful of walnuts",
  },
  {
    day: "Day 2",
    breakfast: "Overnight oats with protein powder, cinnamon, and berries",
    lunch: "Turkey and veggie lettuce wraps with hummus",
    dinner: "Stir-fried tofu with vegetables and brown rice",
    snack: "Apple slices with natural almond butter",
  },
  {
    day: "Day 3",
    breakfast: "Cottage cheese toast on sprouted-grain bread with tomato",
    lunch: "Lentil soup with a side salad",
    dinner: "Grilled shrimp with roasted sweet potato and asparagus",
    snack: "Handful of mixed nuts and an orange",
  },
  {
    day: "Day 4",
    breakfast: "Smoothie with protein powder, spinach, frozen berries, nut butter",
    lunch: "Quinoa bowl with black beans, corn, avocado, lime",
    dinner: "Baked chicken thighs, sautéed greens, wild rice",
    snack: "Hard-boiled eggs with cucumber slices",
  },
  {
    day: "Day 5",
    breakfast: "Savory oatmeal with a fried egg and greens",
    lunch: "Tuna salad (Greek-yogurt based) over mixed greens",
    dinner: "Turkey chili with beans and vegetables",
    snack: "Cottage cheese with pineapple",
  },
  {
    day: "Day 6",
    breakfast: "Chia pudding with berries and slivered almonds",
    lunch: "Leftover turkey chili or a grain bowl with rotisserie chicken",
    dinner: "Baked cod, roasted Brussels sprouts, farro",
    snack: "Edamame with sea salt",
  },
  {
    day: "Day 7",
    breakfast: "Tofu scramble with turmeric, vegetables, and whole-grain toast",
    lunch: "Chickpea and vegetable curry with a small portion of brown rice",
    dinner: "Grilled steak or portobello mushroom, roasted vegetables, sweet potato",
    snack: "Greek yogurt with a drizzle of honey and pumpkin seeds",
  },
];

const GROCERY_TIPS = [
  "Buy proteins in bulk (chicken, eggs, tofu, canned fish) and prep 2–3 days at a time",
  "Keep frozen vegetables and berries on hand for quick, no-waste additions",
  "Stock pantry staples like canned beans, lentils, quinoa, and whole oats — all inexpensive and versatile",
  "Choose plain Greek yogurt and add your own fruit to avoid added sugar",
  "Pre-wash and chop vegetables when you get home so healthy options are the easy choice mid-week",
];

const FAQS = [
  {
    q: "Do I have to follow this meal plan exactly?",
    a: "No — think of it as a template, not a rulebook. Swap any meal for another PCOS-friendly option that fits your taste, budget, and schedule, as long as you keep the same general balance of protein, fiber, and lower-GI carbohydrates.",
  },
  {
    q: "Is this meal plan enough calories for weight loss?",
    a: "This plan focuses on food quality and blood-sugar balance rather than a specific calorie target, since calorie needs vary widely by individual. If weight loss is a personal goal, our PCOS weight loss guide covers how to adapt portions appropriately.",
  },
  {
    q: "Can I use this meal plan if I'm vegetarian or vegan?",
    a: "Yes, with substitutions — swap animal proteins for tofu, tempeh, legumes, eggs (if vegetarian), and plant-based protein powder. Pay a little extra attention to protein totals per meal, since plant proteins are sometimes less concentrated by volume.",
  },
  {
    q: "Will this meal plan help with PCOS symptoms?",
    a: "A consistent, low-glycemic, protein-forward eating pattern like this one is associated with improved insulin sensitivity, which is a key driver of PCOS symptoms for many women. Results build over weeks to months of consistency, not days.",
  },
  {
    q: "Can I repeat this meal plan every week?",
    a: "Yes — many people find it easier to stick with a rotating set of PCOS-friendly meals rather than reinventing their diet weekly. Feel free to swap proteins, grains, or vegetables seasonally to keep things interesting while keeping the same overall structure.",
  },
  {
    q: "What if I don't have time to cook every meal?",
    a: "Batch-cook proteins and grains once or twice a week, and lean on simple assemblies (a rotisserie chicken plus a bagged salad plus canned beans) on busy days. The goal is consistency with the core principles, not complexity.",
  },
];

const CITATIONS = [
  { ref: "1", text: "Barrea L, et al. (2021). Nutrition and dietary approaches to the management of PCOS. Nutrients. 13(6):1848." },
  { ref: "2", text: "Shishehgar F, et al. (2019). Comparison of dietary intake between women with PCOS and healthy controls. BMC Endocr Disord. 19:47." },
  { ref: "3", text: "Douglas CC, et al. (2006). Role of diet in the treatment of polycystic ovary syndrome. Fertil Steril. 85(3):679–688." },
  { ref: "4", text: "Moran LJ, et al. (2013). Dietary composition in restoring reproductive and metabolic physiology in overweight women with PCOS. J Clin Endocrinol Metab. 98(1):137–144." },
  { ref: "5", text: "Teede HJ, et al. (2023). International evidence-based guideline for the assessment and management of PCOS. Monash University." },
];

const RELATED = [
  { href: "/what-is-pcos", label: "What Is PCOS?" },
  { href: "/pcos-diet", label: "Best Diet for PCOS" },
  { href: "/best-breakfast-for-pcos", label: "Best Breakfast for PCOS" },
  { href: "/pcos-weight-loss", label: "PCOS Weight Loss Guide" },
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

export default function SevenDayMealPlanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="inline-block bg-white/20 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            PCOS Nutrition Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">7-Day PCOS Meal Plan</h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto leading-relaxed">
            A full week of beginner-friendly, protein-forward, low-GI meals designed to help
            stabilize insulin and support your PCOS symptoms.
          </p>
          <p className="text-pink-200 text-xs mt-4">Last reviewed: August 31, 2026</p>
        </div>
      </div>

      <GuideSchema
        title="7-Day PCOS Meal Plan: A Beginner-Friendly Weekly Guide"
        description="A full 7-day, low-GI, protein-forward PCOS meal plan with breakfast, lunch, dinner, and snacks for every day — designed to help stabilize insulin and symptoms."
        url="https://www.herpcos.com/7-day-pcos-meal-plan"
        datePublished="2026-08-31"
        breadcrumbLabel="7-Day PCOS Meal Plan"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <AuthorCard lastUpdated="August 31, 2026" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-10">
        <QuickAnswer
          question="What does a good PCOS meal plan look like?"
          answer="A PCOS-friendly meal plan centers on protein at every meal (20–35g), fiber-rich vegetables and legumes, healthy fats, and lower-glycemic carbohydrates like whole grains instead of refined ones. This combination helps stabilize insulin, which is a key driver of PCOS symptoms. Below is a full 7-day plan built on these principles."
        />

        <TableOfContents items={TOC} />

        <section id="overview" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8 scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How This Plan Was Built</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            This 7-day plan translates the core principles of PCOS-friendly eating — outlined in
            detail in our{" "}
            <Link href="/pcos-diet" className="text-pink-600 hover:underline font-medium">
              PCOS diet guide
            </Link>{" "}
            — into a practical, day-by-day structure. It&apos;s designed for beginners: no
            specialty ingredients, no strict calorie counting, and easy substitutions throughout.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every day includes breakfast, lunch, dinner, and one snack, each built around
            protein, fiber, and lower-glycemic carbohydrates to help minimize the blood sugar
            swings that drive many PCOS symptoms.
          </p>
        </section>

        <section id="principles">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Principles Behind the Plan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl border border-pink-100 shadow-sm p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{p.icon}</span>
                  <h3 className="font-semibold text-gray-900 text-sm">{p.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="plan" className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">The Full 7-Day Plan</h2>
          {PLAN.map((d) => (
            <div key={d.day} className="bg-white rounded-2xl border border-pink-100 shadow-sm p-6">
              <h3 className="font-bold text-pink-600 mb-3">{d.day}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <p><span className="font-semibold text-gray-900">Breakfast: </span><span className="text-gray-600">{d.breakfast}</span></p>
                <p><span className="font-semibold text-gray-900">Lunch: </span><span className="text-gray-600">{d.lunch}</span></p>
                <p><span className="font-semibold text-gray-900">Dinner: </span><span className="text-gray-600">{d.dinner}</span></p>
                <p><span className="font-semibold text-gray-900">Snack: </span><span className="text-gray-600">{d.snack}</span></p>
              </div>
            </div>
          ))}
        </section>

        <section id="grocery" className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Grocery List Tips</h2>
          <ul className="space-y-3">
            {GROCERY_TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-pink-500 mt-1 shrink-0">✓</span>
                {tip}
              </li>
            ))}
          </ul>
        </section>

        <section id="adapt" className="bg-amber-50 rounded-2xl border border-amber-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Adapt This Plan</h2>
          <ul className="space-y-2">
            {[
              "Swap any protein, grain, or vegetable for a similar option you already enjoy",
              "Adjust portion sizes based on your hunger, activity level, and goals",
              "If you have food allergies or intolerances, substitute freely — the structure matters more than specific ingredients",
              "Pair this plan with movement — see our exercise guide for PCOS-specific recommendations",
              "Talk to a registered dietitian for a version tailored to your labs, medications, and preferences",
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
            This content is for informational purposes only and does not constitute medical or
            nutrition advice. Always consult a qualified healthcare provider or registered
            dietitian before making major dietary changes.
          </p>
        </section>

        <section className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Want a Meal Plan Tailored to You?</h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">
            Ask our AI assistant to adapt this plan around your allergies, preferences, or budget.
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
