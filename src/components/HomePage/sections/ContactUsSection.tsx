"use client";
import { handleFormSubmition } from "@/app/actions";

type ContactUsProps = {
  lg_screen_width: string;
  default_screen_width: string;
};

export default function ContactUsSection({
  lg_screen_width,
  default_screen_width,
}: ContactUsProps) {
  return (
    <div className="w-screen flex items-center justify-center bg-amber-200 pb-40">
      <div
        className={`mt-10 ${lg_screen_width} ${default_screen_width} rounded-lg border-2 border-carrot-500 bg-carrot-200`}
      >
        <h1 className="text-3xl font-medium text-center pt-5">Contact Us</h1>
        <form action={handleFormSubmition} className="flex flex-col p-10">
          <input
            type="text"
            id="nameInput"
            name="name"
            required
            placeholder="Please enter name..."
            className="border-1 p-5 outline-none"
          />
          <input
            type="email"
            id="emailInput"
            name="email"
            required
            placeholder="Please enter email..."
            className="border-1 mt-5 p-5 outline-none"
          />
          <textarea
            name="message"
            required
            placeholder="Please write the message..."
            className="border-1 mt-5 p-5 h-50 outline-none"
          />
          <button type="submit" className="cursor-pointer text-2xl rounded-xl bg-carrot-500 mt-5 p-5">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
