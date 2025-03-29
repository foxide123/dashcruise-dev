import Image from "next/image";

export default function HighlightSection({
  lg_screen_width,
  default_screen_width,
}: {
  lg_screen_width: string;
  default_screen_width: string;
}) {
  return (
    <div className="xl:text-start lg:text-center text-center flex flex-row justify-center bg-magenta-500  w-screen">
      <div
        className={`lg:justify-between ${lg_screen_width} lg:py-0 lg:flex-row ${default_screen_width} flex flex-col py-10 text-white items-center justify-center`}
      >
        {/* Boost Your Business */}
        <div className="flex-col lg:px-0 lg:w-2/3 px-10">
          <div className="lg:w-[520px]">
            <h1 className="font-medium text-5xl leading-15 my-12 tracking-tight text-center">
              Boost Your Business with <br />
              Unmatched Speed and <br />
              Security
            </h1>
            <p className="font-normal text-base leading-6 my-4">
              Enjoy peace of mind with 24/7 security and uninterrupted service,
              ensuring your website is always trusted and reliable. With the DoS
              protection, SSL encryption, intelligent caching you can sleep safe
              knowing your website will be fast and secure. Upgrade your web
              presence with us - where speed meets security!
            </p>
          </div>
            <Image
              src="https://imagedelivery.net/Ap_RIQMnvK_LYOq1vIFisQ/aac4f90f-a064-4352-4cc8-9aee41df7100/thumbnail300x300"
              sizes="300px"
              width={300}
              height={200}
              alt="Cloudflare Logo"
              className="lg:mx-0 lg:mb-0 mb-10 mx-auto"
            />
        </div>
        {/* Highlight Images */}
        <div className="xl:flex xl:flex-row mlg:h-full lg:py-22 hidden">
          <div className="mr-8 self-end">
            <div className="highlight-image-custom overflow-hidden relative">
            <Image
                src="https://imagedelivery.net/Ap_RIQMnvK_LYOq1vIFisQ/53a11d33-0aa1-4d97-c26a-3cd1e2756800/thumbnail300x300"
                objectFit="cover"
                layout="fill"
                sizes="200px"
                alt="Highlight"
              />
            </div>
            <div className="mt-6 highlight-image-custom overflow-hidden relative">
              <Image
                src="https://imagedelivery.net/Ap_RIQMnvK_LYOq1vIFisQ/d83d4048-3ffa-4b17-8ec8-ac1b1812e600/thumbnail300x300"
                objectFit="cover"
                layout="fill"
                sizes="200px"
                alt="Highlight"
              />
            </div>
          </div>
          <div className="self-start">
            <div className="highlight-image-custom relative overflow-hidden">
              <Image
                src="https://imagedelivery.net/Ap_RIQMnvK_LYOq1vIFisQ/ebd7e64a-bc89-4c28-7630-c739848a6200/thumbnail300x300"
                objectFit="cover"
                layout="fill"
                sizes="200px"
                alt="Highlight"
              />
            </div>
            <div className="highlight-image-custom relative overflow-hidden">
              <Image
                src="https://imagedelivery.net/Ap_RIQMnvK_LYOq1vIFisQ/e15d004b-f8ce-4e07-c91a-a0d3e7706600/thumbnail300x300"
                objectFit="cover"
                layout="fill"
                sizes="200px"
                alt="Highlight"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
