"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RetroGrid from "@/components/RetroGrid";
import { Spotlight } from "@/components/ui/spotlight";
import { cheatCodes, Cheat } from "@/lib/cheats";
import { Copy, Check, Terminal, ExternalLink } from "lucide-react";

const categories = ["All", "Player", "Vehicles", "Weapons", "World", "Weather"];

export default function CheatCodesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const filteredCheats = cheatCodes.filter((cheat) => {
    const matchesCategory =
      selectedCategory === "All" || cheat.category === selectedCategory;
    const matchesSearch =
      cheat.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cheat.effect.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <main className="min-h-screen relative bg-vice-dark text-white selection:bg-vice-pink selection:text-white overflow-x-hidden">
      <RetroGrid />
      <div className="fixed inset-0 crt-overlay z-50 pointer-events-none opacity-40 mix-blend-overlay" />
      <div className="fixed inset-0 z-50 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <Spotlight className="-top-40 left-0" fill="magenta" />
        <Spotlight className="top-40 right-0" fill="cyan" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-vice-cyan/30 bg-vice-cyan/10 text-vice-cyan text-xs font-display tracking-[0.3em] uppercase mb-4 animate-pulse">
              <Terminal size={14} />
              Terminal Access: Level 5
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter text-white uppercase italic drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">
              CHEAT <span className="text-vice-pink">ARCHIVES</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-display tracking-widest max-w-2xl mx-auto uppercase">
              Master the city with these legacy overrides from 1986
            </p>
          </motion.div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="relative z-10 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="glass p-6 md:p-8 rounded-[2rem] border border-white/10 backdrop-blur-xl space-y-8">
            {/* Search and Categories */}
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative w-full md:w-96 group">
                <input
                  type="text"
                  placeholder="SEARCH DATABASE..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-vice-cyan placeholder:text-vice-cyan/30 focus:outline-none focus:border-vice-cyan/50 transition-all font-display tracking-widest"
                />
                <div className="absolute inset-0 rounded-xl bg-vice-cyan/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-2 rounded-full text-xs font-display tracking-[0.2em] uppercase transition-all border cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-vice-pink border-vice-pink text-white shadow-[0_0_15px_rgba(255,47,146,0.5)]"
                        : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cheats Grid */}
      <section className="relative z-10 px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredCheats.map((cheat, idx) => (
                <motion.div
                  key={cheat.code}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group relative"
                >
                  <div className="glass p-8 rounded-3xl border border-white/10 hover:border-vice-cyan/40 transition-all duration-500 bg-linear-to-br from-white/5 to-transparent flex flex-col h-full overflow-hidden">
                    {/* Background Glitch Effect on Hover */}
                    <div className="absolute inset-0 bg-vice-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    <div className="relative z-10 flex justify-between items-start mb-6">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-vice-cyan/60 font-display">
                        SYSTEM.{cheat.category.toUpperCase()}
                      </span>
                      <button
                        onClick={() => handleCopy(cheat.code)}
                        className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-vice-pink hover:border-vice-pink/50 transition-all group/btn"
                      >
                        {copiedCode === cheat.code ? (
                          <Check size={16} className="text-vice-cyan" />
                        ) : (
                          <Copy size={16} />
                        )}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-vice-dark border border-white/10 px-2 py-1 rounded text-[10px] opacity-0 group-hover/btn:opacity-100 transition-opacity">
                          {copiedCode === cheat.code ? "COPIED" : "COPY"}
                        </span>
                      </button>
                    </div>

                    <div className="relative z-10 space-y-4 grow">
                      <h3 className="text-md font-display text-white tracking-widest group-hover:text-vice-cyan transition-colors">
                        {cheat.code}
                      </h3>
                      <div className="h-px w-12 bg-vice-pink/50 group-hover:w-full transition-all duration-700" />
                      <p className="text-vice-pink text-sm uppercase font-display tracking-wider">
                        {cheat.effect}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed font-light italic">
                        "{cheat.description}"
                      </p>
                    </div>

                    <div className="relative z-10 mt-8 flex items-center gap-2 group-hover:translate-x-2 transition-transform opacity-30 group-hover:opacity-100">
                      <div className="w-2 h-2 rounded-full bg-vice-cyan animate-pulse" />
                      <span className="text-[10px] font-display tracking-widest text-white uppercase">
                        Active Override
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredCheats.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 space-y-4"
            >
              <div className="text-6xl grayscale opacity-20 transform -rotate-12">
                🚫
              </div>
              <h3 className="text-2xl font-display text-white/20 uppercase tracking-[0.5em]">
                No Match Found In Archives
              </h3>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer Vibe */}
      <section className="relative z-10 py-20 px-6 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-sm font-display tracking-[0.5em] text-white/20 uppercase">
            Data Encrypted • 1986 Vercetti Enterprises
          </p>
          <div className="flex justify-center gap-8">
            <div className="flex flex-col items-center gap-2 grayscale group hover:grayscale-0 transition-all">
              <span className="text-white/10 group-hover:text-vice-cyan transition-colors text-xs font-display">
                MOD: ENABLED
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 grayscale group hover:grayscale-0 transition-all">
              <span className="text-white/10 group-hover:text-vice-pink transition-colors text-xs font-display">
                LIMIT: NULL
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
