type SmallChartPieProps = {
  max: number;
  current: number;
};

export default function SmallChartPie({ max, current }: SmallChartPieProps) {
  const percentage = Math.min(Math.max(current / max, 0), 1) * 100;
  const angle = (percentage / 100) * 360;
  const largeArcFlag = angle >= 180 ? 1 : 0;
  const x = 10 + 10 * Math.sin((angle * Math.PI) / 180);
  const y = 10 - 10 * Math.cos((angle * Math.PI) / 180);

  return (
    <div className="relative w-[20px] h-[20px] flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 20 20" className="absolute">
        <circle cx="10" cy="10" r="10" fill="#393B41" />
        {percentage === 100 ? (
          <circle cx="10" cy="10" r="10" fill="#CBFF51" />
        ) : (
          <path
            d={`M10 10 L10 0 A10 10 0 ${largeArcFlag} 1 ${x} ${y} L10 10 Z`}
            fill="#CBFF51"
          />
        )}
      </svg>
      <div className="absolute w-[14px] h-[14px] bg-[--dark-gray] rounded-full"></div>
    </div>
  );
}
