
import { Box, LoaderPinwheel, Webhook } from "lucide-react";
import Link from "next/link";
import MainNavigation from "./MainNavigation";
import SearchInput from "./search-input";

export default function Header() {

  const categories = [
    "Tanks",
    "Sprängämnen",
    "Atombomber",
    "Scudmissiler",
    "Stridsflyg",
    "Minröjare",
    "Ubåtar",
    "Artilleri",
    "Raketförsvarssystem",
  ];
  return (
    <header className="bg-[#1a1a1d] w-full">
      <div className="pl-10 pr-10 lg:pl-40 lg:pr-40 flex flex-col gap-3 lg:flex-row justify-between items-center">
        <div className="flex items-center justify-center font-bold text-2xl text-white">
          <Link href="/" className="flex items-center gap-2">
          <Box className="w-10 h-10 animate-spin fill-blue-900 [animation-duration:10s]" />
          Glennhallen
          </Link>
        </div>
        <div className="flex flex-1">
          <SearchInput />
        </div>
       
        <MainNavigation />

      </div>
      <div className="p-0.5 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 animate-pulse [animation-duration:8s]">
      </div>

      <div className="w-full bg-[#333] flex pl-10 pr-10 lg:pl-40 lg:pr-40">
          <ul className="grid grid-cols-3 lg:flex lg:flex-row w-full justify-around text-center text-white text-xs font-semibold">
            {categories.map((category) => (
              <li key={category} className="w-full hover:bg-[#1a1a1d] p-2 cursor-pointer">
                {category}
              </li>
            ))}
            <li key="contact" className="w-full hover:bg-[#1a1a1d] p-2 cursor-pointer">
            <Link href="/contact/">
             Kontakt
            </Link>
          </li>
          </ul>
      </div>

    </header>
  );
}
