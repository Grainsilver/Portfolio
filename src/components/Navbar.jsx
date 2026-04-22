"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#050506]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Brand */}
        <h1 className="text-[#E9E9EF] font-semibold">
          Flabby Tech Adventure
        </h1>

        {/* Links */}
        <div className="flex items-center gap-8 text-sm text-gray-300 relative">

          <a href="#intro" className="hover:text-[var(--primary)] transition">
            Intro
          </a>

          <a href="#services" className="hover:text-[var(--primary)] transition">
            Services
          </a>

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="hover:text-[var(--primary)] transition">
              Projects ▾
            </button>

            {open && (
              <div className="absolute top-8 left-0 bg-[#0b0b0c] border border-white/10 rounded-lg w-48 shadow-lg overflow-hidden">

                <a
                  href="/projects"
                  className="block px-4 py-2 hover:bg-white/5 hover:text-[var(--primary)]"
                >
                  All Projects
                </a>

                <a
                  href="/projects#webapps"
                  className="block px-4 py-2 hover:bg-white/5 hover:text-[var(--primary)]"
                >
                  Web Apps
                </a>

                <a
                  href="/projects#automation"
                  className="block px-4 py-2 hover:bg-white/5 hover:text-[var(--primary)]"
                >
                  Automation Tools
                </a>

              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="bg-[var(--primary)] text-black px-4 py-2 rounded-md font-medium hover:opacity-80 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
