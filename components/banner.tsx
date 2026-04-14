import { Product } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'


export default function Banner ({products}: {products?: Product[]}) {
  return (
    <div className="bg-gray-100 pt-4">
      <div className="flex flex-col mx-auto text-center">
        <h1 className="text-md font-semibold">Fri frakt över 500 000 kr.</h1>
        <p className="text-sm text-gray-700 pb-4">Din destination för de bästa produkterna.</p>

        <div className='flex flex-col lg:flex-row bg-white p-6'>
        <Image 
            src={"/assets/banner.png"}
            alt="Banner Image"
            width={800}
            height={400}
            className="w-full object-cover rounded-md"
        />
        <div className='hidden xl:flex xl:flex-col gap-4 lg:pl-4 justify-center items-start'>
          <h2 className='text-lg font-semibold'>Upptäck våra senaste produkter!</h2>
          {products && products.map((product) => (
            <div key={product.id} className='flex flex-row items-center justify-center w-full gap-4 p-2 border-b border-gray-200'>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={50}
                height={50}
                className="rounded"
              />
              <div className='flex flex-col text-left'>
                <Link href={`/products/${product.id}`} className='text-gray-800 hover:underline'>
                  <span className='text-gray-800 hover:underline'>{product.title}</span>
                </Link>
                <span className='text-sm font-bold'>{Math.ceil(product.price)} kr</span>
              </div>
            </div>
          ))}
        </div>
        
        </div>
      </div>
    </div>
  )
}
