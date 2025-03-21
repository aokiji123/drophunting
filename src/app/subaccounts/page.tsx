"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { FiUsers } from "react-icons/fi";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Pagination,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { tabs } from "@/shared/utils/tabs";
import SmallChartPie from "@/shared/components/SmallChartPie";
import useCustomScrollbar from "@/shared/hooks/useCustomScrollbar";
import useStore from "@/shared/store";
import { format } from "date-fns";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import trashIcon from "../../../public/assets/icons/trash-red.png";
import { BuySubaccountsModal } from "../components/modals/BuySubaccountsModal";

const Subaccounts = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const [copied, setCopied] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showBuySubaccountsModal, setShowBuySubaccountsModal] = useState(false);

  const {
    subaccounts,
    isLoadingSubaccounts,
    subaccountsError,
    fetchSubaccounts,
  } = useStore();

  useEffect(() => {
    fetchSubaccounts();
  }, [fetchSubaccounts]);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    setCurrentPage(page);
    fetchSubaccounts(page);
  };

  const handleCopy = () => {
    if (subaccounts?.subaccounts_link) {
      navigator.clipboard.writeText(subaccounts.subaccounts_link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "dd.MM.yyyy");
    } catch (error) {
      console.error(error);
      return dateString;
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
            {isLoadingSubaccounts && !subaccounts ? (
              <div className="flex justify-center items-center h-[200px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#11CA00]"></div>
              </div>
            ) : subaccountsError ? (
              <div className="flex justify-center items-center h-[200px]">
                <p className="text-red-500">{subaccountsError}</p>
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="flex lg:flex-row flex-col items-end justify-between w-full">
                  <div>
                    <div className="flex items-center justify-center w-[48px] h-[48px] bg-[#2A2B32] rounded-[12px]">
                      <FiUsers size={24} />
                    </div>
                    <div className="mt-4">
                      <p className="text-[24px] font-semibold leading-[32px] tracking-[-3%] mb-2">
                        Subaccounts
                      </p>
                      <p className="text-[#949392] leading-[20px] mt-2 max-w-full lg:w-[650px]">
                        You can invite partners to work together by creating
                        sub-accounts. The subaccount limit can be increased to
                        the required number of subaccounts.
                      </p>
                    </div>
                    <div className="bg-[#1B1C20] p-[24px] rounded-[12px] my-6 w-full lg:w-[630px]">
                      <div className="flex items-center gap-3">
                        <p className="leading-[16px] font-semibold">
                          Subaccounts is used
                        </p>
                        <SmallChartPie
                          max={subaccounts?.limit_subaccounts || 0}
                          current={subaccounts?.subaccounts_count || 0}
                        />
                        <p className="leading-[16px] font-semibold">
                          {subaccounts
                            ? `${subaccounts.subaccounts_count}/${subaccounts.limit_subaccounts}`
                            : "0/0"}
                        </p>
                      </div>
                      <hr className="mb-[25px] mt-[10px] border-0 h-px bg-[#27292D]" />
                      <div className="flexitems-center justify-between">
                        <p className="text-[13px] sm:text-[14px] leading-[20px] font-bold mr-[5px]">
                          Send invitation link
                        </p>
                        <div className="relative flex items-center justify-between md:w-[465px] gap-[10px] mt-3">
                          <input
                            value={subaccounts?.subaccounts_link || ""}
                            readOnly
                            className="bg-[#24262B] p-[12px] rounded-[12px] w-full truncate leading-[20px]"
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
                    </div>
                  </div>
                  <button
                    onClick={() => setShowBuySubaccountsModal(true)}
                    className="bg-[#11CA00] text-white px-[16px] py-[12px] rounded-[12px] my-6 text-[15px] font-bold leading-[20px]">
                    Buy subaccounts
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-[16px] font-bold leading-[24px] -tracking-[3%]">
                    My subaccounts
                  </p>
                  <p className="text-[#797979] text-[16px] leading-[24px] font-bold">
                    {subaccounts?.subaccounts_count || 0}
                  </p>
                </div>
                {isLoadingSubaccounts && subaccounts ? (
                  <div className="flex justify-center items-center h-[200px]">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#11CA00]"></div>
                  </div>
                ) : (
                  <>
                    <TableContainer
                      ref={tableRef}
                      sx={{
                        backgroundColor: "transparent",
                        overflowX: "scroll",
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
                            padding: "16px 8px",
                            fontFamily: "IBM Plex Mono",
                          },
                          "& .MuiTableCell-body": {
                            color: "#FFFFFF",
                            fontSize: "14px",
                            lineHeight: "20px",
                            borderBottom: "1px solid #27292D",
                            padding: "16px 8px",
                            fontFamily: "IBM Plex Mono",
                          },
                        }}
                        aria-label="subaccounts table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Delete</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {subaccounts?.subaccounts.data &&
                          subaccounts.subaccounts.data.length > 0 ? (
                            subaccounts.subaccounts.data.map((subaccount) => (
                              <TableRow
                                key={subaccount.id}
                                sx={{
                                  "&:hover": {
                                    backgroundColor: "#27292D",
                                  },
                                }}>
                                <TableCell
                                  align="left"
                                  className="min-w-[220px]">
                                  <div className="flex items-center gap-2">
                                    <Image
                                      src={subaccount.avatar}
                                      alt={subaccount.name}
                                      width={28}
                                      height={28}
                                      className="w-[28px] h-[28px] rounded-full object-cover"
                                    />
                                    <p>{subaccount.name}</p>
                                  </div>
                                </TableCell>
                                <TableCell
                                  align="left"
                                  className="min-w-[220px]">
                                  {subaccount.email}
                                </TableCell>
                                <TableCell align="left">
                                  {formatDate(subaccount.created_at)}
                                </TableCell>
                                <TableCell align="left">
                                  <button className="text-[#FFA7A7] flex items-center gap-1">
                                    <Image
                                      src={trashIcon}
                                      alt="trash"
                                      width={14}
                                      height={14}
                                    />
                                    <p className="text-[14px] leading-[20px]">
                                      Delete
                                    </p>
                                  </button>
                                </TableCell>
                              </TableRow>
                            ))
                          ) : (
                            <TableRow>
                              <TableCell colSpan={3} align="center">
                                No subaccounts found
                              </TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </TableContainer>

                    {subaccounts?.subaccounts.data &&
                      subaccounts.subaccounts.data.length > 0 && (
                        <div className="flex justify-center mt-6">
                          <Pagination
                            count={Math.ceil(
                              (subaccounts?.subaccounts_count || 0) /
                                parseInt(
                                  subaccounts?.subaccounts.per_page || "10",
                                ),
                            )}
                            page={currentPage}
                            onChange={handlePageChange}
                            variant="outlined"
                            shape="rounded"
                            sx={{
                              "& .MuiPaginationItem-root": {
                                color: "#FFFFFF",
                                borderColor: "#27292D",
                              },
                              "& .MuiPaginationItem-root.Mui-selected": {
                                backgroundColor: "#11CA00",
                                borderColor: "#11CA00",
                              },
                            }}
                          />
                        </div>
                      )}
                  </>
                )}
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />

      {showBuySubaccountsModal && (
        <BuySubaccountsModal
          onClose={() => setShowBuySubaccountsModal(false)}
        />
      )}
    </div>
  );
};

export default Subaccounts;
