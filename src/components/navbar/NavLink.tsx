import Link from "next/link";
import { MenuDataType } from "@/types/menu";

interface NavLinkProps {
  item: MenuDataType; // here item prop receives on menu object from Navbar.tsx file
}

export default function NavLink({ item }: NavLinkProps) {
  const hasChildren = item.children && item.children.length > 0;
  return (
    <li>
      <Link href={item.href}>
        {item.title}
        {hasChildren && <span>▼</span>}
      </Link>
    </li>
  );
}
