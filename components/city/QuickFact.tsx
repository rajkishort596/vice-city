import { motion } from "framer-motion";

export default function QuickFact({
  number,
  label,
  color,
}: {
  number: string;
  label: string;
  color: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      className="glass p-10 rounded-3xl space-y-2 border border-white/5"
    >
      <div
        className={`text-6xl font-display font-black ${color} drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]`}
      >
        {number}
      </div>
      <div className="text-gray-400 font-display uppercase tracking-widest text-sm">
        {label}
      </div>
    </motion.div>
  );
}