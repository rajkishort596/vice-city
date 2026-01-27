import GtaCardsSection from "@/components/gta/GtaCardSection";
import Hero from "@/components/Hero";
import { LoadingScreen } from "@/components/LoadingScreen";
import RetroGrid from "@/components/RetroGrid";
import ViceCityManifesto from "@/components/ViceCityManifesto";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-vice-dark text-white selection:bg-vice-pink selection:text-white">
      <RetroGrid />
      <div className="fixed inset-0 crt-overlay z-50 pointer-events-none opacity-40 mix-blend-overlay" />
      <div className="fixed inset-0 z-50 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      <Hero />
      <LoadingScreen />
      <ViceCityManifesto />
      <GtaCardsSection />
    </main>
  );
}
