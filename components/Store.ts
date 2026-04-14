import { CartItem, Product } from "@/types/types";
import { create } from "zustand";

type CartStore = {
  cartItems: CartItem[];
  addProduct: (cartItem: CartItem) => void;
  deleteProduct: (product: Product) => void;
  incrementQuantity: (cartItem: CartItem) => void;
  decrementQuantity: (cartItem: CartItem) => void;
};

export const useCartStore = create<CartStore>((set) => ({
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
}));
