import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/whatsapp/FloatingWhatsApp";
import MetaPixelScript from "@/components/analytics/MetaPixelScript";
import PageViewTracker from "@/components/analytics/PageViewTracker";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Fallback Automações | Automação e Sistemas para Clínicas",
  description:
    "Automação e sistemas operacionais para clínicas e consultórios privados. Reduza faltas, organize o atendimento e ganhe eficiência operacional com a Fallback.",
  keywords: [
    "automação para clínicas",
    "sistemas para consultórios",
    "redução de faltas em clínicas",
    "confirmação automática de consultas",
    "atendimento via WhatsApp para clínicas",
    "painel operacional para clínicas",
    "reativação de pacientes",
    "automação de atendimento médico",
    "Fallback Automações",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Fallback Automações | Automação e Sistemas para Clínicas",
    description:
      "Estruturamos fluxos de atendimento, confirmações automáticas e controle operacional para clínicas que cresceram e precisam de mais processo. Conheça a Fallback.",
    locale: "pt_BR",
    type: "website",
    siteName: "Fallback Automações",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fallback Automações | Automação e Sistemas para Clínicas",
    description:
      "Estruturamos fluxos de atendimento, confirmações automáticas e controle operacional para clínicas. Conheça a Fallback.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans flex flex-col min-h-screen`}>
        <MetaPixelScript />
        <PageViewTracker />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
