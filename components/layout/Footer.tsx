import Link from 'next/link';
import { COMPANY_EMAIL, COMPANY_PHONE_DISPLAY, COMPANY_LEGAL_NAME, COMPANY_CNPJ, getWhatsAppUrl } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-surface-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-xl tracking-tight text-white flex items-center gap-2">
             <div className="w-5 h-5 rounded bg-primary flex items-center justify-center">
                <span className="text-white text-[10px] font-black">F</span>
              </div>
              <span>Fallback <span className="text-primary font-medium">Automações</span></span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-sm">
              Desenvolvemos automações e sistemas personalizados para empresas. Nossa missão é transformar processos manuais em eficiência digital.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Soluções</h4>
            <ul className="space-y-3">
              <li><Link href="/servicos" className="text-sm text-gray-400 hover:text-primary transition-colors">Automações personalizadas</Link></li>
              <li><Link href="/servicos" className="text-sm text-gray-400 hover:text-primary transition-colors">Sistemas sob medida</Link></li>
              <li><Link href="/servicos" className="text-sm text-gray-400 hover:text-primary transition-colors">Integrações de plataformas</Link></li>
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
