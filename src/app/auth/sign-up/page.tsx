"use client";
import React, { useState } from "react";
import Header from "@/app/auth/components/Header";
import Footer from "@/app/auth/components/Footer";
import { FiUser } from "react-icons/fi";
import useAuthContext from "@/shared/hooks/useAuthContext";
import Link from "next/link";

const SignUp = () => {
  const { register, errors } = useAuthContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      register(formData);
    } catch (err) {
      console.error("Sign-up error:", err);
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
          <div className="flex flex-col items-center justify-center w-[335px] sm:w-[375px]">
            <h2 className="text-[34px] w-[350px] font-bold leading-[40px] mt-[35] mb-[20px]">
              Welcome to DropHunting
            </h2>
            <p className="text-[14px] text-[#B0B0B0] leading-[20px] w-full mb-[30px]">
              Get access to hundreds of airports and earn money with DropHunting
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 border-[1px] border-[--dark-gray] px-4 w-full bg-[--dark-gray] rounded-[14px] mb-2 focus:border-[1px] focus:border-gray-500 focus:outline-none"
                autoComplete="off"
              />
              {errors?.name && (
                <p className="text-red-500 text-sm">{errors.name.join(", ")}</p>
              )}
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 border-[1px] border-[--dark-gray] px-4 w-full bg-[--dark-gray] rounded-[14px] mb-2 focus:border-[1px] focus:border-gray-500 focus:outline-none"
                autoComplete="off"
              />
              {errors?.email && (
                <p className="text-red-500 text-sm">
                  {errors.email.join(", ")}
                </p>
              )}
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="p-3 border-[1px] border-[--dark-gray] px-4 w-full bg-[--dark-gray] rounded-[14px] mb-4 focus:border-[1px] focus:border-gray-500 focus:outline-none"
                autoComplete="off"
              />
              {errors?.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.join(", ")}
                </p>
              )}
              <button
                type="submit"
                className="p-3 px-4 w-full bg-[--green] rounded-[14px] mb-6 font-bold hover:bg-blue-500 hover:rounded-[10px]"
              >
                Sign Up
              </button>
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
