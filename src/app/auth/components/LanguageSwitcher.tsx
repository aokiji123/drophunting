"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { FaAngleDown, FaAngleUp, FaCheck } from "react-icons/fa6";

const languages = [
  { code: "en", name: "English", flag: "/assets/icons/en.png" },
  { code: "ru", name: "Russian", flag: "/assets/icons/ru.png" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (code: string) => {
    if (code === selectedLanguage) {
      setIsDropdownOpen(false);
      return;
    }

    setSelectedLanguage(code);
    i18n.changeLanguage(code);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative z-50">
      <button
        className="flex items-center gap-2 bg-[#101114] border border-[#363940] rounded-[10px] py-2 px-3 text-sm hover:bg-[#1c1d22] transition-colors"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <Image
          src={
            languages.find((lang) => lang.code === selectedLanguage)?.flag ||
            languages[0].flag
          }
          alt={selectedLanguage}
          width={20}
          height={20}
          className="rounded-full object-cover"
        />
        <span className="text-white">
          {languages.find((lang) => lang.code === selectedLanguage)?.name}
        </span>
        {isDropdownOpen ? (
          <FaAngleUp size={14} className="text-[#8E8E8E]" />
        ) : (
          <FaAngleDown size={14} className="text-[#8E8E8E]" />
        )}
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-1 w-full min-w-[120px] bg-[#141518] rounded-[10px] shadow-lg overflow-hidden">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className={`flex items-center justify-between p-3 cursor-pointer hover:bg-[#1c1d22] ${
                selectedLanguage === lang.code ? "bg-[#1c1d22]" : ""
              }`}
              onClick={() => handleLanguageChange(lang.code)}>
              <div className="flex items-center gap-2">
                <Image
                  src={lang.flag}
                  alt={lang.name}
                  width={20}
                  height={20}
                  className="rounded-full object-cover"
                />
                <span className="text-white text-sm">{lang.name}</span>
              </div>
              {selectedLanguage === lang.code && (
                <FaCheck size={12} className="text-[#CBFF51]" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
