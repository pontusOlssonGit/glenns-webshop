import ProductComponent from "@/components/product";
import { createClient } from "@/lib/supabase/server";
import { ProductsResponse } from "@/types/types";
import { log } from "console";
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

  const { data: images, error: imageError } = await supabase
    .from('images')
    .select('url')
    .eq('product_id', paramsId)
    

  if (imageError) {
    console.log("Error fetching image:", imageError); 
  }

  const { data: reviews, error: reviewError } = await supabase
    .from('reviews')
    .select('*')
    .eq('product_id', paramsId)
    

  if (reviewError) {
    console.log("Error fetching reviews:", reviewError); 
  }

  const {data: dimensions, error: dimensionsError} = await supabase
    .from('dimensions')
    .select('*')
    .eq('product_id', paramsId)
    .single();

  if (dimensionsError) {
    console.log("Error fetching dimensions:", dimensionsError); 
  }

  product.dimensions = dimensions;
  product.image = images?.[0]?.url;
  product.reviews = reviews;
  console.log(product);
  
  
  
  
  return (
    <ProductComponent product={product} />
  )
}
