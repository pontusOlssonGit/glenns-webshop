import Search2 from "@/components/search2";
import { ProductsResponse } from "@/types/types";

export default async function Home() {

const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/products`).then(res => res.json()) as ProductsResponse;
  
  return (
    <>
      <main className="w-full pl-70 pt-70 pb-15 bg-gray-50">
        <Search2 products={products}/>
        <div>
        </div>
      </main>
    </>
  );
}
