"use client";
import React, { useEffect, useMemo, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { IoIosArrowBack, IoMdTime } from "react-icons/io";
import Image from "next/image";
import { MdOutlineDone } from "react-icons/md";
import { useParams, useRouter } from "next/navigation";
import useStore from "@/shared/store";
import { useTranslation } from "react-i18next";

const BlogArticle = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const params = useParams();
  const id = params.id as string;

  const {
    blogArticleDetails,
    isLoadingBlogArticleDetails,
    blogArticleDetailsError,
    fetchBlogArticleDetails,
    toggleRead,
    user,
  } = useStore();

  // Track initial auth state to determine which language source to watch
  const [initiallyAuthorized] = useState(!!user);

  // Choose language source based on initial auth state
  const languageToWatch = useMemo(() => {
    if (initiallyAuthorized) {
      return user?.lang;
    } else {
      return i18n.language;
    }
  }, [initiallyAuthorized, user?.lang, i18n.language]);

  // For display purposes, always use the effective language (current state)
  const effectiveLanguage = useMemo(() => {
    return user?.lang || i18n.language;
  }, [user?.lang, i18n.language]);

  useEffect(() => {
    if (id) {
      fetchBlogArticleDetails(id);
    }
  }, [fetchBlogArticleDetails, id, languageToWatch]);

  const handleToggleRead = async () => {
    if (blogArticleDetails) {
      await toggleRead(blogArticleDetails.id);
    }
  };

  const getImageUrl = (path: string) => {
    const backendUrl = "https://app.drophunting.io";
    return path.startsWith("http") ? path : `${backendUrl}${path}`;
  };

  if (isLoadingBlogArticleDetails) {
    return (
      <div className="bg-[#101114] text-white min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#CBFF51]"></div>
      </div>
    );
  }

  if (blogArticleDetailsError) {
    return (
      <div className="bg-[#101114] text-white min-h-screen flex flex-col items-center justify-center p-4">
        <p className="text-red-500 text-xl mb-4">
          {t("blogArticle.errorLoading")}
        </p>
        <p className="text-gray-400 mb-6">{blogArticleDetailsError}</p>
        <button
          onClick={() => router.push("/blog")}
          className="bg-[#1C1D21] text-white px-4 py-2 rounded-lg hover:bg-[#2A2C32]">
          {t("blogArticle.backToBlog")}
        </button>
      </div>
    );
  }

  if (!blogArticleDetails) {
    return (
      <div className="bg-[#101114] text-white min-h-screen flex items-center justify-center">
        <p className="text-gray-400">{t("blogArticle.articleNotFound")}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#101114] text-white">
      <Header />

      <main>
        <div className="pl-[30px] md:pl-[96px] mb-[30px]">
          <button
            onClick={() => router.push("/blog")}
            className="flex items-center pr-[14px] pl-[8px] py-[8px] rounded-[32px] gap-1 bg-[#1C1D21] text-[#7F7F7F]">
            <IoIosArrowBack size={20} />
            <p>{t("blogArticle.back")}</p>
          </button>
        </div>
        <div className="pb-[120px] px-[30px] sm:px-[56px] md:px-[106px] lg:px-[206px] xl:px-[306px]">
          <div className="w-full h-[300px] relative">
            <Image
              src={getImageUrl(blogArticleDetails.img)}
              alt={
                effectiveLanguage === "ru"
                  ? blogArticleDetails.name.ru
                  : blogArticleDetails.name.en
              }
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="my-[32px]">
            <div className="flex items-center gap-[8px]">
              <div className="text-[#A0A8AE] flex items-center bg-[#212125] px-[8px] py-[6px] rounded-[6px] gap-1">
                <IoMdTime size={12} />
                <p className="text-[13px] leading-[16px] font-semibold">
                  {blogArticleDetails.reading_time} min
                </p>
              </div>
              <p className="rounded-[6px] px-[8px] py-[6px] bg-[#212125] text-[13px] leading-[16px] font-semibold text-[#A0A8AE]">
                {blogArticleDetails.updated}
              </p>
              <p className="rounded-[6px] px-[8px] py-[6px] bg-[#211E12] text-[13px] leading-[16px] font-semibold text-[#C6A975]">
                {effectiveLanguage === "ru"
                  ? blogArticleDetails.category.name.ru
                  : blogArticleDetails.category.name.en}
              </p>
            </div>
          </div>
          <p className="font-bold text-[32px] lg:text-[35px] xl:text-[42px] leading-[38px] lg:leading-[50px]">
            {effectiveLanguage === "ru"
              ? blogArticleDetails.name.ru
              : blogArticleDetails.name.en}
          </p>
          {user && (
            <div
              onClick={handleToggleRead}
              className={`cursor-pointer p-4 rounded-[12px] flex items-center transition-all duration-300 mt-[32px] w-fit h-[56px] ${
                blogArticleDetails.read > 0 ? "bg-[#1D2A19]" : "bg-[#070709]"
              }`}>
              <div className="flex items-center gap-4">
                <div
                  className={`w-[32px] h-[32px] flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    blogArticleDetails.read > 0
                      ? "border-[#47572D75] bg-[#151B15]"
                      : "border-[#32353D] bg-[#101114]"
                  }`}>
                  <div
                    className={`${
                      blogArticleDetails.read > 0 &&
                      `bg-[#CBFF512E] rounded-full p-[4px] text-[#CBFF51]`
                    }`}>
                    {blogArticleDetails.read > 0 && <MdOutlineDone size={16} />}
                  </div>
                </div>
                <p
                  className={`font-chakra font-bold text-[18px] leading-[15px] ${
                    blogArticleDetails.read > 0
                      ? "text-[#A0A8AECC]"
                      : "text-[#A0A8AE]"
                  }`}>
                  {t("blogArticle.iHaveRead")}
                </p>
              </div>
            </div>
          )}

          <div
            className="article-content mt-[32px] text-[#CACBCE]"
            dangerouslySetInnerHTML={{
              __html:
                effectiveLanguage === "ru"
                  ? blogArticleDetails.content.ru
                  : blogArticleDetails.content.en,
            }}
          />

          {user && (
            <div className="flex items-center justify-center mt-[60px]">
              <div
                onClick={handleToggleRead}
                className={`cursor-pointer p-4 rounded-[12px] flex items-center transition-all duration-300 max-h-[56px] ${
                  blogArticleDetails.read > 0 ? "bg-[#1D2A19]" : "bg-[#070709]"
                }`}>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-[32px] h-[32px] flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      blogArticleDetails.read > 0
                        ? "border-[#47572D75] bg-[#151B15]"
                        : "border-[#32353D]"
                    }`}>
                    <div
                      className={`${
                        blogArticleDetails.read > 0 &&
                        `bg-[#CBFF512E] rounded-full p-[4px] text-[#CBFF51]`
                      }`}>
                      {blogArticleDetails.read > 0 && (
                        <MdOutlineDone size={16} />
                      )}
                    </div>
                  </div>
                  <p
                    className={`font-chakra font-bold text-[18px] leading-[15px] ${
                      blogArticleDetails.read > 0
                        ? "text-[#A0A8AECC]"
                        : "text-[#A0A8AE]"
                    }`}>
                    {t("blogArticle.iHaveRead")}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogArticle;
