import { menuLinks } from "@/data/menuData";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <div>
      <div>East Point</div>
      <nav>
        <ul>
          {menuLinks.map((menu) => (
            <NavLink key={menu.href} item={menu} /> // first item is prop name and this item will go now NavLink as prop
            // Navbar -> LOOPs through all menu ,   NavLink -> DISPLAYS one menu item
          ))}
        </ul>
      </nav>
    </div>
  );
}
