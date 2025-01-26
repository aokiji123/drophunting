type SmallChartPieType = {
  half?: boolean;
};

export default function SmallChartPie({ half }: SmallChartPieType) {
  return (
    <div className="flex items-center justify-center relative">
      {half ? (
        <>
          <div className="absolute top-[3px] left-[3.5px] w-[14px] h-[14px] bg-[--dark-gray] rounded-full z-10"></div>
          <div className="relative w-[20px] h-[20px] rounded-full">
            <div className="absolute inset-0 bg-[#393B41] rounded-full"></div>
            <div
              className="absolute inset-0 bg-[#CBFF51] rounded-full"
              style={{
                clipPath:
                  "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)",
              }}
            ></div>
          </div>
        </>
      ) : (
        <>
          <div className="w-[20px] h-[20px] rounded-full bg-[#CBFF51] flex items-center justify-center">
            <div className="w-[14px] h-[14px] bg-[--dark-gray] rounded-full"></div>
          </div>
        </>
      )}
    </div>
  );
}
