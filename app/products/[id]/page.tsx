

export default async function Product({ params }: { params: Promise<{ id: number }>  }) {

  const { id: paramsId } = await params;

  const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/products/${paramsId}`).then(res => res.json());    

  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-lg font-semibold">{Math.ceil(product.price)} kr</p>
    </div>
  )
}
