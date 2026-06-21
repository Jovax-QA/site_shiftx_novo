import { useEffect, useRef } from 'react';
import { ExternalLink, Tag } from 'lucide-react';

/* ────────── Mini-website mockup renderers ────────── */

function ProdutosBelezaMockup() {
  return (
    <div className="w-full h-full flex bg-[#fafafa] overflow-hidden">
      {/* Sidebar */}
      <div className="w-28 flex-shrink-0 bg-white border-r border-pink-100 flex flex-col shadow-sm">
        <div className="p-3 border-b border-pink-100">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 mx-auto mb-2 flex items-center justify-center">
            <span className="text-xl">👩</span>
          </div>
          <div className="text-[8px] font-black text-[#e83e8c] text-center tracking-wide">PRODUTOS</div>
          <div className="text-[7px] text-[#e83e8c] text-center font-semibold">DE BELEZA</div>
        </div>
        <nav className="flex-1 py-2">
          {['💖 Perfumes', '✨ Skincare', '💇 Cabelos', '🧴 Cuidados Pessoais', '🧼 Sabonetes', '🌸 Desodorantes'].map((item, i) => (
            <div key={item} className={`px-3 py-1.5 text-[7.5px] cursor-default flex items-center gap-1 ${
              i === 0 ? 'bg-[#e83e8c]/10 text-[#e83e8c] font-semibold border-l-2 border-[#e83e8c]' : 'text-slate-500'
            }`}>
              {item}
            </div>
          ))}
        </nav>
        <div className="p-2 border-t border-pink-100">
          <div className="px-2 py-1.5 bg-[#e83e8c] rounded text-[7px] font-bold text-white text-center">
            WhatsApp
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-gradient-to-br from-pink-50/50 to-white">
        <div className="px-3 py-2 bg-white border-b border-pink-100 flex items-center justify-between">
          <div className="text-[8px] text-[#e83e8c] font-bold">Perfumes — Destaques</div>
          <div className="text-[7px] text-slate-400">Consultar Formas de Pagamento</div>
        </div>
        <div className="flex-1 p-3 overflow-hidden">
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: 'Elegance Rose', price: 'R$ 189', icon: '🌹' },
              { name: 'Floral Bliss', price: 'R$ 159', icon: '🌸' },
              { name: 'Vanilla Dream', price: 'R$ 129', icon: '🍦' },
              { name: 'Ocean Mist', price: 'R$ 149', icon: '🌊' },
            ].map((item) => (
              <div key={item.name} className="p-2 bg-white rounded-lg border border-pink-100 shadow-sm">
                <div className="h-12 bg-gradient-to-br from-pink-100 to-pink-50 rounded mb-2 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div className="text-[8px] text-slate-700 font-semibold">{item.name}</div>
                <div className="text-[8px] text-[#e83e8c] font-bold mb-1">{item.price}</div>
                <div className="px-2 py-1 text-[7px] font-bold text-white text-center rounded"
                     style={{ background: '#e83e8c' }}>
                  Falar com vendedora
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AgropecuariaMockup() {
  return (
    <div className="w-full h-full flex flex-col bg-[#111] overflow-hidden">
      {/* Top nav */}
      <nav className="px-3 py-2 bg-[#001f5f] border-b border-white/6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#e8341a] flex items-center justify-center">
            <span className="text-[7px] font-black text-white">P</span>
          </div>
          <span className="text-[9px] font-black text-white">POUPAR</span>
        </div>
        <div className="flex gap-4 text-[8px] text-slate-200">
          <span>Início</span><span>Agropecuária</span><span>Contato</span>
        </div>
        <div className="px-3 py-1 text-[8px] font-bold text-white rounded"
             style={{ background: '#28a745' }}>
          Fale Conosco
        </div>
      </nav>
      {/* Hero */}
      <div className="relative px-5 py-4 flex-shrink-0"
           style={{ background: 'linear-gradient(135deg, #001f5f, #003366)' }}>
        <div className="text-[8px] text-[#e8341a] mb-1 tracking-widest font-semibold">AGRO COMERCIAL</div>
        <div className="font-bold text-sm text-white leading-tight mb-2">Temos tudo<br />que você precisa.</div>
        <div className="flex gap-2">
          <div className="px-2.5 py-1 text-[8px] font-bold text-white rounded"
               style={{ background: '#28a745' }}>
            Pedir pelo WhatsApp
          </div>
          <div className="px-2.5 py-1 text-[8px] text-white rounded border border-white/50">
            Ver catálogo
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="flex-1 p-3 overflow-hidden">
        <div className="grid grid-cols-3 gap-1.5">
          <div className="px-2.5 py-2 bg-[#001f5f] border border-[#003366]/15 rounded text-[8px] text-slate-300 flex flex-col items-center justify-center">
            <div className="text-sm font-bold text-white">+1.500</div>
            <div className="text-[7px] text-slate-400">PRODUTOS</div>
          </div>
          <div className="px-2.5 py-2 bg-[#001f5f] border border-[#003366]/15 rounded text-[8px] text-slate-300 flex flex-col items-center justify-center">
            <div className="text-sm font-bold text-white">4</div>
            <div className="text-[7px] text-slate-400">CATEGORIAS</div>
          </div>
          <div className="px-2.5 py-2 bg-[#001f5f] border border-[#003366]/15 rounded text-[8px] text-slate-300 flex flex-col items-center justify-center">
            <div className="text-sm font-bold text-white">24h</div>
            <div className="text-[7px] text-slate-400">ENTREGA</div>
          </div>
        </div>
        {/* Categories */}
        <div className="mt-3">
          <div className="text-[8px] text-slate-400 font-semibold mb-2 tracking-wider">CATEGORIAS</div>
          <div className="grid grid-cols-2 gap-1.5">
            {[
              { name: 'Sementes', icon: '🌱' },
              { name: 'Fertilizantes', icon: '🧪' },
              { name: 'Defensivos', icon: '🛡️' },
              { name: 'Máquinas', icon: '🚜' },
            ].map((cat) => (
              <div key={cat.name} className="px-2.5 py-2 bg-[#001f5f] border border-[#003366]/15 rounded text-[8px] text-slate-300 flex items-center gap-1.5">
                <span className="text-sm">{cat.icon}</span>
                {cat.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CamarimMockup() {
  return (
    <div className="w-full h-full flex bg-[#0a0a0a] overflow-hidden">
      {/* Sidebar */}
      <div className="w-24 flex-shrink-0 bg-[#0d0d0d] border-r border-white/6 flex flex-col">
        <div className="p-3 border-b border-white/6">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-lg">👑</span>
            <span className="text-[9px] font-black text-white tracking-wide">CAMARIM</span>
          </div>
          <div className="text-[7px] text-slate-500">STORE</div>
        </div>
        <nav className="flex-1 py-2">
          {['🌸 Perfumes', '💧 Body Splash', '👗 Roupas', '💎 Acessórios', '🎁 Presentes'].map((item, i) => (
            <div key={item} className={`px-3 py-1.5 text-[7px] cursor-default flex items-center gap-1.5 ${
              i === 0 ? 'bg-[#FFD700]/10 text-[#FFD700] font-semibold border-r-2 border-[#FFD700]' : 'text-slate-400'
            }`}>
              {item}
            </div>
          ))}
        </nav>
        <div className="p-2 border-t border-white/6">
          <div className="px-2 py-1.5 text-[7px] font-bold text-black text-center rounded"
               style={{ background: '#FFD700' }}>
            🛒 Carrinho
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="px-3 py-2 bg-[#0f0f0f] border-b border-white/6 flex items-center justify-between">
          <div className="text-[8px] text-slate-300 font-semibold">Perfumes — Catálogo</div>
          <div className="flex gap-1">
            <div className="px-2 py-0.5 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded text-[7px] text-[#FFD700]">Filtrar</div>
          </div>
        </div>
        <div className="flex-1 p-2 overflow-hidden">
          <div className="grid grid-cols-2 gap-1.5">
            {[
              { name: 'Elixir Royal', code: 'PER-001', price: 'R$ 189', icon: '🌸' },
              { name: 'Gold Essence', code: 'PER-002', price: 'R$ 249', icon: '✨' },
              { name: 'Midnight Rose', code: 'PER-003', price: 'R$ 159', icon: '🌹' },
              { name: 'Ocean Breeze', code: 'PER-004', price: 'R$ 129', icon: '🌊' },
            ].map((item) => (
              <div key={item.name} className="p-1.5 bg-[#0f0f0f] rounded border border-white/5">
                <div className="h-10 bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/5 rounded mb-1 flex items-center justify-center text-lg">
                  {item.icon}
                </div>
                <div className="text-[7px] text-white font-medium leading-tight">{item.name}</div>
                <div className="text-[6px] text-slate-500 mb-0.5">{item.code}</div>
                <div className="text-[7px] text-[#FFD700] font-bold">{item.price}</div>
                <div className="mt-1 px-1.5 py-0.5 text-[6px] font-bold text-black text-center rounded"
                     style={{ background: '#FFD700' }}>
                  Tenho Interesse
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);

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
          {visible.map(({ id, name, segment, nav, tag, tagColor, mockup: Mockup, desc, url }, i) => (
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
                  <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white"
                       style={{ background: tagColor, boxShadow: `0 0 20px ${tagColor}50` }}>
                    <ExternalLink className="w-4 h-4" />
                    Ver Detalhes
                  </div>
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
    </section>
  );
}
