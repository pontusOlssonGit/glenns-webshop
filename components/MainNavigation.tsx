import Link from "next/link";

export default function MainNavigation() {
  const menu = [
    { title: "Home", href: "/" },
    { title: "Cart", href: "/" },
    { title: "About", href: "/" },
  ];
  return (
    <nav>
      <ul className="w flex justify-around">
        {menu.map((item, index) => (
          <li key={index}>
            <Link
              className=" flex h-15 w-20.75 items-center justify-center  hover:bg-[#09637E] text-black"
              href={item.href}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
