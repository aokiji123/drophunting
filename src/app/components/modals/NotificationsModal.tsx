import React from "react";
import { GoDotFill } from "react-icons/go";
import { LuBell } from "react-icons/lu";
import { FiFlag } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import useCustomScrollbar from "@/shared/hooks/useCustomScrollbar";

const notifications = [
  {
    id: 1,
    text: "The $200 deposit was successfully funded",
    icon: <LuBell size={16} />,
    new: true,
  },
  {
    id: 2,
    text: "The $200 deposit was successfully funded",
    icon: <LuBell size={16} />,
    new: false,
  },
  {
    id: 3,
    text: "A new article has been released on the blog!",
    icon: <FiFlag size={16} />,
    new: false,
  },
  {
    id: 4,
    text: "The $200 deposit was successfully funded",
    icon: <LuBell size={16} />,
    new: true,
  },
  {
    id: 5,
    text: "The $200 deposit was successfully funded",
    icon: <LuBell size={16} />,
    new: false,
  },
];

type NotificationsModalType = {
  toggleNotificationsModal: () => void;
};

const NotificationsModal = ({
  toggleNotificationsModal,
}: NotificationsModalType) => {
  const scrollRef = useCustomScrollbar();

  return (
    <div className="flex flex-col h-full">
      <button
        className="block md:hidden absolute top-4 right-3 text-[#8E8E8E]"
        onClick={toggleNotificationsModal}
      >
        <IoMdClose size={24} className="cursor-pointer" />
      </button>
      <p className="text-[16px] leading-[16px] font-bold pl-[15px]">
        Notifications
      </p>
      <div className="overflow-y-auto mt-2" ref={scrollRef}>
        {notifications.map((n) => (
          <div
            key={n.id}
            className="pl-[15px] flex gap-3 mt-[20px] border-b-[1px] border-[#24262A] pb-[10px] cursor-pointer hover:text-[#9EA0A6] text-white overflow-y-auto"
          >
            <div className="relative w-[28px] h-[28px] rounded-full bg-[#23252A] flex items-center justify-center">
              {n.new && (
                <GoDotFill className="absolute right-[25px] md:right-[30px] text-red-500" />
              )}
              {n.icon}
            </div>
            <div>
              <p className="font-semibold leading-[19px] mb-1 sm:mb-1">
                {n.text}
              </p>
              <p className="text-[#8E8E8E] text-[13px] leading-[15px]">
                Today 12:21
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsModal;
