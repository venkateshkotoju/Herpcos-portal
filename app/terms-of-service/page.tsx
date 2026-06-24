import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service – HerPCOS Portal",
  description:
    "Read the Terms of Service for HerPCOS Portal, covering your rights and responsibilities when using our AI-powered PCOS support platform.",
};

const SECTIONS = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By accessing or using HerPCOS Portal ("Service," "Site," "we," "us," or "our") at herpcos.com, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all of these Terms, do not use this Service.

We reserve the right to update or modify these Terms at any time. Changes become effective upon posting to the Site. Your continued use after changes are posted constitutes acceptance of the revised Terms.`,
  },
  {
    id: "description",
    title: "2. Description of Service",
    content: `HerPCOS Portal is an educational and informational platform designed to support women with Polycystic Ovary Syndrome (PCOS). The Service includes an AI-powered chat assistant, a community Q&A section, and educational health content. The Service is provided "as is" and may be modified, suspended, or discontinued at any time without notice.`,
  },
  {
    id: "ai-content",
    title: "3. AI Content and Limitations",
    content: `Our AI chat assistant is powered by large language model technology and is designed solely for educational and informational purposes. You acknowledge that:

• AI-generated responses may be inaccurate, outdated, or incomplete.
• The AI has no access to your personal medical records, history, or current condition.
• AI responses do not constitute medical advice and should not be relied upon for health decisions.
• The AI is not a licensed healthcare provider and cannot diagnose, treat, or prescribe.
• We are not liable for any harm resulting from reliance on AI-generated content.`,
  },
  {
    id: "medical-disclaimer",
    title: "4. Medical Disclaimer",
    content: `Content on HerPCOS Portal is for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with questions about a medical condition.

Use of this Service does not create a doctor-patient relationship or any other professional healthcare relationship. In a medical emergency, call 911 or your local emergency number immediately.`,
  },
  {
    id: "eligibility",
    title: "5. User Eligibility",
    content: `HerPCOS Portal is intended for users who are at least 13 years of age. By using this Service, you represent that you are at least 13 years old. If you are between 13 and 18, you must have the permission of a parent or legal guardian who agrees to these Terms on your behalf.

Users under 13 are not permitted to use this Service. We do not knowingly collect personal information from children under 13.`,
  },
  {
    id: "accounts",
    title: "6. User Accounts",
    content: `HerPCOS Portal currently does not require account registration to access core features. If we introduce account functionality in the future, you will be responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.`,
  },
  {
    id: "user-content",
    title: "7. User Content",
    content: `By submitting any content to HerPCOS Portal (including chat messages, Q&A submissions, or contact form messages), you grant us a worldwide, royalty-free, non-exclusive license to use, store, and process that content solely for the purpose of operating and improving the Service.

You represent that you own or have the necessary rights to any content you submit, and that such content does not violate the rights of any third party or any applicable law. You are solely responsible for the accuracy and appropriateness of any content you submit.`,
  },
  {
    id: "ip",
    title: "8. Intellectual Property",
    content: `All content on HerPCOS Portal — including text, graphics, logos, icons, images, and software — is the property of HerPCOS Portal or its licensors and is protected by applicable intellectual property laws.

You may access and view content for your personal, non-commercial use only. You may not reproduce, distribute, transmit, display, or create derivative works from any content without our prior written consent.`,
  },
  {
    id: "prohibited",
    title: "9. Prohibited Uses",
    content: `You agree not to use HerPCOS Portal to:

• Violate any applicable local, national, or international law or regulation
• Transmit or solicit any unsolicited or unauthorized advertising or spam
• Submit false, misleading, or fraudulent content or information
• Attempt to gain unauthorized access to any part of the Service or its systems
• Use automated means (bots, scrapers) to access or collect data from the Site without permission
• Harass, threaten, or harm other users or third parties
• Circumvent or attempt to circumvent any content filtering or security measures
• Use the AI assistant for purposes other than good-faith educational or informational queries`,
  },
  {
    id: "third-party",
    title: "10. Third-Party Links",
    content: `HerPCOS Portal may contain links to third-party websites, resources, or services. These links are provided for your convenience only. We do not endorse, control, or take responsibility for the content, privacy policies, or practices of any third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    id: "privacy",
    title: "11. Privacy",
    content: `Your use of HerPCOS Portal is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Service, you consent to the collection and use of your information as described in the Privacy Policy.`,
  },
  {
    id: "warranties",
    title: "12. Disclaimers of Warranties",
    content: `HerPCOS Portal is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied, including but not limited to:

• Implied warranties of merchantability or fitness for a particular purpose
• Warranties that the Service will be uninterrupted, error-free, or secure
• Warranties regarding the accuracy, completeness, or reliability of content

We do not warrant that any defects or errors will be corrected, or that the Service or the servers that make it available are free from viruses or other harmful components.`,
  },
  {
    id: "liability",
    title: "13. Limitation of Liability",
    content: `To the fullest extent permitted by applicable law, HerPCOS Portal, its owners, operators, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including without limitation damages for lost profits, data, goodwill, or other intangible losses — resulting from:

• Your access to or use of (or inability to access or use) the Service
• Any content obtained from the Service, including AI-generated content
• Unauthorized access, use, or alteration of your transmissions or content
• Any other matter relating to the Service

Our total liability for any claim shall not exceed USD $50.`,
  },
  {
    id: "indemnification",
    title: "14. Indemnification",
    content: `You agree to defend, indemnify, and hold harmless HerPCOS Portal and its operators from and against any claims, liabilities, damages, losses, and expenses — including reasonable attorneys' fees — arising out of or in any way connected to: (a) your access to or use of the Service; (b) your violation of these Terms; or (c) your infringement of any intellectual property or other rights of any third party.`,
  },
  {
    id: "governing-law",
    title: "15. Governing Law",
    content: `These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts located in the United States.

If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.`,
  },
  {
    id: "changes",
    title: "16. Changes to Terms",
    content: `We reserve the right to modify these Terms of Service at any time. When we make material changes, we will update the "Last Updated" date at the top of this page and, where appropriate, notify users via email or a site notice.

Your continued use of HerPCOS Portal after changes are posted constitutes your acceptance of the revised Terms. If you do not agree to the revised Terms, please discontinue use of the Service.`,
  },
  {
    id: "contact",
    title: "17. Contact Information",
    content: `If you have any questions about these Terms of Service, please contact us:

Email: support@herpcos.com

HerPCOS Portal is committed to responding to all inquiries within 5 business days.`,
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h1 className="text-4xl font-bold mb-3">Terms of Service</h1>
          <p className="text-pink-100">Last Updated: June 24, 2025</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* TOC */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-5 sticky top-6">
              <h2 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                Contents
              </h2>
              <nav className="space-y-1.5">
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-xs text-gray-500 hover:text-pink-600 transition-colors leading-snug"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="lg:col-span-3 space-y-6">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-sm text-amber-800">
              By using HerPCOS Portal you agree to these Terms of Service.
              Please read them carefully before proceeding.
            </div>

            {SECTIONS.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="bg-white rounded-2xl border border-pink-100 shadow-sm p-7 scroll-mt-6"
              >
                <h2 className="text-lg font-bold text-gray-900 mb-3">
                  {s.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {s.content}
                </p>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
