import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Tag, X } from 'lucide-react';

/* ────────── Mini-website mockup renderers ────────── */

function ProdutosBelezaMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      <img src="/produtos_beleza.jpeg" alt="Produtos de Beleza" className="w-full h-full object-cover" />
    </div>
  );
}

function EdifiqueMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      <img src="/edifique.jpeg" alt="Edifique" className="w-full h-full object-cover" />
    </div>
  );
}

function ProtetoresMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      <img src="/protetores.jpeg" alt="Protetores" className="w-full h-full object-cover" />
    </div>
  );
}

function AgropecuariaMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      <img src="/agro.jpeg" alt="Agropecuária" className="w-full h-full object-cover" />
    </div>
  );
}

function CamarimMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      <img src="/camarim_store.jpeg" alt="Camarim Store" className="w-full h-full object-cover" />
    </div>
  );
}

/* ────────── Browser frame wrapper ────────── */
function BrowserFrame({ children, url }: { children: React.ReactNode; url: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/8 shadow-2xl"
         style={{ background: '#1a1a1a' }}>
      {/* Chrome */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-white/6 bg-[#242424]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 flex items-center gap-1.5 px-2.5 py-1 bg-[#1a1a1a] rounded text-[9px] text-slate-500 font-mono">
          <div className="w-2 h-2 rounded-full border border-slate-600" />
          {url}
        </div>
      </div>
      {/* Content */}
      <div className="h-[220px] overflow-hidden">
        {children}
      </div>
    </div>
  );
}

/* ────────── Portfolio cards data ────────── */
const portfolioItems = [
  {
    id: 6,
    name: 'Camarim Store',
    segment: 'Moda & Acessórios',
    nav: 'Menu Lateral',
    tag: 'Catálogo',
    tagColor: '#FFD700',
    mockup: CamarimMockup,
    desc: 'Loja virtual elegante com catálogo de perfumes e acessórios, design premium com detalhes dourados.',
    url: 'camarimstore.com.br',
    imageUrl: '/camarim_store.jpeg',
  },
  {
    id: 7,
    name: 'Agropecuária',
    segment: 'Agropecuária',
    nav: 'Menu Superior',
    tag: 'Catálogo',
    tagColor: '#001f5f',
    mockup: AgropecuariaMockup,
    desc: 'Catálogo agropecuário completo com mais de 1.500 produtos, categorias organizadas e pedido via WhatsApp.',
    url: 'pouparagro.com.br',
    imageUrl: '/agro.jpeg',
  },
  {
    id: 8,
    name: 'Produtos de Beleza',
    segment: 'Perfumaria e Cosméticos',
    nav: 'Menu Lateral',
    tag: 'Catálogo',
    tagColor: '#e83e8c',
    mockup: ProdutosBelezaMockup,
    desc: 'Catálogo de produtos de beleza com foco em perfumes, skincare e maquiagem, com navegação por categorias e contato direto com a vendedora.',
    url: 'produtosdebeleza.com.br',
    imageUrl: '/produtos_beleza.jpeg',
  },
  {
    id: 9,
    name: 'Edifique',
    segment: 'Construção Civil',
    nav: 'Menu Superior',
    tag: 'Catálogo',
    tagColor: '#64748b',
    mockup: EdifiqueMockup,
    desc: 'Catálogo de materiais de construção com produtos para obras e reformas, com navegação intuitiva e contato direto.',
    url: 'edifiqueconstrucoes.com.br',
    imageUrl: '/edifique.jpeg',
  },
  {
    id: 10,
    name: 'Protetores',
    segment: 'Segurança Industrial',
    nav: 'Menu Superior',
    tag: 'Catálogo',
    tagColor: '#f97316',
    mockup: ProtetoresMockup,
    desc: 'Catálogo de equipamentos de proteção individual (EPIs) e segurança industrial, com produtos para ambientes de trabalho.',
    url: 'protetoresseguranca.com.br',
    imageUrl: '/protetores.jpeg',
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.animate-in').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120);
          });
      });
    }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const visible = portfolioItems;

  return (
    <section ref={ref} id="portfolio" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#e8341a]/20 to-transparent" />
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px]"
           style={{ background: 'radial-gradient(circle, rgba(232,52,26,0.04) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="animate-in flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#e8341a]/50" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#e8341a]">Portfólio</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#e8341a]/50" />
          </div>
          <h2 className="animate-in font-display font-black text-3xl md:text-4xl xl:text-5xl text-white leading-tight mb-4">
            Modelos que{' '}
            <span className="text-gradient-red">vendem</span>{' '}
            e impressionam
          </h2>
          <p className="animate-in text-slate-400 text-lg max-w-xl mx-auto mb-8">
            Cada projeto é único. Veja como criamos experiências digitais para diferentes segmentos.
          </p>

          {/* Filter tabs - hidden */}
          {/* <div className="animate-in flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button key={f}
                      onClick={() => setFilter(f)}
                      className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
                      style={{
                        background: filter === f ? 'rgba(232,52,26,0.15)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${filter === f ? 'rgba(232,52,26,0.4)' : 'rgba(255,255,255,0.07)'}`,
                        color: filter === f ? '#ff6b35' : '#94a3b8',
                      }}>
                {f}
              </button>
            ))}
          </div> */}
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {visible.map(({ id, name, segment, nav, tag, tagColor, mockup: Mockup, desc, url, imageUrl }, i) => (
            <div key={id}
                 className={`animate-in stagger-${(i % 3) + 1} portfolio-card group relative rounded-2xl overflow-hidden border border-white/6 transition-all duration-400 cursor-default`}
                 onMouseEnter={(e) => {
                   (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                   (e.currentTarget as HTMLElement).style.borderColor = `${tagColor}30`;
                   (e.currentTarget as HTMLElement).style.boxShadow = `0 24px 50px rgba(0,0,0,0.5), 0 0 40px ${tagColor}12`;
                 }}
                 onMouseLeave={(e) => {
                   (e.currentTarget as HTMLElement).style.transform = '';
                   (e.currentTarget as HTMLElement).style.borderColor = '';
                   (e.currentTarget as HTMLElement).style.boxShadow = '';
                 }}>

              {/* Browser mockup */}
              <div className="mockup-scale origin-top">
                <BrowserFrame url={url}>
                  <Mockup />
                </BrowserFrame>
              </div>

              {/* Hover overlay */}
              <div className="mockup-overlay absolute top-0 left-0 right-0"
                   style={{ height: 'calc(220px + 2.5rem)' }}>
                <div className="absolute inset-0 flex items-center justify-center"
                     style={{ background: `linear-gradient(135deg, ${tagColor}20, rgba(0,0,0,0.8))` }}>
                  <button onClick={() => setExpandedImage(imageUrl)}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white cursor-pointer hover:scale-105 transition-transform"
                          style={{ background: tagColor, boxShadow: `0 0 20px ${tagColor}50` }}>
                    <ExternalLink className="w-4 h-4" />
                    Ver Detalhes
                  </button>
                </div>
              </div>

              {/* Card info */}
              <div className="p-5 bg-[#0d0d0d] border-t border-white/5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-display font-bold text-white text-base">{name}</h3>
                    <p className="text-slate-500 text-xs">{segment}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold"
                          style={{ background: `${tagColor}15`, color: tagColor, border: `1px solid ${tagColor}30` }}>
                      {tag}
                    </span>
                    <div className="flex items-center gap-1 text-[9px] text-slate-500">
                      <Tag className="w-2.5 h-2.5" />
                      {nav}
                    </div>
                  </div>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image modal */}
      {expandedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
             onClick={() => setExpandedImage(null)}>
          <button className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedImage(null);
                  }}>
            <X className="w-6 h-6 text-white" />
          </button>
          <img src={expandedImage} alt="Imagem ampliada" className="max-w-full max-h-full object-contain" />
        </div>
      )}
    </section>
  );
}
