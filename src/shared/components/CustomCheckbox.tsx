import React, { useCallback } from 'react';

export interface ICheckboxProps {
  checked: boolean;
  label: string;
  onChange?: (checked: boolean) => void;
}

export const CustomCheckbox: React.FC<ICheckboxProps> = ({
  checked,
  label,
  onChange,
}) => {
  const handleClick = useCallback(() => {
    if (onChange) {
      onChange(!checked);
    }
  }, [checked, onChange]);

  return (
    <div className="flex items-center gap-2">
      <div
        onClick={handleClick}
        className={`w-[20px] h-[20px] rounded-[6px] flex items-center justify-center cursor-pointer ${
          checked ? 'bg-[#CBFF51]' : 'bg-[#171719]'
        } text-black border ${
          checked ? 'border-[#CBFF51]' : 'border-[#27292D]'
        }`}>
        {checked && (
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 3.5L4 6.5L9.5 1"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <p className="font-semibold text-[15px] leading-[24px] tracking-[-0.18px]">
        {label}
      </p>
    </div>
  );
};
