import { BsTwitterX } from "react-icons/bs";
import { FaCaretDown, FaDiscord, FaInstagram } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { RiTelegram2Fill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

type LandingModalType = {
  toggleLandingModal: () => void;
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  aboutSectionRef: React.RefObject<HTMLDivElement>;
  resultsSectionRef: React.RefObject<HTMLDivElement>;
  howItWorksSectionRef: React.RefObject<HTMLDivElement>;
  contactsSectionRef: React.RefObject<HTMLDivElement>;
};

const LandingModal = ({
  toggleLandingModal,
  scrollToSection,
  aboutSectionRef,
  resultsSectionRef,
  howItWorksSectionRef,
  contactsSectionRef,
}: LandingModalType) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="flex flex-col h-full p-4 px-[12px] pt-[48px] pb-[34px]">
      <button
        className="block lg:hidden absolute top-3 right-3 text-white"
        onClick={toggleLandingModal}>
        <IoMdClose size={24} className="hover:text-[#9EA0A6] cursor-pointer" />
      </button>
      <div className="flex flex-col gap-[38px]">
        <ul className="flex flex-col gap-[4px]">
          <li className="px-[12px] py-[8px]">
            <button
              onClick={() => scrollToSection(aboutSectionRef)}
              className="text-white text-[16px] leading-[18px] font-semibold hover:text-[#11CA00] transition-colors">
              {t("landingModal.aboutService")}
            </button>
          </li>
          <li className="px-[12px] py-[8px]">
            <button
              onClick={() => scrollToSection(resultsSectionRef)}
              className="text-white text-[16px] leading-[18px] font-semibold hover:text-[#11CA00] transition-colors">
              {t("landingModal.results")}
            </button>
          </li>
          <li className="px-[12px] py-[8px]">
            <button
              onClick={() => scrollToSection(howItWorksSectionRef)}
              className="text-white text-[16px] leading-[18px] font-semibold hover:text-[#11CA00] transition-colors">
              {t("landingModal.howItWorks")}
            </button>
          </li>
          <li className="px-[12px] py-[8px]">
            <button
              onClick={() => scrollToSection(contactsSectionRef)}
              className="text-white text-[16px] leading-[18px] font-semibold hover:text-[#11CA00] transition-colors">
              {t("landingModal.contacts")}
            </button>
          </li>
        </ul>
        <div className="flex flex-col gap-[8px]">
          <a
            href="https://app.drophunting.io"
            className="hover:bg-[#0D9E00] transition-colors w-full h-[48px] px-[38px] py-[24px] rounded-[10px] text-[14px] md:text-[15px] leading-[18px] font-semibold bg-[#11CA00] flex items-center justify-center">
            {t("landingModal.goToAggregator")}
          </a>
          {/* <button className="w-full h-[48px] px-[38px] py-[24px] rounded-[10px] text-[14px] md:text-[15px] leading-[18px] font-semibold bg-[#21274C] flex items-center justify-center">
            {t("landingModal.subscribeToBot")}
          </button> */}
        </div>
      </div>
      <hr className="my-[26px] border-0 h-px bg-[#24262A]" />
      <div className="flex items-center mb-[26px]">
        <div className="flex items-center gap-[20px]">
          <BsTwitterX
            onClick={() => window.open("https://google.com", "_blank")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            size={24}
          />
          <FaDiscord
            onClick={() => window.open("https://google.com", "_blank")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            size={28}
          />
          <RiTelegram2Fill
            onClick={() => window.open("https://google.com", "_blank")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            size={28}
          />
          <FaInstagram
            onClick={() => window.open("https://google.com", "_blank")}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            size={28}
          />
        </div>
      </div>
      <div className="cursor-pointer" onClick={toggleLanguage}>
        <div className="flex items-center gap-[6px]">
          <GrLanguage size={20} />
          <p>{t("landing.language")}</p>
          <FaCaretDown />
        </div>
      </div>
    </div>
  );
};

export default LandingModal;
