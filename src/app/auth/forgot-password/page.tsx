"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Header from "@/app/auth/components/Header";
import { RiKey2Line } from "react-icons/ri";
import Footer from "@/app/auth/components/Footer";
import { useRouter } from "next/navigation";
import useAuthContext from "@/shared/hooks/useAuthContext";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { sendPasswordResetLink } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    if (email) {
      sendPasswordResetLink({ email });
      router.push("/auth/email-confirmation");
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
          <div className="flex flex-col items-center justify-center w-[335px] mt-[35px] sm:w-[375px]">
            <h2 className="text-[24px] sm:text-[28px] w-[350px] font-bold leading-[40px] mb-[20px]">
              Restore password
            </h2>
            <p className="text-[14px] text-[#B0B0B0] leading-[20px] w-[340px] mb-[30px]">
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
                className="p-3 px-4 w-full bg-[--green] rounded-[14px] mb-6 font-bold hover:bg-blue-500 hover:rounded-[10px]"
                type="submit"
              >
                {loading ? "Loading..." : "Email password reset link"}
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
