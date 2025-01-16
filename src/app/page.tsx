"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthContext from "@/shared/hooks/useAuthContext";
import Profile from "@/app/profile/page";

export default function Home() {
  const { sessionVerified } = useAuthContext();
  const router = useRouter();
  console.log(sessionVerified);

  useEffect(() => {
    if (sessionVerified) {
      router.push("/profile");
    }
  }, [sessionVerified, router]);

  return (
    <div className="bg-black overflow-auto">
      <Profile />
    </div>
  );
}
