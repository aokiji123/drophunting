"use client";

import { AuthenticatorVerificationModal } from "@/app/components/modals/AuthenticatorVerificationModal";
import { updateAxiosToken } from "@/shared/api/axios";
import useStore from "@/shared/store";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function GoogleCallback() {
  const { googleLogin, setIsLoading } = useStore();

  const { t } = useTranslation();

  const [loadingData, setLoadingData] = useState(true);

  const [bannedMessage, setBannedMessage] = useState<string | false>(false);
  const [needs2FA, setNeeds2FA] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setLoadingData(true);

    if (typeof window !== "undefined") {
      const accessToken = new URLSearchParams(window.location.search).get(
        "access_token",
      );

      if (accessToken) {
        updateAxiosToken(accessToken);
        console.log({ accessToken });

        googleLogin(accessToken)
          .then(() => {
            window.location.href = "/guides";
          })
          .catch((err) => {
            console.log(err.errorMessage);

            if (err.errorMessage === "2-factor authentication failed.") {
              setNeeds2FA(true);
              updateAxiosToken(accessToken);
            } else {
              setBannedMessage(err.errorMessage);
            }
          })
          .finally(() => {
            setIsLoading(false);
            setLoadingData(false);
          });
      } else {
        console.error("Access token not found in the URL");
        window.location.href = "/auth/login";
      }
    }
  }, []);

  return (
    <>
      {!loadingData && bannedMessage && (
        <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
          <p className="text-[16px] text-red-600">{bannedMessage}</p>
          <button
            onClick={() => (window.location.href = "/auth/login")}
            className="bg-[#11CA00] hover:bg-[#0CAE00] transition-colors font-medium text-[14px] px-4 py-2.5 rounded-lg">
            {t("header.login")}
          </button>
        </div>
      )}
      {!loadingData && needs2FA && (
        <AuthenticatorVerificationModal
          onClose={() => {
            window.location.href = "/auth/login";
          }}
        />
      )}
    </>
  );
}
