"use client";

import { useCartStore } from "@/components/Store";
import {
  amountForStripe,
  calculateTotalPrice,
} from "@/lib/stripe/calculatePrice";
import { createPaymentIntent } from "@/lib/stripe/createPaymentIntent";

import { useEffect, useState } from "react";
import CheckoutForm from "@/components/Checkout";

import CartSideBar from "@/components/CartSideBar";
export default function CheckoutPage() {
  const productsInCart = useCartStore((state) => state.cartItems);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  useEffect(() => {
    if (productsInCart.length > 0) {
      const price = calculateTotalPrice(productsInCart);
      setTotalPrice(price);
      const convertedPrice = amountForStripe(price);

      createPaymentIntent(convertedPrice).then((res) => {
        if (res.clientSecret) setClientSecret(res.clientSecret);
      });
    }
  }, [productsInCart]);

  if (productsInCart.length === 0)
    return <div className="text-center">Din varukorg är tom</div>;
  if (!clientSecret) return <div>Initializing checkout...</div>;
  return (
    <main>
      {/* Added 'gap-8' so the blue shows between the boxes */}
      <div className="flex justify-between bg-white min-h-screen p-8 gap-8">
        {/* Added 'flex-1' and '!' to force the border to stay */}
        <div className="flex-1  p-6">
          <div id="checkout">
            <CheckoutForm clientSecret={clientSecret} amount={totalPrice} />
          </div>
        </div>
        <CartSideBar productsInCart={productsInCart} totalPrice={totalPrice} />
      </div>
    </main>
  );
}
