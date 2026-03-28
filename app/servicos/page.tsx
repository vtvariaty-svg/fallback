import { getWhatsAppUrl, COMPANY_EMAIL } from "@/lib/constants";
import { Zap, MonitorSmartphone, Settings, Database, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossos Serviços | Fallback Automações",
  description: "Conheça nossas soluções em automação, sistemas sob medida e integração de ferramentas para transformar a rotina da sua empresa.",
};

export default function ServicosPage() {
  return (
    <div className="flex flex-col gap-24 md:gap-32 w-full pt-32 pb-24">
      
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto w-full text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mb-6">
          Soluções criadas para <span className="text-primary">alavancar</span> o seu negócio
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Esqueça os processos manuais demorados ou sistemas engessados que não funcionam. 
          Nós construímos a tecnologia exata que a sua empresa precisa para crescer e faturar mais.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a 
            href={getWhatsAppUrl("Olá, quero saber mais sobre os serviços da Fallback Automações e como podem ajudar minha empresa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-primary hover:bg-primary-hover text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_-5px_rgba(79,70,229,0.4)]"
          >
            Falar com especialista <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="px-6 max-w-5xl mx-auto w-full flex flex-col gap-16">
        
        {/* Service 1 */}
        <div className="bg-surface border border-surface-border rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:border-primary/50 transition-colors">
          <div className="w-16 h-16 bg-background rounded-2xl border-2 border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
            <Zap className="w-8 h-8 text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Automações Personalizadas</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Sua equipe perde horas todo dia copiando dados de um lugar para o outro ou enviando mensagens manuais? 
              Nós criamos robôs e automações inteligentes que assumem todo o trabalho repetitivo, reduzindo erros a zero e 
              liberando sua equipe para focar no que dá lucro: atender bem os clientes e vender mais.
            </p>
            <ul className="flex flex-col gap-3 mb-8 items-start">
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary" /> Processamento automático de mensagens e leads</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary" /> Qualificação e direcionamento automatizado</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary" /> Emissão de documentos em lote e sem esforço</li>
            </ul>
            <a 
              href={getWhatsAppUrl("Quero automatizar os processos manuais da minha empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-hover group/link"
            >
              Quero automatizar minha operação <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Service 2 */}
        <div className="bg-surface border border-surface-border rounded-3xl p-8 md:p-12 flex flex-col md:flex-row-reverse gap-8 items-center md:items-start group hover:border-primary/50 transition-colors">
          <div className="w-16 h-16 bg-background rounded-2xl border-2 border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
            <MonitorSmartphone className="w-8 h-8 text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Sistemas Sob Medida</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Sistemas genéricos forçam você a adaptar sua empresa a eles. Nós desenvolvemos plataformas online exclusivas que 
              foram desenhadas exatamente para o formato do seu negócio. Ferramentas estáveis, fáceis de usar por qualquer 
              funcionário e que trazem a organização que você precisa para crescer sem perder o controle.
            </p>
            <ul className="flex flex-col gap-3 mb-8 items-start">
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary" /> Sistemas feitos 100% para as regras da sua empresa</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary" /> Nenhuma função inútil para atrapalhar a tela</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary" /> Acesso de qualquer lugar, direto pelo navegador</li>
            </ul>
            <a 
              href={getWhatsAppUrl("Gostaria de criar um sistema sob medida para o meu negócio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-hover group/link"
            >
              Preciso de um sistema exclusivo <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Service 3 */}
        <div className="bg-surface border border-surface-border rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:border-primary/50 transition-colors">
          <div className="w-16 h-16 bg-background rounded-2xl border-2 border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
            <Settings className="w-8 h-8 text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Integrações entre Ferramentas</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Acabe com a confusão de dados separados em planilhas, email e diferentes sistemas. 
              Nós fazemos as plataformas que você já utiliza "conversarem" entre si. Quando uma venda cai num sistema, os dados vão 
              direto para a logística e para o financeiro, sem que nenhum funcionário precise digitar uma única letra.
            </p>
            <ul className="flex flex-col gap-3 mb-8 items-start">
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary" /> Conexão segura entre CRMs, ERPs e e-mail</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary" /> Dados unificados e atualizados em tempo real</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary" /> Menos quebras de comunicação interna</li>
            </ul>
            <a 
              href={getWhatsAppUrl("Gostaria de integrar as ferramentas e sistemas da minha empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-hover group/link"
            >
              Quero integrar minhas ferramentas <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Service 4 */}
        <div className="bg-surface border border-surface-border rounded-3xl p-8 md:p-12 flex flex-col md:flex-row-reverse gap-8 items-center md:items-start group hover:border-primary/50 transition-colors">
          <div className="w-16 h-16 bg-background rounded-2xl border-2 border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
            <Database className="w-8 h-8 text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Soluções Digitais para Operação</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Mantenha o negócio sob seus olhos. Desenvolvemos painéis de controle, dashboards e relatórios para a liderança ou para a 
              própria operação gerenciar os resultados diários. Você terá visão clara e simplificada sobre para onde ir e o que fazer.
            </p>
            <ul className="flex flex-col gap-3 mb-8 items-start">
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary" /> Controle centralizado de métricas operacionais</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary" /> Portais amigáveis para clientes ou funcionários</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary" /> Fim do retrabalho para compilar dados na planilha</li>
            </ul>
            <a 
              href={getWhatsAppUrl("Quero desenvolver painéis de controle operacionais para o meu negócio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-hover group/link"
            >
              Organizar minha operação hoje <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </section>

      {/* Global Final CTA Block Re-used or adapted */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-center shadow-2xl shadow-primary/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:400%_400%] animate-gradient pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 relative z-10">
            Chegou a hora de acelerar sua operação
          </h2>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10 text-white/80">
            Conte-nos como poderemos economizar tempo e dinheiro na sua empresa com a solução certa.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <a
              href={getWhatsAppUrl("Olá! Vi a página de serviços e quero conversar sobre uma solução.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-[0_0_25px_-5px_#25D366]"
            >
              <MessageCircle className="w-5 h-5" /> Falar com Especialista
            </a>
            <a
              href={`mailto:${COMPANY_EMAIL}`}
              className="px-8 py-4 rounded-xl bg-surface text-white font-bold flex items-center justify-center gap-2 hover:bg-surface-border transition-all border border-white/10"
            >
              Enviar por E-mail
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
