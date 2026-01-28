"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import RetroGrid from "@/components/RetroGrid";
import { LampContainer } from "@/components/ui/lamp";
import { Spotlight } from "@/components/ui/spotlight";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

import { districts } from "@/lib/data";

export default function CityPage() {
  return (
    <main className="min-h-screen relative bg-vice-dark text-white selection:bg-vice-pink selection:text-white overflow-x-hidden">
      <RetroGrid />
      <div className="fixed inset-0 crt-overlay z-50 pointer-events-none opacity-40 mix-blend-overlay" />
      <div className="fixed inset-0 z-50 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/city_hero.png"
            className="w-full h-full object-cover opacity-60"
            alt="Vice City Skyline"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-vice-dark via-transparent to-vice-dark" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <h1 className="heading-xl gradient-text drop-shadow-[0_0_20px_rgba(255,0,204,0.5)]">
            VICE CITY
          </h1>
          <p className="text-2xl md:text-3xl font-display tracking-[0.3em] text-vice-cyan uppercase">
            The Playground of the Sun
          </p>
        </motion.div>
      </section>

      {/* Intro Text */}
      <section className="relative z-10 py-20 px-4">
        <Spotlight className="-top-40 left-0" fill="magenta" />
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[2rem] backdrop-blur-2xl border border-white/10 text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-vice-cyan/5 via-transparent to-vice-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h2 className="text-4xl font-display text-white mb-6 tracking-wide">
              A CITY OF <span className="text-vice-pink">CONTRASTS</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-sans font-light">
              Stretching from the swampy outskirts to the neon-drenched luxury
              of the coast, Vice City is a sprawling urban masterpiece. It's a
              place where dreams are made in the shade of palm trees and
              destroyed in the flickering light of a back-alley neon sign.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Districts Grid */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 space-y-4">
            <h2 className="text-center text-5xl md:text-7xl font-display font-black tracking-tighter text-white uppercase italic">
              Explore the <span className="text-vice-cyan">Districts</span>
            </h2>
            <div className="w-40 h-1 bg-gradient-to-r from-vice-cyan to-vice-pink mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {districts.map((district, idx) => (
              <DistrictCard
                key={district.title}
                district={district}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* City Stats / Quick Facts */}
      <section className="relative z-10 py-32 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <QuickFact number="2" label="Major Islands" color="text-vice-cyan" />
          <QuickFact
            number="1986"
            label="Setting Year"
            color="text-vice-yellow"
          />
          <QuickFact number="∞" label="Opportunities" color="text-vice-pink" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-40 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-4xl md:text-6xl font-marker text-vice-cyan -rotate-2">
            The city is waiting for you...
          </h3>
          <p className="text-xl text-white/60 font-display">
            Don't just watch. Experience it.
          </p>
        </motion.div>
      </section>
    </main>
  );
}

function DistrictCard({ district, delay }: { district: any; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <CardContainer className="inter-var">
        <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-pink-500/10 border-white/20 w-auto lg:w-120 h-auto rounded-xl p-6 border transition-all duration-300">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-white font-display uppercase tracking-wider"
          >
            {district.title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-vice-cyan/70 text-sm max-w-sm mt-2 font-display tracking-widest uppercase"
          >
            {district.vibe}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={district.image}
              height="1000"
              width="1000"
              className="h-80 object-cover rounded-xl group-hover/card:shadow-xl transition-transform duration-500"
              alt={district.title}
            />
          </CardItem>

          <CardItem
            translateZ="80"
            className="text-gray-300 text-sm mt-6 leading-relaxed font-sans line-clamp-3"
          >
            {district.description}
          </CardItem>

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
            {/* Collection Info */}
            <CardItem
              translateZ={30}
              className="text-xs text-gray-400 leading-tight"
            >
              <span className="block uppercase tracking-widest text-[10px] text-gray-500">
                Collection
              </span>
              <span className="text-white font-medium">Vice City</span>
            </CardItem>

            {/* Primary CTA */}
            <CardItem translateZ={40}>
              <Link
                href={`/city/${district.slug}`}
                className="text-sm font-medium text-white hover:text-vice-pink transition-colors hover:underline underline-offset-4"
              >
                Explore {district.title} →
              </Link>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}

function QuickFact({
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
