"use client";
import React, { useState } from "react";
import Header from "@/app/auth/components/Header";
import Footer from "@/app/auth/components/Footer";
import Image from "next/image";
import loginIcon from "../../../../public/assets/icons/login.png";
import { useForm } from "react-hook-form";
import useAuthContext from "@/shared/hooks/useAuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<LoginFormData>();

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const { login } = useAuthContext();

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    try {
      setServerError("");
      await login(data);
      router.push("/profile");
      setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      setServerError(
        "This login and password does not exist, please try again or register a new profile"
      );
      setLoading(false);
    }
  };

  return (
    <div className="bg-black mx-auto text-white min-h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex flex-col items-center text-center flex-grow">
        <div className="flex flex-col items-center min-h-[80vh] mt-[38px]">
          <div className="flex items-center justify-center w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] rounded-xl bg-gradient-to-b from-[#030304] to-[#2e2f34] border-[1px] border-[#323339]">
            <Image
              src={loginIcon}
              alt="Login Icon"
              className="w-[28px] h-[28px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[335px] sm:w-[375px] mt-[35px]">
            <h2 className="text-[34px] w-[350px] font-bold leading-[40px] mb-[20px]">
              Sign In
            </h2>
            <p className="text-[#B0B0B0] leading-[20px] w-full mb-[30px]">
              Authorize in the system to get into your account
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-[420px]"
            >
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Email"
                  {...register("email")}
                  className={`p-3 w-full px-4 bg-[--dark-gray] rounded-[14px] focus:outline-none ${
                    serverError
                      ? "bg-[--input-bg-error] placeholder:text-[--input-error] border border-[--input-bg-error]"
                      : "border-[--dark-gray] border-[1px] bg-[--dark-gray] focus:border-[1px] focus:border-gray-500"
                  }`}
                  aria-invalid={!!serverError}
                  aria-describedby="email-error"
                  autoComplete="off"
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                  className={`p-3 w-full px-4 bg-[--dark-gray] rounded-[14px] focus:outline-none ${
                    serverError
                      ? "bg-[--input-bg-error] placeholder:text-[--input-error] border border-[--input-bg-error]"
                      : "border-[--dark-gray] border-[1px] bg-[--dark-gray] focus:border-[1px] focus:border-gray-500"
                  }`}
                  aria-invalid={!!serverError}
                  aria-describedby="password-error"
                />
              </div>

              <button
                type="submit"
                className="p-3 px-4 w-full bg-[--green] rounded-[14px] font-sans font-bold hover:bg-blue-500 hover:rounded-[10px]"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Log In"}
              </button>

              {serverError && (
                <p className="text-[--error] text-sm mt-4">{serverError}</p>
              )}

              <Link
                className="text-[--light-green] block mt-4"
                href="/auth/forgot-password"
              >
                Forgot your password?
              </Link>

              {/* Sign Up Link */}
              <div className="flex items-center justify-center gap-[16px] mt-5">
                <p className="text-[14px leading-[20px] text-[#B0B0B0]">
                  Don&#39;t have an account?
                </p>
                <Link
                  className="bg-[--dark-gray] font-sans rounded-xl hover:bg-blue-500 hover:rounded-[10px] text-[14px] leading-[16px] font-medium w-[69px] h-[32px] flex items-center justify-center"
                  href="/auth/sign-up"
                >
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
