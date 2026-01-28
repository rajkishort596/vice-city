import { motion } from "framer-motion";
import { Vehicle } from "@/lib/vehicles";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function VehicleCard({
  vehicle,
  index,
}: {
  vehicle: Vehicle;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <CardContainer
        className="inter-var w-full"
        containerClassName="w-full py-10"
      >
        <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-vice-cyan/10 border-white/20 w-full lg:w-120 h-auto rounded-xl p-6 border transition-all duration-300">
          <div className="flex justify-between items-start">
            <div>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white font-display uppercase tracking-wider"
              >
                {vehicle.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-vice-cyan/70 text-[10px] font-display tracking-[0.3em] uppercase mt-1"
              >
                {vehicle.category}
              </CardItem>
            </div>

            <CardItem
              translateZ="80"
              className="px-3 py-1 rounded-lg bg-vice-cyan/10 border border-vice-cyan/20 text-vice-yellow font-display text-[10px] tracking-widest uppercase"
            >
              {vehicle.price || "Sought After"}
            </CardItem>
          </div>

          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={vehicle.image}
              height="1000"
              width="1000"
              className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-transform duration-500"
              alt={vehicle.title}
            />
          </CardItem>

          <CardItem
            translateZ="80"
            className="text-gray-300 text-sm mt-6 leading-relaxed font-sans line-clamp-2 italic"
          >
            "{vehicle.description}"
          </CardItem>

          {/* Stats Grid */}
          <div className="mt-10 grid grid-cols-2 gap-x-12 gap-y-6 border-t border-white/10 pt-6 w-full">
            {vehicle.stats.map((stat, i) => (
              <CardItem
                key={stat.label}
                translateZ={40 + i * 10}
                className="flex flex-col gap-2 w-full"
              >
                <div className="flex justify-between items-center w-full text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 font-display">
                  <span className="opacity-80">{stat.label}</span>
                  <span className="text-vice-cyan font-black italic">
                    {stat.value}%
                  </span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.value}%` }}
                    transition={{
                      duration: 1.5,
                      delay: 0.2 + i * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="h-full bg-linear-to-r from-vice-cyan via-vice-cyan to-vice-pink shadow-[0_0_12px_rgba(0,229,255,0.5)]"
                  />
                </div>
              </CardItem>
            ))}
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}
