import ContactUsForm from "./ContactUsForm";

type ContactUsProps = {
  lg_screen_width: string;
  default_screen_width: string;
};

export default function ContactUsSection({
  lg_screen_width,
  default_screen_width,
}: ContactUsProps) {
  return (
    <div className="bg-white caret-transparent w-screen flex justify-center">
      {/* Wrapper with defined width */}
      <div
        className={` lg:justify-between lg:flex-row  flex flex-col  ${lg_screen_width} ${default_screen_width}`}
      >
        {/* Description */}
        <div className="lg:w-[530px] md:text-start text-center">
          <h2 className="text-carrot-500 text-sm leading-5 mb-2">Contact Us</h2>
          <h1 className="text-5xl tracking-tight">
            We&apos;d love to <br />
            connect with you!
          </h1>
          <p className="text-base leading-6 mt-4">
            Please fill out the contact form and we will contact you as soon as
            possible with all of the informations and answers to your questions.
          </p>
        </div>

        <ContactUsForm />
      </div>
    </div>
  );
}
