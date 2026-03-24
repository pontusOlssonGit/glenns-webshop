import ProductComponent from "@/components/product";

export default async function ProductPage({ params }: { params: Promise<{ id: number }>  }) {

  const { id: paramsId } = await params;

  const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/products/${paramsId}`).then(res => res.json());    

  
  return (
    <ProductComponent product={product} />
  )
}
