"use client";
import { useState } from "react";
import Link from "next/link";
import { MenuDataType } from "@/types/menu";

interface NavLinkProps {
  item: MenuDataType; // here item prop receives on menu object from Navbar.tsx file
  level: number;
  mobile?: boolean;
}

export default function NavLink({ item, level, mobile = false }: NavLinkProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const mobileIndent = mobile ? level * 16 : 0;
  // const dropdownMenu = level === 0 ? "top-full left-0" : "left-full top-0";
  const dropdownMenu = mobile
    ? "mt-2 pl-4"
    : level === 0
      ? "top-full left-0"
      : level === 1
        ? "top-0 left-full"
        : "top-0 right-full";
  return (
    <li
      className="relative"
      onMouseEnter={() => !mobile && setIsOpen(true)}
      onMouseLeave={() => !mobile && setIsOpen(false)}
    >
      {mobile && hasChildren ? (
        <button
          type="button"
          style={{ paddingLeft: `${mobileIndent}px` }}
          className="hover:text-blue-400 px-3 py-2 block rounded whitespace-nowrap"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {item.title}

          <span
            className={`ml-2 inline-block transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          >
            ▼
          </span>
        </button>
      ) : (
        <Link
          href={item.href}
          style={mobile ? { paddingLeft: `${mobileIndent}px` } : undefined}
          className="hover:text-blue-400 px-3 py-2 block rounded whitespace-nowrap"
        >
          {item.title}
          {hasChildren && (
            <span
              className={`ml-2 inline-block transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          )}
        </Link>
      )}
      {hasChildren && (
        // <ul
        //   className={` ${isOpen ? "block" : "hidden"} ${mobile ? "" : "absolute"}  bg-white p-3 rounded-2xl min-w-48 text-gray-500 shadow-md ${dropdownMenu}`}
        // >
        <ul
          className={` ${mobile ? (isOpen ? "max-h-250" : "max-h-0") : isOpen ? "block" : "hidden"} *${mobile ? "overflow-hidden transition-all duration-300" : ""} ${mobile ? "" : "absolute"}  bg-white p-3 rounded-2xl min-w-48 text-gray-500 shadow-md ${dropdownMenu}`}
        >
          {item.children?.map((child) => (
            <NavLink
              key={child.href}
              item={child}
              level={level + 1}
              mobile={mobile}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
