import MainNavigation from "@/components/MainNavigation";

export default function Home() {
  return (
    <div>
      <header className="bg-[#088395] h-15 w-full">
        <div className="max-w-6xl mx-auto! h-full flex justify-between">
          <div className="flex items-center justify-center font-bold text-2xl text-white">
            Glenn's Webshop
          </div>
          <MainNavigation />
        </div>
      </header>
    </div>
  );
}
