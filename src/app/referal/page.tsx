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
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import avatar from "../../../public/assets/avatar.png";
import { subaccountTabs, tabs } from "@/shared/utils/tabs";
import useCustomScrollbar from "@/shared/hooks/useCustomScrollbar";
import useStore from "@/shared/store";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Progress } from "@/shared/icons/Progress";

const Referal = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const [copied, setCopied] = useState(false);
  const {
    claimReward,
    referrals,
    isLoadingReferrals,
    referralsError,
    fetchReferrals,
    user,
  } = useStore();

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

  const handleClaim = () => {
    claimReward();
  };

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
                {user?.subaccount
                  ? subaccountTabs.map((tab) => (
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
                          <span className="hidden lg:block">
                            {tab.name === "Progress" ? (
                              <div className="group-hover:text-white">
                                <Progress
                                  size={24}
                                  color={
                                    isActive(tab.href)
                                      ? "white"
                                      : "currentColor"
                                  }
                                />
                              </div>
                            ) : (
                              tab.icon
                            )}
                          </span>
                          {tab.name}
                        </Link>
                      </li>
                    ))
                  : tabs.map((tab) => (
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
                          <span className="hidden lg:block">
                            {tab.name === "Progress" ? (
                              <div className="group-hover:text-white">
                                <Progress
                                  size={24}
                                  color={
                                    isActive(tab.href)
                                      ? "white"
                                      : "currentColor"
                                  }
                                />
                              </div>
                            ) : (
                              tab.icon
                            )}
                          </span>
                          {tab.name}
                        </Link>
                      </li>
                    ))}
              </ul>
            </OverlayScrollbarsComponent>
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
                <div className="flex gap-[24px] flex-row items-start sm:gap-[36px]">
                  <div className="flex flex-col gap-2 min-w-[96px]">
                    <p className="font-semibold leading-[20px]">Your profit</p>
                    <p className="text-[25px] leading-[28px] font-semibold">
                      {referrals?.profit || "0"}%
                    </p>
                  </div>
                  <div className="flex flex-col gap-[8px] flex-grow">
                    <p className="font-semibold leading-[20px]">
                      Referals invited
                    </p>
                    <div className="flex flex-row items-center gap-[20px]">
                      <p className="text-[25px] leading-[28px] font-semibold">
                        {referrals?.referrals_count || "0"}
                      </p>
                      <div
                        className="bg-[#232427BA] rounded-full p-[4px] flex items-center justify-center"
                        style={{ maxWidth: "441px", width: "100%" }}>
                        <div className="bg-[#282A2E] h-2 w-full relative rounded-full">
                          <div
                            className="rounded-full absolute h-full top-0 left-0"
                            style={{
                              minWidth:
                                (referrals?.referrals_count || 0) > 0
                                  ? "1%"
                                  : undefined,
                              background:
                                "linear-gradient(270deg, #9DFF2F 0%, #9DAC2D 49.41%, #2F4101 100%)",
                              width: `${((referrals?.referrals_count || 1) / (referrals?.limit_referals || 1)) * 100}%`,
                            }}
                          />
                        </div>
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
                          className="relative flex items-center rounded-[12px] p-[12px] md:py-[12px] md:px-[20px] text-[15px] bg-[#11CA00] font-bold leading-[20px] hover:bg-blue-500">
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
                        <button
                          disabled={+(referrals?.rewards || 0) === 0}
                          onClick={handleClaim}
                          className={`flex items-center rounded-[12px] p-[12px] md:py-[12px] md:px-[20px] text-[15px]  font-bold leading-[20px]  ${
                            +(referrals?.rewards || 0) === 0
                              ? "bg-gray-600 cursor-not-allowed"
                              : "bg-[#11CA00] hover:bg-blue-500"
                          }`}>
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
                    }}>
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
                      aria-label="referrals table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left">Name</TableCell>
                          <TableCell align="left">Email</TableCell>
                          <TableCell align="left">Amount</TableCell>
                          <TableCell align="left">Date</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {referrals && referrals.referrals.data.length > 0 ? (
                          referrals.referrals.data.map((referral) => (
                            <TableRow
                              key={referral.id}
                              sx={{
                                "&:hover": {
                                  backgroundColor: "#27292D",
                                },
                              }}>
                              <TableCell
                                align="left"
                                className="min-w-[220px] text-white">
                                <div className="flex items-center gap-2">
                                  <Image
                                    src={referral.avatar || avatar}
                                    alt="Avatar"
                                    width={28}
                                    height={28}
                                    className="w-[28px] h-[28px] rounded-full object-cover"
                                  />
                                  <p>{referral.name}</p>
                                </div>
                              </TableCell>
                              <TableCell
                                align="left"
                                className="min-w-[220px] text-white">
                                {referral.email}
                              </TableCell>
                              <TableCell
                                align="left"
                                className="min-w-[50px] text-white">
                                ${referral.amount || "0"}
                              </TableCell>
                              <TableCell align="left" className="text-white">
                                {referral.date}
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell
                              colSpan={4}
                              align="center"
                              sx={{ color: "#8E8E8E" }}>
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
