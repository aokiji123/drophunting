"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { IoFilterOutline, IoSearchOutline } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Image from "next/image";
import store from "../../../public/assets/store.png";

const Store = () => {
  return (
    <div className="bg-[#101114] text-white">
      <Header />

      <main className="px-[16px] sm:px-[32px] sm:pt-[48px] sm:pb-[64px] lg:px-[96px]">
        <p className="text-[42px] leading-[50px] font-bold">Store</p>
        <p className="text-[16px] leading-[22px] text-[#B0B0B0] mt-[20px]">
          Buy new products from Drophunting and earn with us
        </p>
        <div className="mt-[40px] flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-[6px] mb-[20px] md:mb-0">
            <button className="p-[12px] rounded-[12px] bg-[#11CA00] h-[40px] flex items-center justify-center">
              All
            </button>
            <button className="p-[12px] rounded-[12px] bg-[#1D1E23] h-[40px] flex items-center justify-center">
              Project
            </button>
            <button className="p-[12px] rounded-[12px] bg-[#1D1E23] h-[40px] flex items-center justify-center">
              Education
            </button>
          </div>
          <div className="relative text-[#848487] h-[40px]">
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
              6 products
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((storeIndex) => (
              <div
                key={storeIndex}
                className="relative w-[335px] sm:w-[336px] h-[482px] lg:w-[394px] lg:h-[483px] border-[1px] bg-[#1A1B1F] border-[#24262C] rounded-[16px] overflow-hidden"
              >
                <Image src={store} alt="Store" className="w-full" />
                <div className="h-[280px] p-[20px] pb-[16px] bg-[#1A1B1F] flex flex-col justify-between">
                  <div className="flex flex-col gap-[20px]">
                    <p className="text-[18px] leading-[22px] font-bold">
                      Premium. 5 Airdrops with winning
                    </p>
                    <div className="flex items-center">
                      <p className="rounded-[6px] px-[8px] py-[6px] bg-[#211E12] text-[13px] leading-[16px] font-semibold text-[#C6A975]">
                        Project
                      </p>
                    </div>
                    <p className="text-[14px] leading-[20px] text-[#B0B0B0]">
                      An airdrop has been announced with the allocation of a
                      significant pool of rewards. Conditions of participation
                      and requirements are clear.
                    </p>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <p className="text-[18px] leading-[20px] font-semibold">
                      From 150$
                    </p>
                    <p className="text-[14px] leading-[20px] text-[#8E8E8E]">
                      per project
                    </p>
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

export default Store;
