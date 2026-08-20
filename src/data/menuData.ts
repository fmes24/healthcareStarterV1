import { MenuItem } from "@/types/menu";

export const menuItems: MenuItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "OPD Services",
        href: "/services/opd",
      },
      {
        title: "Lab Services",
        href: "/services/lab",
      },
      {
        title: "Family Services",
        href: "/services/family",
      },
    ],
  },
  {
    title: "Departments",
    href: "/departments",
    children: [
      {
        title: "Neurology",
        href: "/departments/neurology",
      },
      {
        title: "Cardiology",
        href: "/departments/cardiology",
      },
      {
        title: "Surgery",
        href: "/departments/surgery",
      },
    ],
  },
  {
    title: "Doctors",
    href: "/doctors",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
