import { motion } from "framer-motion";

export default function TimelineItem({
  chapter,
  title,
  description,
  content,
  color,
  delay,
  reverse = false,
}: {
  chapter: string;
  title: string;
  description: string;
  content: string;
  color: string;
  delay: number;
  reverse?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
    >
      {/* Chapter Number */}
      <div className="flex-shrink-0">
        <div
          className={`w-32 h-32 rounded-full bg-gradient-to-br from-${color} to-${color}/50 flex items-center justify-center border-4 border-${color}/30 shadow-lg shadow-${color}/50`}
        >
          <span className="text-4xl font-display font-bold">{chapter}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 glass p-8 rounded-2xl backdrop-blur-xl border border-white/10 hover:border-${color}/50 transition-all duration-300 group">
        <h3
          className={`text-3xl md:text-4xl font-display text-${color} mb-3 group-hover:scale-105 transition-transform`}
        >
          {title}
        </h3>
        <p className="text-lg text-vice-cyan/80 mb-4 italic">{description}</p>
        <p className="text-gray-300 leading-relaxed">{content}</p>
      </div>
    </motion.div>
  );
}
