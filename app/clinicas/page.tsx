import { ArrowRight, CheckCircle2, XCircle, MessageCircle } from "lucide-react";
import { DiagnosticLink, WhatsAppLink } from "@/components/tracking/TrackedCTAs";
import PixelEventTracker from "@/components/analytics/PixelEventTracker";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automação para Clínicas | Diagnóstico Operacional | Fallback",
  description:
    "Reduza faltas, organize o atendimento e ganhe eficiência operacional. Implantação por etapas, sem compromisso. Clínicas e consultórios privados.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Menos faltas. Mais controle. Uma clínica que opera com processo.",
    description:
      "Reduza faltas e organize o atendimento da sua clínica. Diagnóstico sem compromisso. Plano em 24h.",
    locale: "pt_BR",
    type: "website",
    siteName: "Fallback Automações",
  },
};

// ─── CTA pair reutilizado em múltiplas seções ────────────────────────────────

function SectionCTAs({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
      <DiagnosticLink
        className={`w-full sm:w-auto px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] ${
          inverted
            ? "bg-white text-primary hover:bg-white/90 shadow-xl"
            : "bg-primary hover:bg-primary-hover text-white shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)]"
        }`}
      >
        Solicitar diagnóstico <ArrowRight className="w-5 h-5" />
      </DiagnosticLink>
      <WhatsAppLink
        message="Olá, vi o site da Fallback Automações e quero conversar sobre automação e sistemas para a minha clínica."
        className={`w-full sm:w-auto px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] ${
          inverted
            ? "glass border-white/20 text-white hover:bg-white/10"
            : "glass hover:bg-surface border-surface-border text-white"
        }`}
      >
        <MessageCircle className="w-6 h-6 text-[#25D366]" /> Falar no WhatsApp
      </WhatsAppLink>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ClinicasLPPage() {
  const pains = [
    {
      title: "WhatsApp desorganizado",
      desc: "Mensagens sem resposta, triagem manual e recepção sobrecarregada no chat.",
    },
    {
      title: "Confirmações feitas uma por uma",
      desc: "Ligar ou mensagem individual para confirmar consultas consome horas da equipe.",
    },
    {
      title: "Alto índice de faltas",
      desc: "Sem lembretes automáticos, consultas são desmarcadas ou simplesmente não acontecem.",
    },
    {
      title: "Pacientes inativos esquecidos",
      desc: "Quem não retorna desaparece da agenda sem nenhuma ação de reativação.",
    },
    {
      title: "Informações espalhadas",
      desc: "Agenda, planilha e WhatsApp não se comunicam. A equipe perde tempo juntando os pedaços.",
    },
    {
      title: "Gestor sem visibilidade operacional",
      desc: "Sem painel centralizado, saber o que está acontecendo exige perguntar para alguém.",
    },
  ];

  const solutions = [
    {
      title: "Fluxos de atendimento e triagem via WhatsApp",
      desc: "Estrutura o primeiro contato e direciona os pacientes sem sobrecarregar a recepção.",
    },
    {
      title: "Confirmações e lembretes automáticos",
      desc: "Pacientes são lembrados e confirmam a consulta sem nenhuma ação manual.",
    },
    {
      title: "Reativação estruturada de pacientes inativos",
      desc: "Mensagens automáticas no momento certo, sem esforço da equipe.",
    },
    {
      title: "Painel operacional interno para gestores",
      desc: "Visão em tempo real do fluxo, sem precisar perguntar para ninguém.",
    },
    {
      title: "Organização de leads, pacientes e follow-ups",
      desc: "Tudo em um lugar, integrado ao fluxo da recepção.",
    },
    {
      title: "Integrações com agenda, prontuário e ferramentas da clínica",
      desc: "Sem redigitação, sem dados duplicados, sem retrabalho.",
    },
  ];

  const benefits = [
    {
      title: "Recepção com menos carga operacional",
      desc: "Confirmações, lembretes e triagem param de depender da equipe. Sobra tempo para o atendimento que importa.",
    },
    {
      title: "Agenda mais cheia e previsível",
      desc: "Com lembretes automáticos e reativação de inativos, as faltas caem e a ocupação da agenda melhora.",
    },
    {
      title: "Menos pacientes perdidos",
      desc: "Pacientes que sumiam são reativados antes de definitivamente ir para outra clínica.",
    },
    {
      title: "Controle real para o gestor",
      desc: "Painel centralizado com o fluxo em tempo real. Decisões com base em dados, não em percepção.",
    },
    {
      title: "Crescimento sem caos operacional",
      desc: "A estrutura escala com a clínica. Mais pacientes e mais profissionais sem multiplicar o trabalho manual.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Você entra em contato",
      desc: "Via WhatsApp ou e-mail. Nenhum formulário longo, nenhum processo burocrático.",
    },
    {
      num: "02",
      title: "Entendemos sua operação",
      desc: "Mapeamos como a clínica funciona hoje: fluxos, ferramentas, gargalos e onde a equipe perde mais tempo.",
    },
    {
      num: "03",
      title: "Você recebe o plano em 24h",
      desc: "Um plano por etapas com escopo claro, prazos definidos e sem surpresas no meio do caminho.",
    },
    {
      num: "04",
      title: "Começamos pela frente de maior impacto",
      desc: "A clínica não para para implantar. Cada etapa é validada antes da próxima começar.",
    },
  ];

  const idealFor = [
    "Clínicas com 2 a 20 profissionais em crescimento",
    "Equipes que confirmam consultas por ligação ou WhatsApp manual",
    "Clínicas com alto índice de faltas e sem processo de retenção",
    "Gestores sem visibilidade operacional em tempo real",
    "Clínicas que já tentaram ferramentas genéricas e não se adaptaram",
    "Consultórios com WhatsApp como principal canal com pacientes",
  ];

  const notFor = [
    "Clínicas que já têm sistema operacional estruturado e funcionando bem",
    "Operações com volume muito baixo que ainda não justificam automação",
    "Projetos que buscam ferramenta pronta para usar sem nenhuma configuração",
  ];

  const faqs = [
    {
      q: "Isso serve para clínica pequena?",
      a: "Serve. Consultórios com uma única agenda se beneficiam tanto quanto clínicas maiores. O que muda é o escopo — não a abordagem. Começamos pelo que gera mais resultado para o seu momento atual.",
    },
    {
      q: "Precisa trocar o sistema atual?",
      a: "Não necessariamente. Na maioria dos casos integramos com o que já existe — agenda, prontuário, WhatsApp Business, planilhas. Só recomendamos substituição quando a ferramenta atual é o gargalo que impede a automação.",
    },
    {
      q: "Dá para começar por uma etapa menor?",
      a: "Sim, e é exatamente como recomendamos começar. Mapeamos os gargalos, priorizamos a primeira entrega de maior impacto e evoluímos por etapas conforme a clínica avança.",
    },
    {
      q: "Em quanto tempo dá para perceber resultado?",
      a: "Automações de confirmação e atendimento inicial entram em operação em poucas semanas. O impacto na taxa de faltas e no volume de mensagens manuais é percebido rapidamente.",
    },
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24 w-full pt-20 pb-20">

      <PixelEventTracker event="ViewContent" params={{ content_name: "LP Clínicas", content_category: "Landing Page" }} />

      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative px-6 pt-16 pb-12 md:pt-32 md:pb-24 max-w-7xl mx-auto w-full flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid pointer-events-none -z-10 opacity-60" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[130px] rounded-full pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold text-gray-300 mb-8 shadow-xl">
          <span className="flex w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          Exclusivo para clínicas e consultórios privados
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white max-w-5xl mb-8 leading-[0.95] md:leading-[0.9]">
          Menos faltas. Mais controle.
          <br className="hidden md:block" />
          Uma clínica que{" "}
          <span className="text-gradient">opera com processo.</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mb-10 leading-relaxed font-medium">
          A Fallback estrutura fluxos de atendimento, confirmações automáticas,
          reativações de pacientes e controle operacional para clínicas que
          cresceram e não podem mais depender de WhatsApp solto, planilhas e
          processo manual.
        </p>

        <SectionCTAs />

        <p className="text-gray-500 text-sm mt-6">
          Diagnóstico sem compromisso. Plano em até 24h.
        </p>
      </section>

      {/* ── 2. DORES ─────────────────────────────────────────────────────── */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Sua clínica já cresceu.
            <br className="hidden md:block" /> Mas a operação ainda está no
            manual?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            Quando o volume aumenta, o processo manual deixa de funcionar.
            Reconhece algum desses cenários?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="glass p-7 rounded-3xl flex flex-col gap-3 glass-hover"
            >
              <span className="text-xs font-black text-gray-600 uppercase tracking-widest">
                Problema {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold text-white">{pain.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. SOLUÇÃO ───────────────────────────────────────────────────── */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="bg-gradient-to-br from-surface to-background border border-surface-border rounded-[40px] p-10 md:p-16">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              O que a Fallback implementa na sua clínica
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Cada entrega é construída para o fluxo real da sua operação — não
              é um template genérico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {solutions.map((sol, i) => (
              <div
                key={i}
                className="flex gap-4 items-start glass px-6 py-5 rounded-2xl"
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-bold text-lg leading-snug mb-1">
                    {sol.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {sol.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <DiagnosticLink className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-lg transition-all shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] hover:scale-[1.02]">
              Quero estruturar minha clínica <ArrowRight className="w-5 h-5" />
            </DiagnosticLink>
          </div>
        </div>
      </section>

      {/* ── 4. BENEFÍCIOS ────────────────────────────────────────────────── */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O que muda depois da implantação
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Resultados práticos no fluxo da clínica — não promessas genéricas de
            eficiência.
          </p>
        </div>

        <div className="flex flex-col gap-5 max-w-4xl mx-auto mb-12">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="glass p-8 rounded-3xl glass-hover flex gap-6 items-start group"
            >
              <span className="text-4xl font-black text-primary/25 group-hover:text-primary/60 transition-colors duration-300 leading-none shrink-0 w-12 text-right select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{b.title}</h3>
                <p className="text-gray-400 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <SectionCTAs />
      </section>

      {/* ── 5. COMO FUNCIONA O DIAGNÓSTICO ───────────────────────────────── */}
      <section className="px-6 max-w-7xl mx-auto w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Como funciona o diagnóstico
        </h2>
        <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Uma conversa direta. Sem formulários longos. Sem compromisso.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative mb-16">
          <div className="hidden md:block absolute top-[40px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-surface-border to-transparent -z-10" />

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-2xl glass border-2 border-primary/20 flex items-center justify-center text-2xl font-black text-white mb-8 shadow-xl group-hover:bg-primary group-hover:border-primary transition-all duration-500 group-hover:-translate-y-2">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <DiagnosticLink className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-lg transition-all shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] hover:scale-[1.02]">
          Solicitar diagnóstico <ArrowRight className="w-5 h-5" />
        </DiagnosticLink>
      </section>

      {/* ── 6. PARA QUEM É IDEAL ─────────────────────────────────────────── */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="bg-gradient-to-br from-surface to-background border border-surface-border rounded-[40px] p-10 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Para quem é ideal
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A solução foi construída para um perfil específico de clínica. Veja
              se faz sentido para o seu momento.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* É para */}
            <div>
              <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                É para sua clínica se:
              </h3>
              <div className="flex flex-col gap-3">
                {idealFor.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 glass px-5 py-3.5 rounded-xl"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-medium text-sm leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Não é para */}
            <div>
              <h3 className="text-xl font-bold text-gray-400 mb-5 flex items-center gap-3">
                <XCircle className="w-6 h-6 text-gray-500 shrink-0" />
                Provavelmente não é para você se:
              </h3>
              <div className="flex flex-col gap-3">
                {notFor.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-surface/30 border border-surface-border px-5 py-3.5 rounded-xl"
                  >
                    <XCircle className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                    <span className="text-gray-500 font-medium text-sm leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-gray-500 text-sm mt-6 leading-relaxed">
                Se estiver em dúvida se isso se aplica à sua clínica, o
                diagnóstico vai responder. Não há custo nem compromisso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ───────────────────────────────────────────────────────── */}
      <section className="px-6 max-w-3xl mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Perguntas frequentes
          </h2>
          <p className="text-gray-400">
            Respostas diretas para as dúvidas mais comuns.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-surface border border-surface-border rounded-xl px-6 py-5 cursor-pointer hover:border-primary/50 transition-colors"
            >
              <summary className="flex items-center justify-between font-semibold text-white text-lg list-none">
                {faq.q}
                <span className="transition group-open:rotate-180 shrink-0 ml-4">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="text-gray-400 mt-4 leading-relaxed pl-2 text-sm md:text-base border-l-2 border-primary/50">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ── 8. CTA FINAL ─────────────────────────────────────────────────── */}
      <section className="px-6 max-w-7xl mx-auto w-full pb-8">
        <div className="bg-primary rounded-[40px] p-10 md:p-24 text-center shadow-2xl shadow-primary/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:400%_400%] animate-gradient pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 blur-[100px] rounded-full" />

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 relative z-10 leading-tight">
            Solicite um diagnóstico da operação da sua clínica
          </h2>
          <p className="text-white/80 text-lg md:text-2xl max-w-3xl mx-auto mb-12 relative z-10">
            Em até 24h você recebe um plano concreto e por etapas. Sem
            compromisso.
          </p>

          <div className="relative z-10">
            <SectionCTAs inverted />
          </div>

          <p className="text-white/40 text-sm mt-8 relative z-10">
            A Fallback atende clínicas em todo o Brasil de forma remota.
          </p>
        </div>
      </section>

    </div>
  );
}
