import {
  OverlayScrollbarsComponentProps,
  useOverlayScrollbars,
} from "overlayscrollbars-react";
import { useEffect, useRef } from "react";

export default function useCustomScrollbar(
  options: OverlayScrollbarsComponentProps["options"] = {},
) {
  const targetRef = useRef(null);

  const [initialize] = useOverlayScrollbars({
    options: {
      scrollbars: {
        autoHide: "scroll",
      },
      ...options,
    },
  });

  useEffect(() => {
    if (targetRef.current) {
      initialize(targetRef.current);
    }
  }, [initialize]);

  return targetRef;
}
