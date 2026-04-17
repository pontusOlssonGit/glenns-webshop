"use client";
import { CartItem, Product } from "@/types/types";
import { useCartStore } from "../store/useCartStore";
import { Trash2 } from "lucide-react";
import Toast from "./Toast";
import useToast from "../hooks/useToast";

export default function CartCard({ product }: { product: Product }) {
  // prettier-ignore
  const { decrementQuantity, deleteProduct, incrementQuantity, cartItems } = useCartStore();
  const cartItem = cartItems.find((c) => c.product.id == product.id);
  const cartItemQuantity = cartItem?.quantity;

  const [showToast, triggerToast] = useToast();

  function handleDecrementQuantity(cartItem: CartItem) {
    if (cartItem.quantity > 1) {
      decrementQuantity(cartItem);
    } else {
      triggerToast();
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
          <div className="flex justify-around gap-2">
            {" "}
            {cartItem && (
              <div className="flex">
                <button
                  className="flex items-center justify-center pb-1 bg-[#d6d6d6] text-[#58585a] hover:bg-[#58585a] hover:text-[#d6d6d6] h-6 w-6 rounded-bl-full rounded-tl-full"
                  onClick={() => handleDecrementQuantity(cartItem)}
                >
                  <span className=" text-xl">-</span>
                </button>
                <div className="box-border border border-[#d6d6d6] h-6 w-9 text-center ">
                  {cartItemQuantity}
                </div>
                <button
                  className="flex items-center justify-center pr-1 pb-1 bg-[#d6d6d6] text-[#58585a] hover:bg-[#58585a] hover:text-[#d6d6d6] h-6 w-6 rounded-br-full rounded-tr-full "
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
        <Toast message={"Ta bort produkter från kundvagn med kryss-knappen"} />
      )}
    </article>
  );
}
