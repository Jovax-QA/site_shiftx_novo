import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Tag } from 'lucide-react';

/* ────────── Mini-website mockup renderers ────────── */

function ModeStoreMockup() {
  return (
    <div className="w-full h-full flex flex-col bg-[#0a0a0a] text-white overflow-hidden">
      {/* Top nav */}
      <nav className="flex items-center justify-between px-4 py-2.5 border-b border-white/8 bg-[#0f0f0f]">
        <span className="font-bold text-xs tracking-widest text-white">ÉLITE MODA</span>
        <div className="flex gap-4 text-[9px] text-slate-400">
          <span>Feminino</span><span>Masculino</span><span>Acessórios</span><span>Sale</span>
        </div>
        <div className="flex gap-2 text-[9px] text-slate-400 items-center">
          <span>🔍</span><span>♡</span><span>🛍</span>
        </div>
      </nav>
      {/* Hero banner */}
      <div className="relative h-24 flex-shrink-0 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }} />
        <div className="absolute inset-0 flex items-center justify-between px-5">
          <div>
            <div className="text-[8px] text-slate-400 mb-0.5 tracking-widest">NOVA COLEÇÃO 2026</div>
            <div className="font-bold text-sm text-white">Elegância<br />Redefinida</div>
            <div className="mt-1.5 px-3 py-1 bg-white text-black text-[8px] font-bold rounded-full inline-block">
              Ver Coleção
            </div>
          </div>
          <div className="w-16 h-16 rounded-full"
               style={{ background: 'radial-gradient(circle, rgba(255,182,193,0.3), rgba(200,100,150,0.2))' }} />
        </div>
      </div>
      {/* Products grid */}
      <div className="flex-1 p-3 overflow-hidden">
        <div className="text-[8px] text-slate-400 mb-2 font-semibold tracking-wider">DESTAQUES</div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { name: 'Vestido Luxo', price: 'R$ 299', bg: 'from-rose-900/40 to-pink-900/30' },
            { name: 'Blazer Premium', price: 'R$ 459', bg: 'from-slate-800 to-slate-700' },
            { name: 'Bolsa Signature', price: 'R$ 599', bg: 'from-amber-900/40 to-yellow-900/30' },
          ].map((p) => (
            <div key={p.name} className="rounded-lg overflow-hidden">
              <div className={`h-12 bg-gradient-to-br ${p.bg} flex items-center justify-center`}>
                <div className="w-5 h-7 bg-white/10 rounded" />
              </div>
              <div className="p-1 bg-[#111]">
                <div className="text-[7px] text-white font-medium truncate">{p.name}</div>
                <div className="text-[7px] text-rose-400 font-bold">{p.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AgroMockup() {
  return (
    <div className="w-full h-full flex bg-[#0d1a0d] overflow-hidden">
      {/* Sidebar */}
      <div className="w-28 flex-shrink-0 bg-[#0a150a] border-r border-white/5 flex flex-col">
        <div className="p-3 border-b border-white/5">
          <div className="text-[8px] font-black text-[#4ade80] tracking-wide">AGRO</div>
          <div className="text-[7px] text-slate-500">MARKET</div>
        </div>
        <nav className="flex-1 py-2">
          {['🌱 Sementes', '🧪 Defensivos', '🚜 Máquinas', '🌾 Grãos', '💧 Irrigação'].map((item) => (
            <div key={item} className="px-3 py-1.5 text-[8px] text-slate-400 hover:text-white cursor-default flex items-center gap-1.5 first:bg-[#4ade80]/10 first:text-[#4ade80] first:border-r-2 first:border-[#4ade80]">
              {item}
            </div>
          ))}
        </nav>
        <div className="p-2 border-t border-white/5">
          <div className="px-2 py-1.5 bg-[#4ade80] rounded text-[7px] font-bold text-[#0a150a] text-center">
            WhatsApp
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="px-3 py-2 bg-[#0f1f0f] border-b border-white/5 flex items-center justify-between">
          <div className="text-[8px] text-slate-300 font-semibold">Sementes — Catálogo 2026</div>
          <div className="flex gap-1">
            <div className="px-2 py-0.5 bg-[#4ade80]/10 border border-[#4ade80]/20 rounded text-[7px] text-[#4ade80]">Filtrar</div>
          </div>
        </div>
        <div className="flex-1 p-2 overflow-hidden">
          <div className="grid grid-cols-2 gap-1.5">
            {[
              { name: 'Milho Híbrido XP', val: 'R$ 180/sc', badge: 'Top' },
              { name: 'Soja RR Premium', val: 'R$ 220/sc', badge: 'Novo' },
              { name: 'Sorgo BRS 310', val: 'R$ 95/sc', badge: '' },
              { name: 'Feijão Carioca', val: 'R$ 145/sc', badge: 'Oferta' },
            ].map((item) => (
              <div key={item.name} className="p-1.5 bg-[#0f1f0f] rounded border border-white/4">
                <div className="h-7 bg-gradient-to-br from-green-900/40 to-emerald-900/30 rounded mb-1 flex items-center justify-center">
                  <span className="text-sm">🌱</span>
                </div>
                <div className="text-[7px] text-white font-medium leading-tight">{item.name}</div>
                <div className="flex items-center justify-between mt-0.5">
                  <span className="text-[7px] text-[#4ade80] font-bold">{item.val}</span>
                  {item.badge && (
                    <span className="text-[6px] px-1 py-0.5 bg-[#4ade80]/20 text-[#4ade80] rounded-full">{item.badge}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AdvocaciaMockup() {
  return (
    <div className="w-full h-full flex flex-col bg-[#08101e] overflow-hidden">
      {/* Top nav */}
      <nav className="px-4 py-2.5 border-b border-white/6 bg-[#0c1628] flex items-center justify-between">
        <div>
          <div className="text-[9px] font-black text-white tracking-wider">SILVA & ASSOCIADOS</div>
          <div className="text-[7px] text-[#94a3b8] tracking-widest">ADVOCACIA</div>
        </div>
        <div className="flex gap-4 text-[8px] text-slate-400">
          <span>Áreas</span><span>Equipe</span><span>Casos</span><span>Blog</span>
        </div>
        <div className="px-3 py-1 text-[8px] font-bold text-white rounded"
             style={{ background: 'linear-gradient(135deg, #1e40af, #1d4ed8)' }}>
          Consulta
        </div>
      </nav>
      {/* Hero */}
      <div className="relative px-5 py-4 flex-shrink-0"
           style={{ background: 'linear-gradient(135deg, #0c1628, #0f2040)' }}>
        <div className="text-[8px] text-[#60a5fa] mb-1 tracking-widest font-semibold">EXCELÊNCIA JURÍDICA DESDE 1998</div>
        <div className="font-bold text-sm text-white leading-tight mb-2">Defendemos seus<br />direitos com<br /><span className="text-[#60a5fa]">rigor e dedicação</span></div>
        <div className="flex gap-2">
          <div className="px-2.5 py-1 text-[8px] font-bold text-white rounded"
               style={{ background: '#1d4ed8' }}>
            Fale Conosco
          </div>
          <div className="px-2.5 py-1 text-[8px] text-[#60a5fa] rounded border border-[#1d4ed8]/50">
            Nossas Áreas
          </div>
        </div>
      </div>
      {/* Areas */}
      <div className="flex-1 p-3 overflow-hidden">
        <div className="text-[8px] text-slate-400 font-semibold mb-2 tracking-wider">ÁREAS DE ATUAÇÃO</div>
        <div className="grid grid-cols-2 gap-1.5">
          {['⚖️ Trabalhista', '🏠 Imobiliário', '💼 Empresarial', '👨‍👩‍👧 Família'].map((area) => (
            <div key={area} className="px-2.5 py-2 bg-[#0c1628] border border-[#1d4ed8]/15 rounded text-[8px] text-slate-300 flex items-center gap-1.5">
              {area}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DentistaMockup() {
  return (
    <div className="w-full h-full flex bg-[#f0f9ff] overflow-hidden">
      {/* Sidebar */}
      <div className="w-28 flex-shrink-0 bg-white border-r border-slate-100 flex flex-col shadow-sm">
        <div className="p-3 border-b border-slate-100">
          <div className="text-[8px] font-black text-[#0369a1]">✦ SORRIA</div>
          <div className="text-[7px] text-slate-400">Odontologia</div>
        </div>
        <nav className="flex-1 py-2">
          {['🦷 Clareamento', '🔧 Ortodontia', '❤️ Implante', '🌟 Estética', '📋 Consulta'].map((item, i) => (
            <div key={item} className={`px-3 py-1.5 text-[7.5px] cursor-default flex items-center gap-1 ${
              i === 0 ? 'bg-[#0369a1]/8 text-[#0369a1] font-semibold border-l-2 border-[#0369a1]' : 'text-slate-500'
            }`}>
              {item}
            </div>
          ))}
        </nav>
        <div className="p-2 border-t border-slate-100">
          <div className="px-2 py-1.5 bg-[#0369a1] rounded text-[7px] font-bold text-white text-center">
            Agendar
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-[#f0f9ff]">
        <div className="px-3 py-2 bg-white border-b border-slate-100 flex items-center justify-between">
          <div className="text-[8px] text-[#0369a1] font-bold">Clareamento Dental</div>
          <div className="text-[7px] text-slate-400">★★★★★ 4.9</div>
        </div>
        <div className="flex-1 p-3 overflow-hidden">
          {/* Banner */}
          <div className="rounded-xl overflow-hidden mb-2 h-16 relative"
               style={{ background: 'linear-gradient(135deg, #0369a1, #0284c7)' }}>
            <div className="absolute inset-0 flex items-center justify-between px-3">
              <div>
                <div className="text-[7px] text-blue-200 mb-0.5">Promoção de Outubro</div>
                <div className="text-[10px] font-bold text-white">Clareamento</div>
                <div className="text-[10px] font-bold text-blue-200">por R$ 349</div>
              </div>
              <div className="text-2xl">🦷</div>
            </div>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-2 gap-1.5">
            {[
              { icon: '⚡', name: 'LED 1h', price: 'R$ 349' },
              { icon: '🌟', name: 'Caseiro', price: 'R$ 249' },
              { icon: '💎', name: 'VIP Total', price: 'R$ 699' },
              { icon: '✅', name: 'Manutenção', price: 'R$ 149' },
            ].map((c) => (
              <div key={c.name} className="p-1.5 bg-white rounded border border-slate-100 shadow-sm">
                <div className="text-sm mb-0.5">{c.icon}</div>
                <div className="text-[7px] text-slate-700 font-semibold">{c.name}</div>
                <div className="text-[7px] text-[#0369a1] font-bold">{c.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CatalogoMockup() {
  return (
    <div className="w-full h-full flex flex-col bg-[#111] overflow-hidden">
      {/* Top nav */}
      <nav className="px-3 py-2 bg-[#1a1a1a] border-b border-white/6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#f59e0b] flex items-center justify-center">
            <span className="text-[7px] font-black text-black">P</span>
          </div>
          <span className="text-[9px] font-black text-white">PRODUTEC</span>
        </div>
        <div className="flex gap-3 text-[8px] text-slate-400">
          <span>Catálogo</span><span>Sobre</span><span>Pedido</span>
        </div>
        <div className="px-2.5 py-1 text-[8px] font-bold text-black rounded"
             style={{ background: '#f59e0b' }}>
          Solicitar
        </div>
      </nav>
      {/* Filters */}
      <div className="px-3 py-1.5 bg-[#161616] border-b border-white/4 flex gap-1.5">
        {['Todos', 'Eletrônicos', 'Mecânicos', 'Hidráulicos'].map((f, i) => (
          <div key={f} className={`px-2 py-0.5 rounded text-[7px] font-semibold cursor-default ${
            i === 0 ? 'bg-[#f59e0b] text-black' : 'bg-white/5 text-slate-400'
          }`}>
            {f}
          </div>
        ))}
      </div>
      {/* Product grid */}
      <div className="flex-1 p-2.5 overflow-hidden">
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { name: 'Motor 3CV', code: 'MOT-302', status: 'Disponível', icon: '⚙️' },
            { name: 'Bomba Hidráulica', code: 'BOM-115', status: 'Sob Consulta', icon: '🔧' },
            { name: 'Painel Solar', code: 'SOL-440', status: 'Disponível', icon: '☀️' },
            { name: 'Inversor 10kW', code: 'INV-210', status: 'Disponível', icon: '⚡' },
            { name: 'Sensor Pressão', code: 'SEN-078', status: 'Estoque Baixo', icon: '📡' },
            { name: 'Compressor AR', code: 'COM-550', status: 'Disponível', icon: '💨' },
          ].map((p) => (
            <div key={p.name} className="p-1.5 bg-[#1a1a1a] rounded border border-white/5">
              <div className="h-8 bg-gradient-to-br from-zinc-800 to-zinc-700 rounded mb-1 flex items-center justify-center text-base">
                {p.icon}
              </div>
              <div className="text-[7px] text-white font-medium leading-tight truncate">{p.name}</div>
              <div className="text-[6px] text-slate-500 mb-0.5">{p.code}</div>
              <div className="text-[6px]" style={{
                color: p.status === 'Disponível' ? '#4ade80' : p.status === 'Estoque Baixo' ? '#f59e0b' : '#94a3b8'
              }}>
                {p.status}
              </div>
            </div>
          ))}
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
    id: 1,
    name: 'Élite Moda',
    segment: 'Moda & Fashion',
    nav: 'Menu Superior',
    tag: 'E-commerce',
    tagColor: '#e8341a',
    mockup: ModeStoreMockup,
    desc: 'Loja virtual premium para moda feminina e masculina com experiência de compra sofisticada.',
    url: 'elitemoda.com.br',
  },
  {
    id: 2,
    name: 'AgroMarket',
    segment: 'Agropecuária',
    nav: 'Menu Lateral',
    tag: 'Catálogo',
    tagColor: '#22c55e',
    mockup: AgroMockup,
    desc: 'Catálogo digital para insumos agrícolas com filtros avançados e pedido via WhatsApp.',
    url: 'agromarket.agr.br',
  },
  {
    id: 3,
    name: 'Silva & Associados',
    segment: 'Advocacia',
    nav: 'Menu Superior',
    tag: 'Institucional',
    tagColor: '#60a5fa',
    mockup: AdvocaciaMockup,
    desc: 'Site institucional elegante para escritório de advocacia transmitindo autoridade e credibilidade.',
    url: 'silvaadvocacia.adv.br',
  },
  {
    id: 4,
    name: 'Sorria Dental',
    segment: 'Odontologia',
    nav: 'Menu Lateral',
    tag: 'Clínica',
    tagColor: '#0369a1',
    mockup: DentistaMockup,
    desc: 'Site para clínica odontológica com agendamento online, serviços e promoções em destaque.',
    url: 'sorriadental.com.br',
  },
  {
    id: 5,
    name: 'ProdutecBR',
    segment: 'Indústria',
    nav: 'Menu Superior',
    tag: 'Catálogo B2B',
    tagColor: '#f59e0b',
    mockup: CatalogoMockup,
    desc: 'Catálogo B2B para indústria com filtros por categoria, SKU e solicitação de cotação.',
    url: 'produtecbr.ind.br',
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState('Todos');
  const filters = ['Todos', 'E-commerce', 'Catálogo', 'Institucional', 'Clínica'];

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

  const visible = filter === 'Todos'
    ? portfolioItems
    : portfolioItems.filter((p) => p.tag === filter);

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

          {/* Filter tabs */}
          <div className="animate-in flex flex-wrap justify-center gap-2">
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
          </div>
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
