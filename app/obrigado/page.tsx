import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import PixelEventTracker from "@/components/analytics/PixelEventTracker";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solicitação Recebida | Fallback Automações",
  description: "Recebemos sua solicitação. Em até 24h nossa equipe entrará em contato para iniciar o diagnóstico da sua clínica.",
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <>
      <PixelEventTracker event="Lead" params={{ content_name: "Formulário de contato" }} />
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center bg-grid pt-32 pb-24">
        <div className="w-20 h-20 bg-primary/10 border-2 border-primary/30 rounded-full flex items-center justify-center mb-8">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          Solicitação recebida!
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-4 leading-relaxed">
          Em até 24h nossa equipe entrará em contato para iniciar o diagnóstico da operação da sua clínica.
        </p>
        <p className="text-gray-500 text-base max-w-md mb-12">
          Fique atento ao WhatsApp — é por lá que preferimos conversar para agilizar o processo.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-lg transition-all shadow-xl hover:scale-105"
        >
          Voltar ao início <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </>
  );
}
