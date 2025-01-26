import { Checkbox } from "@mui/material";
import { ICheckboxProps } from "@/shared/interfaces/ICheckboxProps";
import { FaCheck } from "react-icons/fa6";

export const CustomCheckbox: React.FC<ICheckboxProps> = ({
  checked,
  label,
}) => {
  return (
    <div className="flex items-center gap-3 mb-4 relative">
      <Checkbox
        checked={checked}
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
        className={`${checked ? "absolute top-[5px] left-[5px] text-[#17181B]" : "hidden"}`}
      />
      <p className="font-semibold text-[15px] leading-[24px] tracking-[-0.18px]">
        {label}
      </p>
    </div>
  );
};
