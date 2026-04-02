import { Product } from "@/types/types";
import Image from "next/image";
import ProductRating from "./product-rating";
import { Check, Square, User2, X } from "lucide-react";

export default function ProductComponent({ product }: { product: Product }) {
  
  return (
    <main className="bg-white flex flex-col gap-4 p-20">
      <h1 className="text-3xl font-extrabold mb-4">{product.title}</h1>
      <p className="text-gray-600 mb-4">{product.sku}</p>
      <ProductRating productRating={product.rating} />
      <section className="flex flex-col xl:flex-row justify-between items-center border-b border-gray-300">
      {product.image && (
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
        />
      )}
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <h2 className="text-6xl font-extrabold">
            {Math.ceil(product.price)} kr
          </h2>
          <span className="text-sm text-gray-500">(Excluding Glenn Tax)</span>
          <button
            type="button"
            className="px-6 py-3 w-full rounded-full bg-[#3338ff] text-white mt-6 hover:bg-[#1e21ff] transition-colors"
          >
            <span className="font-semibold">Lägg i varukorg</span>
          </button>
          <span className="font-semibold">
            Gratis frakt vid köp över 500 000 kr
          </span>

          <div className="bg-gray-50 w-full rounded-lg p-2 text-left">
            <h2 className="font-extrabold">Lagerstatus</h2>
            <span className="text-sm flex gap-1 items-center">
              {product.availability_status === "I lager" ? (
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-900" /> I lager
                </span>
              ) : product.availability_status === "Låg lager" ? (
                <span className="flex items-center gap-1">
                  <Square className="w-4 h-4 text-yellow-600" /> Begränsat lager
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <X className="w-4 h-4 text-red-600" /> Slut i lager
                </span>
              )}
            </span>
          </div>

          <div className="bg-gray-50 w-full rounded-lg p-2 text-left">
            <h2 className="font-extrabold">Tekniska Specifikationer</h2>

            <div className="text-sm flex gap-1 items-center">
              <h3 className="font-semibold">Vikt:</h3>
              <span>{product.weight} kg</span>
            </div>

            <div className="text-sm flex gap-1 items-center">
              <h3 className="font-semibold">Höjd:</h3>
              <span>{product.dimensions?.height} m</span>
            </div>
            <div className="text-sm flex gap-1 items-center">
              <h3 className="font-semibold">Bredd:</h3>
              <span>{product.dimensions?.width} m</span>
            </div>

            <div className="text-sm flex gap-1 items-center">
              <h3 className="font-semibold">Djup:</h3>
              <span>{product.dimensions?.depth} m</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="font-extrabold">Översikt</h2>
            <p>{product.description}</p>
          </div>
          <div>
            <h2 className="font-extrabold">
              Recensioner{product.reviews ? ` (${product.reviews.length})` : ""}
            </h2>
            <ul className="flex flex-col gap-4">
              {product.reviews?.map((review, index) => (
                <li
                  key={index}
                  className="flex flex-col items-start gap-2 pt-4 pb-4 border-b border-gray-300"
                >
                  <div className="flex flex-row items-center justify-between w-full gap-2">
                    <div className="w-full flex flex-row items-center gap-2">
                    <span className="bg-[#0004ff] p-3 rounded-full">
                      <User2 className="w-6 h-6 text-white" />
                    </span>
                    <div>
                      <span className="font-semibold">{review.reviewerName}</span>
                      <ProductRating productRating={review.rating} />
                    </div>
                    </div>
                    <span className="text-sm text-gray-500 w-30" >{new Date(review.date).toLocaleDateString()}</span>
                  </div>

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
