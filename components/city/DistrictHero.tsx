"use client";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

interface DistrictHeroProps {
  title: string;
  vibe: string;
}

export function DistrictHero({ title, vibe }: DistrictHeroProps) {
  return (
    <LampContainer className="pt-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center space-y-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="inline-block px-4 py-1 rounded-full border border-vice-cyan/30 bg-vice-cyan/10 text-vice-cyan text-xs font-display tracking-[0.3em] uppercase mb-4"
        >
          District Profile
        </motion.div>
        <h1 className="heading-xl gradient-text uppercase">{title}</h1>
        <p className="text-xl md:text-2xl text-vice-cyan font-display tracking-widest max-w-3xl mx-auto uppercase">
          {vibe}
        </p>
      </motion.div>
    </LampContainer>
  );
}
