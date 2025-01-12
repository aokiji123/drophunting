import React, { useState } from "react";
import Image from "next/image";
import logoRectangle from "@/shared/assets/rectangle.png";
import { Badge } from "antd";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdFavoriteBorder, MdOutlineArrowDropDown } from "react-icons/md";
import starIcon from "@/shared/assets/icons/star.png";
import { FormControl, MenuItem, Select } from "@mui/material";
import avatar from "@/shared/assets/avatar.png";

const Header = () => {
  const [value, setValue] = useState("$340.21");

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  return (
    <header className="relative flex items-center justify-between h-[72px] px-8">
      {/* Left Section */}
      <div>
        <div className="flex items-center text-center">
          <Image className="mr-2" src={logoRectangle} alt="Logo Rectangle" />
          <p className="font-bold text-[20px] font-chakra">Drophunting</p>
        </div>
      </div>

      {/* Center Section */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="flex items-center font-chakra font-bold gap-5">
          <a href="#">Guides</a>
          <a href="#">Blog</a>
          <a href="#">Store</a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        <Badge dot>
          <IoMdNotificationsOutline size={20} className="text-[#9EA0A6]" />
        </Badge>
        <MdFavoriteBorder size={20} className="text-[#9EA0A6]" />
        <button className="flex items-center gap-1 bg-gradient-to-r from-[#C3FF361C] to-[#00AFB81C] p-2 rounded-lg h-[40px]">
          <Image src={starIcon} alt="Star icon" className="w-[16px] h-[16px]" />
          <h1 className="bg-gradient-to-r from-[#CBFF51] to-[#7EE39C] inline-block text-transparent bg-clip-text">
            Upgrade
          </h1>
        </button>
        <div className="flex items-center justify-center h-[40px]">
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
                borderRadius: "8px",
                fontSize: "0.875rem",
                height: "40px",
                padding: "0",
                ".MuiSelect-icon": {
                  color: "white",
                },
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "green",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "green",
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: "var(--dark-gray)",
                    color: "white",
                    borderRadius: "8px",
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
        <div className="flex items-center cursor-pointer">
          <div className="relative w-[40px] h-[40px] rounded-full p-[1px] bg-gradient-to-b from-[#139EA5] to-[#BFFB5E]">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src={avatar}
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </div>
          <MdOutlineArrowDropDown size={20} className="p-0" />
        </div>
      </div>
    </header>
  );
};

export default Header;
