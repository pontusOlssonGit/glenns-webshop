import "server-only";

import Stripe from "stripe";

if (process.env.STRIPE_SECRET_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not declared");
}
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
