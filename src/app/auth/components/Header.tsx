"use client";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import logoRectangle from "@/shared/assets/rectangle.png";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <header className="w-full p-4 flex items-center justify-between relative">
      <button
        onClick={() => router.push("/profile")}
        className="flex items-center bg-[--dark-gray] p-1.5 rounded-xl text-gray-500 min-w-[120px] max-w-[200px] absolute"
      >
        <IoIosArrowBack size={20} className="mr-1" />
        <p>Back to site</p>
      </button>
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
