import { ShoppingCart, ShoppingCartIcon, User2Icon } from "lucide-react";
import Link from "next/link";

export default function MainNavigation() {
  const menu = [
    { title: "Logga in", href: "/login" },
    { title: "Skapa konto", href: "/signup" },
  ];
  return (
    <nav className="pt-3 pb-3">
      <ul className="w-full flex justify-around items-center gap-4">
        <span><User2Icon className="text-white w-10 h-10" /></span>
        <div className="flex flex-col">
        {menu.map((item, index) => (
          <li key={index} className="items-center gap-1 hover:underline text-white">
            <Link
              href={item.href}
            >
              <span className="font-semibold text-sm">{item.title}</span>
            </Link>
          </li>
        ))}
        </div>
        <Link href="/cart" className="flex items-center gap-1">
          <li><ShoppingCartIcon className="text-gray-600 w-10 h-10" /></li>
        </Link>
        
      </ul>
    </nav>
  );
}
