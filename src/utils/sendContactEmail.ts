import { Resend } from "resend";

export async function sendContactEmail({
  email,
  name,
  message,
}: {
  email: string;
  name: string;
  message: string;
}) {
  const resendApi = process.env.RESEND_API_KEY;

  if (!resendApi) {
    throw new Error("Missing RESEND_API_KEY");
  }

  const resend = new Resend(resendApi);

  const { error, data } = await resend.emails.send({
    from: "Acme <contact@dashcruisedev.com>",
    to: ["contact@dashcruisedev.com"],
    replyTo: email,
    subject: `New message from ${name}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
  });

  if (error) {
    console.error("Email send error:", error);
    throw new Error("Failed to send email.");
  }

  return data;
}
