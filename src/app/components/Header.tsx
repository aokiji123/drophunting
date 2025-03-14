"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logoRectangle from "../../../public/assets/rectangle.png";
import { Badge } from "antd";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdFavoriteBorder, MdOutlineArrowDropDown } from "react-icons/md";
import starIcon from "../../../public/assets/icons/star.png";
import avatar from "../../../public/assets/avatar.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import ProfileModal from "@/app/components/modals/ProfileModal";
import BalanceModal from "@/app/components/modals/BalanceModal";
import NotificationsModal from "@/app/components/modals/NotificationsModal";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { PlansModal } from "./modals/PlansModal";
import useAuth from "@/shared/hooks/useAuth";

const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const { user, loading } = useAuth();
  const [balance, setBalance] = useState<string>("0");

  useEffect(() => {
    if (user && user.balance) {
      setBalance(user.balance);
    }
  }, [user]);

  const isActive = (href: string) => {
    if (href === "/guides") {
      return pathname.startsWith("/guides");
    }
    if (href === "/blog") {
      return pathname.startsWith("/blog");
    }
    if (href === "/store") {
      return pathname.startsWith("/store");
    }
    return pathname === href;
  };

  const tabs = [
    { name: t("guides"), href: "/guides" },
    {
      name: t("blog"),
      href: "/blog",
    },
    { name: t("store"), href: "/store" },
  ];

  const [openModal, setOpenModal] = useState<string | null>(null);

  const toggleModal = (modalName: string) => {
    setOpenModal((prev) => (prev === modalName ? null : modalName));
  };

  const toggleProfileModal = () => toggleModal("profile");
  const toggleBalanceModal = () => toggleModal("balance");
  const toggleNotificationsModal = () => toggleModal("notifications");
  const togglePlansModal = () => toggleModal("plans");

  if (loading) {
    return (
      <div className="bg-[#101114] text-white">
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      </div>
    );
  }

  return (
    <header className="relative flex items-center justify-between h-[72px] px-[12px] sm:px-8">
      <div>
        <div
          className="flex items-center text-center cursor-pointer"
          onClick={() => router.push("/guides")}
        >
          <Image className="mr-2" src={logoRectangle} alt="Logo Rectangle" />
          <p className="font-bold text-[20px] font-chakra">Drophunting</p>
        </div>
      </div>

      <div className="relative hidden xl:absolute xl:left-1/2 xl:transform xl:-translate-x-1/2 lg:block">
        <div className="flex items-center font-chakra font-bold gap-5 text-[16px]">
          {tabs.map((tab) => (
            <div key={tab.name}>
              <Link
                className={`${
                  isActive(tab.href)
                    ? "text-[#CBFF51]"
                    : "text-white hover:text-[#9EA0A6]"
                }`}
                href={tab.href}
              >
                {tab.name}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        <Badge
          dot
          onClick={toggleNotificationsModal}
          className="cursor-pointer"
        >
          <IoMdNotificationsOutline size={20} className="text-[#9EA0A6]" />
        </Badge>
        <div>
          <MdFavoriteBorder
            onClick={() => router.push("/favorites")}
            size={20}
            className="text-[#9EA0A6] cursor-pointer"
          />
        </div>
        <button
          className="hidden lg:flex items-center gap-1 bg-gradient-to-r from-[#C3FF361C] to-[#00AFB81C] p-2 rounded-lg h-[40px]"
          onClick={togglePlansModal}
        >
          <Image src={starIcon} alt="Star icon" className="w-[16px] h-[16px]" />
          <p className="bg-gradient-to-r from-[#CBFF51] to-[#7EE39C] inline-block text-transparent bg-clip-text">
            {t("upgrade")}
          </p>
        </button>
        {user && (
          <div
            className="hidden sm:flex items-center justify-center h-[40px] bg-[--dark-gray] py-[10px] pr-[17px] pl-[20px] rounded-[52px] cursor-pointer"
            onClick={toggleBalanceModal}
          >
            <p className="leading-[16px] font-semibold">$ {balance}</p>
            <MdOutlineArrowDropDown size={20} className="p-0" />
          </div>
        )}
        <div
          onClick={toggleProfileModal}
          className="flex items-center cursor-pointer"
        >
          <div className="relative w-[28px] sm:w-[32px] lg:w-[48px] h-[28px] sm:h-[32px] lg:h-[48px] rounded-full p-[2px] bg-gradient-to-b from-[#139EA5] to-[#BFFB5E]">
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <Image
                src={avatar}
                alt="Avatar"
                className="w-full h-full rounded-full border-[2px] border-[#101114]"
              />
            </div>
          </div>

          <MdOutlineArrowDropDown size={20} className="p-0" />
        </div>
        <div>
          <GiHamburgerMenu className="block lg:hidden" size={24} />
        </div>
      </div>

      {openModal === "notifications" && (
        <div className="modal absolute max-w-[359px] w-full mx-auto top-[70px] right-1/2 transform translate-x-1/2 md:transform-none md:right-[200px] h-[404px] md:h-[328px] md:max-w-[450px] md:w-[450px] bg-[#1C1E22] rounded-[12px] pl-[5px] pr-[5px] py-[20px] z-[30px] shadow-2xl overflow-y-auto">
          <NotificationsModal
            toggleNotificationsModal={toggleNotificationsModal}
          />
        </div>
      )}

      {openModal === "balance" && (
        <div className="absolute top-0 lg:right-0 right-1/2 translate-x-1/2 z-50 sm:block hidden">
          <div className="absolute top-[70px] lg:right-[330px] right-1/2 translate-x-1/2 shadow-2xl w-[351px] md:w-[381px] md:h-[326px] rounded-[12px] bg-[#1C1E22] p-6">
            <BalanceModal toggleBalanceModal={toggleBalanceModal} />
          </div>
        </div>
      )}
      {openModal === "balance" && (
        <div className="hidden fixed sm:block lg:hidden top-0 left-0 w-full h-full bg-black opacity-50 z-40" />
      )}

      {openModal === "profile" && (
        <div
          className={`fixed top-0 right-0 z-50 ${
            openModal === "profile" &&
            "h-screen bg-[#1C1E22] lg:absolute lg:top-[70px] lg:right-[50px] lg:bg-transparent lg:w-[300px] lg:h-auto lg:shadow-2xl"
          }`}
        >
          <ProfileModal toggleProfileModal={toggleProfileModal} />
        </div>
      )}
      {openModal === "profile" && (
        <div className="fixed lg:hidden top-0 left-0 w-full h-full bg-black opacity-50 z-40" />
      )}

      {openModal === "plans" && (
        <PlansModal togglePlansModal={togglePlansModal} />
      )}
    </header>
  );
};

export default Header;
