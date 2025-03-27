import dynamic from "next/dynamic";


export const runtime = "edge";

import HeroSection from "@/components/HomePage/sections/HeroSection";

import ComparisonSection from "@/components/HomePage/sections/ComparisonSection";

import HighlightSection from "@/components/HomePage/sections/HighlightSection";

import PricingSection from "@/components/HomePage/sections/PricingSection";

const ContactUsWrapper = dynamic(() => import("@/components/HomePage/sections/ContactUs/ContactUsWrapper"));

const QAWrapper = dynamic(() => import("@/components/HomePage/sections/QA/QAWrapper"));

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
      <QAWrapper
        lg_screen_width="lg:w-[75vw]"
        default_screen_width="w-[85vw]"
      />
      <PricingSection
        lg_screen_width="lg:w-[75vw]"
        default_screen_width="w-[85vw]"
      />
      <ContactUsWrapper
        lg_screen_width="lg:w-[85vw]"
        default_screen_width="w-[85vw]"
      />

      {/*  <CookieBanner />*/}
    </div>
  );
}
