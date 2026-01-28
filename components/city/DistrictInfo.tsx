"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import {
  TextRevealCard,
  TextRevealCardTitle,
  TextRevealCardDescription,
} from "@/components/ui/text-reveal-card";

interface DistrictInfoProps {
  district: {
    title: string;
    slug: string;
    image: string;
    description: string;
    vibe: string;
    color: string;
  };
}

export function DistrictInfo({ district }: DistrictInfoProps) {
  return (
    <section className="relative z-10 py-20 px-6">
      <Spotlight className="-top-40 left-0" fill="cyan" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center w-full"
          >
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-black/40 relative group/card border-white/10 w-full max-w-125 aspect-4/3 rounded-3xl p-4 border overflow-hidden">
                <CardItem translateZ="100" className="w-full h-full">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-vice-cyan/20 bg-gray-900">
                    <Image
                      src={district.image}
                      alt={district.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                      width={500}
                      height={500}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </CardItem>

                <div className="absolute bottom-6 left-6 right-6">
                  <CardItem
                    translateZ="50"
                    className="text-xs font-display text-vice-cyan uppercase tracking-[0.2em] drop-shadow-md"
                  >
                    District Profile: 1986.VC.
                    {district.slug.substring(0, 3).toUpperCase()}
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 md:p-12 rounded-[2.5rem] backdrop-blur-3xl border border-white/10 relative overflow-hidden">
              <div
                className={`absolute inset-0 bg-linear-to-br ${district.color} opacity-5`}
              />

              <h2 className="text-3xl md:text-4xl font-display text-white mb-6 uppercase tracking-tight">
                About <span className="text-vice-pink">the Area</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light italic">
                "{district.description}"
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-vice-cyan/50 font-display">
                    Atmosphere
                  </span>
                  <p className="text-white font-display text-sm uppercase">
                    {district.vibe.split(" / ")[0]}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-vice-pink/50 font-display">
                    Status
                  </span>
                  <p className="text-white font-display text-sm uppercase">
                    {district.vibe.split(" / ")[1]}
                  </p>
                </div>
              </div>
            </div>

            {/* Reveal Vibe Card */}
            <div className="w-full">
              <TextRevealCard
                text="Experience the atmosphere"
                revealText={district.vibe}
                className="bg-black/40 border-white/10 w-full"
              >
                <TextRevealCardTitle className="text-vice-cyan uppercase font-display">
                  The Pulse of {district.title}
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                  Hover to feel the neon heartbeat
                </TextRevealCardDescription>
              </TextRevealCard>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
