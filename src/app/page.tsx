import dynamic from "next/dynamic";

import HeroSection from "@/components/HomePage/sections/HeroSection";

export const runtime="edge"

const ComparisonSection = dynamic(
  () => import("@/components/HomePage/sections/ComparisonSection")
);
const HighlightSection = dynamic(
  () => import("@/components/HomePage/sections/HighlightSection")
);
const PricingSection = dynamic(
  () => import("@/components/HomePage/sections/PricingSection")
);

const ContactUsSection = dynamic(() => import('@/components/HomePage/sections/ContactUsSection'));

const QASection = dynamic(() => import('@/components/HomePage/sections/QASection'));
 
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
        lg_screen_width="lg:w-[75vw]"
        default_screen_width="w-[85vw]"
      />
      {/* <PortfolioSection
        lg_screen_width="lg:w-[75vw]"
        default_screen_width="w-[85vw]"
      />*/}
      <QASection
        lg_screen_width="lg:w-[75vw]"
        default_screen_width="w-[85vw]"
      />
      <PricingSection
        lg_screen_width="lg:w-[75vw]"
        default_screen_width="w-[85vw]"
      />
      <ContactUsSection
        lg_screen_width="lg:w-[85vw]"
        default_screen_width="w-[85vw]"
      />

      {/*  <CookieBanner />*/}
    </div>
  );
}
