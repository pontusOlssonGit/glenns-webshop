"use client";
import { Box } from "lucide-react";
import Link from "next/link";
import MainNavigation from "./MainNavigation";
import SearchInput from "./search-input";

export default function Header({ user }: { user: any }) {
  const categories = {
    "Mat": {subcategories: ["Stridsvagnar", "Lätta stridsfordon", "Amfibiska fordon"]},
    "Kläder": {subcategories: ["Herrskjortor", "Herr-tshirts"]},
    "Elektronik": {subcategories: ["Tablets", "Strömbanker", "Smarta klockor", "Laddare", "Over-Ear hörlurar", "Mikrovågsugn", "Blender","Skrivare","Juicepress"]},
    "Sport": {subcategories: ["Sportutrustning", "Fotboll", "Golf", "Baseball", "Tennis", "Volleyball"]},
    "Skor": {subcategories: ["Idrottsskor", "Sportskor","Slippers"]},
    "Köksredskap": {subcategories: ["Bricka", "Grytor", "Tallrikar", "Stekpannor", "Sil", "Iskubsformar", "Rivhjärn"]},
    "Fordon": {subcategories: ["Sporthoj", "Motorcyklar","Suv"]},
    "Djur": {subcategories: ["Hundmat", "Kattmat"]},
    "Möbler": {subcategories: ["Soffor", "Sängar", "Sängbord"]},
  };
  return (
    <header className="bg-[#1a1a1d] w-full">
      <div className="pl-5 pr-5 lg:pl-40 lg:pr-40 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-around">
        <div className="flex items-center justify-center font-bold text-2xl text-white">
          <Link href="/" className="flex items-center gap-2">
            <Box className="w-10 h-10 animate-spin fill-blue-900 [animation-duration:10s]" />
            Glennhallen
          </Link>
        </div>
        <div className="flex flex-1">
          <SearchInput />
        </div>

        <MainNavigation user={user} />
      </div>
      <div className="p-0.5 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 animate-pulse [animation-duration:8s]"></div>

      <div className="w-full relative bg-[#333] flex pl-10 pr-10 lg:pl-35 lg:pr-35">
        <ul className="grid grid-cols-3 lg:flex lg:flex-row w-full justify-around text-center text-white text-xs font-semibold">
          {Object.keys(categories).map((category: string) => (
            <li
              key={category}
              className="w-full hover:bg-[#1a1a1d] p-2 cursor-pointer group"
            >
              {category}

              <div className="absolute left-0 pl-5 pr-5 lg:pl-35 lg:pr-35 w-full hidden pt-2 group-hover:block">
                <div className="bg-white flex flex-col border rounded-b-md shadow-lg overflow-hidden pt-5 pb-5">
                  <h2 className="text-3xl text-left font-bold text-gray-900 px-4 py-2">
                    {category}
                  </h2>
                  <div className="flex flex-row">
                  {categories[category as keyof typeof categories]?.subcategories.map((subcategory: string) => (
                    <Link
                      key={subcategory}
                      href={`/category/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 hover:bg-gray-100 text-black"
                    >
                      {subcategory}
                    </Link>
                  ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
