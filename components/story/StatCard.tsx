import { motion } from "framer-motion";

export default function StatCard({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass px-8 py-6 rounded-2xl backdrop-blur-xl border border-vice-cyan/20 hover:border-vice-pink/50 transition-all duration-300"
    >
      <div className="text-4xl md:text-5xl font-display gradient-text mb-2">
        {number}
      </div>
      <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}
