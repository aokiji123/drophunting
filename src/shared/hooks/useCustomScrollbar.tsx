import { useOverlayScrollbars } from "overlayscrollbars-react";
import { useEffect, useRef } from "react";

export default function useCustomScrollbar(options = {}) {
  const targetRef = useRef(null);

  const [initialize] = useOverlayScrollbars({
    options: {
      ...options,
      scrollbars: {
        autoHide: "scroll",
      },
    },
  });

  useEffect(() => {
    if (targetRef.current) {
      initialize(targetRef.current);
    }
  }, [initialize]);

  return targetRef;
}
