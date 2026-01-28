import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export default function DistrictCard({
  district,
  delay,
}: {
  district: any;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <CardContainer className="inter-var">
        <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-pink-500/10 border-white/20 w-auto lg:w-120 h-auto rounded-xl p-6 border transition-all duration-300">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-white font-display uppercase tracking-wider"
          >
            {district.title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-vice-cyan/70 text-sm max-w-sm mt-2 font-display tracking-widest uppercase"
          >
            {district.vibe}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={district.image}
              height="1000"
              width="1000"
              className="h-80 object-cover rounded-xl group-hover/card:shadow-xl transition-transform duration-500"
              alt={district.title}
            />
          </CardItem>

          <CardItem
            translateZ="80"
            className="text-gray-300 text-sm mt-6 leading-relaxed font-sans line-clamp-3"
          >
            {district.description}
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
                href={`/city/${district.slug}`}
                className="text-sm font-medium text-white hover:text-vice-pink transition-colors hover:underline underline-offset-4"
              >
                Explore {district.title} →
              </Link>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}
