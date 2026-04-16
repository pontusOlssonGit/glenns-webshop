"use client";
import CheckoutForm from "@/components/Checkout";
import { useCartStore } from "@/components/Store";
import {
  amountForStripe,
  calculateTotalPrice,
} from "@/lib/stripe/calculatePrice";
import { createPaymentIntent } from "@/lib/stripe/createPaymentIntent";

import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const productsInCart = useCartStore((state) => state.cartItems);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  useEffect(() => {
    if (productsInCart.length > 0) {
      const totalPrice = calculateTotalPrice(productsInCart);
      const convertedPrice = amountForStripe(totalPrice);
      // Call the Server Action
      createPaymentIntent(convertedPrice).then((res) => {
        if (res.clientSecret) setClientSecret(res.clientSecret);
      });
    }
  }, [productsInCart]);

  if (productsInCart.length === 0) return <div>Your cart is empty</div>;
  if (!clientSecret) return <div>Initializing checkout...</div>;

  return (
    <div id="checkout">
      <CheckoutForm clientSecret={clientSecret} />
    </div>
  );
}
