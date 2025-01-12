"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Header from "@/app/profile/components/Header";
import Footer from "@/app/profile/components/Footer";
import { CustomSwitch } from "@/shared/components/CustomSwitch";

import { BiLogoTelegram } from "react-icons/bi";
import { RiKey2Line } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
import avatar from "@/shared/assets/avatar.png";
import authenticator from "@/shared/assets/icons/authenticator.png";
import cancel from "@/shared/assets/icons/cancel.png";
import { CustomSelect } from "@/shared/components/CustomSelect";
import { CustomCheckbox } from "@/shared/components/CustomCheckbox";

const tabs = [
  { name: "Profile", href: "/profile" },
  { name: "Subscriptions", href: "/subscriptions" },
  { name: "Subaccounts", href: "/subaccounts" },
  { name: "Referal", href: "/referal" },
  { name: "Guides", href: "/guides" },
];

const Profile = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const [language, setLanguage] = useState("🇬🇧English");
  const [time, setTime] = useState("UTC+03:00");
  const [isTelegramNotificationsEnabled, setIsTelegramNotificationsEnabled] =
    useState(true);

  const handleLanguageChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLanguage(event.target.value);
  };

  const handleTimeChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTime(event.target.value);
  };

  const handleTelegramSwitchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setIsTelegramNotificationsEnabled(event.target.checked);
  };

  return (
    <div className="bg-black text-white">
      <Header />

      <main className="container mx-auto flex">
        <nav className="w-[15%] mr-[50px] font-chakra font-bold leading-[20px] text-[#8E8E8E]">
          <ul>
            {tabs.map((tab) => (
              <li
                key={tab.name}
                className={`px-[16px] py-[12px] rounded-[12px] mb-1 cursor-pointer ${
                  isActive(tab.href)
                    ? "bg-[--dark-gray] text-white"
                    : "hover:bg-[--dark-gray] hover:text-white"
                }`}
              >
                <a href={tab.href}>{tab.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <section className="h-[1300px] w-[85%] bg-[--dark-gray] p-[32px] rounded-[16px]">
          <div className="flex items-center">
            <Image
              src={avatar}
              alt="Avatar"
              className="w-[83px] h-[83px] rounded-[22px]"
            />
            <div className="p-[24px]">
              <p className="text-[28px] font-semibold leading-[28px] mb-2">
                Drophunter3000
              </p>
              <p className="text-[14px] leading-[14px] text-[#8E8E8E]">
                maxhunter3102@gmail.com
              </p>
            </div>
          </div>
          <div className="w-[550px] mt-[32px]">
            <div className="flex items-center justify-between mb-3">
              <p>Имя</p>
              <input
                readOnly
                value="Drophunter3000"
                className="w-[350px] bg-[#212226] border-[1px] border-[#212226] py-[12px] px-[16px] rounded-[14px] focus:border-[1px] focus:border-gray-400 focus:outline-none"
              />
            </div>
            <div className="flex items-center justify-between mb-3">
              <p>Кошелек</p>
              <p className="py-[12px] px-[16px] w-[350px] ">233ssjJSK...219D</p>
            </div>
            <div className="flex items-center justify-between mb-3">
              <p>Язык</p>
              <CustomSelect
                value={language}
                onChange={handleLanguageChange}
                options={[
                  { label: "🇬🇧 English", value: "🇬🇧English" },
                  { label: "🇷🇺 Russian", value: "🇷🇺Russian" },
                ]}
              />
            </div>
            <div className="flex items-center justify-between mb-3">
              <p>Worldtime</p>
              <CustomSelect
                value={time}
                onChange={handleTimeChange}
                options={[
                  { label: "UTC+03:00", value: "UTC+03:00" },
                  { label: "UTC+04:00", value: "UTC+04:00" },
                  { label: "UTC+05:00", value: "UTC+05:00" },
                ]}
              />
            </div>
          </div>

          <hr className="my-[45px] border-0 h-px bg-[#27292D]" />

          <div className="font-chakra mb-6">
            <p className="text-[20px] font-bold leading-[16px] mb-6">
              Notifications
            </p>
            <div className="flex gap-3 mb-4 flex-col justify-start">
              <CustomCheckbox checked={true} label="Change in favorites" />
              <CustomCheckbox checked={true} label="New guides" />
              <CustomCheckbox checked={false} label="New articles" />
              <CustomCheckbox checked={false} label="Deadlines in favorites" />
            </div>
          </div>

          <div className="flex w-[460px] gap-4 font-chakra mt-[40px]">
            <BiLogoTelegram size={20} className="flex-shrink-0 text-white" />
            <div>
              <p className="text-[16px] font-semibold">
                Telegram notifications
              </p>
              <p className="text-[14px] leading-[18px] text-[#949392]">
                Subscribe to our bot to receive notifications about changes to
                favorite guides, publication of new guides and articles.
              </p>
            </div>
            <CustomSwitch
              checked={isTelegramNotificationsEnabled}
              onChange={handleTelegramSwitchChange}
            />
          </div>

          <hr className="my-[45px] border-0 h-px bg-[#27292D]" />

          <div className="font-chakra">
            <div className="mb-[40px]">
              <p className="text-[20px] font-bold leading-[16px] mb-6">
                Security
              </p>
              <div className="flex items-center justify-between w-[600px]">
                <div className="flex gap-4">
                  <div>
                    <RiKey2Line
                      size={20}
                      className="flex-shrink-0 text-white"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[15px] leading-[24px] tracking-[-0.18px]">
                      Change password
                    </p>
                    <p className="text-[14px] leading-[18px] text-[#949392]">
                      Use your email to protect your account and transactions
                    </p>
                  </div>
                </div>
                <button className="w-[100px] bg-[#2C2D31] py-[8px] px-[20px] rounded-[10px]">
                  Change
                </button>
              </div>
            </div>
            <div className="mb-[40px]">
              <p className="text-[18px] font-bold leading-[18px] mb-6">
                Two-Factor Authentication (2FA)
              </p>
              <div className="flex items-center justify-between w-[600px]">
                <div className="flex gap-4">
                  <div>
                    <Image
                      src={authenticator}
                      alt="Authenticator"
                      className="flex-shrink-0 text-white w-[20px] h-[20px]"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[15px] leading-[24px] tracking-[-0.18px]">
                      Authenticator App
                    </p>
                    <p className="text-[14px] leading-[18px] text-[#949392]">
                      Use your email to protect your account and transactions
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-5">
                  <button>
                    <div className="flex items-center gap-1">
                      <IoIosCloseCircle size={16} />
                      <p className="text-[#C2C0BD] text-[14px] leading-[18px]">
                        Off
                      </p>
                    </div>
                  </button>
                  <button className="w-[100px] bg-[#2C2D31] py-[8px] px-[20px] rounded-[10px]">
                    Manage
                  </button>
                </div>
              </div>
            </div>

            <hr className="mb-[45px] mt-[60px] border-0 h-px bg-[#27292D]" />

            <button className="bg-[#2C2D31] py-[8px] px-[20px] rounded-[10px] flex items-center gap-3 font-chakra font-semibold">
              <div>
                <Image
                  src={cancel}
                  alt="Cancel icon"
                  className="w-[16px] h-[16px]"
                />
              </div>
              <div>Delete account</div>
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
