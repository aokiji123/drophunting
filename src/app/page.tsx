"use client";

import Guides from "./guides/page";
import useStore from "@/shared/store";

export default function Home() {
  const { user, sessionVerified } = useStore();

  return (
    <div className="bg-[#101114] overflow-auto">
      {sessionVerified && user ? <Guides /> : null}
    </div>
  );
}
