import { NextResponse } from "next/server";
import { CheckoutApiRequest } from "@/types/api_types";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { amount } = (await req.json()) as CheckoutApiRequest;

    const res = await fetch("https://stripe-wrangler.kuba-kolando-02-01.workers.dev", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });
  
    if (!res.ok) {
      const error = await res.json();
      return NextResponse.json({ error }, { status: res.status });
    }
  
    const { sessionId } = await res.json();   
    return NextResponse.json({ sessionId: sessionId });
  } catch (error) {
    return NextResponse.json({
      error
    });
  }
}
