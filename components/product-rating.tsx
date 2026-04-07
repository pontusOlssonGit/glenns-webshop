import { StarIcon } from "lucide-react";


export default function ProductRating({productRating}: {productRating: number | undefined}) {
  return (
    <span className="text-xs flex gap-1 items-center">
      {productRating ?? 0}
      {Math.round(productRating ?? 0) >= 1 && (
        <StarIcon className="stroke-amber-300 fill-amber-300 w-3 h-3" />
      )}
      {Math.round(productRating ?? 0) >= 2 && (
        <StarIcon className="stroke-amber-300 fill-amber-300 w-3 h-3" />
      )}
      {Math.round(productRating ?? 0) >= 3 && (
        <StarIcon className="stroke-amber-300 fill-amber-300 w-3 h-3" />
      )}
      {Math.round(productRating ?? 0) >= 4 && (
        <StarIcon className="stroke-amber-300 fill-amber-300 w-3 h-3" />
      )}
      {Math.round(productRating ?? 0) >= 5 && (
        <StarIcon className="stroke-amber-300 fill-amber-300 w-3 h-3" />
      )}
    </span>
  );
}
