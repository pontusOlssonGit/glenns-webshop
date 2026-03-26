import { ProductsResponse } from "@/types/types";
import ProductsPageClient from "@/product-page-client";

export default async function Home() {
  const products = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/products`
  ).then(res => res.json()) as ProductsResponse;

  return <ProductsPageClient products={products.products} />;
}
