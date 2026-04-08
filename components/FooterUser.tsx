import Link from "next/link";

export default function FooterUser() {
  return (

      <footer className="bg-[#1a1a1d] flex flex-col text-white justify-center p-20">
        <Link type="email" href="/contact" className="text-2xl font-bold mb-4">
          Contact Glenn
        </Link>
        
        <p>© 2026 Glenn Store. All rights reserved.</p>
      </footer>

  );
}
