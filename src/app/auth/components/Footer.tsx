import React from "react";
import Image from "next/image";
import logoRectangle from "../../../../public/assets/rectangle.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="my-5">
      <div className="flex items-center justify-center text-center mb-4">
        <Image className="mr-2" src={logoRectangle} alt="Logo Rectangle" />
        <p className="font-bold text-[18px] font-chakra">Drophunting</p>
      </div>
      <div className="flex items-center justify-center gap-5 text-[#707070] text-[12px] leading-[16px]">
        <Link href="#">Terms</Link>
        <Link href="#">Privacy</Link>
      </div>
    </footer>
  );
};

export default Footer;
