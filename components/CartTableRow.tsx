import { Product } from "@/types/types";
import { Trash2 } from "lucide-react";
function formatPrice(value: number) {
  return Math.trunc(Number(value)).toLocaleString("sv-SE");
}

export default function CartTableRow({ product }: { product: Product }) {
  return (
    <tr className="hover:bg-gray-100">
      <td className="px-3 py-2 w-auto h-10 align-middle aspect-square">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-10 w-10 object-cover"
        />
      </td>
      <td className="px-3 py-2 w-70 align-middle">
        <div className="flex flex-col">
          <a
            href={`products/${product.id}`}
            className="font-semibold text-blue-500 hover:text-blue-700 whitespace-nowrap truncate"
          >
            {product.title}
          </a>
          <span className="text-xs text-gray-400 whitespace-nowrap truncate">
            {product.sku}
          </span>
        </div>
      </td>
      <td className="px-3 py-2 align-middle text-right whitespace-nowrap">
        {formatPrice(product.price)} kr
      </td>
      <td className="px-3 py-2 align-middle text-center">1</td>
      <td className="px-3 py-2 align-middle text-center">
        {formatPrice(product.price)} kr
      </td>
      <td className="px-3 py-2 align-middle overflow-hidden text-right flex gap-1">
        <button
          type="button"
          className="text-red-600 bg-red-200 p-1 rounded-md hover:bg-red-700 hover:text-white"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
}
