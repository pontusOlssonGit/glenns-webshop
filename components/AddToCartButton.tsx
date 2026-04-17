"use client";
import { CartItem, Product } from "@/types/types";
import { useCartStore } from "../store/useCartStore";
import { ReactNode } from "react";
import Toast from "./Toast";
import useToast from "../hooks/useToast";

export default function AddToCartButton({
  product,
  buttonStyle,
  buttonText,
}: {
  product: Product;
  buttonStyle: string;
  buttonText: ReactNode;
}) {
  const [showToast, triggerToast] = useToast();
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
    triggerToast();
  }
  const cartItem: CartItem = { product: product, quantity: 1 };
  return (
    <div>
      <button
        onClick={() => handleOnClick(cartItem)}
        type="button"
        className={buttonStyle}
        aria-label="Add to Cart"
      >
        <span className="font-semibold">{buttonText}</span>
      </button>
      {showToast && (
        <Toast message={"Du har lagt till en produkt i varukorgen"} />
      )}
    </div>
  );
}
