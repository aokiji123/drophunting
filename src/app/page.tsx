"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthContext from "@/shared/hooks/useAuthContext";
import Profile from "@/app/profile/page";
import i18n from "@/shared/i18n";
import { I18nextProvider } from "react-i18next";

export default function Home() {
  const { sessionVerified } = useAuthContext();
  const router = useRouter();
  console.log(sessionVerified);

  useEffect(() => {
    if (sessionVerified) {
      router.push("/profile");
    }
  }, [sessionVerified, router]);

  return (
    <I18nextProvider i18n={i18n}>
      <div className="bg-[#101114] overflow-auto">
        <Profile />
      </div>
    </I18nextProvider>
  );
}
