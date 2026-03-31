import { ArrowRight, CheckCircle2, MonitorSmartphone, Settings, Zap, MessageCircle } from "lucide-react";
import { DiagnosticLink, WhatsAppLink } from "@/components/tracking/TrackedCTAs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soluções para Clínicas | Fallback Automações",
  description: "Confirmações automáticas, atendimento via WhatsApp, painel operacional e integrações com a agenda. Automação e sistemas construídos para clínicas e consultórios privados.",
};

export default function ServicosPage() {
  return (
    <div className="flex flex-col gap-24 md:gap-40 w-full pt-32 pb-24 bg-grid">

      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto w-full text-center flex flex-col items-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] rounded-full -z-10" />
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white max-w-4xl mb-8 leading-tight">
          Soluções operacionais para <span className="text-gradient">clínicas</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mb-12 leading-relaxed font-medium">
          Estruturamos o atendimento, o controle operacional e os fluxos de comunicação da sua clínica — para que a equipe pare de apagar incêndios e comece a trabalhar com processo.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Automações de Atendimento</h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-8">
              Reduzimos o volume de trabalho manual da recepção. Confirmações, lembretes, triagem e reativação de pacientes passam a funcionar de forma automática — sem depender de cada mensagem enviada à mão.
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Confirmações e lembretes automáticos de consultas</li>
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Atendimento inicial e triagem via WhatsApp</li>
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Reativação estruturada de pacientes inativos</li>
            </ul>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl px-6 py-4 mb-8">
              <p className="text-primary font-semibold text-sm leading-relaxed">
                O que muda na rotina: a recepção para de ligar um por um para confirmar. As faltas caem. O WhatsApp fica organizado e respondido mesmo fora do horário de expediente.
              </p>
            </div>
            <WhatsAppLink
              message="Quero automatizar o atendimento da minha clínica."
              className="inline-flex items-center text-primary font-black text-lg hover:text-primary-hover group/link"
            >
              Falar sobre automações <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform" />
            </WhatsAppLink>
          </div>
        </div>

        {/* Service 2 */}
        <div className="glass rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row-reverse gap-12 items-start glass-hover group">
          <div className="w-20 h-20 bg-background rounded-2xl border-2 border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 shadow-xl">
            <MonitorSmartphone className="w-10 h-10 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sistemas Internos para Clínicas</h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-8">
              Desenvolvemos painéis e ferramentas internas construídas em torno do fluxo real da clínica. Nada de sistemas genéricos que a equipe precisa se adaptar — a ferramenta serve ao seu processo.
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Painel operacional interno para gestores</li>
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Controle de agenda, pacientes e follow-ups</li>
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Interface simples para a equipe de recepção</li>
            </ul>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl px-6 py-4 mb-8">
              <p className="text-primary font-semibold text-sm leading-relaxed">
                O que muda na rotina: o gestor tem visão do fluxo em tempo real. A equipe encontra a informação que precisa num só lugar, sem recorrer a planilhas ou conversas no WhatsApp.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Integrações com as Ferramentas da Clínica</h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-8">
              Conectamos o que a clínica já usa — agenda, prontuário, WhatsApp Business, planilhas — para que as informações fluam sem retrabalho e sem dados duplicados.
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Integração com agenda e prontuário eletrônico</li>
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Sincronização entre WhatsApp, planilhas e sistemas internos</li>
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> Eliminação de redigitação e dados duplicados</li>
            </ul>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl px-6 py-4 mb-8">
              <p className="text-primary font-semibold text-sm leading-relaxed">
                O que muda na rotina: os dados fluem entre agenda, prontuário e WhatsApp sem retrabalho. Nenhuma informação se perde entre ferramentas e a equipe não precisa redigitar nada.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Você não precisa mudar tudo de uma vez</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A implantação acontece por etapas, com a clínica operando normalmente. Cada entrega é validada antes da próxima começar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Diagnóstico",
                desc: "Mapeamos os gargalos da sua operação e definimos a primeira entrega de maior impacto."
              },
              {
                num: "02",
                title: "Primeira entrega",
                desc: "Implementamos a solução prioritária. A equipe é treinada e valida antes de ir ao ar."
              },
              {
                num: "03",
                title: "Evolução contínua",
                desc: "Novas etapas são adicionadas conforme a clínica avança, sem pressa e sem ruptura."
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
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10 leading-tight">
            Sua clínica pode operar com mais controle e menos esforço manual
          </h2>
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
            Sem compromisso. Em até 24h você recebe um plano de implantação personalizado para a sua clínica.
          </p>
        </div>
      </section>

    </div>
  );
}
