import React from "react";
import Link from "next/link";
import { MainLogo } from "@/shared/icons/MainLogo";

const Footer = () => {
  return (
    <footer className="w-full py-6 flex flex-col gap-4 mt-auto">
      <div className="flex items-center justify-center text-center">
        <MainLogo width={170} height={40} color="#fff" />
      </div>
      <Link
        href="https://www.google.com"
        target="_blank"
        className="text-[14px] leading-[16px] text-center">
        Support
      </Link>
      <div className="flex items-center justify-center gap-5 text-[#707070] text-[12px] leading-[16px]">
        <Link href="#">Terms</Link>
        <Link href="#">Privacy</Link>
      </div>
    </footer>
  );
};

export default Footer;
