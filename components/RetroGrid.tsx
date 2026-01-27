"use client";
import React from "react";
import { motion } from "framer-motion";

export default function RetroGrid() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-bg">
      {/* Moving Horizon Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute w-[200vw] h-[200vh] -left-[50vw] top-[30vh] origin-top transform-gpu"
        style={{
          perspective: "500px",
          transform: "rotateX(60deg) translateZ(-100px)",
        }}
      >
        <div
          className="w-full h-full bg-grid-pattern bg-[length:40px_40px]"
          style={{
            animation: "gridMove 4s linear infinite",
          }}
        />
        <style>{`
            @keyframes gridMove {
                0% { transform: translateY(0); }
                100% { transform: translateY(40px); }
            }
        `}</style>
      </motion.div>
      {/* Sun/Sunset */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-t from-vice-yellow via-vice-pink to-vice-purple blur-md opacity-80" />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-64 h-32 bg-vice-dark/20 backdrop-blur-sm z-0" />{" "}
      {/* Horizon cut */}
      {/* Vignette */}
      <div className="absolute inset-0 bg-linear-to-t from-vice-dark via-transparent to-vice-dark/80" />
    </div>
  );
}
