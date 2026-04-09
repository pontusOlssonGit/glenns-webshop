import Link from "next/link";

export default function FooterUser() {
  return (

      <footer className="bg-[#1a1a1d] flex flex-col text-white justify-center pl-35 pr-35 p-10">
        <div className="grid grid-cols-4">
       
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Kundservice</h3>
          <Link href="/contact" className="hover:underline">
            Kontakt
          </Link>
          <Link href="/faq" className="hover:underline">
            FAQ
          </Link>
          <Link href="/returns" className="hover:underline">
            Returer och Byten
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Information</h3>
          <Link href="/about" className="hover:underline">
            Om Oss
          </Link>
          <Link href="/privacy" className="hover:underline">
            Integritetspolicy
          </Link>
          <Link href="/terms" className="hover:underline">
            Villkor för Tjänsten
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Följ Oss</h3>
          <Link href="https://www.facebook.com/" className="hover:underline">
            Facebook
          </Link>
          <Link href="https://www.instagram.com/" className="hover:underline">
            Instagram
          </Link>
          <Link href="https://www.twitter.com/" className="hover:underline">
            Twitter
          </Link> 
        </div>
         <Link type="email" href="/contact" className="text-xl font-bold mb-4">
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
