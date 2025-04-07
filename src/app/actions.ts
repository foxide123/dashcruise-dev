"use server";

import { z } from "zod";
import { sendContactEmail } from "@/utils/sendContactEmail";

const schema = z.object({
  email: z.string({
    invalid_type_error: "Invalid Email",
  }),
});

export async function handleFormSubmition(formData: FormData) {
  const name = formData.get("name") as string;
  const message = formData.get("message") as string;
  const email = formData.get("email") as string;

  const validated = schema.safeParse({ email });
  if (!validated.success) {
    return { success: false, error: "Invalid email" };
  }

  try {
    await sendContactEmail({ email, name, message });
    return { success: true}
  } catch (error) {
    console.error("Submission error:", error);
    return {error: "Server error", details: error};
  }
}
