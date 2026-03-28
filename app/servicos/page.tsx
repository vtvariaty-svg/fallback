import { ArrowRight, CheckCircle2, MonitorSmartphone, Settings, Zap, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossos Serviços | Fallback Automações",
  description: "Conheça nossas soluções em automação, sistemas sob medida e integração de ferramentas para transformar a rotina da sua empresa.",
};

export default function ServicosPage() {
  return (
    <div className="flex flex-col gap-24 md:gap-40 w-full pt-32 pb-24 bg-grid">
      
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto w-full text-center flex flex-col items-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] rounded-full -z-10" />
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white max-w-4xl mb-8 leading-tight">
          Soluções <span className="text-gradient">Arquitetadas</span> para Escala
        </h1>
        <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mb-12 leading-relaxed font-medium">
          Esqueça os processos manuais. Nós construímos a espinha dorsal tecnológica que a sua empresa precisa para operar sem gargalos.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <a 
            href={getWhatsAppUrl("Olá, quero saber mais sobre os serviços da Fallback Automações.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl hover:scale-105"
          >
            Falar com especialista <ArrowRight className="w-5 h-5" />
          </a>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Automações Personalizadas</h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-8">
              Eliminamos o erro humano. Criamos fluxos inteligentes que assumem tarefas repetitivas, 
              garantindo que sua equipe foque apenas no que exige inteligência e criatividade.
            </p>
            <ul className="flex flex-col gap-4 mb-10">
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-primary" /> IA e Bots de Atendimento Inteligente</li>
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-primary" /> Automação de CRM e Funil de Vendas</li>
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-primary" /> Geração de Documentos e Relatórios</li>
            </ul>
            <a 
              href={getWhatsAppUrl("Quero automatizar processos da minha empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-black text-lg hover:text-primary-hover group/link"
            >
              Consultar viabilidade <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

        {/* Service 2 */}
        <div className="glass rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row-reverse gap-12 items-start glass-hover group">
          <div className="w-20 h-20 bg-background rounded-2xl border-2 border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 shadow-xl">
            <MonitorSmartphone className="w-10 h-10 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sistemas Sob Medida</h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-8">
              A tecnologia deve servir à empresa, não o contrário. Desenvolvemos softwares robustos 
              desenhados especificamente para o seu modelo de negócio e cultura operacional.
            </p>
            <ul className="flex flex-col gap-4 mb-10">
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-primary" /> Dashboards e Painéis Operacionais</li>
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-primary" /> Plataformas Web Robustas e Escalonáveis</li>
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-primary" /> Experiência de Usuário (UX) Simplificada</li>
            </ul>
            <a 
              href={getWhatsAppUrl("Quero um sistema sob medida.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-black text-lg hover:text-primary-hover group/link"
            >
              Desenhar meu sistema <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

        {/* Service 3 */}
        <div className="glass rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row gap-12 items-start glass-hover group">
          <div className="w-20 h-20 bg-background rounded-2xl border-2 border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 shadow-xl">
            <Settings className="w-10 h-10 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Integrações Estratégicas</h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-8">
              Conectamos as pontas soltas da sua stack tecnológica. Fazemos seus sistemas conversarem 
              entre si para que os dados fluam sem interrupções manuais.
            </p>
            <ul className="flex flex-col gap-4 mb-10">
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-primary" /> APIs e Conectores Customizados</li>
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-primary" /> Sincronização de ERP, CRM e Financeiro</li>
              <li className="flex items-center gap-3 text-gray-300 font-medium text-lg"><CheckCircle2 className="w-6 h-6 text-primary" /> Fim do retrabalho de redigitação</li>
            </ul>
            <a 
              href={getWhatsAppUrl("Quero integrar meus sistemas.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-black text-lg hover:text-primary-hover group/link"
            >
              Unificar minha stack <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

      </section>

      {/* Final CTA Block */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="bg-primary rounded-[40px] p-10 md:p-24 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:400%_400%] animate-gradient pointer-events-none" />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10">
            Sua empresa pode ser muito mais eficiente
          </h2>
          <div className="flex justify-center relative z-10">
            <a
              href={getWhatsAppUrl("Olá! Quero conversar sobre os serviços da Fallback.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 rounded-2xl bg-[#25D366] text-white font-black text-xl flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition-all shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-7 h-7" /> Agendar Consultoria Gratuita
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
