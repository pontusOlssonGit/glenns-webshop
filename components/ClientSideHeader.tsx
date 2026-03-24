import MainNavigation from "./MainNavigation";

export default function Header() {
  return (
    <header className="bg-[#088395] h-15 w-full">
      <div className="max-w-6xl mx-auto! h-full flex justify-between">
        <div className="flex items-center justify-center font-bold text-2xl text-white">
          Glenn's Webshop
        </div>
        <MainNavigation />
      </div>
    </header>
  );
}
