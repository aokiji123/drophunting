"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-white">404</h1>
      <p className="text-2xl text-white">{t("notFound.pageNotFound")}</p>
      <Link
        href="/guides"
        className="text-blue-500 mt-4 hover:text-blue-600 hover:underline">
        {t("notFound.goBackHome")}
      </Link>
    </div>
  );
}
