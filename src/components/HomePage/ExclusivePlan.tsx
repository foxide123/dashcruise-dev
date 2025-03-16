import CheckIcon, { CheckIconSize } from "../icons/CheckIcon";

export default function ExclusivePlan() {
  return (
    <div className="w-136 h-102 bg-blur-500/90 backdrop-blur-md p-6 rounded-[1.25rem] flex items-center justify-center text-white border-[1px] border-carrot-600">
      <div>
        <h1 className="text-2xl font-medium leading-8 space-y-6">Exclusive Plan</h1>
        <h2 className="text-base font-normal leading-6 space-y-4">
          Access to the ful suite of advanced functionalities
        </h2>
        <h2 className="text-5xl font-medium leading-15 space-y-12 tracking-tight my-6">
          $49.99{" "}
          <span className="text-2xl space-y-4 font-normal">/&thinsp;month</span>
        </h2>
        <ul className="text-base font-medium leading-6 space-y-4">
          <li>
            <CheckIcon size={CheckIconSize.small} />
            Boost Your Brand with a Custom Site (1-2 Pages)
          </li>
          <li>
            <CheckIcon />
            Mobile and Desktop Version
          </li>
          <li>
            <CheckIcon />
            Search Engine Optimization (SEO)
          </li>
        </ul>
        <button className="bg-carrot-500 ro rounded-xl py-4 px-5 w-full text-center mt-5">
          Book Now
        </button>
      </div>
    </div>
  );
}
