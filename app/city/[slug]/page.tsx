"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import RetroGrid from "@/components/RetroGrid";
import { districts } from "@/lib/data";
import { DistrictHero } from "@/components/city/DistrictHero";
import { DistrictInfo } from "@/components/city/DistrictInfo";
import { DistrictHighlights } from "@/components/city/DistrictHighlights";
import { DistrictTerritory } from "@/components/city/DistrictTerritory";
import { DistrictQuote } from "@/components/city/DistrictQuote";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function DistrictPage({ params }: PageProps) {
  const { slug } = use(params);
  const district = districts.find((d) => d.slug === slug);

  if (!district) {
    return notFound();
  }

  return (
    <main className="min-h-screen relative bg-vice-dark text-white selection:bg-vice-pink selection:text-white overflow-x-hidden">
      <RetroGrid />
      <div className="fixed inset-0 crt-overlay z-50 pointer-events-none opacity-40 mix-blend-overlay" />
      <div className="fixed inset-0 z-50 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      {/* Hero Section */}
      <DistrictHero title={district.title} vibe={district.vibe} />

      {/* Back Button */}
      <div className="relative z-50 max-w-7xl mx-auto px-6 -mt-10 mb-10">
        <Link
          href="/city"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-vice-pink transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          Back to Districts
        </Link>
      </div>

      {/* Main Content */}
      <DistrictInfo district={district} />

      {/* Key Features Section */}
      <DistrictHighlights highlights={getHighlights(district.slug)} />

      {/* Factions Section */}
      <DistrictTerritory
        vibe={district.vibe}
        territoryInfo={getTerritoryInfo(district.slug)}
      />

      {/* Quote/Vibe Footer */}
      <DistrictQuote quote={getDistrictQuote(district.slug)} />
    </main>
  );
}

function getHighlights(slug: string) {
  const highlights: Record<
    string,
    { title: string; desc: string; icon: string }[]
  > = {
    "ocean-beach": [
      {
        title: "Ocean Drive",
        desc: "The most famous strip in the city, lined with neon Art Deco hotels.",
        icon: "🏨",
      },
      {
        title: "The Lighthouse",
        desc: "A historic beacon standing at the southernmost tip of the beach.",
        icon: "🔦",
      },
      {
        title: "Marina Sands",
        desc: "Luxury yacht club where the city's elite dock their vessels.",
        icon: "🛥️",
      },
    ],
    "vice-point": [
      {
        title: "North Point Mall",
        desc: "A massive shopping complex with high-end boutiques and fast food.",
        icon: "🛍️",
      },
      {
        title: "Malibu Club",
        desc: "The premier nightlife destination for those who want to be seen.",
        icon: "🕺",
      },
      {
        title: "Leaf Links",
        desc: "The exclusive golf course where business deals are settled on the green.",
        icon: "⛳",
      },
    ],
    "little-havana": [
      {
        title: "Cafe Robina",
        desc: "The hub of the Cuban community and Umberto Robina's headquarters.",
        icon: "☕",
      },
      {
        title: "Kaufman Cabs",
        desc: "The most reliable, if not slightly chaotic, taxi service in town.",
        icon: "🚕",
      },
      {
        title: "Cherry Popper",
        desc: "A seemingly innocent ice cream factory with more than one secret.",
        icon: "🍦",
      },
    ],
    "starfish-island": [
      {
        title: "The Mansion",
        desc: "The grandest estate on the island, featuring a helipad and private docks.",
        icon: "🏰",
      },
      {
        title: "Gated Access",
        desc: "Exclusivity guaranteed by 24/7 private security and heavy checkpoints.",
        icon: "🚧",
      },
      {
        title: "Pool Parties",
        desc: "Where the rich and powerful gather to network and celebrate their success.",
        icon: "🎉",
      },
    ],
    downtown: [
      {
        title: "Hyman Stadium",
        desc: "Host to massive concerts, dirt bike races, and the iconic Bloodring.",
        icon: "🏟️",
      },
      {
        title: "VCN Building",
        desc: "The heartbeat of the city's media and news operations.",
        icon: "📺",
      },
      {
        title: "Love Fist Studio",
        desc: "Where the world's wildest rock band records their platinum hits.",
        icon: "🎸",
      },
    ],
    "little-haiti": [
      {
        title: "Poulet's Shack",
        desc: "A mysterious location where the spirits seem to whisper in the wind.",
        icon: "🔮",
      },
      {
        title: "Print Works",
        desc: "A vital industrial site capable of producing... high-quality papers.",
        icon: "📠",
      },
      {
        title: "Sunshine Autos",
        desc: "The best place to find rare imports, with no questions asked.",
        icon: "🏎️",
      },
    ],
  };
  return (
    highlights[slug] || [
      {
        title: "Architecture",
        desc: "Iconic 1980s aesthetic with neon accents and pastel palettes.",
        icon: "🏢",
      },
      {
        title: "Lifestyle",
        desc: "A blend of high-end luxury and the gritty reality of the streets.",
        icon: "🌴",
      },
      {
        title: "Influence",
        desc: "Controlled by the city's most powerful factions and families.",
        icon: "⚖️",
      },
    ]
  );
}

function getTerritoryInfo(slug: string) {
  const info: Record<string, string> = {
    "ocean-beach":
      "It's the tourist heart of the city, largely influenced by the Forelli family's early interests and later independent entrepreneurs.",
    "vice-point":
      "Primarily a residential and commercial luxury zone, it's a contested area for various up-and-coming criminal enterprises.",
    "little-havana":
      "Strictly controlled by Los Cabrones (the Cubans), led by the prideful Umberto Robina.",
    "starfish-island":
      "The ultimate seat of power. Once ruled by Ricardo Diaz, it now serves as the nerve center for the city's kingpin.",
    downtown:
      "The business district where corporate power and underworld muscle meet. Various factions vie for control of the skyscrapers.",
    "little-haiti":
      "Deep territory for the Haitian gang, governed by the mysterious and powerful Auntie Poulet.",
  };
  return (
    info[slug] ||
    "A key strategic point in the city's ever-shifting power dynamic."
  );
}

function getDistrictQuote(slug: string) {
  const quotes: Record<string, string> = {
    "ocean-beach": "The sun sets, but the neon never dies on Ocean Drive.",
    "vice-point": "Luxury has a price, and in Vice Point, we pay in cash.",
    "little-havana":
      "Respect is earned in the streets, but loyalty is found over a coffee.",
    "starfish-island":
      "If you don't live on Starfish, you're just visiting Vice City.",
    downtown: "The higher the skyscraper, the further the fall.",
    "little-haiti": "The Voodoo spirits know your name long before you arrive.",
  };
  return (
    quotes[slug] ||
    "In Vice City, the sun always shines, but the shadows are infinite."
  );
}
