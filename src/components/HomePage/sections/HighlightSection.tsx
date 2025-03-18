export default function HighlightSection() {
  return (
    <div className="lg:px-30 px-10 flex w-screen text-white bg-magenta-500 h-[85vh] items-center justify-center">
      {/* Boost Your Business */}
      <div className="lg:w-2/3 w-1/2 px-10">
        <h2 className="font-medium text-carrot-500 text-sm leading-5 my-3.5">
          Features Highlights
        </h2>
        <div className="lg:w-130 w-80 inline-block">
          <h1 className="font-medium text-5xl leading-15 my-12 tracking-tight">
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
        <img src="/Cloudflare_Logo.png" width="200px" />
      </div>
      {/* Highlight Images */}
      <div className="lg:w-1/3 w-1/2 flex flex-row h-full py-22">
        <div className="mr-8 self-end">
          <div className="highlight-image-custom bg-[url(/coding.jpg)]"></div>
          <div className="mt-6 highlight-image-custom bg-[url(/coding_2.jpg)]"></div>
        </div>
        <div className="">
          <div className="highlight-image-custom bg-[url(/hardware.webp)]"></div>
          <div className="highlight-image-custom bg-[url(/programmer.webp)]"></div>
        </div>
      </div>
    </div>
  );
}
