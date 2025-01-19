"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { CustomSwitch } from "@/shared/components/CustomSwitch";

import { BiLogoTelegram } from "react-icons/bi";
import { RiKey2Line } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
import avatar from "@/shared/assets/avatar.png";
import authenticator from "@/shared/assets/icons/authenticator.png";
import cancel from "@/shared/assets/icons/cancel.png";
import { CustomSelect } from "@/shared/components/CustomSelect";
import { CustomCheckbox } from "@/shared/components/CustomCheckbox";
import Link from "next/link";
import useAuthContext from "@/shared/hooks/useAuthContext";
import Loading from "@/shared/components/Loading";
import { tabs } from "@/shared/utils/tabs";

const Profile = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const [language, setLanguage] = useState("🇬🇧English");
  const [time, setTime] = useState("UTC+03:00");
  const [isTelegramNotificationsEnabled, setIsTelegramNotificationsEnabled] =
    useState(true);

  const { user, loading } = useAuthContext();
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      setIsPageLoading(false);
    }
  }, [loading]);

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

  if (isPageLoading) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-black text-white">
      <Header />

      <main className="container flex-col flex items-center mx-auto justify-center lg:flex-row overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-center w-full p-3">
          <nav className="lg:w-[15%] w-full font-chakra font-bold leading-[20px] text-[#8E8E8E] m-0 lg:mr-[40px]">
            <ul className="no-scrollbar overflow-scroll w-full lg:w-[115%] xl:w-[100%] border-b-[1px] border-[#27292D] lg:border-none flex flex-row lg:flex lg:flex-col mb-5">
              {tabs.map((tab) => (
                <li
                  key={tab.name}
                  className={`p-[6px] lg:px-[16px] lg:py-[12px] lg:rounded-[12px] lg:mb-1 cursor-pointer ${
                    isActive(tab.href)
                      ? "border-b-[1px] border-white lg:border-none lg:bg-[--dark-gray] text-white"
                      : "hover:border-b-[1px] border-white lg:border-none lg:hover:bg-[--dark-gray] hover:text-white"
                  }`}
                >
                  <Link
                    href={tab.href}
                    className="flex items-center gap-3 text-[16px]"
                  >
                    <p className="hidden lg:block">{tab.icon}</p>
                    {tab.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <section className="min-h-[1300px] w-full lg:w-[85%] bg-[--dark-gray] p-[32px] rounded-[16px]">
            <div className="flex-col flex sm:items-center sm:flex-row border-4 border-transparent">
              <Image
                src={avatar}
                alt="Avatar"
                className="w-[64px] h-[64px] md:w-[73px] md:h-[73px] lg:w-[83px] lg:h-[83px] rounded-[22px]"
              />
              <div className="py-[10px] sm:p-[24px]">
                <p className="text-[20px] sm:text-[28px] md:text-[30px] font-semibold leading-[28px] mb-2">
                  {user?.name}
                </p>
                <p className="leading-[14px] text-[#8E8E8E]">{user?.email}</p>
              </div>
            </div>
            <div className="w-full sm:w-[550px] mt-[32px]">
              <div className="flex-col flex md:flex-row md:items-center md:justify-between mb-3">
                <p className="mb-1 md:mb-0 font-semibold">Имя</p>
                <input
                  readOnly
                  value="Drophunter3000"
                  className="max-w-[350px] sm:w-[350px] bg-[#212226] border-[1px] border-[#212226] py-[12px] px-[16px] rounded-[14px] focus:border-[1px] focus:border-gray-400 focus:outline-none"
                />
              </div>
              <div className="flex-col flex md:flex-row md:items-center md:justify-between mb-3">
                <p className="mb-1 md:mb-0 font-semibold">Кошелек</p>
                <p className="md:py-[12px] md:px-[16px] w-[350px]">
                  233ssjJSK...219D
                </p>
              </div>
              <div className="flex-col flex md:flex-row md:items-center md:justify-between mb-3">
                <p className="mb-1 md:mb-0 font-semibold">Язык</p>
                <CustomSelect
                  value={language}
                  onChange={handleLanguageChange}
                  options={[
                    { label: "🇬🇧 English", value: "🇬🇧English" },
                    { label: "🇷🇺 Russian", value: "🇷🇺Russian" },
                  ]}
                />
              </div>
              <div className="flex-col flex md:flex-row md:items-center md:justify-between mb-3">
                <p className="mb-1 md:mb-0 font-semibold">Worldtime</p>
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
              <div className="flex gap-1 mb-4 flex-col justify-start">
                <CustomCheckbox checked={true} label="Change in favorites" />
                <CustomCheckbox checked={true} label="New guides" />
                <CustomCheckbox checked={false} label="New articles" />
                <CustomCheckbox
                  checked={false}
                  label="Deadlines in favorites"
                />
              </div>
            </div>

            <div className="flex gap-4 font-chakra mt-[40px]">
              <BiLogoTelegram size={20} className="flex-shrink-0 text-white" />
              <div>
                <p className="text-[16px] font-semibold">
                  Telegram notifications
                </p>
                <p className="max-w-[350px] sm:w-[350px] leading-[18px] text-[#949392]">
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
                <div className="flex-col lg:flex-row flex lg:items-center lg:justify-between w-[600px]">
                  <div className="flex gap-4 mb-3">
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
                      <p className="w-[250px] sm:w-full leading-[18px] text-[#949392]">
                        Use your email to protect your account and transactions
                      </p>
                    </div>
                  </div>
                  <button className="w-[100px] bg-[#2C2D31] py-[8px] px-[20px] ml-[35px] rounded-[10px]">
                    Change
                  </button>
                </div>
              </div>
              <div className="mb-[40px]">
                <p className="text-[18px] font-bold leading-[18px] mb-6">
                  Two-Factor Authentication (2FA)
                </p>
                <div className="flex-col lg:flex-row flex lg:items-center lg:justify-between w-[600px]">
                  <div className="mb-3 flex gap-4">
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
                      <p className="w-[250px] sm:w-full leading-[18px] text-[#949392]">
                        Use your email to protect your account and transactions
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-5">
                    <button>
                      <div className="flex items-center gap-1 ml-[35px]">
                        <IoIosCloseCircle size={16} />
                        <p className="text-[#C2C0BD] leading-[18px]">Off</p>
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
