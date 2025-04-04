import PricingPlan from "@/components/sections/Pricing/PricingPlan";
import { PricingPlans } from "@/data/PricingData";

export default function PricingSection({
  lg_screen_width,
  default_screen_width,
}: {
  lg_screen_width: string;
  default_screen_width: string;
}) {
  const pricingComponents = PricingPlans.map((plan, index) => (
    <PricingPlan
      key={index}
      planName={plan.name}
      planPrice={plan.price}
      planDescription={plan.description}
      additionalPagePrice={plan.additionalPagePrice}
      features={plan.features}
      bgColor={plan.bgColor}
      textPrimaryColor={plan.textPrimaryColor}
      textSecondaryColor={plan.textSecondaryColor}
    />
  ));

  return (
    <div id="pricing_section" className="bg-white caret-transparent lg:max-w-screen lg:px-30 max-w-6xl flex flex-col items-center mx-auto py-[150px] px-8">
      <div className="max-w-[964px] px-10 mx-auto text-center">
        <h1 className=" lg:text-5xl text-4xl font-semibold">
          Choose the Plan that&apos;s Perfect for You
        </h1>
        <p className="mt-5 text-xl text-gray-500 font-medium">
          From side hustlers to scaling businesses — find the right tools to
          grow your online presence
        </p>
        <div className="mt-8 w-fit mx-auto flex flex-row items-center justify-between">
          {/*<p className="font-medium text-2xl pr-5 text-carrot-500">Monthly</p>
          <Switch className="cursor-pointer h-[30px] w-[65px]"/>
          <p className="font-medium text-2xl pl-5">Yearly</p>
          */}
        </div>
      </div>

      {/* Available Plans */}
      <div
        className={`pt-14 flex-wrap lg:items-start lg:flex-row lg:justify-around ${lg_screen_width} ${default_screen_width} flex flex-col justify-center items-center`}
      >
        {pricingComponents}
      </div>


      {/* Blogger Plan 
        <div className="lg:w-full p-8 sm:w-96 w-full flex-1 order-2 bg-white shadow-xl rounded-3xl">
           Basic Plan icon, price and summary (above bottom border) 
          <div className="mb-7 pb-5 flex-col items-center border-b border-gray-300">
            <div className="flex flex-row items-center">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
                alt=""
                className="rounded-3xl w-20 h-20"
              />
              <div className="ml-5">
                <span className="block text-2xl font-semibold">📝 Blogger</span>
                <span>
                  <span className="font-medium text-gray-500 text-xl align-top">
                    $&thinsp;
                  </span>
                  <span className="text-3xl font-bold">99 </span>
                </span>
                <span className="text-gray-500 font-medium">/ month</span>
              </div>
            </div>
            <p className="text-center mt-5 mb-2">
              For Content Creators & Writers
            </p>
          </div>
          Basic Plan List of Features 
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex flex-row text-lg mb-2 items-start">
              <img
                className="mt-1"
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3 w-full">
                <span className="text-black font-semibold text-xl">
                  Up to 5 Pages
                </span>
                <p>Home, About, Blog, Contact, etc.</p>
              </span>
            </li>
            <li className="flex text-lg mb-2 items-start">
              <img
                className="mt-1"
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3 w-full">
                <span className="text-black font-semibold text-xl">
                  SEO-Optimized Blog Setup
                </span>
                <p className="">Fast Indexing, Keyword Research</p>
              </span>
            </li>
            <li className="flex text-lg mb-2 items-start">
              <img
                className="mt-1"
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                <span className="text-black font-semibold text-xl">
                  CMS for Easy Updates
                </span>
                <p>Content Management System designed for Your Needs</p>
              </span>
            </li>
            <li className="flex text-lg mb-2 items-start">
              <img
                className="mt-1"
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                <span className="text-black font-semibold text-xl">
                Optimized for Speed
                </span>
                <p>Lightning-Fast Performance</p>
              </span>
            </li>
            <li className="flex text-lg mb-2 items-start">
              <img
                className="mt-1"
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                <span className="text-black font-semibold text-xl">
                  Hosting & Domain & SSL Included
                </span>
                <p>Secure and Reliable Hosting and Domain</p>
              </span>
            </li>
            <li className="flex text-lg mb-2 items-start">
              <img
                className="mt-1"
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                <span className="text-black font-semibold text-xl">
                  Regular Edits & Updates
                </span>
                <p>For Design and Conent Updates</p>
              </span>
            </li>
          </ul>
          <div className="border-gray-300 border-y py-5 mb-5 text-center">
            <h2 className="font-semibold">Need More Pages?</h2>
            <span className="font-medium text-gray-500 text-xl align-top">
              $&thinsp;
            </span>
            <span className="text-3xl font-bold">19 </span>
            <p className="inline-block">per additional page</p>
          </div>
          <div className="mt-auto">
            <a
              href="#/"
              className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
            >
              Choose Plan
              <img
                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                className="ml-2"
              />
            </a>
          </div>
        </div>
        E-Commerce Plan 
        <div className="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3">
          <div className="mb-7 pb-5 flex-col items-center border-b border-gray-300">
            <div className="flex flex-row items-center">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
                alt=""
                className="rounded-3xl w-20 h-20"
              />
              <div className="ml-5">
                <span className="block text-2xl font-semibold">
                  <span className="hidden md:inline-block">🛒</span>Ecommerce
                </span>
                <span>
                  <span className="font-medium text-gray-500 text-xl align-top">
                    $&thinsp;
                  </span>
                  <span className="text-3xl font-bold">149 </span>
                </span>
                <span className="text-gray-500 font-medium">/ month</span>
              </div>
            </div>
            <p className="text-center mt-5 mb-2">
              For Businesses Selling Products And&thinsp;/&thinsp;Or Services
              Online
            </p>
          </div>

          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex  text-lg mb-2 items-start">
              <img
                className="mt-1"
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                <span className="text-black font-semibold text-xl">
                  Up to 10 Pages
                </span>
                <p>Shop, Cart, Checkout, etc.</p>
              </span>
            </li>
            <li className="flex  text-lg mb-2 items-start">
              <img
                className="mt-1"
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                <span className="text-black font-semibold text-xl">
                  Secure Payment Integration
                </span>
                <p>Stripe, Paypal, etc.</p>
              </span>
            </li>
            <li className="flex  text-lg mb-2 items-start">
              <img
                className="mt-1"
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                <span className="text-black font-semibold text-xl">
                  Inventory Management System
                </span>
                <p>Manage Inventory with a Platform Designed to Your Needs</p>
              </span>
            </li>
            <li className="flex  text-lg mb-2 items-start">
              <img
                className="mt-1"
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                <span className="text-black font-semibold text-xl">
                  SEO & Speed Optimization
                </span>
                <p>Fast indexing, Keyword Research</p>
              </span>
            </li>
            <li className="flex  text-lg mb-2 items-start">
              <img
                className="mt-1"
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                <span className="text-black font-semibold text-xl">
                  Marketing Integrations
                </span>
                <p>Facebook Pixel, Google Analytics etc.</p>
              </span>
            </li>
            <li className="flex text-lg mb-2 items-start">
              <img
                className="mt-1"
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                <span className="text-black font-semibold text-xl">
                  Hosting & Domain & SSL Included
                </span>
                <p>Secure and Reliable Hosting and Domain</p>
              </span>
            </li>
            <li className="flex text-lg mb-2 items-start">
              <img
                className="mt-1"
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                <span className="text-black font-semibold text-xl">
                  Technical Support
                </span>
                <p>Support Ensuring Everything Runs Smoothly</p>
              </span>
            </li>
          </ul>
          <div className="border-gray-300 border-y py-5 mb-5 text-center">
            <h2 className="font-semibold">Need More Pages?</h2>
            <span className="font-medium text-gray-500 text-xl align-top">
              $&thinsp;
            </span>
            <span className="text-3xl font-bold">19 </span>
            <p className="inline-block">per additional page</p>
          </div>
          <a
            href="#/"
            className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
          >
            Choose Plan
            <img
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              className="ml-2"
            />
          </a>
        </div>*/}
    </div>
  );
}
