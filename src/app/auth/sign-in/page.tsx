"use client";
import React, { ReactNode, useState } from "react";
import Header from "@/app/auth/components/Header";
import Footer from "@/app/auth/components/Footer";
import Image from "next/image";
import SignInIcon from "../../../shared/assets/icons/sign-in.png";
import { useForm } from "react-hook-form";

type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignInFormData>();
  const [serverError, setServerError] = useState("");

  const onSubmit = (data: SignInFormData) => {
    console.log(data);

    // Simulate server validation
    if (data.email !== "test@example.com" || data.password !== "password123") {
      setValue("email", "");
      setValue("password", "");
      setServerError(
        "This login and password does not exist, please try again or register a new profile",
      );
    } else {
      setServerError("");
    }
  };

  return (
    <div className="bg-black mx-auto text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-col items-center justify-center text-center flex-grow">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="flex items-center justify-center w-16 h-16 bg-[--dark-gray] rounded-xl shadow-lg border-[0.75px] border-gray-300">
            <Image
              src={SignInIcon}
              alt="Sign In Icon"
              className="w-[28px] h-[28px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full max-w-[425px]">
            <h2 className="text-[34px] w-[350px] font-bold leading-[40px] mt-[35px] mb-[20px]">
              Sign In
            </h2>
            <p className="font-[14px] text-[#B0B0B0] leading-[20px] w-[420px] mb-[30px]">
              Authorize in the system to get into your account
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-[420px]"
            >
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Email"
                  {...register("email", { required: "Email is required" })}
                  className={`p-3 w-full px-4 bg-[--dark-gray] rounded-[14px] focus:outline-none ${
                    errors.email
                      ? "bg-[--input-bg-error] placeholder:text-[--input-error] border border-[--input-bg-error]"
                      : "border-[--dark-gray] bg-[--dark-gray] focus:border-gray-500"
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
                      : "border-gray-500 bg-[--dark-gray] focus:border-gray-500"
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
                className="p-3 px-4 w-full bg-[--green] rounded-[14px] font-bold"
              >
                Log In
              </button>

              {serverError && (
                <p className="text-[--error] text-sm mt-4">{serverError}</p>
              )}

              <a
                className="text-[--light-green] block mt-4"
                href="../auth/forgot-password"
              >
                Forgot your password?
              </a>
              <div className="flex items-center justify-center gap-4 mt-5">
                <p>Don&#39;t have an account?</p>
                <a
                  className="px-3 py-2 bg-[--dark-gray] font-bold rounded-xl"
                  href="../auth/login"
                >
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SignIn;
