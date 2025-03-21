import { ChangeEvent, useEffect, useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { MdOutlineDone, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { validateAmount, formatAmount } from "@/shared/utils/validation";
import useStore from "@/shared/store";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

type PlansModalType = {
  togglePlansModal: () => void;
};

enum CurrencyType {
  Fiat = "Fiat",
  Crypto = "Crypto",
}

export const PlansModal = ({ togglePlansModal }: PlansModalType) => {
  const [isInnerModalOpen, setIsInnerModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [amount, setAmount] = useState(100);
  const [inputValue, setInputValue] = useState<string>("100");
  const [selected, setSelected] = useState(CurrencyType.Fiat);
  const [couponCode, setCouponCode] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [isFocused, setIsFocused] = useState(false);
  const [isPurchaseSuccessful, setIsPurchaseSuccessful] = useState(false);
  const {
    user,
    plans,
    isLoadingPlans,
    plansFetchError,
    fetchPlans,
    payWithYookassa,
    payWithNowPayments,
    paymentRedirectUrl,
    checkCoupon,
    coupon,
    isCouponLoading,
    couponError,
    clearCoupon,
    buyPlan,
    isBuyingPlan,
    buyPlanError,
    buyPlanSuccess,
    resetBuyPlanState,
  } = useStore();

  useEffect(() => {
    fetchPlans();
    resetBuyPlanState();
    return () => {
      clearCoupon();
      resetBuyPlanState();
    };
  }, [fetchPlans, clearCoupon, resetBuyPlanState]);

  useEffect(() => {
    if (plans.length > 0 && selectedPlan === null) {
      setSelectedPlan(plans[0].id);
    }
  }, [plans, selectedPlan]);

  const handleSwitch = (type: CurrencyType) => {
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

  const toggleInnerModal = () => {
    setIsInnerModalOpen(!isInnerModalOpen);
    if (!isInnerModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
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

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) return;

    const result = await checkCoupon(couponCode.trim());
    if (result) {
      setIsCouponApplied(true);
    }
  };

  const handleCouponInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCouponCode(e.target.value);
    if (isCouponApplied) {
      setIsCouponApplied(false);
      clearCoupon();
    }
  };

  const handlePurchasePlan = async () => {
    if (!selectedPlan) return;

    try {
      resetBuyPlanState();

      const success = await buyPlan(
        selectedPlan,
        isCouponApplied && couponCode ? couponCode : undefined,
      );

      if (success) {
        setIsPurchaseSuccessful(true);
      }
    } catch (err) {
      console.error("Error purchasing plan:", err);
    }
  };

  const selectedPlanDetails = plans.find((plan) => plan.id === selectedPlan);
  let amountDue = selectedPlanDetails ? Number(selectedPlanDetails.price) : 0;

  if (coupon && selectedPlanDetails) {
    if (coupon.perc) {
      const discountAmount = amountDue * (Number(coupon.sale) / 100);
      amountDue = Math.max(0, amountDue - discountAmount);
    } else {
      amountDue = Math.max(0, amountDue - Number(coupon.sale));
    }
  }

  useEffect(() => {
    if (paymentRedirectUrl) {
      window.open(paymentRedirectUrl, "_blank");
    }
  }, [paymentRedirectUrl]);

  useEffect(() => {
    return () => {
      resetBuyPlanState();
      clearCoupon();
      document.body.classList.remove("no-scroll");
    };
  }, [resetBuyPlanState, clearCoupon]);

  const isSuccessState = isPurchaseSuccessful || buyPlanSuccess;

  if (isSuccessState) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 z-40 overflow-y-auto flex justify-center items-center">
        <div className="relative w-[95%] max-w-[500px] bg-[#1C1E22] p-6 rounded-[16px] flex flex-col shadow-lg">
          <button className="absolute top-5 right-5" onClick={togglePlansModal}>
            <IoMdClose size={24} className="text-[#8E8E8E] cursor-pointer" />
          </button>
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <MdOutlineDone size={32} />
            </div>
            <h2 className="text-xl font-bold mb-2">Success!</h2>
            <p className="text-center text-gray-300 mb-6">
              {buyPlanSuccess || "Your plan has been successfully activated."}
            </p>
            <button
              onClick={togglePlansModal}
              className="px-6 py-3 bg-[#11CA00] hover:bg-blue-500 rounded-[12px] font-semibold">
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-40 overflow-y-auto flex justify-center items-center">
      <div className="relative w-[95%] xl:w-[1040px] h-[90% lg:h-auto bg-[#1C1E22] p-2 rounded-[16px] flex flex-col shadow-lg overflow-y-auto">
        <button className="absolute top-5 right-5" onClick={togglePlansModal}>
          <IoMdClose size={24} className="text-[#8E8E8E] cursor-pointer" />
        </button>
        <p className="text-[#CBFF51] leading-[20px] mb-[10px] p-4 pb-0">
          Plans
        </p>
        <OverlayScrollbarsComponent
          className="overflow-y-auto flex-1 p-4 pt-0"
          style={{ maxHeight: "calc(100vh - 120px)" }}
          options={{
            scrollbars: {
              autoHide: "scroll",
            },
          }}>
          {buyPlanError && (
            <div className="mb-3 p-3 bg-red-900/30 border border-red-500 rounded-[12px] text-red-400">
              {buyPlanError.includes("already has active subscription") ||
              buyPlanError.includes("active plan") ||
              buyPlanError.includes("subscription")
                ? "You already have an active subscription"
                : buyPlanError}
            </div>
          )}

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

              {isLoadingPlans ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#CBFF51]"></div>
                </div>
              ) : plansFetchError ? (
                <div className="text-[#FF6F6F] p-4 rounded-[12px] border border-[#FF6F6F] bg-[#FF6F6F10]">
                  {plansFetchError}
                </div>
              ) : (
                <ul className="flex flex-col gap-2">
                  {plans.map((plan) => (
                    <li
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`cursor-pointer p-4 rounded-[12px] flex justify-between items-center border-[1px] transition-all duration-300 ${
                        selectedPlan === plan.id
                          ? "border-[#436237] border-[1px] bg-[#1D2A19]"
                          : "border-gray-700 hover:border-gray-500"
                      }`}>
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-[24px] h-[24px] flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                            selectedPlan === plan.id
                              ? "border-[1px] border-[#73A304] bg-[#528E09]"
                              : "border-gray-700"
                          }`}>
                          {selectedPlan === plan.id && (
                            <MdOutlineDone size={20} />
                          )}
                        </div>
                        <div
                          className={`flex flex-col sm:flex-row sm:items-center justify-between sm:gap-[12px] ${
                            plan.sort === 2 || plan.sort === 3
                              ? `sm:w-[170px]`
                              : `sm:w-[162px]`
                          }`}>
                          <p className="font-bold">{plan.name}</p>
                          <p className="text-[#8E8E8E]">
                            {plan.count_days} days
                          </p>
                        </div>
                      </div>
                      <div>
                        {plan.price_month ? (
                          <div className="flex flex-col sm:flex-row sm:items-center gap-[1px] sm:gap-[12px]">
                            <p className="text-[16px] leading-[18px] font-bold text-[#CBFF51]">
                              ${parseFloat(plan.price).toFixed(0)}
                            </p>
                            <p className="leading-[15px] text-[#8E8E8E]">
                              ${parseFloat(plan.price_month).toFixed(0)}
                              /month
                            </p>
                          </div>
                        ) : (
                          <p className="text-[16px] text-left leading-[18px] font-bold text-[#CBFF51] w-[75px] sm:mr-[50px]">
                            ${parseFloat(plan.price).toFixed(0)}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-[25px]">
                <p className="mb-1 leading-[16px] font-semibold">Coupon</p>
                <div className="flex items-center gap-2">
                  <input
                    className={`bg-[#212226] p-2 w-[200px] rounded-[12px] placeholder:text-[14px] placeholder:leading-[20px] ${
                      couponError ? "border border-red-500" : ""
                    } ${isCouponApplied ? "border border-green-500" : ""}`}
                    placeholder="Coupon code"
                    value={couponCode}
                    onChange={handleCouponInputChange}
                  />
                  <button
                    className={`px-[10px] py-[12px] text-white font-bold leading-[16px] rounded-[10px] transition-colors ${
                      couponCode && !isCouponApplied && !isCouponLoading
                        ? "bg-[#11CA00] hover:bg-blue-500"
                        : isCouponApplied
                          ? "bg-green-600 cursor-default"
                          : "bg-[#333333] text-[#A4A4A4] cursor-not-allowed"
                    }`}
                    disabled={!couponCode || isCouponApplied || isCouponLoading}
                    onClick={handleApplyCoupon}>
                    {isCouponLoading ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
                    ) : isCouponApplied ? (
                      "Applied"
                    ) : (
                      "Apply"
                    )}
                  </button>
                </div>
                {couponError && (
                  <p className="text-red-500 text-sm mt-1">
                    Coupon is not valid or expired
                  </p>
                )}
                {coupon && isCouponApplied && (
                  <p className="text-green-500 text-sm mt-1">
                    Coupon applied:{" "}
                    {coupon.perc
                      ? `${coupon.sale}% off`
                      : `$${coupon.sale} off`}
                  </p>
                )}
              </div>
            </div>
          </div>

          <hr className="my-[16px] md:my-[32px] border-0 h-px bg-[#27292D]" />

          <div className="bg-[#1C1E22] sticky -bottom-[30px] h-[150px] left-0 w-full pt-4 lg:pt-0">
            <div className="flex items-center justify-between h-[46px] md:h-[58px]">
              <div className="flex flex-col gap-[2px]">
                <p className="leading-[20px]">Amount due</p>
                <div className="flex items-center gap-2">
                  <p className="text-[20px] leading-[24px] md:text-[24px] md:leading-[28px] font-bold">
                    ${amountDue.toFixed(2)}
                  </p>
                  {coupon && selectedPlanDetails && (
                    <p className="text-[14px] text-gray-400 line-through">
                      ${parseFloat(selectedPlanDetails.price).toFixed(2)}
                    </p>
                  )}
                </div>
              </div>

              {user && Number(user.balance) >= amountDue ? (
                <button
                  className={`flex items-center w-[167px] md:w-[182px] font-sans gap-1 rounded-[16px] pr-[12px] pl-[20px] py-[12px] md:py-[18px] md:pr-[16px] md:pl-[24px] ${
                    isBuyingPlan
                      ? "bg-gray-600"
                      : "bg-[#11CA00] hover:bg-blue-500"
                  } font-semibold leading-[20px] justify-center text-[16px] md:text-[17px]`}
                  onClick={handlePurchasePlan}
                  disabled={isBuyingPlan}>
                  {isBuyingPlan ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Go to payment
                      <MdOutlineKeyboardArrowRight />
                    </>
                  )}
                </button>
              ) : (
                <button
                  className="flex items-center w-[167px] md:w-[182px] font-sans gap-1 rounded-[16px] pr-[12px] pl-[20px] py-[12px] md:py-[18px] md:pr-[16px] md:pl-[24px] bg-[#11CA00] hover:bg-blue-500 font-semibold leading-[20px] justify-center text-[16px] md:text-[17px]"
                  onClick={toggleInnerModal}>
                  Top up balance
                  <MdOutlineKeyboardArrowRight />
                </button>
              )}
            </div>

            {user && Number(user.balance) < amountDue && (
              <p className="text-[#8E8E8E] leading-[20px] mt-[26px]">
                <span className="text-[#FF6F6F]">
                  Account balance: ${user.balance}
                </span>{" "}
                <span className="hidden sm:inline">
                  There are not enough funds on your account to pay for the
                  order.
                </span>
              </p>
            )}

            <div className="flex text-[#D7B5FF] bg-[#B030BE0A] gap-2 mt-4 rounded-[12px] p-[10px] items-center">
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
                  onClick={toggleInnerModal}>
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
                        onClick={() => handleSwitch(CurrencyType.Fiat)}>
                        Fiat
                      </button>
                      <button
                        className={`px-4 py-2 rounded-full text-sm font-medium w-[92px] ${
                          selected === "Crypto"
                            ? "bg-[#36383D] text-white"
                            : "bg-transparent text-gray-400"
                        }`}
                        onClick={() => handleSwitch(CurrencyType.Crypto)}>
                        Crypto
                      </button>
                    </div>
                  </div>
                  <div className="my-5">
                    <p className="font-semibold leading-[16px]">Amount</p>
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
                      placeholder="Enter amount"
                    />
                    {error && (
                      <p className="text-red-500 text-sm mt-1">{error}</p>
                    )}
                  </div>
                  <button
                    onClick={handlePayment}
                    disabled={!!error || amount <= 0}
                    className={`w-full flex items-center justify-center gap-1 rounded-[16px] py-[18px] pr-[16px] pl-[24px] ${
                      error || amount <= 0
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-[#11CA00] hover:bg-blue-500"
                    } font-semibold leading-[20px] text-[17px]`}>
                    Go to payment
                    <MdOutlineKeyboardArrowRight />
                  </button>
                </div>
              </div>
            </>
          )}
        </OverlayScrollbarsComponent>
      </div>
    </div>
  );
};
