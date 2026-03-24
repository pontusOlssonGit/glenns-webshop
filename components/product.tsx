import { Product } from "@/types/types";
import Image from "next/image";

export default function ProductComponent({ product }: { product: Product }) {
  return (
    <main className="bg-white flex flex-col gap-4 p-20">
      <h1 className="text-3xl font-extrabold mb-4">{product.title}</h1>
      <p className="text-gray-600 mb-4">
        {product.description}
        {product.reviews && (
          <span className="text-sm text-gray-500 ml-2">
            ({product.reviews.length} reviews)
          </span>
        )}
      </p>
      <section className="flex flex-row justify-between items-center">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={500}
          height={500}
        />
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <h2 className="text-3xl font-extrabold">
            {Math.ceil(product.price)} kr
          </h2>
          <span className="text-sm text-gray-500">(Excluding Glenn Tax)</span>
          <button
            type="button"
            className="px-6 py-3 w-full rounded-full bg-[#3338ff] text-white mt-6 hover:bg-[#1e21ff] transition-colors"
          >
            Add to cart
          </button>
        </div>
      </section>
    </main>
  );
}
