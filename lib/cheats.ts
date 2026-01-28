export interface Cheat {
  code: string;
  effect: string;
  category: "Player" | "Vehicles" | "Weapons" | "World" | "Weather";
  description: string;
}

export const cheatCodes: Cheat[] = [
  // Weapons
  {
    code: "THUGSTOOLS",
    effect: "Basic Weapon Set",
    category: "Weapons",
    description:
      "Equips the basic set of weapons including Brass Knuckles, Bat, Molotov, 9mm, Chrome Shotgun, Mac, Rifle, RPG, Sniper Rifle.",
  },
  {
    code: "PROFESSIONALTOOLS",
    effect: "Advanced Weapon Set",
    category: "Weapons",
    description:
      "Equips advanced weapons: Katana, Grenade, .357, Stubby Shotgun, Tec9, M4, Flamethrower, PSG-1.",
  },
  {
    code: "NUTTERTOOLS",
    effect: "Heavy Weapon Set",
    category: "Weapons",
    description:
      "Equips heavy weapons: Chainsaw, Grenade, .357, Spas Shotgun, MP5, M4, Minigun, PSG-1.",
  },
  // Player
  {
    code: "ASPIRINE",
    effect: "Full Health",
    category: "Player",
    description:
      "Restores health to 100%. If used in a vehicle, it repairs the vehicle as well.",
  },
  {
    code: "PRECIOUSPROTECTION",
    effect: "Full Armor",
    category: "Player",
    description: "Provides 100% body armor.",
  },
  {
    code: "LEAVEMEALONE",
    effect: "Decrease Wanted Level",
    category: "Player",
    description: "Removes all wanted stars completely.",
  },
  {
    code: "YOUWONTTAKEMEALIVE",
    effect: "Increase Wanted Level",
    category: "Player",
    description: "Adds 2 stars to your current wanted level.",
  },
  {
    code: "ICANTTAKEITANYMORE",
    effect: "Suicide",
    category: "Player",
    description: "Instantly kills Tommy Vercetti.",
  },
  {
    code: "STILLLIKEDRESSINGUP",
    effect: "Change Skin",
    category: "Player",
    description:
      "Cycles through various character skins including civilians and story characters.",
  },
  // Vehicles
  {
    code: "PANZER",
    effect: "Spawn Rhino Tank",
    category: "Vehicles",
    description: "Spawns the powerful military tank directly in front of you.",
  },
  {
    code: "ROCKANDROLLCAR",
    effect: "Spawn Love Fist Limousine",
    category: "Vehicles",
    description: "Spawns the long rockstar limousine.",
  },
  {
    code: "THELASTRIDE",
    effect: "Spawn Romero's Hearse",
    category: "Vehicles",
    description: "Spawns the funeral hearse.",
  },
  {
    code: "GETTHEREFAST",
    effect: "Spawn Sabre Turbo",
    category: "Vehicles",
    description: "Spawns a high-performance muscle car.",
  },
  {
    code: "RUBBISHCAR",
    effect: "Spawn Trashmaster",
    category: "Vehicles",
    description: "Spawns a slow but heavy garbage truck.",
  },
  {
    code: "TRAVELINSTYLE",
    effect: "Spawn Bloodring Banger",
    category: "Vehicles",
    description: "Spawns the demolition derby car.",
  },
  {
    code: "GETTHEREQUICKLY",
    effect: "Spawn Bloodring Banger #2",
    category: "Vehicles",
    description: "Spawns an alternative version of the derby car.",
  },
  {
    code: "BETTERTHANWALKING",
    effect: "Spawn Caddie",
    category: "Vehicles",
    description: "Spawns a small golf cart.",
  },
  {
    code: "SEAWAYS",
    effect: "Cars Drive on Water",
    category: "Vehicles",
    description: "Vehicles will be able to drive across any water surface.",
  },
  {
    code: "COMEFLYWITHME",
    effect: "Flying Cars",
    category: "Vehicles",
    description: "Vehicles will have low gravity and can fly like planes.",
  },
  {
    code: "BIGBANG",
    effect: "Blow Up All Vehicles",
    category: "Vehicles",
    description: "Destroys every vehicle currently spawned near the player.",
  },
  // World
  {
    code: "ONSPEED",
    effect: "Fast Motion",
    category: "World",
    description: "Increases the overall game speed.",
  },
  {
    code: "BOOOOOORING",
    effect: "Slow Motion",
    category: "World",
    description: "Decreases the overall game speed.",
  },
  {
    code: "LIFEISPASSINGMEBY",
    effect: "Speed Up Time",
    category: "World",
    description: "Makes the game's clock run faster.",
  },
  {
    code: "FIGHTFIGHTFIGHT",
    effect: "Riot Mode",
    category: "World",
    description: "Civilians will start fighting each other.",
  },
  {
    code: "NOBODYLIKESME",
    effect: "Pedestrians Attack You",
    category: "World",
    description: "Every pedestrian will become hostile toward the player.",
  },
  {
    code: "OURGODGIVENRIGHTTOBEARARMS",
    effect: "Pedestrians Have Weapons",
    category: "World",
    description: "Gives all civilians weapons during riots.",
  },
  // Weather
  {
    code: "ALOVELYDAY",
    effect: "Clear Weather",
    category: "Weather",
    description: "Sets the sky to bright and sunny.",
  },
  {
    code: "PLEASANTDAY",
    effect: "Cloudy Weather",
    category: "Weather",
    description: "Sets the sky to lightly cloudy.",
  },
  {
    code: "ABITDRIEG",
    effect: "Very Overcast",
    category: "Weather",
    description: "Sets the weather to heavy clouds.",
  },
  {
    code: "CATSANDDOGS",
    effect: "Rainy Weather",
    category: "Weather",
    description: "Starts a heavy thunderstorm.",
  },
  {
    code: "CANTSEEATHING",
    effect: "Foggy Weather",
    category: "Weather",
    description: "Covers the city in thick fog.",
  },
];
