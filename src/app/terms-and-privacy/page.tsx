"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const TermsAndPrivacy = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className="bg-[#101114] text-white">
      <Header />

      <main>
        <button
          onClick={() => router.push("/guides")}
          className="font-chakra flex items-center ml-[24px] pr-[14px] pl-[8px] py-[8px] rounded-[32px] gap-1 bg-[#1C1D21] text-[#7F7F7F] w-[72px] h-[32px]">
          <IoIosArrowBack size={20} />
          <p>{t("common.back")}</p>
        </button>
        <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">
            {t("termsAndPrivacy.privacyPolicy")}
          </h1>

          <p className="mb-4">{t("termsAndPrivacy.privacyIntro")}</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            {t("termsAndPrivacy.infoWeCollectTitle")}
          </h2>
          <p className="mb-4">{t("termsAndPrivacy.infoWeCollectText")}</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            {t("termsAndPrivacy.howWeUseTitle")}
          </h2>
          <p className="mb-4">{t("termsAndPrivacy.howWeUseText")}</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            {t("termsAndPrivacy.dataProtectionTitle")}
          </h2>
          <p className="mb-4">{t("termsAndPrivacy.dataProtectionText")}</p>

          <h1 className="text-2xl font-bold mt-8 mb-4">
            {t("termsAndPrivacy.termsOfService")}
          </h1>

          <p className="mb-4">{t("termsAndPrivacy.termsIntro")}</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            {t("termsAndPrivacy.acceptanceTitle")}
          </h2>
          <p className="mb-4">{t("termsAndPrivacy.acceptanceText")}</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            {t("termsAndPrivacy.useOfServicesTitle")}
          </h2>
          <p className="mb-4">{t("termsAndPrivacy.useOfServicesText")}</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            {t("termsAndPrivacy.limitationTitle")}
          </h2>
          <p className="mb-4">{t("termsAndPrivacy.limitationText")}</p>

          <p className="mt-6 text-gray-600 text-sm">
            {t("termsAndPrivacy.contactUs")}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndPrivacy;
