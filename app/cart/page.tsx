"use client";
import { useCartStore } from "@/store/useCartStore";
import ToCheckOutButton from "@/components/ToCheckoutButton";
import { useHasHydrated } from "@/lib/useHasHydrated";
import CartContent from "@/components/CartContent";
import CartTotal from "@/components/CartTotal";

export default function Cart() {
  const productsInCart = useCartStore((state) => state.cartItems);
  const hasHydrated = useHasHydrated();
  if (!hasHydrated) {
    return (
      <div className="pt-4 px-5 bg-white flex flex-col gap-6 items-center justify-center min-h-[200px]">
        <p className="text-gray-400">Laddar din varukorg...</p>
      </div>
    );
  }
  const totalPrice = productsInCart.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);
  return (
    <div className="pt-4 px-5 bg-white flex flex-col gap-6 ">
      <h1 className="text-2xl mx-2 font-bold border-b pb-4 border-gray-300">
        Varukorg
      </h1>
      {productsInCart.length > 5 && <ToCheckOutButton />}
      <CartContent productsInCart={productsInCart} />

      {productsInCart.length > 0 && <CartTotal totalPrice={totalPrice} />}
      <ToCheckOutButton />
      <div className="border-t w-full border-[#d6d6d6] pb-3"></div>
    </div>
  );
}
