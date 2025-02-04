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
  const [error, setError] = useState("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    if (!email) {
      setError("Email is required.");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      await sendPasswordResetLink({ email });
      router.push("/auth/email-confirmation");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      setError("Failed to send reset link. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-[#101114] mx-auto text-white min-h-screen flex flex-col overflow-hidden">
      <Header />

      <main className="flex flex-col items-center text-center flex-grow">
        <div className="flex flex-col items-center min-h-[80vh] mt-[38px]">
          <div className="flex items-center justify-center w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] rounded-[14px] bg-gradient-to-b from-[#030304] to-[#2e2f34] border-[1px] border-[#323339]">
            <RiKey2Line size={28} className="text-[#EDEDED]" />
          </div>
          <div className="flex flex-col items-center justify-center w-[335px] mt-[35px] sm:w-[375px]">
            <h2 className="text-[24px] sm:text-[28px] w-[350px] font-bold leading-[40px] mb-[20px]">
              Restore password
            </h2>
            <p className="text-[#B0B0B0] leading-[20px] w-[340px] mb-[30px]">
              Forgot your password? No problem. Just let us know your email
              address and we will email you a password reset link that will
              allow you to choose a new one.
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-[420px]">
              <div className="mb-4">
                <input
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  className={`p-3 w-full px-4 bg-[--dark-gray] rounded-[14px] focus:outline-none ${
                    error
                      ? "bg-[--input-bg-error] placeholder:text-[--input-error] border border-[--input-bg-error]"
                      : "border-[--dark-gray] border-[1px] bg-[--dark-gray] focus:border-[1px] focus:border-gray-500"
                  }`}
                  aria-invalid={!!error}
                  aria-describedby="email-error"
                  autoComplete="off"
                />
                {error && (
                  <p id="email-error" className="text-[--error] text-xs mt-1">
                    {error}
                  </p>
                )}
              </div>

              <button
                className="p-3 px-4 w-full bg-[--green] rounded-[14px] font-sans mb-6 font-bold hover:bg-blue-500 hover:rounded-[10px]"
                type="submit"
                disabled={loading}
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
