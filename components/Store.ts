import { Product } from "@/types/types";
import { create } from "zustand";

type CartStore = {
  products: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (product: Product) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  products: [],
  addProduct: (product) => {
    set((state) => ({ products: [...state.products, product] }));
  },
  deleteProduct: (product) => {
    set((state) => ({
      products: state.products.filter((p) => p.id !== product.id),
    }));
  },
}));
