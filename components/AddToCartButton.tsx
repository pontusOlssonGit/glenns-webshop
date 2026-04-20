"use client";
import { CartItem, Product } from "@/types/types";
import { useCartStore } from "../store/useCartStore";
import { ReactNode, useState } from "react";
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
  const [toastMessage, setToastMessage] = useState("");
  const addProductToCart = useCartStore((state) => state.addProduct);
  const cartItems = useCartStore((state) => state.cartItems);

  const addedToCartButtonStyle =
    "bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_100%] text-white duration-500";

  const cartItem: CartItem = { product: product, quantity: 1 };
  const hasProduct = cartItems.some(
    (item) => item.product.id === cartItem.product.id,
  );
  function handleOnClick(cartItem: CartItem) {
    if (hasProduct) {
      setToastMessage("Du har redan denna vara i varukorgen");
    } else {
      addProductToCart(cartItem);
      setToastMessage("Du har lagt till en produkt i varukorgen");
    }
    triggerToast();
  }
  return (
    <div>
      <button
        onClick={() => handleOnClick(cartItem)}
        type="button"
        className={
          hasProduct ? `${buttonStyle} ${addedToCartButtonStyle}` : buttonStyle
        }
        aria-label="Add to Cart"
      >
        <span className="font-semibold">{buttonText}</span>
      </button>
      {showToast && <Toast message={toastMessage} />}
    </div>
  );
}
