"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col items-center justify-center z-10"
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="z-10 text-center px-4"
      >
        <h2 className="text-vice-cyan font-marker text-2xl md:text-4xl mb-4 tracking-widest -rotate-2 drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]">
          WELCOME TO THE 80s
        </h2>

        <div className="relative">
          <h1 className="text-6xl md:text-9xl font-display font-black italic tracking-tighter text-white mix-blend-overlay opacity-50 absolute top-1 left-1 w-full">
            VICE CITY
          </h1>
          <h1 className="text-6xl md:text-9xl font-display font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-vice-pink to-vice-purple drop-shadow-[0_0_25px_rgba(255,0,204,0.6)] relative z-10">
            VICE CITY
          </h1>
        </div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto font-light tracking-wide leading-relaxed"
        >
          Sun, surf, and serious crime. Explore the neon-soaked streets where
          opportunities are seized, not given.
        </motion.p>
        <Link href="/city">
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0,255,255,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-8 py-4 bg-transparent border-2 border-vice-cyan text-vice-cyan font-display font-bold text-xl uppercase tracking-widest hover:bg-vice-cyan hover:text-black transition-colors duration-300 cursor-pointer"
          >
            Enter the City
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
