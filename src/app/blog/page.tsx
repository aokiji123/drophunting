"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { IoMdTime } from "react-icons/io";
import { IoFilterOutline, IoSearchOutline } from "react-icons/io5";
import { MdOutlineArrowDropDown, MdOutlineDone } from "react-icons/md";
import Image from "next/image";
import blog from "../../../public/assets/blog.png";
import { useState } from "react";

const Blog = () => {
  const [selectedBlogs, setSelectedBlogs] = useState<number[]>([]);

  const toggleBlogSelection = (blogIndex: number) => {
    setSelectedBlogs((prevSelected) => {
      if (prevSelected.includes(blogIndex)) {
        return prevSelected.filter((index) => index !== blogIndex);
      }
      return [...prevSelected, blogIndex];
    });
  };

  return (
    <div className="bg-[#101114] text-white">
      <Header />

      <main className="px-[16px] sm:px-[32px] sm:pt-[48px] sm:pb-[64px] lg:px-[96px]">
        <p className="text-[42px] leading-[50px] font-bold">Blog</p>
        <p className="text-[16px] leading-[22px] text-[#B0B0B0] mt-[20px]">
          Celebrate your web3 journey. Complete quests and earn drops!
        </p>
        <div className="mt-[40px] flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-[6px] mb-[20px] md:mb-0">
            <button className="p-[12px] rounded-[12px] bg-[#11CA00] h-[40px] flex items-center justify-center">
              All
            </button>
            <button className="p-[12px] rounded-[12px] bg-[#1D1E23] h-[40px] flex items-center justify-center">
              Newbie
            </button>
            <button className="p-[12px] rounded-[12px] bg-[#1D1E23] h-[40px] flex items-center justify-center">
              Reports
            </button>
          </div>
          <div className="relative text-[#848487]">
            <IoSearchOutline
              className="absolute top-3 left-3 cursor-pointer"
              size={16}
            />
            <input
              placeholder="Search"
              className="bg-[#1D1E23] pr-[12px] pl-[36px] py-[10px] rounded-[11px] w-[300px] placeholder:text-[14px] placeholder:leading-[16px] font-semibold"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-[14px] leading-[16px] text-[#57585E] mt-[40px] mb-[32px]">
              87 articles
            </p>
            <div className="flex items-center gap-[5px] text-[#676A70]">
              <IoFilterOutline size={20} />
              <p>
                Sort by <span className="text-white cursor-pointer">New</span>
              </p>
              <MdOutlineArrowDropDown className="text-white" size={20} />
            </div>
          </div>
          <div className="flex flex-wrap gap-[16px] sm:gap-[24px] lg:gap-[28px] justify-center md:justify-normal items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((blogIndex) => (
              <div key={blogIndex} className="relative">
                {selectedBlogs.includes(blogIndex) && (
                  <div className="absolute inset-0 bg-black opacity-50 z-10 pointer-events-none"></div>
                )}

                <div
                  className="relative w-[334px] sm:w-[336px] h-[414px] lg:w-[394px] lg:h-[460px] border-[1px] bg-[#1A1B1F] border-[#24262C] rounded-[16px] overflow-hidden"
                  onClick={() => toggleBlogSelection(blogIndex)}
                >
                  <Image src={blog} alt="Blog" className="w-full" />
                  <div className="h-[260px] p-[20px] pb-[16px] bg-[#1A1B1F] flex flex-col gap-[12px] lg:gap-[20px]">
                    <p className="text-[18px] leading-[22px] font-bold">
                      Road to Minnet
                    </p>
                    <div className="flex items-center gap-[8px]">
                      <p className="rounded-[6px] px-[8px] py-[6px] bg-[#212125] text-[13px] leading-[16px] font-semibold text-[#A0A8AE]">
                        December 13
                      </p>
                      <p className="rounded-[6px] px-[8px] py-[6px] bg-[#211E12] text-[13px] leading-[16px] font-semibold text-[#C6A975]">
                        Newbie
                      </p>
                    </div>
                    <p className="text-[14px] leading-[20px] text-[#B0B0B0]">
                      The Fuel Genesis Drop gives 1 billion FUEL (10% of the
                      total supply) to more than 200,000 unique addresses
                    </p>
                    <div className="flex items-center justify-between lg:mt-[15px] relative">
                      <div className="text-[#A0A8AE] flex items-center bg-[#0D0E0F] px-[8px] py-[6px] rounded-[6px] gap-1">
                        <IoMdTime size={12} />
                        <p className="text-[13px] leading-[16px] font-semibold">
                          10 min
                        </p>
                      </div>

                      <div
                        className={`w-[40px] h-[40px] min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full border-2 transition-all duration-300 shrink-0 bg-[#101114] cursor-pointer z-20 relative ${
                          selectedBlogs.includes(blogIndex)
                            ? "border-[1px] border-[#47572D75] bg-[#000] text-[#CBFF51]"
                            : "border-[#2A2D33] border-[1px]"
                        }`}
                      >
                        <div
                          className={`${
                            selectedBlogs.includes(blogIndex) &&
                            `bg-[#CBFF512E] rounded-full p-[6px]`
                          }`}
                        >
                          {selectedBlogs.includes(blogIndex) && (
                            <div>
                              <MdOutlineDone size={20} />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
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

export default Blog;
