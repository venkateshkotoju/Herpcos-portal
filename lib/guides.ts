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
