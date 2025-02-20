import useCustomScrollbar from "@/shared/hooks/useCustomScrollbar";
import { ChangeEvent, useEffect, useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { MdOutlineDone, MdOutlineKeyboardArrowRight } from "react-icons/md";

type PlansModalType = {
  togglePlansModal: () => void;
};

enum CurrencyType {
  Fiat = "Fiat",
  Crypto = "Crypto",
}

const plans = [
  { name: "Quarterly", days: 90, price: 129, monthlyCost: 43 },
  { name: "Half year", days: 180, price: 229, monthlyCost: 30, margin: true },
  { name: "Year", days: 365, price: 329, monthlyCost: 27, margin: true },
  { name: "New year", days: 45, price: 59, monthlyCost: 0 },
];

export const PlansModal = ({ togglePlansModal }: PlansModalType) => {
  const [isInnerModalOpen, setIsInnerModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Quarterly");
  const [inputBalance, setInputBalance] = useState("$ 100.00");
  const [selected, setSelected] = useState("Fiat");
  const [coupon, setCoupon] = useState("");

  const scrollRef = useCustomScrollbar();

  const handleSwitch = (type: CurrencyType) => {
    setSelected(type);
  };

  const handleInputBalanceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputBalance(e.target.value);
  };

  const toggleInnerModal = () => {
    setIsInnerModalOpen(!isInnerModalOpen);
    if (!isInnerModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  useEffect(() => {
    return () => document.body.classList.remove("no-scroll");
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-40 overflow-y-auto flex justify-center items-center">
      <div className="relative w-[95%] xl:w-[1040px] h-[90%] lg:h-auto bg-[#1C1E22] p-6 rounded-[16px] flex flex-col shadow-lg overflow-y-auto">
        <button className="absolute top-5 right-5" onClick={togglePlansModal}>
          <IoMdClose size={24} className="text-[#8E8E8E] cursor-pointer" />
        </button>
        <p className="text-[#CBFF51] leading-[20px] mb-[10px]">Plans</p>
        <div
          ref={scrollRef}
          className="overflow-y-auto flex-1 px-2"
          style={{ maxHeight: "calc(100vh - 120px)" }}
        >
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="py-[10px] sm:p-0 w-[100%] flex flex-col gap-[12px] md:gap-[20px] lg:w-[450px]">
              <p className="font-bold text-[22px] xl:text-[24px] sm:text-[26px] leading-[36px] -tracking-[3%]">
                Get Unlimited Access to the Site Materials
              </p>
              <p className="font-semibold text-[13px] leading-[20px] text-[#949392] xl:w-[450px]">
                You will also receive an invitation to a private channel and
                access.
              </p>
              <div>
                <div className="relative mb-5">
                  <MdOutlineDone
                    size={20}
                    className="text-[#CBFF51] absolute top-0 left-0"
                  />
                  <p className="font-semibold leading-[20px] px-[25px]">
                    Unlimited access to view guides
                  </p>
                </div>
                <div className="relative">
                  <MdOutlineDone
                    size={20}
                    className="text-[#CBFF51] absolute top-0 left-0"
                  />
                  <p className="font-semibold leading-[20px] px-[25px]">
                    Private channel and access to a closed section with projects
                    with maximum potential
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[100%] bg-transparent lg:w-[450px]">
              <h2 className="text-[18px] leading-[20px] -tracking-[0.18px] font-bold pt-[32px] lg:pt-0 mb-[15px]">
                Select plan
              </h2>
              <ul className="flex flex-col gap-2">
                {plans.map((plan) => (
                  <li
                    key={plan.name}
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`cursor-pointer p-4 rounded-[12px] flex justify-between items-center border-[1px] transition-all duration-300 ${
                      selectedPlan === plan.name
                        ? "border-[#436237] border-[1px] bg-[#1D2A19]"
                        : "border-gray-700 hover:border-gray-500"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-[24px] h-[24px] flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                          selectedPlan === plan.name
                            ? "border-[1px] border-[#73A304] bg-[#528E09]"
                            : "border-gray-700"
                        }`}
                      >
                        {selectedPlan === plan.name && (
                          <MdOutlineDone size={20} />
                        )}
                      </div>
                      <div
                        className={`flex flex-col sm:flex-row sm:items-center justify-between sm:gap-[12px] ${
                          plan.margin ? `sm:w-[170px]` : `sm:w-[162px]`
                        }`}
                      >
                        <p className="font-bold">{plan.name}</p>
                        <p className="text-[#8E8E8E]">{plan.days} days</p>
                      </div>
                    </div>
                    <div>
                      {plan.monthlyCost !== 0 ? (
                        <div className="flex flex-col sm:flex-row sm:items-center gap-[1px] sm:gap-[12px]">
                          <p className="text-[16px] leading-[18px] font-bold text-[#CBFF51]">
                            ${plan.price}
                          </p>
                          <p className="leading-[15px] text-[#8E8E8E]">
                            ${plan.monthlyCost}/month
                          </p>
                        </div>
                      ) : (
                        <p className="text-[16px] text-left leading-[18px] font-bold text-[#CBFF51] w-[75px] sm:mr-[50px]">
                          ${plan.price}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-[25px]">
                <p className="mb-1 leading-[16px] font-semibold">Cupon</p>
                <div className="flex items-center gap-2">
                  <input
                    className="bg-[#212226] p-2 w-[200px] rounded-[12px] placeholder:text-[14px] placeholder:leading-[20px]"
                    placeholder="Cupon code"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                  <button
                    className={`px-[10px] py-[12px] text-white font-bold leading-[16px] rounded-[10px] transition-colors ${
                      coupon
                        ? "bg-[#11CA00] hover:bg-blue-500"
                        : "bg-[#333333] text-[#A4A4A4] cursor-not-allowed"
                    }`}
                    disabled={!coupon}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-[16px] md:my-[32px] border-0 h-px bg-[#27292D]" />

          <div className="bg-[#1C1E22] sticky -bottom-0 left-0 w-full pt-4 lg:pt-0 h-[190px] lg:h-auto">
            <div className="flex items-center justify-between h-[46px] md:h-[58px]">
              <div className="flex flex-col gap-[2px]">
                <p className="leading-[20px]">Amount due</p>
                <p className="text-[20px] leading-[24px] md:text-[24px] md:leading-[28px] font-bold">
                  $129
                </p>
              </div>
              {/*<button className="flex items-center gap-1 rounded-[16px] py-[18px] pr-[16px] pl-[24px] bg-[#11CA00] font-semibold leading-[20px] text-[17px]">*/}
              {/*  Go to payment*/}
              {/*  <MdOutlineKeyboardArrowRight />*/}
              {/*</button>*/}
              <button
                className="flex items-center w-[167px] md:w-[182px] font-sans gap-1 rounded-[16px] pr-[12px] pl-[20px] py-[12px] md:py-[18px] md:pr-[16px] md:pl-[24px] bg-[#11CA00] font-semibold leading-[20px] justify-center text-[16px] md:text-[17px]"
                onClick={toggleInnerModal}
              >
                Top up balance
                <MdOutlineKeyboardArrowRight />
              </button>
            </div>

            <p className="text-[#8E8E8E] leading-[20px] mt-[26px]">
              <span className="text-[#FF6F6F]">Account balance: $0.00.</span>{" "}
              <span className="hidden sm:inline">
                There are not enough funds on your account to pay for the order.
              </span>
            </p>

            <div className="flex text-[#D7B5FF] bg-[#B030BE0A] gap-2 mt-4 rounded-[12px] p-[10px]">
              <CiCircleInfo size={24} />
              <p className="text-[13px] leading-[18px]">
                Tip: if you get blocked at the time of payment -{" "}
                <span className="text-[#E37DFF]">use a VPN</span>
              </p>
            </div>
          </div>

          {isInnerModalOpen && (
            <>
              <div className="fixed inset-0 bg-black bg-opacity-40 z-80"></div>

              <div className="modal absolute top-[30px] left-1/2 -translate-x-1/2 shadow-2xl w-[351px] md:w-[381px] md:h-[326px] rounded-[12px] bg-[#1C1E22] p-6">
                <button
                  className="top-10 absolute sm:top-5 right-5"
                  onClick={toggleInnerModal}
                >
                  <IoMdClose
                    size={24}
                    className="text-[#8E8E8E] cursor-pointer"
                  />
                </button>
                <div>
                  <p className="text-[18x] font-bold leading-[20px]">
                    Top Up Balance
                  </p>
                  <div className="mt-5">
                    <p className="font-semibold leading-[16px]">
                      Currency type
                    </p>
                    <div className="flex items-center bg-[#292B2F] rounded-full mt-2 w-[184px]">
                      <button
                        className={`px-4 py-2 rounded-full text-sm font-medium w-[92px] ${
                          selected === "Fiat"
                            ? "bg-[#36383D] text-white"
                            : "bg-transparent text-gray-400"
                        }`}
                        onClick={() => handleSwitch(CurrencyType.Fiat)}
                      >
                        Fiat
                      </button>
                      <button
                        className={`px-4 py-2 rounded-full text-sm font-medium w-[92px] ${
                          selected === "Crypto"
                            ? "bg-[#36383D] text-white"
                            : "bg-transparent text-gray-400"
                        }`}
                        onClick={() => handleSwitch(CurrencyType.Crypto)}
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
                  <button className="w-full flex items-center justify-center gap-1 rounded-[16px] py-[18px] pr-[16px] pl-[24px] bg-[#11CA00] font-semibold text-[17px] leading-[20px]">
                    Go to payment
                    <MdOutlineKeyboardArrowRight />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
