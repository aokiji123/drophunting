import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import { ISelectProps } from "@/shared/interfaces/ISelectProps";
import Image from "next/image";

export const CustomSelect: React.FC<ISelectProps> = ({
  value,
  onChange,
  modal,
  options,
}) => {
  return (
    <FormControl
      sx={{
        height: "100%",
        width: "100%",
        maxWidth: "350px",
        padding: 0,
      }}
    >
      <Select
        value={value}
        onChange={onChange}
        displayEmpty
        sx={{
          bgcolor: modal ? "transparent" : "#212226",
          fontFamily: "IBM Plex Mono",
          color: "white",
          borderRadius: modal ? "8px" : "14px",
          fontSize: "15px",
          height: "50px",
          padding: "0",
          ".MuiSelect-icon": {
            color: "white",
          },
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: modal ? "transparent" : "#6b7280",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: modal ? "transparent" : "#6b7280",
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
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <div className={`flex items-center ${modal ? `gap-4` : `gap-3`}`}>
              {option.image && (
                <Image
                  src={option.image}
                  alt="Russian"
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded-full"
                />
              )}
              <p className={`${modal && `text-[16px] font-bold`} p-1`}>
                {option.value}
              </p>
            </div>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
