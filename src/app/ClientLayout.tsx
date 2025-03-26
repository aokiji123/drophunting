"use client";

import { I18nextProvider } from "react-i18next";
import i18n from "@/shared/i18n";
import UserProvider from "@/shared/providers/UserProvider";
import LoadingProvider from "@/shared/providers/LoadingProvider";
import {
  OverlayScrollbarsComponent,
  OverlayScrollbarsComponentRef,
} from "overlayscrollbars-react";
import { useRef, useEffect } from "react";
import { OverlayScrollbars } from "overlayscrollbars";

declare global {
  interface Window {
    overlayScrollbarsInstance: OverlayScrollbars | null;
  }
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const osComponentRef = useRef<OverlayScrollbarsComponentRef<"div">>(null);

  useEffect(() => {
    if (osComponentRef.current?.osInstance()) {
      window.overlayScrollbarsInstance = osComponentRef.current.osInstance();
    }
  }, []);

  return (
    <OverlayScrollbarsComponent
      ref={osComponentRef}
      options={{
        scrollbars: {
          autoHide: "scroll",
        },
      }}
      style={{ height: "100vh", width: "100%" }}>
      <I18nextProvider i18n={i18n}>
        <LoadingProvider>
          <UserProvider>{children}</UserProvider>
        </LoadingProvider>
      </I18nextProvider>
    </OverlayScrollbarsComponent>
  );
}
