import useStore from "@/shared/store";
import { useState, ChangeEvent } from "react";
import { IoMdClose } from "react-icons/io";

type BuySubaccountsModalType = {
  onClose: () => void;
  subaccountPrice: number;
};

export const BuySubaccountsModal = ({
  onClose,
  subaccountPrice,
}: BuySubaccountsModalType) => {
  const [amount, setAmount] = useState<number>(1);
  const [error, setError] = useState<string>("");
  const { buySubaccounts } = useStore();
  const totalPrice = amount * subaccountPrice;

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "" || /^\d+$/.test(value)) {
      const numValue = value === "" ? 0 : parseInt(value);

      setAmount(numValue);

      if (numValue > 10) {
        setError("Maximum 10 subaccounts allowed per payment");
      } else {
        setError("");
      }
    }
  };

  const handleBuySubaccounts = async () => {
    try {
      await buySubaccounts(amount);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error buying subaccounts:", error);
    }
  };

  const isButtonDisabled = amount <= 0 || amount > 10;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-80 flex items-center justify-center">
      <div className="bg-[#1C1E22] rounded-[16px] p-6 w-[380px] absolute top-[70px]">
        <button className="absolute top-5 right-5" onClick={onClose}>
          <IoMdClose size={24} className="text-[#949392] cursor-pointer" />
        </button>

        <div className="flex flex-col gap-[20px] mb-6">
          <p className="text-[18px] font-bold leading-[20px]">
            Buy Subaccounts
          </p>

          <p className="text-[#8E8E8E] leading-[20px]">
            Выберите количество саббакаунтов и проведите оплату
          </p>

          <div className="flex flex-col gap-[2px]">
            <p className="text-[12px] leading-[20px] text-[#8E8E8E]">Price</p>
            <p className="text-[14px] leading-[16px] font-medium">
              1 subaccount ${subaccountPrice}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[12px] mb-6">
          <label
            htmlFor="subaccountsAmount"
            className="text-[14px] leading-[16px] font-medium">
            Amount of Subaccounts (max 10)
          </label>
          <input
            type="text"
            id="subaccountsAmount"
            value={amount}
            onChange={handleAmountChange}
            className="h-[48px] bg-[#24262B] rounded-[14px] py-[12px] px-[16px] text-[15px] leading-[24px]"
          />
          {error && <p className="text-red-500 text-[12px]">{error}</p>}
          <div className="flex items-center justify-end gap-[12px]">
            <p className="text-[14px] leading-[16px] font-medium">Итого</p>
            <p className="text-[19px] leading-[16px] font-medium">
              ${totalPrice}
            </p>
          </div>
        </div>

        <button
          onClick={handleBuySubaccounts}
          disabled={isButtonDisabled}
          className={`w-full flex items-center justify-center gap-1 rounded-[16px] py-[18px] pr-[16px] pl-[24px] font-semibold leading-[20px] text-[17px] ${
            !isButtonDisabled
              ? "bg-[#11CA00] hover:bg-blue-500"
              : "bg-gray-500 cursor-not-allowed"
          }`}>
          Buy Subaccounts
        </button>
      </div>
    </div>
  );
};
