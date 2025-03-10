"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthContext from "@/shared/hooks/useAuthContext";
import Profile from "@/app/profile/page";

export default function Home() {
  const { sessionVerified } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (sessionVerified) {
      router.push("/profile");
    }
  }, [sessionVerified, router]);

  return (
    <div className="bg-[#101114] overflow-auto">
      <Profile />
    </div>
  );
}
