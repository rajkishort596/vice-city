export interface VehicleStat {
  label: string;
  value: number; // 1-100
}

export interface Vehicle {
  title: string;
  slug: string;
  category:
    | "Sports"
    | "Classic"
    | "Industrial"
    | "Marine"
    | "Aircraft"
    | "Motorcycle";
  description: string;
  image: string;
  price?: string;
  stats: VehicleStat[];
}

export const vehicles: Vehicle[] = [
  {
    title: "Infernus",
    slug: "infernus",
    category: "Sports",
    description:
      "The ultimate status symbol in Vice City. Sleek, fast, and dangerous in the wrong hands.",
    image: "/vehicles/infernus.png",
    price: "$110,000",
    stats: [
      { label: "Speed", value: 95 },
      { label: "Acceleration", value: 90 },
      { label: "Handling", value: 85 },
      { label: "Durability", value: 40 },
    ],
  },
  {
    title: "Cheetah",
    slug: "cheetah",
    category: "Sports",
    description:
      "A favorite of the Vice City Police Department's undercover unit. Balanced and blisteringly quick.",
    image: "/vehicles/cheetah.png",
    price: "$105,000",
    stats: [
      { label: "Speed", value: 92 },
      { label: "Acceleration", value: 88 },
      { label: "Handling", value: 88 },
      { label: "Durability", value: 45 },
    ],
  },
  {
    title: "Stinger",
    slug: "stinger",
    category: "Sports",
    description:
      "The convertible of choice for Ocean Beach socialites. Perfect for cruising the strip at sunset.",
    image: "/vehicles/stinger.png",
    price: "$85,000",
    stats: [
      { label: "Speed", value: 85 },
      { label: "Acceleration", value: 82 },
      { label: "Handling", value: 84 },
      { label: "Durability", value: 50 },
    ],
  },
  {
    title: "Phoenix",
    slug: "phoenix",
    category: "Classic",
    description:
      "Pure American muscle. It might not turn well, but it sure sounds like freedom.",
    image: "/vehicles/phoenix.png",
    price: "$25,000",
    stats: [
      { label: "Speed", value: 80 },
      { label: "Acceleration", value: 85 },
      { label: "Handling", value: 60 },
      { label: "Durability", value: 70 },
    ],
  },
  {
    title: "Sabre Turbo",
    slug: "sabre-turbo",
    category: "Classic",
    description:
      "Built for the drag strip but ruled by the streets. The heavy metal heartbeat of Vice City.",
    image: "/vehicles/sabre-turbo.png",
    price: "$30,000",
    stats: [
      { label: "Speed", value: 82 },
      { label: "Acceleration", value: 87 },
      { label: "Handling", value: 65 },
      { label: "Durability", value: 75 },
    ],
  },
  {
    title: "PCJ 600",
    slug: "pcj-600",
    category: "Motorcycle",
    description:
      "The fastest way to navigate through Vice City's gridlock. Wheelie optional, but recommended.",
    image: "/vehicles/pcj-600.png",
    price: "$12,000",
    stats: [
      { label: "Speed", value: 88 },
      { label: "Acceleration", value: 92 },
      { label: "Handling", value: 95 },
      { label: "Durability", value: 20 },
    ],
  },
  {
    title: "Sea Sparrow",
    slug: "aircraft",
    category: "Aircraft",
    description:
      "A versatile helicopter equipped with a mounted machine gun and pontoons for water landings.",
    image: "/vehicles/sea-sparrow.png",
    price: "N/A",
    stats: [
      { label: "Speed", value: 75 },
      { label: "Agility", value: 90 },
      { label: "Firepower", value: 80 },
      { label: "Durability", value: 55 },
    ],
  },
  {
    title: "Rhino",
    slug: "rhino",
    category: "Industrial",
    description:
      "The ultimate answer to any problem in Vice City. When subtle isn't enough.",
    image: "/vehicles/rhino.png",
    price: "N/A",
    stats: [
      { label: "Speed", value: 30 },
      { label: "Acceleration", value: 20 },
      { label: "Firepower", value: 100 },
      { label: "Durability", value: 100 },
    ],
  },
  {
    title: "Squalo",
    slug: "squalo",
    category: "Marine",
    description:
      "The fastest speedboat in the city. Best used for high-speed runs across the bay.",
    image: "/vehicles/squalo.png",
    price: "$65,000",
    stats: [
      { label: "Speed", value: 90 },
      { label: "Acceleration", value: 85 },
      { label: "Handling", value: 70 },
      { label: "Durability", value: 40 },
    ],
  },
  {
    title: "Deluxo",
    slug: "deluxo",
    category: "Classic",
    description:
      "A gull-winged piece of the future, straight from the past. It doesn't fly, but it sure feels like it.",
    image: "/vehicles/deluxo.png",
    price: "$45,000",
    stats: [
      { label: "Speed", value: 85 },
      { label: "Acceleration", value: 80 },
      { label: "Handling", value: 75 },
      { label: "Durability", value: 60 },
    ],
  },
];
