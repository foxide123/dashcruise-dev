import ComparisonSection from "@/components/HomePage/sections/ComparisonSection";
import HeroSection from "@/components/HomePage/sections/HeroSection";
import PortfolioSection from "@/components/HomePage/sections/PortfolioSection";
import PricingSection from "@/components/HomePage/sections/PricingSection";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <ComparisonSection />
      <PortfolioSection />
      <PricingSection />
    </div>
  );
}
