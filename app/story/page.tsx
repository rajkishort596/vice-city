"use client";

import { motion } from "framer-motion";
import RetroGrid from "@/components/RetroGrid";
import { LampContainer } from "@/components/ui/lamp";
import {
  TextRevealCard,
  TextRevealCardTitle,
  TextRevealCardDescription,
} from "@/components/ui/text-reveal-card";
import { Spotlight } from "@/components/ui/spotlight";

export default function StoryPage() {
  return (
    <main className="min-h-screen relative bg-vice-dark text-white selection:bg-vice-pink selection:text-white overflow-x-hidden">
      <RetroGrid />
      <div className="fixed inset-0 crt-overlay z-50 pointer-events-none opacity-40 mix-blend-overlay" />
      <div className="fixed inset-0 z-50 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      {/* Hero Section with Lamp */}
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
          <h1 className="heading-xl gradient-text">THE STORY</h1>
          <p className="text-xl md:text-2xl text-vice-cyan font-display max-w-3xl mx-auto">
            A tale of ambition, betrayal, and the American Dream gone wrong
          </p>
        </motion.div>
      </LampContainer>

      {/* Story Introduction */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl backdrop-blur-xl border border-vice-cyan/20"
          >
            <h2 className="text-4xl md:text-5xl font-display text-vice-pink mb-6">
              Welcome to Vice City
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
              The year is 1986. Tommy Vercetti, a loyal member of the Forelli
              crime family, has just been released from prison after serving 15
              years for a hit he was ordered to carry out. His boss, Sonny
              Forelli, sends him to Vice City to oversee a major drug deal.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              But the deal goes horribly wrong. Tommy is ambushed, the drugs are
              stolen, and the money disappears. Now, with nothing to show for
              the deal and Sonny demanding answers, Tommy must build his own
              criminal empire from scratch in the neon-soaked streets of Vice
              City.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display gradient-text mb-16 text-center"
          >
            THE JOURNEY
          </motion.h2>

          <div className="space-y-20">
            {/* Chapter 1 */}
            <TimelineItem
              chapter="01"
              title="The Ambush"
              description="Tommy arrives in Vice City for what should be a simple drug deal. But nothing in Vice City is ever simple."
              content="The deal at the docks goes sideways. Masked gunmen ambush the exchange, killing the dealers and making off with both the drugs and Sonny's money. Tommy barely escapes with his life, but now he's in deep trouble with his boss."
              color="vice-cyan"
              delay={0.2}
            />

            {/* Chapter 2 */}
            <TimelineItem
              chapter="02"
              title="Building an Empire"
              description="With nothing to lose and everything to prove, Tommy begins his rise to power."
              content="Tommy starts from the bottom, taking on jobs for local criminals and slowly building his reputation. He acquires businesses, from ice cream parlors to strip clubs, using them as fronts for his growing criminal operations. Each venture brings him closer to the top of Vice City's underworld."
              color="vice-pink"
              delay={0.3}
              reverse
            />

            {/* Chapter 3 */}
            <TimelineItem
              chapter="03"
              title="Allies & Enemies"
              description="In Vice City, today's friend could be tomorrow's enemy."
              content="Tommy forms alliances with colorful characters: Lance Vance, a hot-headed partner seeking revenge; Ken Rosenberg, a nervous lawyer; and Avery Carrington, a ruthless real estate developer. But in the criminal underworld, loyalty is a rare commodity, and betrayal lurks around every corner."
              color="vice-purple"
              delay={0.4}
            />

            {/* Chapter 4 */}
            <TimelineItem
              chapter="04"
              title="The Betrayal"
              description="Power corrupts, and absolute power corrupts absolutely."
              content="As Tommy's empire grows, so does the envy of those around him. Lance Vance, feeling underappreciated, makes a deal with Sonny Forelli. The betrayal cuts deep, but Tommy has come too far to let anyone take what he's built."
              color="vice-yellow"
              delay={0.5}
              reverse
            />

            {/* Chapter 5 */}
            <TimelineItem
              chapter="05"
              title="Keep Your Friends Close"
              description="The final confrontation that will determine who truly rules Vice City."
              content="Sonny arrives in Vice City to take over Tommy's empire. With Lance by his side, Sonny storms the Vercetti Estate. But Tommy is ready. In a climactic battle, Tommy eliminates both Lance and Sonny, cementing his position as the undisputed kingpin of Vice City."
              color="vice-pink"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Interactive Reveal Cards */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display gradient-text mb-16 text-center"
          >
            KEY MOMENTS
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full max-w-160"
            >
              <TextRevealCard
                text="The city is yours"
                revealText="Take what's yours"
                className="bg-vice-dark/80 border-vice-cyan/30 w-full max-w-full"
              >
                <TextRevealCardTitle className="text-vice-cyan">
                  Rise to Power
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                  Hover to reveal Tommy's philosophy
                </TextRevealCardDescription>
              </TextRevealCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full max-w-160"
            >
              <TextRevealCard
                text="Trust no one"
                revealText="Loyalty is everything"
                className="bg-vice-dark/80 border-vice-pink/30 w-full max-w-full"
              >
                <TextRevealCardTitle className="text-vice-pink">
                  The Code
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                  Hover to reveal the harsh reality
                </TextRevealCardDescription>
              </TextRevealCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="relative z-10 py-32 px-4">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="cyan"
        />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-display gradient-text">
              THE LEGACY
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Tommy Vercetti's story is one of resilience, ambition, and
              ruthless determination. From a disgraced mobster to the kingpin of
              Vice City, his journey embodies the dark side of the American
              Dream.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <StatCard number="15" label="Years in Prison" />
              <StatCard number="1986" label="Year of Conquest" />
              <StatCard number="∞" label="Legacy" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="relative z-10 py-20 px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="glass p-12 rounded-3xl backdrop-blur-xl border-2 border-vice-pink/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-vice-cyan/10 via-transparent to-vice-pink/10" />
            <blockquote className="relative z-10">
              <p className="text-3xl md:text-4xl font-display text-vice-cyan mb-6 italic">
                "I wanted to piss people off. I wanted to make them angry. I
                wanted to make them feel something."
              </p>
              <footer className="text-xl text-vice-pink font-marker">
                — Tommy Vercetti
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

// Timeline Item Component
function TimelineItem({
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

// Stat Card Component
function StatCard({ number, label }: { number: string; label: string }) {
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
