import { FiUser, FiUsers } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa6";
import { LuPercent } from "react-icons/lu";
import { GrBook } from "react-icons/gr";
import React from "react";
import { Progress } from "../icons/Progress";
import { useTranslation } from "react-i18next";

export const tabs = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return [
    { name: t("tabs.profile"), href: "/profile", icon: <FiUser size={24} /> },
    {
      name: t("tabs.subscriptions"),
      href: "/subscriptions",
      icon: <FaDollarSign size={24} />,
    },
    {
      name: t("tabs.subaccounts"),
      href: "/subaccounts",
      icon: <FiUsers size={24} />,
    },
    {
      name: t("tabs.progress"),
      href: "/progress",
      icon: <Progress size={24} color="#8E8E8E" />,
    },
    {
      name: t("tabs.referal"),
      href: "/referal",
      icon: <LuPercent size={24} />,
    },
    {
      name: t("tabs.guides"),
      href: "/suggest-guide",
      icon: <GrBook size={24} />,
    },
  ];
};

export const subaccountTabs = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return [
    {
      name: t("subaccountTabs.profile"),
      href: "/profile",
      icon: <FiUser size={24} />,
    },
    {
      name: t("subaccountTabs.guides"),
      href: "/suggest-guide",
      icon: <GrBook size={24} />,
    },
  ];
};
