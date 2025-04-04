"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import i18n from "@/shared/i18n";
import useStore from "@/shared/store";

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [isRefreshed, setIsRefreshed] = useState(false);

  const { refreshUser, setIsLoading, logout } = useStore();

  useEffect(() => {
    const handleLogout = () => {
      window.location.href = "/auth/login";
    };

    window.addEventListener("unauthorized", handleLogout);

    return () => {
      window.removeEventListener("unauthorized", handleLogout);
    };
  }, []);

  useEffect(() => {
    const checkUserStatus = async () => {
      setIsLoading(true);
      if (
        !["auth"].some((p) => pathname.includes(p)) &&
        !pathname.includes("landing")
      ) {
        try {
          const user = await refreshUser();
          // Sync language with user preference
          if (user?.lang && i18n.language !== user.lang) {
            i18n.changeLanguage(user.lang);
          }
          if (user?.subaccount && pathname !== "/not-found") {
            if (
              pathname.includes("referal") ||
              pathname.includes("subaccounts") ||
              pathname.includes("subscriptions") ||
              pathname.includes("progress")
            ) {
              router.push("/not-found");
            }
          }
        } catch (error) {
          if (error instanceof Error && error.message === "Forbidden") {
            setIsLoading(true);
            await logout();
            router.push("/auth/login");
          }
        } finally {
          setIsLoading(false);
          setIsRefreshed(true);
        }
      } else {
        setIsLoading(false);
        setIsRefreshed(true);
      }
    };

    checkUserStatus();
  }, [pathname, refreshUser, logout, router, setIsLoading]);

  if (!isRefreshed)
    return (
      <>
        <div className="bg-[#101114] text-white min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#CBFF51]"></div>
        </div>
      </>
    );

  return children;
}
