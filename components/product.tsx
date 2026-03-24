import { Product } from "@/types/types";
import Image from "next/image";
import ProductRating from "./product-rating";
import { Check, Square, X } from "lucide-react";

export default function ProductComponent({ product }: { product: Product }) {
  return (
    <main className="bg-white flex flex-col gap-4 p-20">
      <h1 className="text-3xl font-extrabold mb-4">{product.title}</h1>
      <p className="text-gray-600 mb-4">
        {product.sku}
      </p>
      <ProductRating productRating={product.rating} />
      <section className="flex flex-row justify-between items-center border-b">
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
          <span className="font-semibold">Gratis frakt vid köp över 500 000 kr</span>
          
          <div className="bg-gray-50 w-full rounded-lg p-2 text-left">
          <h2 className="font-extrabold">Lagerstatus</h2>
          <span className="text-sm flex gap-1 items-center">
            {product.availabilityStatus === "In Stock" ? (
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-900" /> I lager</span>
              
            ) : product.availabilityStatus === "Low Stock" ? (
              <span className="flex items-center gap-1"><Square className="w-4 h-4 text-yellow-600" /> Begränsat lager</span>
            ) : (
              <span className="flex items-center gap-1"><X className="w-4 h-4 text-red-600" /> Slut i lager</span>
            )}
          </span>
          </div>

        </div>
      </section>

      <section>
        <div className="flex flex-col gap-4">
            <div>
                <h2 className="font-semibold">Översikt</h2>
                <p>{product.description}</p>
            </div>
               <div>
                <h2 className="font-semibold">Recensioner{product.reviews ? ` (${product.reviews.length})` : ""}</h2>
                <ul>
                    {product.reviews?.map((review, index) => (
                        <li key={index}>
                            {review.reviewerEmail}
                            {review.reviewerName}
                            {review.rating}
                            {review.comment}
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
      </section>
    </main>
  );
}
