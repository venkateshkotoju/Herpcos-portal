import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - HerPCOS Portal",
  description:
    "HerPCOS Portal's Privacy Policy — how we collect, use, and protect your personal information.",
};

const LAST_UPDATED = "June 24, 2025";

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: [
      {
        subtitle: "Information You Provide",
        text: "When you use HerPCOS Portal, you may voluntarily provide information such as questions you type into our AI chat assistant, messages you submit through our contact form (including name and email address), and feedback or responses you share within the platform.",
      },
      {
        subtitle: "Automatically Collected Information",
        text: "When you visit our website, we may automatically collect certain technical information including your IP address, browser type and version, operating system, referring URLs, pages viewed, and the date and time of your visit. This information helps us understand how our platform is used and improve your experience.",
      },
      {
        subtitle: "Cookies and Similar Technologies",
        text: "We use cookies and similar tracking technologies to maintain your session, remember your preferences, and analyze site usage. You can control cookies through your browser settings, though disabling them may affect some functionality.",
      },
    ],
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Your Information",
    content: [
      {
        subtitle: "",
        text: "We use the information we collect to provide and improve our services, respond to your inquiries and support requests, analyze usage patterns to enhance platform performance, ensure the security and integrity of our platform, and comply with legal obligations. We do not sell your personal information to third parties.",
      },
    ],
  },
  {
    id: "health-information",
    title: "3. Health-Related Information",
    content: [
      {
        subtitle: "Special Sensitivity",
        text: "We understand that health-related questions are deeply personal. Any health information you share through our AI chat or Q&A features is treated with the highest level of care and sensitivity.",
      },
      {
        subtitle: "Not a Medical Record",
        text: "HerPCOS Portal is not a healthcare provider and does not maintain medical records. Information shared with our AI assistant is used solely to generate responses and improve service quality — it is not retained as part of a medical file or shared with healthcare providers.",
      },
    ],
  },
  {
    id: "data-sharing",
    title: "4. Information Sharing and Disclosure",
    content: [
      {
        subtitle: "We Do Not Sell Your Data",
        text: "We will never sell, rent, or trade your personal information to third parties for marketing purposes.",
      },
      {
        subtitle: "Service Providers",
        text: "We may share information with trusted third-party service providers who assist us in operating our platform (such as hosting providers and analytics services). These providers are contractually obligated to handle your data securely and only for the purposes we specify.",
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose information if required by law, court order, or governmental authority, or when we believe disclosure is necessary to protect our rights, protect your safety or the safety of others, or investigate fraud.",
      },
    ],
  },
  {
    id: "data-security",
    title: "5. Data Security",
    content: [
      {
        subtitle: "",
        text: "We implement reasonable technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These include encryption of data in transit, access controls, and regular security reviews. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
      },
    ],
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    content: [
      {
        subtitle: "",
        text: "We retain personal information only as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we securely delete or anonymize it.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "7. Your Rights and Choices",
    content: [
      {
        subtitle: "",
        text: "Depending on your location, you may have rights regarding your personal information, including the right to access, correct, or delete information we hold about you; the right to object to or restrict certain processing; the right to data portability; and the right to withdraw consent where processing is based on consent. To exercise any of these rights, please contact us at support@herpcos.com.",
      },
    ],
  },
  {
    id: "children",
    title: "8. Children's Privacy",
    content: [
      {
        subtitle: "",
        text: "HerPCOS Portal is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete that information.",
      },
    ],
  },
  {
    id: "changes",
    title: "9. Changes to This Policy",
    content: [
      {
        subtitle: "",
        text: "We may update this Privacy Policy from time to time. When we make material changes, we will update the 'Last Updated' date at the top of this page. We encourage you to review this policy periodically. Continued use of HerPCOS Portal after changes are posted constitutes your acceptance of the updated policy.",
      },
    ],
  },
  {
    id: "contact",
    title: "10. Contact Us",
    content: [
      {
        subtitle: "",
        text: "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at support@herpcos.com or through our Contact page.",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: {LAST_UPDATED}</p>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Your privacy matters to us. This policy explains how HerPCOS Portal collects,
            uses, and protects your personal information.
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
          <div className="space-y-8">
            {sections.map(({ id, title, content }) => (
              <div key={id} id={id} className="bg-white rounded-2xl border border-pink-100 shadow-sm p-8 scroll-mt-24">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">{title}</h2>
                <div className="space-y-4">
                  {content.map(({ subtitle, text }, i) => (
                    <div key={i}>
                      {subtitle && (
                        <h3 className="text-base font-semibold text-gray-800 mb-1.5">{subtitle}</h3>
                      )}
                      <p className="text-gray-600 leading-relaxed text-sm">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-xl font-bold mb-2">Questions About Your Privacy?</h2>
            <p className="text-pink-100 text-sm mb-5">
              We&apos;re committed to transparency. Reach out any time.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-pink-600 px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-pink-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/terms-of-service" className="text-pink-600 hover:underline">Terms of Service</Link>
            <Link href="/medical-disclaimer" className="text-pink-600 hover:underline">Medical Disclaimer</Link>
            <Link href="/about" className="text-pink-600 hover:underline">About Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
