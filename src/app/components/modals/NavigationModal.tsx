import React from "react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import starIcon from "../../../../public/assets/icons/star.png";
import { PiXLogo } from "react-icons/pi";
import { RiTelegram2Fill } from "react-icons/ri";

type ProfileModalType = {
  toggleNavigationModal: () => void;
  openPlansModal: () => void;
};

const tabs = [
  {
    name: "Guides",
    href: "/guides",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Store",
    href: "/store",
  },
];

const NavigationModal = ({
  toggleNavigationModal,
  openPlansModal,
}: ProfileModalType) => {
  const { t } = useTranslation();

  const handlePlansClick = () => {
    toggleNavigationModal();
    openPlansModal();
  };

  return (
    <div className="h-full bg-[#1C1E22] relative lg:w-[299px] rounded-[12px] px-[12px] pt-[32px]">
      <button
        className="block lg:hidden absolute top-3 right-3 text-white"
        onClick={toggleNavigationModal}>
        <IoMdClose size={24} className="hover:text-[#9EA0A6] cursor-pointer" />
      </button>
      <div className="w-[275px] flex flex-col gap-[23px]">
        <ul className="space-y-[2px]">
          {tabs.map((tab) => (
            <Link key={tab.name} href={tab.href} className="block w-full">
              <li className="hover:bg-[#24262A] rounded-[12px] cursor-pointer flex items-center p-[12px] lg:px-[12px] lg:py-[8px] h-[40px]">
                <span className="text-[16px] font-semibold leading-[18px]">
                  {tab.name}
                </span>
              </li>
            </Link>
          ))}
        </ul>
        <button
          className="flex w-full items-center gap-1 bg-gradient-to-r from-[#C3FF361C] to-[#00AFB81C] p-2 rounded-lg h-[40px] justify-center"
          onClick={handlePlansClick}>
          <Image src={starIcon} alt="Star icon" className="w-[16px] h-[16px]" />
          <p className="bg-gradient-to-r from-[#CBFF51] to-[#7EE39C] inline-block text-transparent bg-clip-text">
            {t("upgrade")}
          </p>
        </button>
        <div className="flex gap-2">
          <Link href="https://www.google.com" target="_blank">
            <div className="cursor-pointer">
              <RiTelegram2Fill size={28} />
            </div>
          </Link>
          <Link href="https://www.google.com" target="_blank">
            <div className="cursor-pointer">
              <PiXLogo size={28} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationModal;
