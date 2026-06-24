import { Metadata } from "next";
import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Best Diet for PCOS: What to Eat and Avoid | HerPCOS",
  description:
    "Discover the best PCOS diet with anti-inflammatory foods, low-GI eating, and what to avoid. Evidence-based and beginner-friendly guidance for hormonal health.",
};

const eatFoods = [
  {
    title: "Non-Starchy Vegetables",
    desc: "Leafy greens, broccoli, cauliflower, zucchini, and peppers are low in sugar and rich in fiber. They help stabilize blood sugar and reduce inflammation.",
  },
  {
    title: "Lean Proteins",
    desc: "Chicken, turkey, eggs, tofu, tempeh, and legumes help keep you full, support muscle, and prevent blood sugar spikes when paired with carbohydrates.",
  },
  {
    title: "Healthy Fats",
    desc: "Avocado, olive oil, nuts, and seeds support hormone production and reduce inflammation. Omega-3s from fatty fish like salmon are especially beneficial.",
  },
  {
    title: "Low-Glycemic Carbohydrates",
    desc: "Oats, quinoa, lentils, sweet potato, and berries release glucose slowly, helping you avoid the insulin spikes that worsen PCOS symptoms.",
  },
  {
    title: "Fiber-Rich Foods",
    desc: "Fiber slows digestion, improves gut health, and lowers androgen levels. Aim for 25-35g per day from whole grains, vegetables, and legumes.",
  },
  {
    title: "Anti-Inflammatory Spices",
    desc: "Turmeric, ginger, and cinnamon have evidence-backed anti-inflammatory properties. Cinnamon in particular may help improve insulin sensitivity.",
  },
];

const avoidFoods = [
  {
    title: "Sugary Drinks & Processed Sugar",
    desc: "Sodas, fruit juices, candy, and pastries spike blood sugar rapidly, worsen insulin resistance, and drive inflammation — all of which aggravate PCOS.",
  },
  {
    title: "Refined Carbohydrates",
    desc: "White bread, white rice, pasta, and crackers are quickly broken down into sugar. These can trigger insulin spikes and worsen hormonal imbalance.",
  },
  {
    title: "Trans Fats & Fried Foods",
    desc: "Found in many processed snacks, fast food, and baked goods. Trans fats increase inflammation and negatively affect insulin sensitivity and heart health.",
  },
  {
    title: "Excess Dairy (for some)",
    desc: "Some people with PCOS notice that dairy worsens acne or inflammation. This is not universal — pay attention to how your body responds and adjust accordingly.",
  },
];

const faqs = [
  {
    q: "Is there a specific PCOS diet I should follow?",
    a: "There is no single official PCOS diet, but research supports a low-glycemic, anti-inflammatory approach. This means focusing on whole foods, fiber, lean protein, and healthy fats while limiting refined carbs and added sugars.",
  },
  {
    q: "Does the PCOS diet help with weight loss?",
    a: "A PCOS-friendly diet can support gradual weight loss, but it works differently for everyone. Because insulin resistance is often involved, reducing refined carbohydrates tends to be more effective than simply cutting calories.",
  },
  {
    q: "Can I eat fruit with PCOS?",
    a: "Yes, but opt for lower-sugar fruits like berries, apples, and pears, and pair them with protein or fat to slow glucose absorption. Limit high-sugar fruits like grapes and mangoes if you are managing insulin resistance.",
  },
  {
    q: "Is intermittent fasting good for PCOS?",
    a: "Some people with PCOS benefit from time-restricted eating, but it is not right for everyone. Skipping meals can worsen cortisol and stress hormone levels. Speak with a healthcare provider before starting any fasting protocol.",
  },
  {
    q: "How quickly will diet changes improve PCOS symptoms?",
    a: "Most people notice improvements in energy and mood within 2-4 weeks of consistent dietary changes. Hormonal changes and cycle regulation may take 3-6 months. Consistency matters more than perfection.",
  },
];

const relatedGuides = [
  { href: "/pcos-symptoms", title: "PCOS Symptoms Guide", desc: "Recognize the signs of PCOS" },
  { href: "/pcos-weight-loss", title: "PCOS Weight Loss Guide", desc: "Why it is harder and how to succeed" },
  { href: "/insulin-resistance-pcos", title: "Insulin Resistance & PCOS", desc: "The hidden hormonal connection" },
  { href: "/pcos-irregular-periods", title: "PCOS & Irregular Periods", desc: "Understanding your menstrual cycle" },
];

export default function PcosDietPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          PCOS Nutrition
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Best Diet for PCOS
        </h1>
        <p className="text-2xl font-semibold text-pink-600 mb-6">
          What to Eat, What to Avoid, and Why It Matters
        </p>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Food is one of the most powerful tools for managing PCOS. What you eat directly
          affects your insulin levels, inflammation, and hormone balance — all of which
          drive PCOS symptoms.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
        <Disclaimer />

        {/* Why diet matters */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Diet Matters for PCOS</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-pink-100">
            <p className="text-gray-700 leading-relaxed mb-4">
              Up to 70% of people with PCOS have some degree of insulin resistance — a condition
              where the body does not respond properly to insulin. This causes the pancreas to
              produce even more insulin, which then triggers the ovaries to produce excess
              androgens (male hormones).
            </p>
            <p className="text-gray-700 leading-relaxed">
              A diet that keeps blood sugar stable reduces insulin levels, which in turn lowers
              androgen production. This can improve irregular periods, reduce acne, slow excess
              hair growth, and make weight management easier. Food choices alone will not cure
              PCOS, but they are a foundational piece of any management strategy.
            </p>
          </div>
        </section>

        {/* Foods to eat */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Foods That Help PCOS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {eatFoods.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Foods to avoid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Foods to Limit or Avoid</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {avoidFoods.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-rose-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Practical tips */}
        <section>
          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Practical Eating Tips</h2>
            <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-purple-200 text-purple-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                <span><strong>Eat protein at every meal.</strong> Protein slows digestion and prevents blood sugar spikes, especially when eating carbohydrates.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-purple-200 text-purple-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                <span><strong>Do not skip meals.</strong> Skipping meals can raise cortisol (stress hormone), which worsens insulin resistance and hormonal imbalance.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-purple-200 text-purple-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                <span><strong>Read labels for hidden sugar.</strong> Sugar hides under many names: fructose, dextrose, corn syrup, maltose. Aim for less than 25g of added sugar per day.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-purple-200 text-purple-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                <span><strong>Stay hydrated.</strong> Drinking enough water supports metabolism, reduces cravings, and helps your kidneys flush excess hormones.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-purple-200 text-purple-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</span>
                <span><strong>Progress over perfection.</strong> Small, consistent changes add up. You do not need to overhaul your entire diet overnight.</span>
              </li>
            </ul>
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
            <h2 className="text-2xl font-bold mb-3">Want Personalized Nutrition Guidance?</h2>
            <p className="text-pink-100 mb-6 max-w-xl mx-auto">
              Ask our AI assistant about specific foods, meal planning, or how diet affects
              your individual PCOS symptoms — available 24/7.
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
