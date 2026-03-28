import { ArrowRight, CheckCircle2, MonitorSmartphone, Settings, Zap, ArrowUpRight, BarChart3, Database, MessageCircle } from "lucide-react";
import Link from "next/link";
import { getWhatsAppUrl, COMPANY_EMAIL } from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-32 w-full pt-20">
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ExamplesSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative px-6 pt-16 pb-12 md:pt-32 md:pb-24 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-surface-border text-xs font-semibold text-gray-300 mb-8">
        <span className="flex w-2 h-2 rounded-full bg-green-500"></span>
        Projetos com valores a partir de R$ 699
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mb-6">
        Automações e sistemas <span className="text-gradient">personalizados</span> para empresas
      </h1>
      
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
        Desenvolvemos soluções digitais sob medida para automatizar processos, 
        organizar sua operação e transformar ideias de negócio em ferramentas reais.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
        <Link 
          href="/contato"
          className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-primary hover:bg-primary-hover text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_-5px_rgba(79,70,229,0.4)]"
        >
          Solicitar orçamento <ArrowRight className="w-4 h-4" />
        </Link>
        <a 
          href={getWhatsAppUrl("Olá, vi o site da Fallback Automações e quero entender melhor uma solução personalizada para minha empresa.")}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-surface hover:bg-surface-border border border-surface-border text-white font-semibold flex items-center justify-center gap-2 transition-all"
        >
          <MessageCircle className="w-5 h-5 text-[#25D366]" /> Falar no WhatsApp
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
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O que nós desenvolvemos</h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          Nós simplificamos a tecnologia para que você possa focar no crescimento do seu negócio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-surface border border-surface-border p-8 rounded-2xl hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {s.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
            <p className="text-gray-400 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    "Menos tarefas manuais e mais tempo produtivo",
    "Mais agilidade na entrega e atendimento",
    "Organização centralizada das informações corporativas",
    "Solução 100% adaptada ao fluxo do seu negócio",
    "Mais eficiência operacional com menos custos diretos",
    "Acompanhamento em tempo real de indicadores"
  ];

  return (
    <section className="px-6 max-w-7xl mx-auto w-full">
      <div className="bg-gradient-to-br from-surface to-background border border-surface-border rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
        
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Por que investir em uma solução dedicada?</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Sistemas de prateleira muitas vezes não se adaptam à forma como sua empresa realmente trabalha. Com uma solução sob medida, a tecnologia se molda a você, não o contrário.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-300 font-medium text-sm md:text-base">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    { num: "01", title: "Entendemos sua necessidade", desc: "Mapeamos os desafios da sua empresa em uma conversa direta." },
    { num: "02", title: "Planejamos a solução", desc: "Em até 48h, enviamos uma proposta técnica detalhada com escopo e prazos." },
    { num: "03", title: "Desenvolvemos o projeto", desc: "Criamos o sistema mantendo você atualizado em cada etapa do processo." },
    { num: "04", title: "Ajustamos e entregamos", desc: "Implantamos a solução no seu negócio, testamos e oferecemos o suporte ideal." }
  ];

  return (
    <section id="como-funciona" className="px-6 max-w-7xl mx-auto w-full scroll-mt-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Como funciona nosso trabalho</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-surface-border -z-10 -translate-y-1/2" />
        
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center bg-background md:bg-transparent">
            <div className="w-16 h-16 rounded-full bg-surface border-2 border-primary/30 flex items-center justify-center text-xl font-black text-white mb-6 shadow-lg shadow-primary/10">
              {step.num}
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.desc}</p>
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
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Exemplos práticos</h2>
          <p className="text-gray-400 text-lg max-w-xl">
            Alguns dos projetos que estruturamos para facilitar rotinas e potencializar empresas.
          </p>
        </div>
        <Link href="/servicos" className="text-primary hover:text-primary-hover font-semibold flex items-center gap-2 group transition-colors">
          Quero uma solução como essas <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {examples.map((ex, i) => (
          <div key={i} className="p-6 rounded-xl bg-surface border border-surface-border hover:border-primary/30 transition-colors flex flex-col items-start gap-4">
            <div className="px-3 py-1 bg-background text-xs font-semibold text-gray-300 rounded justify-center items-center flex">
              {ex.tag}
            </div>
            <div className="flex gap-4 items-start">
              <div className="mt-1 text-primary">{ex.icon}</div>
              <h4 className="font-bold text-white text-lg leading-tight">{ex.title}</h4>
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
      <div className="bg-primary rounded-3xl p-8 md:p-16 text-center shadow-2xl shadow-primary/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:400%_400%] animate-gradient pointer-events-none" />
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 relative z-10">
          Pronto para otimizar sua empresa?
        </h2>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10 text-white/80">
          Fale com nossa equipe sem compromisso. Vamos entender o seu desafio e propor a melhor solução tecnológica para resolvê-lo.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
          <a
            href={getWhatsAppUrl("Olá, vi o site da Fallback Automações e quero entender melhor uma solução personalizada para minha empresa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-[0_0_25px_-5px_#25D366]"
          >
            <MessageCircle className="w-5 h-5" /> Iniciar conversa no WhatsApp
          </a>
          <a
            href={`mailto:${COMPANY_EMAIL}`}
            className="px-8 py-4 rounded-xl bg-surface text-white font-bold flex items-center justify-center gap-2 hover:bg-surface-border transition-all border border-white/10"
          >
            Enviar um E-mail
          </a>
        </div>
      </div>
    </section>
  );
}
