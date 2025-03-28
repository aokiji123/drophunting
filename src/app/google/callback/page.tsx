"use client";

import useStore from "@/shared/store";
import { useEffect } from "react";

export default function GoogleCallback() {
  const { googleLogin, setIsLoading } = useStore();

  useEffect(() => {
    setIsLoading(true);

    if (typeof window !== "undefined") {
      const accessToken = new URLSearchParams(window.location.search).get(
        "access_token",
      );

      if (accessToken) {
        googleLogin(accessToken).finally(() => {
          // window.location.href = "/guides";
        });
      } else {
        console.error("Access token not found in the URL");
        window.location.href = "/auth/login";
      }
    }
  }, []);

  return;
}
