"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { IoMdTime } from "react-icons/io";
import {
  IoCalendarClear,
  IoFilterOutline,
  IoSearchOutline,
} from "react-icons/io5";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdOutlineArrowDropDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Image from "next/image";
import bless from "../../../public/assets/bless.png";
import solana from "../../../public/assets/solana.png";
import retrodrops from "../../../public/assets/retrodrops.png";
import { Slider, sliderClasses, styled } from "@mui/material";
import { GoDotFill } from "react-icons/go";
import HalfChartPie from "@/shared/components/HalfChartPie";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useCustomScrollbar from "@/shared/hooks/useCustomScrollbar";

const CustomSlider = styled(Slider)({
  height: 8,
  [`&.${sliderClasses.root}`]: {
    padding: 0,
    margin: 0,
  },
  "& .MuiSlider-track": {
    background: "linear-gradient(to right, #5af86e, #d2f21b)",
    border: "none",
    zIndex: 2,
  },
  "& .MuiSlider-thumb": {
    display: "none",
  },
  "& .MuiSlider-rail": {
    opacity: 0.3,
    backgroundColor: "#333",
  },
  "& .MuiSlider-mark": {
    height: 4,
    width: 1,
    backgroundColor: "#777",
    zIndex: 1,
  },
});

const filters = [
  "All",
  "Retrodrops",
  "Testnets",
  "DeFi",
  "DePin",
  "MiniApps",
  "Early",
  "ICO/DO",
];

const Guides = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const router = useRouter();
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const scrollRef = useCustomScrollbar({
    scrollbars: {
      autoHide: "never",
    },
  });

  return (
    <div className="bg-[#101114] text-white">
      <Header />

      <main className="px-[16px] sm:px-[32px] sm:pt-[48px] sm:pb-[64px] lg:px-[96px] l:py-[64px] min-w-[375p]">
        <p className="text-[42px] leading-[50px] font-bold">Guides</p>
        <p className="text-[16px] leading-[22px] text-[#B0B0B0] mt-[20px]">
          Celebrate your web3 journey. Complete quests and earn drops!
        </p>
        <div className="mt-[40px] flex flex-col xl:flex-row xl:items-center xl:justify-between">
          <div ref={scrollRef}>
            <div className="flex pb-[5px] md:pb-0 items-center gap-[6px] mb-[20px] xl:mb-0">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`p-[12px] rounded-[12px] h-[40px] flex items-center justify-center ${
                    activeFilter === filter ? "bg-[#11CA00]" : "bg-[#1D1E23]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="relative text-[#848487] z-0">
            <IoSearchOutline
              className="absolute top-3 left-3 cursor-pointer"
              size={16}
            />
            <input
              placeholder="Search"
              className="bg-[#1D1E23] pr-[12px] pl-[36px] py-[10px] rounded-[11px] w-full sm:w-[300px] placeholder:text-[14px] placeholder:leading-[16px] font-semibold"
            />
          </div>
        </div>
        <div className="min-w-[341px]">
          <div className="flex items-center justify-between">
            <p className="text-[14px] leading-[16px] text-[#57585E] mt-[40px] mb-[32px]">
              112 airdrops
            </p>
            <div className="flex items-center gap-[5px] text-[#676A70]">
              <IoFilterOutline size={20} />
              <p>
                Sort by <span className="text-white cursor-pointer">New</span>
              </p>
              <MdOutlineArrowDropDown className="text-white" size={20} />
            </div>
          </div>
          <div className="flex flex-wrap gap-[16px] lg:gap-[28px] justify-center items-center">
            {[1, 2, 3, 4, 5, 6].map((el) => (
              <div key={el}>
                <div
                  className="w-[339px] sm:w-[340px] lg:w-[394px] h-[280px] lg:h-[294px] bg-[#17181B] p-[16px] pt-[12px] lg:px-[20px] lg:py-[16px] rounded-[16px] border-[1px] border-[#1F2126] hover:border-[#CBFF51] cursor-pointer"
                  onClick={() => router.push(`guides/${el}`)}
                >
                  <div className="flex justify-between">
                    <div className="flex items-center gap-1">
                      <div className="flex items-center gap-[2px] px-[6px] py-[5px] bg-[#212125] rounded-[8px]">
                        <IoMdTime size={12} className="text-[#A0A8AE]" />
                        <p className="text-[12px] leading-[14px] sm:text-[13px] sm:leading-[16px] text-[#A0A8AE] font-semibold">
                          12 min
                        </p>
                      </div>
                      <p className="px-[6px] py-[5px] bg-[#212125] rounded-[8px] text-[12px] leading-[14px] sm:text-[13px] sm:leading-[16px] text-[#A0A8AE] font-semibold">
                        Free
                      </p>
                      <div className="flex items-center gap-[2px] px-[6px] py-[5px] bg-[#212125] rounded-[8px]">
                        <Image
                          src={retrodrops}
                          alt="Retrodrops"
                          className="w-[12px] h-[12px]"
                        />
                        <p className="text-[12px] leading-[14px] sm:text-[13px] sm:leading-[16px] text-[#A0A8AE] font-semibold">
                          Retrodrops
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <div className="w-[36px] h-[36px] bg-[#181A1D] rounded-full flex items-center justify-center">
                        <IoCalendarClear className="text-[#515459]" size={20} />
                      </div>
                      <div
                        className="w-[36px] h-[36px] bg-[#1E2023] rounded-full flex items-center justify-center cursor-pointer"
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleFavorite(el);
                        }}
                      >
                        {favorites[el] ? (
                          <MdFavorite className="text-[#CBFF51]" size={20} />
                        ) : (
                          <MdFavoriteBorder
                            className="text-[#515459]"
                            size={20}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-[12px] flex gap-[16px]">
                    <Image
                      className="w-[48px] h-[48px] rounded-[10px]"
                      src={bless}
                      alt="Bless logo"
                    />
                    <div className="flex flex-col gap-[8px]">
                      <div className="flex items-center gap-3">
                        <p className="text-[18px] font-bold leading-[22pxs]">
                          Bless
                        </p>
                        <Image
                          src={solana}
                          alt="Solana logo"
                          className="w-[20px] h-[20px]"
                        />
                      </div>
                      <p className="text-[13px] text-[#8E8E8E]">
                        Platform helping development dApp on Solana
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-[24px] my-[-5px]">
                    <HalfChartPie />
                    <div>
                      <p className="text-[13px] leading-[16px] font-semibold text-[#50535D]">
                        Invest.
                      </p>
                      <p className="text-[16px] leading-[18px] font-bold">
                        $2.2 bln
                      </p>
                    </div>
                    <div>
                      <p className="text-[13px] leading-[16px] font-semibold text-[#50535D]">
                        TVL
                      </p>
                      <p className="text-[16px] leading-[18px] font-bold">
                        $12k
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <CustomSlider
                      defaultValue={8}
                      step={1}
                      min={0}
                      max={100}
                      disabled
                    />
                    <p className="text-[16px] leading-[18px] font-bold">8%</p>
                  </div>
                  <div className="mt-[12px] lg:mt-[16px] flex items-center gap-[5px] text-[#50535D] border-t-[1px] border-[#3032393D] pt-[12px] lg:pt-[16px]">
                    <p className="text-[13px] leading-[16px] font-semibold">
                      Last updates: 10 dec 2024
                    </p>
                    <MdOutlineKeyboardArrowRight size={20} />
                    <GoDotFill className="text-red-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-[8px] mt-[56px]">
            <p className="py-[6px] px-[10px] rounded-[8px] h-[40px] w-[40px] bg-[#2A2C32] flex items-center justify-center cursor-pointer">
              1
            </p>
            <p className="py-[6px] px-[10px] rounded-[8px] h-[40px] w-[40px] bg-[#15171A] flex items-center justify-center cursor-pointer">
              2
            </p>
            <p className="py-[6px] px-[10px] rounded-[8px] h-[40px] w-[40px] bg-[#15171A] flex items-center justify-center cursor-pointer">
              3
            </p>
            <p className="py-[6px] px-[10px] rounded-[8px] h-[40px] w-[40px] bg-[#15171A] flex items-center justify-center cursor-pointer">
              4
            </p>
            <p className="py-[6px] px-[10px] rounded-[8px] h-[40px] w-[40px] bg-[#15171A] flex items-center justify-center cursor-pointer">
              5
            </p>
            <p className="py-[6px] px-[10px] rounded-[8px] h-[40px] w-[40px] bg-[#15171A] flex items-center justify-center cursor-pointer">
              ...
            </p>
            <p className="py-[6px] px-[10px] rounded-[8px] h-[40px] w-[40px] bg-[#15171A] flex items-center justify-center cursor-pointer">
              10
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Guides;
