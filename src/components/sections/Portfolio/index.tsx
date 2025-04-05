import Image from "next/image";

export default function PortfolioSection({
  lg_screen_width,
  default_screen_width,
}: {
  lg_screen_width: string;
  default_screen_width: string;
}) {
  return (
    <div className="bg-white caret-transparent flex justify-center w-screen ">
      <div
        className={`lg:py-[150px] pt-[70px] pb-[80px] lg:text-start ${lg_screen_width} ${default_screen_width} text-center py-5`}
      >
        <h1 className="font-medium text-5xl leading-15 mb-6 tracking-tight">
          See Our Work in Action
        </h1>
        {/* Portfolio Container */}
        <div className="lg:flex-row flex flex-col items-center justify-between text-center">
          {/* Highlight 1 */}
          <div className="lg:mt-[58px] mt-[20px] highlight-container-custom">
            <div className="relative overflow-hidden lg:w-[400px] lg:h-[400px] rounded-2xl object-cover w-[200px] h-[200px] mx-auto">
              <Image
                src="https://imagedelivery.net/Ap_RIQMnvK_LYOq1vIFisQ/236846ed-3356-4bb7-6094-a0eb79b59f00/card600x400"
                layout="fill"
                style={{objectFit: "cover"}}
                alt="Portfolio Picture"
              />
            </div>
            <p className="mt-3 font-medium text-2xl leading-8">
              VoyageBlur Travel Blog
            </p>
            {/*<p className="text-carrot-500 font-normal font-sm leading-5">
              voyageblur.com
            </p>*/}
          </div>
          {/* Highlight 2 */}
          <div className="mt-[58px] highlight-container-custom">
            <div className="relative overflow-hidden lg:w-[400px] lg:h-[400px] rounded-2xl object-cover w-[200px] h-[200px] mx-auto">
              <Image
                src="https://imagedelivery.net/Ap_RIQMnvK_LYOq1vIFisQ/236846ed-3356-4bb7-6094-a0eb79b59f00/card600x400"
                layout="fill"
                objectFit="cover"
                alt="Portfolio Picture"
              />
            </div>
            <p className=" mt-3 font-medium text-2xl leading-8">
              Webee Dashboard Panel
            </p>
            {/*<p className="text-carrot-500 font-normal font-sm leading-5">
              voyageblur.com
            </p>*/}
          </div>
          {/* Highlight 3 */}
          <div className="mt-[58px] highlight-container-custom">
            <div className="relative overflow-hidden lg:w-[400px] lg:h-[400px] rounded-2xl object-cover w-[200px] h-[200px] mx-auto">
              <Image
                src="https://imagedelivery.net/Ap_RIQMnvK_LYOq1vIFisQ/236846ed-3356-4bb7-6094-a0eb79b59f00/card600x400"
                layout="fill"
                style={{objectFit: "cover"}}
                alt="Portfolio Picture"
                className="hover:w-[450x]"
              />
            </div>
            <p className=" mt-3 font-medium text-2xl leading-8">
              Rana Solutions
            </p>
            {/*<p className="text-carrot-500 font-normal font-sm leading-5">
              voyageblur.com
            </p>*/}
          </div>
        </div>
        {/*<Testimonials1/>*/}
      </div>
    </div>
  );
}
