import { useEffect, useRef } from 'react';
import { MessageSquare, Palette, Code2, Rocket, LifeBuoy } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Briefing & Estratégia',
    desc: 'Entendemos seu negócio, público e objetivos. Definimos a estratégia de conteúdo, navegação e conversão.',
    duration: '1 dia',
    color: '#00e5ff',
    detail: ['Reunião de alinhamento', 'Análise da concorrência', 'Definição de personas', 'Mapa de navegação'],
  },
  {
    icon: Palette,
    number: '02',
    title: 'Design & Prototipagem',
    desc: 'Criamos o design visual completo do site com foco em identidade, usabilidade e conversão.',
    duration: '2-3 dias',
    color: '#a78bfa',
    detail: ['Wireframes', 'Design System', 'Protótipo interativo', 'Aprovação do cliente'],
  },
  {
    icon: Code2,
    number: '03',
    title: 'Desenvolvimento',
    desc: 'Construímos o site com tecnologia moderna, responsivo e otimizado para performance e SEO.',
    duration: '3-7 dias',
    color: '#22c55e',
    detail: ['Código limpo', 'Mobile first', 'SEO técnico', 'Velocidade máxima'],
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Revisão & Lançamento',
    desc: 'Revisamos todos os detalhes juntos, ajustamos o que for necessário e publicamos o site.',
    duration: '1-2 dias',
    color: '#e8341a',
    detail: ['Testes completos', 'Ajustes finais', 'Domínio e hospedagem', 'Go live!'],
  },
  {
    icon: LifeBuoy,
    number: '05',
    title: 'Suporte Contínuo',
    desc: 'Acompanhamos sua performance, fazemos atualizações e estamos disponíveis quando precisar.',
    duration: 'Ongoing',
    color: '#f59e0b',
    detail: ['Suporte via WhatsApp', 'Atualizações de conteúdo', 'Relatórios mensais', 'Evoluções do site'],
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.animate-in').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120);
          });
      });
    }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#a78bfa]/20 to-transparent" />
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03]"
           style={{ background: 'radial-gradient(circle, #a78bfa, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="animate-in flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#a78bfa]/50" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#a78bfa]">Como funciona</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#a78bfa]/50" />
          </div>
          <h2 className="animate-in font-display font-black text-3xl md:text-4xl xl:text-5xl text-white leading-tight mb-4">
            Do briefing ao{' '}
            <span style={{ color: '#a78bfa' }}>lançamento</span>{' '}
            em tempo recorde
          </h2>
          <p className="animate-in text-slate-400 text-lg max-w-xl mx-auto">
            Processo ágil, transparente e colaborativo. Você acompanha cada etapa e aprova antes de avançar.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[8.33%] right-[8.33%] h-px"
               style={{ background: 'linear-gradient(90deg, #00e5ff, #a78bfa, #22c55e, #e8341a, #f59e0b)' }} />

          <div className="grid lg:grid-cols-5 gap-5">
            {steps.map(({ icon: Icon, number, title, desc, duration, color, detail }, i) => (
              <div key={title}
                   className={`animate-in stagger-${i + 1} group relative flex flex-col items-center text-center lg:text-left lg:items-start`}>
                {/* Step node */}
                <div className="relative w-[72px] h-[72px] flex items-center justify-center mb-5 z-10">
                  <div className="w-full h-full rounded-2xl flex items-center justify-center"
                       style={{ background: `${color}15`, border: `2px solid ${color}40` }}>
                    <Icon className="w-6 h-6" style={{ color }} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black bg-[#080808] border-2"
                       style={{ borderColor: color, color }}>
                    {i + 1}
                  </div>
                </div>

                {/* Duration badge */}
                <div className="mb-2 px-2.5 py-0.5 rounded-full text-[9px] font-bold"
                     style={{ background: `${color}12`, color, border: `1px solid ${color}25` }}>
                  {duration}
                </div>

                <h3 className="font-display font-bold text-white text-sm mb-1.5 px-1">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-3 px-1">{desc}</p>

                {/* Detail list */}
                <div className="w-full glass rounded-xl p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {detail.map((d) => (
                    <div key={d} className="flex items-center gap-1.5 text-xs text-slate-400 py-0.5">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: color }} />
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="animate-in mt-14 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl"
               style={{
                 background: 'linear-gradient(135deg, rgba(0,229,255,0.06), rgba(168,139,250,0.06))',
                 border: '1px solid rgba(0,229,255,0.12)',
               }}>
            <div>
              <div className="font-display font-black text-white text-lg mb-0.5">
                Pronto para começar?
              </div>
              <div className="text-slate-400 text-sm">
                Primeiro protótipo em 48 horas. Sem burocracia.
              </div>
            </div>
            <button className="px-6 py-3 rounded-xl font-bold text-sm text-[#080808] flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #00e5ff, #00b4d8)' }}>
              Iniciar Projeto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
