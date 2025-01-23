"use client";
import React, { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { IoIosArrowBack, IoMdTime } from "react-icons/io";
import Image from "next/image";
import blog from "../../../shared/assets/blog.png";
import blogPhoto from "../../../shared/assets/blog-photo.png";
import { MdOutlineDone } from "react-icons/md";

const Guide = () => {
  const [isRead, setIsRead] = useState(false);

  const toggleReadState = () => {
    setIsRead((prevState) => !prevState);
  };

  return (
    <div className="bg-black text-white">
      <Header />

      <main className="">
        <div className="pl-[30px] md:pl-[96px] mb-[30px]">
          <button className="flex items-center pr-[14px] pl-[8px] py-[8px] rounded-[32px] gap-1 bg-[#1C1D21] text-[#7F7F7F]">
            <IoIosArrowBack size={20} />
            <p>Back</p>
          </button>
        </div>
        <div className="pb-[120px] px-[30px] sm:px-[56px] md:px-[106px] lg:px-[206px] xl:px-[306px]">
          <Image src={blog} alt="Blog image" className="w-full" />
          <div className="my-[32px]">
            <div className="flex items-center gap-[8px]">
              <div className="text-[#A0A8AE] flex items-center bg-[#212125] px-[8px] py-[6px] rounded-[6px] gap-1">
                <IoMdTime size={12} />
                <p className="text-[13px] leading-[16px] font-semibold">
                  10 min
                </p>
              </div>
              <p className="rounded-[6px] px-[8px] py-[6px] bg-[#212125] text-[13px] leading-[16px] font-semibold text-[#A0A8AE]">
                December 13
              </p>
              <p className="rounded-[6px] px-[8px] py-[6px] bg-[#211E12] text-[13px] leading-[16px] font-semibold text-[#C6A975]">
                Newbie
              </p>
            </div>
          </div>
          <p className="font-bold text-[32px] lg:text-[35px] xl:text-[42px] leading-[38px] lg:leading-[50px]">
            Bitcoin, Green Mining, and the Possibility for a More Sustainable
            Future
          </p>
          <div
            onClick={toggleReadState}
            className={`cursor-pointer p-4 rounded-[12px] flex items-center transition-all duration-300 mt-[32px] max-w-[180px] ${
              isRead ? "bg-[#1D2A19]" : "bg-[#1a1a21]"
            }`}
          >
            <div className="flex items-center gap-4 max-w-[]">
              <div
                className={`w-[32px] h-[32px] flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  isRead
                    ? "border-[#47572D75] bg-[#151B15]"
                    : "border-[#32353D]"
                }`}
              >
                <div
                  className={`${isRead && `bg-[#CBFF512E] rounded-full p-[4px] text-[#CBFF51]`}`}
                >
                  {isRead && <MdOutlineDone size={16} />}
                </div>
              </div>
              <p
                className={`font-chakra font-bold text-[18px] leading-[15px] ${
                  isRead ? "text-[#A0A8AECC]" : "text-[#A0A8AE]"
                }`}
              >
                I have read
              </p>
            </div>
          </div>
          <p className="text-[18px] leading-[22px] font-chakra  text-[#CACBCE] mt-[32px]">
            PayPal’s Blockchain Research Group, in a strategic collaboration
            with Energy Web and DMG Blockchain Solutions Inc. (“DMG”), presents
            an opportunity to accelerate the clean energy transition for Bitcoin
            mining. Just like so many other mechanisms throughout web3
          </p>
          <div className="flex flex-col font-chakra mt-[32px]">
            <div className="flex flex-col gap-[24px] mb-[60px]">
              <p className="text-[34px] leading-[41px] font-bold">
                Incentivizing desired activity with cryptoeconomics
              </p>
              <p className="text-[18px] leading-[28px] text-[#CACBCE]">
                One of the most pervasive conversations surrounding blockchain
                technology is sustainability. Blockchain networks — specifically
                proof-of-work (PoW) networks like Bitcoin — can consume large
                amounts of energy. Recent estimates suggest that Bitcoin mining
                is currently responsible annually for an estimated 85 million
                metric tons of carbon dioxide equivalent (as of April 02, 2024).
                Even with new blockchain consensus mechanisms proliferating
                rapidly, Bitcoin’s PoW architecture is likely to persist.
              </p>
            </div>
            <div className="flex flex-col gap-[24px] mb-[30px]">
              <p className="text-[28px] leading-[35px] font-bold">
                PayPal’s Blockchain Research Group&#39;s partner
              </p>
              <p className="text-[18px] leading-[28px] text-[#CACBCE]">
                EnergyWeb has developed a clean energy validation platform to
                permit Bitcoin miners to obtain low-carbon accreditation for
                their mining operations. These green miners are associated with
                public keys (which we refer to as green keys), to which rewards
                can be distributed. On-chain transactions are preferentially
                routed to green miners by being broadcasted with low transaction
                fees, but with some BTC reward “locked” in a multisig payout
                address. Green miners will be incentivized to mine these
                transactions, since they will be the only ones eligible for the
                additional “locked” BTC reward.
              </p>
            </div>
            <div className="flex flex-col gap-[24px]">
              <p className="text-[22px] leading-[28px] font-bold">
                Incentivizing desired activity with cryptoeconomics
              </p>
              <p className="text-[18px] leading-[28px] text-[#CACBCE]">
                PayPal’s Blockchain Research Group hopes that this paper
                influences preferred behaviors by proposing ways in which
                fundamental cryptoeconomic incentives can be reapplied to
                improve and optimize existing, proven, strong networks.
                Sustainability is a significant topic of conversation for nearly
                every emerging and established industry in the world, and we aim
                to support the role of crypto in a sustainable future.
              </p>
            </div>
          </div>
          <Image src={blogPhoto} alt="Blog photo" className="my-[30px]" />
          <ul className="font-chakra list-none flex flex-col gap-[24px] mb-[63px]">
            <li className="relative pl-6">
              <span className="absolute left-0 top-2.5 h-[7px] w-[7px] bg-[#ABE91A]"></span>
              <p className="text-[20px] leading-[28px] font-bold">
                Use InVision’s Jira integration
              </p>
              <p className="text-[18px] leading-[24px] text-[#CACBCE]">
                Use InVision’s Jira integration to easily get stakeholders
                involved in project planning and start your build with total
                team alignment.
              </p>
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 top-2.5 h-[7px] w-[7px] bg-[#ABE91A]"></span>
              <p className="text-[20px] leading-[28px] font-bold">
                Plan and prioritize
              </p>
              <p className="text-[18px] leading-[24px] text-[#CACBCE]">
                Plan, prioritize, and manage project tasks with the new Project
                Task Prioritization template by Jira
              </p>
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 top-2.5 h-[7px] w-[7px] bg-[#ABE91A]"></span>
              <p className="text-[20px] leading-[28px] font-bold">
                Align objects
              </p>
              <p className="text-[18px] leading-[24px] text-[#CACBCE]">
                Easily align objects, text and images with new snapping
                guidelines to give your Freehand canvas a high quality finish,
                in a snap.
              </p>
            </li>
          </ul>
          <div className="flex items-center justify-center">
            <div
              onClick={toggleReadState}
              className={`cursor-pointer p-4 rounded-[12px] flex items-center transition-all duration-300 max-w-[180px] ${
                isRead ? "bg-[#1D2A19]" : "bg-[#1a1a21]"
              }`}
            >
              <div className="flex items-center gap-4 max-w-[]">
                <div
                  className={`w-[32px] h-[32px] flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    isRead
                      ? "border-[#47572D75] bg-[#151B15]"
                      : "border-[#32353D]"
                  }`}
                >
                  <div
                    className={`${isRead && `bg-[#CBFF512E] rounded-full p-[4px] text-[#CBFF51]`}`}
                  >
                    {isRead && <MdOutlineDone size={16} />}
                  </div>
                </div>
                <p
                  className={`font-chakra font-bold text-[18px] leading-[15px] ${
                    isRead ? "text-[#A0A8AECC]" : "text-[#A0A8AE]"
                  }`}
                >
                  I have read
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Guide;
