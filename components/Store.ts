import { Product } from "@/types/types";
import { create } from "zustand";

type CounterStore = {
  products: Product[];
  addProduct: (product: Product) => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  products: [],
  addProduct: (product) => {
    set((state) => ({ products: [...state.products, product] }));
  },
}));
