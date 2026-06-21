import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageCircle, Mail, Phone, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.animate-in').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 130);
          });
      });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contato" ref={ref} className="relative pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#e8341a]/25 to-transparent" />

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="absolute inset-0 rounded-full border opacity-[0.04]"
                 style={{
                   borderColor: i % 2 === 0 ? '#00e5ff' : '#e8341a',
                   transform: `scale(${0.3 + i * 0.25})`,
                   animation: `orbitSlow ${15 + i * 8}s linear ${i % 2 === 0 ? '' : 'reverse'} infinite`,
                 }} />
          ))}
        </div>
        {/* Gradient blobs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-[80px]"
             style={{ background: 'rgba(0,229,255,0.04)' }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-[80px]"
             style={{ background: 'rgba(232,52,26,0.04)' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-in flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-4 h-4 text-[#00e5ff]" />
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#00e5ff]">
            Vamos começar
          </span>
          <Sparkles className="w-4 h-4 text-[#00e5ff]" />
        </div>

        <h2 className="animate-in font-display font-black text-4xl md:text-5xl xl:text-6xl text-white leading-[1.05] mb-6">
          Sua empresa merece um{' '}
          <br className="hidden md:block" />
          site que{' '}
          <span className="text-gradient-cyan glow-text-cyan">realmente vende</span>
        </h2>

        <p className="animate-in text-slate-400 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Mais visibilidade. Mais clientes. Mais vendas. Tudo isso começa com
          uma presença digital feita por quem entende do negócio.
        </p>

        {/* Main CTA */}
        <div className="animate-in mb-10">
          <a
            href="https://wa.me/554898026299"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group relative inline-flex items-center gap-3 px-12 py-5 rounded-2xl font-bold text-lg text-[#080808] overflow-hidden transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #00e5ff 0%, #00b4d8 100%)',
              boxShadow: hovered
                ? '0 0 60px rgba(0,229,255,0.5), 0 20px 40px rgba(0,0,0,0.3)'
                : '0 0 30px rgba(0,229,255,0.25)',
              transform: hovered ? 'translateY(-2px) scale(1.02)' : '',
            }}
          >
            <MessageCircle className="w-5 h-5" />
            <span>Falar no WhatsApp agora</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 shimmer-btn" />
          </a>
          <p className="text-slate-600 text-xs mt-3">
            Resposta em menos de 1 hora no horário comercial
          </p>
        </div>

        {/* Alternative contacts */}
        <div className="animate-in flex flex-wrap justify-center gap-4 mb-16">
          <a href="#"
             className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium text-slate-400 glass card-hover">
            <Mail className="w-4 h-4 text-[#00e5ff]" />
            contato@shiftx.com.br
          </a>
          <a href="https://wa.me/554898026299"
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium text-slate-400 glass card-hover">
            <Phone className="w-4 h-4 text-[#e8341a]" />
            (48) 99802-6299
          </a>
        </div>

        {/* Final tagline */}
        <div className="animate-in">
          <div className="relative inline-block">
            <div className="glass-cyan rounded-2xl px-8 py-5">
              <p className="text-white font-bold text-base md:text-lg">
                "Seu cliente está online agora.{' '}
                <span className="text-[#00e5ff]">A pergunta é: ele te encontra?</span>"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="font-display font-black text-xl"
                  style={{ color: '#00e5ff', textShadow: '0 0 15px rgba(0,229,255,0.5)' }}>
              SHIFT
            </span>
            <span className="font-display font-black text-xl"
                  style={{ color: '#e8341a', textShadow: '0 0 10px rgba(232,52,26,0.4)' }}>
              X
            </span>
            <span className="ml-1.5 text-[10px] font-medium text-slate-600 uppercase tracking-widest">
              Tecnologia e Inovação
            </span>
          </div>

          <div className="text-slate-600 text-xs">
            © 2026 SHIFT X. Transformando negócios com tecnologia.
          </div>

          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-slate-500 text-xs">Disponível para novos projetos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
