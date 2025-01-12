import React from "react";
import Image from "next/image";
import logoRectangle from "@/shared/assets/rectangle.png";

const Footer = () => {
  return (
    <footer className="mt-auto my-5">
      <div className="flex items-center justify-center text-center mb-4">
        <Image className="mr-2" src={logoRectangle} alt="Logo Rectangle" />
        <p className="font-bold text-[18px] font-chakra">Drophunting</p>
      </div>
      <div className="flex items-center justify-center gap-5 text-[#707070] text-[12px] leading-[16px]">
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
      </div>
    </footer>
  );
};

export default Footer;
