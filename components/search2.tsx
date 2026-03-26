"use client";

import { useState } from "react";
import type { Product } from "../types/types";

type Props = {
  products: Product[];
  onSearch: (results: Product[]) => void;
};

export default function Search2({ products = [], onSearch }: Props) {
  const [query, setQuery] = useState("");

  const searchProducts = (q: string) => {
    const lower = q.toLowerCase();

    const result = products.filter((p) => {
      return (
        p.title.toLowerCase().includes(lower) ||
        p.description.toLowerCase().includes(lower) ||
        (p.brand?.toLowerCase().includes(lower) ?? false) ||
        (p.category?.name?.toLowerCase().includes(lower) ?? false) ||
        (p.rating?.toString().includes(lower) ?? false) ||
        p.price.toString().includes(lower) ||
        (p.reviews?.some(r =>
          r.comment.toLowerCase().includes(lower) ||
          r.reviewerName.toLowerCase().includes(lower) ||
          r.rating.toString().includes(lower)
        ) ?? false)
      );
    });
    
    onSearch(result, q);
  
  };

  return (
  <input className="w-full max-w-md px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Search..." value={query} onChange={(e) => {
        const value = e.target.value;
        setQuery(value);
        searchProducts(value);
      }}/>
  );
}
