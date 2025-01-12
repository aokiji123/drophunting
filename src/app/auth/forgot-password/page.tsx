"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Header from "@/app/auth/components/Header";
import { RiKey2Line } from "react-icons/ri";
import Footer from "@/app/auth/components/Footer";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email) {
      router.push("/auth/password-restore-confirmation");
    }
  };

  return (
    <div className="bg-black mx-auto text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-col items-center justify-center text-center flex-grow">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="flex items-center justify-center w-16 h-16 bg-[--dark-gray] rounded-xl shadow-lg border-[0.75px] border-gray-300">
            <RiKey2Line size={28} className="text-[#EDEDED]" />
          </div>
          <div className="flex flex-col items-center justify-center w-[425px]">
            <h2 className="text-[34px] w-[350px] font-bold leading-[40px] mt-[35] mb-[20px]">
              Restore password
            </h2>
            <p className="font-[14px] text-[#B0B0B0] leading-[20px] w-[420px] mb-[30px]">
              Forgot your password? No problem. Just let us know your email
              address and we will email you a password reset link that will
              allow you to choose a new one.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className="p-3 border-[1px] border-[--dark-gray] px-4 w-full bg-[--dark-gray] rounded-[14px] mb-4 focus:border-[1px] focus:border-gray-500 focus:outline-none"
              />
              <button
                className="p-3 px-4 w-full bg-[--green] rounded-[14px] mb-6 font-bold"
                type="submit"
              >
                Email password reset link
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ForgotPassword;
