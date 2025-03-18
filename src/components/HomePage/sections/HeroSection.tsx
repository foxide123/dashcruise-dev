import ExclusivePlan from "@/components/HomePage/ExclusivePlan";

export default function HeroSection(){
    return (
      <div
      className="w-screen h-[75vh] flex items-center justify-center bg-black relative"
    >
      <div
        className="bg-[url(/hero_background.jpg)] w-full aspect-[16/9] bg-no-repeat bg-center bg-contain opacity-50"
      ></div>
      {/* Main Hero Section */}
      <div className="w-full h-102 absolute lg:top-1/3 flex lg:justify-around">
        {/* Launch Your Site */}
        <div className="w-141">
          <div
            className="text-white text-7xl leading-[90px] tracking-[-2%] font-bold font-sans text-center"
          >
            <h1>Launch Your Site</h1>
            <h1>FOR As Little As</h1>
          </div>
          <p>
            Our comprehensive guide to strategies for entrepreneurs and leaders
          </p>
          <p>offers valuable insights, practical advice.</p>
          <button>Get Started</button>
        </div>
  
        <ExclusivePlan/>
      </div>
    </div>
    )
}