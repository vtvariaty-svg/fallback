import { ArrowRight, CheckCircle2, MonitorSmartphone, Settings, Zap, ArrowUpRight, BarChart3, Database, MessageCircle } from "lucide-react";
import Link from "next/link";
import { getWhatsAppUrl, COMPANY_EMAIL } from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-40 w-full pt-20 pb-20">
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <ExamplesSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative px-6 pt-20 pb-16 md:pt-40 md:pb-32 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid pointer-events-none -z-10 opacity-60" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold text-gray-300 mb-10 animate-fade-in shadow-xl">
        <span className="flex w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
        Soluções profissionais a partir de R$ 699
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white max-w-5xl mb-8 leading-[0.95] md:leading-[0.9]">
        Sua empresa no <span className="text-gradient">piloto automático</span>
      </h1>
      
      <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mb-12 leading-relaxed font-medium">
        Desenvolvemos sistemas e automações exclusivas que eliminam o trabalho manual 
        e transformam sua operação em uma máquina de eficiência.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center">
        <Link 
          href="/contato"
          className="w-full sm:w-auto px-10 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] hover:scale-[1.02] active:scale-[0.98]"
        >
          Solicitar orçamento <ArrowRight className="w-5 h-5" />
        </Link>
        <a 
          href={getWhatsAppUrl("Olá, vi o site da Fallback Automações e quero entender melhor uma solução personalizada para minha empresa.")}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-10 py-4 rounded-xl glass hover:bg-surface border-surface-border text-white font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <MessageCircle className="w-6 h-6 text-[#25D366]" /> Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Automações personalizadas",
      desc: "Elimine tarefas manuais e repetitivas. Conectamos suas ferramentas para que elas trabalhem sozinhas por você."
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6 text-primary" />,
      title: "Sistemas sob medida",
      desc: "Plataformas web construídas especificamente para a realidade e as regras do seu negócio."
    },
    {
      icon: <Settings className="w-6 h-6 text-primary" />,
      title: "Integrações entre ferramentas",
      desc: "Sincronize dados entre CRMs, ERPs, planilhas e sistemas diversos de forma automática e segura."
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Soluções digitais para operação",
      desc: "Painéis de controle internos, relatórios automatizados e portais para organizar sua equipe e clientes."
    }
  ];

  return (
    <section id="servicos" className="px-6 max-w-7xl mx-auto w-full scroll-mt-24">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">O que nós desenvolvemos</h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
          Nós simplificamos a tecnologia complexa em ferramentas práticas que 
          fazem sentido para a realidade do seu dia a dia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <div key={i} className="glass p-10 rounded-3xl glass-hover group">
            <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center mb-8 border border-surface-border group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
              {s.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
            <p className="text-gray-400 text-lg leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const reasons = [
    { title: "Foco total no ROI", desc: "Não criamos tecnologia por criar. Nossas soluções visam reduzir custos e aumentar faturamento." },
    { title: "Sistemas 100% Suas", desc: "Diferente de sistemas mensais, você investe em uma ferramenta que é propriedade da sua empresa." },
    { title: "Escalabilidade Real", desc: "Projetos construídos para crescer sem precisar recomeçar do zero a cada nova etapa." },
    { title: "Suporte Especializado", desc: "Atendimento direto com quem desenvolveu, sem burocracia ou filas de tickets intermináveis." }
  ];

  return (
    <section className="px-6 max-w-7xl mx-auto w-full">
      <div className="bg-gradient-to-br from-surface to-background border border-surface-border rounded-[40px] p-10 md:p-20 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Por que confiar na <span className="text-primary italic">Fallback</span>?</h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
              Enquanto o mercado oferece "sistemas de prateleira" que a sua empresa tem que se adaptar, 
              nós moldamos a tecnologia para seguir os seus processos e a sua cultura de trabalho.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((r, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-white font-bold text-lg">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> {r.title}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex justify-center relative">
            <div className="w-full aspect-square max-w-[400px] glass rounded-full flex items-center justify-center p-12 border-2 border-primary/20 animate-pulse-slow shadow-[0_0_50px_-10px_rgba(79,70,229,0.3)]">
              <Zap className="w-24 h-24 text-primary opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    { num: "01", title: "Imersão", desc: "Mapeamos os desafios da sua empresa em uma conversa direta e sem jargões técnicos." },
    { num: "02", title: "Projeto", desc: "Em até 48h, enviamos uma proposta técnica com escopo, prazos reais e investimento." },
    { num: "03", title: "Execução", desc: "Desenvolvemos o sistema mantendo você atualizado em cada etapa do processo." },
    { num: "04", title: "Entrega", desc: "Implantamos a solução, treinamos sua equipe e oferecemos o suporte contínuo." }
  ];

  return (
    <section id="como-funciona" className="px-6 max-w-7xl mx-auto w-full scroll-mt-24 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 tracking-tight">Nosso processo <span className="text-primary italic">transparente</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
        <div className="hidden md:block absolute top-[40px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-surface-border to-transparent -z-10" />
        
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center group">
            <div className="w-20 h-20 rounded-2xl glass border-2 border-primary/20 flex items-center justify-center text-2xl font-black text-white mb-8 shadow-xl group-hover:bg-primary group-hover:border-primary transition-all duration-500 group-hover:-translate-y-2">
              {step.num}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExamplesSection() {
  const examples = [
    { title: "Automação de Atendimento (WhatsApp)", tag: "Automação", icon: <MessageCircle className="w-5 h-5" /> },
    { title: "Sistema Interno de Controle Financeiro", tag: "Sistema Web", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Painel Operacional para Logística", tag: "Dashboard", icon: <MonitorSmartphone className="w-5 h-5" /> },
    { title: "Integração CRM com ERP", tag: "Integração", icon: <Settings className="w-5 h-5" /> },
    { title: "MVPs para Novas Ideias de Negócio", tag: "Desenvolvimento", icon: <Zap className="w-5 h-5" /> },
  ];

  return (
    <section className="px-6 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Exemplos práticos</h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Soluções estruturadas para facilitar rotinas e potencializar empresas de diferentes tamanhos.
          </p>
        </div>
        <Link href="/servicos" className="text-primary hover:text-primary-hover font-bold text-lg flex items-center gap-2 group transition-all glass px-6 py-3 rounded-xl border-primary/20">
          Explorar Soluções <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map((ex, i) => (
          <div key={i} className="p-8 rounded-3xl glass glass-hover flex flex-col items-start gap-6">
            <div className="px-4 py-1.5 bg-primary/10 text-xs font-bold text-primary rounded-full border border-primary/20">
              {ex.tag}
            </div>
            <div className="flex gap-5 items-start">
              <div className="mt-1 text-primary bg-primary/5 p-3 rounded-xl">{ex.icon}</div>
              <h4 className="font-bold text-white text-xl leading-snug">{ex.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      q: "Quanto custa um projeto?",
      a: "Nossos projetos customizados têm valores acessíveis a partir de R$ 699, variando de acordo com a complexidade, integrações necessárias e escopo total do sistema."
    },
    {
      q: "Em quanto tempo fica pronto?",
      a: "MVPs e automações mais enxutas podem ser entregues em poucos dias. Sistemas mais elaborados possuem um cronograma bem definido que apresentamos logo na fase de planejamento."
    },
    {
      q: "Vocês fazem projetos do zero?",
      a: "Sim. Transformamos sua ideia de negócio ou processo manual em um sistema completo totalmente do zero, garantindo que atenda exatamente à sua necessidade."
    },
    {
      q: "Dá para começar pequeno?",
      a: "Com certeza. Acreditamos na construção de MVPs (Minimum Viable Products). Você pode começar com uma funcionalidade principal e irmos escalando aos poucos."
    },
    {
      q: "Posso evoluir o sistema depois?",
      a: "Sim. Construímos nossos projetos pensando em escalabilidade. É perfeitamente possível adicionar novos módulos, páginas ou integrações no futuro."
    }
  ];

  return (
    <section id="faq" className="px-6 max-w-3xl mx-auto w-full scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Dúvidas Frequentes</h2>
      </div>
      
      <div className="flex flex-col gap-4">
        {faqs.map((faq, i) => (
          <details key={i} className="group bg-surface border border-surface-border rounded-xl px-6 py-5 cursor-pointer hover:border-primary/50 transition-colors">
            <summary className="flex items-center justify-between font-semibold text-white text-lg list-none">
              {faq.q}
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="text-gray-400 mt-4 leading-relaxed pl-2 text-sm md:text-base border-l-2 border-primary/50">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section id="contato" className="px-6 max-w-7xl mx-auto w-full pb-20 scroll-mt-24">
      <div className="bg-primary rounded-[40px] p-10 md:p-24 text-center shadow-2xl shadow-primary/40 relative overflow-hidden">
        {/* Animated background flare */}
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:400%_400%] animate-gradient pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 blur-[100px] rounded-full" />
        
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10 leading-tight">
          Pronto para otimizar sua empresa?
        </h2>
        <p className="text-white/80 text-lg md:text-2xl max-w-3xl mx-auto mb-12 relative z-10">
          Fale com nossa equipe sem compromisso. Vamos mapear seus gargalos operacionais e propor a solução exata para resolvê-los.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-5 relative z-10">
          <a
            href={getWhatsAppUrl("Olá, vi o site da Fallback Automações e quero entender melhor uma solução personalizada para minha empresa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-2xl bg-[#25D366] text-white font-black text-xl flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition-all shadow-xl hover:shadow-[0_0_30px_-5px_#25D366] hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" /> Iniciar conversa no WhatsApp
          </a>
          <a
            href={`mailto:${COMPANY_EMAIL}`}
            className="px-10 py-5 rounded-2xl glass text-white font-bold text-xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all border-white/20 hover:scale-105"
          >
            Enviar um E-mail
          </a>
        </div>
      </div>
    </section>
  );
}
