"use client";
import { Spotlight } from "@/components/ui/spotlight";
import { FeatureCard } from "./FeatureCard";

interface Highlight {
  title: string;
  desc: string;
  icon: string;
}

interface DistrictHighlightsProps {
  highlights: Highlight[];
}

export function DistrictHighlights({ highlights }: DistrictHighlightsProps) {
  return (
    <section className="relative z-10 py-32 px-6 bg-black/20">
      <Spotlight className="top-40 right-0" fill="magenta" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-display gradient-text uppercase mb-4">
            Local Highlights
          </h2>
          <div className="w-24 h-1 bg-vice-cyan mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, idx) => (
            <FeatureCard
              key={highlight.title}
              index={idx + 1}
              title={highlight.title}
              desc={highlight.desc}
              icon={highlight.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
