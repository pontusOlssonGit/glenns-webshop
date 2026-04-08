"use client";
import { CartItem, Product } from "@/types/types";
import { useCartStore } from "./Store";

export default function AddToCartButton({ product }: { product: Product }) {
  const addProductToCart = useCartStore((state) => state.addProduct);
  const cartItem: CartItem = { product: product, quantity: 1 };
  return (
    <button
      onClick={() => addProductToCart(cartItem)}
      type="button"
      className="px-6 py-3 w-full rounded-full bg-[#3338ff] text-white mt-6 hover:bg-[#1e21ff] transition-colors"
    >
      <span className="font-semibold">Lägg i varukorg</span>
    </button>
  );
}
