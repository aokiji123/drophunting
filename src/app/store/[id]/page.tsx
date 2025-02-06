"use client";

import React, { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import Image from "next/image";
import storePhoto from "../../../../public/assets/store-photo.png";
import { useRouter } from "next/navigation";

const Guide = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <div className="bg-[#101114] text-white">
      <Header />

      <main>
        <div className="pl-[30px] xl:pl-[96px] mb-[30px]">
          <button
            onClick={() => router.push("/store")}
            className="flex items-center pr-[14px] pl-[8px] py-[8px] rounded-[32px] gap-1 bg-[#1C1D21] text-[#7F7F7F]"
          >
            <IoIosArrowBack size={20} />
            <p>Back</p>
          </button>
        </div>
        <div className="pt-[16px] pb-[80px] px-[32px] md:gap-[56px] flex justify-center">
          <div className="lg:w-[610px]">
            <div className="flex items-center mb-[16px]">
              <p className="rounded-[6px] px-[8px] py-[6px] bg-[#211E12] text-[13px] leading-[16px] font-semibold text-[#C6A975]">
                Project
              </p>
            </div>
            <p className="text-[32px] leading-[40px] font-bold tracking-[-2%]">
              Premium. 5 Airdrops with winning
            </p>

            <div
              className={`block lg:hidden max-w-[400px] min-h-[480px] border-[1px] bg-[#1A1B1F] border-[#24262C] rounded-[16px] overflow-hidden transition-all duration-300 mt-[32px]`}
            >
              <Image src={storePhoto} alt="Store" className="w-full" />
              <div className="h-[280px] p-[20px] pb-[16px] bg-[#1A1B1F] flex flex-col justify-between">
                <div className="flex flex-col gap-[20px]">
                  <p className="text-[18px] leading-[22px] font-bold">
                    Premium. 5 Airdrops with winning
                  </p>
                  <p className="text-[14px] leading-[20px] text-[#B0B0B0]">
                    DropHunting provides turnkey project spinning service.
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
                <button className="w-full px-[24px] py-[18px] rounded-[16px] bg-[#11CA00] text-[17px] leading-[20px] font-semibold">
                  Order product
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-[32px] mt-[32px]">
              <div className="flex flex-col gap-[16px]">
                <p className="text-[18px] leading-[28px] font-bold">
                  Description
                </p>

                <p className="text-[15px] leading-[22px] text-[#CACBCE]">
                  An airdrop is announced with the allocation of a significant
                  pool of rewards. Conditions of participation and requirements
                  are clear. The number of participants is still small but
                  growing. Early participation provides an advantage in the form
                  of an increased number of points, which will later be
                  converted into rewards.
                </p>
                <p className="text-[15px] leading-[22px] text-[#CACBCE] font-bold">
                  Our project activities include:
                </p>
                <ul className="text-[15px] leading-[22px] text-[#CACBCE] list-disc pl-[15px]">
                  <li>Collecting initial rewards and points.</li>
                  <li>Daily fulfillment of activity on the platform.</li>
                  <li>
                    Daily onchain transactions within a set range of activities,
                    taking into account the optimal balance between efficiency
                    and security in the context of defense against sybil
                    attacks.
                  </li>
                </ul>
                <p className="text-[15px] leading-[22px] text-[#CACBCE]">
                  An airdrop is announced with the allocation of a significant
                  pool of rewards. Conditions of participation and requirements
                  are clear. The number of participants is still small but
                  growing. Early participation provides an advantage in the form
                  of an increased number of points, which will later be
                  converted into rewards.
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                <p className="text-[18px] leading-[28px] font-bold">
                  ProjectCost of the service:
                </p>
                <ul className="text-[15px] leading-[22px] text-[#CACBCE] list-disc pl-[15px]">
                  <li>For orders of 50 wallets or more: $15 per unit.</li>
                  <li>For orders of 100 wallets or more: $12 per unit.</li>
                </ul>
                <p className="text-[15px] leading-[22px] text-[#CACBCE]">
                  You can learn more details and familiarize yourself with the
                  cases of DG team in the official channel{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`hidden lg:block max-w-[400px] min-h-[480px] border-[1px] bg-[#1A1B1F] border-[#24262C] rounded-[16px] overflow-hidden transition-all duration-300`}
            >
              <Image src={storePhoto} alt="Store" className="w-full" />
              <div className="h-[280px] p-[20px] pb-[16px] bg-[#1A1B1F] flex flex-col justify-between">
                <div className="flex flex-col gap-[20px]">
                  <p className="text-[18px] leading-[22px] font-bold">
                    Premium. 5 Airdrops with winning
                  </p>
                  <p className="text-[14px] leading-[20px] text-[#B0B0B0]">
                    DropHunting provides turnkey project spinning service.
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
                <button
                  onClick={toggleModal}
                  className="w-full px-[24px] py-[18px] rounded-[16px] bg-[#11CA00] text-[17px] leading-[20px] font-semibold"
                >
                  Order product
                </button>
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-40 z-55"></div>

            <div className="absolute transform translate-y-1/2 sm:translate-y-0 top-[60px] left-1/2 -translate-x-1/2 w-[320px] sm:w-[380px] min-h-[500px] rounded-[12px] z-60 bg-[#1C1E22] p-6">
              <button className="absolute top-5 right-5" onClick={toggleModal}>
                <IoMdClose
                  size={24}
                  className="hover:text-[#9EA0A6] cursor-pointer"
                />
              </button>
              <div>
                <p className="text-[24px] font-bold leading-[20px]">
                  Order Product
                </p>
                <p className="text-[14px] leading-[16px] font-chakra text-[#8E8E8E] mt-[12px] mb-[28px]">
                  Leave your contacts and the drophunting team will be sure to
                  get back to you
                </p>
                <div className="flex flex-col gap-2 mb-[16px]">
                  <p className="font-semibold">Telegram</p>
                  <input
                    className="bg-[#292B2F] px-[16px] py-[12px] rounded-[14px]"
                    placeholder="@nickname"
                  />
                </div>
                <div className="flex flex-col gap-2 mb-[24px]">
                  <p className="font-semibold">Your message</p>
                  <textarea
                    className="w-full min-h-[50px] h-[160px] bg-[#292B2F] px-[16px] py-[12px] rounded-[14px] resize-none"
                    placeholder="Describe your idea"
                  />
                </div>
                <button className="w-full font-sans flex items-center justify-center gap-1 rounded-[16px] py-[18px] pr-[16px] pl-[24px] bg-[#11CA00] font-semibold text-[17px] leading-[20px]">
                  Send
                </button>
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Guide;
