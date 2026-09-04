// Local-only data layer for the PCOS Symptom & Period Tracker.
// Entries never leave the browser — see STORAGE_KEY usage in SymptomTrackerApp.

export interface CheckIn {
  date: string; // YYYY-MM-DD, local date
  acneSeverity: number; // 0-10
  hairGrowthSeverity: number; // 0-10
  pelvicPainSeverity: number; // 0-10
  moodSeverity: number; // 0-10
  periodStarted: boolean;
  notes: string;
  updatedAt: string; // ISO timestamp of last save
}

export type SymptomKey =
  | "acneSeverity"
  | "hairGrowthSeverity"
  | "pelvicPainSeverity"
  | "moodSeverity";

export const SYMPTOM_FIELDS: { key: SymptomKey; label: string; hint: string }[] = [
  { key: "acneSeverity", label: "Acne severity", hint: "0 = none, 10 = severe" },
  { key: "hairGrowthSeverity", label: "Hair growth severity", hint: "0 = none, 10 = severe" },
  { key: "pelvicPainSeverity", label: "Pelvic pain severity", hint: "0 = none, 10 = severe" },
  { key: "moodSeverity", label: "Mood symptoms", hint: "0 = none, 10 = severe" },
];

export const STORAGE_KEY = "herpcos_symptom_tracker_v1";

export function emptyCheckIn(date: string): CheckIn {
  return {
    date,
    acneSeverity: 0,
    hairGrowthSeverity: 0,
    pelvicPainSeverity: 0,
    moodSeverity: 0,
    periodStarted: false,
    notes: "",
    updatedAt: "",
  };
}

export function loadEntries(): CheckIn[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as CheckIn[];
  } catch {
    return [];
  }
}

export function persistEntries(entries: CheckIn[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function clearEntries() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}

export function upsertEntry(entries: CheckIn[], entry: CheckIn): CheckIn[] {
  const next = entries.filter((e) => e.date !== entry.date);
  next.push(entry);
  return sortByDateDesc(next);
}

export function sortByDateDesc(entries: CheckIn[]): CheckIn[] {
  return [...entries].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function average(nums: number[]): number | null {
  if (nums.length === 0) return null;
  return Math.round((nums.reduce((sum, n) => sum + n, 0) / nums.length) * 10) / 10;
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

export function todayISODate(): string {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

// Parses a "YYYY-MM-DD" string as a local date (avoids the UTC-midnight
// shift that new Date("YYYY-MM-DD") introduces in negative UTC offsets).
export function parseLocalDate(dateStr: string): Date {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function formatDateDisplay(dateStr: string): string {
  return parseLocalDate(dateStr).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
