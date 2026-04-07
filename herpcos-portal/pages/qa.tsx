import Head from "next/head";
import { useState } from "react";
import Disclaimer from "../components/Disclaimer";

interface FAQ {
  category: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    category: "Basics",
    question: "What is PCOS?",
    answer:
      "Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder affecting people with ovaries of reproductive age. It involves irregular menstrual cycles, elevated androgen (male hormone) levels, and polycystic ovaries. It affects approximately 1 in 10 people of reproductive age.",
  },
  {
    category: "Basics",
    question: "What causes PCOS?",
    answer:
      "The exact cause is unknown, but factors include insulin resistance (affecting up to 70% of people with PCOS), genetics (it runs in families), low-grade inflammation, and excess androgen production. Lifestyle factors like diet and activity levels can influence severity.",
  },
  {
    category: "Symptoms",
    question: "What are the most common PCOS symptoms?",
    answer:
      "Common symptoms include: irregular or absent periods, excess facial/body hair (hirsutism), acne, hair thinning or loss on the scalp, weight gain (especially abdominal), darkened skin patches (acanthosis nigricans), skin tags, and polycystic ovaries on ultrasound.",
  },
  {
    category: "Symptoms",
    question: "Can I have PCOS without cysts on my ovaries?",
    answer:
      "Yes. Despite the name, you can be diagnosed with PCOS without having visible cysts. Diagnosis is based on at least 2 of 3 criteria: irregular periods, elevated androgens (by blood test or physical symptoms), and polycystic ovaries on ultrasound.",
  },
  {
    category: "Diet & Lifestyle",
    question: "What diet is best for PCOS?",
    answer:
      "A low glycemic index (GI) diet is generally recommended. Focus on whole grains, legumes, vegetables, fruits, lean proteins, and healthy fats. Limit sugar, refined carbohydrates, and ultra-processed foods. Anti-inflammatory foods like berries, salmon, and leafy greens are beneficial.",
  },
  {
    category: "Diet & Lifestyle",
    question: "Does exercise help with PCOS?",
    answer:
      "Yes, exercise is highly beneficial. It improves insulin sensitivity, reduces androgen levels, aids weight management, and improves mood. A combination of aerobic exercise (walking, cycling) and strength training 3-5 times per week is recommended. Even 30 minutes of daily walking can help.",
  },
  {
    category: "Treatment",
    question: "How is PCOS treated?",
    answer:
      "Treatment depends on symptoms and goals. Options include: lifestyle changes (diet and exercise), hormonal contraceptives to regulate periods, metformin for insulin resistance, anti-androgen medications for hair/acne, and fertility treatments if trying to conceive. There is no one-size-fits-all approach.",
  },
  {
    category: "Treatment",
    question: "Can PCOS be cured?",
    answer:
      "Currently there is no cure for PCOS, but symptoms can be effectively managed. Many people find significant improvement through lifestyle changes. Some see their symptoms reduce after menopause. Research into PCOS management is ongoing.",
  },
  {
    category: "Fertility",
    question: "Can I get pregnant with PCOS?",
    answer:
      "Yes, many people with PCOS successfully conceive. PCOS is a leading cause of infertility but is also very treatable. Options include lifestyle modifications, ovulation induction medications (clomiphene, letrozole), and assisted reproductive technologies like IVF if needed.",
  },
  {
    category: "Fertility",
    question: "Does PCOS affect pregnancy?",
    answer:
      "PCOS may slightly increase risks of gestational diabetes, preeclampsia, and preterm birth. However, with proper monitoring and care, most people with PCOS have healthy pregnancies. Managing weight and blood sugar before and during pregnancy reduces these risks.",
  },
  {
    category: "Mental Health",
    question: "Does PCOS affect mental health?",
    answer:
      "Yes. People with PCOS have higher rates of anxiety, depression, and body image concerns. Hormonal imbalances, physical symptoms, and the challenges of managing a chronic condition all contribute. Seeking support from a mental health professional alongside medical treatment is important.",
  },
  {
    category: "Mental Health",
    question: "How can I cope with a PCOS diagnosis?",
    answer:
      "Coping strategies include: educating yourself about PCOS, connecting with support communities, working with a healthcare team you trust, making sustainable lifestyle changes, practicing stress management (meditation, yoga), and considering therapy if anxiety or depression is affecting your quality of life.",
  },
];

const categories = Array.from(new Set(faqs.map((f) => f.category)));

export default function QA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All" ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <>
      <Head>
        <title>Q&A - HerPCOS Portal</title>
        <meta name="description" content="Frequently asked questions about PCOS" />
      </Head>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-700 mb-2">PCOS Q&amp;A Library</h1>
        <p className="text-gray-500 text-sm mb-4">
          Browse common questions about PCOS, organized by topic.
        </p>
        <Disclaimer />

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mt-6 mb-4">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${
              activeCategory === "All"
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white text-purple-600 border-purple-300 hover:bg-purple-50"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${
                activeCategory === cat
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-white text-purple-600 border-purple-300 hover:bg-purple-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 mt-2">
          {filtered.map((item, i) => {
            const idx = faqs.indexOf(item);
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-purple-200 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  className="w-full text-left px-5 py-4 bg-purple-50 hover:bg-purple-100 transition-colors flex justify-between items-center"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="font-semibold text-purple-800 text-sm pr-4">{item.question}</span>
                  <span className="text-purple-500 text-lg flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 py-4 bg-white border-t border-purple-100">
                    <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                    <span className="inline-block mt-3 text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          {filtered.length} question{filtered.length !== 1 ? "s" : ""} found
        </p>
      </div>
    </>
  );
}
