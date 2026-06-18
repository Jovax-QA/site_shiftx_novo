import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const links = ['Serviços', 'Portfólio', 'Processo', 'Contato'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#080808]/90 backdrop-blur-2xl border-b border-white/4 py-3' : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-0 group">
          <span
            className="font-display font-black text-2xl tracking-tight group-hover:opacity-90 transition-opacity"
            style={{
              color: '#00e5ff',
              textShadow: '0 0 20px rgba(0, 229, 255, 0.7), 0 0 40px rgba(0, 229, 255, 0.3)',
            }}
          >
            SHIFT
          </span>
          <span
            className="font-display font-black text-2xl tracking-tight"
            style={{
              color: '#e8341a',
              textShadow: '0 0 15px rgba(232, 52, 26, 0.5)',
            }}
          >
            X
          </span>
          <span className="ml-2 text-[10px] font-semibold text-slate-500 uppercase tracking-widest hidden sm:block">
            Tecnologia
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l} href="#"
               className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 relative group">
              {l}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#00e5ff] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-[#080808] transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
             style={{
               background: 'linear-gradient(135deg, #00e5ff, #00b4d8)',
               boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)',
             }}>
            Começar Projeto
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 text-slate-400" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d0d0d]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l} href="#" className="text-sm font-medium text-slate-300 py-1.5">{l}</a>
          ))}
          <a href="#" className="text-center py-3 rounded-xl font-bold text-sm text-[#080808]"
             style={{ background: 'linear-gradient(135deg, #00e5ff, #00b4d8)' }}>
            Começar Projeto
          </a>
        </div>
      )}
    </nav>
  );
}
