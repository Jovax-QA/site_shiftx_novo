import { useEffect, useRef } from 'react';
import { Globe, ShoppingBag, BookOpen, Smartphone, Zap } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Sites Institucionais',
    desc: 'Presença digital profissional que transmite credibilidade e conquista novos clientes desde o primeiro acesso.',
    color: '#00e5ff',
    tags: ['Responsivo', 'SEO Otimizado', 'Performance'],
  },
  {
    icon: ShoppingBag,
    title: 'Lojas Virtuais',
    desc: 'E-commerce completo com carrinho, pagamentos integrados e painel de gestão para vender 24h por dia.',
    color: '#e8341a',
    tags: ['Pagamento Online', 'Gestão de Estoque', 'Relatórios'],
  },
  {
    icon: BookOpen,
    title: 'Catálogos Digitais',
    desc: 'Catálogos interativos que mostram seus produtos de forma elegante e facilitam o contato via WhatsApp.',
    color: '#22c55e',
    tags: ['WhatsApp Integrado', 'Filtros', 'PDF'],
  },
  {
    icon: Smartphone,
    title: 'Landing Pages',
    desc: 'Páginas de alta conversão para campanhas, lançamentos e captação de leads com foco total em resultados.',
    color: '#a78bfa',
    tags: ['Alta Conversão', 'A/B Testing', 'Analytics'],
  },
  {
    icon: Zap,
    title: 'Identidade Digital',
    desc: 'Do logo ao site, criamos uma presença digital coesa que fortalece sua marca e diferencia dos concorrentes.',
    color: '#f59e0b',
    tags: ['Branding', 'Logo', 'Manual'],
  },
];

export default function Services() {
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
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-[#00e5ff]/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="animate-in flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00e5ff]/50" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#00e5ff]">O que fazemos</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00e5ff]/50" />
          </div>
          <h2 className="animate-in font-display font-black text-3xl md:text-4xl xl:text-5xl text-white leading-tight mb-4">
            Tudo que seu negócio precisa{' '}
            <br className="hidden md:block" />
            para{' '}
            <span className="text-gradient-cyan">brilhar online</span>
          </h2>
          <p className="animate-in text-slate-400 text-lg max-w-xl mx-auto">
            Do conceito ao lançamento, criamos experiências digitais que transformam visitantes em clientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map(({ icon: Icon, title, desc, color, tags }, i) => (
            <div key={title}
                 className={`animate-in stagger-${(i % 5) + 1} glass rounded-2xl p-5 card-hover cursor-default group relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{ background: `radial-gradient(circle at 50% 0%, ${color}08 0%, transparent 70%)` }} />
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                   style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <h3 className="font-display font-bold text-white text-sm mb-2">{title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-3">{desc}</p>
              <div className="flex flex-wrap gap-1">
                {tags.map((tag) => (
                  <span key={tag} className="text-[9px] px-2 py-0.5 rounded-full font-semibold"
                        style={{ background: `${color}10`, color, border: `1px solid ${color}20` }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                   style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
