"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const TermsAndPrivacy = () => {
  const router = useRouter();

  return (
    <div className="bg-[#101114] text-white">
      <Header />

      <main>
        <button
          onClick={() => router.push("/guides")}
          className="font-chakra flex items-center ml-[24px] pr-[14px] pl-[8px] py-[8px] rounded-[32px] gap-1 bg-[#1C1D21] text-[#7F7F7F] w-[72px] h-[32px]">
          <IoIosArrowBack size={20} />
          <p>Back</p>
        </button>
        <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

          <p className="mb-4">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your personal information.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We may collect personal information such as your name, email
            address, and usage data when you interact with our website.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">
            Your information is used to improve our services, provide customer
            support, and ensure the security of our platform.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            3. Data Protection
          </h2>
          <p className="mb-4">
            We implement security measures to protect your data but cannot
            guarantee complete security against unauthorized access.
          </p>

          <h1 className="text-2xl font-bold mt-8 mb-4">Terms of Service</h1>

          <p className="mb-4">
            By using our website, you agree to comply with these terms and
            conditions.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4">
            By accessing our website, you accept and agree to be bound by these
            terms.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            2. Use of Services
          </h2>
          <p className="mb-4">
            You agree not to use our services for any unlawful or prohibited
            activities.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            3. Limitation of Liability
          </h2>
          <p className="mb-4">
            We are not responsible for any damages resulting from the use of our
            services.
          </p>

          <p className="mt-6 text-gray-600 text-sm">
            If you have any questions about our Privacy Policy or Terms of
            Service, please contact us.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndPrivacy;
