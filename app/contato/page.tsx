import { getWhatsAppUrl, COMPANY_EMAIL, COMPANY_PHONE_DISPLAY, COMPANY_LEGAL_NAME, COMPANY_CNPJ } from "@/lib/constants";
import { MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fale Conosco | Fallback Automações",
  description: "Entre em contato com nossa equipe para discutir a automação ideal para sua empresa.",
};

export default function ContatoPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 w-full pt-32 pb-24">
      
      {/* Intro Section */}
      <section className="px-6 max-w-4xl mx-auto w-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          Vamos transformar as <span className="text-primary">ideias em sistema</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
          Você não precisa entender de tecnologia para ter a melhor solução na sua empresa. 
          Entre em contato e nossa equipe fará uma avaliação sincera de como podemos otimizar seus processos.
        </p>
      </section>

      {/* Main Contact Area */}
      <section className="px-6 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Contact Info blocks */}
        <div className="flex flex-col gap-8">
          <div className="bg-surface border border-surface-border rounded-2xl p-8 hover:border-primary/50 transition-colors shadow-lg shadow-black/20">
            <h2 className="text-2xl font-bold text-white mb-6">Fale pelo WhatsApp</h2>
            <p className="text-gray-400 mb-8">
              A forma mais rápida de falar conosco. Mande uma mensagem e vamos conversar sobre seus desafios operacionais gratuitamente.
            </p>
            <a 
              href={getWhatsAppUrl("Olá! Acessei a página de contato e gostaria de agendar uma conversa com um especialista.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-xl transition-all shadow-[0_0_20px_-5px_#25D366]"
            >
              <MessageCircle className="w-5 h-5" /> Iniciar conversa no WhatsApp
            </a>
            <div className="mt-4 text-center text-sm font-medium text-gray-500">
              Nosso número: {COMPANY_PHONE_DISPLAY}
            </div>
          </div>

          <div className="bg-surface border border-surface-border rounded-2xl p-8 shadow-lg shadow-black/20">
            <h3 className="text-xl font-bold text-white mb-6">Outros Canais</h3>
            
            <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center gap-4 mb-6 group cursor-pointer group hover:bg-white/5 p-4 rounded-xl transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-400 mb-1">E-mail corporativo</div>
                <div className="text-white font-semibold flex items-center gap-2">
                  {COMPANY_EMAIL} <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Company Info Box */}
        <div className="bg-background flex flex-col pt-4 md:pl-8">
          <div className="border-l-4 border-primary pl-6 py-2 mb-8">
            <h3 className="text-xl font-bold text-white mb-2">Transparência e Segurança</h3>
            <p className="text-gray-400">
              Operamos com seriedade. Todos os nossos projetos possuem contrato, escopo fechado e nota fiscal.
            </p>
          </div>

          <div className="space-y-6 text-gray-300">
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-primary shrink-0" />
              <div>
                <strong className="block text-white mb-1">Dados Jurídicos</strong>
                <span className="block text-sm text-gray-400">{COMPANY_LEGAL_NAME}</span>
                <span className="block text-sm text-gray-400">CNPJ: {COMPANY_CNPJ}</span>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
