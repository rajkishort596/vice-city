"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";

const navItems = [
  { label: "Characters", href: "/characters" },
  { label: "Story", href: "/story" },
  { label: "City", href: "/city" },
  { label: "Vehicles", href: "/vehicles" },
  // { label: "Music", href: "/music" },
  { label: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <nav
            className={`
              relative flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500
              ${
                isScrolled
                  ? "bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                  : "bg-black/40 backdrop-blur-md border border-white/5"
              }
            `}
          >
            {/* Neon Glow Line on Top (visible when scrolled) */}
            <div
              className={`absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-vice-cyan to-transparent transition-opacity duration-500 ${isScrolled ? "opacity-100" : "opacity-0"}`}
            />

            {/* Logo */}
            <Link
              href="/"
              className="relative z-10 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl md:text-3xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-vice-cyan via-white to-vice-pink drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(255,0,204,0.8)] transition-all duration-300">
                  VICE CITY
                </span>
                {/* <span className="hidden md:block text-[0.6rem] font-mono text-vice-cyan uppercase tracking-widest mt-2 bg-vice-cyan/10 px-1 py-0.5 rounded border border-vice-cyan/20">
                  Remastered
                </span> */}
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-colors group"
                >
                  <span className="relative z-10 font-sans group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                    {item.label}
                  </span>

                  {/* Hover Background */}
                  <span className="absolute inset-0 bg-linear-to-r from-vice-purple/0 via-vice-purple/20 to-vice-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

                  {/* Bottom Line */}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-vice-pink shadow-[0_0_8px_#ff00cc] group-hover:w-[80%] transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-4">
              {/* <button
                className="p-2 text-vice-cyan hover:text-white hover:bg-vice-cyan/20 rounded-full transition-all duration-300 group"
                aria-label="Search"
              >
                <Search
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
              </button> */}

              <button
                className="
                  relative px-6 py-2 overflow-hidden group
                  bg-transparent border border-vice-pink/50 text-vice-pink
                  font-display font-bold uppercase tracking-widest text-xs
                  hover:border-vice-pink hover:text-white
                  transition-all duration-300
                  skew-x-[-10deg] cursor-pointer
                "
              >
                <span className="absolute inset-0 w-full h-full bg-vice-pink/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative inline-block skew-x-[10deg]">
                  Cheat Codes
                </span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                className="md:hidden mt-2 bg-vice-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
              >
                <div className="p-4 flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                    >
                      <span className="font-marker tracking-widest text-lg">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                  <div className="h-[1px] bg-white/10 my-2" />
                  <button className="w-full py-3 bg-vice-pink text-white font-display font-bold uppercase tracking-widest rounded-xl hover:bg-vice-pink/80 transition-colors shadow-[0_0_15px_rgba(255,0,204,0.4)]">
                    Cheat Codes
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
}
