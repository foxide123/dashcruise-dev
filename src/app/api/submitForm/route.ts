import { NextRequest } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
     const { email, name, message } = (await req.json()) as SubmitFormApiRequest;

    const { env } = getRequestContext();
    const resendApi = env.RESEND_API_KEY;

    const resend = new Resend(resendApi);
    const { data, error } = await resend.emails.send({
      from: `Acme <${email}>`,
      to: ["contact@dashcruisedev.com"],
      subject: `Name: ${name}, Message: ${message}`,
      react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
