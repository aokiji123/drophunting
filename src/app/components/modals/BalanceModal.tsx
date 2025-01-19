import React, { ChangeEvent, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type BalanceModalType = {
  toggleBalanceModal: () => void;
};

const BalanceModal = ({ toggleBalanceModal }: BalanceModalType) => {
  const [inputBalance, setInputBalance] = useState("$ 100.00");
  const [selected, setSelected] = useState("Fiat");

  const handleSwitch = (type: string) => {
    setSelected(type);
  };

  const handleInputBalanceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputBalance(e.target.value);
  };

  return (
    <div>
      <button
        className="top-10 absolute sm:top-5 right-5"
        onClick={toggleBalanceModal}
      >
        <IoMdClose size={24} className="hover:text-[#9EA0A6] cursor-pointer " />
      </button>
      <div>
        <p className="text-[18x] font-bold leading-[20px]">Top Up Balance</p>
        <div className="mt-5">
          <p className="font-semibold leading-[16px]">Currency type</p>
          <div className="flex items-center bg-[#292B2F] rounded-full p-1 mt-2 w-[155px]">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selected === "Fiat"
                  ? "bg-[#36383D] text-white"
                  : "bg-transparent text-gray-400"
              }`}
              onClick={() => handleSwitch("Fiat")}
            >
              Fiat
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selected === "Crypto"
                  ? "bg-[#36383D] text-white"
                  : "bg-transparent text-gray-400"
              }`}
              onClick={() => handleSwitch("Crypto")}
            >
              Crypto
            </button>
          </div>
        </div>
        <div className="my-5">
          <p className="font-semibold leading-[16px]">Amount</p>
          <input
            className="bg-[#292B2F] border-[1px] border-transparent py-[12px] px-[16px] rounded-[14px] mt-2 w-full focus:border-[1px] focus:border-gray-500 focus:outline-none"
            value={inputBalance}
            onChange={handleInputBalanceChange}
          />
        </div>
        <button className="w-full flex items-center justify-center gap-1 rounded-[16px] py-[18px] pr-[16px] pl-[24px] bg-[#11CA00] font-semibold leading-[20px]">
          Go to payment
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BalanceModal;
