"use client";

import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

// const characters = [
//   {
//     title: "Tommy Vercetti",
//     description: "A former mobster determined to build his own empire in Vice City.",
//     image: "/characters/tommy.jpg",
//     slug: "tommy-vercetti",
//   },
//   {
//     title: "Lance Vance",
//     description: "Ambitious, reckless, and hungry for power.",
//     image: "/characters/lance.jpg",
//     slug: "lance-vance",
//   },
//   {
//     title: "Sonny Forelli",
//     description: "The ruthless kingpin pulling strings from Liberty City.",
//     image: "/characters/sonny.jpg",
//     slug: "sonny-forelli",
//   },
//   {
//     title: "Ken Rosenberg",
//     description: "A nervous lawyer stuck between crime and survival.",
//     image: "/characters/ken.jpg",
//     slug: "ken-rosenberg",
//   },
// ];

import { characters } from "@/lib/data";

export default function CharactersGrid() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-md md:w-auto md:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {characters.map((char) => (
          <CardContainer key={char.slug} className="inter-var">
            <CardBody
              className="
                bg-black relative group/card
                hover:shadow-2xl hover:shadow-pink-500/10
                border border-white/20
                w-auto h-auto rounded-xl p-6
              "
            >
              {/* Title */}
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-pink-400"
              >
                {char.title}
              </CardItem>

              {/* Description */}
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-300 text-sm max-w-sm mt-2"
              >
                {char.description}
              </CardItem>

              {/* Image */}
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={char.image}
                  height="1000"
                  width="1000"
                  className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={char.title}
                />
              </CardItem>

              {/* Bottom Bar */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                {/* Collection */}
                <CardItem
                  translateZ={30}
                  className="text-xs text-gray-400 leading-tight"
                >
                  <span className="block uppercase tracking-widest text-[10px] text-gray-500">
                    Collection
                  </span>
                  <span className="text-white font-medium">Vice City</span>
                </CardItem>

                {/* CTA */}
                <CardItem translateZ={40}>
                  <Link
                    href={`/characters/${char.slug}`}
                    className="text-sm font-medium text-white hover:underline underline-offset-4"
                  >
                    Explore {char.title.split(" ")[0]} →
                  </Link>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
