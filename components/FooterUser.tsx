import Link from "next/link";

export default function FooterUser() {
  return (

      <footer className="bg-[#1a1a1d] flex flex-col text-white justify-center lg:pl-35 lg:pr-35 p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4">
       
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Kundservice</h3>
          <Link href="/contact">
            <span className="hover:underline">Kontakt</span>
          </Link>
          <Link href="/faq">
            <span className="hover:underline">FAQ</span>
          </Link>
          <Link href="/returns">
            <span className="hover:underline">Returer och Byten</span>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Information</h3>
          <Link href="/about">
            <span className="hover:underline">Om Oss</span>
          </Link>
          <Link href="/privacy">
            <span className="hover:underline">Integritetspolicy</span>
          </Link>
          <Link href="/terms">
            <span className="hover:underline">Villkor för Tjänsten</span>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Följ Oss</h3>
          <Link href="https://www.facebook.com/">
            <span className="hover:underline">Facebook</span>
          </Link>
          <Link href="https://www.instagram.com/">
            <span className="hover:underline">Instagram</span>
          </Link>
          <Link href="https://www.twitter.com/">
            <span className="hover:underline">Twitter</span>
          </Link> 
        </div>
         <Link type="email" href="/contact" className="text-xl font-bold mb-4 flex items-center justify-center lg:justify-start">
         <span className="bg-blue-700 rounded-full p-4 text-white w-max hover:bg-blue-800 transition-all duration-200">
          Kontakta Glenn
          </span>
        </Link>
        </div>
        <div className="flex flex-col items-center justify-center pt-10">
        <p>© 2026 Glennhallen. Alla rättigheter reserverade.</p>
        </div>
      </footer>

  );
}
