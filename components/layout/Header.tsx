import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full border-b border-surface-border bg-background/80 backdrop-blur-md z-50 transition-all">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl tracking-tighter text-white flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
            <span className="text-white text-base font-black italic">F</span>
          </div>
          <span>Fallback<span className="text-primary italic">.</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/servicos" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Nossos Serviços
          </Link>
          <Link href="/#como-funciona" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Como Funciona
          </Link>
          <Link href="/#faq" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            FAQ
          </Link>
          <Link href="/contato" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Contato
          </Link>
        </nav>
        <Link
          href="/contato"
          className="bg-primary hover:bg-primary-hover text-white text-sm font-black py-3 px-8 rounded-xl transition-all shadow-[0_10px_20px_-5px_rgba(79,70,229,0.4)] hover:scale-105 active:scale-95"
        >
          Solicitar diagnóstico
        </Link>
      </div>
    </header>
  );
}
