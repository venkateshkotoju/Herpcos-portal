"use client";

import Link from "next/link";
import { useSavedAnswers } from "@/hooks/useSavedAnswers";

function FormattedAnswer({ content }: { content: string }) {
  const lines = content.split("\n");
  return (
    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
      {lines.map((line, i) => {
        const isHeader =
          line.startsWith("What's happening:") ||
          line.startsWith("What you can do:") ||
          line.startsWith("Quick tips:");
        return (
          <span key={i}>
            {isHeader ? <strong>{line}</strong> : line}
            {i < lines.length - 1 && <br />}
          </span>
        );
      })}
    </p>
  );
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function SavedAnswersPage() {
  const { savedAnswers, removeAnswer } = useSavedAnswers();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Saved Answers</h1>
          <p className="text-gray-500 text-sm">
            Responses you&apos;ve bookmarked from the AI assistant.
          </p>
        </div>

        {savedAnswers.length === 0 ? (
          /* Empty state */
          <div className="bg-white rounded-2xl border border-pink-100 shadow-sm px-8 py-16 text-center">
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12 text-pink-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 3a2 2 0 00-2 2v16l7-3 7 3V5a2 2 0 00-2-2H5z"
                />
              </svg>
            </div>
            <p className="text-gray-500 text-sm mb-4">
              No saved answers yet. Click &ldquo;Save answer&rdquo; below any AI response in the
              chat.
            </p>
            <Link
              href="/chat"
              className="inline-block bg-pink-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-pink-700 transition-colors"
            >
              Go to Chat
            </Link>
          </div>
        ) : (
          <ul className="space-y-4">
            {savedAnswers.map((answer) => (
              <li
                key={answer.id}
                className="bg-white rounded-2xl border border-pink-100 shadow-sm px-6 py-5"
              >
                <FormattedAnswer content={answer.content} />

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    Saved {formatDate(answer.savedAt)}
                  </span>
                  <button
                    onClick={() => removeAnswer(answer.id)}
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="Remove saved answer"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m-7 0a2 2 0 012-2h4a2 2 0 012 2m-9 0h10"
                      />
                    </svg>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Back link */}
        {savedAnswers.length > 0 && (
          <div className="mt-8 text-center">
            <Link
              href="/chat"
              className="text-sm text-pink-600 hover:text-pink-700 font-medium transition-colors"
            >
              ← Back to Chat
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
