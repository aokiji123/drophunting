import * as React from "react";
import { Gauge, gaugeClasses, useGaugeState } from "@mui/x-charts/Gauge";
import { HalfChartPieProps } from "./HalfChartPie";

function GaugePointer({ size, defaultValue }: HalfChartPieProps) {
  const { valueAngle, outerRadius, cx, cy, innerRadius } = useGaugeState();

  if (valueAngle === null) return null;

  const correctedAngle =
    defaultValue === 0 ? valueAngle + (16 * Math.PI) / 180 : valueAngle;

  const adjustedRadius = (innerRadius + outerRadius) / 2;
  const shift = size === "medium" ? 5 : size === "big" ? 7 : null;
  if (!shift) {
    return;
  }

  const target = {
    x:
      cx +
      adjustedRadius * Math.sin(correctedAngle) -
      shift * Math.cos(correctedAngle),
    y:
      cy -
      adjustedRadius * Math.cos(correctedAngle) -
      shift * Math.sin(correctedAngle),
  };

  if (defaultValue && defaultValue < 100) {
    return null;
  }

  return (
    <g>
      <circle cx={target.x} cy={target.y} r={3} fill="white" />
    </g>
  );
}

export default function HalfChartPieMUI({
  size = "small",
  defaultValue,
}: HalfChartPieProps) {
  const settings = {
    width: size === "small" ? 80 : size === "medium" ? 120 : 140,
    height: size === "small" ? 80 : size === "medium" ? 120 : 140,
    value: Math.round(defaultValue ? defaultValue / 10 : 0),
    startAngle: -90,
    endAngle: 90,
    cornerRadius: "50%",
  };

  return (
    <Gauge
      {...settings}
      innerRadius={size === "big" || size === "medium" ? "79.2%" : undefined}
      outerRadius={size === "big" || size === "medium" ? "101%" : undefined}
      sx={() => ({
        [`& .${gaugeClasses.valueText}`]: { display: "none" },
        [`& .${gaugeClasses.valueArc}`]: { fill: "url(#gradient)" },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: "#1D1F24",
          stroke: size === "big" || size === "medium" ? "#1D1F24" : undefined,
          strokeWidth: size === "big" || size === "medium" ? "2" : undefined,
        },
      })}>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="30%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#FF9000" />
          </linearGradient>
        </defs>
      </svg>
      {size === "big" || size === "medium" ? (
        <GaugePointer size={size} defaultValue={defaultValue} />
      ) : null}
    </Gauge>
  );
}
