"use client";
import { Apple, Box, CarFront, Cat, CookingPot, Footprints, Ham, LucideTv, ShirtIcon, Sofa, Volleyball } from "lucide-react";
import Link from "next/link";
import MainNavigation from "./MainNavigation";
import SearchInput from "./search-input";

export default function Header({ user }: { user: any }) {
  const categories = {
    "Mat": {subcategories: ["Frukter", "Grönsaker", "Kött", "Gryn", "Hälsokost", "Desserter","Drycker","Dryckesredskap"], icon: <Ham className="w-5 h-5 stroke-gray-900" />},
    "Kläder": {subcategories: ["Herrskjortor", "Herr-tshirts","Klänningar"], icon: <ShirtIcon className="w-5 h-5 stroke-gray-900" />},
    "Elektronik": {subcategories: ["Tablets", "Strömbanker", "Smarta klockor", "Laddare", "Over-Ear hörlurar", "Mikrovågsugn", "Blender","Skrivare","Juicepress"], icon: <LucideTv className="w-5 h-5 stroke-gray-900" />},
    "Sport": {subcategories: ["Sportutrustning", "Fotboll", "Golf", "Baseball", "Tennis", "Volleyball","Cricket","Basketboll"], icon: <Volleyball className="w-5 h-7 stroke-gray-900" />},
    "Skor": {subcategories: ["Idrottsskor", "Sportskor","Slippers"], icon: <Footprints className="w-5 h-5 stroke-gray-900" />},
    "Kök": {subcategories: ["Bricka", "Grytor", "Tallrikar", "Stekpannor", "Sil", "Iskubsformar", "Rivjärn", "Wok"], icon: <CookingPot className="w-5 h-5 stroke-gray-900" />},
    "Fordon": {subcategories: ["Sporthoj", "Motorcyklar","Suv"], icon: <CarFront className="w-5 h-5 stroke-gray-900" />},
    "Djur": {subcategories: ["Hundmat", "Kattmat", "Djurtillbehör"], icon: <Cat className="w-5 h-5 stroke-gray-900" />},
    "Möbler": {subcategories: ["Soffor", "Sängar", "Sängbord"], icon: <Sofa className="w-5 h-5 stroke-gray-900" />},
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
              className="w-full hover:bg-[#1a1a1d] p-2 group"
            >
              {category}

              <div className="absolute left-0 pl-5 pr-5 lg:pl-35 lg:pr-35 w-full hidden pt-2 group-hover:block">
                <div className="bg-white flex flex-col border rounded-b-md shadow-lg overflow-hidden pt-5 pb-5">
                  <div className="flex flex-row items-center">
                    {categories[category as keyof typeof categories]?.icon && (
                      <div className="pl-10 p-2">
                        {categories[category as keyof typeof categories]?.icon}
                      </div>
                    )}
                  <h2 className="text-3xl text-left font-bold text-gray-900 py-2">
                    {category}
                  </h2>
                   
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-left pl-10">
                  {categories[category as keyof typeof categories]?.subcategories.map((subcategory: string) => (
                    <Link
                      key={subcategory}
                      href={`/category/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block py-2 hover:underline text-black"
                    >
                      <span className="hover:underline">{subcategory}</span>
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
