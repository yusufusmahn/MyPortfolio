"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10 shadow-md">
      <div className="mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <Link
          href="/"
          className="text-white text-xl font-semibold tracking-wide hover:text-secondary transition-colors"
        >
          Yusuf Usman<span className="text-secondary">.</span>
        </Link>

        <div className="hidden md:block">
          <Navbar />
        </div>

        <button
          className="md:hidden text-white hover:text-secondary transition-colors focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 shadow-lg transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 pt-20 bg-background">
          <Navbar onLinkClick={() => setIsOpen(false)} />
        </div>
      </div>

      {isOpen && (
        <div className="fixed md:hidden" onClick={() => setIsOpen(false)} />
      )}
    </header>
  );
};

export default Header;
