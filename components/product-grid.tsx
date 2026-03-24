import { Product } from "@/types/types"
import Image from "next/image"


const ProductGrid = ({products}: {products: Product[]}) => {
  return (
    <section>
        <h2 className="text-2xl font-bold mb-4">Product Grid</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                    <Image src={product.thumbnail} alt={product.title} width={200} height={200} />
                    <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold">${product.price}</span>
                        <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default ProductGrid