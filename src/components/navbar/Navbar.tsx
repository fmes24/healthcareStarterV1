import Link from "next/link";
import { menuItems } from "@/data/menuData";
import MenuItem from "./MenuItem";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="h-16 max-w-7xl flex justify-between items-center mx-auto">
        <Link href="/" className="text-2xl font-bold text-green-400">
          East Point
        </Link>
        <nav>
          <ul className="text-gray-500 flex gap-5">
            {menuItems.map((item) => (
              <MenuItem key={item.href} item={item} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
