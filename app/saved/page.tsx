"use client";

import Link from "next/link";
import { useSavedAnswers } from "@/hooks/useSavedAnswers";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
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
          <Link
            href="/chat"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-pink-600 mb-4 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Chat
          </Link>
          <div className="flex items-center gap-3">
            <div className="bg-pink-100 p-2.5 rounded-xl">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Saved Answers</h1>
              <p className="text-sm text-gray-500">
                {savedAnswers.length === 0
                  ? "No saved answers yet"
                  : `${savedAnswers.length} saved answer${savedAnswers.length !== 1 ? "s" : ""}`}
              </p>
            </div>
          </div>
        </div>

        {/* Empty state */}
        {savedAnswers.length === 0 && (
          <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-10 text-center">
            <div className="flex justify-center mb-4">
              <svg className="w-12 h-12 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <p className="text-gray-500 mb-2 font-medium">Nothing saved yet</p>
            <p className="text-sm text-gray-400 mb-6">
              Click <span className="font-medium text-pink-500">"Save answer"</span> below any AI response in the chat.
            </p>
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 bg-pink-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-pink-700 transition-colors"
            >
              Go to Chat
            </Link>
          </div>
        )}

        {/* Saved answers list */}
        {savedAnswers.length > 0 && (
          <div className="space-y-4">
            {savedAnswers.map((answer, index) => (
              <div
                key={answer.id}
                className="bg-white rounded-2xl border border-pink-100 shadow-sm p-5 group"
              >
                {/* Card header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-pink-100 text-pink-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                      #{savedAnswers.length - index}
                    </span>
                    <span className="text-xs text-gray-400">{formatDate(answer.savedAt)}</span>
                  </div>
                  <button
                    onClick={() => removeAnswer(answer.id)}
                    title="Remove"
                    className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-400 transition-all p-1 rounded-lg hover:bg-red-50"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>

                {/* Answer content */}
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {answer.content}
                </p>
              </div>
            ))}

            {/* Clear all */}
            <div className="pt-2 text-center">
              <button
                onClick={() => {
                  if (confirm("Remove all saved answers?")) {
                    savedAnswers.forEach((a) => removeAnswer(a.id));
                  }
                }}
                className="text-xs text-gray-400 hover:text-red-500 transition-colors"
              >
                Clear all saved answers
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
