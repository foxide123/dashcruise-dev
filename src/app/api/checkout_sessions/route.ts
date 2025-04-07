"use server";

import { NextResponse } from "next/server";
import Stripe from "stripe";

type StripeLocale = "auto" | "en" | "de";

type StripeParams = {
  amount: string;
  currency: string;
  language: StripeLocale;
};

export async function POST(req: Request) {
  const { amount, currency, language } =
    (await req.json()) as StripeParams;

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    return NextResponse.json(
      { error: "Missing Stripe secret key" },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeSecretKey, {
    //eslint-disable-next-line
    apiVersion: "2025-02-24.acacia; custom_checkout_beta=v1" as any,
  });
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      success_url: "https://dashcruisedev.com/en",
      cancel_url: "https://dashcruisedev.com/en",
      allow_promotion_codes: true,
      locale: language,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: currency,
            product_data: { name: "Website Plan" },
            recurring: { interval: "month" },
            unit_amount: Math.round(Number(amount) * 100),
          },
        },
      ],
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    return NextResponse.json(
      { error: "Stripe session creation failed" },
      { status: 500 }
    );
  }
}
