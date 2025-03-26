import ExclusivePlan from "@/components/HomePage/ExclusivePlan";
import Image from "next/image";

export default function HeroSection({
  lg_screen_width,
  default_screen_width,
}: {
  lg_screen_width: string;
  default_screen_width: string;
}) {
  return (
    <div className="bg-black flex justify-center w-screen">
      <div
        className={`lg:min-h-[75vh] ${lg_screen_width} flex ${default_screen_width}`}
      >
        {/* <div
        className="bg-[url(/hero_background.jpg)] w-full aspect-[16/9] bg-no-repeat bg-center bg-contain opacity-50"
      ></div>*/}
        {/* Main Hero Section */}
        <div className="lg:justify-around lg:top-1/3 lg:flex-row flex flex-col justify-center items-center w-full">
          {/* Launch Your Site */}
          <div className=" text-white">
            <div className="lg:mt-0 mt-5 w-70 h-70 rounded-[10%] overflow-hidden relative mx-auto bg-blue-50 ">
              <Image src="/dashcruise_logo_edited.png" objectFit="contain"
            layout="fill" sizes="280px" alt="logo" priority/>
            </div>
            <div className="lg:text-7xl my-5 text-4xl lg:leading-15 leading-12 tracking-[-2%] font-bold font-sans text-center">
              <h1>
                Launch Your Website With Our{" "}
                <span className="text-carrot-500">Exclusive </span>Offer
              </h1>
            </div>
            <p className=" text-center break-words mb-2">
              We craft custom websites designed to bring your ideas to life and help you grow your business.
              <br />
            </p>
          </div>

          <ExclusivePlan />
        </div>
      </div>
    </div>
  );
}
