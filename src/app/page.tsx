import ComparisonSection from "@/components/HomePage/ComparisonSection";
import HeroSection from "@/components/HomePage/HeroSection";
import PortfolioSection from "@/components/HomePage/PortfolioSection";
import PricingTable from "@/components/HomePage/PricingTable";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <ComparisonSection />
      <PortfolioSection />
      <PricingTable />
    </div>
  );
}
