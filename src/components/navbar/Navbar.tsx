"use client";
import { useState } from "react";
import { menuLinks } from "@/data/menuData";
import NavLink from "./NavLink";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openItems, setOpenItems] = useState<Record<number, string | null>>({});
  const handleMobileToggle = (level: number, id: string) => {
    setOpenItems((previous) => ({ ...previous, [level]: previous[level] === id ? null : id, }));
  }
  const handleMobileMenuToggle = () => {
    setIsMobileOpen((previous) => {
      const next = !previous;
      if (previous) {
        setOpenItems({});
      }
      return next;
    });
  };
  const handleMobileClose = () => {
    setIsMobileOpen(false);
    setOpenItems({});
  };
  return (
    <header className="bg-white shadow-md w-full">
      <div className="flex justify-between items-center  p-5 mx-auto max-w-7xl">
        <div className="text-2xl text-blue-900 font-bold">East Point</div>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 font-semibold text-gray-500">
            {menuLinks.map((menu) => (
              <NavLink key={menu.id} item={menu} level={0} />
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden text-blue-700 font-bold text-2xl relative"
          onClick={handleMobileMenuToggle}
        >
          {isMobileOpen ? " ✖ " : " ☰ "}
        </button>
        {isMobileOpen && (
          <nav className="p-5 absolute bg-white top-18 w-full left-0 shadow-md">
            <ul className="text-gray-500 font-semibold">
              {menuLinks.map((menu) => (
                <NavLink key={menu.id} item={menu} level={0} mobile openItems={openItems} onMobileToggle={handleMobileToggle} onMobileClose={handleMobileClose} />
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
