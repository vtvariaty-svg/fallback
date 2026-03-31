"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/pixel";
import { getWhatsAppUrl } from "@/lib/constants";

export function DiagnosticLink({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href="/contato"
      className={className}
      onClick={() => trackEvent("Contact", { content_name: "Solicitar diagnóstico" })}
    >
      {children}
    </Link>
  );
}

export function WhatsAppLink({
  message,
  className,
  children,
}: {
  message: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackEvent("Lead", { content_name: "WhatsApp" })}
    >
      {children}
    </a>
  );
}
