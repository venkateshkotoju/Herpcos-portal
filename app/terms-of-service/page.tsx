import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - HerPCOS Portal",
  description:
    "HerPCOS Portal Terms of Service — the rules and guidelines governing your use of our AI-powered PCOS support platform.",
};

const LAST_UPDATED = "June 24, 2025";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using HerPCOS Portal (the \"Service\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to all of these Terms, do not use the Service. We may update these Terms at any time, and continued use of the Service constitutes acceptance of the updated Terms.",
  },
  {
    id: "description",
    title: "2. Description of Service",
    content:
      "HerPCOS Portal is an educational platform that provides general health information about Polycystic Ovary Syndrome (PCOS) through an AI-powered chat assistant, a community Q&A library, and related resources. The Service is intended for informational and educational purposes only. It is not a medical service, and nothing on this platform constitutes medical advice, diagnosis, or treatment.",
  },
  {
    id: "eligibility",
    title: "3. Eligibility",
    content:
      "You must be at least 13 years old to use HerPCOS Portal. By using the Service, you represent and warrant that you meet this age requirement. If you are under 18, you should use the Service only with the involvement and consent of a parent or legal guardian.",
  },
  {
    id: "use",
    title: "4. Acceptable Use",
    content:
      "You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to: use the Service in any way that violates applicable local, national, or international laws or regulations; impersonate any person or entity, or misrepresent your affiliation with any person or entity; attempt to gain unauthorized access to any part of the Service, its servers, or systems connected to the Service; transmit any unsolicited or unauthorized advertising or promotional material; use the Service to harass, harm, or intimidate others; or interfere with or disrupt the integrity or performance of the Service.",
  },
  {
    id: "medical",
    title: "5. Medical Disclaimer",
    content:
      "The information provided through HerPCOS Portal is for general informational and educational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or another qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay seeking it because of something you have read on this platform. For the full Medical Disclaimer, please visit our Medical Disclaimer page.",
  },
  {
    id: "ai-content",
    title: "6. AI-Generated Content",
    content:
      "Our AI chat assistant generates responses based on patterns learned from large datasets. While we strive for accuracy, AI-generated responses may contain errors, omissions, or outdated information. The AI does not have access to your personal medical records and cannot account for your individual circumstances. You acknowledge that AI-generated content has inherent limitations and should not be relied upon as medical advice.",
  },
  {
    id: "ip",
    title: "7. Intellectual Property",
    content:
      "The Service and its original content, features, and functionality are owned by HerPCOS Portal and are protected by applicable intellectual property laws. You may not reproduce, distribute, modify, create derivative works from, publicly display, or exploit any content from the Service without our express written permission.",
  },
  {
    id: "user-content",
    title: "8. User-Submitted Content",
    content:
      "If you submit questions, feedback, or other content to the platform, you grant HerPCOS Portal a non-exclusive, royalty-free, perpetual, and worldwide license to use, display, and distribute that content in connection with providing and improving the Service. You represent that you have the right to submit such content and that it does not violate any third-party rights or applicable laws.",
  },
  {
    id: "privacy",
    title: "9. Privacy",
    content:
      "Your use of the Service is subject to our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your information.",
  },
  {
    id: "third-party",
    title: "10. Third-Party Links and Services",
    content:
      "The Service may contain links to third-party websites or services. These links are provided for your convenience only. HerPCOS Portal has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the terms and privacy policies of any third-party sites you visit.",
  },
  {
    id: "disclaimer",
    title: "11. Disclaimers of Warranties",
    content:
      'The Service is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance. HerPCOS Portal does not warrant that the Service will be uninterrupted, error-free, secure, or free of viruses or other harmful components.',
  },
  {
    id: "liability",
    title: "12. Limitation of Liability",
    content:
      "To the maximum extent permitted by applicable law, HerPCOS Portal and its officers, directors, employees, partners, and agents shall not be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages, including but not limited to damages for loss of health, profits, goodwill, or data, arising out of or in connection with your use of or inability to use the Service, even if we have been advised of the possibility of such damages.",
  },
  {
    id: "indemnification",
    title: "13. Indemnification",
    content:
      "You agree to defend, indemnify, and hold harmless HerPCOS Portal and its affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Service.",
  },
  {
    id: "termination",
    title: "14. Termination",
    content:
      "We reserve the right to suspend or terminate your access to the Service at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, third parties, or the public, or for any other reason in our sole discretion.",
  },
  {
    id: "governing-law",
    title: "15. Governing Law",
    content:
      "These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflicts of law principles. Any disputes arising from these Terms or the Service shall be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.",
  },
  {
    id: "changes",
    title: "16. Changes to Terms",
    content:
      'We may revise these Terms at any time by updating this page. When we make material changes, we will update the "Last Updated" date. Your continued use of the Service after changes are posted constitutes your acceptance of the updated Terms. If you do not agree to the new Terms, please stop using the Service.',
  },
  {
    id: "contact",
    title: "17. Contact Information",
    content:
      "If you have any questions about these Terms, please contact us at support@herpcos.com or through our Contact page.",
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-500 text-sm">Last updated: {LAST_UPDATED}</p>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            These terms govern your use of HerPCOS Portal. Please read them carefully.
          </p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Quick Nav */}
          <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-6 mb-8">
            <h2 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Contents</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-sm">
              {sections.map(({ id, title }) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-pink-600 hover:text-pink-800 hover:underline transition-colors">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map(({ id, title, content }) => (
              <div key={id} id={id} className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8 scroll-mt-24">
                <h2 className="text-xl font-bold text-gray-900 mb-3 pb-3 border-b border-gray-100">{title}</h2>
                <p className="text-gray-600 leading-relaxed text-sm">{content}</p>
                {id === "medical" && (
                  <div className="mt-3">
                    <Link href="/medical-disclaimer" className="text-pink-600 text-sm font-medium hover:underline">
                      Read full Medical Disclaimer →
                    </Link>
                  </div>
                )}
                {id === "privacy" && (
                  <div className="mt-3">
                    <Link href="/privacy-policy" className="text-pink-600 text-sm font-medium hover:underline">
                      Read full Privacy Policy →
                    </Link>
                  </div>
                )}
                {id === "contact" && (
                  <div className="mt-3">
                    <Link href="/contact" className="text-pink-600 text-sm font-medium hover:underline">
                      Go to Contact page →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-xl font-bold mb-2">Questions About Our Terms?</h2>
            <p className="text-pink-100 text-sm mb-5">
              We want to be transparent about how HerPCOS Portal works. Don&apos;t hesitate to reach out.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-pink-600 px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-pink-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/privacy-policy" className="text-pink-600 hover:underline">Privacy Policy</Link>
            <Link href="/medical-disclaimer" className="text-pink-600 hover:underline">Medical Disclaimer</Link>
            <Link href="/about" className="text-pink-600 hover:underline">About Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
