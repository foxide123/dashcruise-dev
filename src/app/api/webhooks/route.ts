import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // eslint-disable-next-line
  apiVersion: "2025-02-24.acacia; custom_checkout_beta=v1" as any,
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  try {
    const buf = await req.arrayBuffer(); // Works better in App Router vs stream/consumers
    const rawBody = Buffer.from(buf);
    const sig = req.headers.get("stripe-signature")!;

    const event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);

    console.log("✅ Success:", event.id);

    // Handle the event (e.g., checkout.session.completed)
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session;
        console.log("💰 Checkout session completed:", session.id);
        break;
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err) {
    console.error("❌ Webhook error:", err);
    return NextResponse.json({ error: err instanceof Error ? err.message : err }, { status: 400 });
  }
}
