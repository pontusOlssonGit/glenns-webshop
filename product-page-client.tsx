"use client";

import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import ProductGrid from "@/components/product-grid";
import Search2 from "@/components/search2";
import Filter from "@/components/filter";
import { Product } from "./types/types";

export default function ProductsPageClient({ products }: { products: Product[] }) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_KEY!);

      const { data, error } = await supabase
        .from("products").select("*").limit(100);

      console.log("DATA:", data);
      console.log("ERROR:", error);

      if (!error && data) {
        setFilteredProducts(data);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Search2
        products={products}
        onSearch={(results) => {
          setFilteredProducts(results);
        }}
      />

      <Filter products={products} query={query} onFilter={setFilteredProducts}
      />

      <ProductGrid products={filteredProducts} />
    </>
  );
}
