import { Product } from "@/types/types";
import { create } from "zustand";

type CartStore = {
  products: Product[];
  addProduct: (product: Product) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  products: [],
  addProduct: (product) => {
    set((state) => ({ products: [...state.products, product] }));
  },
}));
