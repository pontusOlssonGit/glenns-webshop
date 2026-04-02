import { Product, ProductsResponse } from "@/types/types";
import { createClient } from "@/lib/supabase/server";
import ProductGrid from "@/components/product-grid";

export default async function Home({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  // const products = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/products`
  // ).then(res => res.json()) as ProductsResponse;
  const query = (await searchParams).q;
  const supabase = await createClient();

  let supabaseQuery = supabase
    .from('products')
    .select('*')
    .limit(20);

  if (query) {
    supabaseQuery = supabaseQuery.or(`title.ilike.%${query}%,description.ilike.%${query}%`)
  }

  const { data: products, error } = await supabaseQuery as { data: Product[], error: any };
   

  return <ProductGrid products={products} />;
}
