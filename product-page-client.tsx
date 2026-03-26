"use client";

import { useState } from "react";
import ProductGrid from "@/components/product-grid";
import Search2 from "@/components/search2";
import Filter from "@/components/filter";

export default function ProductsPageClient({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [query, setQuery] = useState("");

  return (
    <>
      <Search2
        products={products}
        onSearch={(results, q) => {
          setQuery(q);
          setFilteredProducts(results);
        }}
      />

      <Filter
        products={products}
        query={query}
        onFilter={setFilteredProducts}
      />

      <ProductGrid products={filteredProducts} />
    </>
  );
}
