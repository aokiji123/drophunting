"use client";
import React, { ReactNode, useState } from "react";
import Header from "@/app/auth/components/Header";
import Footer from "@/app/auth/components/Footer";
import Image from "next/image";
import loginIcon from "../../../shared/assets/icons/sign-in.png";
import { useForm } from "react-hook-form";
import Link from "next/link";

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormData>();
  const [serverError, setServerError] = useState("");

  const onSubmit = (data: LoginFormData) => {
    console.log(data);

    // Simulate server validation
    if (data.email !== "test@example.com" || data.password !== "password123") {
      setValue("email", "");
      setValue("password", "");
      setServerError(
        "This email and password does not exist, please try again or register a new profile",
      );
    } else {
      setServerError("");
    }
  };

  return (
    <div className="bg-black mx-auto text-white min-h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex flex-col items-center justify-center text-center flex-grow">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="flex items-center justify-center w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[--dark-gray] rounded-xl shadow-lg border-[0.75px] border-gray-300">
            <Image
              src={loginIcon}
              alt="Login Icon"
              className="w-[28px] h-[28px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[335px] sm:w-[335px]">
            <h2 className="text-[34px] w-[350px] font-bold leading-[40px] mt-[35px] mb-[20px]">
              Login
            </h2>
            <p className="text-[14px] text-[#B0B0B0] leading-[20px] w-full mb-[30px]">
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
                  {...register("email", { required: "Email is required" })}
                  className={`p-3 w-full px-4 bg-[--dark-gray] rounded-[14px] focus:outline-none ${
                    errors.email
                      ? "bg-[--input-bg-error] placeholder:text-[--input-error] border border-[--input-bg-error]"
                      : "border-[--dark-gray] border-[1px] bg-[--dark-gray] focus:border-[1px] focus:border-gray-500 focus:outline-none"
                  }`}
                  aria-invalid={!!errors.email}
                  aria-describedby="email-error"
                  autoComplete="off"
                />
                {errors.email && (
                  <p id="email-error" className="text-[--error] text-xs mt-1">
                    {errors.email.message as ReactNode}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className={`p-3 w-full px-4 bg-[--dark-gray] rounded-[14px] focus:outline-none ${
                    errors.password
                      ? "bg-[--input-bg-error] placeholder:text-[--input-error] border border-[--input-bg-error]"
                      : "border-[--dark-gray] border-[1px] bg-[--dark-gray] focus:border-[1px] focus:border-gray-500 focus:outline-none"
                  }`}
                  aria-invalid={!!errors.password}
                  aria-describedby="password-error"
                />
                {errors.password && (
                  <p
                    id="password-error"
                    className="text-[--error] text-xs mt-1"
                  >
                    {errors.password.message as ReactNode}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="p-3 px-4 w-full bg-[--green] rounded-[14px] font-bold hover:bg-blue-500 hover:rounded-[10px]"
              >
                Log In
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
              <div className="flex items-center justify-center gap-2 mt-5">
                <p className="w-[70%]">Don&#39;t have an account?</p>
                <Link
                  className="px-3 py-2 bg-[--dark-gray] font-bold rounded-xl hover:bg-blue-500 hover:rounded-[10px]"
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
