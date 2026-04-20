import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
            AI-Powered PCOS Support
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Trusted{" "}
            <span className="text-pink-600">PCOS Expert</span>
            <br />
            Available 24/7
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            HerPCOS Portal provides AI-powered guidance on PCOS symptoms,
            hormone health, and lifestyle management — backed by evidence-based
            information and a supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/chat"
              className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors shadow-lg shadow-pink-200"
            >
              Start Chatting
            </Link>
            <Link
              href="/qa"
              className="bg-white text-pink-600 border-2 border-pink-200 px-8 py-4 rounded-full text-lg font-semibold hover:border-pink-400 transition-colors"
            >
              Browse Q&amp;A
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Everything You Need to Manage PCOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI Chat */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-5">
              <svg
                className="w-6 h-6 text-pink-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              AI Chat Assistant
            </h3>
            <p className="text-gray-600 mb-4">
              Get instant, personalized answers to your PCOS questions from our
              AI assistant — available around the clock.
            </p>
            <Link
              href="/chat"
              className="text-pink-600 font-medium hover:text-pink-700 inline-flex items-center gap-1"
            >
              Start chatting
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Q&A Community */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Community Q&amp;A
            </h3>
            <p className="text-gray-600 mb-4">
              Browse and ask questions in our community forum. Share experiences
              and learn from others living with PCOS.
            </p>
            <Link
              href="/qa"
              className="text-purple-600 font-medium hover:text-purple-700 inline-flex items-center gap-1"
            >
              Explore Q&amp;A
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Hormone Health */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-rose-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-5">
              <svg
                className="w-6 h-6 text-rose-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Hormone Health Guidance
            </h3>
            <p className="text-gray-600 mb-4">
              Understand your hormones with evidence-based guidance on managing
              insulin resistance, androgens, and more.
            </p>
            <Link
              href="/chat"
              className="text-rose-600 font-medium hover:text-rose-700 inline-flex items-center gap-1"
            >
              Learn more
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-pink-600 py-16 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl font-bold mb-1">1 in 10</p>
              <p className="text-pink-200 text-sm">Women have PCOS</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-1">70%</p>
              <p className="text-pink-200 text-sm">Go undiagnosed</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-1">24/7</p>
              <p className="text-pink-200 text-sm">AI Support Available</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-1">100%</p>
              <p className="text-pink-200 text-sm">Free to Use</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Pages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Learn About PCOS
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Evidence-based guides on the most common PCOS questions — or ask our
            AI assistant for a personalized answer.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* PCOS Symptoms */}
          <Link
            href="/pcos-symptoms"
            className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-pink-200 transition-all"
          >
            <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm">PCOS Symptoms</h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-3">
              Recognize the signs of PCOS — from irregular periods and acne to fatigue and mood changes.
            </p>
            <span className="text-pink-600 text-xs font-medium group-hover:underline">Read guide →</span>
          </Link>

          {/* PCOS Diet Guide */}
          <Link
            href="/pcos-diet-guide"
            className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-purple-200 transition-all"
          >
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm">PCOS Diet Guide</h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-3">
              The best foods to eat and avoid for insulin resistance, hormone balance, and PCOS relief.
            </p>
            <span className="text-purple-600 text-xs font-medium group-hover:underline">Read guide →</span>
          </Link>

          {/* PCOS Weight Loss */}
          <Link
            href="/pcos-weight-loss"
            className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-rose-200 transition-all"
          >
            <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm">PCOS Weight Loss</h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-3">
              Why PCOS makes weight loss harder and proven strategies that actually work.
            </p>
            <span className="text-rose-600 text-xs font-medium group-hover:underline">Read guide →</span>
          </Link>

          {/* Irregular Periods */}
          <Link
            href="/pcos-irregular-periods"
            className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-pink-200 transition-all"
          >
            <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm">Irregular Periods</h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-3">
              Why PCOS disrupts your cycle and how to regulate your period naturally and medically.
            </p>
            <span className="text-pink-600 text-xs font-medium group-hover:underline">Read guide →</span>
          </Link>

        </div>

        {/* Not sure nudge */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Not sure?{" "}
            <Link
              href="/chat"
              className="text-pink-600 font-medium hover:underline"
            >
              Ask our AI assistant
            </Link>{" "}
            and get a personalized answer instantly.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Disclaimer />
      </section>
    </div>
  );
}
