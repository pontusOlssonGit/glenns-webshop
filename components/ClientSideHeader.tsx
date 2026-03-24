import { CircleDashed } from "lucide-react";
import MainNavigation from "./MainNavigation";
import Link from "next/link";

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
      <div className="pl-40 pr-40 flex justify-between border-b-4 border-[#3338ff]">
        <div className="flex pl-7 items-center justify-center font-bold text-2xl text-white relative">
          <Link href="/" className="flex items-center gap-2">
          <CircleDashed className="w-10 h-10 text-gray-500 absolute -left-5 animate-spin [animation-duration:30s]" />
          Glennhallen
          </Link>
        </div>
        <MainNavigation />
        
      </div>

      <div className="w-full bg-[#333] flex pl-40 pr-40">
          <ul className="flex flex-row w-full justify-around text-center text-white text-xs font-semibold">
            {categories.map((category) => (
              <li key={category} className="w-full h-full hover:bg-[#1a1a1d] p-4 cursor-pointer">
                {category}
              </li>
            ))}
          </ul>
      </div>

    </header>
  );
}
