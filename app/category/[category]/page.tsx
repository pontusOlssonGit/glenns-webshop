import ProductComponent from "@/components/product";
import ProductGrid from "@/components/product-grid";
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

export default async function CategoryPage({ params}: { params: Promise<{ category: string }>}) {

  const { category: paramsCategory } = await params;
  
  
  const supabase = await createClient()

  const { data: product, error } = await supabase
    .from('tags')
    .select('*')
    .eq('tag', paramsCategory.replace(/-/g, ' '))
    .single();

  if (error || !product) {
    notFound();
  }

  console.log(product);

  const products = await supabase
    .from('products')
    .select('*')
    .ilike('tags', `%${paramsCategory}%`)   
  
  
  
  
  return (
    <ProductGrid products={[]} />
  )
}
