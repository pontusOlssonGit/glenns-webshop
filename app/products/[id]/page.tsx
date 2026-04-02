import ProductComponent from "@/components/product";
import { createClient } from "@/lib/supabase/server";
import { ProductsResponse } from "@/types/types";
import { notFound } from "next/navigation";

export default async function ProductPage({ params}: { params: Promise<{ id: number }>}) {

  const { id: paramsId } = await params;
  
  const supabase = await createClient()

  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', paramsId)
    .single();

  if (error || !product) {
    notFound();
  }
  
  return (
    <ProductComponent product={product} />
  )
}
