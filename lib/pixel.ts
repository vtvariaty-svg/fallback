declare global {
  interface Window {
    fbq?: (
      action: "track" | "trackCustom" | "init" | "consent",
      event: string,
      params?: Record<string, unknown>
    ) => void;
    _fbq?: unknown;
  }
}

export const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

export type MetaStandardEvent =
  | "PageView"
  | "ViewContent"
  | "Contact"
  | "Lead"
  | "CompleteRegistration"
  | "SubmitApplication";

export function trackEvent(
  event: MetaStandardEvent,
  params?: Record<string, unknown>
): void {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", event, params);
}

export function trackCustomEvent(
  event: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("trackCustom", event, params);
}
