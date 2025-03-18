export default function PortfolioSection() {
  return (
    <div className="w-full h-[85vh]">
      <h1>Portfolio</h1>
      <h2>See Our Work in Action</h2>
      <div className="flex items-center justify-center">
        <div className="highlight-container-custom">
          <img src="/programmer.webp" className="rounded-2xl object-cover w-[200px] h-[200px]"/>
          <p>Travel Blog</p>
          <p>VoyageBlur</p>
        </div>
        <div className="highlight-container-custom">
          <p>Travel Blog</p>
          <p>VoyageBlur</p>
          <img src="/programmer.webp" className="rounded-2xl object-cover w-[200px] h-[200px]"/>
        </div>
        <div className="highlight-container-custom">
          <img src="/programmer.webp" className="rounded-2xl object-cover w-[200px] h-[200px]"/>
          <p>Travel Blog</p>
          <p>VoyageBlur</p>
        </div>
      </div>
    </div>
  );
}
