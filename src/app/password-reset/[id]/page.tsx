"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Header from "@/app/auth/components/Header";
import { RiKey2Line } from "react-icons/ri";
import Footer from "@/app/auth/components/Footer";
import useAuthContext from "@/shared/hooks/useAuthContext";

const PasswordResetHandler = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const token = pathname.slice(16);
  const email = searchParams.get("email");

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const router = useRouter();
  const { newPassword: newPasswordCreation } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleNewPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    if (password) {
      await newPasswordCreation({
        email: email as string,
        token,
        password: password,
        password_confirmation: newPassword,
      });
      router.push("/auth/password-reset-confirmation");
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div className="bg-black mx-auto text-white min-h-screen flex flex-col overflow-hidden">
      <Header />

      <main className="flex flex-col items-center justify-center text-center flex-grow">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="flex items-center justify-center w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[--dark-gray] rounded-xl shadow-lg border-[0.75px] border-gray-300">
            <RiKey2Line size={28} className="text-[#EDEDED]" />
          </div>
          <div className="flex flex-col items-center justify-center w-[335px] sm:w-[375px]">
            <h2 className="text-[24px] sm:text-[28px] w-[350px] font-bold leading-[40px] mt-[35px] mb-[20px]">
              Reset password
            </h2>
            <p className="text-[#B0B0B0] leading-[20px] w-[340px] mb-[30px]">
              Write the new password in the input
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="password"
                placeholder="New password"
                value={password}
                onChange={handlePasswordChange}
                className="p-3 border-[1px] border-[--dark-gray] px-4 w-full bg-[--dark-gray] rounded-[14px] mb-2 focus:border-[1px] focus:border-gray-500 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Repeat new password"
                value={newPassword}
                onChange={handleNewPasswordChange}
                className="p-3 border-[1px] border-[--dark-gray] px-4 w-full bg-[--dark-gray] rounded-[14px] mb-4 focus:border-[1px] focus:border-gray-500 focus:outline-none"
              />
              <button
                className="p-3 px-4 w-full bg-[--green] rounded-[14px] mb-6 font-bold hover:bg-blue-500 hover:rounded-[10px]"
                type="submit"
              >
                {loading ? "Loading..." : "Reset password"}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PasswordResetHandler;
