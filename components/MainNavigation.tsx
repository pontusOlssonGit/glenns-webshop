"use client";
import { useRef } from "react";
import { ShoppingCartIcon, User2Icon } from "lucide-react";
import Link from "next/link";

import { signOut } from "@/lib/actions/auth";
import { useCartStore } from "./Store";

export default function MainNavigation({ user }: { user: any }) {
  const setIconRect = useCartStore((state) => state.setIconRect);
  const iconRef = useRef<HTMLAnchorElement>(null);
  const handleCartClick = () => {
    if (iconRef.current) {
      const rect = iconRef.current.getBoundingClientRect();
      // We store the right and bottom edges to align the modal
      setIconRect({ right: rect.right, bottom: rect.bottom });
    }
  };
  const menu = [
    { title: "Logga in", href: "/login" },
    { title: "Skapa konto", href: "/signup" },
  ];
  const productsInCart = useCartStore((state) => state.cartItems);
  const numberCartItems = productsInCart.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );
  return (
    <nav className="pt-3 pb-3">
      <ul className="w-full flex justify-around items-center gap-4">
        <span>
          <User2Icon className="text-white w-10 h-10" />
        </span>
        <div className="flex flex-col items-center">
          {!user ? (
            menu.map((item, index) => (
              <li key={index} className="hover:underline text-white">
                <Link href={item.href}>
                  <span className="font-semibold text-sm">{item.title}</span>
                </Link>
              </li>
            ))
          ) : (
            <li className="flex flex-col items-center text-white">
              <span className="text-xs truncate">{user?.email}</span>
              <span
                onClick={() => {
                  signOut();
                }}
                className="cursor-pointer font-semibold text-sm hover:underline"
              >
                Logga ut
              </span>
            </li>
          )}
        </div>
        <Link
          ref={iconRef}
          href="/cart"
          onClick={handleCartClick}
          className="flex items-center gap-1 relative inline-flex items-center p-3"
        >
          <li>
            <ShoppingCartIcon
              className={
                numberCartItems == 0
                  ? "text-gray-600 w-10 h-10"
                  : "text-white w-10 h-10"
              }
            />
          </li>
          {numberCartItems > 0 && (
            <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              {numberCartItems}
            </span>
          )}
        </Link>
      </ul>
    </nav>
  );
}
