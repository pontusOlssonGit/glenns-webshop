"use client";

import { useState } from "react";
import type { Product } from "../types/types";

type Props = {
  products: Product[];
  query: string;
  onFilter: (results: Product[]) => void;
};

export default function Filter({ products = [], query, onFilter }: Props) {
  const [filters, setFilters] = useState({
    title: true,
    description: false,
    brand: false,
    category: false,
    rating: false,
    price: false,
  });

  const toggle = (key: keyof typeof filters) => {
    const updated = { ...filters, [key]: !filters[key] };
    setFilters(updated);
    applyFilter(query, updated);
  };

  const applyFilter = (q: string, activeFilters = filters) => {
    const lower = q.toLowerCase();

    if (!q) {
      onFilter(products);
      return;
    }

    const result = products.filter((p) => {
      return (
        (activeFilters.title && p.title.toLowerCase().includes(lower)) ||
        (activeFilters.description && p.description.toLowerCase().includes(lower)) ||
        (activeFilters.brand && (p.brand?.toLowerCase().includes(lower) ?? false)) ||
        (activeFilters.category && (p.category?.name?.toLowerCase().includes(lower) ?? false)) ||
        (activeFilters.rating && (p.rating?.toString().includes(lower) ?? false)) ||
        (activeFilters.price && p.price.toString().includes(lower))
      );
    });

    onFilter(result);
  };
  
return (
  <div className="grid grid-cols-3 gap-4 p-4 border rounded-lg w-fit">
    <label className="flex items-center gap-2">
      <input type="checkbox" checked={filters.title} onChange={() => toggle("title")} />
      titel
    </label>

    <label className="flex items-center gap-2">
      <input type="checkbox" checked={filters.description} onChange={() => toggle("description")} />
      beskrivning
    </label>

    <label className="flex items-center gap-2">
      <input type="checkbox" checked={filters.brand} onChange={() => toggle("brand")} />
      märke
    </label>

    <label className="flex items-center gap-2">
      <input type="checkbox" checked={filters.category} onChange={() => toggle("category")} />
      kategori
    </label>

    <label className="flex items-center gap-2">
      <input type="checkbox" checked={filters.rating} onChange={() => toggle("rating")} />
      betyg
    </label>

    <label className="flex items-center gap-2">
      <input type="checkbox" checked={filters.price} onChange={() => toggle("price")} />
      pris
    </label>
  </div>
);
}
