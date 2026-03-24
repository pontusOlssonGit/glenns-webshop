import { Product } from "@/types/types";
import { StarIcon } from "lucide-react";
import Image from "next/image";

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Product Grid</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border-b cursor-pointer flex flex-col gap-2 justify-center items-center mt-auto"
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
            <p className="text-gray-600 mb-4 text-xs">{product.description}</p>
            <div className="flex items-center justify-end w-full">
              <span className="text-sm font-bold">{Math.ceil(product.price)} kr</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="text-xs flex gap-1 items-center">
                {product.rating ?? 0}
                {(product.rating ?? 0) > 1 && (
                  <StarIcon className="stroke-amber-400 fill-amber-400 w-3 h-3" />
                )}
                {(product.rating ?? 0) > 2 && (
                  <StarIcon className="stroke-amber-400 fill-amber-400 w-3 h-3" />
                )}
                {(product.rating ?? 0) > 3 && (
                  <StarIcon className="stroke-amber-400 fill-amber-400 w-3 h-3" />
                )}
                {(product.rating ?? 0) > 4 && (
                  <StarIcon className="stroke-amber-400 fill-amber-400 w-3 h-3" />
                )}
                {(product.rating ?? 0) > 5 && (
                  <StarIcon className="stroke-amber-400 fill-amber-400 w-3 h-3" />
                )}
              </span>
              <span className="text-xs">
                Webblager {product.availabilityStatus}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
