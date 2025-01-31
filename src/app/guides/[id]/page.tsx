"use client";
import React, { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosInformationCircle,
  IoMdTime,
} from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import zenchain from "../../../../public/assets/zenchain.png";
import blogDesc from "../../../../public/assets/blog-desc.png";
import { IoCalendarClear } from "react-icons/io5";
import { MdFavoriteBorder, MdOutlineDone } from "react-icons/md";
import { PiXLogo } from "react-icons/pi";
import { GrLanguage } from "react-icons/gr";
import { FaRegFileAlt, FaTelegramPlane } from "react-icons/fa";
import { Slider, styled } from "@mui/material";
import { AiOutlineLink } from "react-icons/ai";
import { useRouter } from "next/navigation";
import SmallChartPie from "@/shared/components/SmallChartPie";
import HalfChartPie from "@/shared/components/HalfChartPie";

const tasks = [
  { name: "Follow Discord", minutes: "1 min" },
  { name: "Create first account", minutes: "1 min" },
  { name: "Invite 5 friends", minutes: "2 min" },
  { name: "Play ZenGame and win 200 xp", minutes: "15 min" },
  { name: "Read all articles on Zenchain blog", minutes: "30 min" },
];

const CustomSlider = styled(Slider)({
  height: 8,
  "& .MuiSlider-track": {
    background: "#CBFF51",
    border: "none",
  },
  "& .MuiSlider-thumb": {
    display: "none",
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#b3b3b3",
  },
  "& .MuiSlider-mark": {
    height: 10,
    width: 4,
    backgroundColor: "#000",
  },
});

const marks = Array.from({ length: 6 }, (_, i) => ({
  value: i,
  visible: i !== 0 && i !== 5,
}));

const Guide = () => {
  const router = useRouter();
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
  const [activeTask, setActiveTask] = useState<string | null>(null);
  const [percentage, setPercentage] = useState(0);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const toggleTask = (taskName: string) => {
    setSelectedTasks((prevSelected) => {
      const isSelected = prevSelected.includes(taskName);
      const updatedSelected = isSelected
        ? prevSelected.filter((name) => name !== taskName)
        : [...prevSelected, taskName];

      const newPercentage = (updatedSelected.length / tasks.length) * 100;
      setPercentage(newPercentage);

      return updatedSelected;
    });
  };

  const toggleTaskFromEvent = (
    e: React.MouseEvent<HTMLLIElement> | React.MouseEvent<HTMLDivElement>,
    taskName: string
  ) => {
    e.stopPropagation();
    toggleTask(taskName);
  };

  const toggleAccordion = (taskName: string) => {
    setActiveTask((prev) => (prev === taskName ? null : taskName));
  };

  const handleCopyLink = (taskName: string) => {
    setActiveModal(taskName);
    setTimeout(() => setActiveModal(null), 2000);
  };

  return (
    <div className="bg-black text-white">
      <Header />

      <main className="my-[8px] px-[20px] md:px-[96px]">
        <button
          onClick={() => router.push("/guides")}
          className="font-chakra flex items-center pr-[14px] pl-[8px] py-[8px] rounded-[32px] gap-1 bg-[#1C1D21] text-[#7F7F7F] w-[72px] h-[32px]"
        >
          <IoIosArrowBack size={20} />
          <p>Back</p>
        </button>
        <div className="flex flex-col xl:flex-row justify-between mt-[10px] pt-[16px] w-full gap-[80px]">
          <section className="w-full xl:w-[30%] flex flex-col gap-[24px]">
            <div className="flex items-center gap-[24px]">
              <Image
                src={zenchain}
                alt="Zenchain"
                className="h-[80x] w-[80px] rounded-[20px]"
              />
              <div className="flex flex-col gap-[8px]">
                <p className="text-[30px] leading-[36px] font-bold">Zenchain</p>
                <div className="flex items-center gap-[8px]">
                  <div className="flex items-center gap-[6px]">
                    <div>
                      <GoDotFill size={16} className="text-[#C9FF4A]" />
                    </div>
                    <p className="text-[14px] leading-[16px] font-bold">
                      Actual
                    </p>
                  </div>
                  <div>
                    <GoDotFill size={8} className="text-[#5D5E60]" />
                  </div>
                  <p className="text-[#8E8E8E] text-[14px] leading-[16px] font-semibold">
                    12 oct 2024
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[6px]">
              <div className="flex items-center bg-[#202124] rounded-[8px] px-[10px] py-[8px] gap-1">
                <IoMdTime size={16} />
                <p className="text-[14px] leading-[16px] font-semibold">
                  12 min
                </p>
              </div>
              <div className="flex items-center bg-[#202124] rounded-[8px] px-[10px] py-[8px] text-[14px] leading-[16px] font-semibold">
                Free
              </div>
              <div className="bg-gradient-to-r from-[#C3FF361C] to-[#00AFB81C] py-[8px] px-[10px] rounded-lg h-[32px] flex items-center justify-center">
                <p className="bg-gradient-to-r from-[#CBFF51] to-[#7EE39C] inline-block text-transparent bg-clip-text">
                  Guaranteed drop
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[7px]">
              <button className="flex items-center gap-2 bg-[#11CA00] rounded-[14px] px-[20px] py-[15px] text-[16px] leading-[20px] h-[44px] justify-center font-bold">
                <IoCalendarClear size={20} />
                <p>Remind on Telegram</p>
              </button>
              <div className="bg-[#202328] w-[44px] h-[44px] items-center justify-center flex rounded-[14px]">
                <MdFavoriteBorder size={20} />
              </div>
            </div>

            <hr className="border-0 h-px bg-[#27292D]" />

            <div className="flex items-center gap-8 xl:gap-0 xl:justify-between">
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <div>
                    <HalfChartPie />
                  </div>
                  <div className="absolute bottom-[25px] left-[52px] ">
                    <div className="text-[20px] leading-[24px] font-bold z-5">
                      460
                    </div>
                    <p className="text-[14px] leading-[15px] text-[#FFA025]">
                      Good
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-[14px] leading-[16px] text-[#50535D]">
                  Investment
                </p>
                <p className="text-[20px] leading-[24px] font-bold">$2.2 bln</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-[14px] leading-[16px] text-[#50535D]">TVL</p>
                <p className="text-[20px] leading-[24px] font-bold">$12k</p>
              </div>
            </div>
            <div>
              <p className="text-[#9A9A9A] text-[14px] leading-[20px]">
                Cytonic is a multi-EVM Layer 1 blockchain with multiple virtual
                machines that aims to integrate networks such as Bitcoin,
                Ethereum and Solana into a single Layer 1 solution.
              </p>
              <div className="mt-[20px] ">
                <p className="xl:flex xl:flex-col xl:gap-0 text-[#9A9A9A] text-[14px] leading-[20px]">
                  It focuses on enabling communication...{" "}
                  <span className="text-[#CBFF51] text-[14px] leading-[20px] mt-[10px] xl:mt-0">
                    More
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#212226] p-[6px] rounded-[8px] h-[36px] w-[36px] text-[#949392]">
                <GrLanguage size={24} />
              </div>
              <div className="bg-[#212226] p-[6px] rounded-[8px] h-[36px] w-[36px] text-[#949392]">
                <PiXLogo size={24} />
              </div>
              <div className="bg-[#212226] p-[6px] rounded-[8px] h-[36px] w-[36px] text-[#949392]">
                <FaTelegramPlane size={24} />
              </div>
            </div>
          </section>
          <section className="w-full xl:w-[70%] flex flex-col gap-[18px]">
            <p className="text-[20px] leading-[24px] font-bold">Tasks</p>
            <div className="flex flex-col">
              <div className="flex items-center justify-between text-[16px] leading-[18px] font-bold ">
                <div className="flex items-center gap-3">
                  <p className="text-[#707273]">Completed:</p>
                  <p className="text-white">
                    {selectedTasks.length}/{tasks.length}
                  </p>
                </div>
                <p>{percentage}%</p>
              </div>
              <CustomSlider
                marks={marks
                  .filter((mark) => mark.visible)
                  .map((mark) => ({ value: mark.value }))}
                value={selectedTasks.length}
                step={1}
                min={0}
                max={tasks.length}
              />
            </div>
            <div className="bg-gradient-to-r from-[#C3FF361C] to-[#00AFB81C] flex items-center justify-between py-[8px] pr-[12px] pl-[20px] h-[80px] md:h-[60px] rounded-[14px]">
              <div className="flex justify-center md:items-center min-h-[60px] md:h-[40px] flex-col md:flex-row gap-[8px] text-[15px] leading-[16px] font-bold">
                <p>Free task previews on your plan</p>
                <div className="flex items-center gap-[8px]">
                  <SmallChartPie half />
                  <p>1/3</p>
                  <IoIosInformationCircle
                    size={20}
                    className="text-[#515256]"
                  />
                </div>
              </div>
              <button className="h-[44px] bg-[#11CA00] p-[8px] sm:p-[20px] rounded-[14px] text-[16px] leading-[20px] flex items-center justify-center">
                Upgrade plan
              </button>
            </div>
            <ul className="flex flex-col gap-3">
              {tasks.map((task) => (
                <li
                  key={task.name}
                  onClick={(e) => toggleTaskFromEvent(e, task.name)}
                  className="cursor-pointer px-4 py-3 rounded-[12px] border-[1px] transition-all duration-300 border-gray-700 hover:border-gray-500 bg-[#16171A]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-[24px] h-[24px] min-w-[24px] min-h-[24px] flex items-center justify-center rounded-full border-2 transition-all duration-300 shrink-0 ${
                          selectedTasks.includes(task.name)
                            ? "border-[1px] border-[#73A304] bg-[#528E09]"
                            : "border-gray-700"
                        }`}
                      >
                        {selectedTasks.includes(task.name) && (
                          <div>
                            <MdOutlineDone size={20} />
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <p
                          className={`font-bold mr-[5px] ${
                            selectedTasks.includes(task.name) &&
                            "text-[#747677]"
                          }`}
                        >
                          {task.name}
                        </p>
                        <div className="text-[#747677] flex items-center gap-1.5">
                          <IoMdTime size={12} />
                          <p>{task.minutes}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-[8px] text-[#8E8E8E] relative">
                      <div
                        className="h-[32px] w-[32px] bg-[#1E1F23] rounded-full flex items-center justify-center"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyLink(task.name);
                        }}
                      >
                        <AiOutlineLink size={20} />
                      </div>
                      {activeModal === task.name && (
                        <p className="absolute top-9 right-4 bg-black text-white rounded-[9px] px-[10px] py-[7px] shadow-lg w-[125px] flex items-center justify-center">
                          Link copied
                        </p>
                      )}
                      <div
                        className="text-[#8E8E8E] cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleAccordion(task.name);
                        }}
                      >
                        {activeTask === task.name ? (
                          <IoIosArrowUp size={20} />
                        ) : (
                          <IoIosArrowDown size={20} />
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    {activeTask === task.name && (
                      <div className="mt-3 px-[16px] flex flex-col gap-[16px]">
                        <p className="text-[14px] leading-[16px] text-[#9A9A9A] font-semibold">
                          1 attachment
                        </p>
                        <p className="text-[15px] leading-[21px]">Step 1.</p>
                        <p className="text-[15px] leading-[21px]">
                          Cytonic is a multi-EVM Layer 1 blockchain with
                          multiple virtual machines that aims to integrate
                          networks such as{" "}
                          <span className="text-[#CBFF51]">Bitcoin</span>,
                          Ethereum and Solana into a single Layer 1 solution.{" "}
                        </p>
                        <Image
                          src={blogDesc}
                          alt="Blog Description"
                          className="px-[0] sm:px-[50px] my-[20px]"
                        />
                        <p className="text-[15px] leading-[21px]">Step 2.</p>
                        <p className="text-[15px] leading-[21px]">
                          Cytonic is a multi-EVM Layer 1 blockchain with
                          multiple virtual machines that aims to integrate
                          networks such as{" "}
                          <span className="text-[#CBFF51]">Bitcoin</span>,
                          Ethereum and Solana into a single Layer 1 solution.{" "}
                        </p>
                        <p className="text-[#CBFF51] text-[15px] leading-[21px]">
                          Registration here
                        </p>
                        <div className="flex items-center gap-2 bg-[#202124] pr-[16px] pl-[10px] py-[8px] rounded-[100px] w-[180px]">
                          <div>
                            <FaRegFileAlt
                              className="text-[#8E8E8E]"
                              size={16}
                            />
                          </div>
                          <p>Instructions.pdf</p>
                        </div>
                        <div
                          onClick={(e) => toggleTaskFromEvent(e, task.name)}
                          className={`cursor-pointer py-[12px] pl-[16px] pr-[28px] rounded-[12px] flex items-center transition-all duration-300 mb-[20px] w-[230px] ${
                            selectedTasks.includes(task.name)
                              ? "bg-[#1D2A19]"
                              : "bg-[#070709]"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-[32px] h-[32px] flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                                selectedTasks.includes(task.name)
                                  ? "border-[#47572D75] bg-[#151B15]"
                                  : "border-[#32353D]"
                              }`}
                            >
                              <div
                                className={`${
                                  selectedTasks.includes(task.name) &&
                                  `bg-[#CBFF512E] rounded-full p-[4px] text-[#CBFF51]`
                                }`}
                              >
                                {selectedTasks.includes(task.name) && (
                                  <MdOutlineDone size={16} />
                                )}
                              </div>
                            </div>
                            <p
                              className={`font-semibold text-[16px] leading-[15px] ${
                                selectedTasks.includes(task.name)
                                  ? "text-[#A0A8AECC]"
                                  : "text-[#A0A8AE]"
                              }`}
                            >
                              Task Completed
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Guide;
