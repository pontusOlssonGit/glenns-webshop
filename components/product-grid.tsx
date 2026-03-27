"use client";
import { Product } from "@/types/types";
import { Check, Square, SquareArrowDownIcon, StarIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProductRating from "./product-rating";

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border-b cursor-pointer flex flex-col gap-2 justify-center items-center mt-auto"
          >
            <Link href={`/products/${product.id}`} className="w-full items-center justify-center flex flex-col">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={200}
              height={200}
            />
            <h3 className="text-md font-semibold mb-2 hover:underline">
              {product.title}
            </h3>
            </Link>
            <p className="text-gray-600 mb-4 text-xs">{product.description}</p>
            <div className="flex items-center justify-end w-full">
              <span className="text-sm font-bold">{Math.ceil(product.price)} kr</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <ProductRating productRating={product.rating} />
              <span className="text-xs flex gap-1 items-center">
                Webblager {product.availabilityStatus === "In Stock" ? (
                 <Check className="w-4 h-4 text-green-900" />
                ) : product.availabilityStatus === "Low Stock" ? (
                  <Square className="w-4 h-4 text-yellow-600" />
                ) : (
                 <X className="w-4 h-4 text-red-600" />
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
