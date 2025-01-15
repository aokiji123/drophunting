"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/profile/components/Header";
import Footer from "@/app/profile/components/Footer";
import { FaDollarSign } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { LuPercent } from "react-icons/lu";
import { GrBook } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Link from "next/link";

const tabs = [
  { name: "Profile", href: "/profile", icon: <FiUser size={24} /> },
  {
    name: "Subscriptions",
    href: "/subscriptions",
    icon: <FaDollarSign size={24} />,
  },
  { name: "Subaccounts", href: "/subaccounts", icon: <FiUsers size={24} /> },
  { name: "Referal", href: "/referal", icon: <LuPercent size={24} /> },
  { name: "Guides", href: "/guides", icon: <GrBook size={24} /> },
];

const Profile = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className="bg-black text-white">
      <Header />

      <main className="container flex-col flex items-center mx-auto justify-center lg:flex-row overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-center w-full p-3">
          <nav className="lg:w-[15%] w-full font-chakra font-bold leading-[20px] text-[#8E8E8E] m-0 lg:mr-[40px]">
            <ul className="no-scrollbar overflow-scroll w-full lg:w-[115%] xl:w-[100%] border-b-[1px] border-[#27292D] lg:border-none flex flex-row lg:flex lg:flex-col mb-5">
              {tabs.map((tab) => (
                <li
                  key={tab.name}
                  className={`p-[6px] lg:pr-[16px] lg:pl-0px xl:px-[16px] lg:py-[12px] lg:rounded-[12px] lg:mb-1 cursor-pointer ${
                    isActive(tab.href)
                      ? "border-b-[1px] border-white lg:border-none lg:bg-[--dark-gray] text-white"
                      : "hover:border-b-[1px] border-white lg:border-none lg:hover:bg-[--dark-gray] hover:text-white"
                  }`}
                >
                  <Link href={tab.href} className="flex items-center gap-3">
                    <p className="hidden lg:block">{tab.icon}</p>
                    {tab.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <section className="min-h-[725px] w-full lg:w-[85%] bg-[--dark-gray] p-[16px] sm:p-[32px] rounded-[16px]">
            <div className="flex-col flex">
              <div className="flex items-center justify-center w-[48px] h-[48px] bg-[#2A2B32] rounded-[12px]">
                <FaDollarSign size={24} />
              </div>
              <div className="mt-4">
                <p className="text-[24px] font-semibold leading-[32px] tracking-[-3%] mb-2">
                  Subscriptions
                </p>
                <p className="text-[14px] text-[#949392] leading-[20px] mt-2 w-[325px] sm:w-[450px] lg:w-[650px]">
                  Subscription allows you to get unlimited access to the site
                  materials. We provide a choice of several tariff plans based
                  on the principle “the longer - the cheaper”. A few free views
                  are available without subscription.
                </p>
              </div>
              <div className="mt-7">
                <div className="flex items-center gap-[20px]">
                  <p className="text-[15px] leading-[16px] font-semibold">
                    Free Views
                  </p>
                  <p className="text-[15px] leading-[16px] font-semibold">
                    1/2
                  </p>
                </div>
                <button className="h-[44px] bg-[--green] px-[14px] py-[20px] font-bold leading-[16px] tracking-[-1%] rounded-[12px] flex items-center justify-center mt-[40px] my-[60px]">
                  See plans
                </button>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <p className="text-[16px] font-bold leading-[24px] -tracking-[3%]">
                    My subscriptions
                  </p>
                  <p className="text-[#797979] text-[16px] leading-[24px] font-bold">
                    5
                  </p>
                </div>
                <TableContainer
                  sx={{
                    backgroundColor: "transparent",
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
                      },
                      "& .MuiTableCell-body": {
                        color: "#FFFFFF",
                        fontSize: "14px",
                        lineHeight: "20px",
                        borderBottom: "1px solid #27292D",
                        padding: "16px 8px",
                      },
                    }}
                    aria-label="subscriptions table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>Plan</TableCell>
                        <TableCell align="right">Date start</TableCell>
                        <TableCell align="right">Date end</TableCell>
                        <TableCell align="right">Price</TableCell>
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
                        <TableCell align="left">Quartal Plan</TableCell>
                        <TableCell align="right">11.01.2024</TableCell>
                        <TableCell align="right">11.04.2024</TableCell>
                        <TableCell align="right">129$</TableCell>
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

export default Profile;
