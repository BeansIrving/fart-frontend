import TopBar from "@/components/navbar";
import Slider from "@/components/slider";
import WhyFartOverFartcoinSection from "@/views/fart-coin";
import FinalBreathSection from "@/views/footer";
import HeroSection from "@/views/hero-section";
import LoreAndCommunitySection from "@/views/lore-section";
import FartInThisMarketSection from "@/views/market";
import Tokenomics from "@/views/tokenomics";
import WhyFartExistsSection from "@/views/why-fart";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <TopBar />
      <HeroSection />
      <Slider />
      <WhyFartExistsSection />
      <Slider />

      <LoreAndCommunitySection />
      <Slider />

      <WhyFartOverFartcoinSection />
      <Slider />

      <Tokenomics />
      <Slider />

      <FartInThisMarketSection />
      <Slider />

      <FinalBreathSection />
    </main>
  );
}
