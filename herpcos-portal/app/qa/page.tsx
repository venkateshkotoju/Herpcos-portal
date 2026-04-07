"use client";

import { useState } from "react";
import Disclaimer from "../components/Disclaimer";

// Categories and Q&A data
const categories = ["All", "Symptoms", "Diet & Lifestyle", "Treatment", "Fertility"];

type QAItem = {
  id: number;
  category: string;
  question: string;
  answer: string;
};

const qaItems: QAItem[] = [
  {
    id: 1,
    category: "Symptoms",
    question: "What are the most common symptoms of PCOS?",
    answer:
      "The most common symptoms include irregular or missed periods, excess androgen (leading to acne, excess facial/body hair, or male-pattern baldness), and polycystic ovaries visible on ultrasound. Other symptoms can include weight gain, fatigue, mood changes, and difficulty getting pregnant.",
  },
  {
    id: 2,
    category: "Symptoms",
    question: "Why do women with PCOS have irregular periods?",
    answer:
      "PCOS disrupts the normal hormonal signals that regulate the menstrual cycle. Elevated androgen and LH levels, combined with insulin resistance, prevent regular ovulation. Without consistent ovulation, periods become irregular, infrequent, or absent altogether.",
  },
  {
    id: 3,
    category: "Symptoms",
    question: "Does PCOS cause hair loss?",
    answer:
      "Yes. Elevated androgens in PCOS can cause androgenic alopecia — thinning hair on the scalp in a pattern similar to male-pattern baldness. Simultaneously, hirsutism (unwanted hair on the face, chest, or back) may occur due to the same hormonal imbalance.",
  },
  {
    id: 4,
    category: "Symptoms",
    question: "Is weight gain always a sign of PCOS?",
    answer:
      "Not necessarily. While many women with PCOS experience weight gain — particularly around the abdomen — lean women can also have PCOS. Insulin resistance contributes to weight gain, but PCOS diagnosis is not dependent on weight.",
  },
  {
    id: 5,
    category: "Diet & Lifestyle",
    question: "What diet is best for managing PCOS?",
    answer:
      "A low-glycaemic index (GI) diet is generally recommended. This means favouring whole grains, legumes, vegetables, lean proteins, and healthy fats while minimising refined carbs, sugary drinks, and processed foods. Anti-inflammatory foods like berries, fatty fish, and leafy greens are especially helpful.",
  },
  {
    id: 6,
    category: "Diet & Lifestyle",
    question: "Does exercise help with PCOS?",
    answer:
      "Absolutely. Regular physical activity — especially a mix of cardio and strength training — improves insulin sensitivity, helps with weight management, and can restore more regular ovulation. Even 30 minutes of moderate exercise most days can make a meaningful difference.",
  },
  {
    id: 7,
    category: "Diet & Lifestyle",
    question: "Can stress worsen PCOS symptoms?",
    answer:
      "Yes. Chronic stress raises cortisol levels, which can worsen insulin resistance and hormonal imbalance. Stress management techniques such as mindfulness, yoga, adequate sleep, and regular exercise can help reduce the hormonal burden of PCOS.",
  },
  {
    id: 8,
    category: "Diet & Lifestyle",
    question: "Should I avoid dairy with PCOS?",
    answer:
      "Evidence is mixed. Some women report improvements when reducing dairy, possibly because dairy can influence IGF-1 and androgen levels. Others tolerate it fine. It may be worth experimenting under guidance from a dietitian to see how your body responds.",
  },
  {
    id: 9,
    category: "Treatment",
    question: "What medications are used to treat PCOS?",
    answer:
      "Common medications include combined oral contraceptives (to regulate periods and reduce androgens), metformin (to improve insulin sensitivity), spironolactone or other anti-androgens (for hirsutism and acne), and clomiphene or letrozole (to stimulate ovulation for those trying to conceive).",
  },
  {
    id: 10,
    category: "Treatment",
    question: "Is there a cure for PCOS?",
    answer:
      "There is currently no cure for PCOS. However, symptoms can be effectively managed with lifestyle changes, medications, and ongoing monitoring. Many women experience significant improvement — and even restoration of regular cycles — with the right treatment approach.",
  },
  {
    id: 11,
    category: "Treatment",
    question: "Can inositol supplements help with PCOS?",
    answer:
      "Research suggests myo-inositol and D-chiro-inositol may improve insulin sensitivity, hormone levels, and ovulation in some women with PCOS. They are generally considered safe, but you should discuss dosage and suitability with your doctor before starting any supplement.",
  },
  {
    id: 12,
    category: "Fertility",
    question: "Can women with PCOS get pregnant?",
    answer:
      "Yes — most women with PCOS can and do get pregnant. PCOS is the most common cause of ovulatory infertility, but ovulation can often be restored through lifestyle changes, medications like letrozole or clomiphene, or assisted reproductive technologies (ART) like IVF if needed.",
  },
  {
    id: 13,
    category: "Fertility",
    question: "Does PCOS increase miscarriage risk?",
    answer:
      "Some studies suggest a slightly elevated risk of miscarriage in women with PCOS, possibly related to insulin resistance or elevated LH levels. Managing these factors before and during pregnancy — often with metformin — may help reduce this risk.",
  },
  {
    id: 14,
    category: "Fertility",
    question: "Will PCOS affect my pregnancy?",
    answer:
      "Women with PCOS have a higher risk of gestational diabetes, pre-eclampsia, and preterm birth. Close monitoring by an obstetrician familiar with PCOS is important. Lifestyle optimisation before pregnancy can help reduce these risks significantly.",
  },
];

// Single expandable Q&A card
function QACard({ item }: { item: QAItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left hover:bg-rose-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-medium text-slate-700 text-sm leading-relaxed">
          {item.question}
        </span>
        <span
          className={`mt-0.5 shrink-0 text-rose-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 text-sm text-slate-500 leading-relaxed border-t border-slate-50">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function QAPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = qaItems.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      search === "" ||
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">PCOS Q&amp;A</h1>
        <p className="text-sm text-slate-400 mt-1">
          Expert answers to the most common questions about PCOS.
        </p>
      </div>

      <Disclaimer />

      {/* Search */}
      <input
        type="text"
        placeholder="Search questions…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white placeholder-slate-400"
      />

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-pointer ${
              activeCategory === cat
                ? "bg-rose-500 text-white border-rose-500"
                : "bg-white text-slate-600 border-slate-200 hover:border-rose-300 hover:text-rose-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Q&A List */}
      {filtered.length > 0 ? (
        <div className="space-y-3">
          {filtered.map((item) => (
            <QACard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-slate-400">
          <p className="text-4xl mb-3">🔍</p>
          <p className="text-sm">No questions found. Try a different search term or category.</p>
        </div>
      )}
    </div>
  );
}
