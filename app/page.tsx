import { ArrowRight, CheckCircle2, MonitorSmartphone, Settings, Zap, ArrowUpRight, BarChart3, Database, MessageCircle } from "lucide-react";
import Link from "next/link";
import { DiagnosticLink, WhatsAppLink } from "@/components/tracking/TrackedCTAs";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-40 w-full pt-20 pb-20">
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <ExamplesSection />
      <IdealForSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative px-6 pt-20 pb-16 md:pt-40 md:pb-32 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid pointer-events-none -z-10 opacity-60" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold text-gray-300 mb-10 animate-fade-in shadow-xl">
        <span className="flex w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
        Automação e sistemas operacionais para clínicas
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white max-w-5xl mb-8 leading-[0.95] md:leading-[0.9]">
        Menos faltas. Menos <span className="text-gradient">processo manual.</span> Mais clínica.
      </h1>

      <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mb-12 leading-relaxed font-medium">
        Estruturamos fluxos de atendimento, confirmações, reativações e controle operacional
        para clínicas que cresceram e não podem mais depender de WhatsApp solto, planilhas e processo manual.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center">
        <DiagnosticLink className="w-full sm:w-auto px-10 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] hover:scale-[1.02] active:scale-[0.98]">
          Solicitar diagnóstico <ArrowRight className="w-5 h-5" />
        </DiagnosticLink>
        <WhatsAppLink
          message="Olá, vi o site da Fallback Automações e quero conversar sobre automação e sistemas para a minha clínica."
          className="w-full sm:w-auto px-10 py-4 rounded-xl glass hover:bg-surface border-surface-border text-white font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <MessageCircle className="w-6 h-6 text-[#25D366]" /> Falar no WhatsApp
        </WhatsAppLink>
      </div>
    </section>
  );
}

function ServicesSection() {
  const pains = [
    {
      icon: <MessageCircle className="w-6 h-6 text-primary" />,
      title: "Atendimento lento e desorganizado no WhatsApp",
      desc: "Pacientes sem resposta, mensagens perdidas e recepção sobrecarregada com triagem manual no chat."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Confirmações manuais e alto índice de faltas",
      desc: "Ligar ou mandar mensagem um por um para confirmar consulta consome tempo e ainda assim as faltas acontecem."
    },
    {
      icon: <Settings className="w-6 h-6 text-primary" />,
      title: "Falta de reativação de pacientes inativos",
      desc: "Pacientes que não retornam somem da agenda sem que a clínica tome nenhuma ação estruturada."
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Informações espalhadas entre agenda, planilhas e conversas",
      desc: "Sem um ponto único de controle, erros acontecem e a equipe perde tempo reconciliando dados."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Equipe sem visão clara do fluxo operacional",
      desc: "Sem painel centralizado, o gestor não sabe o que está acontecendo em tempo real na operação."
    }
  ];

  const solutions = [
    { icon: <MessageCircle className="w-5 h-5 text-primary" />, label: "Fluxos de atendimento e triagem" },
    { icon: <Zap className="w-5 h-5 text-primary" />, label: "Confirmações e lembretes automáticos" },
    { icon: <Settings className="w-5 h-5 text-primary" />, label: "Reativação de pacientes inativos" },
    { icon: <MonitorSmartphone className="w-5 h-5 text-primary" />, label: "Painel operacional interno" },
    { icon: <Database className="w-5 h-5 text-primary" />, label: "Integrações com ferramentas já usadas pela clínica" },
  ];

  return (
    <section id="servicos" className="px-6 max-w-7xl mx-auto w-full scroll-mt-24">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Problemas que resolvemos na sua clínica</h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
          Muitas clínicas perdem tempo, sobrecarregam a recepção e deixam oportunidades escapar porque a operação ainda depende de comunicação manual e controles fragmentados.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {pains.map((s, i) => (
          <div key={i} className={`glass p-10 rounded-3xl glass-hover group${i === pains.length - 1 && pains.length % 2 !== 0 ? " md:col-span-2 md:max-w-[calc(50%-16px)] mx-auto w-full" : ""}`}>
            <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center mb-8 border border-surface-border group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
              {s.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
            <p className="text-gray-400 text-lg leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-surface to-background border border-surface-border rounded-[32px] p-10 md:p-16">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Como estruturamos essa operação</h3>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl">
          Cada entrega é mapeada para o fluxo real da sua clínica — não é um template genérico.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((sol, i) => (
            <div key={i} className="flex items-center gap-4 glass px-6 py-5 rounded-2xl">
              <div className="shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                {sol.icon}
              </div>
              <span className="text-white font-semibold leading-snug">{sol.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const reasons = [
    {
      title: "Menos trabalho manual no atendimento",
      desc: "Confirmações, lembretes e triagem deixam de depender da recepção. A equipe foca no que realmente importa: o paciente."
    },
    {
      title: "Mais controle da operação no dia a dia",
      desc: "Painel centralizado com visão real do fluxo — sem depender de relatório no fim do mês para saber o que está acontecendo."
    },
    {
      title: "Estrutura adaptada ao fluxo real da clínica",
      desc: "Não é um template genérico. Mapeamos como sua clínica funciona de fato e construímos em cima disso."
    },
    {
      title: "Implantação por etapas, sem travar a operação",
      desc: "A clínica não para para implantar. Estruturamos cada entrega para encaixar na rotina sem causar ruptura."
    },
    {
      title: "Atendimento direto com quem entende a solução",
      desc: "Sem call center, sem abertura de ticket. Você fala diretamente com quem construiu e conhece cada detalhe do sistema."
    }
  ];

  return (
    <section className="px-6 max-w-7xl mx-auto w-full">
      <div className="bg-gradient-to-br from-surface to-background border border-surface-border rounded-[40px] p-10 md:p-20 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Por que clínicas escolhem a <span className="text-primary italic">Fallback</span>?</h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
              Ferramentas genéricas exigem que a sua clínica se adapte a elas. Nós fazemos o contrário: estruturamos a operação em torno do jeito que a sua clínica já funciona — e do jeito que deveria funcionar.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((r, i) => (
                <div key={i} className={`flex flex-col gap-3${i === reasons.length - 1 && reasons.length % 2 !== 0 ? " sm:col-span-2 sm:max-w-[calc(50%-16px)] mx-auto w-full" : ""}`}>
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
    { num: "01", title: "Diagnóstico da operação", desc: "Entendemos como a sua clínica funciona hoje: fluxos, gargalos, ferramentas em uso e onde a equipe perde mais tempo." },
    { num: "02", title: "Plano de implantação", desc: "Em até 48h, apresentamos um plano por etapas com escopo claro, prazos reais e sem surpresas no meio do caminho." },
    { num: "03", title: "Desenvolvimento e ajustes", desc: "Construímos cada entrega com a clínica funcionando normalmente. Você acompanha e valida antes de ir ao ar." },
    { num: "04", title: "Entrega, treinamento e evolução", desc: "A equipe é treinada antes da virada. Após a implantação, seguimos disponíveis para ajustes e novas etapas." }
  ];

  return (
    <section id="como-funciona" className="px-6 max-w-7xl mx-auto w-full scroll-mt-24 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 tracking-tight">Uma implantação <span className="text-primary italic">sem travar</span> sua clínica</h2>

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
    { title: "Confirmação automática de consultas e procedimentos", tag: "Automação", icon: <Zap className="w-5 h-5" /> },
    { title: "Reativação de pacientes inativos", tag: "Automação", icon: <Settings className="w-5 h-5" /> },
    { title: "Atendimento inicial via WhatsApp com triagem", tag: "Atendimento", icon: <MessageCircle className="w-5 h-5" /> },
    { title: "Painel interno para acompanhamento operacional", tag: "Dashboard", icon: <MonitorSmartphone className="w-5 h-5" /> },
    { title: "Organização de leads, pacientes e follow-ups", tag: "Gestão", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Integrações com agenda e ferramentas da clínica", tag: "Integração", icon: <Database className="w-5 h-5" /> },
  ];

  return (
    <section className="px-6 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Exemplos de soluções para clínicas</h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Cada solução é construída para reduzir o trabalho manual, melhorar o fluxo de pacientes e dar mais controle sobre a operação da clínica.
          </p>
        </div>
        <Link href="/servicos" className="text-primary hover:text-primary-hover font-bold text-lg flex items-center gap-2 group transition-all glass px-6 py-3 rounded-xl border-primary/20">
          Ver todas as soluções <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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

function IdealForSection() {
  const criteria = [
    "Clínicas com agenda cheia mas alto índice de faltas",
    "Consultórios que confirmam consultas por ligação ou WhatsApp manual",
    "Equipes que gastam tempo triando mensagens em vez de atender",
    "Gestores sem visibilidade do fluxo operacional em tempo real",
    "Clínicas com pacientes inativos sem nenhum processo de reativação",
    "Clínicas que já tentaram ferramentas genéricas e não se adaptaram",
  ];

  return (
    <section className="px-6 max-w-7xl mx-auto w-full">
      <div className="bg-gradient-to-br from-surface to-background border border-surface-border rounded-[40px] p-10 md:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Para quais clínicas isso faz sentido?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              A solução é especialmente valiosa para clínicas que já têm fluxo de atendimento, mas dependem de processo manual para mantê-lo funcionando. Se a sua operação pausa quando a recepção está sobrecarregada, chegou a hora de estruturá-la.
            </p>
            <DiagnosticLink className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-lg transition-all shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] hover:scale-[1.02]">
              Solicitar diagnóstico <ArrowRight className="w-5 h-5" />
            </DiagnosticLink>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {criteria.map((item, i) => (
              <div key={i} className="flex items-start gap-4 glass px-6 py-4 rounded-2xl">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-300 font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      q: "Isso serve para clínica pequena ou só para operações maiores?",
      a: "Serve para clínicas de todos os tamanhos. Consultórios com uma única agenda se beneficiam tanto quanto clínicas com múltiplos profissionais. O que muda é o escopo — não a abordagem. Começamos pelo que gera mais resultado rápido para o seu momento atual."
    },
    {
      q: "Dá para começar por uma etapa menor?",
      a: "Sim, e na maioria dos casos é exatamente assim que recomendamos começar. Mapeamos os maiores gargalos da sua operação e priorizamos a primeira entrega com base no que vai ter impacto mais imediato. Novas etapas são adicionadas conforme a clínica avança."
    },
    {
      q: "Vocês adaptam ao processo da clínica ou precisamos mudar nossa rotina?",
      a: "Adaptamos ao seu fluxo. Antes de qualquer desenvolvimento, entendemos como a sua clínica opera hoje — quais ferramentas usa, como a equipe trabalha, onde estão os ruídos. A solução é construída em cima disso, não o contrário."
    },
    {
      q: "Precisa trocar o sistema atual da clínica?",
      a: "Não necessariamente. Na maioria dos casos integramos com o que já existe — agenda, prontuário, WhatsApp Business, planilhas. Só recomendamos substituição quando a ferramenta atual é um gargalo real que inviabiliza a automação."
    },
    {
      q: "Em quanto tempo já dá para perceber resultado?",
      a: "Automações de confirmação e atendimento inicial costumam entrar em operação em poucas semanas e o impacto na taxa de faltas e no volume de mensagens manuais é percebido rapidamente. Soluções mais estruturadas têm cronograma definido na fase de planejamento."
    },
    {
      q: "Minha equipe vai conseguir usar?",
      a: "Sim. Tudo é construído com usabilidade em mente — sem telas complexas ou fluxos confusos. Além disso, a equipe é treinada antes da virada para o novo sistema. O objetivo é que as pessoas ganhem tempo, não que travem com tecnologia nova."
    },
    {
      q: "Existe suporte depois da implantação?",
      a: "Existe. Após a entrega, você tem acesso direto à equipe que desenvolveu a solução. Sem fila de tickets, sem atendimento genérico. Se algo precisar de ajuste ou se surgir uma nova demanda, é só chamar."
    }
  ];

  return (
    <section id="faq" className="px-6 max-w-3xl mx-auto w-full scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Dúvidas frequentes</h2>
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
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:400%_400%] animate-gradient pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 blur-[100px] rounded-full" />

        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10 leading-tight">
          Pronto para organizar a operação da sua clínica?
        </h2>
        <p className="text-white/80 text-lg md:text-2xl max-w-3xl mx-auto mb-12 relative z-10">
          Fale com nossa equipe sem compromisso. Vamos diagnosticar os gargalos de atendimento, confirmações, fluxo operacional e follow-up de pacientes — e propor um plano concreto para resolvê-los.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 relative z-10">
          <DiagnosticLink className="px-10 py-5 rounded-2xl bg-white text-primary font-black text-xl flex items-center justify-center gap-3 hover:bg-white/90 transition-all shadow-xl hover:scale-105">
            Solicitar diagnóstico <ArrowRight className="w-6 h-6" />
          </DiagnosticLink>
          <WhatsAppLink
            message="Olá, vi o site da Fallback Automações e quero conversar sobre automação e sistemas para a minha clínica."
            className="px-10 py-5 rounded-2xl bg-[#25D366] text-white font-black text-xl flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition-all shadow-xl hover:shadow-[0_0_30px_-5px_#25D366] hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" /> Falar no WhatsApp
          </WhatsAppLink>
        </div>
        <p className="text-white/50 text-sm mt-8 relative z-10">
          Sem compromisso. Em até 24h você recebe um diagnóstico da operação da sua clínica.
        </p>
      </div>
    </section>
  );
}
