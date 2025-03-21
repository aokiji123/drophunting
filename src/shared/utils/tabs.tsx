import { FiUser, FiUsers } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa6";
import { LuPercent } from "react-icons/lu";
import { GrBook } from "react-icons/gr";
import React from "react";
import { Progress } from "../icons/Progress";

export const tabs = [
  { name: "Profile", href: "/profile", icon: <FiUser size={24} /> },
  {
    name: "Subscriptions",
    href: "/subscriptions",
    icon: <FaDollarSign size={24} />,
  },
  { name: "Subaccounts", href: "/subaccounts", icon: <FiUsers size={24} /> },
  {
    name: "Progress",
    href: "/progress",
    icon: <Progress size={24} color="#8E8E8E" />,
  },
  { name: "Referal", href: "/referal", icon: <LuPercent size={24} /> },
  { name: "Guides", href: "/suggest-guide", icon: <GrBook size={24} /> },
];
