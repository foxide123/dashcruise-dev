export const runtime = "edge";

import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY! as string, {
  // eslint-disable-next-line
  apiVersion: "2025-02-24.acacia; custom_checkout_beta=v1" as any,
});

const CURRENCY = "usd";

const formatAmountForStripe = (amount: number, currency: string) => {
  console.log(currency);
  return Math.round(amount * 100);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const { amount } = req.body;

    if (!amount || amount < 1) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    const origin =
      process.env.NEXT_PUBLIC_SITE_URL || "https://dashcruisedev.com";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: CURRENCY,
            product_data: { name: "Website Plan" },
            recurring: {
              interval: "month",
            },
            unit_amount: formatAmountForStripe(amount, CURRENCY),
          },
        },
      ],
      success_url: `${origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}`,
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : error });
  }
}
