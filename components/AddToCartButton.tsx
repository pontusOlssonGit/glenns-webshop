"use client";
import { CartItem, Product } from "@/types/types";
import { useCartStore } from "./Store";
import { ShoppingCart } from "lucide-react";
import { ReactNode } from "react";

export default function AddToCartButton({
  product,
  buttonStyle,
  buttonText,
}: {
  product: Product;
  buttonStyle: string;
  buttonText: ReactNode;
}) {
  const addProductToCart = useCartStore((state) => state.addProduct);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const cartItems = useCartStore((state) => state.cartItems);

  function handleOnClick(cartItem: CartItem) {
    const hasProduct = cartItems.some(
      (item) => item.product.id === cartItem.product.id,
    );
    if (hasProduct) {
      incrementQuantity(cartItem);
    } else {
      addProductToCart(cartItem);
    }
  }
  const cartItem: CartItem = { product: product, quantity: 1 };
  return (
    <button
      onClick={() => handleOnClick(cartItem)}
      type="button"
      className={buttonStyle}
      aria-label="Add to Cart"
    >
      <span className="font-semibold">{buttonText}</span>
    </button>
  );
}
