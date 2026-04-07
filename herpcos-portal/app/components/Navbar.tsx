"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Navigation links for the app
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/chat", label: "Chat" },
  { href: "/qa", label: "Q&A" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-rose-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-rose-500 text-2xl font-bold tracking-tight">
            HerPCOS
          </span>
          <span className="hidden sm:inline text-slate-400 text-sm font-medium">
            Expert Portal
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-rose-50 text-rose-600"
                      : "text-slate-600 hover:bg-rose-50 hover:text-rose-500"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
