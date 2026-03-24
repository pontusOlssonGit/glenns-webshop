import { CircleDashed } from "lucide-react";
import MainNavigation from "./MainNavigation";

export default function Header() {
  return (
    <header className="bg-[#1a1a1d] w-full">
      <div className="pl-40 pr-40 flex justify-between border-b-4 border-blue-500">
        <div className="flex pl-7 items-center justify-center font-bold text-2xl text-white relative">
          <CircleDashed className="w-6 h-6 text-gray-500 absolute left-0 animate-spin [animation-duration:30s]" />
          Glennhallen
        </div>
        <MainNavigation />
        
      </div>

      <div className="w-full bg-gray-800 flex p-2 pl-40 pr-40">
          <ul className="flex flex-row w-full justify-between p-2 text-white text-xs font-semibold">
            <li>
              Tanks
            </li>
            <li>
              Sprängämnen
            </li>
            <li>
              Atombomber
            </li>
            <li>
              Scudmissiler
            </li>
            <li>
              Stridsflyg
            </li>
            <li>
              Minröjare
            </li>
          </ul>
        </div>

    </header>
  );
}
