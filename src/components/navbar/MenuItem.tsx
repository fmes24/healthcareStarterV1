import Link from "next/link";
import { MenuItem as MenuType } from "@/types/menu";

export interface MenuItemProps {
  item: MenuType;
}

export default function MenuItem({ item }: MenuItemProps) {
  const hasChildren = item.children && item.children.length > 0;
  return (
    <li className="relative group">
      <Link
        className="font-medium text-gray-500 hover:text-blue-600 transition px-5"
        href={item.href}
      >
        {item.title}
        {hasChildren && <span>▼</span>}
      </Link>
      {hasChildren && (
        <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg w-56 ">
          {item.children?.map((child) => (
            <li key={child.href}>
              <Link href={child.href}>{child.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
