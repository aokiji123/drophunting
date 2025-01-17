import React, { useState } from "react";
import Image from "next/image";
import logoRectangle from "@/shared/assets/rectangle.png";
import { Badge } from "antd";
import { IoMdClose, IoMdNotificationsOutline } from "react-icons/io";
import {
  MdFavoriteBorder,
  MdOutlineArrowDropDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import starIcon from "@/shared/assets/icons/star.png";
import { FormControl, MenuItem, Select } from "@mui/material";
import avatar from "@/shared/assets/avatar.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { LuPercent } from "react-icons/lu";
import { GrBook } from "react-icons/gr";
// import { GrLanguage } from "react-icons/gr";
import { FaPowerOff } from "react-icons/fa6";
import Link from "next/link";
import useAuthContext from "@/shared/hooks/useAuthContext";
import { useRouter } from "next/navigation";

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

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  const [inputBalance, setInputBalance] = useState("$ 100.00");
  const [language, setLanguage] = useState("en");
  const [selected, setSelected] = useState("Fiat");
  const router = useRouter();
  const { logout, user } = useAuthContext();

  const handleSwitch = (type: string) => {
    setSelected(type);
  };

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleBudgetModal = () => {
    setIsBudgetModalOpen(!isBudgetModalOpen);
  };

  const handleInputBalanceChange = (e) => {
    setInputBalance(e.target.value);
  };

  const handleLogout = async () => {
    await logout();
    router.push("/auth/login");
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
        <div className="flex items-center font-chakra font-bold gap-5">
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
        <Badge dot>
          <IoMdNotificationsOutline
            size={20}
            className="text-white hover:text-[#9EA0A6] cursor-pointer"
          />
        </Badge>
        <MdFavoriteBorder
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
          onClick={toggleBudgetModal}
        >
          <p className="text-[14px] leading-[16px] font-semibold">$ 341.21</p>
          <MdOutlineArrowDropDown size={20} className="p-0" />
        </div>
        <div onClick={toggleModal} className="flex items-center cursor-pointer">
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

      {isBudgetModalOpen && (
        <div className="hidden sm:block absolute top-[70px] right-[120px] shadow-2xl w-[320px] sm:w-[380px] h-[320px] rounded-[12px] z-60 bg-[#1C1E22] p-6">
          <button
            className="top-10 absolute sm:top-5 right-5"
            onClick={toggleBudgetModal}
          >
            <IoMdClose
              size={24}
              className="hover:text-[#9EA0A6] cursor-pointer"
            />
          </button>
          <div>
            <p className="text-[18x] font-bold leading-[20px]">
              Top Up Balance
            </p>
            <div className="mt-5">
              <p className="text-[14px] font-semibold leading-[16px]">
                Currency type
              </p>
              <div className="flex items-center bg-[#292B2F] rounded-full p-1 mt-2 w-[155px]">
                <button
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selected === "Fiat"
                      ? "bg-[#36383D] text-white"
                      : "bg-transparent text-gray-400"
                  }`}
                  onClick={() => handleSwitch("Fiat")}
                >
                  Fiat
                </button>
                <button
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selected === "Crypto"
                      ? "bg-[#36383D] text-white"
                      : "bg-transparent text-gray-400"
                  }`}
                  onClick={() => handleSwitch("Crypto")}
                >
                  Crypto
                </button>
              </div>
            </div>
            <div className="my-5">
              <p className="text-[14px] font-semibold leading-[16px]">Amount</p>
              <input
                className="bg-[#292B2F] border-[1px] border-transparent py-[12px] px-[16px] rounded-[14px] mt-2 w-full focus:border-[1px] focus:border-gray-500 focus:outline-none"
                value={inputBalance}
                onChange={handleInputBalanceChange}
              />
            </div>
            <button className="w-full flex items-center justify-center gap-1 rounded-[16px] py-[18px] pr-[16px] pl-[24px] bg-[#11CA00] font-semibold leading-[20px]">
              Go to payment
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <>
          <div
            className={`fixed top-0 right-0 z-50 ${
              isModalOpen &&
              "h-screen bg-[#1C1E22] lg:absolute lg:top-[70px] lg:right-[50px] lg:bg-transparent lg:w-[300px] lg:h-auto lg:shadow-2xl"
            }`}
          >
            <div className="h-full bg-[#1C1E22] lg:relative lg:h-auto lg:w-[300px] lg:p-0 py-5 rounded-[12px] overflow-y-auto">
              <button
                className="block lg:hidden absolute top-3 right-3 text-white"
                onClick={toggleModal}
              >
                <IoMdClose
                  size={24}
                  className="hover:text-[#9EA0A6] cursor-pointer"
                />
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
                    <p className="text-gray-400 text-sm truncate">
                      {user?.email}
                    </p>
                  </div>
                </div>
              </div>
              <hr className="border-0 h-px bg-[#27292D]" />
              <div className="p-4">
                <ul className="space-y-3">
                  {tabs.map((tab) => (
                    <li
                      key={tab.name}
                      className="hover:bg-[#24262A] rounded-lg cursor-pointer flex items-center gap-2 px-[12px] py-[8px]"
                    >
                      {tab.icon}
                      <p className="text-[16px] font-semibold leading-[20px]">
                        {tab.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <hr className="border-0 h-px bg-[#27292D]" />
              <div className="p-4">
                <ul className="space-y-3">
                  <li className="hover:bg-[#24262A] rounded-lg cursor-pointer flex items-center gap-3">
                    <FormControl
                      fullWidth
                      sx={{
                        bgcolor: "transparent",
                        ".MuiOutlinedInput-notchedOutline": { border: "none" },
                        ".MuiSelect-select": {
                          color: "white",
                          fontSize: "16px",
                          fontWeight: 600,
                          padding: 0,
                        },
                        ".MuiSelect-icon": { color: "white" },
                        "& .MuiPaper-root": {
                          bgcolor: "#1C1E22",
                          color: "white",
                          borderRadius: "8px",
                        },
                        "& .MuiMenuItem-root": {
                          bgcolor: "#1C1E22",
                          "&:hover": {
                            bgcolor: "#33363A",
                          },
                        },
                      }}
                    >
                      <Select
                        value={language}
                        onChange={handleChange}
                        inputProps={{
                          "aria-label": "Language select",
                        }}
                        sx={{
                          height: "40px",
                        }}
                      >
                        <MenuItem value="en">
                          <div className="flex items-center gap-5 px-[12px] py-[8px]">
                            <img
                              src="https://flagcdn.com/w40/gb.png"
                              alt="English"
                              className="w-6 h-6 rounded-full"
                            />
                            <p className="text-[16px] font-semibold leading-[20px]">
                              English
                            </p>
                          </div>
                        </MenuItem>
                        <MenuItem value="ru">
                          <div className="flex items-center gap-5 px-[12px] py-[8px]">
                            <img
                              src="https://flagcdn.com/w40/ru.png"
                              alt="Russian"
                              className="w-6 h-6 rounded-full"
                            />
                            <p className="text-[16px] font-semibold leading-[20px]">
                              Russian
                            </p>
                          </div>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </li>
                  <li
                    className="hover:bg-[#24262A] rounded-lg cursor-pointer flex items-center gap-5 px-[12px] py-[8px]"
                    onClick={handleLogout}
                  >
                    <FaPowerOff size={24} />
                    <p className="text-[16px] font-semibold leading-[20px]">
                      Logout
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
