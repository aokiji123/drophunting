"use client";
import React, { ChangeEvent, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { FiUsers } from "react-icons/fi";
import { IoIosInformationCircle } from "react-icons/io";
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
import avatar from "../../shared/assets/avatar.png";
import avatar2 from "../../shared/assets/avatar-2.png";
import { tabs } from "@/shared/utils/tabs";

const Subaccounts = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const [value, setValue] = useState(
    "https:\\invitation.drophunting.io/2101024/10",
  );

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="bg-black text-white">
      <Header />

      <main className="container flex-col flex items-center mx-auto justify-center lg:flex-row overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-center w-full p-3">
          <nav className="lg:w-[15%] w-full font-chakra font-bold leading-[20px] text-[#8E8E8E] m-0 lg:mr-[40px]">
            <ul className="no-scrollbar overflow-y-scroll w-full lg:w-[115%] xl:w-[100%] border-b-[1px] border-[#27292D] lg:border-none flex flex-row lg:flex lg:flex-col mb-5">
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
          <section className="min-h-[750px] w-full lg:w-[85%] bg-[#17181B] p-[16px] sm:p-[32px] rounded-[16px]">
            <div className="flex-col flex">
              <div className="flex items-center justify-center w-[48px] h-[48px] bg-[#2A2B32] rounded-[12px]">
                <FiUsers size={24} />
              </div>
              <div className="mt-4">
                <p className="text-[24px] font-semibold leading-[32px] tracking-[-3%] mb-2">
                  Subaccounts
                </p>
                <p className="text-[#949392] leading-[20px] mt-2 max-w-full lg:w-[650px]">
                  You can invite partners to work together by creating
                  sub-accounts. The subaccount limit can be increased to the
                  required number of subaccounts.
                </p>
              </div>
              <div className="bg-[#1B1C20] p-[24px] rounded-[12px] my-6 w-full lg:w-[630px]">
                <div className="flex items-center gap-3">
                  <p className="leading-[16px] font-semibold">
                    Subaccounts is used
                  </p>
                  <p className="leading-[16px] font-semibold">2/2</p>
                  <IoIosInformationCircle
                    size={20}
                    className="text-[#515256]"
                  />
                </div>
                <hr className="mb-[25px] mt-[10px] border-0 h-px bg-[#27292D]" />
                <div className="flexitems-center justify-between">
                  {/* <div className="flex md:items-center gap-4">
                    <IoLockClosedOutline size={24} className="text-[#8E8E8E]" />
                    <p className="text-[13px] sm:text-[14px] leading-[20px] font-bold mr-[5px]">
                      Subaccount not allow. Please try again
                    </p>
                  </div>
                  <button className="flex items-center rounded-[12px] py-[7px] px-[10px] md:py-[14px] md:px-[20px] text-[15px] bg-[#11CA00] font-bold leading-[20px]">
                    Upgrade plan
                  </button> */}
                  <p className="text-[13px] sm:text-[14px] leading-[20px] font-bold mr-[5px]">
                    Send invitation link
                  </p>
                  <div className="flex items-center justify-between md:w-[465px] gap-[10px] mt-3">
                    <input
                      onChange={handleValueChange}
                      value={value}
                      className="bg-[#24262B] p-[12px] rounded-[12px] w-full truncate leading-[20px]"
                    />
                    <button className="flex items-center rounded-[12px] p-[12px] md:py-[12px] md:px-[20px] text-[15px] bg-[#11CA00] font-bold leading-[20px]">
                      Copy
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <p className="text-[16px] font-bold leading-[24px] -tracking-[3%]">
                    My subaccounts
                  </p>
                  <p className="text-[#797979] text-[16px] leading-[24px] font-bold">
                    5
                  </p>
                </div>
                <TableContainer
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
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:hover": {
                            backgroundColor: "#27292D",
                          },
                        }}
                      >
                        <TableCell align="left" className="min-w-[220px]">
                          <div className="flex items-center gap-2">
                            <Image
                              src={avatar}
                              alt="Avatar"
                              className="w-[28px] h-[28px] rounded-full"
                            />
                            <p>Artem-Drophunter</p>
                          </div>
                        </TableCell>
                        <TableCell align="left" className="min-w-[220px]">
                          artem-hunter@gmail.com
                        </TableCell>
                        <TableCell align="left">23.11.2024</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:hover": {
                            backgroundColor: "#27292D",
                          },
                        }}
                      >
                        <TableCell align="left">
                          <div className="flex items-center gap-2">
                            <Image
                              src={avatar2}
                              alt="Avatar"
                              className="w-[28px] h-[28px] rounded-full"
                            />
                            <p>Jackye</p>
                          </div>
                        </TableCell>
                        <TableCell align="left">
                          artem-hunter@gmail.com
                        </TableCell>
                        <TableCell align="left">23.11.2024</TableCell>
                      </TableRow>
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

export default Subaccounts;
