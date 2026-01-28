"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RetroGrid from "@/components/RetroGrid";
import { Spotlight } from "@/components/ui/spotlight";
import { vehicles } from "@/lib/vehicles";
import {
  Search,
  Car,
  Gauge,
  Shield,
  Zap,
  Anchor,
  Plane,
  Bike,
} from "lucide-react";
import VehicleCard from "@/components/vehicles/VehicleCard";

const categories = [
  "All",
  "Sports",
  "Classic",
  "Motorcycle",
  "Industrial",
  "Marine",
  "Aircraft",
];

const categoryIcons: Record<string, any> = {
  Sports: Car,
  Classic: Car,
  Motorcycle: Bike,
  Industrial: Shield,
  Marine: Anchor,
  Aircraft: Plane,
};

export default function VehiclesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVehicles = vehicles.filter((v) => {
    const matchesCategory =
      selectedCategory === "All" || v.category === selectedCategory;
    const matchesSearch =
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen relative bg-vice-dark text-white selection:bg-vice-pink selection:text-white overflow-x-hidden">
      <RetroGrid />
      <div className="fixed inset-0 crt-overlay z-50 pointer-events-none opacity-15 mix-blend-overlay" />
      <div className="fixed inset-0 z-50 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <Spotlight className="-top-40 left-10" fill="cyan" />
        <Spotlight className="top-40 right-10" fill="magenta" />

        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-vice-yellow/30 bg-vice-yellow/10 text-vice-yellow text-[10px] font-display tracking-[0.4em] uppercase mb-6">
              <Zap size={12} className="animate-pulse" />
              Sunshine Autos Showroom
            </div>
            <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter text-white uppercase italic drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              PREMIUM <span className="text-vice-cyan">MOTORS</span>
            </h1>
            <p className="text-xl md:text-2xl text-vice-pink font-display tracking-widest max-w-3xl mx-auto uppercase mt-4">
              The Finest Collection in the Sunshine State
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="relative z-10 px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="glass p-6 md:p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-3xl space-y-8">
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-1/3 group">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-vice-cyan/40 group-focus-within:text-vice-cyan transition-colors"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="FIND YOUR RIDE..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-vice-cyan placeholder:text-vice-cyan/20 focus:outline-none focus:border-vice-cyan/50 transition-all font-display tracking-widest"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((cat) => {
                  const Icon = categoryIcons[cat];
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`group flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-display tracking-[0.2em] uppercase transition-all border cursor-pointer ${
                        selectedCategory === cat
                          ? "bg-vice-pink border-vice-pink text-white shadow-[0_0_20px_rgba(255,47,146,0.6)] scale-105"
                          : "bg-white/5 border-white/5 text-white/40 hover:bg-white/10 hover:text-white hover:border-white/20"
                      }`}
                    >
                      {Icon && (
                        <Icon
                          size={14}
                          className={
                            selectedCategory === cat
                              ? "text-white"
                              : "text-vice-cyan/40 group-hover:text-vice-cyan"
                          }
                        />
                      )}
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="relative z-10 px-6 pb-40">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredVehicles.map((vehicle, idx) => (
                <VehicleCard key={vehicle.slug} vehicle={vehicle} index={idx} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredVehicles.length === 0 && (
            <div className="text-center py-40 animate-pulse">
              <Car size={64} className="mx-auto text-white/10 mb-4" />
              <h3 className="text-2xl font-display text-white/20 uppercase tracking-[0.5em]">
                Inventory Empty
              </h3>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
