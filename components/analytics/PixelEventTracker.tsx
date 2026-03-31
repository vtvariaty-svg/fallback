"use client";

import { useEffect } from "react";
import { trackEvent, type MetaStandardEvent } from "@/lib/pixel";

interface Props {
  event: MetaStandardEvent;
  params?: Record<string, unknown>;
}

export default function PixelEventTracker({ event, params }: Props) {
  useEffect(() => {
    trackEvent(event, params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
