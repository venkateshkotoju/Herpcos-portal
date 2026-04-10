"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-pink-600">Her</span>
              <span className="text-2xl font-bold text-purple-700">PCOS</span>
              <span className="text-sm font-medium text-gray-500 mt-1">
                Portal
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/chat"
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
            >
              Chat
            </Link>
            <Link
              href="/qa"
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
            >
              Q&amp;A
            </Link>
            <Link
              href="/saved"
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
            >
              Saved
            </Link>
            <Link
              href="/chat"
              className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-pink-700 transition-colors"
            >
              Get Support
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-pink-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-pink-100">
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-gray-700 hover:text-pink-600 font-medium px-2 py-1"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/chat"
                className="text-gray-700 hover:text-pink-600 font-medium px-2 py-1"
                onClick={() => setMenuOpen(false)}
              >
                Chat
              </Link>
              <Link
                href="/qa"
                className="text-gray-700 hover:text-pink-600 font-medium px-2 py-1"
                onClick={() => setMenuOpen(false)}
              >
                Q&amp;A
              </Link>
              <Link
                href="/saved"
                className="text-gray-700 hover:text-pink-600 font-medium px-2 py-1"
                onClick={() => setMenuOpen(false)}
              >
                Saved
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
