"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { tabs } from "@/shared/utils/tabs";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Progress as ProgressIcon } from "@/shared/icons/Progress";
import Image from "next/image";
import zenchain from "../../../public/assets/zenchain.png";
import { FiUsers } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";

const Progress = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className="bg-[#101114] text-white">
      <Header />

      <main className="px-[16px] sm:px-[32px] sm:pt-[48px] sm:pb-[64px] lg:px-[96px]">
        <div className="flex flex-col lg:flex-row justify-center w-full p-3">
          <nav className="lg:w-[240px] w-full font-chakra font-bold leading-[20px] text-[#8E8E8E] m-0 lg:mr-[40px]">
            <OverlayScrollbarsComponent
              className="h-auto max-h-[300px] lg:max-h-none"
              options={{
                scrollbars: {
                  autoHide: "never",
                },
              }}>
              <ul className="w-full border-b-[1px] border-[#27292D] lg:border-none flex flex-row lg:flex-col mb-3">
                {tabs.map((tab) => (
                  <li
                    key={tab.name}
                    className={`whitespace-nowrap p-[6px] lg:px-[16px] lg:py-[12px] lg:rounded-[12px] lg:mb-1 cursor-pointer ${
                      isActive(tab.href)
                        ? "border-b-[1px] border-white lg:border-none lg:bg-[--dark-gray] text-white"
                        : "hover:border-b-[1px] border-white lg:border-none lg:hover:bg-[--dark-gray] hover:text-white"
                    }`}>
                    <Link
                      href={tab.href}
                      className="flex items-center gap-3 text-[16px]">
                      <span className="hidden lg:block">{tab.icon}</span>
                      {tab.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </OverlayScrollbarsComponent>
          </nav>
          <section className="w-full min-h-[1300px] bg-[--dark-gray] p-[32px] rounded-[16px]">
            <div className="flex-col flex mb-[24px]">
              <div className="flex items-center justify-center w-[48px] h-[48px] bg-[#2A2B32] rounded-[12px]">
                <ProgressIcon size={24} color="#ffffff" />
              </div>
              <div className="mt-4">
                <p className="text-[24px] font-semibold leading-[32px] tracking-[-3%] mb-2">
                  Progress
                </p>
                <p className="text-[#949392] leading-[20px] mt-2 max-w-full lg:w-[650px]">
                  Track the progress of your sabaccounts on the guides
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="max-w-[650px] h-[75px] w-full bg-[#1F2025] border-[1px] border-[#25272B] rounded-[12px] p-[16px] flex items-center justify-between">
                <div className="flex items-center gap-[16px]">
                  <Image src={zenchain} alt="Zenchain" width={42} height={42} />
                  <div className="flex flex-col gap-[2px]">
                    <p className="text-[15px] leading-[20px] font-semibold">
                      Ithaca
                    </p>
                    <p className="flex items-center gap-[8px]">
                      <FiUsers size={16} />
                      <span className="text-[14px] leading-[20px] font-normal">
                        12 accounts
                      </span>
                    </p>
                  </div>
                </div>
                <FaChevronRight size={20} />
              </div>
              <div className="max-w-[650px] h-[75px] w-full bg-[#1F2025] border-[1px] border-[#25272B] rounded-[12px] p-[16px] flex items-center justify-between">
                <div className="flex items-center gap-[16px]">
                  <Image src={zenchain} alt="Zenchain" width={42} height={42} />
                  <div className="flex flex-col gap-[2px]">
                    <p className="text-[15px] leading-[20px] font-semibold">
                      Ithaca
                    </p>
                    <p className="flex items-center gap-[8px]">
                      <FiUsers size={16} />
                      <span className="text-[14px] leading-[20px] font-normal">
                        12 accounts
                      </span>
                    </p>
                  </div>
                </div>
                <FaChevronRight size={20} />
              </div>
              <div className="max-w-[650px] h-[75px] w-full bg-[#1F2025] border-[1px] border-[#25272B] rounded-[12px] p-[16px] flex items-center justify-between">
                <div className="flex items-center gap-[16px]">
                  <Image src={zenchain} alt="Zenchain" width={42} height={42} />
                  <div className="flex flex-col gap-[2px]">
                    <p className="text-[15px] leading-[20px] font-semibold">
                      Ithaca
                    </p>
                    <p className="flex items-center gap-[8px]">
                      <FiUsers size={16} />
                      <span className="text-[14px] leading-[20px] font-normal">
                        12 accounts
                      </span>
                    </p>
                  </div>
                </div>
                <FaChevronRight size={20} />
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Progress;
