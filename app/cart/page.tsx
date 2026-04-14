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
    <div className="pt-4 px-5 bg-white flex flex-col gap-6 ">
      <h1 className="text-2xl mx-2 font-bold border-b-2 pb-4 border-black">
        Varukorg
      </h1>

      <div className="divide-y divide-[#d6d6d6]">
        {productsInCart.length > 0 ? (
          productsInCart.map((cartItem: CartItem) => (
            <div key={cartItem.product.id}>
              <CartCard key={cartItem.product.id} product={cartItem.product} />
            </div>
          ))
        ) : (
          <article>
            <span className="text-center py-10 text-gray-500 justify-center flex">
              Din varukorg är tom
            </span>
          </article>
        )}
      </div>

      {productsInCart.length > 0 && (
        <div className=" p-2  flex justify-between items-center bg-[#f6f6f6]">
          <span className="font-bold">Summa:</span>
          <span>{Math.ceil(totalPrice)} kr</span>
        </div>
      )}
    </div>
  );
}
