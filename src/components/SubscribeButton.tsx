'use client';
import { useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function SubscribeButton(){
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        setLoading(false);

        try{
            const response = await fetch('/api/checkout_sessions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({amount: 49}),
            });

            const { sessionId } = await response.json();
            const stripe = await stripePromise;

            if(stripe){
                stripe.redirectToCheckout({sessionId});
            }
        }catch(error){
            console.error("Error redirecting to Stripe:", error);
        }
        setLoading(false);
    };

    return (
        <button
            onClick={handleCheckout}
            disabled={loading}
            className="flex justify-center items-center bg-carrot-500 rounded-xl py-6 px-4 text-center text-white text-2xl w-full cursor-pointer">
            {loading ? 'Processing...' : 'Subscribe'}
        </button>
    )
}