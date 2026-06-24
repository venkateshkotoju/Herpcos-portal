"use client";

import { useState } from "react";

interface Props {
  variant?: "default" | "compact";
}

export default function NewsletterSignup({ variant = "default" }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to subscribe");

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className={variant === "compact" ? "text-center py-2" : "text-center py-4"}>
        <p className="text-green-600 font-medium text-sm">
          ✓ You&apos;re subscribed! Check your inbox for our PCOS Symptom Checklist.
        </p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 rounded-lg border border-gray-600 bg-gray-800 text-gray-200 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-700 transition-colors disabled:opacity-50 shrink-0"
        >
          {status === "loading" ? "..." : "Join"}
        </button>
      </form>
    );
  }

  return (
    <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
      <h2 className="text-2xl font-bold mb-2">Get Our Free PCOS Checklist</h2>
      <p className="text-pink-100 mb-6 max-w-md mx-auto text-sm leading-relaxed">
        Join 1,000+ women managing PCOS. Get our symptom checklist + weekly
        evidence-based tips delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          className="flex-1 rounded-xl px-4 py-3 text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-white text-pink-600 font-bold px-6 py-3 rounded-xl hover:bg-pink-50 transition-colors disabled:opacity-70 shrink-0"
        >
          {status === "loading" ? "Subscribing..." : "Get Free Checklist"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-pink-200 text-sm mt-3">{errorMsg}</p>
      )}
      <p className="text-xs text-pink-200 mt-4">
        No spam, ever. Unsubscribe anytime.
      </p>
    </div>
  );
}
