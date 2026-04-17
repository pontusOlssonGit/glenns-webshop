// app/actions/stripe.ts
"use server";
import { stripe } from "@/lib/stripe/stripe";

export async function createPaymentIntent(amount: number) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Amount in cents/öre
      currency: "sek",
      automatic_payment_methods: { enabled: true },
    });
    return { clientSecret: paymentIntent.client_secret };
  } catch (error) {
    console.error(error);
    return { error: "Failed to create payment intent" };
  }
}
