import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/whatsapp/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Fallback Automações | Soluções Digitais e Sistemas Personalizados",
  description: "Transformamos processos manuais da sua empresa em eficiência digital. Especialistas em automações no WhatsApp, sistemas sob medida e integração de ferramentas.",
  openGraph: {
    title: "Fallback Automações",
    description: "Sistemas sob medida e automações empresariais. Ganhe tempo e dinheiro com a tecnologia certa.",
    locale: "pt_BR",
    type: "website",
    siteName: "Fallback Automações",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans flex flex-col min-h-screen`}>
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
