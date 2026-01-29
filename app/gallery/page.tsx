"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import RetroGrid from "@/components/RetroGrid";
import { characters, districts } from "@/lib/data";
import { vehicles } from "@/lib/vehicles";
import { Terminal, Camera, Expand, X } from "lucide-react";

// Combine all media for the gallery
const allMedia = [
  ...characters.map((item) => ({ ...item, type: "Character", color: "pink" })),
  ...districts.map((item) => ({ ...item, type: "Location", color: "cyan" })),
  ...vehicles.map((item) => ({ ...item, type: "Vehicle", color: "yellow" })),
].sort(() => Math.random() - 0.5);

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen relative bg-vice-dark text-white selection:bg-vice-pink selection:text-white overflow-hidden">
      <RetroGrid />

      {/* CRT Overlay Effects */}
      <div className="fixed inset-0 crt-overlay z-10 pointer-events-none opacity-40 mix-blend-overlay" />
      <div className="fixed inset-0 z-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      <div className="relative z-20 pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-vice-cyan font-mono text-sm uppercase tracking-[0.3em] mb-2"
          >
            <Terminal size={14} />
            Visual Database // Access Granted
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase italic"
          >
            VICE{" "}
            <span className="text-vice-pink drop-shadow-[0_0_15px_rgba(255,47,146,0.5)]">
              GALLERY
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-display tracking-widest uppercase max-w-xl mx-auto text-sm"
          >
            A high-definition snapshot of the neon-soaked underworld.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {allMedia.map((item, index) => (
            <GalleryCard
              key={index}
              item={item}
              onClick={() => setSelectedImage(item.image)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(255,47,146,0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Selected gallery image"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-vice-pink text-white rounded-full transition-colors group"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function GalleryCard({ item, onClick }: { item: any; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="relative group cursor-pointer break-inside-avoid rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm"
      onClick={onClick}
    >
      <div className="relative aspect-auto">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
          <div className="flex items-center justify-between">
            <div>
              <span
                className={`text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border border-current mb-2 inline-block ${
                  item.color === "pink"
                    ? "text-vice-pink"
                    : item.color === "cyan"
                      ? "text-vice-cyan"
                      : "text-vice-yellow"
                }`}
              >
                {item.type}
              </span>
              <h3 className="text-xl font-display font-bold uppercase italic text-white leading-tight">
                {item.title}
              </h3>
            </div>
            <div className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors">
              <Expand size={18} className="text-white" />
            </div>
          </div>
        </div>

        {/* Scanlines on hover */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,100,0.06))] bg-[length:100%_2px,3px_100%]" />
      </div>

      {/* Retro border glow on hover */}
      <div
        className={`absolute inset-0 border-2 opacity-0 group-hover:opacity-50 transition-opacity pointer-events-none rounded-xl ${
          item.color === "pink"
            ? "border-vice-pink shadow-[inset_0_0_20px_rgba(255,47,146,0.3)]"
            : item.color === "cyan"
              ? "border-vice-cyan shadow-[inset_0_0_20px_rgba(0,229,255,0.3)]"
              : "border-vice-yellow shadow-[inset_0_0_20px_rgba(255,235,59,0.3)]"
        }`}
      />
    </motion.div>
  );
}
