"use client";
import React from "react";
import Header from "@/app/auth/components/Header";
import Footer from "@/app/auth/components/Footer";
import { useRouter } from "next/navigation";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";

const PasswordRestoreConfirmation = () => {
  const router = useRouter();

  return (
    <div className="bg-black mx-auto text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-col items-center justify-center text-center flex-grow">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="flex items-center justify-center w-16 h-16 bg-[--dark-gray] rounded-xl shadow-lg border-[0.75px] border-gray-300">
            <DraftsOutlinedIcon className="w-[28px] h-[28px] text-[#EDEDED]" />
          </div>
          <div className="flex flex-col items-center justify-center w-[425px]">
            <h2 className="text-[34px] w-[350px] font-bold leading-[40px] mt-[35] mb-[20px]">
              Email message was send
            </h2>
            <p className="font-[14px] text-[#B0B0B0] leading-[20px] w-[420px] mb-[30px]">
              We have sent a message to your e-mail address. To restore your
              password, please follow the link provided in the message.
            </p>

            <button
              className="p-3 px-4 w-full bg-[--green] rounded-[14px] mb-6 font-bold"
              onClick={() => router.push("/auth/sign-in")}
            >
              Sign In
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PasswordRestoreConfirmation;
