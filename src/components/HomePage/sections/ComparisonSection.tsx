import CheckIcon from "@/components/icons/CheckIcon";
import XIcon from "@/components/icons/XIcon";


export default function ComparisonSection() {
  return (
    <div>
      {/* Comparison Section Container */}
      <div className="flex justify-center w-full">
        <div className="h-[85vh] w-[70vw] text-black pt-25">
          {/* Build Faster Section */}
          <div className="">
            <h3 className="font-medium text-sm leading-5 my-3.5 tracking-normal text-carrot-500">
              Why Choose Us
            </h3>
            <h1 className="header-custom">Build Faster, Rank Higher</h1>
            <h1 className="header-custom">Stand Out from Crowd</h1>
          </div>

          <p className="font-normal text-base leading-6 my-4">
            We adhere to the highest standards of quality in all our products
            and services. From design and development to manufacturing.
          </p>
          {/* LandingPageDev and WordPress container */}
          <div className="flex justify-between">
            {/* LandingPageDev container */}
            <div className="w-136 h-78 rounded-xl border-1 border-magenta-100 p-6 flex flex-col justify-center">
              <div>
                <h2 className="font-medium text-2xl leading-8 my-6">
                  LandingPageDev
                </h2>
              </div>
              <ul>
                <li className="list-item-custom">
                  <CheckIcon /> Optimized for Google Search Engine
                </li>
                <li className="list-item-custom">
                  <CheckIcon /> Ultrafast Load Times
                </li>
                <li className="list-item-custom">
                  <CheckIcon /> Secure
                </li>
                <li className="list-item-custom">
                  <CheckIcon /> Unique
                </li>
                <li className="list-item-custom">
                  <CheckIcon /> Adaptable to your needs
                </li>
                <li className="list-item-custom">
                  <CheckIcon /> Expert Assistance
                </li>
              </ul>
            </div>
            {/* WordPress container */}
            <div className="w-136 h-78 rounded-xl border-vampire-400 border-1 p-6">
              <div>
                <h2 className="font-medium text-2xl leading-8 my-6">
                  WordPress
                </h2>
              </div>
              <ul>
                <li className="list-item-custom">
                  <XIcon /> Worse SEO
                </li>
                <li className="list-item-custom">
                  <XIcon /> Slow
                </li>
                <li className="list-item-custom">
                  <XIcon /> Security Risks from Plugins
                </li>
                <li className="list-item-custom">
                  <XIcon /> Limited by themes
                </li>
                <li className="list-item-custom">
                  <XIcon /> Common Designs
                </li>
                <li className="list-item-custom">
                  <XIcon /> Poor / No Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
