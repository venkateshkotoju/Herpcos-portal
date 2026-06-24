import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – HerPCOS Portal",
  description:
    "Learn how HerPCOS Portal collects, uses, and protects your personal and health information.",
};

const SECTIONS = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: `HerPCOS Portal ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit herpcos.com and use our services, including our AI chat assistant and Q&A platform. Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.`,
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    content: `We may collect the following categories of information:

• Automatically collected data: IP address, browser type, operating system, referring URLs, pages visited, and timestamps — collected via standard web server logs and analytics tools.

• Chat and Q&A interactions: The content of messages you submit to our AI assistant or questions you browse. We do not require you to create an account or provide your name to use these features.

• Contact form submissions: If you contact us via our Contact page, we collect your name, email address, and the content of your message.

• Cookies and local storage: We use minimal cookies for site functionality (e.g., session preferences). We do not use tracking cookies for advertising purposes.`,
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    content: `We use the information we collect to:

• Operate and improve the HerPCOS Portal service
• Respond to your inquiries and support requests
• Analyze usage patterns to improve content quality and user experience
• Ensure the security and integrity of our platform
• Comply with applicable legal obligations

We do not use your information for targeted advertising and we do not sell your data to third parties.`,
  },
  {
    id: "health-information",
    title: "4. Sensitive Health Information",
    content: `We recognize that PCOS is a sensitive medical condition. Any health-related information you share through our chat assistant or Q&A features is treated with the highest level of care.

• We do not link chat conversations to your personal identity unless you voluntarily share identifying information in the conversation.
• Health content you submit is used solely to generate a response in that session and to improve the quality of our AI model in an aggregated, de-identified manner.
• We strongly advise you not to share information that could identify you (e.g., full name, date of birth, national ID number) in health-related conversations.`,
  },
  {
    id: "sharing",
    title: "5. Information Sharing and Disclosure",
    content: `We do not sell, trade, or rent your personal information. We may share your information only in the following limited circumstances:

• Service providers: Trusted third-party vendors who assist us in operating the site (e.g., hosting, analytics, email delivery), bound by confidentiality agreements.
• Legal requirements: If required by law, court order, or governmental authority, we may disclose information as necessary.
• Business transfers: In the event of a merger, acquisition, or sale of all or part of our assets, your information may be transferred as part of that transaction, subject to the same protections.
• Protection of rights: To protect the rights, property, or safety of HerPCOS Portal, our users, or others.`,
  },
  {
    id: "security",
    title: "6. Data Security",
    content: `We implement industry-standard technical and organizational measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include:

• HTTPS encryption for all data in transit
• Access controls limiting who can access stored data
• Regular security assessments of our infrastructure

However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security and encourage you to use the service thoughtfully.`,
  },
  {
    id: "retention",
    title: "7. Data Retention",
    content: `We retain information only as long as necessary to fulfill the purposes described in this policy or as required by law.

• Server logs are typically retained for up to 90 days.
• Contact form submissions are retained for up to 2 years or until your request is resolved.
• Aggregated, de-identified analytics data may be retained indefinitely.

You may request deletion of your personal data at any time by contacting us at support@herpcos.com.`,
  },
  {
    id: "your-rights",
    title: "8. Your Rights and Choices",
    content: `Depending on your location, you may have the following rights regarding your personal data:

• Access: Request a copy of the personal data we hold about you.
• Correction: Request correction of inaccurate or incomplete data.
• Deletion: Request deletion of your personal data ("right to be forgotten").
• Objection: Object to certain processing activities.
• Portability: Request transfer of your data to another service.

To exercise any of these rights, please contact us at support@herpcos.com. We will respond within 30 days. We do not discriminate against users who exercise their privacy rights.`,
  },
  {
    id: "childrens-privacy",
    title: "9. Children's Privacy",
    content: `HerPCOS Portal is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13 without parental consent, we will delete it promptly.

If you are between 13 and 18 years of age, please review this policy with a parent or guardian before using our services.

If you believe we have inadvertently collected information from a child, please contact us immediately at support@herpcos.com.`,
  },
  {
    id: "changes",
    title: "10. Changes to This Policy & Contact",
    content: `We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date at the top of this page and, where appropriate, notify you via email or a prominent notice on our site. Your continued use of HerPCOS Portal after any changes constitutes your acceptance of the updated policy.

If you have questions, concerns, or requests regarding this Privacy Policy, please contact us at:

Email: support@herpcos.com
HerPCOS Portal — support@herpcos.com`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
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
              This Privacy Policy governs your use of HerPCOS Portal. By using
              our service, you agree to the collection and use of information
              as described here.
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
