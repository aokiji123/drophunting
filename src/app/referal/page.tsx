"use client";
import React, { ChangeEvent, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { LuPercent } from "react-icons/lu";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Slider,
  sliderClasses,
  styled,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import avatar from "../../../public/assets/avatar.png";
import { tabs } from "@/shared/utils/tabs";

const CustomSlider = styled(Slider)({
  height: 8,
  [`&.${sliderClasses.root}`]: {
    padding: 0,
    margin: 0,
  },
  [`& .${sliderClasses.track}`]: {
    background: "linear-gradient(to right, #d2f21b, #5af86e)",
    border: "none",
    zIndex: 2,
  },
  [`& .${sliderClasses.thumb}`]: {
    display: "none",
  },
  [`& .${sliderClasses.rail}`]: {
    opacity: 0.3,
    backgroundColor: "#282A2E",
  },
  [`& .${sliderClasses.mark}`]: {
    height: 4,
    width: 1,
    backgroundColor: "#FFFFFF17",
    zIndex: 1,
  },
});

const marks = Array.from({ length: 21 }, (_, i) => ({
  value: i,
  visible: i !== 0 && i !== 20,
}));

const Referal = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const [value, setValue] = useState(
    "https:\\invitation.drophunting.io/2101024/10"
  );

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="bg-[#101114] text-white">
      <Header />

      <main className="container flex-col flex items-center mx-auto justify-center lg:flex-row overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-center md:items-center lg:items-baseline w-full p-3">
          <nav className="lg:w-[15%] w-full font-chakra font-bold leading-[20px] text-[#8E8E8E] m-0 lg:mr-[40px]">
            <ul className="no-scrollbar overflow-auto w-full lg:w-[115%] xl:w-[100%] border-b-[1px] border-[#27292D] lg:border-none flex flex-row lg:flex lg:flex-col mb-5">
              {tabs.map((tab) => (
                <li
                  key={tab.name}
                  className={`p-[6px] lg:pr-[16px] lg:pl-0px xl:px-[16px] lg:py-[12px] lg:rounded-[12px] lg:mb-1 cursor-pointer ${
                    isActive(tab.href)
                      ? "border-b-[1px] border-white lg:border-none lg:bg-[--dark-gray] text-white"
                      : "hover:border-b-[1px] border-white lg:border-none lg:hover:bg-[--dark-gray] hover:text-white"
                  }`}
                >
                  <Link
                    href={tab.href}
                    className="flex items-center gap-3 text-[16px]"
                  >
                    <p className="hidden lg:block">{tab.icon}</p>
                    {tab.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <section className="min-h-[750px] md:flex md:items-center md:justify-center md:w-[704px] lg:w-[954px] lg:h-[881px] lg:justify-normal lg:items-baseline lg:block bg-[#17181B] p-[16px] sm:p-[32px] rounded-[16px]">
            <div className="flex-col flex">
              <div className="flex items-center justify-center w-[48px] h-[48px] bg-[#2A2B32] rounded-[12px]">
                <LuPercent size={24} />
              </div>
              <div className="mt-4">
                <p className="text-[24px] font-semibold leading-[32px] tracking-[-3%] mb-2">
                  Invite friends
                </p>
                <p className="text-[#949392] leading-[20px] w-[325px] sm:w-[450px] lg:w-[650px] mb-5">
                  Invite friends and get 20% rewards
                </p>
              </div>
              <div className="flex gap-[24px] flex-row items-center sm:gap-[36px]">
                <div className="flex flex-col gap-[16px] min-w-[96px]">
                  <p className="font-semibold leading-[20px]">Your profit</p>
                  <p className="text-[25px] leading-[28px] font-semibold">
                    20%
                  </p>
                </div>
                <div className="flex flex-col gap-[8px] mt-[3px] flex-grow">
                  <p className="font-semibold leading-[20px]">
                    Referals invited
                  </p>
                  <div className="flex flex-row items-center gap-[20px]">
                    <p className="text-[25px] leading-[28px] font-semibold">
                      5
                    </p>
                    <div
                      className="bg-[#232427BA] rounded-[100px] p-[4px] flex items-center justify-center"
                      style={{ maxWidth: "441px", width: "100%" }}
                    >
                      <CustomSlider
                        defaultValue={5}
                        step={1}
                        marks={marks
                          .filter((mark) => mark.visible)
                          .map((mark) => ({ value: mark.value }))}
                        min={0}
                        max={20}
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1B1C20] sm:p-[12px] rounded-[12px] my-6 w-full border-[1px] border-[#202126]">
                <div className="flex flex-col sm:flex-row">
                  {/* <div className="flex md:items-center gap-4">
                    <IoLockClosedOutline size={24} className="text-[#8E8E8E]" />
                    <p className="text-[13px] sm:text-[14px] leading-[20px] font-bold mr-[5px]">
                      Subaccount not allow. Please try again
                    </p>
                  </div>
                  <button className="flex items-center rounded-[12px] py-[7px] px-[10px] md:py-[14px] md:px-[20px] text-[15px] bg-[#11CA00] font-bold leading-[20px]">
                    Upgrade plan
                  </button> */}
                  <div className="border-b-[1px] border-[#202126] p-[24px] sm:border-b-0 sm:border-r-[1px] sm:border-[#202126] sm:p-[12px] sm:pr-[24px] w-full md:w-[324px] lg:w-[65%]">
                    <p className="text-[13px] sm:text-[14px] leading-[20px] font-bold mr-[5px]">
                      Send invitation link
                    </p>
                    <div className="flex items-center gap-[10px] mt-3">
                      <input
                        onChange={handleValueChange}
                        value={value}
                        className="w-full bg-[#24262B] p-[12px] rounded-[12px] truncate text-[14px] leading-[20px]"
                      />
                      <button className="flex items-center rounded-[12px] p-[12px] md:py-[12px] md:px-[20px] text-[15px] bg-[#11CA00] font-bold leading-[20px]">
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="w-full md:w-[50%] lg:w-[35%] p-[24px] sm:p-[12px] sm:pl-[24px]">
                    <p className="text-[13px] sm:text-[14px] w-full leading-[20px] font-bold mr-[5px]">
                      Rewards
                    </p>
                    <div className="flex items-center justify-between mt-3 gap-[20px]">
                      <p className="text-[25px] leading-[28px] font-semibold">
                        $720,31
                      </p>
                      <button className="flex items-center rounded-[12px] p-[12px] md:py-[12px] md:px-[20px] text-[15px] bg-[#11CA00] font-bold leading-[20px]">
                        Claim
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-[8px]">
                  <p className="text-[16px] font-bold leading-[24px] -tracking-[3%]">
                    Your referals
                  </p>
                  <p className="text-[#797979] text-[16px] leading-[24px] font-bold">
                    5
                  </p>
                </div>
                <TableContainer
                  sx={{
                    backgroundColor: "transparent",
                    overflowX: {
                      sm: "scroll",
                      md: "visible",
                    },
                  }}
                >
                  <Table
                    sx={{
                      width: "100%",
                      "& .MuiTableCell-head": {
                        backgroundColor: "transparent",
                        color: "#949392",
                        fontWeight: "bold",
                        fontSize: "13px",
                        lineHeight: "16px",
                        borderBottom: "1px solid #27292D",
                        padding: "8px",
                        fontFamily: "IBM Plex Mono",
                      },
                      "& .MuiTableCell-body": {
                        color: "#FFFFFF",
                        fontSize: "14px",
                        lineHeight: "20px",
                        borderBottom: "1px solid #27292D",
                        padding: "10px 8px",
                        fontFamily: "IBM Plex Mono",
                      },
                    }}
                    aria-label="subscriptions table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Amount</TableCell>
                        <TableCell align="left">Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[1, 2, 3, 4, 5, 6].map((el, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            "&:hover": {
                              backgroundColor: "#27292D",
                            },
                          }}
                        >
                          <TableCell
                            align="left"
                            className="min-w-[220px] text-white"
                          >
                            <div className="flex items-center gap-2">
                              <Image
                                src={avatar}
                                alt="Avatar"
                                className="w-[28px] h-[28px] rounded-full"
                              />
                              <p>Artem-Drophunter</p>
                            </div>
                          </TableCell>
                          <TableCell
                            align="left"
                            className="min-w-[220px] text-white"
                          >
                            artem-hunter@gmail.com
                          </TableCell>
                          <TableCell
                            align="left"
                            className="min-w-[50px] text-white"
                          >
                            $120
                          </TableCell>
                          <TableCell align="left" className="text-white">
                            23.11.2024
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Referal;
