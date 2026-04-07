// components/pagination.tsx
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

export default function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex justify-center gap-2 mt-8 bg-white p-4">
      <Link
        href={createPageURL(currentPage - 1)}
        scroll={false}
        className={`px-4 py-2 border rounded-full bg-blue-700 text-white flex items-center ${
          currentPage <= 1 ? "pointer-events-none bg-gray-500" : ""
        }`}
      >
        <ChevronLeft className="w-4 h-4" />
      </Link>

      <span className="px-4 py-2 font-semibold text-gray-700">
        Page {currentPage} of {totalPages}
      </span>

      <Link
        href={createPageURL(currentPage + 1)}
        scroll={false}
        className={`px-4 py-2 border rounded-full bg-blue-700 text-white flex items-center ${
          currentPage >= totalPages ? "pointer-events-none bg-gray-500" : ""
        }`}
      >
        <ChevronRight className="w-4 h-4" />
      </Link>
    </div>
  );
}