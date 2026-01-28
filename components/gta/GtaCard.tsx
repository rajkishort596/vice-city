"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  image: string;
  slug: string;
};

export function GtaCard({ title, description, image, slug }: Props) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-accent/10 border-white/20 w-auto lg:w-120 h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-300 text-sm max-w-sm mt-2"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={image}
            height="1000"
            width="1000"
            className="h-80 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
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
              href={`/${slug}`}
              className="
        text-sm font-medium
        text-white
        hover:underline underline-offset-4
      "
            >
              Explore {title} →
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
