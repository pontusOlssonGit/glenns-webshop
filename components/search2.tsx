'use client';

import { useState } from "react";
import type { Product } from "../types/types";

type Props = {
  products: Product[];
};

export default function Search2({ products = [] }: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);

  const searchProducts = (q: string) => {
    const lower = q.toLowerCase();

    const result = products.filter((p) => {
      return (
        p.title.toLowerCase().includes(lower) ||
        p.description.toLowerCase().includes(lower) ||
        (p.brand?.toLowerCase().includes(lower) ?? false) ||
        (p.category?.name?.toLowerCase().includes(lower) ?? false) ||
        p.price.toString().includes(lower)
      );
    });

    setResults(result);
  };

  return (
    <>
      <input type="text" placeholder="Search2..." value={query} onChange={(e) => {
          setQuery(e.target.value);
          searchProducts(e.target.value);
        }}
      />

      <h1>Results: {results.length}</h1>

      {results.map((p) => (
        <div key={p.id}>
          <h2>{p.title}</h2>
          <p>{p.price}</p>
        </div>
      ))}
    </>
  );
}
