// Type definitions
export interface CharacterStat {
  label: string;
  value: string;
}

export interface Character {
  title: string;
  role?: string;
  description: string;
  extendedDescription?: string;
  image: string;
  slug: string;
  quote?: string;
  affiliation?: string;
  status?: string;
  voiceActor?: string;
  traits?: string[];
  stats?: CharacterStat[];
}

export const gtaGames = [
  {
    title: "GTA Vice City",
    year: "2002",
    slug: "vice-city",
    image: "https://i.redd.it/0hduat3bv6031.jpg",
    accent: "#ff2f92",
  },
  {
    title: "GTA San Andreas",
    year: "2004",
    slug: "san-andreas",
    image:
      "https://assetsio.gnwcdn.com/gta_sa_3601.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    accent: "#22c55e",
  },
  {
    title: "GTA V",
    year: "2013",
    slug: "gta-v",
    image: "https://wallpapercave.com/wp/wp8330331.jpg",
    accent: "#00e5ff",
  },
  {
    title: "GTA VI",
    year: "2025",
    slug: "gta-vi",
    image: "https://wallpapercave.com/wp/wp13280790.jpg",
    accent: "#a855f7",
  },
];

export const sections = [
  {
    title: "Characters",
    slug: "characters",
    image: "/images/tommy.jpg",
    description:
      "Explore the iconic personalities and their roles in the story.",
  },
  {
    title: "Story",
    slug: "story",
    image: "/images/vice-story.jpg",
    description:
      "Relive the narrative of power, betrayal, and the American dream.",
  },
  {
    title: "City",
    slug: "city",
    image: "images/vice-city.jpg",
    description: "Navigate through the neon-lit streets and coastal vistas.",
  },
  {
    title: "Vehicles",
    slug: "vehicles",
    image: "/images/vice-car.jpg",
    description: "Check out the classic collection of cars, bikes, and boats.",
  },
];

export const characters = [
  // MAIN
  {
    title: "Tommy Vercetti",
    role: "Protagonist",
    description:
      "A former mob hitman sent to Vice City, determined to seize control of the underworld.",
    extendedDescription:
      "After serving 15 years in prison for the Forelli family, Tommy is sent to Vice City to establish new operations. When a drug deal goes wrong, he's forced to build his own criminal empire from scratch, transforming from a loyal soldier into a ruthless kingpin.",
    image: "/characters/tommy.jpg",
    slug: "tommy-vercetti",
    quote:
      "I'm no fool, Ken. But this is business, and I'm gonna make it work.",
    affiliation: "Forelli Crime Family (former), Vercetti Gang",
    status: "Active",
    voiceActor: "Ray Liotta",
    traits: ["Ruthless", "Strategic", "Ambitious", "Loyal", "Vengeful"],
    stats: [
      { label: "Influence", value: "★★★★★" },
      { label: "Combat", value: "★★★★☆" },
      { label: "Business", value: "★★★★★" },
      { label: "Charisma", value: "★★★★☆" },
    ],
  },
  {
    title: "Lance Vance",
    role: "Deuteragonist / Antagonist",
    description:
      "Ambitious and volatile, Lance dreams of power but struggles with loyalty.",
    extendedDescription:
      "Lance partners with Tommy to avenge his brother's death and build an empire. However, his jealousy and desire for recognition eventually lead him to betray Tommy in a bid for power, making him one of the game's most tragic figures.",
    image: "/characters/lance.jpg",
    slug: "lance-vance",
    quote: "I'm tired of being the sidekick, Tommy. I want what's mine!",
    affiliation: "Vercetti Gang (former)",
    status: "Deceased",
    voiceActor: "Philip Michael Thomas",
    traits: ["Ambitious", "Jealous", "Flashy", "Impulsive", "Treacherous"],
    stats: [
      { label: "Loyalty", value: "★★☆☆☆" },
      { label: "Combat", value: "★★★☆☆" },
      { label: "Style", value: "★★★★★" },
      { label: "Ambition", value: "★★★★★" },
    ],
  },
  {
    title: "Sonny Forelli",
    role: "Main Antagonist",
    description:
      "The ruthless Liberty City mob boss overseeing Vice City from afar.",
    extendedDescription:
      "Sonny orchestrates Tommy's release from prison and sends him to Vice City. However, his greed and desire to control Tommy's operations lead to a violent confrontation that ends with Sonny's death at Tommy's hands.",
    image: "/characters/sonny.jpg",
    slug: "sonny-forelli",
    quote: "You still owe me, Tommy. Don't forget that.",
    affiliation: "Forelli Crime Family",
    status: "Deceased",
    voiceActor: "Tom Sizemore",
    traits: ["Greedy", "Manipulative", "Ruthless", "Controlling", "Arrogant"],
    stats: [
      { label: "Power", value: "★★★★☆" },
      { label: "Greed", value: "★★★★★" },
      { label: "Cunning", value: "★★★★☆" },
      { label: "Combat", value: "★★★☆☆" },
    ],
  },

  // ALLIES
  {
    title: "Ken Rosenberg",
    role: "Legal Advisor",
    description:
      "A paranoid lawyer whose clients keep getting him deeper into trouble.",
    extendedDescription:
      "Ken is a cocaine-addicted lawyer who becomes Tommy's right-hand man in Vice City. Despite his constant anxiety and paranoia, he proves invaluable in navigating the legal complexities of Tommy's criminal empire.",
    image: "/characters/ken.jpg",
    slug: "ken-rosenberg",
    quote: "I'm a lawyer! I'm not built for this kind of stress!",
    affiliation: "Vercetti Gang",
    status: "Active",
    voiceActor: "William Fichtner",
    traits: ["Paranoid", "Loyal", "Anxious", "Intelligent", "Addicted"],
    stats: [
      { label: "Legal Skills", value: "★★★★★" },
      { label: "Stress Level", value: "★★★★★" },
      { label: "Loyalty", value: "★★★★☆" },
      { label: "Combat", value: "★☆☆☆☆" },
    ],
  },
  {
    title: "Diaz (Ricardo Diaz)",
    role: "Drug Lord",
    description: "A volatile drug lord ruling Vice City with fear and excess.",
    extendedDescription:
      "Ricardo Diaz is a paranoid cocaine kingpin who controls much of Vice City's drug trade. His violent temper and erratic behavior make him dangerous, but also vulnerable. Tommy eventually kills him and takes over his mansion and operations.",
    image: "/characters/diaz.jpg",
    slug: "ricardo-diaz",
    quote: "You think I'm stupid? You think I don't know what's going on?!",
    affiliation: "Diaz Cartel",
    status: "Deceased",
    voiceActor: "Luis Guzmán",
    traits: ["Paranoid", "Violent", "Wealthy", "Unstable", "Powerful"],
    stats: [
      { label: "Wealth", value: "★★★★★" },
      { label: "Temper", value: "★★★★★" },
      { label: "Paranoia", value: "★★★★★" },
      { label: "Control", value: "★★★★☆" },
    ],
  },
  {
    title: "Avery Carrington",
    role: "Real Estate Mogul",
    description:
      "A fast-talking Texan real estate mogul exploiting Vice City's chaos.",
    extendedDescription:
      "Avery is a wealthy property developer who helps Tommy acquire legitimate businesses as fronts for his criminal operations. His connections and business acumen make him a valuable ally in Tommy's rise to power.",
    image: "/characters/avery.jpg",
    slug: "avery-carrington",
    quote: "Son, in this town, real estate is the real power.",
    affiliation: "Independent Businessman",
    status: "Deceased",
    voiceActor: "Burt Reynolds",
    traits: ["Charismatic", "Greedy", "Cunning", "Connected", "Opportunistic"],
    stats: [
      { label: "Business", value: "★★★★★" },
      { label: "Connections", value: "★★★★★" },
      { label: "Morality", value: "★☆☆☆☆" },
      { label: "Influence", value: "★★★★☆" },
    ],
  },

  // GANG & STREET ICONS
  {
    title: "Umberto Robina",
    role: "Cuban Gang Leader",
    description:
      "Hot-headed leader of the Cuban gang locked in a brutal turf war.",
    extendedDescription:
      "Umberto leads the Cubans in their ongoing war against the Haitians. His machismo and pride drive him to prove his gang's dominance, and he recruits Tommy to help strike devastating blows against their rivals.",
    image: "/characters/umberto.jpg",
    slug: "umberto-robina",
    quote:
      "We Cubans, we got cojones! We show those Haitians who runs this town!",
    affiliation: "Los Cabrones (Cubans)",
    status: "Active",
    voiceActor: "Danny Trejo",
    traits: ["Proud", "Aggressive", "Loyal", "Macho", "Territorial"],
    stats: [
      { label: "Pride", value: "★★★★★" },
      { label: "Combat", value: "★★★★☆" },
      { label: "Leadership", value: "★★★★☆" },
      { label: "Diplomacy", value: "★☆☆☆☆" },
    ],
  },
  {
    title: "Auntie Poulet",
    role: "Voodoo Priestess",
    description:
      "A mysterious voodoo priestess pulling strings behind the scenes.",
    extendedDescription:
      "Auntie Poulet is a Haitian gang leader who uses voodoo and drugs to manipulate Tommy into doing her bidding. Her mystical influence and cunning make her one of Vice City's most enigmatic figures.",
    image: "/characters/auntie.jpg",
    slug: "auntie-poulet",
    quote: "You will do as I say, Tommy. The spirits have spoken.",
    affiliation: "Haitian Gang",
    status: "Active",
    voiceActor: "Youree Dell Harris",
    traits: [
      "Mysterious",
      "Manipulative",
      "Spiritual",
      "Cunning",
      "Influential",
    ],
    stats: [
      { label: "Mysticism", value: "★★★★★" },
      { label: "Manipulation", value: "★★★★★" },
      { label: "Influence", value: "★★★★☆" },
      { label: "Combat", value: "★★☆☆☆" },
    ],
  },
  {
    title: "Mercedes Cortez",
    role: "Socialite",
    description:
      "The drug lord's daughter seeking freedom from her father's shadow.",
    extendedDescription:
      "Mercedes is Colonel Cortez's rebellious daughter who introduces Tommy to Vice City's elite social circles. Her connections and charm help Tommy establish legitimate fronts for his criminal empire.",
    image: "/characters/mercedes.jpg",
    slug: "mercedes-cortez",
    quote: "Daddy's little girl is all grown up now.",
    affiliation: "Cortez Family",
    status: "Active",
    voiceActor: "Fairuza Balk",
    traits: [
      "Rebellious",
      "Charming",
      "Connected",
      "Independent",
      "Flirtatious",
    ],
    stats: [
      { label: "Social Skills", value: "★★★★★" },
      { label: "Connections", value: "★★★★☆" },
      { label: "Independence", value: "★★★★☆" },
      { label: "Loyalty", value: "★★★☆☆" },
    ],
  },

  // UNDERWORLD & BUSINESS
  {
    title: "Colonel Cortez",
    role: "Arms Dealer",
    description:
      "A powerful cartel leader involved in arms dealing and political chaos.",
    extendedDescription:
      "Colonel Juan García Cortez is a French military officer turned arms dealer. He becomes Tommy's mentor and ally, providing weapons and connections that help establish Tommy's empire in Vice City.",
    image: "/characters/cortez.jpg",
    slug: "colonel-cortez",
    quote: "In this business, trust is everything, my friend.",
    affiliation: "Independent Arms Dealer",
    status: "Active",
    voiceActor: "Robert Davi",
    traits: [
      "Sophisticated",
      "Connected",
      "Strategic",
      "Honorable",
      "Dangerous",
    ],
    stats: [
      { label: "Connections", value: "★★★★★" },
      { label: "Resources", value: "★★★★★" },
      { label: "Honor", value: "★★★★☆" },
      { label: "Combat", value: "★★★★☆" },
    ],
  },
  {
    title: "Phil Cassidy",
    role: "Arms Dealer",
    description:
      "A one-armed gun fanatic with a love for explosives and chaos.",
    extendedDescription:
      "Phil is a drunken ex-military arms dealer who supplies Tommy with weapons and explosives. Despite losing his arm in an explosion, he continues his dangerous trade with reckless enthusiasm.",
    image: "/characters/phil.jpg",
    slug: "phil-cassidy",
    quote: "I love the smell of napalm in the morning!",
    affiliation: "Independent Arms Dealer",
    status: "Active",
    voiceActor: "Gary Busey",
    traits: ["Reckless", "Patriotic", "Alcoholic", "Explosive", "Loyal"],
    stats: [
      { label: "Weapons", value: "★★★★★" },
      { label: "Sanity", value: "★★☆☆☆" },
      { label: "Loyalty", value: "★★★★☆" },
      { label: "Caution", value: "★☆☆☆☆" },
    ],
  },
  {
    title: "Mitch Baker",
    role: "Biker Gang Leader",
    description:
      "Leader of the Biker Gang, living for engines, guns, and loyalty.",
    extendedDescription:
      "Mitch leads the Bikers, a motorcycle gang that values loyalty and brotherhood above all. He tests Tommy's worth before allowing him to use the gang's services for security at his businesses.",
    image: "/characters/mitch.jpg",
    slug: "mitch-baker",
    quote: "You gotta earn respect around here, city boy.",
    affiliation: "The Bikers",
    status: "Active",
    voiceActor: "Lee Majors",
    traits: ["Loyal", "Tough", "Honorable", "Territorial", "Respected"],
    stats: [
      { label: "Loyalty", value: "★★★★★" },
      { label: "Toughness", value: "★★★★★" },
      { label: "Leadership", value: "★★★★☆" },
      { label: "Trust", value: "★★★☆☆" },
    ],
  },

  // ENTERTAINMENT & WEIRDOS
  {
    title: "Love Fist",
    role: "Rock Band",
    description: "A hard rock band constantly surrounded by danger and excess.",
    extendedDescription:
      "Love Fist is a Scottish rock band touring Vice City. Their wild lifestyle attracts constant trouble, and Tommy helps them deal with everything from psycho fans to bomb threats.",
    image: "/characters/lovefist.jpg",
    slug: "love-fist",
    quote: "Sex, drugs, and rock 'n' roll, baby!",
    affiliation: "Independent Musicians",
    status: "Active",
    voiceActor: "Various",
    traits: ["Wild", "Famous", "Reckless", "Talented", "Excessive"],
    stats: [
      { label: "Fame", value: "★★★★★" },
      { label: "Excess", value: "★★★★★" },
      { label: "Talent", value: "★★★★☆" },
      { label: "Responsibility", value: "★☆☆☆☆" },
    ],
  },
  {
    title: "Kent Paul",
    role: "Music Manager",
    description: "A sleazy music manager always chasing fame and fast money.",
    extendedDescription:
      "Kent Paul is a British music manager who manages Love Fist and provides Tommy with valuable information about Vice City's underworld. His connections in the entertainment industry prove useful for Tommy's operations.",
    image: "/characters/kentpaul.jpg",
    slug: "kent-paul",
    quote: "I know everyone who's anyone in this town, mate.",
    affiliation: "Independent Manager",
    status: "Active",
    voiceActor: "Danny Dyer",
    traits: ["Sleazy", "Connected", "Opportunistic", "Informative", "Cowardly"],
    stats: [
      { label: "Connections", value: "★★★★☆" },
      { label: "Information", value: "★★★★☆" },
      { label: "Courage", value: "★★☆☆☆" },
      { label: "Loyalty", value: "★★★☆☆" },
    ],
  },
  {
    title: "DJ Fernando Martinez",
    role: "Radio Personality",
    description: "The smooth-voiced radio DJ narrating Vice City's nightlife.",
    extendedDescription:
      "Fernando Martinez is the sultry-voiced DJ of Emotion 98.3, Vice City's premier love songs station. His passionate on-air persona and romantic dedications make him an iconic voice of the city.",
    image: "/characters/fernando.jpg",
    slug: "dj-fernando",
    quote: "Fernando is here to make love to your ears.",
    affiliation: "Emotion 98.3",
    status: "Active",
    voiceActor: "Frank Chavez",
    traits: ["Romantic", "Passionate", "Smooth", "Charismatic", "Sensual"],
    stats: [
      { label: "Charisma", value: "★★★★★" },
      { label: "Voice", value: "★★★★★" },
      { label: "Romance", value: "★★★★★" },
      { label: "Professionalism", value: "★★★☆☆" },
    ],
  },
];
