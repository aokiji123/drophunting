import React from "react";
import { GoDotFill } from "react-icons/go";
import { LuBell } from "react-icons/lu";
import { FiFlag } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

type NotificationsModalType = {
  toggleNotificationsModal: () => void;
};

const NotificationsModal = ({
  toggleNotificationsModal,
}: NotificationsModalType) => {
  return (
    <>
      <button
        className="block md:hidden absolute top-4 right-3 text-[#8E8E8E]"
        onClick={toggleNotificationsModal}
      >
        <IoMdClose size={24} className="cursor-pointer" />
      </button>
      <p className="text-[16px] leading-[16px] font-bold">Notifications</p>
      <div className="flex gap-3 mt-[20px] border-b-[1px] border-[#24262A] pb-[10px] cursor-pointer hover:text-[#9EA0A6] text-white">
        <div className="relative w-[28px] h-[28px] rounded-full bg-[#23252A] flex items-center justify-center">
          <GoDotFill className="absolute right-[25px] sm:right-[30px] text-red-500" />
          <LuBell size={16} />
        </div>
        <div>
          <p className="font-semibold leading-[19px] mb-1 sm:mb-1">
            The $200 deposit was successfully funded
          </p>
          <p className="text-[#8E8E8E] text-[13px] leading-[15px]">
            Today 12:21
          </p>
        </div>
      </div>
      <div className="flex gap-3 mt-[20px] border-b-[1px] border-[#24262A] pb-[10px] cursor-pointer text-[#9EA0A6]">
        <div className="w-[28px] h-[28px] rounded-full bg-[#23252A] flex items-center justify-center">
          <LuBell size={16} className="text-[#9EA0A6]" />
        </div>
        <div>
          <p className="font-semibold leading-[19px] mb-1 sm:mb-1">
            The $200 deposit was successfully funded
          </p>
          <p className="text-[#8E8E8E] text-[13px] leading-[15px]">
            Today 12:21
          </p>
        </div>
      </div>
      <div className="flex gap-3 mt-[20px] border-b-[1px] border-[#24262A] pb-[10px] cursor-pointer text-[#9EA0A6]">
        <div className="w-[28px] h-[28px] rounded-full bg-[#23252A] flex items-center justify-center">
          <FiFlag size={16} className="text-[#9EA0A6]" />
        </div>
        <div>
          <p className="font-semibold leading-[19px] mb-1 sm:mb-1">
            A new article has been released on the blog!
          </p>
          <p className="text-[#8E8E8E] text-[13px] leading-[15px]">
            Today 12:21
          </p>
        </div>
      </div>
      <div className="flex gap-3 mt-[20px] border-b-[1px] border-[#24262A] pb-[10px] cursor-pointer text-[#9EA0A6]">
        <div className="w-[28px] h-[28px] rounded-full bg-[#23252A] flex items-center justify-center">
          <LuBell size={16} className="text-[#9EA0A6]" />
        </div>
        <div>
          <p className="font-semibold leading-[19px] mb-1 sm:mb-1">
            The $200 deposit was successfully funded
          </p>
          <p className="text-[#8E8E8E] text-[13px] leading-[15px]">
            Today 12:21
          </p>
        </div>
      </div>
      <div className="flex gap-3 mt-[20px] border-b-[1px] border-[#24262A] pb-[10px] cursor-pointer text-[#9EA0A6]">
        <div className="w-[28px] h-[28px] rounded-full bg-[#23252A] flex items-center justify-center">
          <LuBell size={16} className="text-[#9EA0A6]" />
        </div>
        <div>
          <p className="font-semibold leading-[19px] mb-1 sm:mb-1">
            The $200 deposit was successfully funded
          </p>
          <p className="text-[#8E8E8E] text-[13px] leading-[15px]">
            Today 12:21
          </p>
        </div>
      </div>
    </>
  );
};

export default NotificationsModal;
