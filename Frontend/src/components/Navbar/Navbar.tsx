"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <a href="/" className="text-2xl font-bold text-primary">
        CLIC
      </a>

      {/* Desktop nav buttons */}
      <div className="hidden space-x-4 md:flex">
        <Button variant="ghost" asChild>
          <a href="/pools">Pools</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="/signup">Signup</a>
        </Button>
      </div>

      {/* Mobile menu toggle */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile nav buttons */}
      {open && (
        <div className="absolute top-full right-0 mt-2 flex flex-col space-y-2 rounded-md bg-white p-4 shadow-md md:hidden">
          <Button variant="ghost" asChild>
            <a href="/pools">Pools</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="/signup">Signup</a>
          </Button>
        </div>
      )}
    </nav>
  );
}
