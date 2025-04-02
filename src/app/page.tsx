import HeroSection from "@/components/HomePage/sections/HeroSection";

import ComparisonSection from "@/components/HomePage/sections/ComparisonSection";

import HighlightSection from "@/components/HomePage/sections/HighlightSection";

import PricingSection from "@/components/HomePage/sections/Pricing/PricingSection";

import ClientOnly from "@/components/ClientOnly";

import QAWrapper from "@/components/HomePage/sections/QA/QAWrapper";
import ContactUsWrapper from "@/components/HomePage/sections/ContactUs/ContactUsWrapper";
import PortfolioSection from "@/components/HomePage/sections/PortfolioSection";
import MeetingScheduleSection from "@/components/HomePage/sections/MeetingSchedule/MeetingScheduleSection";

export default function Home() {
  const lg_screen_width = "lg:w-[75vw]";
  const default_screen_width = "w-[85vw]";
  return (
    <div className="w-full">
      <HeroSection
        lg_screen_width={lg_screen_width}
        default_screen_width={default_screen_width}
      />
      <ComparisonSection
        lg_screen_width={lg_screen_width}
        default_screen_width={default_screen_width}
      />
      <HighlightSection
        lg_screen_width={lg_screen_width}
        default_screen_width={default_screen_width}
      />

      <PortfolioSection
        lg_screen_width="lg:w-[75vw]"
        default_screen_width="w-[85vw]"
      />

      <ClientOnly>
        <ContactUsWrapper
          lg_screen_width={lg_screen_width}
          default_screen_width={default_screen_width}
        />
      </ClientOnly>
      <PricingSection
        lg_screen_width={lg_screen_width}
        default_screen_width={default_screen_width}
      />
      <MeetingScheduleSection
        lg_screen_width={lg_screen_width}
        default_screen_width={default_screen_width}
      />
      <ClientOnly>
        <QAWrapper
          lg_screen_width={lg_screen_width}
          default_screen_width={default_screen_width}
        />
      </ClientOnly>
      {/*  <CookieBanner />*/}
    </div>
  );
}
