"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { FaDollarSign } from "react-icons/fa6";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Link from "next/link";
import { tabs } from "@/shared/utils/tabs";
import SmallChartPie from "@/shared/components/SmallChartPie";
import { PlansModal } from "../components/modals/PlansModal";
import useCustomScrollbar from "@/shared/hooks/useCustomScrollbar";
import useStore from "@/shared/store";
import { format } from "date-fns";

const Subscriptions = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    user,
    subscriptions,
    isLoadingSubscriptions,
    subscriptionsError,
    fetchSubscriptions,
  } = useStore();

  useEffect(() => {
    fetchSubscriptions();
  }, [fetchSubscriptions]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const tableRef = useCustomScrollbar({
    scrollbars: {
      autoHide: "never",
    },
  });

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "dd.MM.yyyy");
    } catch (error) {
      console.error("Error formatting date:", error);
      return dateString;
    }
  };

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
            <div className="flex-col flex">
              <div className="flex items-center justify-center w-[48px] h-[48px] bg-[#2A2B32] rounded-[12px]">
                <FaDollarSign size={24} />
              </div>
              <div className="mt-4">
                <p className="text-[24px] font-semibold leading-[32px] tracking-[-3%] mb-2">
                  Subscriptions
                </p>
                <p className="text-[#949392] leading-[20px] mt-2 md:w-[80%]">
                  Subscription allows you to get unlimited access to the site
                  materials. We provide a choice of several tariff plans based
                  on the principle “the longer - the cheaper”. A few free views
                  are available without subscription.
                </p>
              </div>
              <div className="mt-7">
                {subscriptions.length <= 0 && (
                  <div className="flex items-center gap-[10px]">
                    <p className="text-[15px] leading-[16px] font-semibold">
                      Free Views
                    </p>
                    <SmallChartPie half />
                    <p className="text-[15px] leading-[16px] font-semibold">
                      {user?.count_views} / {user?.free_views}
                    </p>
                  </div>
                )}
                <button
                  onClick={toggleModal}
                  className={`h-[44px] bg-[--green] px-[14px] py-[20px] font-sans font-bold leading-[16px] tracking-[-1%] rounded-[12px] flex items-center justify-center mt-[40px] my-[60px] ${
                    subscriptions.length > 0 && "mt-0"
                  }`}
                >
                  See plans
                </button>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <p className="text-[16px] font-bold leading-[24px] -tracking-[3%]">
                    My subscriptions
                  </p>
                  {!isLoadingSubscriptions && (
                    <p className="text-[#797979] text-[16px] leading-[24px] font-bold">
                      {subscriptions.length}
                    </p>
                  )}
                </div>

                {subscriptionsError && (
                  <div className="mt-4 p-3 bg-red-900/30 border border-red-500 rounded-[12px] text-red-400">
                    {subscriptionsError}
                  </div>
                )}

                {isLoadingSubscriptions ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#CBFF51]"></div>
                  </div>
                ) : (
                  <TableContainer
                    ref={tableRef}
                    sx={{
                      backgroundColor: "transparent",
                      overflowX: "scroll",
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
                          padding: "16px 8px",
                          fontFamily: "IBM Plex Mono",
                        },
                        "& .MuiTableCell-body": {
                          minWidth: 120,
                          color: "#FFFFFF",
                          fontSize: "14px",
                          lineHeight: "20px",
                          borderBottom: "1px solid #27292D",
                          padding: "16px 8px",
                          fontFamily: "IBM Plex Mono",
                        },
                      }}
                      aria-label="subscriptions table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell>Plan</TableCell>
                          <TableCell align="left">Date start</TableCell>
                          <TableCell align="left">Date end</TableCell>
                          <TableCell align="left">Price</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {subscriptions.length > 0 ? (
                          subscriptions.map((subscription, index) => (
                            <TableRow
                              key={index}
                              sx={{
                                "&:hover": {
                                  backgroundColor: "#27292D",
                                },
                              }}
                            >
                              <TableCell align="left">
                                {subscription.name}
                              </TableCell>
                              <TableCell align="left">
                                {formatDate(subscription.date_start)}
                              </TableCell>
                              <TableCell align="left">
                                {formatDate(subscription.date_end)}
                              </TableCell>
                              <TableCell align="left">
                                ${subscription.price}
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
                              You don&apos;t have any active subscriptions
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </div>
            </div>
          </section>
        </div>
        {isModalOpen && <PlansModal togglePlansModal={toggleModal} />}
      </main>

      <Footer />
    </div>
  );
};

export default Subscriptions;
