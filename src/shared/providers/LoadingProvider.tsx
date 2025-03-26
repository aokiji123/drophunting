import useStore from "../store";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading } = useStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <>
      {isMounted &&
        isLoading &&
        createPortal(
          <div className="fixed top-0 left-0 right-0 bottom-0 z-[999] bg-[#101114] text-white min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#CBFF51]"></div>
          </div>,
          document.body,
        )}
      {children}
    </>
  );
}
