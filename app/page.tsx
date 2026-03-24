"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const menu = [
  { title: "Home", href: "/" },
  { title: "Cart", href: "/" },
  { title: "About", href: "/" },
];

export default function Home() {
  return (
    <div>
      <header className="bg-[#088395] h-15 w-full">
        <div className="max-w-6xl !mx-auto h-full">
          <nav>
            <ul className="w flex justify-around">
              {menu.map((item, index) => (
                <li key={index}>
                  <Link
                    className=" flex h-15 w-[83px] items-center justify-center  hover:bg-[#09637E] text-black"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
