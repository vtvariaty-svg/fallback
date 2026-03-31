import Link from 'next/link';
import { COMPANY_EMAIL, COMPANY_PHONE_DISPLAY, COMPANY_LEGAL_NAME, COMPANY_CNPJ, getWhatsAppUrl } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-surface-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-2xl tracking-tighter text-white flex items-center gap-3 group mb-4">
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 transition-transform">
                <span className="text-white text-base font-black italic">F</span>
              </div>
              <span>Fallback<span className="text-primary italic">.</span></span>
            </Link>
            <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-sm">
              Automação e sistemas operacionais para clínicas e consultórios privados que querem reduzir faltas, organizar o atendimento e ganhar eficiência real.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Soluções</h4>
            <ul className="space-y-3">
              <li><Link href="/servicos" className="text-sm text-gray-400 hover:text-primary transition-colors">Confirmações e lembretes automáticos</Link></li>
              <li><Link href="/servicos" className="text-sm text-gray-400 hover:text-primary transition-colors">Atendimento e triagem via WhatsApp</Link></li>
              <li><Link href="/servicos" className="text-sm text-gray-400 hover:text-primary transition-colors">Painel operacional para clínicas</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li><a href={`mailto:${COMPANY_EMAIL}`} className="text-sm text-gray-400 hover:text-white transition-colors">{COMPANY_EMAIL}</a></li>
              <li><a href={getWhatsAppUrl("Olá!")} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">{COMPANY_PHONE_DISPLAY}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-surface-border overflow-hidden pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="font-medium text-gray-400">{COMPANY_LEGAL_NAME} — CNPJ {COMPANY_CNPJ}</span>
            <span>&copy; {new Date().getFullYear()} Fallback Automações. Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
