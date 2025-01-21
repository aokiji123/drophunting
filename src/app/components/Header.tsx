"use client";
import React, { useState } from "react";
import Image from "next/image";
import logoRectangle from "@/shared/assets/rectangle.png";
import { Badge } from "antd";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdFavoriteBorder, MdOutlineArrowDropDown } from "react-icons/md";
import starIcon from "@/shared/assets/icons/star.png";
import avatar from "@/shared/assets/avatar.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import ProfileModal from "@/app/components/modals/ProfileModal";
import BalanceModal from "@/app/components/modals/BalanceModal";
import NotificationsModal from "@/app/components/modals/NotificationsModal";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isBalanceModalOpen, setIsBalanceModalOpen] = useState(false);
  const [isNotificationsModalOpen, setIsNotificationsModalOpen] =
    useState(false);

  const toggleProfileModal = () => {
    setIsProfileModalOpen(!isProfileModalOpen);
  };

  const toggleBalanceModal = () => {
    setIsBalanceModalOpen(!isBalanceModalOpen);
  };

  const toggleNotificationsModal = () => {
    setIsNotificationsModalOpen(!isNotificationsModalOpen);
  };

  return (
    <header className="relative flex items-center justify-between h-[72px] px-[12px] sm:px-8">
      <div>
        <div className="flex items-center text-center">
          <Image className="mr-2" src={logoRectangle} alt="Logo Rectangle" />
          <p className="font-bold text-[20px] font-chakra">Drophunting</p>
        </div>
      </div>

      <div className="relative hidden xl:absolute xl:left-1/2 xl:transform xl:-translate-x-1/2 lg:block">
        <div className="flex items-center font-chakra font-bold gap-5 text-[16px]">
          <Link className="text-white hover:text-[#9EA0A6]" href="#">
            Guides
          </Link>
          <Link className="text-white hover:text-[#9EA0A6]" href="#">
            Blog
          </Link>
          <Link className="text-white hover:text-[#9EA0A6]" href="#">
            Store
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        <Badge
          dot
          onClick={toggleNotificationsModal}
          className="cursor-pointer"
        >
          <IoMdNotificationsOutline
            size={20}
            className="text-white hover:text-[#9EA0A6]"
          />
        </Badge>
        <MdFavoriteBorder
          onClick={() => router.push("/favorites")}
          size={20}
          className="text-white hover:text-[#9EA0A6] cursor-pointer"
        />
        <button className="hidden sm:flex items-center gap-1 bg-gradient-to-r from-[#C3FF361C] to-[#00AFB81C] p-2 rounded-lg h-[40px]">
          <Image src={starIcon} alt="Star icon" className="w-[16px] h-[16px]" />
          <h1 className="bg-gradient-to-r from-[#CBFF51] to-[#7EE39C] inline-block text-transparent bg-clip-text">
            Upgrade
          </h1>
        </button>
        <div
          className="hidden sm:flex items-center justify-center h-[40px] bg-[--dark-gray] py-[10px] pr-[17px] pl-[20px] rounded-[52px] cursor-pointer"
          onClick={toggleBalanceModal}
        >
          <p className="leading-[16px] font-semibold">$ 341.21</p>
          <MdOutlineArrowDropDown size={20} className="p-0" />
        </div>
        <div
          onClick={toggleProfileModal}
          className="flex items-center cursor-pointer"
        >
          <div className="relative w-[24px] sm:w-[28px] lg:w-[44px] h-[24px] sm:h-[28px] lg:h-[44px] rounded-full p-[1px] bg-gradient-to-b from-[#139EA5] to-[#BFFB5E]">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src={avatar}
                alt="Avatar"
                className="w-[24px] sm:w-[28px] lg:w-[44px] h-[24px] sm:h-[28px] lg:h-[44px] rounded-full"
              />
            </div>
          </div>
          <MdOutlineArrowDropDown size={20} className="p-0" />
        </div>
        <GiHamburgerMenu className="block lg:hidden" size={24} />
      </div>

      {isNotificationsModalOpen && (
        <div className="modal absolute w-[360px] sm:w-[400px] top-[75px] right-1/2 transform translate-x-1/2 md:transform-none md:right-[200px] h-[320px] md:w-[450px] bg-[#1C1E22] rounded-[12px] p-[20px] z-[30px] shadow-2xl overflow-y-scroll">
          <NotificationsModal
            toggleNotificationsModal={toggleNotificationsModal}
          />
        </div>
      )}

      {/* New notification */}
      {/*<div className="absolute w-[350px] top-[75px] right-1/2 transform translate-x-1/2 sm:transform-none sm:right-[50px] sm:w-[450px] bg-[#1C1E22] rounded-[12px] py-[12px] pr-[8px] pl-[12px] flex items-center gap-[20px]">*/}
      {/*  <div className="w-[28px] h-[28px] rounded-full bg-[#23252A] flex items-center justify-center">*/}
      {/*    <LuBell size={16} className="text-[#9EA0A6]" />*/}
      {/*  </div>*/}
      {/*  <p className="font-semibold leading-[18px]">*/}
      {/*    The $200 deposit was successfully funded*/}
      {/*  </p>*/}
      {/*  <IoMdClose size={20} className="hover:text-[#9EA0A6] cursor-pointer " />*/}
      {/*</div>*/}

      {isBalanceModalOpen && (
        <div className="hidden sm:block modal absolute top-[70px] right-[120px] shadow-2xl w-[320px] sm:w-[380px] h-[320px] rounded-[12px] z-100 bg-[#1C1E22] p-6">
          <BalanceModal toggleBalanceModal={toggleBalanceModal} />
        </div>
      )}

      {isProfileModalOpen && (
        <div
          className={`fixed top-0 right-0 z-50 ${
            isProfileModalOpen &&
            "h-screen bg-[#1C1E22] lg:absolute lg:top-[70px] lg:right-[50px] lg:bg-transparent lg:w-[300px] lg:h-auto lg:shadow-2xl"
          }`}
        >
          <ProfileModal toggleProfileModal={toggleProfileModal} />
        </div>
      )}
    </header>
  );
};

export default Header;
