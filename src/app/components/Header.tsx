import React, { useState } from "react";
import Image from "next/image";
import logoRectangle from "@/shared/assets/rectangle.png";
import { Badge } from "antd";
import { IoMdClose, IoMdNotificationsOutline } from "react-icons/io";
import { MdFavoriteBorder, MdOutlineArrowDropDown } from "react-icons/md";
import starIcon from "@/shared/assets/icons/star.png";
import { FormControl, MenuItem, Select } from "@mui/material";
import avatar from "@/shared/assets/avatar.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { LuPercent } from "react-icons/lu";
import { GrBook } from "react-icons/gr";
import { GrLanguage } from "react-icons/gr";
import { FaPowerOff } from "react-icons/fa6";
import Link from "next/link";
import useAuthContext from "@/shared/hooks/useAuthContext";
import { useRouter } from "next/navigation";

const Header = () => {
  const [value, setValue] = useState("$340.21");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { logout, user } = useAuthContext();

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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

      <div className="flex items-center gap-5">
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
        <div className="hidden sm:flex items-center justify-center h-[40px]">
          <FormControl
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Select
              value={value}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                bgcolor: "var(--dark-gray)",
                color: "white",
                fontSize: "14px",
                borderRadius: "52px",
                height: "40px",
                padding: "0",
                ".MuiSelect-icon": {
                  color: "white",
                },
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#6b7280",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#6b7280",
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: "var(--dark-gray)",
                    color: "white",
                    borderRadius: "8px",
                    fontSize: "14px",
                  },
                },
              }}
            >
              <MenuItem value="$340.21">$340.21</MenuItem>
              <MenuItem value={10}>0</MenuItem>
              <MenuItem value={20}>0</MenuItem>
              <MenuItem value={30}>0</MenuItem>
            </Select>
          </FormControl>
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

      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"></div>

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
                    <p className="text-gray-400 text-sm">{user?.email}</p>
                  </div>
                </div>
              </div>
              <hr className="border-0 h-px bg-[#27292D]" />
              <div className="p-4">
                <ul className="space-y-3">
                  <li className="hover:bg-[#24262A] rounded-lg cursor-pointer flex items-center gap-2 px-[12px] py-[8px]">
                    <FaDollarSign size={24} />
                    <p className="text-[16px] font-semibold leading-[20px]">
                      Subscriptions
                    </p>
                  </li>
                  <li className="hover:bg-[#24262A] rounded-lg cursor-pointer flex items-center gap-3 px-[12px] py-[8px]">
                    <FiUsers size={24} />
                    <p className="text-[16px] font-semibold leading-[20px]">
                      Subaccounts
                    </p>
                  </li>
                  <li className="hover:bg-[#24262A] rounded-lg cursor-pointer flex items-center gap-3 px-[12px] py-[8px]">
                    <LuPercent size={24} />
                    <p className="text-[16px] font-semibold leading-[20px]">
                      Referral
                    </p>
                  </li>
                  <li className="hover:bg-[#24262A] rounded-lg cursor-pointer flex items-center gap-3 px-[12px] py-[8px]">
                    <GrBook size={24} />
                    <p className="text-[16px] font-semibold leading-[20px]">
                      Guides
                    </p>
                  </li>
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
                        ".MuiPaper-root": {
                          bgcolor: "#1C1E22",
                          color: "white",
                          borderRadius: "8px",
                        },
                      }}
                    >
                      <Select
                        value="ln"
                        displayEmpty
                        inputProps={{
                          "aria-label": "Language select",
                        }}
                        sx={{
                          height: "40px",
                        }}
                      >
                        <MenuItem value="ln">
                          <div className="flex items-center gap-3 px-[12px] py-[8px]">
                            <GrLanguage size={24} />
                            <p className="text-[16px] font-semibold leading-[20px]">
                              Language
                            </p>
                          </div>
                        </MenuItem>
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="ru">Russian</MenuItem>
                      </Select>
                    </FormControl>
                  </li>
                  <li
                    className="hover:bg-[#24262A] rounded-lg cursor-pointer flex items-center gap-3 px-[12px] py-[8px]"
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
