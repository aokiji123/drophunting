"use client";

import { useEffect, useState } from "react";

import useStore from "@/shared/store";

export default function UserProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isRefreshed, setIsRefreshed] = useState(false);

	const { refreshUser } = useStore();

	useEffect(() => {
		refreshUser().finally(() => setIsRefreshed(true));
	}, []);

	if (!isRefreshed)
		return (
			<div className="bg-[#101114] text-white min-h-screen flex items-center justify-center">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#CBFF51]"></div>
			</div>
		);

	return children;
}
