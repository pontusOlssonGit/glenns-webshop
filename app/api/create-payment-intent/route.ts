import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

import { stripe } from "../../../lib/stripe/stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const headerList = await headers();
  const signature = headerList.get("stripe-signature");
  if (!signature) {
    return NextResponse.json(
      { message: "Missing stripe-signature header" },
      { status: 400 },
    );
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err) {
    if (err) console.log(err);
    console.log(`Error message:`, err);
    return NextResponse.json(
      { message: `Webhook Error: ${err}` },
      { status: 400 },
    );
  }

  const permittedEvents = ["payment_intent.succeeded"];

  if (permittedEvents.includes(event.type)) {
    let data;

    try {
      switch (event.type) {
        case "payment_intent.succeeded":
          data = event.data.object;
          console.log(`Payment status: ${data.status}`);
          break;
        default:
          throw new Error(`Unhandled event: ${event.type}`);
      }
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { message: "Webhook handler failed" },
        { status: 500 },
      );
    }
  }
  // Return a response to acknowledge receipt of the event.
  return NextResponse.json({ message: "Received" }, { status: 200 });
}
