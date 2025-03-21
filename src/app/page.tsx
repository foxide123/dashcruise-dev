import ComparisonSection from "@/components/HomePage/sections/ComparisonSection";
import HeroSection from "@/components/HomePage/sections/HeroSection";
import HighlightSection from "@/components/HomePage/sections/HighlightSection";
import PortfolioSection from "@/components/HomePage/sections/PortfolioSection";
import PricingSection from "@/components/HomePage/sections/PricingSection";
import QASection from "@/components/HomePage/sections/QASection";

export default function Home() {
  return (
    <div>
      <HeroSection
        lg_screen_width="lg:w-[85vw]"
        default_screen_width="w-[85vw]"
      />
      <ComparisonSection
        lg_screen_width="lg:w-[75vw]"
        default_screen_width="w-[85vw]"
      />
      <HighlightSection
        lg_screen_width="lg:w-[85vw]"
        default_screen_width="w-[85vw]"
      />
      <PortfolioSection
        lg_screen_width="lg:w-[75vw]"
        default_screen_width="w-[85vw]"
      />
      <QASection
        lg_screen_width="lg:w-[75vw]"
        default_screen_width="w-[85vw]"
      />
      <PricingSection
        lg_screen_width="lg:w-[85vw]"
        default_screen_width="w-[85vw]"
      />
    </div>
  );
}
