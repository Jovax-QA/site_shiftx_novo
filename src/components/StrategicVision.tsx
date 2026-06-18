import { useEffect, useRef } from 'react';
import { Check, X as XIcon } from 'lucide-react';

const differentials = [
  { title: 'Design exclusivo', desc: 'Cada site é criado do zero. Nenhum template genérico.' },
  { title: 'Entrega em dias', desc: 'Prototipagem em 48h. Lançamento em até 2 semanas.' },
  { title: 'Foco em conversão', desc: 'Cada elemento pensado para transformar visitante em cliente.' },
  { title: 'Suporte humano', desc: 'WhatsApp direto com o desenvolvedor. Sem robô.' },
  { title: 'SEO desde o código', desc: 'Otimizado para aparecer no Google desde o primeiro dia.' },
  { title: 'Mobile first', desc: '80% dos acessos são pelo celular. Entregamos perfeito em todos.' },
];

const comparisons = [
  { item: 'Design personalizado', sx: true, free: false, agency: true },
  { item: 'Entrega em 48h de protótipo', sx: true, free: false, agency: false },
  { item: 'SEO otimizado', sx: true, free: false, agency: true },
  { item: 'Suporte contínuo incluído', sx: true, free: false, agency: false },
  { item: 'Sem mensalidade forçada', sx: true, free: false, agency: false },
  { item: 'Integração WhatsApp', sx: true, free: true, agency: true },
];

export default function WhyShiftX() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.animate-in').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100);
          });
      });
    }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d0d]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="animate-in flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00e5ff]/50" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#00e5ff]">Diferenciais</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00e5ff]/50" />
          </div>
          <h2 className="animate-in font-display font-black text-3xl md:text-4xl xl:text-5xl text-white leading-tight mb-4">
            Por que escolher a{' '}
            <span className="text-gradient-cyan">SHIFT</span>
            <span className="text-gradient-red">X</span>?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: differentials */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4">
              {differentials.map(({ title, desc }, i) => (
                <div key={title}
                     className={`animate-in stagger-${(i % 2) + 1} glass rounded-xl p-4 card-hover`}>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-[#00e5ff]/10 border border-[#00e5ff]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#00e5ff]" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm mb-0.5">{title}</div>
                      <div className="text-slate-500 text-xs leading-relaxed">{desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: comparison table */}
          <div className="animate-in">
            <div className="glass rounded-2xl overflow-hidden border border-white/6">
              <div className="grid grid-cols-4 px-4 py-3 bg-white/3 border-b border-white/5">
                <div className="text-xs text-slate-400 font-semibold">Recurso</div>
                <div className="text-center">
                  <div className="text-xs font-black" style={{ color: '#00e5ff' }}>
                    SHIFT<span style={{ color: '#e8341a' }}>X</span>
                  </div>
                </div>
                <div className="text-center text-xs text-slate-500 font-medium">Criador grátis</div>
                <div className="text-center text-xs text-slate-500 font-medium">Agência trad.</div>
              </div>

              {comparisons.map(({ item, sx, free, agency }, i) => (
                <div key={item}
                     className={`grid grid-cols-4 px-4 py-3 border-b border-white/4 last:border-0 ${
                       i % 2 === 0 ? '' : 'bg-white/[0.01]'
                     }`}>
                  <div className="text-xs text-slate-300 flex items-center">{item}</div>
                  {[sx, free, agency].map((val, j) => (
                    <div key={j} className="flex items-center justify-center">
                      {val
                        ? <div className="w-5 h-5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 flex items-center justify-center">
                            <Check className="w-3 h-3 text-[#00e5ff]" />
                          </div>
                        : <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                            <XIcon className="w-3 h-3 text-red-500" />
                          </div>
                      }
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <p className="text-center text-slate-600 text-xs mt-3">
              Comparação baseada em critérios de qualidade e entrega.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
