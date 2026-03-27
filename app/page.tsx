import ProductGrid from "@/components/product-grid";
import Search2 from "@/components/search2";
import { ProductsResponse } from "@/types/types";

export default async function Home() {

const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/products`).then(res => res.json()) as ProductsResponse;
  
  return (
    <>
      <Search2 products={products.products} />
        <ProductGrid products={products.products} />
   
    </>
  );
}
