import ProductGrid from "@/components/product-grid";
import { ProductsResponse } from "@/types/types";

export default async function Home() {

  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/products`).then(res => res.json()) as ProductsResponse;
  
  return <ProductGrid products={products.products} />;
}
