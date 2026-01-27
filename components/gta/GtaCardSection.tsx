import { sections } from "@/lib/data";
import { GtaCard } from "./GtaCard";

export default function GtaCardsSection() {
  return (
    <section id="games" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-16 text-center">
          <h2 className="heading-xl text-4xl">
            <span className="gradient-text">The Saga Storyline</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm tracking-widest uppercase">
            Explore your way
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {sections.map((section) => (
            <GtaCard key={section.slug} {...section} />
          ))}
        </div>
      </div>
    </section>
  );
}
