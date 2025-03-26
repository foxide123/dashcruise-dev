import CheckIcon from "../icons/CheckIcon";
import SubscribeButton from "../SubscribeButton";

type PricingFeatureProp = {
  featureHighlight: string;
  featureDescription: string;
};

export default function PricingPlan({
  planName,
  planPrice,
  planDescription,
  additionalPagePrice,
  features,
  bgColor,
  textPrimaryColor,
  textSecondaryColor
}: {
    planName: string;
    planPrice: string;
    planDescription: string;
    additionalPagePrice: string | null;
    bgColor: string;
    textPrimaryColor: string;
    textSecondaryColor: string;
  features: PricingFeatureProp[];
}) {
  const listItems = features.map((feature, index) => (
    <li key={index} className="flex text-lg mb-2 items-start">
      <CheckIcon color={`text-${textPrimaryColor}`} marginTop="1"/>
      <span className="ml-3">
        <span className={`text-${textPrimaryColor} font-semibold text-xl`}>
          {feature.featureHighlight}
        </span>
        <p className={`text-${textSecondaryColor}`}>{feature.featureDescription}</p>
      </span>
    </li>
  ));

  return (
    <div className={`lg:order-1 lg:mt-0 lg:flex-none xl:w-2/5 lg:h-full sm:w-2/3 flex-1 p-8 order-1 shadow-xl rounded-3xl ${bgColor} text-${textPrimaryColor} mt-5`}>
      {/*Icon +  Price + Description + Bottom Border */}
      <div className={`mb-7 pb-5 flex-col items-center border-b `}>
        {/* Icon + Name + Price */}
        <div className="flex flex-row items-center">
          <img
            src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
            alt=""
            className="rounded-3xl w-20 h-20"
          />
          <div className="ml-5">
            <span className={`block text-2xl font-semibold`}>
              🔥 {planName}
            </span>
            <span>
              <span className="font-medium text-xl align-top">
              €&thinsp;
              </span>
              <span className="text-3xl font-bold">{planPrice}</span>
            </span>
            <span className=" font-medium">&thinsp;/ month</span>
          </div>
        </div>
        {/* Plan Description */}
        <p className={` text-2xl mt-5 mb-2 px-2 text-${textSecondaryColor}`}>
          {planDescription}
        </p>
      </div>

      <ul className="mb-10 font-medium text-xl">{listItems}</ul>
      
      <div className={` ${additionalPagePrice ? "block" : "hidden"} border-${textSecondaryColor} text-${textPrimaryColor} border-y py-5 mb-5 text-center`}>
        <h2 className="font-semibold">Need More Pages?</h2>
        <span className="font-medium text-xl align-top">
        €&thinsp;
        </span>
        <span className="text-3xl font-bold">{additionalPagePrice} / month </span>
        <p className="inline-block">per additional page</p>
      </div>
      <SubscribeButton customAmount={planPrice} />
    </div>
  );
}
