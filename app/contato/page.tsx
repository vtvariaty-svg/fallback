import { MessageCircle, Mail, ShieldCheck, Clock, MapPin } from "lucide-react";
import { getWhatsAppUrl, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_LEGAL_NAME, COMPANY_CNPJ } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Fallback Automações",
  description: "Entre em contato com a Fallback Automações. Especialistas em automação e sistemas operacionais para clínicas e consultórios privados.",
};

export default function ContatoPage() {
  return (
    <div className="flex flex-col gap-20 md:gap-32 w-full pt-32 pb-24 bg-grid">

      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto w-full text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-8">
          Vamos Conversar <span className="text-gradient">Sério</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
          Entendemos como clínicas operam. Conte o que está travando a sua — e vamos propor um caminho concreto.
        </p>
      </section>

      <section className="px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Contact Cards */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="glass p-8 md:p-12 rounded-[40px] glass-hover flex flex-col md:flex-row gap-8 items-center border-2 border-primary/20 bg-primary/5">
            <div className="w-20 h-20 bg-[#25D366] rounded-3xl flex items-center justify-center shrink-0 shadow-[0_10px_30px_-10px_#25D366]">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-2">WhatsApp Business</h2>
              <p className="text-gray-400 text-lg mb-6">Resposta rápida para tirar dúvidas sobre automação e sistemas para a sua clínica.</p>
              <a
                href={getWhatsAppUrl("Olá, vi o site da Fallback Automações e quero conversar sobre automação e sistemas para a minha clínica.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black rounded-xl transition-all hover:scale-105 shadow-xl"
              >
                Iniciar Conversa Agora
              </a>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-[40px] glass-hover flex flex-col md:flex-row gap-8 items-center">
            <div className="w-20 h-20 bg-surface rounded-3xl border border-surface-border flex items-center justify-center shrink-0">
              <Mail className="w-10 h-10 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-2">E-mail Corporativo</h2>
              <p className="text-gray-400 text-lg mb-6">Para diagnósticos detalhados e propostas de implantação.</p>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="text-2xl font-black text-white hover:text-primary transition-colors break-all"
              >
                {COMPANY_EMAIL}
              </a>
            </div>
          </div>
        </div>

        {/* Info Sidebar */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="glass p-8 rounded-[40px] flex flex-col gap-8 border-primary/10 bg-surface/30">
            <h3 className="text-2xl font-bold text-white mb-2">Por que entrar em contato?</h3>

            <div className="flex gap-4">
              <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Diagnóstico da operação</h4>
                <p className="text-gray-400 text-sm">Analisamos o fluxo atual da sua clínica e identificamos os principais gargalos.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Retorno em 24h</h4>
                <p className="text-gray-400 text-sm">Apresentamos um plano de implantação com escopo claro e prazos reais.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Atendimento Remoto</h4>
                <p className="text-gray-400 text-sm">Atendemos clínicas em todo o Brasil com total segurança digital.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-surface-border mt-4">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 block">Dados Legais</span>
              <p className="text-white font-bold text-sm leading-relaxed">{COMPANY_LEGAL_NAME}</p>
              <p className="text-gray-400 text-sm">CNPJ: {COMPANY_CNPJ}</p>
              <p className="text-gray-400 text-sm mt-2">{COMPANY_PHONE}</p>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
