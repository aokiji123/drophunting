import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import {
  FaDollarSign,
  FaPowerOff,
  FaCheck,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { LuPercent } from "react-icons/lu";
import { GrBook } from "react-icons/gr";
import { useRouter } from "next/navigation";
import avatar from "../../../../public/assets/avatar.png";
import ru from "../../../../public/assets/icons/ru.png";
import en from "../../../../public/assets/icons/en.png";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import useStore from "@/shared/store";
import { MdOutlineArrowDropDown } from "react-icons/md";

type ProfileModalType = {
  toggleProfileModal: () => void;
  openBalanceModal: () => void;
};

const tabs = [
  {
    name: "Subscriptions",
    href: "/subscriptions",
    icon: <FaDollarSign size={20} className="mr-2" />,
  },
  {
    name: "Subaccounts",
    href: "/subaccounts",
    icon: <FiUsers size={20} className="mr-2.5" />,
  },
  {
    name: "Referal",
    href: "/referal",
    icon: <LuPercent size={20} className="mr-2.5" />,
  },
  {
    name: "Guides",
    href: "/guides",
    icon: <GrBook size={20} className="mr-2.5" />,
  },
];

const languages = [
  { code: "ru", name: "Russian", flag: ru },
  { code: "en", name: "English", flag: en },
];

const ProfileModal = ({
  toggleProfileModal,
  openBalanceModal,
}: ProfileModalType) => {
  const { i18n } = useTranslation();
  const { logout, user } = useStore();
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const handleLanguageChange = (code: string) => {
    setSelectedLanguage(code);
    i18n.changeLanguage(code);
    setIsLanguageDropdownOpen(false);
  };

  const handleLogout = async () => {
    await logout();
    router.push("/auth/login");
  };

  const handleBalanceClick = () => {
    toggleProfileModal();
    openBalanceModal();
  };

  return (
    <div className="h-full bg-[#1C1E22] relative lg:w-[299px] rounded-[12px]">
      <button
        className="block lg:hidden absolute top-3 right-3 text-white"
        onClick={toggleProfileModal}>
        <IoMdClose size={24} className="hover:text-[#9EA0A6] cursor-pointer" />
      </button>
      <div className="p-[8px]">
        <div
          className="flex items-center gap-3 p-[12px] pt-[8px] cursor-pointer"
          onClick={() => router.push("/profile")}>
          <Image
            quality={100}
            src={
              typeof user?.avatar === "string"
                ? user.avatar.startsWith("https")
                  ? user.avatar
                  : `https://app.esdev.tech${user.avatar}`
                : avatar
            }
            width={40}
            height={40}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover object-center"
          />
          <div className="w-[207px] pr-[15px] lg:p-0">
            <p className="font-bold truncate">{user?.name}</p>
            <p className="text-gray-400 text-sm truncate">{user?.email}</p>
          </div>
        </div>
        {user && (
          <div
            className="flex lg:hidden items-center justify-center h-[40px] bg-[#24262A] py-[10px] pr-[17px] pl-[20px] rounded-[52px] cursor-pointer mt-[8px] mb-[16px]"
            onClick={handleBalanceClick}>
            <p className="leading-[16px] font-semibold">$ {user.balance}</p>
            <MdOutlineArrowDropDown size={20} className="p-0" />
          </div>
        )}
      </div>
      <hr className="border-0 h-px bg-[#27292D]" />
      <div className="p-[8px]">
        <ul className="space-y-[2px]">
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className="hover:bg-[#24262A] rounded-[12px] cursor-pointer flex items-center p-[12px] lg:px-[12px] lg:py-[8px] h-[40px]">
              {tab.icon}
              <Link
                href={tab.href}
                className="text-[14px] font-semibold leading-[20px]">
                {tab.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <hr className="border-0 h-px bg-[#27292D]" />
      <div className="p-[8px]">
        <div className="relative">
          <button
            className="w-full h-[40px] bg-transparent hover:bg-[#24262A] flex items-center justify-between p-[12px] rounded-[12px]"
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}>
            <div className="flex items-center gap-[12px]">
              <Image
                src={
                  languages.find((lang) => lang.code === selectedLanguage)
                    ?.flag || en
                }
                alt={selectedLanguage}
                className="h-[20px] w-[20px] object-cover rounded-full"
              />
              <p className="text-[14px] font-semibold">
                {languages.find((lang) => lang.code === selectedLanguage)?.name}
              </p>
            </div>
            {isLanguageDropdownOpen ? (
              <FaAngleUp size={16} className="text-[#8E8E8E]" />
            ) : (
              <FaAngleDown size={16} className="text-[#8E8E8E]" />
            )}
          </button>
          {isLanguageDropdownOpen && (
            <div className="absolute left-0 mt-[2px] w-full bg-[#141518] p-[4px] rounded-[12px] shadow-lg z-50 space-y-[2px]">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className={`flex items-center justify-between p-[12px] rounded-[12px] cursor-pointer hover:bg-[#181C20] ${
                    selectedLanguage === lang.code && `bg-[#181C20]`
                  }`}
                  onClick={() => handleLanguageChange(lang.code)}>
                  <div className="flex items-center gap-[12px]">
                    <Image
                      src={lang.flag}
                      alt={lang.name}
                      className="h-[20px] w-[20px] object-cover rounded-full"
                    />
                    <p className="text-[14px] font-semibold">{lang.name}</p>
                  </div>
                  {selectedLanguage === lang.code && (
                    <FaCheck size={16} className="text-[#CBFF51]" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <li
          className="hover:bg-[#24262A] rounded-lg cursor-pointer flex items-center gap-[12px] p-[12px] pb-[16px] lg:px-[12px] lg:py-[8px] h-[40px]"
          onClick={handleLogout}>
          <FaPowerOff size={24} />
          <p className="text-[14px] font-semibold leading-[20px]">Logout</p>
        </li>
      </div>
    </div>
  );
};

export default ProfileModal;
