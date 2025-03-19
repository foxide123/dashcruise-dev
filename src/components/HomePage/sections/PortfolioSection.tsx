export default function PortfolioSection() {
  return (
    <div className="lg:text-start lg:px-20 lg:py-10 lg:h-[75vh] text-center w-scren px-10 py-5">
      <h2 className="mt-5 text-carrot-500 font-medium text-sm leading-5 my-3.5">Portfolio</h2>
      <h1 className="font-medium text-5xl leading-15 my-6 tracking-tight">See Our Work in Action</h1>
      {/* Highlights Container */}
      <div className="lg:flex-row lg:py-0 flex flex-col items-center justify-between h-full text-center py-10">
        {/* Highlight 1 */}
        <div className="lg:mt-0 highlight-container-custom">
          <img src="/programmer.webp" className="lg:w-[400px] lg:h-[400px] rounded-2xl object-cover w-[200px] h-[200px] mx-auto"/>
          <p className="mt-3 font-medium text-2xl leading-8">VoyageBlur Travel Blog</p>
          <p className="text-carrot-500 font-normal font-sm leading-5">voyageblur.com</p>
        </div>
         {/* Highlight 2 */}
        <div className="highlight-container-custom">
          <img src="/programmer.webp" className="lg:w-[400px] lg:h-[400px] rounded-2xl object-cover w-[200px] h-[200px] mx-auto"/>
          <p className=" mt-3 font-medium text-2xl leading-8">VoyageBlur Travel Blog</p>
          <p className="text-carrot-500 font-normal font-sm leading-5">voyageblur.com</p>
        </div>
         {/* Highlight 3 */}
        <div className="highlight-container-custom">
          <img src="/programmer.webp" className="lg:w-[400px] lg:h-[400px] rounded-2xl object-cover w-[200px] h-[200px] mx-auto"/>
          <p className=" mt-3 font-medium text-2xl leading-8">VoyageBlur Travel Blog</p>
          <p className="text-carrot-500 font-normal font-sm leading-5">voyageblur.com</p>
        </div>
      </div>
    </div>
  );
}
