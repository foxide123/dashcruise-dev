"use client";

import ExclusivePlan from "@/components/HomePage/ExclusivePlan";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export default function HeroSection({
  lg_screen_width,
  default_screen_width,
}: {
  lg_screen_width: string;
  default_screen_width: string;
}) {
 // const [hasMounted, setHasMounted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const bgToRender = !isMobile && (
    <div className="absolute inset-0 h-full w-full">
      <Image
        src="https://imagedelivery.net/Ap_RIQMnvK_LYOq1vIFisQ/6e425c1c-6c9b-48eb-c8fa-0a4ba4faf200/section1440x740"
        alt="hero background"
        layout="fill"
        objectFit="contain"
        priority
        decoding="async"
      />
    </div>
  );

  {
    /* bg-[url(https://imagedelivery.net/Ap_RIQMnvK_LYOq1vIFisQ/6e425c1c-6c9b-48eb-c8fa-0a4ba4faf200/section1440x740)] */
  }
  return (
    <div className="caret-transparent relative w-screen bg-black flex justify-center lg:min-h-[75vh]">
      {bgToRender}
      <div
        className={`pb-[48px] ${lg_screen_width} flex ${default_screen_width}`}
      >
        {/* Main Hero Section */}
        <div className="lg:justify-between lg:flex-row flex flex-col justify-center items-center w-full z-10">
          {/* Launch Your Site */}
          <div className="lg:w-[662px] flex flex-col lg:items-start text-white">
            <div className="lg:text-7xl lg:leading-[90px] lg:text-start  my-5 text-4xl leading-12 tracking-[-2%] font-bold font-sans text-center">
              <h1>
                Launch Your Website With Our{" "}
                <span className="text-carrot-500">Exclusive </span>Offer
              </h1>
            </div>
            {/* <p className="lg:text-start text-base leading-6 text-center break-words mb-2">
              We craft custom websites designed to bring your ideas to life and
              help you grow your business.
              <br />
            </p> */}
          </div>

          <ExclusivePlan />
        </div>
      </div>
    </div>
  );
}
