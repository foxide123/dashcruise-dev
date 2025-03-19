import ExclusivePlan from "@/components/HomePage/ExclusivePlan";

export default function HeroSection(){
    return (
      <div
      className="lg:h-[75vh] w-screen flex bg-black relative"
    >
     {/* <div
        className="bg-[url(/hero_background.jpg)] w-full aspect-[16/9] bg-no-repeat bg-center bg-contain opacity-50"
      ></div>*/}
      {/* Main Hero Section */}
      <div className="lg:justify-around lg:top-1/3 lg:flex-row flex flex-col justify-center items-center w-full">
        {/* Launch Your Site */}
        <div className="text-white">
          <div className="lg:text-7xl text-4xl leading-[90px] tracking-[-2%] font-bold font-sans text-center">
            <h1>Launch Your Site</h1>
            <h1>FOR As Little As</h1>
          </div>
          <p className=" text-center break-words">
            Our comprehensive guide to strategies for entrepreneurs and leaders
          <br/>
          offers valuable insights, practical advice.</p>
        </div>
  
        <ExclusivePlan/>
      </div>
    </div>
    )
}