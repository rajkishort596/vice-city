"use client";

interface DistrictTerritoryProps {
  vibe: string;
  territoryInfo: string;
}

export function DistrictTerritory({
  vibe,
  territoryInfo,
}: DistrictTerritoryProps) {
  return (
    <section className="relative z-10 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/10 bg-linear-to-br from-vice-purple/10 to-transparent">
          <h2 className="text-2xl font-display text-vice-pink uppercase mb-6 flex items-center gap-3">
            <span className="w-2 h-2 bg-vice-pink rounded-full animate-pulse" />
            Territory Info
          </h2>
          <p className="text-gray-300 leading-relaxed font-sans">
            This area is known for its {vibe.toLowerCase()} atmosphere.{" "}
            {territoryInfo}
          </p>
        </div>
      </div>
    </section>
  );
}
