import React from "react";
import Image from "next/image";
import logoRectangle from "../../../public/assets/rectangle.png";
import Link from "next/link";
import { FaAngleUp } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-auto py-[24px] pb-[30px] flex flex-col gap-4 relative">
      <div className="flex items-center justify-center text-center">
        <Image className="mr-2" src={logoRectangle} alt="Logo Rectangle" />
        <Link href="#" className="font-bold text-[18px] font-chakra">
          Drophunting
        </Link>
      </div>
      <Link href="#" className="text-[14px] leading-[16px] text-center">
        Support
      </Link>
      <div className="flex items-center justify-center gap-5 text-[#707070] text-[12px] leading-[16px]">
        <Link href="#">Terms</Link>
        <Link href="#">Privacy</Link>
      </div>
      <div
        className="absolute top-[20px] right-[50px] size-[57px] bg-[#17181B] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#1f2025] transition-colors"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaAngleUp size={24} className="text-[#7F7F7F]" />
      </div>
    </footer>
  );
};

export default Footer;
