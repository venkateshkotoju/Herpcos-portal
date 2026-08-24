export interface Guide {
  href: string;
  title: string;
  desc: string;
  emoji: string;
  badge: string | null;
}

export interface GuideCategory {
  slug: string;
  category: string;
  icon: string;
  blurb: string;
  items: Guide[];
}

export const GUIDES: GuideCategory[] = [
  {
    slug: "getting-started",
    category: "Getting Started",
    icon: "🌱",
    blurb: "New to PCOS? Start with the basics.",
    items: [
      {
        href: "/what-is-pcos",
        title: "What Is PCOS?",
        desc: "The complete beginner's guide — what PCOS is, what causes it, the 4 types, how it's diagnosed, and how it's treated.",
        emoji: "💡",
        badge: "Start here",
      },
      {
        href: "/pcos-symptoms",
        title: "PCOS Symptoms Guide",
        desc: "The complete guide to every PCOS symptom — from irregular periods and acne to mood changes and fatigue.",
        emoji: "🔍",
        badge: null,
      },
      {
        href: "/pcos-lab-results",
        title: "PCOS Lab Results",
        desc: "What every blood test means — testosterone, LH/FSH, AMH, insulin, thyroid, and more. Know your numbers.",
        emoji: "🧪",
        badge: null,
      },
      {
        href: "/pcos-vs-thyroid",
        title: "PCOS vs. Thyroid Disorders",
        desc: "How to tell PCOS and thyroid conditions apart — overlapping symptoms, the tests that distinguish them, and why you can have both.",
        emoji: "🦋",
        badge: "New",
      },
    ],
  },
  {
    slug: "nutrition-weight",
    category: "Nutrition & Weight",
    icon: "🥗",
    blurb: "Food, weight, and the insulin connection.",
    items: [
      {
        href: "/pcos-diet",
        title: "Best Diet for PCOS",
        desc: "What to eat, what to avoid, and why food choices matter so much for managing PCOS symptoms.",
        emoji: "🥗",
        badge: null,
      },
      {
        href: "/pcos-weight-loss",
        title: "PCOS Weight Loss Guide",
        desc: "Why losing weight is harder with PCOS — and the evidence-based strategies that actually work.",
        emoji: "⚖️",
        badge: null,
      },
      {
        href: "/insulin-resistance-pcos",
        title: "Insulin Resistance & PCOS",
        desc: "Why insulin resistance drives most PCOS symptoms and what you can do to improve it.",
        emoji: "💉",
        badge: null,
      },
      {
        href: "/best-breakfast-for-pcos",
        title: "Best Breakfast for PCOS",
        desc: "Why breakfast matters more with PCOS, blood-sugar-friendly ideas, and mistakes to avoid first thing in the morning.",
        emoji: "🍳",
        badge: "New",
      },
      {
        href: "/7-day-pcos-meal-plan",
        title: "7-Day PCOS Meal Plan",
        desc: "A full week of beginner-friendly, low-GI meals and snacks to help stabilize insulin and reduce symptoms.",
        emoji: "🗓️",
        badge: "New",
      },
    ],
  },
  {
    slug: "lifestyle",
    category: "Lifestyle",
    icon: "🏃‍♀️",
    blurb: "Movement and daily habits that support hormone balance.",
    items: [
      {
        href: "/best-exercise-for-pcos",
        title: "Best Exercise for PCOS",
        desc: "Which types of exercise improve insulin sensitivity and hormone balance — and why more isn't always better with PCOS.",
        emoji: "🏋️‍♀️",
        badge: "New",
      },
    ],
  },
  {
    slug: "treatment-options",
    category: "Treatment Options",
    icon: "💊",
    blurb: "Medications and supplements that can help.",
    items: [
      {
        href: "/metformin-for-pcos",
        title: "Metformin for PCOS",
        desc: "How this common diabetes medication targets insulin resistance, restores ovulation, and reduces androgens.",
        emoji: "💊",
        badge: null,
      },
      {
        href: "/inositol-for-pcos",
        title: "Inositol for PCOS",
        desc: "Myo-inositol vs D-chiro-inositol, the 40:1 ratio, dosage, and what the research actually shows.",
        emoji: "🌿",
        badge: null,
      },
      {
        href: "/best-supplements-for-pcos",
        title: "Best Supplements for PCOS",
        desc: "Which supplements have real evidence behind them for PCOS — inositol, vitamin D, omega-3s, berberine, and more.",
        emoji: "🧴",
        badge: "New",
      },
    ],
  },
  {
    slug: "hormones-symptoms",
    category: "Hormones & Symptoms",
    icon: "📅",
    blurb: "Understand what your body is doing and why.",
    items: [
      {
        href: "/pcos-irregular-periods",
        title: "PCOS & Irregular Periods",
        desc: "Why PCOS disrupts your cycle and what you can do to restore regular, predictable periods.",
        emoji: "📅",
        badge: null,
      },
      {
        href: "/pcos-hair-loss",
        title: "PCOS Hair Loss",
        desc: "Why androgens cause scalp thinning, which treatments are backed by evidence, and how to slow loss.",
        emoji: "💇",
        badge: null,
      },
      {
        href: "/pcos-acne",
        title: "PCOS Acne",
        desc: "Why PCOS causes jawline and chin breakouts, how it differs from regular acne, and which treatments work.",
        emoji: "🌸",
        badge: "New",
      },
      {
        href: "/pcos-fatigue",
        title: "PCOS Fatigue",
        desc: "Why PCOS leaves you exhausted even after a full night's sleep, and the fixes that make the biggest difference.",
        emoji: "😴",
        badge: "New",
      },
      {
        href: "/lean-pcos",
        title: "Lean PCOS",
        desc: "PCOS without excess weight — how it's different, why it's often missed, and how it's managed.",
        emoji: "🧬",
        badge: "New",
      },
      {
        href: "/pcos-and-sleep",
        title: "PCOS & Sleep",
        desc: "Why PCOS disrupts sleep and raises sleep apnea risk, and evidence-based ways to sleep better.",
        emoji: "🌙",
        badge: "New",
      },
    ],
  },
  {
    slug: "mental-health",
    category: "Mental Health",
    icon: "🧠",
    blurb: "The emotional side of living with PCOS.",
    items: [
      {
        href: "/pcos-and-mental-health",
        title: "PCOS & Mental Health",
        desc: "Why PCOS raises the risk of anxiety and depression, the biology behind it, and support strategies that help.",
        emoji: "🧠",
        badge: "New",
      },
    ],
  },
  {
    slug: "fertility",
    category: "Fertility",
    icon: "🤰",
    blurb: "Trying to conceive or planning a pregnancy with PCOS.",
    items: [
      {
        href: "/pcos-and-pregnancy",
        title: "PCOS & Pregnancy",
        desc: "Getting pregnant with PCOS, fertility treatments, pregnancy risks, and what to expect every step of the way.",
        emoji: "🤰",
        badge: null,
      },
    ],
  },
];

export const TOTAL_GUIDES_COUNT = GUIDES.reduce(
  (n, g) => n + g.items.length,
  0
);
