"use client";
import { motion } from "framer-motion";

interface DistrictQuoteProps {
  quote: string;
}

export function DistrictQuote({ quote }: DistrictQuoteProps) {
  return (
    <section className="relative z-10 py-40 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl text-vice-pink/10 font-serif pointer-events-none">
            "
          </div>
          <h3 className="text-3xl md:text-5xl font-marker text-vice-cyan leading-tight -rotate-1">
            {quote}
          </h3>
          <p className="mt-8 text-white/40 font-display tracking-[0.5em] uppercase text-xs">
            Established 1986
          </p>
        </div>
      </motion.div>
    </section>
  );
}
