"use client";

import { useState } from "react";
import Disclaimer from "@/components/Disclaimer";

interface QAItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  upvotes: number;
  timestamp: string;
}

const QA_DATA: QAItem[] = [
  {
    id: "1",
    question: "What are the main symptoms of PCOS?",
    answer:
      "The main symptoms of PCOS include irregular or missed periods, excess androgen (which can cause hirsutism — excess facial or body hair), acne, thinning hair on the scalp, weight gain or difficulty losing weight, dark patches of skin, and skin tags. Many women also experience fertility challenges. Symptoms vary significantly from person to person.",
    category: "Symptoms",
    upvotes: 47,
    timestamp: "3 days ago",
  },
  {
    id: "2",
    question: "Is PCOS hereditary?",
    answer:
      "Yes, PCOS has a strong genetic component. If your mother or sister has PCOS, you are at a higher risk of developing it yourself. Research suggests it may be inherited through both the maternal and paternal lines. However, genetics is only one factor — environmental influences like diet and lifestyle also play an important role.",
    category: "Genetics",
    upvotes: 31,
    timestamp: "1 week ago",
  },
  {
    id: "3",
    question: "Can I get pregnant if I have PCOS?",
    answer:
      "Yes, many women with PCOS do get pregnant, sometimes without any medical assistance. PCOS is a leading cause of infertility, but it does not mean you cannot conceive. Treatments such as lifestyle changes, ovulation-inducing medications (e.g., letrozole or clomiphene), and assisted reproductive technologies (ART) like IVF can significantly improve your chances. Consult a reproductive endocrinologist for personalized advice.",
    category: "Fertility",
    upvotes: 62,
    timestamp: "2 weeks ago",
  },
  {
    id: "4",
    question: "What diet is best for managing PCOS?",
    answer:
      "A low-glycemic index (GI) diet is widely recommended for PCOS. This means eating whole grains, legumes, vegetables, and lean proteins while minimizing refined carbohydrates and sugars. Anti-inflammatory foods like berries, leafy greens, fatty fish (rich in omega-3s), and olive oil may also help. Aim for balanced meals that stabilize blood sugar levels. Working with a registered dietitian familiar with PCOS can be extremely helpful.",
    category: "Nutrition",
    upvotes: 55,
    timestamp: "3 weeks ago",
  },
  {
    id: "5",
    question: "What is the link between PCOS and mental health?",
    answer:
      "PCOS is associated with higher rates of anxiety, depression, and body image concerns. Hormonal imbalances, the challenges of managing a chronic condition, and symptoms like acne, weight gain, and hair changes can all take a toll on mental wellbeing. It's important to address mental health as part of comprehensive PCOS care. Therapy, support groups, mindfulness, and in some cases medication can all be helpful.",
    category: "Mental Health",
    upvotes: 43,
    timestamp: "1 month ago",
  },
  {
    id: "6",
    question: "How is PCOS diagnosed?",
    answer:
      "PCOS is typically diagnosed using the Rotterdam criteria, which requires at least 2 of the following 3 features: (1) irregular or absent periods, (2) clinical or biochemical signs of elevated androgens (e.g., hirsutism, acne, elevated testosterone levels), and (3) polycystic ovaries on ultrasound. Your doctor may also run blood tests to check hormone levels, blood sugar, cholesterol, and rule out other conditions.",
    category: "Diagnosis",
    upvotes: 38,
    timestamp: "1 month ago",
  },
];

const CATEGORIES = [
  "All",
  "Symptoms",
  "Genetics",
  "Fertility",
  "Nutrition",
  "Mental Health",
  "Diagnosis",
];

export default function QAPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [upvoted, setUpvoted] = useState<Set<string>>(new Set());

  const filtered = QA_DATA.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleUpvote = (id: string) => {
    setUpvoted((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Community Q&amp;A
          </h1>
          <p className="text-gray-500">
            Browse frequently asked questions about PCOS, answered with care.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent bg-white text-sm"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? "bg-pink-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-pink-300 hover:text-pink-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Disclaimer */}
        <Disclaimer />

        {/* Q&A List */}
        <div className="mt-6 space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <svg
                className="w-12 h-12 mx-auto mb-3 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="font-medium">No questions found</p>
              <p className="text-sm mt-1">Try adjusting your search or filter</p>
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                  onClick={() =>
                    setExpandedId(expandedId === item.id ? null : item.id)
                  }
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        {item.timestamp}
                      </span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {item.question}
                    </p>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 transition-transform ${
                      expandedId === item.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {expandedId === item.id && (
                  <div className="px-6 pb-5 border-t border-gray-50">
                    <p className="text-sm text-gray-700 leading-relaxed mt-4">
                      {item.answer}
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() => handleUpvote(item.id)}
                        className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border transition-colors ${
                          upvoted.has(item.id)
                            ? "bg-pink-50 text-pink-600 border-pink-200"
                            : "text-gray-500 border-gray-200 hover:border-pink-200 hover:text-pink-600"
                        }`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill={upvoted.has(item.id) ? "currentColor" : "none"}
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          />
                        </svg>
                        Helpful (
                        {item.upvotes + (upvoted.has(item.id) ? 1 : 0)})
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Ask a Question CTA */}
        <div className="mt-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-xl font-bold mb-2">Have a question?</h2>
          <p className="text-pink-100 mb-5 text-sm">
            Can&apos;t find your answer? Chat with our AI assistant for
            personalized guidance.
          </p>
          <a
            href="/chat"
            className="bg-white text-pink-600 px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-pink-50 transition-colors"
          >
            Ask the AI
          </a>
        </div>
      </div>
    </div>
  );
}
