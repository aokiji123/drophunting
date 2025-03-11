"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthContext from "@/shared/hooks/useAuthContext";
import Guides from "./guides/page";

export default function Home() {
  const { sessionVerified } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (sessionVerified) {
      router.push("/guides");
    }
  }, [sessionVerified, router]);

  return (
    <div className="bg-[#101114] overflow-auto">
      <Guides />
    </div>
  );
}
