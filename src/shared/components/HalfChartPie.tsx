import * as React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

type HalfChartPieType = {
  small?: boolean;
};

export default function HalfChartPie({ small }: HalfChartPieType) {
  const settings = {
    width: small ? 80 : 140,
    height: small ? 80 : 140,
    value: 60,
    startAngle: -90,
    endAngle: 90,
  };

  return (
    <Gauge
      {...settings}
      sx={() => ({
        [`& .${gaugeClasses.valueText}`]: {
          display: "none",
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: "url(#gradient)",
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: "#27272B",
        },
      })}
    >
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="30%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#FF9000" />
          </linearGradient>
        </defs>
      </svg>
    </Gauge>
  );
}
