"use client";

import HalfChartPieMUI from "@/shared/components/HalfChartPieMUI";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { useEffect, useState } from "react";

export type HalfChartPieProps = {
  size?: "small" | "medium" | "big";
};

export default function HalfChartPie({ size = "small" }: HalfChartPieProps) {
  const [responsiveSize, setResponsiveSize] = useState(size);

  useEffect(() => {
    if (size === "small") {
      setResponsiveSize("small");
      return;
    }

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setResponsiveSize("medium");
      } else {
        setResponsiveSize(size);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  return (
    <div className="relative">
      <div>
        <HalfChartPieMUI size={responsiveSize} />
        {responsiveSize === "big" && (
          <Gauge
            className="!absolute top-0 z-[1]"
            width={140}
            height={140}
            value={0}
            startAngle={-90}
            endAngle={90}
            cornerRadius={"50%"}
            outerRadius={"105%"}
            innerRadius={"77%"}
            sx={() => ({
              [`& .${gaugeClasses.valueText}`]: { display: "none" },
              [`& .${gaugeClasses.referenceArc}`]: {
                fill: "rgba(0, 0, 0, 0)",
                stroke: "#1D1F24",
                strokeWidth: "3",
              },
              [`& .${gaugeClasses.valueArc}`]: { display: "none" },
            })}
          />
        )}
        {responsiveSize === "medium" && (
          <Gauge
            className="!absolute top-0 z-[1]"
            width={120}
            height={120}
            value={0}
            startAngle={-90}
            endAngle={90}
            cornerRadius={"50%"}
            outerRadius={"105%"}
            innerRadius={"77%"}
            sx={() => ({
              [`& .${gaugeClasses.valueText}`]: { display: "none" },
              [`& .${gaugeClasses.referenceArc}`]: {
                fill: "rgba(0, 0, 0, 0)",
                stroke: "#1D1F24",
                strokeWidth: "3",
              },
              [`& .${gaugeClasses.valueArc}`]: { display: "none" },
            })}
          />
        )}
      </div>
      <div
        className={`absolute ${
          responsiveSize === "big"
            ? "bottom-[25px] left-[52px]"
            : responsiveSize === "medium"
            ? "bottom-[20px] left-[42px]"
            : "bottom-[20px] left-[25px]"
        }`}
      >
        <div
          className={`${
            responsiveSize === "big"
              ? "text-[20px] leading-[24px] pb-0.5"
              : responsiveSize === "medium"
              ? "text-[18px] leading-[20px]"
              : "text-[16px] leading-[18px]"
          } font-bold z-5`}
        >
          460
        </div>
        {responsiveSize !== "small" && (
          <p className="font-sf font-medium text-[14px] leading-[15px] text-[#FFA025] relative top-1">
            Good
          </p>
        )}
      </div>
      {responsiveSize === "big" && (
        <>
          <p className="font-sf font-medium absolute top-[105px] left-[9px] text-[8px] text-[#A2ACB0]">
            0
          </p>
          <p className="font-sf font-medium absolute top-[105px] right-[8px] text-[8px] text-[#A2ACB0]">
            1000
          </p>
        </>
      )}
      {responsiveSize === "medium" && (
        <>
          <p className="font-sf font-medium absolute top-[88px] left-[11px] text-[8px] text-[#A2ACB0]">
            0
          </p>
          <p className="font-sf font-medium absolute top-[88px] right-[5px] text-[8px] text-[#A2ACB0]">
            1000
          </p>
        </>
      )}
    </div>
  );
}
