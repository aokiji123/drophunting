"use client";
import React from "react";
// import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import logoRectangle from "../../../../public/assets/rectangle.png";
import blur from "../../../../public/assets/blur.png";
// import { useRouter } from "next/navigation";

const Header = () => {
  return (
    <header className="w-full p-4 flex items-center justify-between relative z-0">
      <Image
        src={blur}
        alt="Blur"
        className="absolute top-0 left-[250px] -z-10 pointer-events-none"
      />
      {/* <button
        onClick={() => router.push("/profile")}
        className="flex items-center bg-[--dark-gray] font-chakra p-[8px] w-[32px] sm:w-[120px] sm:pr-[12px] rounded-xl text-gray-500 h-[32px] absolute"
      >
        <IoIosArrowBack size={20} className="sm:mr-1" />
        <p className="hidden sm:block">Back to site</p>
      </button> */}
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center text-center">
          <Image className="mr-2" src={logoRectangle} alt="Logo Rectangle" />
          <p className="font-bold text-[20px] font-chakra">Drophunting</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
