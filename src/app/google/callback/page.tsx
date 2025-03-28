"use client";

import useStore from "@/shared/store";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function GoogleCallback() {
  const { googleLogin, setIsLoading } = useStore();

  const { t } = useTranslation();

  const [bannedMessage, setBannedMessage] = useState<"loading" | string | null>(
    "loading",
  );

  useEffect(() => {
    setIsLoading(true);

    if (typeof window !== "undefined") {
      const accessToken = new URLSearchParams(window.location.search).get(
        "access_token",
      );

      if (accessToken) {
        googleLogin(accessToken)
          .then(() => {
            window.location.href = "/guides";
          })
          .catch((err) =>
            setBannedMessage(
              typeof err?.response?.data === "string"
                ? err.response.data
                : "loading",
            ),
          )
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        console.error("Access token not found in the URL");
        window.location.href = "/auth/login";
      }
    }
  }, []);

  if (bannedMessage === "loading" || !bannedMessage) return;

  if (bannedMessage === "banned") {
    return (
      <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
        <p className="text-[16px] text-red-600">{bannedMessage}</p>
        <button
          onClick={() => (window.location.href = "/auth/login")}
          className="bg-[#11CA00] hover:bg-[#0CAE00] transition-colors font-medium text-[14px] px-4 py-2.5 rounded-lg">
          {t("header.login")}
        </button>
      </div>
    );
  }
}
