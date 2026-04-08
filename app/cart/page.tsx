"use client";
import CartTableRow from "@/components/CartTableRow";
import { CartItem, Product } from "@/types/types";
import { useCartStore } from "@/components/Store";

export default function Cart() {
  const productsInCart = useCartStore((state) => state.cartItems);

  return (
    <div className="pt-15 mx-auto! bg-white">
      <h1 className="text-4xl text-center ">
        Your Cart ({productsInCart.length} items)
      </h1>
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
          {productsInCart.length > 0 ? (
            productsInCart.map((cartItem: CartItem) => (
              <CartTableRow
                key={cartItem.product.id}
                product={cartItem.product}
              />
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-10 text-gray-500">
                Your cart is empty.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
