import { CartItem } from "@/types/types";

export function calculateTotalPrice(productsInCart: CartItem[]) {
  return productsInCart.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);
}
export function amountForStripe(totalPriceInSek: number) {
  return Math.round(totalPriceInSek * 100);
}
