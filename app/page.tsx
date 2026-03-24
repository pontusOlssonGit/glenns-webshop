import MainNavigation from "@/components/MainNavigation";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="bg-[#088395] h-15 w-full">
        <div className="max-w-6xl mx-auto! h-full">
          <MainNavigation />
        </div>
      </header>
    </div>
  );
}
