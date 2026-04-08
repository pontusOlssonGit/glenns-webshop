"use client";

import { Product } from "@/types/types";
import { Check, Square, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    // DONT SEARCH IF LESS THAN 2 CHARACTERS
    if (searchTerm.length < 2) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `/api/search?q=${encodeURIComponent(searchTerm)}`,
        );
        const data = await res.json();
        setResults(data);
        setIsOpen(true);
      } catch (err) {
        console.error("Search failed", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleSelect = (productId: string) => {
    setIsOpen(false);
    router.push(`/products/${productId}`);
  };

  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Sök bland över 16 000 produkter"
          className=" placeholder:text-gray-700 bg-white w-full z-20 rounded-full px-4 py-3 focus:outline-none focus:shadow-md focus:shadow-gray-400"
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => searchTerm.length >= 2 && setIsOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              router.push(`/?q=${encodeURIComponent(e.currentTarget.value)}`);
            }
          }}
        />
        {isOpen && (
          <div ref={dropdownRef}>
            <ul className="bg-white rounded-lg shadow-xl absolute z-10 w-full">
              {results.map((product: Product) => (
                <li
                  className="cursor-pointer p-2"
                  key={product.id}
                  onClick={() => handleSelect(product.id.toString())}
                >
                  <div className="flex flex-row items-center border-b border-gray-300 rounded-sm p-4">
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      width={50}
                      height={50}
                      className="mr-3 rounded"
                    />
                    <div className="w-full flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-gray-800 hover:underline">
                          {product.title}
                        </span>
                        <span className="text-gray-600 text-xs">
                          {product.sku}
                        </span>
                      </div>

                      <div className="flex flex-col">
                        <span className="font-bold text-gray-800 text-end">
                          {Math.ceil(product.price)} kr
                        </span>
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
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
