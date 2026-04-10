"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export default function pagination2({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const goToPage = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, {
        scroll: false,
      });
    });
  };

  return (
    <div className="flex justify-center gap-2 mt-8 bg-white p-4">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1 || isPending}
        className={`px-4 py-2 border rounded-full text-white flex items-center ${
          currentPage <= 1 || isPending
            ? "bg-gray-500"
            : "bg-blue-700"
        }`}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <span className="px-4 py-2 font-semibold text-gray-700">
        {isPending
          ? "Loading..."
          : `Page ${currentPage} of ${totalPages}`}
      </span>

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages || isPending}
        className={`px-4 py-2 border rounded-full text-white flex items-center ${
          currentPage >= totalPages || isPending
            ? "bg-gray-500"
            : "bg-blue-700"
        }`}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
