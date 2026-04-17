import { CartItem } from "@/types/types";
import CartCard from "./CartCard";

export default function CartContent({
  productsInCart,
}: {
  productsInCart: CartItem[];
}) {
  return (
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
  );
}
