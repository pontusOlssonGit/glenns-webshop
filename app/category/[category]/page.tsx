import ProductComponent from "@/components/product";
import ProductGrid from "@/components/product-grid";
import { createClient } from "@/lib/supabase/server";
import { Product } from "@/types/types";
import { log } from "console";
import { notFound } from "next/navigation";

export default async function CategoryPage({ params}: { params: Promise<{ category: string }>}) {

  const { category: paramsCategory } = await params;
  
  
  const supabase = await createClient()

  const { data: products, error } = await supabase
    .from('tags')
    .select('product_id')
    .eq('tag', paramsCategory.replace(/-/g, ' '));
    

  if (error || !products) {
    notFound();
  }


  const productIds = products.map((p) => p.product_id);
  console.log("Product IDs:", productIds);
  const productsData = await supabase
    .from('products')
    .select('*')
    .in('id', productIds) as { data: Product[]; error: any };

  if (productsData.error || !productsData.data) {
    notFound();
  }

  console.log(productsData.data);
  
  return (
    <ProductGrid products={productsData.data} />
  )
}
