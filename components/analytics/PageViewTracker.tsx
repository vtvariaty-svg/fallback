"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/pixel";

export default function PageViewTracker() {
  const pathname = usePathname();
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    trackEvent("PageView");
  }, [pathname]);

  return null;
}
