"use client";

import { Product } from "@/types/types";
import { Check, ShoppingCartIcon, Square, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProductRating from "./product-rating";
import AddToCartButton from "./AddToCartButton";
import { useParams } from "next/navigation";
import ProductCarousel from "./product-carousel";
import React from "react";

const ProductGrid = ({ products }: { products: Product[] }) => {
  const params = useParams<{ category: string }>();
  const halfwayPoint = Math.floor(products.length / 2);

  const productGridStyle =
    "px-2 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg transition-all hover:border-white/30w-fit hover:bg-[#1e21ff] hover:text-white absolute top-2 right-2";
  const addToCartButtonText = <ShoppingCartIcon />;
  const displayProducts = [...products, ...products];
  return (
    <div className="">
      <section className="flex flex-col bg-transparent">
        <div className="m-0">
          <div className="group flex overflow-hidden space-x-16">
            <div className="animate-loop-scroll-reverse flex space-x-16 flex-row border-yellow-600 rounded-sm pr-0 pt-2 mt-2 mb-2 pb-2 group-hover:paused ">
              {products.map((product) => (
                <div key={product.id} className="w-19 h-19 pl-1 pr-1 pt-1">
                  <Link href={`/products/${product.id}`} className="">
                    <Image
                      className="max-w-none bg-white m-1 rounded-sm p-1"
                      src={product.thumbnail}
                      alt={product.title}
                      width={75}
                      height={75}
                      loading="lazy"
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="animate-loop-scroll-reverse flex space-x-16 flex-row border-yellow-600 rounded-sm pr-0 pt-2 mt-2  mb-2 pb-2 group-hover:paused "
            >
              {products.map((product) => (
                <div key={product.id} className="w-19 h-19 pl-1 pr-1 pt-1">
                  <Link href={`/products/${product.id}`} className="">
                    <Image
                      className="max-w-none bg-white m-1 rounded-sm p-1"
                      src={product.thumbnail}
                      alt={product.title}
                      width={75}
                      height={75}
                      loading="lazy"
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="animate-loop-scroll-reverse flex space-x-16 flex-row border-yellow-600 rounded-sm pr-0 pt-2 mt-2  mb-2 pb-2 group-hover:paused"
            >
              {products.map((product) => (
                <div key={product.id} className="w-19 h-19 pl-2 pr-2 pt-2">
                  <Link href={`/products/${product.id}`} className="">
                    <Image
                      className="max-w-none bg-white m-1 rounded-sm p-1"
                      src={product.thumbnail}
                      alt={product.title}
                      width={75}
                      height={75}
                      loading="lazy"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-white p-2">
          {products.length === 0 && (
            <div className="col-span-full text-center py-20">
              <h2 className="text-2xl font-semibold mb-4">
                Inga produkter hittades
              </h2>
              <p className="text-gray-600">
                Försök att ändra dina sökkriterier eller ta bort några filter.
              </p>
            </div>
          )}
          {products.map((product, index) => (
            <React.Fragment key={product.id}>
              {!params.category && index === 8 && (
                <div className="col-span-full">
                  <ProductCarousel displayProducts={displayProducts} />
                </div>
              )}

              <div className="p-4 border-b border-gray-300 cursor-pointer grid gap-2 justify-center items-center mt-auto relative">
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
                <p className="text-gray-600 mb-4 text-xs">
                  {product.description}
                </p>
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
            </React.Fragment>
          ))}
        </div>
      </section>
      {/* ONLY SHOW CAROUSEL IF NOT IN CATEGORY VIEW */}

      <section className="flex flex-col bg-yellow-300">
        <div className="m-0">
          <div className="flex overflow-hidden space-x-16 group">
            <div className="animate-loop-scroll flex space-x-16 flex-row border-yellow-600 rounded-sm pr-0 pt-2 mt-2 mb-2 pb-2 group-hover:paused ">
              {products.map((product) => (
                <div key={product.id} className="w-19 h-19 pl-1 pr-1 pt-1">
                  <Link href={`/products/${product.id}`} className="">
                    <Image
                      className="max-w-none bg-white m-1 rounded-sm p-1"
                      src={product.thumbnail}
                      alt={product.title}
                      width={75}
                      height={75}
                      loading="lazy"
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="animate-loop-scroll flex space-x-16 flex-row border-yellow-600 rounded-sm pr-0 pt-2 mt-2  mb-2 pb-2 group-hover:paused "
            >
              {products.map((product) => (
                <div key={product.id} className="w-19 h-19 pl-1 pr-1 pt-1">
                  <Link href={`/products/${product.id}`} className="">
                    <Image
                      className="max-w-none bg-white m-1 rounded-sm p-1"
                      src={product.thumbnail}
                      alt={product.title}
                      width={75}
                      height={75}
                      loading="lazy"
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="animate-loop-scroll flex space-x-16 flex-row border-yellow-600 rounded-sm pr-0 pt-2 mt-2  mb-2 pb-2 group-hover:paused"
            >
              {products.map((product) => (
                <div key={product.id} className="w-19 h-19 pl-2 pr-2 pt-2">
                  <Link href={`/products/${product.id}`} className="">
                    <Image
                      className="max-w-none bg-white m-1 rounded-sm p-1"
                      src={product.thumbnail}
                      alt={product.title}
                      width={75}
                      height={75}
                      loading="lazy"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-white p-2">
          {products.length === 0 && (
            <div className="col-span-full text-center py-20">
              <h2 className="text-2xl font-semibold mb-4">
                Inga produkter hittades
              </h2>
              <p className="text-gray-600">
                Försök att ändra dina sökkriterier eller ta bort några filter.
              </p>
            </div>
          )}
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 border-b border-gray-300 cursor-pointer grid gap-2 justify-center items-center mt-auto relative"
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
              <p className="text-gray-600 mb-4 text-xs">
                {product.description}
              </p>
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
      <section className="flex flex-col bg-transparent">
        <div className="m-0">
          <div className="group flex overflow-hidden space-x-16">
            <div className="animate-loop-scroll-reverse flex space-x-16 flex-row border-yellow-600 rounded-sm pr-0 pt-2 mt-2 mb-2 pb-2 group-hover:paused ">
              {products.map((product) => (
                <div key={product.id} className="w-19 h-19 pl-1 pr-1 pt-1">
                  <Link href={`/products/${product.id}`} className="">
                    <Image
                      className="max-w-none bg-white m-1 rounded-sm p-1"
                      src={product.thumbnail}
                      alt={product.title}
                      width={75}
                      height={75}
                      loading="lazy"
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="animate-loop-scroll-reverse flex space-x-16 flex-row border-yellow-600 rounded-sm pr-0 pt-2 mt-2  mb-2 pb-2 group-hover:paused "
            >
              {products.map((product) => (
                <div key={product.id} className="w-19 h-19 pl-1 pr-1 pt-1">
                  <Link href={`/products/${product.id}`} className="">
                    <Image
                      className="max-w-none bg-white m-1 rounded-sm p-1"
                      src={product.thumbnail}
                      alt={product.title}
                      width={75}
                      height={75}
                      loading="lazy"
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="animate-loop-scroll-reverse flex space-x-16 flex-row border-yellow-600 rounded-sm pr-0 pt-2 mt-2  mb-2 pb-2 group-hover:paused"
            >
              {products.map((product) => (
                <div key={product.id} className="w-19 h-19 pl-2 pr-2 pt-2">
                  <Link href={`/products/${product.id}`} className="">
                    <Image
                      className="max-w-none bg-white m-1 rounded-sm p-1"
                      src={product.thumbnail}
                      alt={product.title}
                      width={75}
                      height={75}
                      loading="lazy"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductGrid;
