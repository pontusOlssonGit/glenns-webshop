import { Product, ProductsResponse } from "@/types/types";
import { createClient } from "@/lib/supabase/server";
import ProductGrid from "@/components/product-grid";
import Pagination2 from "@/components/pagination2";
import Pagination from "@/components/pagination";
import Banner from "@/components/banner";

const ITEMS_PER_PAGE = 20;

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) {
  const params = await searchParams;
  const query = params.q;
  const page = params.page;
  const currentPage = Math.max(1, Number(page) || 1);
  const supabase = await createClient();

  let supabaseQuery = supabase
  .from("products")
  .select("*",{ count: "exact" })

  if (query) {
    supabaseQuery = supabaseQuery.or(
      `title.ilike.%${query}%,description.ilike.%${query}%`,
    );
  }

  const from = (currentPage - 1) * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE - 1;

  const { data: products, count, error } = await supabaseQuery
    .range(from, to)
    .order("created_at", { ascending: false }) as {
    data: Product[];
    count: number | null;
    error: any;
  };

  const totalPages = count ? Math.ceil(count / ITEMS_PER_PAGE) : 0;

  return (
    <>
      <Banner products={[products[0], products[1], products[2]]} />
      <ProductGrid products={products} />
      <Pagination2 currentPage={currentPage} totalPages={totalPages} />
      
    </>
  );
}
