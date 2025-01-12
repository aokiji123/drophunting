import React from "react";
import Header from "@/app/auth/components/Header";
import { FiUser } from "react-icons/fi";
import Footer from "@/app/auth/components/Footer";

const Login = () => {
  return (
    <div className="bg-black mx-auto text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-col items-center justify-center text-center flex-grow">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="flex items-center justify-center w-16 h-16 bg-[--dark-gray] rounded-xl shadow-lg border-[0.75px] border-gray-300">
            <FiUser size={28} className="text-[#EDEDED]" />
          </div>
          <div className="flex flex-col items-center justify-center w-[425px]">
            <h2 className="text-[34px] w-[350px] font-bold leading-[40px] mt-[35] mb-[20px]">
              Welcome to the DropHunting
            </h2>
            <p className="font-[14px] text-[#B0B0B0] leading-[20px] w-[420px] mb-[30px]">
              Get access to hundreds of airports and earn money with DropHunting
            </p>

            <form>
              <input
                type="text"
                placeholder="Name"
                className="p-3 border-[1px] border-[--dark-gray] px-4 w-full bg-[--dark-gray] rounded-[14px] mb-2 focus:border-[1px] focus:border-gray-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Email"
                className="p-3 border-[1px] border-[--dark-gray] px-4 w-full bg-[--dark-gray] rounded-[14px] mb-2 focus:border-[1px] focus:border-gray-500 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 border-[1px] border-[--dark-gray] px-4 w-full bg-[--dark-gray] rounded-[14px] mb-4 focus:border-[1px] focus:border-gray-500 focus:outline-none"
              />
              <button className="p-3 px-4 w-full bg-[--green] rounded-[14px] mb-6 font-bold">
                Log In
              </button>
              <div className="flex items-center justify-center gap-4">
                <p>Already have account?</p>
                <a
                  className="px-3 py-2 bg-[--dark-gray] font-bold rounded-xl"
                  href="../auth/sign-in"
                >
                  Sign In
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

export default Login;
