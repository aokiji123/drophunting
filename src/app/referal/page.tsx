"use client";
import React, { useState, useEffect } from "react";
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
import useCustomScrollbar from "@/shared/hooks/useCustomScrollbar";
import useStore from "@/shared/store";

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
  const [copied, setCopied] = useState(false);
  const { referrals, isLoadingReferrals, referralsError, fetchReferrals } =
    useStore();

  useEffect(() => {
    fetchReferrals();
  }, [fetchReferrals]);

  const handleCopy = () => {
    if (referrals?.referal_link) {
      navigator.clipboard.writeText(referrals.referal_link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const tableRef = useCustomScrollbar({
    scrollbars: {
      autoHide: "never",
    },
  });

  return (
    <div className="bg-[#101114] text-white">
      <Header />

      <main className="px-[16px] sm:px-[32px] sm:pt-[48px] sm:pb-[64px] lg:px-[96px]">
        <div className="flex flex-col lg:flex-row justify-center w-full p-3">
          <nav className="lg:w-[240px] w-full font-chakra font-bold leading-[20px] text-[#8E8E8E] m-0 lg:mr-[40px]">
            <ul className="no-scrollbar overflow-auto w-full border-b-[1px] border-[#27292D] lg:border-none flex flex-row lg:flex lg:flex-col mb-5">
              {tabs.map((tab) => (
                <li
                  key={tab.name}
                  className={`p-[6px] lg:px-[16px] lg:py-[12px] lg:rounded-[12px] lg:mb-1 cursor-pointer ${
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
          <section className="w-full min-h-[1300px] bg-[--dark-gray] p-[32px] rounded-[16px]">
            {isLoadingReferrals ? (
              <div className="flex items-center justify-center py-8 h-[40%]">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#CBFF51]"></div>
              </div>
            ) : referralsError ? (
              <div className="mt-4 p-3 bg-red-900/30 border border-red-500 rounded-[12px] text-red-400">
                {referralsError}
              </div>
            ) : (
              <div className="flex-col flex">
                <div className="flex items-center justify-center w-[48px] h-[48px] bg-[#2A2B32] rounded-[12px]">
                  <LuPercent size={24} />
                </div>
                <div className="mt-4">
                  <p className="text-[24px] font-semibold leading-[32px] tracking-[-3%] mb-2">
                    Invite friends
                  </p>
                  <p className="text-[#949392] leading-[20px] sm:w-[450px] lg:w-[650px] mb-5">
                    Invite friends and get {referrals?.profit || "20"}% rewards
                  </p>
                </div>
                <div className="flex gap-[24px] flex-row items-center sm:gap-[36px]">
                  <div className="flex flex-col gap-[16px] min-w-[96px]">
                    <p className="font-semibold leading-[20px]">Your profit</p>
                    <p className="text-[25px] leading-[28px] font-semibold">
                      {referrals?.profit || "0"}%
                    </p>
                  </div>
                  <div className="flex flex-col gap-[8px] mt-[3px] flex-grow">
                    <p className="font-semibold leading-[20px]">
                      Referals invited
                    </p>
                    <div className="flex flex-row items-center gap-[20px]">
                      <p className="text-[25px] leading-[28px] font-semibold">
                        {referrals?.referrals_count || "0"}
                      </p>
                      <div
                        className="bg-[#232427BA] rounded-[100px] p-[4px] flex items-center justify-center"
                        style={{ maxWidth: "441px", width: "100%" }}
                      >
                        <CustomSlider
                          defaultValue={referrals?.referrals_count || 0}
                          step={1}
                          marks={marks
                            .filter((mark) => mark.visible)
                            .map((mark) => ({ value: mark.value }))}
                          min={0}
                          max={referrals?.limit_referals || 20}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1B1C20] sm:p-[12px] rounded-[12px] my-6 w-full border-[1px] border-[#202126]">
                  <div className="flex flex-col sm:flex-row">
                    <div className="border-b-[1px] border-[#202126] p-[24px] sm:border-b-0 sm:border-r-[1px] sm:border-[#202126] sm:p-[12px] sm:pr-[24px] w-full md:w-[324px] lg:w-[65%]">
                      <p className="text-[13px] sm:text-[14px] leading-[20px] font-bold mr-[5px]">
                        Send invitation link
                      </p>
                      <div className="flex items-center gap-[10px] mt-3">
                        <input
                          value={referrals?.referal_link || ""}
                          readOnly
                          className="w-full bg-[#24262B] p-[12px] rounded-[12px] truncate text-[14px] leading-[20px]"
                        />
                        <button
                          onClick={handleCopy}
                          className="relative flex items-center rounded-[12px] p-[12px] md:py-[12px] md:px-[20px] text-[15px] bg-[#11CA00] font-bold leading-[20px] hover:bg-blue-500"
                        >
                          Copy
                          {copied && (
                            <span className="absolute top-[-35px] right-0 bg-[--dark-gray] text-white text-xs px-2 py-1 rounded-md w-[110px]">
                              Link copied!
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="w-full md:w-[50%] lg:w-[35%] p-[24px] sm:p-[12px] sm:pl-[24px]">
                      <p className="text-[13px] sm:text-[14px] w-full leading-[20px] font-bold mr-[5px]">
                        Rewards
                      </p>
                      <div className="flex items-center justify-between mt-3 gap-[20px]">
                        <p className="text-[25px] leading-[28px] font-semibold">
                          ${referrals?.rewards.toFixed(2) || "0.00"}
                        </p>
                        <button className="flex items-center rounded-[12px] p-[12px] md:py-[12px] md:px-[20px] text-[15px] bg-[#11CA00] font-bold leading-[20px] hover:bg-blue-500">
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
                      {referrals?.referrals_count || "0"}
                    </p>
                  </div>
                  <TableContainer
                    ref={tableRef}
                    sx={{
                      backgroundColor: "transparent",
                      overflowX: "visible",
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
                      aria-label="referrals table"
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
                        {referrals && referrals.transactions.data.length > 0 ? (
                          referrals.transactions.data.map((transaction) => (
                            <TableRow
                              key={transaction.id}
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
                                    src={transaction.referal.avatar || avatar}
                                    alt="Avatar"
                                    width={28}
                                    height={28}
                                    className="w-[28px] h-[28px] rounded-full object-cover"
                                  />
                                  <p>{transaction.referal.name}</p>
                                </div>
                              </TableCell>
                              <TableCell
                                align="left"
                                className="min-w-[220px] text-white"
                              >
                                {transaction.referal.email}
                              </TableCell>
                              <TableCell
                                align="left"
                                className="min-w-[50px] text-white"
                              >
                                ${transaction.sum}
                              </TableCell>
                              <TableCell align="left" className="text-white">
                                {transaction.date}
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell
                              colSpan={4}
                              align="center"
                              sx={{ color: "#8E8E8E" }}
                            >
                              You don&apos;t have any referrals yet
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Referal;
