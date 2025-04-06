import ContactUsForm from "@/components/sections/ContactUs/ContactUsForm";

export const runtime = 'edge';

export default function Contact() {
  const lg_screen_width = "lg:w-[75vw]";
  const default_screen_width = "w-[85vw]";

  return (
    <div className="w-full h-full bg-white flex justify-center items-center">
      <div
        className={`${lg_screen_width} ${default_screen_width} flex flex-col justify-center items-center`}
      >
        <div className="lg:w-fit w-full p-10 mb-24">
          <h1 className="font-normal text-[40px]">Contact Us</h1>
          <h2 className="text-base font-bold tracking-wide mt-8">Hours</h2>
          <h3 className="font-normal text-base tracking-wide text-start mt-8 leading-10">
            Monday - Friday: 10:00am - 7:30pm <br />
            Saturday: 10:00am - 6:00pm <br />
            Sunday: 11:00am - 6:00pm
          </h3>
          <ContactUsForm marginTop="mt-16"/>
        </div>
      </div>
    </div>
  );
}
