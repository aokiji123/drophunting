import { Checkbox } from "@mui/material";
import { ICheckboxProps } from "@/shared/interfaces/ICheckboxProps";

export const CustomCheckbox: React.FC<ICheckboxProps> = ({
  checked,
  label,
}) => {
  return (
    <div className="flex items-center gap-3 mb-4">
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
            "& .MuiSvgIcon-root": {
              display: "block",
              color: "#212226",
            },
          },
        }}
      />
      <p className="font-semibold text-[15px] leading-[24px] tracking-[-0.18px]">
        {label}
      </p>
    </div>
  );
};
