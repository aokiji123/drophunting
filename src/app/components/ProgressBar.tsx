import clsx from "clsx";
import React from "react";

interface ProgressBarProps {
  currentValue: number;
  maxValue: number;
  isSingle: boolean;
}

const Part = ({
  filled,
  first,
  last,
  isSingle,
}: {
  filled: boolean;
  first: boolean;
  last: boolean;
  isSingle: boolean; // New prop to detect single bar
}) => {
  return (
    <div
      className={clsx(
        "text-white transition-colors w-full h-1.5",
        filled ? "bg-[#CBFF51]" : "bg-[#4e4f50]",
        first && "rounded-l-full",
        last && "rounded-r-full",
      )}
      style={{
        clipPath: isSingle
          ? undefined // No clipping for a single bar
          : first
            ? "polygon(0% 0%, 100% 0%, 98% 100%, 0% 100%)"
            : last
              ? "polygon(2% 0%, 100% 0%, 100% 100%, 0% 100%)"
              : "polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)",
      }}
    />
  );
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentValue,
  maxValue,
  isSingle,
}) => {
  return (
    <div className="flex w-full items-center gap-px">
      {Array(maxValue)
        .fill(0)
        .map((_, index) => (
          <Part
            key={index}
            filled={index < currentValue}
            first={index === 0}
            last={index === maxValue - 1}
            isSingle={isSingle}
          />
        ))}
    </div>
  );
};

export default ProgressBar;
