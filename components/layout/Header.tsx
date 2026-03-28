import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full border-b border-surface-border bg-background/80 backdrop-blur-md z-50 transition-all">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight text-white flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
            <span className="text-white text-xs font-black">F</span>
          </div>
          <span>Fallback <span className="text-primary font-medium">Automações</span></span>
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
          className="bg-primary hover:bg-primary-hover text-white text-sm font-semibold py-2.5 px-6 rounded-lg transition-colors ring-1 ring-primary/50 shadow-[0_0_15px_-3px_rgba(79,70,229,0.3)]"
        >
          Falar com especialista
        </Link>
      </div>
    </header>
  );
}
