import { Metadata } from "next";
import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "PCOS Weight Loss Guide: Why It's Harder & How to Succeed | HerPCOS",
  description:
    "Struggling to lose weight with PCOS? Learn why weight loss is harder with PCOS and discover evidence-based strategies that actually work for hormonal health.",
};

const strategies = [
  {
    title: "Eat Low-Glycemic Foods",
    desc: "Switching to low-GI carbohydrates (oats, lentils, sweet potato) reduces insulin spikes, which is the most direct way to address the hormonal root of weight gain in PCOS.",
  },
  {
    title: "Prioritize Protein at Every Meal",
    desc: "Protein keeps you full longer, preserves muscle mass during weight loss, and prevents the blood sugar swings that cause cravings. Aim for 25-30g per meal.",
  },
  {
    title: "Strength Training",
    desc: "Building muscle increases insulin sensitivity and boosts your resting metabolism. Even 2-3 sessions per week of resistance training can make a meaningful difference.",
  },
  {
    title: "Regular Low-Impact Cardio",
    desc: "Walking, swimming, and cycling lower cortisol (stress hormone) while improving insulin sensitivity without over-stressing the body. 30 minutes most days is a solid target.",
  },
  {
    title: "Manage Stress Actively",
    desc: "High cortisol directly increases insulin resistance and promotes fat storage around the abdomen. Breathwork, yoga, and quality sleep are not optional extras — they are part of the strategy.",
  },
  {
    title: "Prioritize Sleep",
    desc: "Poor sleep raises ghrelin (hunger hormone), lowers leptin (fullness hormone), and worsens insulin resistance. Aim for 7-9 hours per night as a non-negotiable foundation.",
  },
];

const faqs = [
  {
    q: "Why is losing weight so hard with PCOS?",
    a: "Insulin resistance — present in up to 70% of people with PCOS — causes the body to store more fat and makes burning fat harder. Additionally, high androgen levels affect metabolism, and disrupted hormones can increase appetite. This is a biological disadvantage, not a willpower problem.",
  },
  {
    q: "How much weight do I need to lose to see improvements in PCOS symptoms?",
    a: "Research shows that losing just 5-10% of your body weight can significantly improve menstrual regularity, reduce androgen levels, and improve insulin sensitivity. Small wins have a real hormonal impact.",
  },
  {
    q: "Should I count calories with PCOS?",
    a: "Calorie awareness can be useful, but many people with PCOS find that focusing on food quality (reducing refined carbs, increasing protein and fiber) is more effective than strict calorie counting. Eating the right foods often naturally reduces calorie intake without deprivation.",
  },
  {
    q: "Is a low-carb or keto diet good for PCOS weight loss?",
    a: "Low-carbohydrate diets can be effective for PCOS because they directly reduce insulin levels. However, very low-carb diets are not necessary for everyone. A moderate low-GI approach works well for most people and is easier to sustain long-term.",
  },
  {
    q: "Why am I gaining weight even while eating healthily?",
    a: "With PCOS, the type of carbohydrates you eat matters as much as overall calories. Even healthy-seeming foods (fruit juice, whole wheat bread, low-fat yogurt) can spike insulin and stall weight loss. It is also worth checking thyroid function with your doctor, as thyroid issues frequently occur alongside PCOS.",
  },
];

const relatedGuides = [
  { href: "/pcos-symptoms", title: "PCOS Symptoms Guide", desc: "Recognize the signs of PCOS" },
  { href: "/pcos-diet", title: "Best Diet for PCOS", desc: "What to eat for hormone balance" },
  { href: "/insulin-resistance-pcos", title: "Insulin Resistance & PCOS", desc: "The root cause of PCOS weight gain" },
  { href: "/pcos-irregular-periods", title: "PCOS & Irregular Periods", desc: "Understanding your menstrual cycle" },
];

export default function PcosWeightLossPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          PCOS & Weight
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          PCOS Weight Loss Guide
        </h1>
        <p className="text-2xl font-semibold text-pink-600 mb-6">
          Why It Is Harder — and What Actually Works
        </p>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          If you feel like you are doing everything right but still struggling to lose weight,
          you are not imagining it. PCOS creates real biological barriers to weight loss —
          and understanding them is the first step to overcoming them.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
        <Disclaimer />

        {/* Why harder */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why PCOS Makes Weight Loss Harder
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-pink-100">
            <p className="text-gray-700 leading-relaxed mb-4">
              PCOS creates a hormonal environment that works against weight loss in several ways.
              Insulin resistance — present in up to 70% of people with PCOS — means the body
              produces more insulin than it should. High insulin signals the body to store fat
              (especially around the abdomen) and makes it harder to burn fat for energy.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Elevated androgens (male hormones) further affect body composition, making fat
              storage more likely. High cortisol from stress, poor sleep, and chronic
              inflammation all compound the problem.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The result: your body is working against you in ways that standard dieting advice
              does not account for. This is not a willpower failure — it is a hormonal one.
            </p>
          </div>
        </section>

        {/* Key stat */}
        <section>
          <div className="bg-pink-600 rounded-2xl py-10 px-8 text-center text-white">
            <p className="text-5xl font-bold mb-2">5–10%</p>
            <p className="text-pink-200 text-lg">
              Body weight loss can significantly improve menstrual regularity, androgen levels,
              and insulin sensitivity in PCOS
            </p>
          </div>
        </section>

        {/* Strategies */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Evidence-Based Strategies That Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {strategies.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mindset callout */}
        <section>
          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Set Realistic Expectations</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Weight loss with PCOS is typically slower than without it — often 0.5–1 lb per
              week when following a consistent plan. This is not failure; it is the reality
              of working within a hormonal condition.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Focus on measurable non-scale wins: more regular periods, clearer skin, improved
              energy, and reduced cravings. These are signs that your hormones are responding,
              even before the scale moves significantly.
            </p>
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
            <h2 className="text-2xl font-bold mb-3">Struggling With PCOS Weight Gain?</h2>
            <p className="text-pink-100 mb-6 max-w-xl mx-auto">
              Get personalized, evidence-based answers from our AI assistant — available 24/7
              to help you understand your body and build a plan that works.
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
