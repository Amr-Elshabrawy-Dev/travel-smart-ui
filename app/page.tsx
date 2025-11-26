"use client";

import HeroSection from "../components/hero/HeroSection";
import ProjectObjectivesSection from "../components/sections/ProjectObjectivesSection";
import AdvantagesSection from "../components/sections/AdvantagesSection";
import PopularDestinationsSection from "../components/sections/PopularDestinationsSection";
import ExclusiveOffersSection from "../components/sections/ExclusiveOffersSection";
import FooterSection from "../components/sections/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 to-white">
      <HeroSection />
      <ProjectObjectivesSection />
      <AdvantagesSection />
      <PopularDestinationsSection />
      <ExclusiveOffersSection />
      <FooterSection />
    </main>
  );
}
