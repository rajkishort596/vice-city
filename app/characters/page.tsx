import CharactersHero from "@/components/characters/ChractersHero";
import CharactersGrid from "@/components/characters/CharactersGrid";
import CharacterQuotes from "@/components/characters/CharacterQoutes";

export default function CharactersPage() {
  return (
    <main className="overflow-hidden">
      <CharactersHero />
      <CharactersGrid />
      <CharacterQuotes />
    </main>
  );
}
