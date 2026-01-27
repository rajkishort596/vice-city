"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";

export default function ViceCityManifesto() {
  return (
    <div id="manifesto">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-linear-to-br from-vice-cyan to-vice-pink py-4 bg-clip-text text-center text-4xl font-display font-bold tracking-tight text-transparent md:text-7xl drop-shadow-lg"
        >
          Welcome to Vice City
        </motion.h1>
      </LampContainer>
    </div>
  );
}
