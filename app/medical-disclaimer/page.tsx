import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Disclaimer - HerPCOS Portal",
  description:
    "Important medical disclaimer for HerPCOS Portal. This platform provides general health information only and is not a substitute for professional medical advice.",
};

const LAST_UPDATED = "June 24, 2025";

export default function MedicalDisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Important Notice
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Medical Disclaimer
          </h1>
          <p className="text-gray-500 text-sm">Last updated: {LAST_UPDATED}</p>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Please read this disclaimer carefully before using HerPCOS Portal.
          </p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Primary Warning */}
          <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-8 flex gap-5">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-amber-900 mb-2">
                Not a Substitute for Professional Medical Advice
              </h2>
              <p className="text-amber-800 leading-relaxed">
                The content provided by HerPCOS Portal — including our AI chat assistant, Q&A library,
                articles, and all other materials — is intended for general informational and educational
                purposes only. It does <strong>not</strong> constitute medical advice, diagnosis, or
                treatment, and should never be used as a substitute for consultation with a qualified
                healthcare professional.
              </p>
            </div>
          </div>

          {/* What We Are */}
          <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
              What HerPCOS Portal Is
            </h2>
            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              {[
                "An educational resource providing general information about PCOS, hormonal health, and related lifestyle factors.",
                "An AI-powered assistant that can answer common PCOS-related questions based on publicly available health information.",
                "A community Q&A platform where women can share experiences and learn from one another.",
                "A starting point for understanding PCOS — not a replacement for individualized medical care.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <svg className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* What We Are Not */}
          <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
              What HerPCOS Portal Is Not
            </h2>
            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              {[
                "A licensed medical provider, clinic, or healthcare service.",
                "A source of personalized medical diagnosis or treatment recommendations.",
                "A replacement for regular check-ups, blood work, ultrasounds, or other clinical evaluations.",
                "A crisis support service or emergency medical resource.",
                "A pharmaceutical advisor — nothing on this platform should be interpreted as medication advice.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* AI Limitations */}
          <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
              Limitations of AI-Generated Content
            </h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>
                Our AI chat assistant uses large language model technology to generate responses.
                While we aim for accuracy, AI-generated content may be incomplete, outdated, or
                incorrect in specific contexts. The AI does not know your personal medical history,
                current medications, allergies, or individual circumstances.
              </p>
              <p>
                Always cross-reference information from our AI assistant with your healthcare provider
                before making any decisions about your health, treatment, or medications.
              </p>
            </div>
          </div>

          {/* When to Seek Help */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-red-900 mb-4">
              When to Seek Immediate Medical Attention
            </h2>
            <p className="text-red-800 text-sm mb-4 leading-relaxed">
              Do not rely on this platform if you are experiencing any of the following. Seek
              emergency care immediately:
            </p>
            <ul className="space-y-2 text-red-800 text-sm">
              {[
                "Severe abdominal or pelvic pain",
                "Heavy or uncontrolled bleeding",
                "Chest pain, difficulty breathing, or signs of a blood clot",
                "Sudden severe headache, vision changes, or loss of consciousness",
                "Signs of an allergic reaction or medication overdose",
                "Any symptom you believe may be life-threatening",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 bg-red-100 rounded-xl p-4 text-center">
              <p className="text-red-900 font-bold text-lg">Emergency? Call 911 or your local emergency number.</p>
            </div>
          </div>

          {/* No Doctor-Patient Relationship */}
          <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
              No Doctor-Patient Relationship
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Use of HerPCOS Portal does not create a doctor-patient or any other professional
              healthcare relationship. No information exchanged through this platform, including
              through our AI assistant or contact form, constitutes medical advice or creates any
              duty of care. All health decisions should be made in consultation with a licensed
              healthcare provider who knows your full medical history.
            </p>
          </div>

          {/* Accuracy and Currency */}
          <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
              Accuracy and Currency of Information
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Medical knowledge evolves continuously. While we strive to ensure the information on
              HerPCOS Portal reflects current evidence and guidelines, we cannot guarantee that all
              content is up-to-date at all times. Treatment guidelines, recommended tests, and
              standard of care for PCOS may change. Always consult current clinical resources and
              your healthcare provider for the most current recommendations.
            </p>
          </div>

          {/* Community Content */}
          <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
              Community Content
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our Q&A section may contain experiences, opinions, and information shared by community
              members. This user-generated content does not represent professional medical advice and
              has not been verified by medical professionals. Personal experiences with PCOS vary
              greatly — what works for one person may not be appropriate or safe for another.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
              Limitation of Liability
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              To the fullest extent permitted by law, HerPCOS Portal, its operators, affiliates,
              and contributors shall not be liable for any direct, indirect, incidental, consequential,
              or special damages arising from your use of, or reliance on, any information provided
              through this platform. Your use of this platform is at your own risk.
            </p>
          </div>

          {/* Footer Links */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-xl font-bold mb-2">Your Health Comes First</h2>
            <p className="text-pink-100 text-sm mb-5 max-w-xl mx-auto">
              We&apos;re here to support and educate — but your doctor knows you best.
              Use this portal as a companion to your care, not a replacement for it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/chat"
                className="inline-block bg-white text-pink-600 px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-pink-50 transition-colors"
              >
                Use AI Chat
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-white/20 text-white border border-white/40 px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-white/30 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/privacy-policy" className="text-pink-600 hover:underline">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-pink-600 hover:underline">Terms of Service</Link>
            <Link href="/about" className="text-pink-600 hover:underline">About Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
