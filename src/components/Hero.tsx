import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const orbitItems = [
  { label: 'E-commerce', angle: 0, radius: 0, ring: 1 },
  { label: 'Landing Page', angle: 180, radius: 0, ring: 1 },
  { label: 'Institucional', angle: 60, radius: 0, ring: 2 },
  { label: 'Catálogo', angle: 240, radius: 0, ring: 2 },
  { label: 'Gestão de tráfego pago', angle: 120, radius: 0, ring: 3 },
  { label: 'Gestão de tráfego orgânico', angle: 300, radius: 0, ring: 3 },
];

const ringConfig = [
  { size: 200, speed: 14, color: 'rgba(0,229,255,0.18)', dotColor: '#00e5ff', dotCount: 4 },
  { size: 290, speed: 20, color: 'rgba(0,229,255,0.10)', dotColor: '#00b4d8', dotCount: 6 },
  { size: 380, speed: 28, color: 'rgba(232,52,26,0.08)', dotColor: '#e8341a', dotCount: 8 },
];

function UniverseOrb() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 50);
    return () => clearInterval(id);
  }, []);

  const t = tick * 0.04;

  return (
    <div className="relative w-[420px] h-[420px] flex items-center justify-center select-none">
      {/* Outer glow backdrop */}
      <div className="absolute inset-0 rounded-full"
           style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 65%)' }} />

      {/* Rings */}
      {ringConfig.map((ring, ri) => {
        const half = ring.size / 2;
        return (
          <div key={ri} className="absolute inset-0 flex items-center justify-center">
            <div
              className="rounded-full border absolute"
              style={{
                width: ring.size,
                height: ring.size,
                borderColor: ring.color,
                transform: `rotate(${t * (ri % 2 === 0 ? 1 : -1) * (14 / ring.speed)}rad)`,
              }}
            >
              {Array.from({ length: ring.dotCount }).map((_, di) => {
                const baseAngle = (di * 360) / ring.dotCount;
                const rad = (baseAngle * Math.PI) / 180;
                const x = half + (half - 5) * Math.cos(rad);
                const y = half + (half - 5) * Math.sin(rad);
                return (
                  <div key={di} className="absolute rounded-full"
                       style={{
                         width: ri === 0 ? 6 : ri === 1 ? 4 : 3,
                         height: ri === 0 ? 6 : ri === 1 ? 4 : 3,
                         background: ring.dotColor,
                         left: x - (ri === 0 ? 3 : 2),
                         top: y - (ri === 0 ? 3 : 2),
                         boxShadow: `0 0 ${ri === 0 ? 8 : 5}px ${ring.dotColor}`,
                       }}
                  />
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Orbit chips */}
      {orbitItems.map(({ label, angle, ring }, i) => {
        const cfg = ringConfig[ring - 1];
        const speed = ring === 1 ? 14 : ring === 2 ? 20 : 28;
        const dir = ring % 2 === 0 ? -1 : 1;
        const currentAngle = (angle * Math.PI) / 180 + t * dir * (14 / speed);
        const r = cfg.size / 2;
        const x = r * Math.cos(currentAngle);
        const y = r * Math.sin(currentAngle);
        const isCyan = ring !== 3;
        return (
          <div
            key={i}
            className="absolute flex items-center justify-center"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              zIndex: 10,
            }}
          >
            <div
              className="px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap"
              style={{
                background: isCyan ? 'rgba(0,229,255,0.08)' : 'rgba(232,52,26,0.08)',
                border: `1px solid ${isCyan ? 'rgba(0,229,255,0.3)' : 'rgba(232,52,26,0.3)'}`,
                color: isCyan ? '#00e5ff' : '#ff6b35',
                backdropFilter: 'blur(8px)',
                boxShadow: `0 0 12px ${isCyan ? 'rgba(0,229,255,0.15)' : 'rgba(232,52,26,0.15)'}`,
              }}
            >
              {label}
            </div>
          </div>
        );
      })}

      {/* Core sphere */}
      <div className="relative w-28 h-28 rounded-full flex items-center justify-center z-20"
           style={{
             background: 'radial-gradient(circle at 35% 35%, rgba(0,229,255,0.25), rgba(0,100,180,0.1) 60%, transparent)',
             border: '1px solid rgba(0,229,255,0.35)',
             boxShadow: '0 0 30px rgba(0,229,255,0.25), 0 0 80px rgba(0,229,255,0.08), inset 0 0 30px rgba(0,229,255,0.05)',
           }}>
        {/* Scanline effect */}
        <div className="absolute inset-0 rounded-full overflow-hidden opacity-30">
          <div className="w-full h-8 bg-gradient-to-b from-transparent via-[#00e5ff]/20 to-transparent animate-scanline absolute" />
        </div>

        <div className="w-16 h-16 rounded-full flex items-center justify-center"
             style={{
               background: 'linear-gradient(135deg, #00e5ff 0%, #0077b6 100%)',
               boxShadow: '0 0 25px rgba(0,229,255,0.5)',
             }}>
          <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
            {/* X mark */}
            <path d="M14 14 L34 34" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M34 14 L14 34" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
            {/* Corner brackets */}
            <path d="M8 14 L8 8 L14 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
            <path d="M40 14 L40 8 L34 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
            <path d="M8 34 L8 40 L14 40" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
            <path d="M40 34 L40 40 L34 40" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Pulse rings */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="absolute rounded-full border border-[#00e5ff]/10"
             style={{
               width: 140 + i * 30,
               height: 140 + i * 30,
               animation: `pulseGlow ${2 + i * 0.8}s ease-in-out ${i * 0.4}s infinite`,
             }} />
      ))}
    </div>
  );
}

const stats = [
  { value: '+300', label: 'Projetos entregues' },
  { value: '98%', label: 'Clientes satisfeitos' },
  { value: '3x', label: 'Mais conversão' },
  { value: '48h', label: 'Primeiro protótipo' },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll('.animate-in');
    items.forEach((item, i) => {
      setTimeout(() => item.classList.add('visible'), 100 + i * 130);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-10" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute inset-0"
           style={{
             background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(0,229,255,0.05) 0%, transparent 60%)',
           }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px]"
           style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px]"
           style={{ background: 'radial-gradient(circle, rgba(232,52,26,0.04) 0%, transparent 70%)' }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.025]"
           style={{
             backgroundImage: 'linear-gradient(rgba(0,229,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.5) 1px, transparent 1px)',
             backgroundSize: '60px 60px',
           }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left copy */}
          <div>
            <div className="animate-in flex items-center gap-2.5 mb-6">
              <Sparkles className="w-4 h-4 text-[#00e5ff]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00e5ff]">
                Tecnologia e Inovação
              </span>
              <div className="h-px w-8 bg-[#00e5ff]/50" />
            </div>

            <h1 className="animate-in stagger-1 font-display font-black text-4xl md:text-5xl xl:text-[3.5rem] leading-[1.04] text-white mb-5">
              Alavanque suas{' '}
              <span className="text-gradient-cyan glow-text-cyan">vendas</span>{' '}
              com uma presença digital que{' '}
              <span className="text-gradient-red animate-glitch">domina</span>{' '}
              o mercado
            </h1>

            <p className="animate-in stagger-2 text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              Sites profissionais, catálogos digitais e lojas virtuais que{' '}
              <span className="text-white font-semibold">impressionam</span>,{' '}
              <span className="text-white font-semibold">convertem</span> e{' '}
              <span className="text-white font-semibold">crescem</span>{' '}
              com o seu negócio. Sem complicação. Com resultados.
            </p>

            <div className="animate-in stagger-3 flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#portfolio" className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-[#080808] text-sm relative overflow-hidden"
                 style={{
                   background: 'linear-gradient(135deg, #00e5ff 0%, #00b4d8 100%)',
                   boxShadow: '0 0 30px rgba(0,229,255,0.35)',
                 }}>
                <span className="relative z-10">Ver Portfólio</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 shimmer-btn" />
              </a>

              <a href="#contato" className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm border text-white transition-all duration-200 hover:border-[#00e5ff]/40 hover:bg-[#00e5ff]/3"
                 style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                Falar com especialista
              </a>
            </div>

            {/* Stats row */}
            <div className="animate-in stagger-4 grid grid-cols-4 gap-4 border-t border-white/5 pt-8">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="font-display font-black text-2xl text-white mb-0.5"
                       style={{ textShadow: '0 0 20px rgba(0,229,255,0.3)' }}>
                    {value}
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right orb */}
          <div className="animate-in stagger-2 hidden lg:flex justify-center items-center">
            <UniverseOrb />
          </div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#00e5ff]" />
        <div className="w-1 h-1 rounded-full bg-[#00e5ff] animate-bounce" />
      </div>
    </section>
  );
}
