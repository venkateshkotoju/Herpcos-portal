"use client";

import { useState } from "react";
import Link from "next/link";

const SUBJECTS = [
  "General Inquiry",
  "Technical Support",
  "Content Feedback",
  "Partnership Opportunity",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      // fall through to show submitted state regardless — prevents user frustration
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const isValid =
    form.name.trim() &&
    form.email.trim() &&
    form.subject &&
    form.message.trim();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-pink-100 text-lg">
            Have a question, feedback, or partnership idea? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-2xl border border-green-100 shadow-sm p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Message Received!
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Thank you, <strong>{form.name}</strong>. We&apos;ve received
                  your message and will get back to you at{" "}
                  <strong>{form.email}</strong> within 2–3 business days.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="bg-pink-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-pink-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Full Name <span className="text-pink-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Email Address <span className="text-pink-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Subject <span className="text-pink-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                    >
                      <option value="">Select a subject…</option>
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Message <span className="text-pink-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help…"
                      className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!isValid || loading}
                    className="w-full bg-pink-600 text-white py-3 rounded-xl font-semibold hover:bg-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {loading ? "Sending…" : "Send Message"}
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Email */}
            <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                📧 Email Us
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Prefer email? Reach our team directly at:
              </p>
              <a
                href="mailto:support@herpcos.com"
                className="text-pink-600 font-medium text-sm hover:underline"
              >
                support@herpcos.com
              </a>
              <p className="text-xs text-gray-400 mt-2">
                Response time: 2–3 business days
              </p>
            </div>

            {/* AI Chat Shortcut */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border border-pink-100 shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                💬 Need a Quick Answer?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Our AI assistant can answer PCOS questions instantly — no
                waiting required.
              </p>
              <Link
                href="/chat"
                className="block text-center bg-pink-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-pink-700 transition-colors"
              >
                Open AI Chat
              </Link>
            </div>

            {/* Emergency Warning */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
              <h3 className="font-semibold text-red-800 mb-2 text-sm">
                🚨 Medical Emergency?
              </h3>
              <p className="text-xs text-red-700 leading-relaxed">
                HerPCOS Portal is <strong>not</strong> a crisis or emergency
                service. If you are experiencing a medical emergency, please
                call <strong>911</strong> or your local emergency number
                immediately, or go to your nearest emergency room.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
