"use client";

import { Spotlight } from "@/components/ui/spotlight";

export default function CharactersHero() {
  return (
    <div className="relative flex h-[50vh] w-full overflow-hidden rounded-md bg-black/96 antialiased md:items-center md:justify-center">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="pink" />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-25 lg:pt-0">
        <h1 className="text-4xl text-center md:text-6xl font-extrabold bg-linear-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
          The Faces of Vice City
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-marker text-neutral-300">
          Explore the diverse cast of characters that define the criminal
          underworld and high-society glamour of 1980s Vice City.
        </p>
      </div>
    </div>
  );
}
