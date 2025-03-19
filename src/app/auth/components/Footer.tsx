import React from "react";
import Image from "next/image";
import logoRectangle from "../../../../public/assets/rectangle.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-6 flex flex-col gap-4 mt-auto">
      <div className="flex items-center justify-center text-center">
        <Image className="mr-2" src={logoRectangle} alt="Logo Rectangle" />
        <Link href="#" className="font-bold text-[18px] font-chakra">
          Drophunting
        </Link>
      </div>
      <Link
        href="https://www.google.com"
        className="text-[14px] leading-[16px] text-center"
      >
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
