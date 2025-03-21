export const runtime = "edge";

import { buffer } from 'micro';
import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

export const config = {
  api: {
    bodyParser: false, // Required by Stripe to verify the raw body
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // eslint-disable-next-line
  apiVersion: "2025-02-24.acacia; custom_checkout_beta=v1" as any,
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const rawBody = (await buffer(req)).toString();
    const sig = req.headers['stripe-signature'] as string;

    const event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);

    console.log('✅ Webhook received:', event.id);

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('💰 Checkout session completed:', session.id);
        // You could trigger backend logic here (e.g., save to DB)
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.status(200).json({ received: true });
  } catch (err) {
    res.status(400).json({ error: err instanceof Error ? err.message : err });
  }
}
