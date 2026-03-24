import CartTableRow from "@/components/CartTableRow";
import { ProductsResponse, Product } from "@/types/types";

export default async function Cart() {
  const API_URL = "http://localhost:4000";
  const defaultLimit = 4;

  const { products }: ProductsResponse = await fetch(
    `${API_URL}/products/?_limit=${defaultLimit}&_sort=id&_order=asce`,
  ).then((res) => res.json());
  return (
    <div className="pt-15 mx-auto! bg-white">
      <h1 className="text-4xl text-center ">Your Cart (4 items)</h1>
      <table className="w-full mt-10!">
        <thead>
          <tr>
            <th></th>
            <th className="px-2">Product</th>
            <th className="px-4 text-right">Price</th>
            <th className="px-2 text-center">Quantity</th>
            <th className="px-2 text-center">Total</th>
          </tr>
        </thead>
        <tbody>
          {(products || []).map((product: Product) => (
            <CartTableRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
