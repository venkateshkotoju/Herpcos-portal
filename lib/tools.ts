export interface Tool {
  href: string;
  title: string;
  desc: string;
  emoji: string;
  badge: string | null;
}

export const TOOLS: Tool[] = [
  {
    href: "/pcos-symptom-tracker",
    title: "PCOS Symptom & Period Tracker",
    desc: "Log daily symptoms and period dates privately in your browser, then generate a summary for your next appointment.",
    emoji: "📝",
    badge: "New",
  },
];
