"use client";
import { CartItem, Product } from "@/types/types";
import { useCartStore } from "./Store";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function CartCard({ product }: { product: Product }) {
  // prettier-ignore
  const { decrementQuantity, deleteProduct, incrementQuantity, cartItems } = useCartStore();
  const cartItem = cartItems.find((c) => c.product.id == product.id);
  const cartItemQuantity = cartItem?.quantity;

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 5000);
      return () => clearTimeout(timer); // Cleanup if component unmounts
    }
  }, [showToast]);

  function handleDecrementQuantity(cartItem: CartItem) {
    if (cartItem.quantity > 1) {
      decrementQuantity(cartItem);
    } else {
      setShowToast(true);
    }
  }

  function formatPrice(value: number) {
    return Math.ceil(Number(value)).toLocaleString("sv-SE");
  }

  return (
    <article className="flex justify-between pb-3">
      <div className="flex">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-10 w-10 object-cover"
        />
        <div className="flex flex-col">
          <a
            href={`products/${product.id}`}
            className="font-semibold text-blue-500 hover:text-blue-700 whitespace-nowrap truncate"
          >
            {product.title}
          </a>
          <span className="text-xs text-gray-400 whitespace-nowrap truncate">
            SKU: {product.sku}
          </span>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col text-right">
          <div>{formatPrice(product.price)} kr</div>
          <div className="flex justify-around">
            {" "}
            {cartItem && (
              <div className="flex">
                <button
                  className="flex items-center justify-center pb-1 bg-[#d6d6d6] text-[#58585a] hover:bg-[#58585a] hover:text-[#d6d6d6] h-[24px] w-[24px] rounded-bl-full rounded-tl-full"
                  onClick={() => handleDecrementQuantity(cartItem)}
                >
                  <span className=" text-xl">-</span>
                </button>
                <div className="box-border border border-[#d6d6d6] h-[24px] w-[36px] text-center ">
                  {cartItemQuantity}
                </div>
                <button
                  className="flex items-center justify-center pr-1 pb-1 bg-[#d6d6d6] text-[#58585a] hover:bg-[#58585a] hover:text-[#d6d6d6] h-[24px] w-[24px] rounded-br-full rounded-tr-full "
                  onClick={() => incrementQuantity(cartItem)}
                >
                  <span className="text-xl">+</span>
                </button>
              </div>
            )}
            <button
              onClick={() => deleteProduct(product)}
              type="button"
              className="text-red-600 bg-red-200 p-1 rounded-2xl hover:bg-red-700 hover:text-white"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      {showToast && (
        <div className="fixed inset-0 flex items-center justify-center z-9999 pointer-events-none">
          <div className="bg-gray-900/90 text-white px-6 py-3 rounded-full shadow-2xl animate-in fade-in zoom-in duration-300">
            <p className="text-sm font-medium">
              Ta bort produkter från kundvagn med kryss-knappen
            </p>
          </div>
        </div>
      )}
    </article>
  );
}
