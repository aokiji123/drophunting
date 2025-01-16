"use client";
import React, { useState } from "react";
import Header from "@/app/auth/components/Header";
import Footer from "@/app/auth/components/Footer";
import { FiUser } from "react-icons/fi";
import useAuthContext from "@/shared/hooks/useAuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"; // Import useForm from react-hook-form

type SignUpFormData = {
  name: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>(); // Use react-hook-form
  const [serverError, setServerError] = useState("");
  const { register: registerUser } = useAuthContext();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: SignUpFormData) => {
    setLoading(true);
    try {
      setServerError("");
      await registerUser(data);
      router.push("/profile");
      setLoading(false);
    } catch (err) {
      setServerError("Sign-up failed, please try again.");
      console.error("Sign-up error:", err);
      setLoading(false);
    }
  };

  return (
    <div className="bg-black mx-auto text-white min-h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex flex-col items-center justify-center text-center flex-grow">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="flex items-center justify-center w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[--dark-gray] rounded-xl shadow-lg border-[0.75px] border-gray-300">
            <FiUser size={28} className="text-[#EDEDED]" />
          </div>
          <div className="flex flex-col items-center justify-center w-[335px] mt-[35] sm:w-[375px]">
            <h2 className="text-[34px] w-[350px] font-bold leading-[40px] mb-[20px]">
              Welcome to DropHunting
            </h2>
            <p className="text-[14px] text-[#B0B0B0] leading-[20px] w-full mb-[30px]">
              Get access to hundreds of airports and earn money with DropHunting
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-[420px]"
            >
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                  className={`p-3 w-full px-4 bg-[--dark-gray] rounded-[14px] focus:outline-none ${
                    errors.name
                      ? "bg-[--input-bg-error] placeholder:text-[--input-error] border border-[--input-bg-error]"
                      : "border-[--dark-gray] border-[1px] bg-[--dark-gray] focus:border-[1px] focus:border-gray-500"
                  }`}
                  aria-invalid={!!errors.name}
                  aria-describedby="name-error"
                  autoComplete="off"
                />
                {errors.name && (
                  <p id="name-error" className="text-[--error] text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Email"
                  {...register("email", { required: "Email is required" })}
                  className={`p-3 w-full px-4 bg-[--dark-gray] rounded-[14px] focus:outline-none ${
                    errors.email
                      ? "bg-[--input-bg-error] placeholder:text-[--input-error] border border-[--input-bg-error]"
                      : "border-[--dark-gray] border-[1px] bg-[--dark-gray] focus:border-[1px] focus:border-gray-500"
                  }`}
                  aria-invalid={!!errors.email}
                  aria-describedby="email-error"
                  autoComplete="off"
                />
                {errors.email && (
                  <p id="email-error" className="text-[--error] text-xs mt-1">
                    {errors.email.message}
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
                      : "border-[--dark-gray] border-[1px] bg-[--dark-gray] focus:border-[1px] focus:border-gray-500"
                  }`}
                  aria-invalid={!!errors.password}
                  aria-describedby="password-error"
                  autoComplete="off"
                />
                {errors.password && (
                  <p
                    id="password-error"
                    className="text-[--error] text-xs mt-1"
                  >
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="p-3 px-4 w-full bg-[--green] rounded-[14px] mb-6 font-bold hover:bg-blue-500 hover:rounded-[10px]"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign up"}
              </button>

              {serverError && (
                <p className="text-[--error] text-sm mt-4">{serverError}</p>
              )}

              <div className="flex items-center justify-center gap-4">
                <p className="w-[70%]">Already have an account?</p>
                <Link
                  className="px-3 py-2 bg-[--dark-gray] font-bold rounded-xl hover:bg-blue-500 hover:rounded-[10px]"
                  href="/auth/login"
                >
                  Log In
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

export default SignUp;
