"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { I18nextProvider } from "react-i18next";

import i18n from "@/shared/i18n";

import "./globals.css";
import "overlayscrollbars/overlayscrollbars.css";
import "../shared/styles/scrollbar.css";
import useCustomScrollbar from "@/shared/hooks/useCustomScrollbar";
import UserProvider from "@/shared/providers/UserProvider";
import LoadingProvider from "@/shared/providers/LoadingProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyRef = useCustomScrollbar();

  return (
    <html lang="en" style={{ overflow: "auto" }}>
      <body
        ref={bodyRef}
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#101114]`}>
        <I18nextProvider i18n={i18n}>
          <LoadingProvider>
            <UserProvider>{children}</UserProvider>
          </LoadingProvider>
        </I18nextProvider>
      </body>
    </html>
  );
}
