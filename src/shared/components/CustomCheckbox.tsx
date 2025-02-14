import { Checkbox } from "@mui/material";
import { ICheckboxProps } from "@/shared/interfaces/ICheckboxProps";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";

export const CustomCheckbox: React.FC<ICheckboxProps> = ({
  checked,
  label,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center gap-3 mb-4 relative">
      <Checkbox
        checked={isChecked}
        onChange={handleChange}
        sx={{
          backgroundColor: "#212226",
          borderRadius: "4px",
          border: "1px solid #212226",
          width: "24px",
          height: "24px",
          padding: "0",
          "&:hover": {
            backgroundColor: "#2A2B2D",
          },
          "& .MuiSvgIcon-root": {
            display: "none",
          },
          "&.Mui-checked": {
            backgroundColor: "#CBFF51",
            border: "none",
          },
        }}
      />
      <FaCheck
        className={`${
          isChecked ? "absolute top-[5px] left-[5px] text-[#17181B]" : "hidden"
        }`}
        onClick={handleChange}
      />
      <p className="font-semibold text-[15px] leading-[24px] tracking-[-0.18px]">
        {label}
      </p>
    </div>
  );
};
