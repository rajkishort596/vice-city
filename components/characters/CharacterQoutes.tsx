"use client";

import {
  TextRevealCard,
  TextRevealCardTitle,
  TextRevealCardDescription,
} from "@/components/ui/text-reveal-card";
import { motion } from "framer-motion";

const quotes = [
  {
    character: "Lance Vance",
    quote: "This is the last dance for Lance Vance!",
    image: "/characters/lance.jpg",
  },
  {
    character: "Ken Rosenberg",
    quote:
      "I poke my head out of the gutter for one freaking second, and fate shovels sh*t in my face!",
    image: "/characters/ken.jpg",
  },
  {
    character: "Ricardo Diaz",
    quote: "I kill you! I kill you all! You think you can mess with Diaz?",
    image: "/characters/diaz.jpg",
  },
];

export default function CharacterQuotes() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-vice-purple/20 via-black to-black opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="heading-xl text-4xl md:text-5xl mb-4">
            <span className="gradient-text">Voices of Vice</span>
          </h2>
          <p className="text-gray-400 text-sm tracking-widest uppercase font-medium">
            Remember the words that defined an era
          </p>
        </div>

        {/* Featured Quote - Tommy */}
        <div className="flex justify-center mb-24">
          <TextRevealCard
            text="I’m gonna build me an empire."
            revealText="Vice City was never going to run itself."
            className="w-full max-w-4xl border-vice-pink/20 bg-vice-dark/50 backdrop-blur-sm"
          >
            <TextRevealCardTitle className="text-vice-cyan font-display tracking-wider">
              Tommy Vercetti
            </TextRevealCardTitle>
            <TextRevealCardDescription className="text-white/60">
              The man who took it all. Hover to reveal the truth.
            </TextRevealCardDescription>
          </TextRevealCard>
        </div>

        {/* Other Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((item, index) => (
            <motion.div
              key={item.character}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col h-full group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vice-purple via-vice-pink to-vice-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <blockquote className="relative z-10 flex flex-col h-full">
                <p className="text-xl md:text-2xl font-serif italic text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-auto flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                    {/* Using a gradient placeholder if image fails or use standardized path */}
                    <img
                      src={item.image}
                      alt={item.character}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <cite className="not-italic font-display text-sm font-bold text-vice-pink tracking-wider">
                    {item.character}
                  </cite>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
