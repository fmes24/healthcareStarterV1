"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { MenuDataType } from "@/types/menu";

interface NavLinkProps {
  item: MenuDataType; // here item prop receives on menu object from Navbar.tsx file
  level: number;
  mobile?: boolean;
  openItems?: Record<number, string | null>;
  onMobileToggle?: (level: number, id: string) => void;
  onMobileClose?: () => void;
}

export default function NavLink({ item, level, mobile = false, openItems, onMobileToggle, onMobileClose }: NavLinkProps) {
  const [desktopOpen, setDesktopOpen] = useState(false)
  const [openLeft, setOpenLeft] = useState(false)
  const menuRef = useRef<HTMLLIElement>(null);
  const handleMouseEnter = () => {
    if (mobile) return;
    setDesktopOpen(true);
    if (menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      const spaceRight = window.innerWidth - rect.right;
      if (spaceRight < 200) {
        setOpenLeft(true)
      } else {
        setOpenLeft(false)
      }
    }
  }
  const isOpen = mobile ? openItems?.[level] === item.id : desktopOpen;
  const hasChildren = item.children && item.children.length > 0;
  const hasLink = Boolean(item.href);
  const mobileIndent = mobile ? level * 16 : 0;

  const dropdownMenu = mobile
    ? "mt-2 pl-4"
    : level === 0
      ? openLeft ? "top-full right-0"
        : "top-full left-0"
      : openLeft
        ? "top-0 right-full"
        : "top-0 left-full"
  
  return (
    <li
      ref={menuRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => !mobile && setDesktopOpen(false)}
    >
      {hasChildren && !hasLink ? (
        <button
          type="button"
          style={mobile ? { paddingLeft: `${mobileIndent}px` } : undefined}
          className="hover:text-blue-400 px-3 py-2 block rounded whitespace-nowrap"
          onClick={() => {
            if (mobile) {
              onMobileToggle?.(level, item.id ?? "");
            }
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
          href={item.href ?? "#"}
          style={mobile ? { paddingLeft: `${mobileIndent}px` } : undefined}
          className="hover:text-blue-400 px-3 py-2 block rounded whitespace-nowrap"
          onClick={() => {
            if (mobile) {
              onMobileClose?.();
            }
          }}
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
        <ul
          className={` ${mobile ? (isOpen ? "max-h-250" : "max-h-0") : isOpen ? "block" : "hidden"} ${mobile
            ? "overflow-hidden transition-all duration-300"
            : "absolute bg-white p-3 rounded-2xl min-w-48 shadow-md"
            }  text-gray-500 ${dropdownMenu}`}
        >
          {item.children?.map((child) => (
            <NavLink
              key={child.id}
              item={child}
              level={level + 1}
              mobile={mobile}
              openItems={openItems}
              onMobileToggle={onMobileToggle}
              onMobileClose={onMobileClose}
            />
          ))}
        </ul>
      )}
    </li>
  );
}