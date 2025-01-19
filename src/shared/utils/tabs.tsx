import { FiUser, FiUsers } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa6";
import { LuPercent } from "react-icons/lu";
import { GrBook } from "react-icons/gr";
import React from "react";

export const tabs = [
  { name: "Profile", href: "/profile", icon: <FiUser size={24} /> },
  {
    name: "Subscriptions",
    href: "/subscriptions",
    icon: <FaDollarSign size={24} />,
  },
  { name: "Subaccounts", href: "/subaccounts", icon: <FiUsers size={24} /> },
  { name: "Referal", href: "/referal", icon: <LuPercent size={24} /> },
  { name: "Guides", href: "/guides", icon: <GrBook size={24} /> },
];
