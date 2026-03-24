import type { Category, ProductsResponse } from "./types";
import Header from "./components/header";
import Footer from "./components/Footer-component";
import ProductsTable from "./components/ProductsTable";
import Search2 from "@/components/search2";
import ProductGrid from "@/components/product-grid";
import { ProductsResponse } from "@/types/types";

export default async function Home() {

  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/products`).then(res => res.json()) as ProductsResponse;
  
  return (
    <>
      <Header products={allProducts} total={totalProducts} categories={categories} />
      <main className="w-full pl-70 pt-70 pb-15 bg-gray-50">
        <Search2 products={products}/>
        <div>
          <ProductsTable products={products} categories={categories} />
        </div>
      </main>
      <Footer
        total={total}
        pages={pages}
        numberOfProducts={products.length}
        currentPage={currentPage}
        limit={DEFAULT_LIMIT}
      />
    </>
  );
  return <ProductGrid products={products.products} />;
}
