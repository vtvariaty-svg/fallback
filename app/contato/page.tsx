import { MessageCircle, Mail, CheckCircle2, ArrowRight, MapPin } from "lucide-react";
import { COMPANY_EMAIL, COMPANY_PHONE, COMPANY_LEGAL_NAME, COMPANY_CNPJ } from "@/lib/constants";
import { WhatsAppLink } from "@/components/tracking/TrackedCTAs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnóstico para Clínicas | Fallback Automações",
  description: "Solicite um diagnóstico da operação da sua clínica. Em até 24h apresentamos um plano de implantação por etapas, sem compromisso.",
};

export default function ContatoPage() {
  const diagnosticItems = [
    "Fluxo de atendimento e comunicação com pacientes",
    "Taxa de faltas e processo de confirmação atual",
    "Reativação e follow-up de pacientes inativos",
    "Ferramentas em uso e oportunidades de integração",
    "Visibilidade operacional disponível para o gestor",
  ];

  const nextSteps = [
    {
      num: "01",
      title: "Você entra em contato",
      desc: "Via WhatsApp ou e-mail. Nenhum formulário longo ou processo burocrático."
    },
    {
      num: "02",
      title: "Fazemos o diagnóstico",
      desc: "Em uma conversa direta, entendemos os gargalos atuais da operação da sua clínica."
    },
    {
      num: "03",
      title: "Você recebe o plano em 24h",
      desc: "Um plano por etapas com escopo claro, prazos definidos e sem surpresas."
    },
    {
      num: "04",
      title: "Começamos pela entrega de maior impacto",
      desc: "A clínica não para para implantar. Cada etapa é validada antes da próxima."
    },
  ];

  return (
    <div className="flex flex-col gap-20 md:gap-32 w-full pt-32 pb-24 bg-grid">

      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto w-full text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-8">
          Diagnóstico da <span className="text-gradient">operação</span> da sua clínica
        </h1>
        <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-6">
          Entendemos como clínicas operam. Conte o que está travando a sua — e vamos propor um caminho concreto.
        </p>
        <p className="text-gray-500 text-base max-w-xl mx-auto">
          Em até 24h você recebe um plano de implantação por etapas, sem compromisso.
        </p>
      </section>

      {/* O que avaliamos */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="bg-gradient-to-br from-surface to-background border border-surface-border rounded-[40px] p-10 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">O que avaliamos no diagnóstico</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Antes de qualquer proposta, entendemos como a sua clínica funciona hoje — onde estão os gargalos reais, quais ferramentas já existem e qual entrega vai gerar impacto mais rápido.
              </p>
              <WhatsAppLink
                message="Olá, vi o site da Fallback Automações e quero conversar sobre automação e sistemas para a minha clínica."
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-lg transition-all shadow-xl hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" /> Iniciar pelo WhatsApp
              </WhatsAppLink>
            </div>
            <div className="flex flex-col gap-3">
              {diagnosticItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4 glass px-6 py-4 rounded-2xl">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact + Next Steps */}
      <section className="px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Contact Cards */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="glass p-8 md:p-12 rounded-[40px] glass-hover flex flex-col md:flex-row gap-8 items-center border-2 border-primary/20 bg-primary/5">
            <div className="w-20 h-20 bg-[#25D366] rounded-3xl flex items-center justify-center shrink-0 shadow-[0_10px_30px_-10px_#25D366]">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-2">WhatsApp Business</h2>
              <p className="text-gray-400 text-lg mb-6">Resposta rápida. Canal preferido para diagnóstico e primeiras conversas sobre a operação da clínica.</p>
              <WhatsAppLink
                message="Olá, vi o site da Fallback Automações e quero conversar sobre automação e sistemas para a minha clínica."
                className="inline-flex items-center px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black rounded-xl transition-all hover:scale-105 shadow-xl"
              >
                Iniciar Conversa Agora
              </WhatsAppLink>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-[40px] glass-hover flex flex-col md:flex-row gap-8 items-center">
            <div className="w-20 h-20 bg-surface rounded-3xl border border-surface-border flex items-center justify-center shrink-0">
              <Mail className="w-10 h-10 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-2">E-mail</h2>
              <p className="text-gray-400 text-lg mb-6">Para diagnósticos detalhados e propostas de implantação por escrito.</p>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="text-2xl font-black text-white hover:text-primary transition-colors break-all"
              >
                {COMPANY_EMAIL}
              </a>
            </div>
          </div>
        </div>

        {/* O que acontece depois */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="glass p-8 rounded-[40px] flex flex-col gap-6 border-primary/10 bg-surface/30">
            <h3 className="text-2xl font-bold text-white">O que acontece depois</h3>

            {nextSteps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-sm font-black text-primary">
                  {step.num}
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-surface-border flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-400 text-sm">Atendemos clínicas em todo o Brasil de forma remota.</p>
              </div>
            </div>

            <div className="pt-2 border-t border-surface-border">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block">Dados Legais</span>
              <p className="text-white font-bold text-sm leading-relaxed">{COMPANY_LEGAL_NAME}</p>
              <p className="text-gray-400 text-sm">CNPJ: {COMPANY_CNPJ}</p>
              <p className="text-gray-400 text-sm mt-1">{COMPANY_PHONE}</p>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
