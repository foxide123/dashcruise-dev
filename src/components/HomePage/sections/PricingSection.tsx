export default function PricingSection() {
  return (
    <div className="lg:max-w-screen lg:px-30 max-w-6xl mx-auto pt-10 pb-36 px-8 bg-amber-200">
      <div className="max-w-md mx-auto mb-14 text-center">
        <h1 className="text-4xl font-semibold mb-6 lg:text-5xl">
          <span className="text-black">Flexible</span> Plans
        </h1>
        <p className="text-xl text-gray-500 font-medium">
          Choose a plan that works best for you and your team.
        </p>
      </div>

      <div className="flex flex-col justify-between items-start lg:flex-row lg:items-end">
        {/* Basic Plan */}
        <div className="lg:w-full lg:order-1 p-8 sm:w-96 w-full flex-1 order-2 bg-white shadow-xl rounded-3xl">
          {/* Basic Plan icon, price and summary (above bottom border) */}
          <div className="mb-7 pb-5 flex-col items-center border-b border-gray-300">
            <div className="flex flex-row items-center">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
                alt=""
                className="rounded-3xl w-20 h-20"
              />
              <div className="ml-5">
                <span className="block text-2xl font-semibold">🔥 Basic</span>
                <span>
                  <span className="font-medium text-gray-500 text-xl align-top">
                    $&thinsp;
                  </span>
                  <span className="text-3xl font-bold">79 </span>
                </span>
                <span className="text-gray-500 font-medium">/ month</span>
              </div>
            </div>
            <p className="text-center mt-5 mb-2">
              Perfect for Startups, Freelancers and Anyone Looking for a
              Professional Online Presence
            </p>
          </div>
          {/* Basic Plan List of Features */}
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex flex-row text-lg mb-2 items-start">
              <img
                className="mt-1"
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3 w-full">
                <span className="text-black font-semibold text-xl">
                  1-Page Custom Website
                </span>
                <p>Responsive & Mobile Friendly</p>
              </span>
            </li>
            <li className="flex text-lg mb-2 items-start">
              <img
                className="mt-1"
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3 w-full">
                <span className="text-black font-semibold text-xl">
                  SEO Optimization
                </span>
                <p className="">Google-friendly setup</p>
              </span>
            </li>
            <li className="flex text-lg mb-2 items-start">
              <img
                className="mt-1"
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                <span className="text-black font-semibold text-xl">
                  Unlimited Edits
                </span>
                <p>For design & content updates</p>
              </span>
            </li>
            <li className="flex text-lg mb-2 items-start">
              <img
                className="mt-1"
                src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
              />
              <span className="ml-3">
                <span className="text-black font-semibold text-xl">
                  Fast Delivery
                </span>
                <p>Launch within days</p>
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

        {/* Blogger Plan */}
        <div className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
          {/* Blogger, Icon, Price per Month and Bottom Border */}
          <div className="mb-7 pb-5 flex-col items-center border-b border-gray-300">
            <div className="flex flex-row items-center">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
                alt=""
                className="rounded-3xl w-20 h-20"
              />
              <div className="ml-5">
                <span className="block text-2xl font-semibold">📝 Blogger</span>
                <span>
                  <span className="font-medium text-gray-500 text-xl align-top">
                    $&thinsp;
                  </span>
                  <span className="text-3xl font-bold">129 </span>
                </span>
                <span className="text-gray-500 font-medium">/ month</span>
              </div>
            </div>
            <p className="text-center mt-5 mb-2">
              For Content Creators & Writers
            </p>
          </div>

          <ul className="mb-10 font-medium text-xl">
            <li className="flex text-lg mb-2 items-start">
              <img
                className="mt-1"
                src="https://res.cloudinary.com/williamsondesign/check-white.svg"
              />
              <span className="ml-3">
                <span className="text-white font-semibold text-xl">
                  Up to 5 Pages
                </span>
                <p>Home, About, Blog, Contact, etc.</p>
              </span>
            </li>
            <li className="flex  text-lg mb-2 items-start">
              <img
                className="mt-1"
                src="https://res.cloudinary.com/williamsondesign/check-white.svg"
              />
              <span className="ml-3">
                <span className="text-white font-semibold text-xl">
                  SEO-Optimized Blog Setup
                </span>
                <p>Fast Indexing, Keyword Research</p>
              </span>
            </li>
            <li className="flex  text-lg mb-2 items-start">
              <img
                className="mt-1"
                src="https://res.cloudinary.com/williamsondesign/check-white.svg"
              />
              <span className="ml-3">
                <span className="text-white font-semibold text-xl">
                  CMS for Easy Updates
                </span>
                <p>Content Management System designed for Your Needs</p>
              </span>
            </li>
            <li className="flex  text-lg mb-2 items-start">
              <img
                className="mt-1"
                src="https://res.cloudinary.com/williamsondesign/check-white.svg"
              />
              <span className="ml-3">
                <span className="text-white font-semibold text-xl">
                  Optimized for Speed
                </span>
                <p>Lightning-Fast Performance</p>
              </span>
            </li>
            <li className="flex  text-lg mb-2 items-start">
              <img
                className="mt-1"
                src="https://res.cloudinary.com/williamsondesign/check-white.svg"
              />
              <span className="ml-3">
                <span className="text-white font-semibold text-xl">
                  Hosting & Domain & SSL Included
                </span>
                <p>Content Management System designed for Your Needs</p>
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
            className="flex justify-center items-center bg-indigo-600 rounded-xl py-6 px-4 text-center text-white text-2xl"
          >
            Choose Plan
            <img
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              className="ml-2"
            />
          </a>
        </div>

        {/* E-Commerce Plan */}
        <div className="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3">
          <div className="mb-7 pb-5 flex-col items-center border-b border-gray-300">
            <div className="flex flex-row items-center">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
                alt=""
                className="rounded-3xl w-20 h-20"
              />
              <div className="ml-5">
                <span className="block text-2xl font-semibold"><span className="hidden md:inline-block">🛒</span>Ecommerce</span>
                <span>
                  <span className="font-medium text-gray-500 text-xl align-top">
                    $&thinsp;
                  </span>
                  <span className="text-3xl font-bold">199 </span>
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
        </div>
      </div>
    </div>
  );
}
