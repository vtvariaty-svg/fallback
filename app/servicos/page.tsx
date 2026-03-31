import { ArrowRight, CheckCircle2, MonitorSmartphone, Settings, Zap, MessageCircle } from "lucide-react";
import { DiagnosticLink, WhatsAppLink } from "@/components/tracking/TrackedCTAs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O que fazemos | Fallback Automações",
  description: "Confirmações automáticas, atendimento via WhatsApp, painel operacional e integrações com a agenda. Automação e sistemas construídos para clínicas e consultórios privados.",
};

export default function ServicosPage() {
  return (
    <div className="flex flex-col gap-24 md:gap-40 w-full pt-32 pb-24 bg-grid">

      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto w-full text-center flex flex-col items-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] rounded-full -z-10" />
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white max-w-4xl mb-8 leading-tight">
          Quando a clínica cresce, o processo manual começa a{" "}
          <span className="text-gradient">travar tudo</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mb-6 leading-relaxed font-medium">
          A Fallback estrutura o atendimento, o controle operacional e os fluxos de comunicação da sua clínica — para que a equipe pare de apagar incêndios e a operação funcione com processo.
        </p>
        <p className="text-gray-500 text-base max-w-xl mx-auto mb-12">
          O ponto de partida é sempre um diagnóstico da sua operação. Sem compromisso.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <DiagnosticLink className="w-full sm:w-auto px-10 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl hover:scale-105">
            Solicitar diagnóstico <ArrowRight className="w-5 h-5" />
          </DiagnosticLink>
          <WhatsAppLink
            message="Olá, quero saber mais sobre automação e sistemas para a minha clínica."
            className="w-full sm:w-auto px-10 py-4 rounded-xl glass hover:bg-surface border-surface-border text-white font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-6 h-6 text-[#25D366]" /> Falar no WhatsApp
          </WhatsAppLink>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="px-6 max-w-5xl mx-auto w-full flex flex-col gap-20">

        {/* Service 1 */}
        <div className="glass rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row gap-12 items-start glass-hover group">
          <div className="w-20 h-20 bg-background rounded-2xl border-2 border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 shadow-xl">
            <Zap className="w-10 h-10 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Menos faltas. Menos WhatsApp manual.</h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-8">
              Confirmações, lembretes e triagem de pacientes passam a acontecer automaticamente — sem a recepção precisar enviar cada mensagem à mão. O WhatsApp fica organizado, as consultas são lembradas e os pacientes inativos voltam a ser contatados sem esforço da equipe.
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                Confirmação e lembretes automáticos de consulta
              </li>
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                Atendimento inicial e triagem via WhatsApp 24h
              </li>
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                Reativação automática de pacientes inativos
              </li>
            </ul>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl px-6 py-4 mb-8">
              <p className="text-primary font-semibold text-sm leading-relaxed">
                O impacto direto: a recepção para de ligar um por um para confirmar consulta. As faltas caem. Pacientes recebem atenção mesmo quando a equipe está ocupada.
              </p>
            </div>
            <WhatsAppLink
              message="Quero automatizar o atendimento da minha clínica."
              className="inline-flex items-center text-primary font-black text-lg hover:text-primary-hover group/link"
            >
              Conversar sobre automações <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform" />
            </WhatsAppLink>
          </div>
        </div>

        {/* Service 2 */}
        <div className="glass rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row-reverse gap-12 items-start glass-hover group">
          <div className="w-20 h-20 bg-background rounded-2xl border-2 border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 shadow-xl">
            <MonitorSmartphone className="w-10 h-10 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Visibilidade real da operação, em tempo real.</h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-8">
              Painéis e sistemas internos construídos em torno do fluxo da sua clínica — não ao contrário. Nada genérico que a equipe precisa aprender do zero. A ferramenta se adapta ao seu processo, não o seu processo à ferramenta.
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                Painel operacional para gestores e coordenadores
              </li>
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                Controle de agenda, pacientes e follow-ups
              </li>
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                Interface enxuta para a equipe da recepção
              </li>
            </ul>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl px-6 py-4 mb-8">
              <p className="text-primary font-semibold text-sm leading-relaxed">
                O impacto direto: o gestor para de perguntar para alguém para saber o que está acontecendo. A equipe encontra a informação certa no lugar certo — sem planilha, sem conversa no WhatsApp.
              </p>
            </div>
            <WhatsAppLink
              message="Quero um sistema interno para a minha clínica."
              className="inline-flex items-center text-primary font-black text-lg hover:text-primary-hover group/link"
            >
              Conversar sobre um painel <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform" />
            </WhatsAppLink>
          </div>
        </div>

        {/* Service 3 */}
        <div className="glass rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row gap-12 items-start glass-hover group">
          <div className="w-20 h-20 bg-background rounded-2xl border-2 border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 shadow-xl">
            <Settings className="w-10 h-10 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Suas ferramentas conectadas. Sem redigitar nada.</h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-8">
              Na maioria das clínicas, agenda, prontuário, WhatsApp e planilhas não se comunicam. O resultado é retrabalho, erros e informações perdidas entre sistemas. Conectamos o que você já usa para que as informações fluam automaticamente.
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                Integração com agenda e prontuário eletrônico
              </li>
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                Sincronização entre WhatsApp, planilhas e sistemas internos
              </li>
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                Fim da redigitação manual e dos dados duplicados
              </li>
            </ul>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl px-6 py-4 mb-8">
              <p className="text-primary font-semibold text-sm leading-relaxed">
                O impacto direto: nenhuma informação se perde entre ferramentas. A equipe para de copiar dados de um sistema para outro. O fluxo acontece sozinho.
              </p>
            </div>
            <WhatsAppLink
              message="Quero integrar as ferramentas da minha clínica."
              className="inline-flex items-center text-primary font-black text-lg hover:text-primary-hover group/link"
            >
              Mapear minhas integrações <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform" />
            </WhatsAppLink>
          </div>
        </div>

      </section>

      {/* Etapas Strip */}
      <section className="px-6 max-w-5xl mx-auto w-full">
        <div className="bg-gradient-to-br from-surface to-background border border-surface-border rounded-[40px] p-10 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">A clínica não para para implantar</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A implantação acontece por etapas — cada entrega validada antes da próxima começar. Você não precisa mudar tudo de uma vez para começar a perceber resultado.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Diagnóstico",
                desc: "Entendemos os gargalos reais da sua operação e definimos a frente de maior impacto para começar."
              },
              {
                num: "02",
                title: "Primeira entrega",
                desc: "Implementamos a solução prioritária. A equipe é treinada e valida tudo antes de ir ao ar."
              },
              {
                num: "03",
                title: "Evolução por etapas",
                desc: "Novas entregas são adicionadas conforme a clínica avança — sem pressa, sem ruptura, sem surpresa."
              }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl glass border-2 border-primary/20 flex items-center justify-center text-xl font-black text-white mb-6 shadow-xl group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[220px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="bg-primary rounded-[40px] p-10 md:p-24 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:400%_400%] animate-gradient pointer-events-none" />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 relative z-10 leading-tight">
            Qual gargalo está travando a operação da sua clínica?
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10">
            Em uma conversa direta, entendemos o que está travando a sua clínica e apresentamos um plano concreto — por etapas, com escopo claro e sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5 relative z-10">
            <DiagnosticLink className="px-10 py-5 rounded-2xl bg-white text-primary font-black text-xl flex items-center justify-center gap-3 hover:bg-white/90 transition-all shadow-xl hover:scale-105">
              Solicitar diagnóstico <ArrowRight className="w-6 h-6" />
            </DiagnosticLink>
            <WhatsAppLink
              message="Olá, vi o site da Fallback Automações e quero conversar sobre automação e sistemas para a minha clínica."
              className="px-10 py-5 rounded-2xl bg-[#25D366] text-white font-black text-xl flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition-all shadow-xl hover:shadow-[0_0_30px_-5px_#25D366] hover:scale-105"
            >
              <MessageCircle className="w-7 h-7" /> Falar no WhatsApp
            </WhatsAppLink>
          </div>
          <p className="text-white/50 text-sm mt-8 relative z-10">
            Sem compromisso. Em até 24h você recebe um plano de implantação personalizado.
          </p>
        </div>
      </section>

    </div>
  );
}
