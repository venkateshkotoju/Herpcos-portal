"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  CheckIn,
  SYMPTOM_FIELDS,
  average,
  clearEntries,
  emptyCheckIn,
  formatDateDisplay,
  loadEntries,
  persistEntries,
  sortByDateDesc,
  todayISODate,
  upsertEntry,
} from "@/lib/symptomTracker";

const APPOINTMENT_QUESTIONS = [
  "Based on what I've tracked, could these symptoms be related to PCOS or something else?",
  "Would it make sense to check my hormone levels (e.g. testosterone, LH/FSH, insulin) given this pattern?",
  "Is my period pattern something I should be concerned about?",
  "Are there lifestyle changes or treatments you'd recommend given what I've recorded?",
  "How often should I keep tracking, and what changes should prompt me to come back sooner?",
];

const EDUCATIONAL_LINKS = [
  { href: "/pcos-symptoms", emoji: "🔍", title: "PCOS Symptoms", desc: "Learn what each symptom can mean." },
  { href: "/pcos-irregular-periods", emoji: "📅", title: "PCOS & Irregular Periods", desc: "Why cycles get disrupted." },
  { href: "/pcos-lab-results", emoji: "🧪", title: "PCOS Lab Results", desc: "Understand common blood tests." },
];

function Slider({
  id,
  label,
  hint,
  value,
  onChange,
}: {
  id: string;
  label: string;
  hint: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <label htmlFor={id} className="font-medium text-gray-900 text-sm">
          {label}
        </label>
        <span
          className="text-sm font-semibold text-pink-600 bg-pink-50 rounded-full px-2.5 py-0.5 min-w-[2.75rem] text-center"
          aria-hidden="true"
        >
          {value} / 10
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={0}
        max={10}
        step={1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-pink-600 h-2 cursor-pointer"
        aria-valuemin={0}
        aria-valuemax={10}
        aria-valuenow={value}
        aria-valuetext={`${value} out of 10`}
        aria-describedby={`${id}-hint`}
      />
      <p id={`${id}-hint`} className="text-xs text-gray-400 mt-1">
        {hint}
      </p>
    </div>
  );
}

export default function SymptomTrackerApp() {
  const [hydrated, setHydrated] = useState(false);
  const [entries, setEntries] = useState<CheckIn[]>([]);
  const [draft, setDraft] = useState<CheckIn>(() => emptyCheckIn(todayISODate()));
  const [justSaved, setJustSaved] = useState(false);
  const [confirmingClear, setConfirmingClear] = useState(false);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied">("idle");

  // Load from localStorage once, after mount, so the server-rendered and
  // first client-rendered markup match (no data on either side yet).
  useEffect(() => {
    const stored = loadEntries();
    setEntries(stored);
    const today = todayISODate();
    const existingToday = stored.find((e) => e.date === today);
    setDraft(existingToday ?? emptyCheckIn(today));
    setHydrated(true);
  }, []);

  function handleDateChange(newDate: string) {
    const existing = entries.find((e) => e.date === newDate);
    setDraft(existing ?? emptyCheckIn(newDate));
    setJustSaved(false);
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    const toSave: CheckIn = { ...draft, updatedAt: new Date().toISOString() };
    const next = upsertEntry(entries, toSave);
    setEntries(next);
    persistEntries(next);
    setDraft(toSave);
    setJustSaved(true);
  }

  function handleClearConfirmed() {
    clearEntries();
    setEntries([]);
    setDraft(emptyCheckIn(todayISODate()));
    setConfirmingClear(false);
    setJustSaved(false);
  }

  const stats = useMemo(() => {
    const sorted = sortByDateDesc(entries);
    const periodDates = sorted.filter((e) => e.periodStarted).map((e) => e.date);
    const earliest = sorted[sorted.length - 1]?.date;
    const latest = sorted[0]?.date;
    const notes = sorted.filter((e) => e.notes.trim().length > 0);
    return {
      count: entries.length,
      periodDates,
      earliest,
      latest,
      averages: SYMPTOM_FIELDS.map((f) => ({
        key: f.key,
        label: f.label,
        avg: average(entries.map((e) => e[f.key])),
      })),
      notes,
      sorted,
    };
  }, [entries]);

  const summaryText = useMemo(() => {
    if (entries.length === 0) return "";
    const lines: string[] = [];
    lines.push("PCOS Symptom & Period Tracker — Appointment Summary");
    lines.push(
      `Date range: ${formatDateDisplay(stats.earliest!)} – ${formatDateDisplay(stats.latest!)}`
    );
    lines.push(`Check-ins recorded: ${stats.count}`);
    lines.push("");
    lines.push(
      stats.periodDates.length > 0
        ? `Period start dates: ${stats.periodDates.map(formatDateDisplay).join(", ")}`
        : "Period start dates: none recorded"
    );
    lines.push("");
    lines.push("Average symptom severity (0–10):");
    stats.averages.forEach((a) => {
      lines.push(`- ${a.label}: ${a.avg ?? "—"}`);
    });
    if (stats.notes.length > 0) {
      lines.push("");
      lines.push("Notes:");
      stats.notes.forEach((n) => {
        lines.push(`- ${formatDateDisplay(n.date)}: ${n.notes.trim()}`);
      });
    }
    lines.push("");
    lines.push("Questions to discuss with your healthcare professional:");
    APPOINTMENT_QUESTIONS.forEach((q) => lines.push(`- ${q}`));
    return lines.join("\n");
  }, [entries, stats]);

  async function handleCopySummary() {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopyStatus("copied");
      setTimeout(() => setCopyStatus("idle"), 2000);
    } catch {
      // Clipboard API unavailable — the summary text is still visible to select/copy manually.
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-8">
      {/* Medical safety banner */}
      <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6" aria-live="off">
        <div className="flex items-start gap-3">
          <span className="text-2xl" aria-hidden="true">⚠️</span>
          <div>
            <h2 className="font-bold text-amber-900 mb-1">Not a diagnostic tool</h2>
            <p className="text-sm text-amber-800 leading-relaxed">
              This is not a diagnostic tool and does not determine whether you have PCOS.
              It is a personal tracking tool to help you organize information for
              conversations with a healthcare professional.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy notice */}
      <section className="bg-white border border-pink-100 rounded-2xl p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <span className="text-2xl" aria-hidden="true">🔒</span>
          <div>
            <h2 className="font-bold text-gray-900 mb-1">Your data stays on your device</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Your entries are stored locally in this browser. HerPCOS does not send this
              tracker data to our servers. Clearing your browser data, using a different
              device, or using private/incognito mode will not preserve your history.
            </p>
          </div>
        </div>
      </section>

      {/* Check-in form */}
      <section className="bg-white border border-pink-100 rounded-2xl shadow-sm p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Daily check-in</h2>
        <p className="text-sm text-gray-500 mb-6">
          Log today&apos;s symptoms in under a minute. Pick a date to add or edit a past entry.
        </p>

        <form onSubmit={handleSave} className="space-y-6">
          <div>
            <label htmlFor="checkin-date" className="block font-medium text-gray-900 text-sm mb-1.5">
              Date
            </label>
            <input
              id="checkin-date"
              type="date"
              value={draft.date}
              max={todayISODate()}
              onChange={(e) => handleDateChange(e.target.value)}
              className="w-full sm:w-56 rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {SYMPTOM_FIELDS.map((field) => (
              <Slider
                key={field.key}
                id={`checkin-${field.key}`}
                label={field.label}
                hint={field.hint}
                value={draft[field.key]}
                onChange={(value) => setDraft((d) => ({ ...d, [field.key]: value }))}
              />
            ))}
          </div>

          <div className="flex items-center gap-3 bg-pink-50/60 rounded-xl px-4 py-3">
            <input
              id="checkin-period"
              type="checkbox"
              checked={draft.periodStarted}
              onChange={(e) => setDraft((d) => ({ ...d, periodStarted: e.target.checked }))}
              className="w-4 h-4 accent-pink-600"
            />
            <label htmlFor="checkin-period" className="text-sm font-medium text-gray-900">
              My period started on this date
            </label>
          </div>

          <div>
            <label htmlFor="checkin-notes" className="block font-medium text-gray-900 text-sm mb-1.5">
              Notes <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <textarea
              id="checkin-notes"
              value={draft.notes}
              onChange={(e) => setDraft((d) => ({ ...d, notes: e.target.value }))}
              rows={3}
              placeholder="Anything else worth remembering — new symptoms, stress, medication changes…"
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent resize-y"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-pink-600 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-pink-700 transition-colors"
          >
            Save check-in
          </button>

          {justSaved && (
            <p role="status" className="text-sm font-medium text-green-700 flex items-center gap-1.5">
              <span aria-hidden="true">✓</span> Saved for {formatDateDisplay(draft.date)}.
            </p>
          )}
        </form>
      </section>

      {/* Educational links — shown once there is at least one saved entry */}
      {entries.length > 0 && (
        <section className="bg-purple-50/60 border border-purple-100 rounded-2xl p-6 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Want to understand what you&apos;re tracking?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
            {EDUCATIONAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white rounded-xl border border-purple-100 shadow-sm p-4 hover:shadow-md hover:border-purple-300 transition-all"
              >
                <div className="text-2xl mb-2">{link.emoji}</div>
                <p className="font-semibold text-gray-900 text-sm mb-1">{link.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{link.desc}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white rounded-xl border border-purple-100 px-5 py-4">
            <p className="text-sm font-medium text-gray-900">Have a question about PCOS?</p>
            <Link
              href="/chat"
              className="text-purple-600 font-semibold text-sm hover:text-purple-700 inline-flex items-center gap-1 shrink-0"
            >
              Ask the HerPCOS AI Assistant →
            </Link>
          </div>
        </section>
      )}

      {/* History */}
      <section className="bg-white border border-pink-100 rounded-2xl shadow-sm p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-1">History</h2>
        <p className="text-sm text-gray-500 mb-6">
          A simple record of what you&apos;ve logged. HerPCOS does not interpret this data for you.
        </p>

        {!hydrated ? (
          <p className="text-sm text-gray-400">Loading your saved entries…</p>
        ) : entries.length === 0 ? (
          <p className="text-sm text-gray-500">
            No check-ins yet. Save your first entry above to start building your history.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="bg-pink-50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-pink-700">{stats.count}</p>
                <p className="text-xs text-gray-500 mt-0.5">Check-ins</p>
              </div>
              <div className="bg-pink-50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-pink-700">{stats.periodDates.length}</p>
                <p className="text-xs text-gray-500 mt-0.5">Period starts</p>
              </div>
              {stats.averages.slice(0, 2).map((a) => (
                <div key={a.key} className="bg-purple-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-purple-700">{a.avg ?? "—"}</p>
                  <p className="text-xs text-gray-500 mt-0.5">Avg. {a.label.replace(" severity", "")}</p>
                </div>
              ))}
            </div>

            {stats.periodDates.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">Period start dates</h3>
                <div className="flex flex-wrap gap-2">
                  {stats.periodDates.map((d) => (
                    <span key={d} className="bg-rose-100 text-rose-700 text-xs font-medium px-3 py-1.5 rounded-full">
                      {formatDateDisplay(d)}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <h3 className="font-semibold text-gray-900 text-sm mb-3">Timeline</h3>
            <ol className="space-y-3">
              {stats.sorted.map((entry) => (
                <li key={entry.date} className="border border-pink-100 rounded-xl p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <p className="font-semibold text-gray-900 text-sm">
                      {formatDateDisplay(entry.date)}
                    </p>
                    {entry.periodStarted && (
                      <span className="bg-rose-100 text-rose-700 text-xs font-medium px-2.5 py-1 rounded-full">
                        Period started
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 mb-2">
                    {SYMPTOM_FIELDS.map((f) => (
                      <span key={f.key}>
                        {f.label.replace(" severity", "")}: <span className="font-medium text-gray-700">{entry[f.key]}/10</span>
                      </span>
                    ))}
                  </div>
                  {entry.notes.trim() && (
                    <p className="text-sm text-gray-600 leading-relaxed">{entry.notes}</p>
                  )}
                </li>
              ))}
            </ol>
          </>
        )}
      </section>

      {/* Appointment summary */}
      {entries.length > 0 && (
        <section className="bg-white border border-pink-100 rounded-2xl shadow-sm p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Appointment summary</h2>
              <p className="text-sm text-gray-500">
                A plain-language summary you can bring to your next appointment.
              </p>
            </div>
            <button
              type="button"
              onClick={handleCopySummary}
              className="shrink-0 bg-white border-2 border-pink-200 text-pink-600 font-semibold px-4 py-2 rounded-full text-sm hover:border-pink-400 hover:bg-pink-50 transition-colors"
            >
              {copyStatus === "copied" ? "Copied ✓" : "Copy summary"}
            </button>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 space-y-4 text-sm text-gray-700">
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Date range tracked</p>
              <p className="font-medium">
                {formatDateDisplay(stats.earliest!)} – {formatDateDisplay(stats.latest!)}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Check-ins recorded</p>
              <p className="font-medium">{stats.count}</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Period dates recorded</p>
              <p className="font-medium">
                {stats.periodDates.length > 0
                  ? stats.periodDates.map(formatDateDisplay).join(", ")
                  : "None recorded"}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">Average symptom severity</p>
              <ul className="grid grid-cols-2 gap-2">
                {stats.averages.map((a) => (
                  <li key={a.key} className="flex justify-between bg-white rounded-lg px-3 py-2 border border-gray-100">
                    <span>{a.label}</span>
                    <span className="font-semibold">{a.avg ?? "—"}</span>
                  </li>
                ))}
              </ul>
            </div>
            {stats.notes.length > 0 && (
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">Notes</p>
                <ul className="space-y-1.5">
                  {stats.notes.map((n) => (
                    <li key={n.date}>
                      <span className="font-medium">{formatDateDisplay(n.date)}:</span>{" "}
                      {n.notes.trim()}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">
                Questions to discuss with your healthcare professional
              </p>
              <ul className="space-y-1.5 list-disc list-inside">
                {APPOINTMENT_QUESTIONS.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Clear my data */}
      <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
        <h2 className="font-bold text-gray-900 mb-1">Clear my data</h2>
        <p className="text-sm text-gray-500 mb-4">
          Permanently delete every check-in stored in this browser. This cannot be undone.
        </p>
        {!confirmingClear ? (
          <button
            type="button"
            onClick={() => setConfirmingClear(true)}
            disabled={entries.length === 0}
            className="bg-white border-2 border-red-200 text-red-600 font-semibold px-6 py-2.5 rounded-full text-sm hover:border-red-400 hover:bg-red-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Clear my data
          </button>
        ) : (
          <div role="alertdialog" aria-label="Confirm clearing all tracker data" className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-sm font-medium text-red-800 mb-3">
              Are you sure? This will permanently delete all {entries.length} saved check-in
              {entries.length === 1 ? "" : "s"} from this browser.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleClearConfirmed}
                className="bg-red-600 text-white font-semibold px-5 py-2 rounded-full text-sm hover:bg-red-700 transition-colors"
              >
                Yes, delete everything
              </button>
              <button
                type="button"
                onClick={() => setConfirmingClear(false)}
                className="bg-white border border-gray-200 text-gray-700 font-semibold px-5 py-2 rounded-full text-sm hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
