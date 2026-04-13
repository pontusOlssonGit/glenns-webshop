"use client";
import { CartItem, Product } from "@/types/types";
import { useCartStore } from "@/components/Store";
import CartCard from "@/components/CartCard";

export default function Cart() {
  const productsInCart = useCartStore((state) => state.cartItems);
  const totalPrice = productsInCart.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);
  return (
    <div className="pt-4 px-5 bg-white">
      <h1 className="text-2xl mx-2 font-bold border-b-2 pb-4">Varukorg</h1>
      {productsInCart.length > 0 ? (
        productsInCart.map((cartItem: CartItem) => (
          <CartCard key={cartItem.product.id} product={cartItem.product} />
        ))
      ) : (
        <article>
          <span className="text-center py-10 text-gray-500 ">
            Your cart is empty.
          </span>
        </article>
      )}

      {productsInCart.length > 0 && (
        <div className=" p-4 px-80 bg-gray-50 flex justify-between items-center ">
          <span className="font-bold">Summa</span>
          <span>{Math.ceil(totalPrice)}</span>
        </div>
      )}
    </div>
  );
}
