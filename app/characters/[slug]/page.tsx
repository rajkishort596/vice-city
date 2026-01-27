import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { characters } from "@/lib/data";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CharacterPage({ params }: PageProps) {
  const { slug } = await params;
  const character = characters.find((char) => char.slug === slug);
  if (!character) return notFound();

  return (
    <section className="min-h-screen bg-black text-white px-6 py-28 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-black to-cyan-500/5 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back Button */}
        <Link
          href="/characters"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors ml-4 md:ml-12 mb-12 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          Back to Characters
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT — 3D CHARACTER CARD */}
          <div className="sticky top-24">
            <CardContainer className="inter-var">
              <CardBody className="bg-gradient-to-br from-black via-gray-900 to-black relative border border-white/20 rounded-2xl p-8 shadow-2xl overflow-hidden">
                {/* Neon Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <CardItem translateZ={80} className="relative z-10">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 via-white to-cyan-400 bg-clip-text text-transparent">
                    {character.title}
                  </h1>
                </CardItem>

                <CardItem
                  translateZ={60}
                  className="text-xs uppercase tracking-[0.2em] text-pink-400 mt-3 font-semibold relative z-10"
                >
                  {character.role || "Vice City Character"}
                </CardItem>

                <CardItem translateZ={120} className="mt-8 relative z-10">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    {/* Image Container with fixed aspect ratio */}
                    <div className="relative w-full aspect-[3/4] max-h-[500px]">
                      <Image
                        src={character.image}
                        alt={character.title}
                        fill
                        className="object-cover"
                        priority
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Neon Border Effect */}
                    <div className="absolute inset-0 border-2 border-pink-500/30 rounded-xl pointer-events-none" />
                  </div>
                </CardItem>

                {/* Character Stats */}
                {character.stats && (
                  <CardItem translateZ={40} className="mt-6 relative z-10">
                    <div className="grid grid-cols-2 gap-4">
                      {character.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 hover:border-pink-400/50 transition-colors"
                        >
                          <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                            {stat.label}
                          </div>
                          <div className="text-sm font-bold text-white">
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardItem>
                )}
              </CardBody>
            </CardContainer>
          </div>

          {/* RIGHT — DETAILED LORE & INFO */}
          <div className="space-y-12">
            {/* Character Introduction */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full" />
                <h2 className="text-5xl font-bold">
                  Who is{" "}
                  <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    {character.title}
                  </span>
                  ?
                </h2>
              </div>

              <p className="text-neutral-300 text-lg leading-relaxed">
                {character.description}
              </p>

              {character.extendedDescription && (
                <p className="text-neutral-400 text-base leading-relaxed mt-4">
                  {character.extendedDescription}
                </p>
              )}
            </div>

            {/* Character Quote */}
            {character.quote && (
              <div className="relative">
                <div className="absolute -left-4 top-0 text-6xl text-pink-500/20 font-serif">
                  "
                </div>
                <blockquote className="border-l-4 border-pink-500 pl-8 py-4 bg-white/5 backdrop-blur-sm rounded-r-lg">
                  <p className="text-xl italic text-white/90 mb-3">
                    {character.quote}
                  </p>
                  <cite className="text-sm text-gray-400 not-italic">
                    — {character.title}
                  </cite>
                </blockquote>
              </div>
            )}

            {/* Character Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Affiliation */}
              {character.affiliation && (
                <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-pink-400/50 transition-all duration-300">
                  <div className="text-xs uppercase tracking-widest text-pink-400 mb-2 font-semibold">
                    Affiliation
                  </div>
                  <div className="text-lg font-bold text-white">
                    {character.affiliation}
                  </div>
                </div>
              )}

              {/* Status */}
              {character.status && (
                <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-xs uppercase tracking-widest text-cyan-400 mb-2 font-semibold">
                    Status
                  </div>
                  <div className="text-lg font-bold text-white">
                    {character.status}
                  </div>
                </div>
              )}

              {/* First Appearance */}
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300">
                <div className="text-xs uppercase tracking-widest text-purple-400 mb-2 font-semibold">
                  Appears In
                </div>
                <div className="text-lg font-bold text-white">
                  GTA Vice City (2002)
                </div>
              </div>

              {/* Voice Actor */}
              {character.voiceActor && (
                <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
                  <div className="text-xs uppercase tracking-widest text-yellow-400 mb-2 font-semibold">
                    Voice Actor
                  </div>
                  <div className="text-lg font-bold text-white">
                    {character.voiceActor}
                  </div>
                </div>
              )}
            </div>

            {/* Key Traits */}
            {character.traits && character.traits.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                  Key Traits
                </h3>
                <div className="flex flex-wrap gap-3">
                  {character.traits.map((trait, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-white/20 rounded-full text-sm font-medium hover:border-pink-400/50 transition-colors"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="border-t border-white/10 pt-8">
              <Link
                href="/characters"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">
                  ←
                </span>
                Explore More Characters
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
