"use client";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  desc: string;
  icon: string;
  index: number;
}

export function FeatureCard({ title, desc, icon, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass p-8 rounded-3xl border border-white/5 hover:border-vice-pink/30 transition-all duration-500 group"
    >
      <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-display text-white mb-3 uppercase tracking-wider group-hover:text-vice-cyan transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
