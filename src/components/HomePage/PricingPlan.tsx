import CheckIcon from "../icons/CheckIcon";
import SubscribeButton from "../SubscribeButton";
import Image from "next/image";

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
  textSecondaryColor,
}: {
  planName: string;
  planPrice: string;
  planDescription: string[];
  additionalPagePrice: string | null;
  bgColor: string;
  textPrimaryColor: string;
  textSecondaryColor: string;
  features: PricingFeatureProp[];
}) {
  const listItems = features.map((feature, index) => (
    <li key={index} className="flex text-lg mb-2 items-start">
      <CheckIcon color={`text-${textPrimaryColor}`} marginTop="1" />
      <span className="ml-3">
        <span className={`text-${textPrimaryColor} font-semibold text-xl`}>
          {feature.featureHighlight}
        </span>
        <span className={`text-${textPrimaryColor}`}>
          {feature.featureDescription}
        </span>
      </span>
    </li>
  ));

  const formattedPlanDescription = planDescription.map((line, index) => (
    <p
      key={index}
      className={`text-2xl mt-5 mb-2 px-2 text-${textPrimaryColor} ${index === 0 ? "mb-[-10px]" : ""}`}
    >
      {line}
    </p>
  ));

  return (
    <div
      className={`relative lg:order-1 lg:mt-0 lg:flex-none xl:w-2/5 lg:h-full sm:w-2/3 flex-1 p-8 order-1 shadow-xl rounded-3xl ${bgColor} text-${textPrimaryColor} mt-5`}
    >
      {/*Icon +  Price + Description + Bottom Border */}
      <div className={`mb-7 pb-5 flex-col items-center border-b `}>
        {/* Icon + Name + Price */}
        <div className="flex flex-row items-center justify-center">
          <div className="overflow-hidden absolute w-20 h-20 left-6 top-6">
            <Image
              src="https://imagedelivery.net/Ap_RIQMnvK_LYOq1vIFisQ/8ecc571e-8203-479c-f4e9-807c9571a100/thumbnail300x300"
              objectFit="contain"
              layout="fill"
              sizes="280px"
              alt="logo"
              className="rounded-3xl "
            />
          </div>
          <div className="w-full ml-5 border-2 border-green-500 mx-auto flex flex-col items-center">
            <span
              className={`block mx-auto text-2xl font-semibold ${textSecondaryColor}`}
            >
              {planName}
            </span>
            <div>
              {" "}
              <span>
                <span className="font-medium text-xl align-top">€&thinsp;</span>
                <span className="text-3xl font-bold">{planPrice}</span>
              </span>
              <span className=" font-medium">&thinsp;/ month</span>
            </div>
          </div>
        </div>
        {/* Plan Description */}
        {formattedPlanDescription}
      </div>

      <ul className="mb-10 font-medium text-xl">{listItems}</ul>

      <div
        className={` ${additionalPagePrice ? "block" : "hidden"} border-${textPrimaryColor} text-${textPrimaryColor} border-y py-5 mb-5 text-center`}
      >
        <h2 className="font-semibold">Need More Pages?</h2>
        <span className="font-medium text-xl align-top">€&thinsp;</span>
        <span className="text-3xl font-bold">
          {additionalPagePrice} / month{" "}
        </span>
        <p className="inline-block">per additional page</p>
      </div>
      <SubscribeButton customAmount={planPrice} />
    </div>
  );
}
