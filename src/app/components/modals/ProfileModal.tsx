import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { FaDollarSign, FaPowerOff } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { LuPercent } from "react-icons/lu";
import { GrBook } from "react-icons/gr";
import useAuthContext from "@/shared/hooks/useAuthContext";
import { useRouter } from "next/navigation";
import avatar from "../../../../public/assets/avatar.png";
import ru from "../../../../public/assets/icons/ru.png";
import en from "../../../../public/assets/icons/en.png";
import Link from "next/link";
import { CustomSelect } from "@/shared/components/CustomSelect";
import { useTranslation } from "react-i18next";

type ProfileModalType = {
  toggleProfileModal: () => void;
};

const tabs = [
  {
    name: "Subscriptions",
    href: "/subscriptions",
    icon: <FaDollarSign size={24} className="mr-2" />,
  },
  {
    name: "Subaccounts",
    href: "/subaccounts",
    icon: <FiUsers size={24} className="mr-2.5" />,
  },
  {
    name: "Referal",
    href: "/referal",
    icon: <LuPercent size={24} className="mr-2.5" />,
  },
  {
    name: "Guides",
    href: "/guides",
    icon: <GrBook size={24} className="mr-2.5" />,
  },
];

const ProfileModal = ({ toggleProfileModal }: ProfileModalType) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("English");
  const { logout, user } = useAuthContext();
  const router = useRouter();

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);

    if (selectedLanguage === "English") {
      i18n.changeLanguage("en");
    } else if (selectedLanguage === "Russian") {
      i18n.changeLanguage("ru");
    }
  };

  const handleLogout = async () => {
    await logout();
    router.push("/auth/login");
  };

  return (
    <div className="h-full bg-[#1C1E22] lg:relative lg:h-auto lg:w-[300px] lg:p-0 py-5 rounded-[12px] overflow-y-auto">
      <button
        className="block lg:hidden absolute top-3 right-3 text-white"
        onClick={toggleProfileModal}
      >
        <IoMdClose size={24} className="hover:text-[#9EA0A6] cursor-pointer" />
      </button>
      <div className="p-4">
        <div className="flex items-center gap-3">
          <Image
            src={avatar}
            alt="User Avatar"
            className="w-[40px] h-[40px] rounded-full"
          />
          <div>
            <p className="font-bold">{user?.name}</p>
            <p className="text-gray-400 text-sm truncate">{user?.email}</p>
          </div>
        </div>
      </div>
      <hr className="border-0 h-px bg-[#27292D]" />
      <div className="p-4">
        <ul className="space-y-3">
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className="hover:bg-[#24262A] rounded-lg cursor-pointer flex items-center gap-2 px-[16px] py-[8px]"
            >
              {tab.icon}
              <Link
                href={tab.href}
                className="text-[16px] font-semibold leading-[20px]"
              >
                {tab.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <hr className="border-0 h-px bg-[#27292D]" />
      <div className="p-4">
        <ul className="space-y-3">
          <li className="hover:bg-[#24262A] rounded-lg cursor-pointer flex items-center gap-3">
            <CustomSelect
              value={language}
              onChange={handleChange}
              modal
              options={[
                { label: "English", value: "English", image: en },
                { label: "Russian", value: "Russian", image: ru },
              ]}
            />
          </li>
          <li
            className="hover:bg-[#24262A] rounded-lg cursor-pointer flex items-center gap-5 px-[16px] py-[8px]"
            onClick={handleLogout}
          >
            <FaPowerOff size={24} />
            <p className="text-[16px] font-semibold leading-[20px]">Logout</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileModal;
