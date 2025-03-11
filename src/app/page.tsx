"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Guides from "./guides/page";
import useAuthContext from "@/shared/hooks/useAuthContext";

export default function Home() {
  const { user, sessionVerified } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!sessionVerified || !user) {
      router.push("/auth/login");
    }
  }, [sessionVerified, user, router]);

  return (
    <div className="bg-[#101114] overflow-auto">
      {sessionVerified && user ? <Guides /> : null}
    </div>
  );
}
