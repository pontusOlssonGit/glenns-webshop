import { CartItem } from "@/types/types";
import CartContent from "./CartContent";
import CartTotal from "./CartTotal";

export default function CartSideBar({
  productsInCart,
  totalPrice,
}: {
  productsInCart: CartItem[];
  totalPrice: number;
}) {
  return (
    <div className="p-6  border-black ">
      <h1 className="text-xl font-bold mb-4  ">Din varukorg</h1>
      <CartContent productsInCart={productsInCart} />
      <CartTotal totalPrice={totalPrice} />
    </div>
  );
}
