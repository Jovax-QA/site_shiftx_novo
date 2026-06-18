import { useEffect, useRef } from 'react';
import { TrendingUp, Clock, Star, Users, Globe, Zap } from 'lucide-react';

const stats = [
  { icon: Globe, value: '+300', unit: 'sites', label: 'Projetos entregues', color: '#00e5ff' },
  { icon: Users, value: '+180', unit: 'clientes', label: 'Empresas atendidas', color: '#e8341a' },
  { icon: Clock, value: '48h', unit: '', label: 'Primeiro protótipo', color: '#22c55e' },
  { icon: TrendingUp, value: '3.2x', unit: '', label: 'Aumento médio em conversão', color: '#f59e0b' },
  { icon: Star, value: '4.9', unit: '/5', label: 'Avaliação média dos clientes', color: '#a78bfa' },
  { icon: Zap, value: '98%', unit: '', label: 'Taxa de satisfação', color: '#00e5ff' },
];

const testimonials = [
  {
    name: 'Ricardo Andrade',
    role: 'Diretor Comercial — AgroMarket',
    text: 'Nosso catálogo digital triplicou os pedidos via WhatsApp no primeiro mês. A experiência dos clientes melhorou absurdamente.',
    avatar: 'RA',
    color: '#22c55e',
  },
  {
    name: 'Dra. Camila Ferreira',
    role: 'Dentista — Sorria Dental',
    text: 'Em 30 dias com o novo site, nossa agenda estava lotada. O agendamento online foi um divisor de águas para a clínica.',
    avatar: 'CF',
    color: '#0369a1',
  },
  {
    name: 'João Mendes',
    role: 'Sócio — Silva & Associados',
    text: 'Site elegante, profissional e rápido. Os clientes sempre comentam que encontramos na internet — o que antes era impossível.',
    avatar: 'JM',
    color: '#60a5fa',
  },
];

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.animate-in').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100);
          });
      });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d0d]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/15 to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00e5ff]/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Stats */}
        <div className="text-center mb-16">
          <div className="animate-in flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00e5ff]/50" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#00e5ff]">Resultados</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00e5ff]/50" />
          </div>
          <h2 className="animate-in font-display font-black text-3xl md:text-4xl xl:text-5xl text-white leading-tight">
            Números que{' '}
            <span className="text-gradient-cyan">provam</span>{' '}
            nossa entrega
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {stats.map(({ icon: Icon, value, unit, label, color }, i) => (
            <div key={label}
                 className={`animate-in stagger-${(i % 3) + 1} glass rounded-2xl p-5 text-center card-hover`}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mx-auto mb-3"
                   style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
                <Icon className="w-4 h-4" style={{ color }} />
              </div>
              <div className="font-display font-black text-2xl text-white">
                {value}<span className="text-base" style={{ color }}>{unit}</span>
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5 leading-tight">{label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-10">
          <h3 className="animate-in font-display font-bold text-2xl text-white mb-2">
            O que dizem nossos clientes
          </h3>
          <p className="animate-in text-slate-500 text-sm">Resultados reais de negócios reais.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map(({ name, role, text, avatar, color }, i) => (
            <div key={name}
                 className={`animate-in stagger-${i + 1} glass rounded-2xl p-6 border border-white/5 card-hover relative overflow-hidden`}>
              <div className="absolute top-0 left-0 right-0 h-0.5"
                   style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />

              {/* Quote mark */}
              <div className="text-4xl font-black leading-none mb-3 opacity-20" style={{ color }}>
                "
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-4 italic">"{text}"</p>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm"
                     style={{ background: `${color}20`, color, border: `1px solid ${color}30` }}>
                  {avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{name}</div>
                  <div className="text-slate-500 text-xs">{role}</div>
                </div>
              </div>

              {/* Stars */}
              <div className="absolute top-4 right-4 text-[#f59e0b] text-xs">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
