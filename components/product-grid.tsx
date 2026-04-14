"use client";
import { Product } from "@/types/types";
import { Check, ShoppingCartIcon, Square, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProductRating from "./product-rating";
import AddToCartButton from "./AddToCartButton";

const ProductGrid = ({ products }: { products: Product[] }) => {
  const productGridStyle =
    "px-2 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg transition-all hover:border-white/30w-fit hover:bg-[#1e21ff] hover:text-white absolute top-2 right-2";
  const addToCartButtonText = <ShoppingCartIcon />;
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border-b border-gray-300 rounded-sm cursor-pointer grid gap-2 justify-center items-center mt-auto relative"
          >
            <AddToCartButton
              product={product}
              buttonStyle={productGridStyle}
              buttonText={addToCartButtonText}
            />
            <Link
              href={`/products/${product.id}`}
              prefetch={false}
              className="w-full items-center justify-center flex flex-col"
            >
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
              <span className="text-sm font-bold">
                {Math.ceil(product.price)} kr
              </span>
            </div>
            <div className="flex items-center justify-between w-full">
              <ProductRating productRating={product.rating} />
              <span className="text-xs flex gap-1 items-center">
                Webblager{" "}
                {product.availability_status === "In Stock" ||
                product.availability_status === "I lager" ? (
                  <Check className="w-4 h-4 text-green-900" />
                ) : product.availability_status === "Low Stock " ||
                  product.availability_status === "Låg lager" ? (
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
