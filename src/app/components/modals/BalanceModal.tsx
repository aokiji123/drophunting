import React, { ChangeEvent, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";
import useStore from "@/shared/store";
import { validateAmount, formatAmount } from "@/shared/utils/validation";

type BalanceModalType = {
  toggleBalanceModal: () => void;
};

const BalanceModal = ({ toggleBalanceModal }: BalanceModalType) => {
  const { t } = useTranslation();
  const { payWithYookassa, payWithNowPayments, paymentRedirectUrl } =
    useStore();
  const [amount, setAmount] = useState<number>(100);
  const [inputValue, setInputValue] = useState<string>("100");
  const [selected, setSelected] = useState("Fiat");
  const [error, setError] = useState<string | undefined>();
  const [isFocused, setIsFocused] = useState(false);

  const handleSwitch = (type: string) => {
    setSelected(type);
  };

  const handleInputBalanceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    setInputValue(rawValue);

    const validation = validateAmount(rawValue, selected as "Fiat" | "Crypto");
    if (validation.isValid && validation.amount !== null) {
      setAmount(validation.amount);
      setError(undefined);
    } else {
      setError(validation.error);
      if (rawValue === "") {
        setAmount(0);
        setInputValue("0");
      }
    }
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    if (!error && amount > 0) {
      setInputValue(formatAmount(amount));
    }
  };

  const handlePayment = async () => {
    if (error || amount <= 0) return;

    if (selected === "Fiat") {
      await payWithYookassa(amount);
    } else {
      await payWithNowPayments(amount);
    }

    if (paymentRedirectUrl) {
      window.open(paymentRedirectUrl, "_blank");
    }
  };

  useEffect(() => {
    if (paymentRedirectUrl) {
      window.open(paymentRedirectUrl, "_blank");
    }
  }, [paymentRedirectUrl]);

  return (
    <div>
      <button
        className="top-10 absolute sm:top-5 right-5"
        onClick={toggleBalanceModal}>
        <IoMdClose
          size={24}
          className="block lg:hidden hover:text-[#9EA0A6] cursor-pointer"
        />
      </button>
      <div>
        <p className="text-[18px] font-bold leading-[20px]">
          {t("balanceModal.title")}
        </p>
        <div className="mt-5">
          <p className="font-semibold leading-[16px]">
            {t("balanceModal.currencyType")}
          </p>
          <div className="flex items-center bg-[#292B2F] rounded-full mt-2 w-[184px]">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium w-[92px] ${
                selected === "Fiat"
                  ? "bg-[#36383D] text-white"
                  : "bg-transparent text-gray-400"
              }`}
              onClick={() => handleSwitch("Fiat")}>
              {t("balanceModal.fiat")}
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium w-[92px] ${
                selected === "Crypto"
                  ? "bg-[#36383D] text-white"
                  : "bg-transparent text-gray-400"
              }`}
              onClick={() => handleSwitch("Crypto")}>
              {t("balanceModal.crypto")}
            </button>
          </div>
        </div>
        <div className="my-5">
          <p className="font-semibold leading-[16px]">
            {t("balanceModal.amount")}
          </p>
          <input
            type="text"
            className={`bg-[#292B2F] border-[1px] ${
              error ? "border-red-500" : "border-transparent"
            } py-[12px] px-[16px] rounded-[14px] mt-2 w-full focus:border-[1px] ${
              error ? "focus:border-red-500" : "focus:border-gray-500"
            } focus:outline-none`}
            value={isFocused ? inputValue : formatAmount(amount)}
            onChange={handleInputBalanceChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder={t("balanceModal.enterAmount")}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        <button
          onClick={handlePayment}
          disabled={!!error || amount <= 0}
          className={`w-full flex items-center justify-center gap-1 rounded-[16px] py-[18px] pr-[16px] pl-[24px] ${
            error || amount <= 0
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-[#11CA00] hover:bg-blue-500"
          } font-semibold leading-[20px] text-[17px]`}>
          {t("balanceModal.goToPayment")}
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BalanceModal;
