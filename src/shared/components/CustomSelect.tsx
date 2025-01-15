import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import { ISelectProps } from "@/shared/interfaces/ISelectProps";

export const CustomSelect: React.FC<ISelectProps> = ({
  value,
  onChange,
  options,
}) => {
  return (
    <FormControl
      sx={{
        height: "100%",
        width: "100%",
        maxWidth: "350px",
      }}
    >
      <Select
        value={value}
        onChange={onChange}
        displayEmpty
        sx={{
          bgcolor: "#212226",
          color: "white",
          borderRadius: "14px",
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
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <p>
              <span className="mr-2">{option.label}</span>
            </p>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
