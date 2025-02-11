import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaCaretDown, FaDiscord, FaInstagram } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { RiTelegram2Fill } from "react-icons/ri";

type LandingModalType = {
  toggleLandingModal: () => void;
};

const LandingModal = ({ toggleLandingModal }: LandingModalType) => {
  return (
    <div className="flex flex-col h-full p-4 px-[12px] pt-[48px] pb-[34px]">
      <button
        className="block lg:hidden absolute top-3 right-3 text-white"
        onClick={toggleLandingModal}
      >
        <IoMdClose size={24} className="hover:text-[#9EA0A6] cursor-pointer" />
      </button>
      <div className="flex flex-col gap-[38px]">
        <ul className="flex flex-col gap-[4px]">
          <li className="px-[12px] py-[8px]">
            <Link
              href="/"
              className="text-white text-[16px] leading-[18px] font-semibold"
            >
              О сервисе
            </Link>
          </li>
          <li className="px-[12px] py-[8px]">
            <Link
              href="/"
              className="text-white text-[16px] leading-[18px] font-semibold"
            >
              Результаты
            </Link>
          </li>
          <li className="px-[12px] py-[8px]">
            <Link
              href="/"
              className="text-white text-[16px] leading-[18px] font-semibold"
            >
              Как это работает
            </Link>
          </li>
          <li className="px-[12px] py-[8px]">
            <Link
              href="/"
              className="text-white text-[16px] leading-[18px] font-semibold"
            >
              Контакты
            </Link>
          </li>
        </ul>
        <div className="flex flex-col gap-[8px]">
          <button className="w-full h-[48px] px-[38px] py-[24px] rounded-[10px] text-[14px] md:text-[15px] leading-[18px] font-semibold bg-[#11CA00] flex items-center justify-center">
            Перейти в агрегатор
          </button>
          <button className="w-full h-[48px] px-[38px] py-[24px] rounded-[10px] text-[14px] md:text-[15px] leading-[18px] font-semibold bg-[#21274C] flex items-center justify-center">
            Подписаться на бот
          </button>
        </div>
      </div>
      <hr className="my-[26px] border-0 h-px bg-[#24262A]" />
      <div className="flex items-center mb-[26px]">
        <div className="flex items-center gap-[20px]">
          <BsTwitterX size={24} />
          <FaDiscord size={28} />
          <RiTelegram2Fill size={28} />
          <FaInstagram size={28} />
        </div>
      </div>
      <div className="cursor-pointer">
        <div className="flex items-center gap-[6px]">
          <GrLanguage size={20} />
          <p>EN</p>
          <FaCaretDown />
        </div>
      </div>
    </div>
  );
};

export default LandingModal;
