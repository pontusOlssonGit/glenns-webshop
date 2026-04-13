"use client";
import { ShoppingCartIcon, User2Icon } from "lucide-react";
import Link from "next/link";

import { signOut } from "@/lib/actions/auth";







export default function MainNavigation({ user }: { user: any }) {
  
  
  

  const menu = [
    { title: "Logga in", href: "/login" },
    { title: "Skapa konto", href: "/signup" },
  ];
  return (
    <nav className="pt-3 pb-3">
      <ul className="w-full flex justify-around items-center gap-4">
        <span><User2Icon className="text-white w-10 h-10" /></span>
        <div className="flex flex-col items-start">
        {!user ? (
          menu.map((item, index) => (
            <li key={index} className="hover:underline text-white">
              <Link
                href={item.href}
              >
                <span className="font-semibold text-sm">{item.title}</span>
              </Link>
            </li>
          ))
        ) : (
          <li className="flex flex-col items-start text-white">
            <span className="text-xs truncate">{user?.email}</span>
              <span onClick={() => {signOut()}} className="cursor-pointer font-semibold text-sm hover:underline">Logga ut</span>
          </li>
        )}
        
        </div>
        <Link href="/cart" className="flex items-center gap-1">
          <li><ShoppingCartIcon className="text-gray-600 w-10 h-10" /></li>
        </Link>
        
      </ul>
    </nav>
  );
}
