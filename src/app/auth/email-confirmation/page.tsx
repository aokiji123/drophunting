"use client";
import React from "react";
import Header from "@/app/auth/components/Header";
import Footer from "@/app/auth/components/Footer";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";

const EmailConfirmation = () => {
  return (
    <div className="bg-black mx-auto text-white min-h-screen flex flex-col overflow-hidden">
      <Header />

      <main className="flex flex-col items-center text-center flex-grow">
        <div className="flex flex-col items-center min-h-[80vh] mt-[38px]">
          <div className="flex items-center justify-center w-16 h-16 rounded-[14px] bg-gradient-to-b from-[#030304] to-[#2e2f34] border-[1px] border-[#323339]">
            <DraftsOutlinedIcon className="w-[28px] h-[28px] text-[#EDEDED]" />
          </div>
          <div className="flex flex-col items-center justify-center w-[335px] sm:w-[375px] mt-[35px] ">
            <h2 className="text-[24px] sm:text-[28px] w-[350px] font-bold leading-[40px] mb-[20px]">
              Email message was send
            </h2>
            <p className="text-[#B0B0B0] leading-[20px] w-full mb-[30px]">
              We have sent a message to your e-mail address. To restore your
              password, please follow the link provided in the message.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EmailConfirmation;
