import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Disclaimer – HerPCOS Portal",
  description:
    "Important medical disclaimer for HerPCOS Portal. Understand the limitations of AI health information and when to seek professional care.",
};

export default function MedicalDisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h1 className="text-4xl font-bold mb-3">Medical Disclaimer</h1>
          <p className="text-pink-100 text-lg max-w-2xl mx-auto">
            Please read this disclaimer carefully before using HerPCOS Portal.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        {/* What We Are */}
        <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            What HerPCOS Portal Is
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            HerPCOS Portal is an <strong>educational and informational platform</strong>{" "}
            dedicated to helping women learn about Polycystic Ovary Syndrome
            (PCOS). We provide:
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            {[
              "General educational content about PCOS symptoms, causes, and management",
              "An AI-powered chat assistant for answering informational questions",
              "A community Q&A section with general health information",
              "Links and references to reputable medical sources and guidelines",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-pink-500 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* What We Are Not */}
        <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            What HerPCOS Portal Is Not
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            HerPCOS Portal is <strong>not</strong> a medical service and does not
            provide medical care in any form. Specifically, we are:
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            {[
              "Not a licensed medical provider, clinic, or healthcare facility",
              "Not a substitute for professional medical advice, diagnosis, or treatment",
              "Not a crisis or emergency service",
              "Not capable of examining you, reviewing your medical history, or ordering tests",
              "Not responsible for actions taken based on content found on this site",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✗</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* AI Limitations */}
        <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            AI Assistant Limitations
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our AI chat assistant is designed to provide general educational
            information about PCOS. You should be aware of its limitations:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "🤖",
                title: "Not a Clinician",
                desc: "The AI has no medical license and cannot diagnose conditions, prescribe treatments, or review lab results.",
              },
              {
                icon: "📅",
                title: "Knowledge Cutoff",
                desc: "AI responses are based on training data with a knowledge cutoff date and may not reflect the latest medical guidelines.",
              },
              {
                icon: "⚠️",
                title: "Potential Errors",
                desc: "AI can produce inaccurate or incomplete information. Always verify important health information with a qualified provider.",
              },
              {
                icon: "🧬",
                title: "No Personal Context",
                desc: "The AI does not know your personal medical history, medications, allergies, or individual health circumstances.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-pink-50 rounded-xl p-4"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Care — Red Callout */}
        <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-7">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🚨</span>
            <h2 className="text-xl font-bold text-red-800">
              When to Seek Emergency Care
            </h2>
          </div>
          <p className="text-red-700 text-sm leading-relaxed mb-5">
            <strong>Do not use HerPCOS Portal in a medical emergency.</strong>{" "}
            Call <strong>911</strong> (or your local emergency number) immediately if you
            or someone else is experiencing any of the following:
          </p>
          <ul className="space-y-2 text-sm text-red-700 mb-5">
            {[
              "Severe abdominal or pelvic pain",
              "Signs of a heart attack (chest pain, shortness of breath, arm pain)",
              "Signs of a stroke (face drooping, arm weakness, speech difficulty)",
              "Severe allergic reaction or anaphylaxis",
              "Thoughts of suicide or self-harm",
              "Ectopic pregnancy symptoms (sharp one-sided pain, dizziness, shoulder pain)",
              "Ovarian hyperstimulation syndrome (OHSS) with severe bloating",
              "Any symptom you believe is life-threatening",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="font-bold text-red-500 mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="bg-red-100 rounded-xl px-5 py-3 text-center">
            <span className="text-2xl font-extrabold text-red-700">
              Emergency: Call 911
            </span>
          </div>
        </div>

        {/* No Doctor-Patient Relationship */}
        <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            No Doctor-Patient Relationship
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Use of HerPCOS Portal does not create a doctor-patient,
            therapist-patient, or any other professional healthcare relationship
            between you and HerPCOS Portal, its team, or any affiliated
            individuals. Communications through this site — including through
            the AI assistant, Q&amp;A section, or contact form — do not
            constitute the provision of medical advice or professional
            healthcare services.
          </p>
        </div>

        {/* Liability */}
        <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            HerPCOS Portal, its owners, operators, employees, and affiliates
            shall not be liable for any direct, indirect, incidental, special,
            or consequential damages arising from your use of, or inability to
            use, this site or its content. This includes, without limitation,
            any harm resulting from reliance on information provided by the AI
            assistant or any other feature of the portal. You use this service
            entirely at your own risk.
          </p>
        </div>

        {/* Amber Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>⚠️ Always consult your healthcare provider.</strong> If you
            have any questions or concerns about your health — including PCOS
            symptoms, medications, or treatment options — please speak with a
            qualified medical professional such as a gynecologist,
            endocrinologist, or your primary care physician.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/chat"
            className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors"
          >
            Return to AI Chat
          </Link>
        </div>
      </div>
    </div>
  );
}
