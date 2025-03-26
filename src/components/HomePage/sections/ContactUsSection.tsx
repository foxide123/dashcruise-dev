"use client";
import { handleFormSubmition } from "@/app/actions";
import PopupModal from "@/components/PopupModal";
import { useState } from "react";

type ContactUsProps = {
  lg_screen_width: string;
  default_screen_width: string;
};

export default function ContactUsSection({
  lg_screen_width,
  default_screen_width,
}: ContactUsProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [pending, setPending] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="w-screen flex items-center justify-center bg-amber-200 pb-40">
      <div
        className={`mt-10 ${lg_screen_width} ${default_screen_width} rounded-lg border-2 border-carrot-500 bg-carrot-200`}
      >
        <h1 className="text-3xl font-medium text-center pt-5">Contact Us</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setPending(true);

            const formData = new FormData(e.currentTarget);

            const result = await handleFormSubmition(formData);
            setPending(false);
            if (result?.success) {
              setShowPopup(true);
              setFormValues({ name: "", email: "", message: "" });
              setTimeout(() => setShowPopup(false), 3000);
            } else if (result?.error) {
              console.error("Validation or server error:", result.error);
              // You could also show a toast or inline error here
            }
          }}
          className="flex flex-col p-10"
        >
          <input
            type="text"
            id="nameInput"
            name="name"
            value={formValues.name}
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
            required
            placeholder="Please enter name..."
            className="border-1 p-5 outline-none"
          />
          <input
            type="email"
            id="emailInput"
            name="email"
            required
            value={formValues.email}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
            placeholder="Please enter email..."
            className="border-1 mt-5 p-5 outline-none"
          />
          <textarea
            name="message"
            required
            value={formValues.message}
            onChange={(e) =>
              setFormValues({ ...formValues, message: e.target.value })
            }
            placeholder="Please write the message..."
            className="border-1 mt-5 p-5 h-50 outline-none"
          />
          <button
            type="submit"
            className="cursor-pointer text-2xl rounded-xl bg-carrot-500 mt-5 p-5"
          >
            {pending ? "Sending..." : "Send"}
          </button>
          {showPopup && (
            <PopupModal />
          )}
        </form>
      </div>
    </div>
  );
}
