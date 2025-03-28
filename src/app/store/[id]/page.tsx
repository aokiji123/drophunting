"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import { FiCheck } from "react-icons/fi";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import useStore from "@/shared/store";
import { useTranslation } from "react-i18next";

const ProductDetail = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const params = useParams();
  const productId = params.id as string;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [telegramHandle, setTelegramHandle] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    productDetails,
    isLoadingProductDetails,
    productDetailsError,
    fetchProductDetails,
    createOrder,
    isCreatingOrder,
    orderCreateSuccess,
    orderCreateError,
    resetOrderState,
    user,
  } = useStore();

  const effectiveLanguage = useMemo(() => {
    return user?.lang || i18n.language;
  }, [user?.lang, i18n.language]);

  useEffect(() => {
    if (productId) {
      fetchProductDetails(productId);
    }

    resetOrderState();
  }, [productId, fetchProductDetails, resetOrderState, effectiveLanguage]);

  const toggleModal = () => {
    if (isModalOpen) {
      resetOrderState();
      setFormSubmitted(false);
    }

    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!productDetails) return;

    const success = await createOrder({
      telegram: telegramHandle,
      message,
      product_id: productDetails.id,
    });

    if (success) {
      setFormSubmitted(true);
      setTelegramHandle("");
      setMessage("");
    }
  };

  const getImageUrl = (path: string) => {
    if (!path) return "";
    const backendUrl = "https://app.esdev.tech";
    return path.startsWith("http") ? path : `${backendUrl}${path}`;
  };

  if (isLoadingProductDetails) {
    return (
      <div className="bg-[#101114] text-white min-h-screen">
        <Header />
        <main className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#CBFF51]"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (productDetailsError || !productDetails) {
    return (
      <div className="bg-[#101114] text-white min-h-screen">
        <Header />
        <main className="flex flex-col items-center justify-center py-20">
          <h1 className="text-2xl font-bold mb-4">
            {t("store.productNotFound")}
          </h1>
          <p className="text-[#B0B0B0] mb-8">
            {productDetailsError || t("store.productNotFoundDescription")}
          </p>
          <button
            onClick={() => router.push("/store")}
            className="flex items-center px-4 py-2 rounded-[32px] bg-[#1C1D21] text-white hover:bg-[#2A2C32]">
            <IoIosArrowBack size={20} className="mr-2" />
            {t("store.backToStore")}
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#101114] text-white">
      <Header />

      <main>
        <div className="pl-[30px] xl:pl-[96px] mb-[30px]">
          <button
            onClick={() => router.push("/store")}
            className="flex items-center pr-[14px] pl-[8px] py-[8px] rounded-[32px] gap-1 bg-[#1C1D21] text-[#7F7F7F]">
            <IoIosArrowBack size={20} />
            <p>{t("common.back")}</p>
          </button>
        </div>
        <div className="pt-[16px] pb-[80px] px-[32px] md:gap-[56px] flex justify-center">
          <div className="w-[447px] lg:w-[618px]">
            <div className="flex items-center mb-[16px]">
              <p className="rounded-[6px] px-[8px] py-[6px] bg-[#211E12] text-[13px] leading-[16px] font-semibold text-[#C6A975]">
                {productDetails.product_category.title}
              </p>
            </div>
            <p className="text-[22px] leading-[26px] sm:text-[24px] sm:leading-[30px] lg:text-[32px] lg:leading-[40px] font-bold tracking-[-2%]">
              {productDetails.title}
            </p>

            <div
              className={`block md:hidden w-[335px] h-auto md:w-[308px] md:h-auto lg:w-[366px] lg:h-auto border-[1px] bg-[#1A1B1F] border-[#24262C] rounded-[16px] overflow-hidden mt-[32px]`}>
              <div className="h-[200px] overflow-hidden">
                <Image
                  src={getImageUrl(productDetails.img)}
                  alt={productDetails.title}
                  width={335}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-[16px] lg:p-[20px] pb-[16px] bg-[#1A1B1F] flex flex-col justify-between">
                <div className="flex flex-col gap-[12px] lg:gap-[20px]">
                  <p className="text-[16px] leading-[20px] lg:text-[18px] lg:leading-[20px] font-bold">
                    {productDetails.title}
                  </p>
                </div>
                <div className="flex items-center gap-[12px] my-[12px] md:my-[28px]">
                  <p className="text-[16px] leading-[20px] lg:text-[18px] lg:leading-[22px] font-semibold">
                    {t("store.from")} ${productDetails.price}
                  </p>
                  <p className="text-[14px] leading-[20px] text-[#8E8E8E]">
                    {t("store.perProject")}
                  </p>
                </div>
                <button
                  onClick={toggleModal}
                  className="h-[44px] lg:h-[56px] font-sans w-full px-[20px] lg:px-[24px] py-[12px] lg:py-[18px] rounded-[16px] bg-[#11CA00] text-[16px] lg:text-[17px] leading-[20px] font-semibold">
                  {t("store.orderProduct")}
                </button>
              </div>
            </div>

            <div
              className="mt-[32px]"
              dangerouslySetInnerHTML={{ __html: productDetails.description }}
            />
          </div>
          <div>
            <div
              className={`hidden md:block w-[335px] h-auto md:w-[310px] md:h-auto lg:w-[366px] lg:h-auto border-[1px] bg-[#1A1B1F] border-[#24262C] rounded-[16px] overflow-hidden`}>
              <div className="h-[200px] overflow-hidden">
                <Image
                  src={getImageUrl(productDetails.img)}
                  alt={productDetails.title}
                  width={366}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-[16px] lg:p-[20px] pb-[16px] bg-[#1A1B1F] flex flex-col justify-between">
                <div className="flex flex-col gap-[12px] lg:gap-[20px]">
                  <p className="text-[16px] leading-[20px] lg:text-[18px] lg:leading-[22px] font-bold">
                    {productDetails.title}
                  </p>
                </div>
                <div className="flex items-center gap-[12px] my-[12px] md:my-[28px]">
                  <p className="text-[16px] leading-[20px] lg:text-[18px] lg:leading-[22px] font-semibold">
                    {t("store.from")} ${productDetails.price}
                  </p>
                  <p className="text-[14px] leading-[20px] text-[#8E8E8E]">
                    {t("store.perProject")}
                  </p>
                </div>
                <button
                  onClick={toggleModal}
                  className="h-[44px] lg:h-[56px] font-sans w-full px-[20px] lg:px-[24px] py-[12px] lg:py-[18px] rounded-[16px] bg-[#11CA00] text-[16px] lg:text-[17px] leading-[20px] font-semibold">
                  {t("store.orderProduct")}
                </button>
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-40 z-50"></div>

            <div className="fixed top-[150px] md:top-[60px] left-1/2 -translate-x-1/2 w-[357px] sm:w-[381px] h-[474px] lg:h-[494px] rounded-[12px] z-50 bg-[#1C1E22] p-6">
              <button
                className="absolute top-5 right-5"
                onClick={toggleModal}
                disabled={isCreatingOrder}>
                <IoMdClose
                  size={24}
                  className="text-[#9EA0A6] cursor-pointer"
                />
              </button>

              {formSubmitted && orderCreateSuccess ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="bg-[#11CA00] rounded-full p-4 mb-6">
                    <FiCheck size={32} className="text-white" />
                  </div>
                  <h2 className="text-[24px] font-bold mb-4 text-center">
                    {t("store.orderSubmitted")}
                  </h2>
                  <p className="text-[16px] text-[#B0B0B0] text-center mb-8">
                    {t("store.orderThankYou")}
                  </p>
                  <button
                    onClick={toggleModal}
                    className="h-[44px] lg:h-[56px] font-sans w-full px-[20px] lg:px-[24px] py-[12px] lg:py-[18px] rounded-[16px] bg-[#1D1E23] text-[16px] lg:text-[17px] leading-[20px] font-semibold">
                    {t("common.close")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <p className="text-[20px] lg:text-[24px] font-bold leading-[20px]">
                    {t("store.orderProduct")}
                  </p>
                  <p className="text-[14px] leading-[16px] font-chakra text-[#8E8E8E] mt-[12px] mb-[16px] lg:mb-[28px]">
                    {t("store.leaveContacts")}
                  </p>

                  {orderCreateError && (
                    <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 mb-4">
                      <p className="text-red-500 text-sm">{orderCreateError}</p>
                    </div>
                  )}

                  <div className="flex flex-col gap-2 mb-[16px]">
                    <p className="font-semibold text-[13px] lg:text-[14px]">
                      {t("store.telegram")}
                    </p>
                    <input
                      className="bg-[#292B2F] px-[16px] py-[12px] rounded-[14px] outline-none border-[1px] border-transparent focus:border-blue-500"
                      placeholder="@nickname"
                      value={telegramHandle}
                      onChange={(e) => setTelegramHandle(e.target.value)}
                      required
                      disabled={isCreatingOrder}
                    />
                  </div>
                  <div className="flex flex-col gap-2 mb-[24px]">
                    <p className="font-semibold text-[13px] lg:text-[14px]">
                      {t("store.yourMessage")}
                    </p>
                    <div
                      className={`p-[6px] bg-[#292B2F] rounded-[14px] overflow-hidden h-[160px] ${
                        isFocused ? "outline outline-blue-500" : ""
                      }`}
                      data-focused={isFocused}>
                      <textarea
                        className="w-full min-h-[50px] h-full bg-[#292B2F] px-[10px] py-[6px] rounded-[10px] resize-none overflow-auto focus:outline-none"
                        placeholder={t("store.describeIdea")}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        required
                        disabled={isCreatingOrder}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={`h-[44px] lg:h-[56px] font-sans w-full px-[20px] lg:px-[24px] py-[12px] lg:py-[18px] rounded-[16px] ${
                      isCreatingOrder ? "bg-[#11CA00]/50" : "bg-[#11CA00]"
                    } text-[16px] lg:text-[17px] leading-[20px] font-semibold flex items-center justify-center`}
                    disabled={isCreatingOrder}>
                    {isCreatingOrder ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                        {t("store.sending")}
                      </>
                    ) : (
                      t("store.send")
                    )}
                  </button>
                </form>
              )}
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
