import { CartStore } from "@/types/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cartItems: [],
      addProduct: (cartItem) => {
        set((state) => ({ cartItems: [...state.cartItems, cartItem] }));
      },
      deleteProduct: (product) => {
        set((state) => ({
          cartItems: state.cartItems.filter((c) => c.product.id !== product.id),
        }));
      },
      incrementQuantity: (cartItem) => {
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.product.id === cartItem.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        }));
      },
      decrementQuantity: (cartItem) => {
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.product.id === cartItem.product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          ),
        }));
      },
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) },
  ),
);
