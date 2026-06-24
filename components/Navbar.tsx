"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const GUIDES = [
  { href: "/pcos-symptoms", label: "PCOS Symptoms", emoji: "🔍" },
  { href: "/pcos-diet", label: "Best Diet for PCOS", emoji: "🥗" },
  { href: "/pcos-weight-loss", label: "Weight Loss Guide", emoji: "⚖️" },
  { href: "/pcos-irregular-periods", label: "Irregular Periods", emoji: "📅" },
  { href: "/insulin-resistance-pcos", label: "Insulin Resistance", emoji: "💉" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const [mobileGuidesOpen, setMobileGuidesOpen] = useState(false);
  const guidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (guidesRef.current && !guidesRef.current.contains(e.target as Node)) {
        setGuidesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md border-b border-pink-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-1">
              <span className="text-2xl font-bold text-pink-600">Her</span>
              <span className="text-2xl font-bold text-purple-700">PCOS</span>
              <span className="text-sm font-medium text-gray-500 mt-1 ml-0.5">
                Portal
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-pink-600 font-medium transition-colors text-sm">
              Home
            </Link>

            {/* Guides dropdown */}
            <div className="relative" ref={guidesRef}>
              <button
                onClick={() => setGuidesOpen((o) => !o)}
                className="flex items-center gap-1 text-gray-700 hover:text-pink-600 font-medium transition-colors text-sm"
              >
                Guides
                <svg
                  className={`w-4 h-4 transition-transform ${guidesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {guidesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 bg-white rounded-2xl shadow-xl border border-pink-100 py-2 z-50">
                  <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    PCOS Guides
                  </p>
                  {GUIDES.map((g) => (
                    <Link
                      key={g.href}
                      href={g.href}
                      onClick={() => setGuidesOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-700 transition-colors"
                    >
                      <span className="text-base">{g.emoji}</span>
                      {g.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/chat" className="text-gray-700 hover:text-pink-600 font-medium transition-colors text-sm">
              AI Chat
            </Link>
            <Link href="/qa" className="text-gray-700 hover:text-pink-600 font-medium transition-colors text-sm">
              Q&amp;A
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-pink-600 font-medium transition-colors text-sm">
              About
            </Link>
            <Link
              href="/contact"
              className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-pink-700 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-pink-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-pink-100">
            <div className="flex flex-col gap-1">
              <Link href="/" className="text-gray-700 hover:text-pink-600 font-medium px-2 py-2 rounded-lg hover:bg-pink-50 text-sm" onClick={() => setMenuOpen(false)}>
                Home
              </Link>

              {/* Mobile guides accordion */}
              <button
                onClick={() => setMobileGuidesOpen((o) => !o)}
                className="flex items-center justify-between text-gray-700 font-medium px-2 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors text-sm w-full text-left"
              >
                Guides
                <svg className={`w-4 h-4 transition-transform ${mobileGuidesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileGuidesOpen && (
                <div className="pl-4 flex flex-col gap-1">
                  {GUIDES.map((g) => (
                    <Link
                      key={g.href}
                      href={g.href}
                      className="flex items-center gap-2 text-gray-600 hover:text-pink-600 px-2 py-1.5 rounded-lg hover:bg-pink-50 text-sm"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span>{g.emoji}</span>
                      {g.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/chat" className="text-gray-700 hover:text-pink-600 font-medium px-2 py-2 rounded-lg hover:bg-pink-50 text-sm" onClick={() => setMenuOpen(false)}>
                AI Chat
              </Link>
              <Link href="/qa" className="text-gray-700 hover:text-pink-600 font-medium px-2 py-2 rounded-lg hover:bg-pink-50 text-sm" onClick={() => setMenuOpen(false)}>
                Q&amp;A
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-pink-600 font-medium px-2 py-2 rounded-lg hover:bg-pink-50 text-sm" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-pink-600 font-medium px-2 py-2 rounded-lg hover:bg-pink-50 text-sm" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
