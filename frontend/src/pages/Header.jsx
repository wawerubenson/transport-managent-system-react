// src/components/Header.jsx
import React, { useState } from "react";
import { Menu, X, User, Truck } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-blue-800 via-indigo-700 to-cyan-600 text-white shadow-lg">
      <div className="w-full px-8 py-4 flex items-center justify-between">
        {/* Left: Logo + Text */}
        <div className="flex items-center gap-2">
          <Truck className="w-7 h-7 text-cyan-200" />
          <span className="text-lg font-semibold tracking-tight">
            Transport Portal
          </span>
        </div>

        {/* Center: Nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-cyan-200 transition-colors">
            Modules
          </a>
          <a href="#benefits" className="hover:text-cyan-200 transition-colors">
            Why Us
          </a>
          <a href="#pricing" className="hover:text-cyan-200 transition-colors">
            Pricing
          </a>
        </nav>

        {/* Right: Profile icon + menu */}
        <div className="flex items-center gap-3">
          <a
            href="/profile"
            className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <User className="w-5 h-5" />
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-800 to-indigo-700 px-8 py-4 space-y-3 text-sm">
          <a href="#features" className="block hover:text-cyan-200">
            Modules
          </a>
          <a href="#benefits" className="block hover:text-cyan-200">
            Why Us
          </a>
          <a href="#pricing" className="block hover:text-cyan-200">
            Pricing
          </a>
          <a href="/profile" className="block hover:text-cyan-200">
            Profile
          </a>
        </div>
      )}
    </header>
  );
}
