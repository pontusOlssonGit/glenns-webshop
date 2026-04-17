import { Product } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCarousel({ displayProducts }: { displayProducts: Product[] }) {
  return (
    <div className="w-full bg-white">
   
      <div className="group relative flex justify-center overflow-hidden">
        <div className="flex animate-infinite-scroll group-hover:[animation-play-state:paused]">
          {displayProducts.map((product, index) => (
            <div
              key={index}
              className="w-75 shrink-0 px-4 py-6"
            >
              <div className="rounded-2xl bg-white h-full p-8 text-center flex flex-col items-center justify-between shadow-lg">
                <Image
                  src={product.thumbnail}
                  alt=""
                  width={200}
                  height={200}
                  className="mx-auto rounded-lg"
                />
                <Link
                href={`/products/${product.id}`}
                prefetch={false}
                className="w-full items-center justify-center flex flex-col"
              >
                <h3 className="text-md font-semibold text-gray-800 hover:underline">{product.title}</h3>
              </Link>
                
                <div>
                <p className="text-gray-800 line-through font-mono">{Math.ceil(product.price)} kr</p>
                <p className="text-[#d50855] font-mono">{Math.ceil(product.price - (product.price * product.discount_percentage! / 100))} kr</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
