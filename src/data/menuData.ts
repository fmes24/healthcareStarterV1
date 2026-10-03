import { MenuDataType } from "@/types/menu";

export const menuLinks: MenuDataType[] = [
  {
    id: "home",
    title: "Home",
    href: "/",
  },

  {
    id: "about",
    title: "About",
    href: "/about",
  },

  {
    id: "departments",
    title: "Departments",
    children: [
      {
        id: "neurology",
        title: "Neurology",
        href: "/departments/neurology",
      },

      {
        id: "cardiology",
        title: "Cardiology",
        href: "/departments/cardiology",
      },

      {
        id: "surgery",
        title: "Surgery",
        children: [
          {
            id: "general-surgery",
            title: "General Surgery",
            children: [
              {
                id: "manual-surgery",
                title: "Manual Surgery",
                href: "/departments/surgery/general-surgery/manual",
              },

              {
                id: "robotic-surgery",
                title: "Robotic Surgery",
                href: "/departments/surgery/general-surgery/robotics",
              },
            ],
          },

          {
            id: "orthopedic-surgery",
            title: "Orthopedic Surgery",
            href: "/departments/surgery/orthopedic-surgery",
          },
        ],
      },
    ],
  },

  {
    id: "services",
    title: "Services",
    children: [
      {
        id: "opd-services",
        title: "OPD Services",
        href: "/services/opd",
      },

      {
        id: "lab-services",
        title: "Lab Services",
        href: "/services/lab",
      },

      {
        id: "family-services",
        title: "Family Services",
        href: "/services/family",
      },
    ],
  },

  {
    id: "doctors",
    title: "Doctors",
    href: "/doctors",
  },

  {
    id: "blog",
    title: "Blog",
    href: "/blog",
  },

  {
    id: "contact",
    title: "Contact",
    href: "/contact",
  },
];