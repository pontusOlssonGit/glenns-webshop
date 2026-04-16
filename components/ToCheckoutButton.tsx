import Link from "next/link";

export default function ToCheckOutButton() {
  return (
    <Link
      href="/checkout"
      className="px-6 py-3 w-full rounded-full bg-[#3338ff] text-white mt-6 hover:bg-[#1e21ff] transition-colors"
    >
      Till Kassan
    </Link>
  );
}
