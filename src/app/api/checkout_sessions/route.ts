import { NextResponse } from "next/server";
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

export async function POST(req: Request) {

  try {
    const { amount } = await req.json();

    if (!amount || amount < 1) {
      return NextResponse.json({ error: "Invalid amount" }, {status: 400});
    }
  
    const params: Stripe.Checkout.SessionCreateParams = {
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: CURRENCY,
            product_data: { name: "Website Plan" },
            recurring: {
              interval: 'month',
            },
            unit_amount: formatAmountForStripe(amount, CURRENCY),
          },
        },
      ],
      success_url: `${req.headers.get("origin")}/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}`,
    };
    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(params);
    return NextResponse.json({sessionId: checkoutSession.id}, {status:200})
  } catch (error) {
    console.log(error);
    return NextResponse.json({error: error instanceof Error ? error.message : error}, {status: 500});
  }
}
