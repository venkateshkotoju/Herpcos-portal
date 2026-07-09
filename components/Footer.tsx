import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      {/* Newsletter Banner */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-sm">
                Free PCOS Symptom Checklist + Weekly Tips
              </p>
              <p className="text-gray-400 text-xs mt-0.5">
                Join women managing PCOS with evidence-based guidance.
              </p>
            </div>
            <NewsletterSignup variant="compact" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-3">
              <span className="text-xl font-bold text-pink-400">Her</span>
              <span className="text-xl font-bold text-purple-400">PCOS</span>
              <span className="text-sm font-medium text-gray-400 mt-1 ml-1">
                Portal
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              AI-powered PCOS support with evidence-based guides, community
              Q&amp;A, and hormone health information — designed with care for
              every woman&apos;s journey.
            </p>
          </div>

          {/* Start Here */}
          <div>
            <h3 className="text-white font-semibold mb-3">New to PCOS?</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/what-is-pcos" className="hover:text-pink-400 transition-colors">
                  What Is PCOS?
                </Link>
              </li>
              <li>
                <Link href="/pcos-symptoms" className="hover:text-pink-400 transition-colors">
                  Symptoms
                </Link>
              </li>
              <li>
                <Link href="/pcos-diet" className="hover:text-pink-400 transition-colors">
                  Diet
                </Link>
              </li>
              <li>
                <Link href="/chat" className="hover:text-pink-400 transition-colors">
                  Ask the AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-pink-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/chat" className="hover:text-pink-400 transition-colors">
                  AI Chat
                </Link>
              </li>
              <li>
                <Link href="/qa" className="hover:text-pink-400 transition-colors">
                  Q&amp;A
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-pink-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pink-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-white font-semibold mb-3">PCOS Guides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/what-is-pcos" className="hover:text-pink-400 transition-colors">
                  What Is PCOS?
                </Link>
              </li>
              <li>
                <Link href="/pcos-symptoms" className="hover:text-pink-400 transition-colors">
                  PCOS Symptoms
                </Link>
              </li>
              <li>
                <Link href="/pcos-diet" className="hover:text-pink-400 transition-colors">
                  Best Diet for PCOS
                </Link>
              </li>
              <li>
                <Link href="/pcos-weight-loss" className="hover:text-pink-400 transition-colors">
                  Weight Loss Guide
                </Link>
              </li>
              <li>
                <Link href="/pcos-irregular-periods" className="hover:text-pink-400 transition-colors">
                  Irregular Periods
                </Link>
              </li>
              <li>
                <Link href="/insulin-resistance-pcos" className="hover:text-pink-400 transition-colors">
                  Insulin Resistance
                </Link>
              </li>
              <li>
                <Link href="/metformin-for-pcos" className="hover:text-pink-400 transition-colors">
                  Metformin for PCOS
                </Link>
              </li>
              <li>
                <Link href="/inositol-for-pcos" className="hover:text-pink-400 transition-colors">
                  Inositol for PCOS
                </Link>
              </li>
              <li>
                <Link href="/pcos-hair-loss" className="hover:text-pink-400 transition-colors">
                  PCOS Hair Loss
                </Link>
              </li>
              <li>
                <Link href="/pcos-and-pregnancy" className="hover:text-pink-400 transition-colors">
                  PCOS &amp; Pregnancy
                </Link>
              </li>
              <li>
                <Link href="/pcos-lab-results" className="hover:text-pink-400 transition-colors">
                  PCOS Lab Results
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-pink-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-pink-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/medical-disclaimer" className="hover:text-pink-400 transition-colors">
                  Medical Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Important */}
          <div>
            <h3 className="text-white font-semibold mb-3">Important</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              This portal provides general health information only. It is not a
              substitute for professional medical advice, diagnosis, or
              treatment. Always consult your healthcare provider.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} HerPCOS Portal. All rights
            reserved.
          </p>
          <p className="mt-1">
            Built with care for the PCOS community. Not a medical device. Not
            FDA-regulated.
          </p>
        </div>
      </div>
    </footer>
  );
}
