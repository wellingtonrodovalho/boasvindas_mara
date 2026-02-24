
import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  ChevronRight, 
  ArrowLeft, 
  Wifi, 
  MapPin, 
  ExternalLink,
  Smartphone,
  Info,
  Trash2, 
  Lock,
  Wind,
  Utensils,
  AlertTriangle,
  Home,
  Bed,
  Tv,
  Coffee,
  Check,
  Copy,
  LayoutGrid,
  Clock,
  Sparkles,
  BookOpen,
  PlusCircle,
  Lightbulb,
  Trees,
  ShoppingCart,
  Pizza,
  Landmark,
  Calendar,
  ShoppingBag,
  Dumbbell,
  Stethoscope,
  Pill,
  Key,
  Heart,
  CheckCircle2,
  Power,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AppSection } from './types.ts';
import { 
  LOGO_URL, 
  NAV_ITEMS, 
  APARTMENT_CONTENT, 
  LOCAL_GUIDE_CATEGORIES, 
  WELLINGTON_WHATSAPP,
  HOUSE_GUIDE_CONTENT,
  EMERGENCY_CONTACTS
} from './constants.tsx';

// Componente Wrapper para as seções com melhorias de acessibilidade
const SectionWrapper: React.FC<{ 
  title: string; 
  subtitle?: string; 
  children: React.ReactNode; 
  onBack: () => void;
}> = ({ title, subtitle, children, onBack }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="flex flex-col gap-6 pb-20 max-w-6xl mx-auto w-full px-2 md:px-0"
  >
    <button 
      onClick={onBack}
      aria-label="Voltar para o menu principal"
      className="flex items-center gap-2 text-brand-brown font-semibold hover:text-brand-yellow transition-colors group w-fit mb-2 py-2"
    >
      <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Retornar ao Menu
    </button>
    
    <div className="flex flex-col gap-1 mb-2">
      <header className="flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-brown font-serif tracking-tight">{title}</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-brand-teal to-orange-500 mt-1 rounded-full"></div>
      </header>
      {subtitle && <p className="text-gray-500 font-medium mt-2">{subtitle}</p>}
    </div>

    <section className="w-full">
      {children}
    </section>
  </motion.div>
);

const AmenityIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  switch (name) {
    case 'bed': return <Bed className={className} size={20} aria-hidden="true" />;
    case 'sofa': return <LayoutGrid className={className} size={20} aria-hidden="true" />;
    case 'utensils': return <Utensils className={className} size={20} aria-hidden="true" />;
    case 'wind': return <Wind className={className} size={20} aria-hidden="true" />;
    default: return <Info className={className} size={20} aria-hidden="true" />;
  }
};

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<AppSection>(AppSection.HOME);
  const [activeGuideTab, setActiveGuideTab] = useState(HOUSE_GUIDE_CONTENT?.[0]?.id || 'wifi');
  const [activeLocalCategory, setActiveLocalCategory] = useState(LOCAL_GUIDE_CATEGORIES?.[0]?.id || 'restaurantes');
  const [copiedWifi, setCopiedWifi] = useState(false);
  
  // Refs para monitorar scroll e esconder a seta se necessário (opcional, mas bom para UX)
  const guideNavRef = useRef<HTMLElement>(null);
  const localNavRef = useRef<HTMLElement>(null);

  // Scroll to top quando troca de seção
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  const handleBack = () => setCurrentSection(AppSection.HOME);

  const renderHeader = () => (
    <header className="bg-white/95 backdrop-blur-md border-b border-brand-yellow/10 sticky top-0 z-50 py-3 px-4 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between w-full">
        <div className="flex items-center gap-3 cursor-pointer select-none" onClick={handleBack} role="button" aria-label="Home Mara 410">
          <img src={LOGO_URL} alt="Logo Mara 410" className="h-10 w-10 object-contain" />
          <div>
            <h1 className="font-serif text-brand-brown text-lg md:text-xl leading-tight font-bold">Mara 410</h1>
            <p className="text-[10px] md:text-xs text-brand-yellow font-bold uppercase tracking-widest">Guia Digital</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href={WELLINGTON_WHATSAPP} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Falar com Wellington no WhatsApp"
            className="md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full shadow-md hover:shadow-green-500/20 transition-all font-bold text-sm hidden"
          >
            <MessageSquare size={18} /> Contato do Anfitrião
          </a>
          <a 
            href={WELLINGTON_WHATSAPP} 
            target="_blank" 
            rel="noopener noreferrer"
            className="md:hidden bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform active:scale-95"
          >
            <MessageSquare size={22} />
          </a>
        </div>
      </div>
    </header>
  );

  const renderHome = () => (
    <div className="flex flex-col gap-6 animate-fade-in max-w-6xl mx-auto w-full">
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 w-full rounded-[2rem] overflow-hidden shadow-2xl mb-2 bg-brand-brown flex items-center justify-center text-center p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-brown via-brand-darkBrown to-brand-brown opacity-95"></div>
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10 space-y-6">
          <div className="bg-white/10 p-5 rounded-3xl inline-block backdrop-blur-md shadow-inner border border-white/10">
            <img src={LOGO_URL} alt="Bem-vindo ao Mara 410" className="h-24 w-24 md:h-32 mx-auto drop-shadow-2xl" />
          </div>
          <div className="space-y-2">
            <h2 className="text-white text-4xl md:text-7xl font-serif leading-tight drop-shadow-lg font-bold">Seja bem-vindo!</h2>
            <p className="text-brand-yellow text-xl md:text-3xl font-medium italic opacity-90">Sua melhor estadia no Setor Bueno.</p>
          </div>
        </div>
      </div>

      {/* Grid de Navegação Principal */}
      <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentSection(item.id)}
            aria-label={`Abrir seção: ${item.label}`}
            className="flex flex-col items-center justify-center p-6 bg-white border border-brand-yellow/5 rounded-3xl shadow-sm hover:shadow-2xl hover:border-brand-yellow/40 transition-all group aspect-square lg:aspect-auto lg:py-10"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-lightYellow/50 rounded-2xl flex items-center justify-center text-brand-yellow mb-4 group-hover:scale-110 transition-transform group-hover:bg-brand-yellow group-hover:text-white">
              {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
            </div>
            <span className="text-xs md:text-sm font-bold text-brand-brown text-center leading-tight uppercase tracking-wider">
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Endereço Rápido */}
      <footer className="mt-4 p-8 bg-brand-brown text-white rounded-[2rem] shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 border border-white/5">
        <div className="flex-1 space-y-3">
          <h3 className="text-brand-yellow font-bold flex items-center gap-3 text-xl uppercase tracking-widest">
            <MapPin size={24} /> Onde estamos
          </h3>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed font-medium">{APARTMENT_CONTENT.address}</p>
        </div>
        <div className="flex gap-3">
           <a 
            href={APARTMENT_CONTENT.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-brown px-8 py-4 rounded-2xl text-base font-bold flex items-center gap-2 hover:bg-brand-yellow hover:text-white transition-all shadow-lg active:scale-95"
          >
            <ExternalLink size={20} /> Abrir no Mapa
          </a>
        </div>
      </footer>
    </div>
  );

  const renderGuiaCasa = () => {
    const activeContent = HOUSE_GUIDE_CONTENT.find(c => c.id === activeGuideTab) || HOUSE_GUIDE_CONTENT[0];
    return (
      <SectionWrapper 
        title="Guia da Casa" 
        subtitle="Manual prático dos equipamentos e facilidades"
        onBack={handleBack}
      >
        <div className="flex flex-col gap-8">
          {/* Tabs horizontais com indicador visual aprimorado e grid no desktop */}
          <div className="relative">
            <nav 
              ref={guideNavRef}
              className="flex md:grid md:grid-cols-3 lg:grid-cols-6 items-center gap-3 overflow-x-auto md:overflow-x-visible pb-6 scrollbar-hide no-scrollbar -mx-4 px-4 md:mx-0 md:px-0" 
              role="tablist"
            >
              {HOUSE_GUIDE_CONTENT.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeGuideTab === tab.id}
                  onClick={() => setActiveGuideTab(tab.id)}
                  className={`flex flex-col items-center justify-center min-w-[110px] md:min-w-0 p-5 rounded-3xl border-2 transition-all shrink-0 md:shrink select-none ${
                    activeGuideTab === tab.id 
                    ? 'bg-white border-brand-teal text-brand-teal shadow-xl ring-4 ring-brand-teal/5' 
                    : 'bg-white/40 border-transparent text-gray-400 hover:border-gray-200'
                  }`}
                >
                  <div className={`mb-2 transition-colors ${activeGuideTab === tab.id ? 'text-brand-teal' : 'text-gray-300'}`}>
                    {React.cloneElement(tab.icon as React.ReactElement<any>, { size: 24 })}
                  </div>
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-center">{tab.label}</span>
                </button>
              ))}
              {/* Espaçador invisível para permitir o peeking no último item (mobile) */}
              <div className="min-w-[20px] md:hidden"></div>
            </nav>
            
            {/* Indicador de scroll lateral para Mobile apenas */}
            <div className="absolute right-0 top-0 bottom-6 w-16 pointer-events-none md:hidden bg-gradient-to-l from-[#FDFCF7] to-transparent flex items-center justify-end pr-1">
              <div className="bg-white/80 p-1 rounded-full shadow-sm">
                <ChevronRight className="text-brand-yellow animate-bounce-x" size={24} />
              </div>
            </div>
          </div>

          {/* Conteúdo da Tab */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden animate-slide-up">
            <div className={`h-3 w-full ${activeContent.id === 'outros' ? 'bg-brand-teal' : 'bg-blue-600'}`} />
            <div className="p-8 md:p-12 space-y-10">
              <header className="flex items-center gap-5">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl ${activeContent.id === 'outros' ? 'bg-brand-teal' : 'bg-blue-600'}`}>
                  {React.cloneElement(activeContent.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 font-serif">{activeContent.title}</h3>
              </header>

              {(activeContent as any).isSpecial ? (
                <div className="grid grid-cols-1 gap-6">
                  {(activeContent as any).subCards?.map((sub: any, sIdx: number) => (
                    <div key={sIdx} className={`p-8 rounded-3xl border-2 ${sub.variant === 'red' ? 'bg-red-50 border-red-100' : 'bg-teal-50/50 border-teal-100'}`}>
                      <h4 className={`text-xl font-bold flex items-center gap-3 mb-3 ${sub.variant === 'red' ? 'text-red-800' : 'text-brand-teal'}`}>
                        <span className="text-2xl">{sub.icon}</span> {sub.title}
                      </h4>
                      <p className={`text-lg leading-relaxed ${sub.variant === 'red' ? 'text-red-700' : 'text-gray-600'}`}>{sub.description}</p>
                      {sub.extra && <p className="mt-4 p-3 bg-white/60 rounded-xl text-sm font-bold text-gray-700 border border-black/5">{sub.extra}</p>}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6">
                  {activeContent.fields.map((field, idx) => (
                    <div key={idx} className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100 group transition-all hover:bg-white hover:shadow-lg">
                      <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-3">{field.label}</p>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <p className="text-brand-brown text-xl md:text-2xl font-bold tracking-tight">{field.value}</p>
                        <div className="flex gap-3">
                          {(field as any).url && (
                            <a href={(field as any).url} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 shadow-lg hover:bg-blue-700 transition-all active:scale-95">
                              <ExternalLink size={18} /> Ver Vídeo Tutorial
                            </a>
                          )}
                          {activeContent.id === 'wifi' && (
                            <button 
                              onClick={() => { 
                                navigator.clipboard.writeText(field.value); 
                                setCopiedWifi(true); 
                                setTimeout(() => setCopiedWifi(false), 2000); 
                              }} 
                              aria-label="Copiar senha do Wifi"
                              className="bg-brand-lightYellow text-brand-yellow px-6 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 hover:bg-brand-yellow hover:text-white transition-all active:scale-95 shadow-sm"
                            >
                              {copiedWifi ? <><Check size={18} /> Copiado</> : <><Copy size={18} /> Copiar Senha</>}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <footer className="flex items-start gap-4 pt-6 text-gray-500 border-t border-gray-100 bg-gray-50/30 -mx-8 -mb-8 p-8 md:-mx-12 md:-mb-12 md:p-12">
                <div className="bg-brand-yellow/10 p-3 rounded-full text-brand-yellow">
                  <Lightbulb size={24} className="shrink-0" />
                </div>
                <div>
                  <p className="text-base font-medium italic leading-relaxed text-gray-600">{activeContent.footer}</p>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </SectionWrapper>
    );
  };

  const renderGuiaLocal = () => {
    const activeCategory = LOCAL_GUIDE_CATEGORIES.find(c => c.id === activeLocalCategory) || LOCAL_GUIDE_CATEGORIES[0];
    return (
      <SectionWrapper title="Guia Local" subtitle="Explore o melhor de Goiânia pertinho de você" onBack={handleBack}>
        <div className="flex flex-col gap-10 w-full">
          {/* Seletor de Categorias: Carrossel no Mobile, Grid no Desktop */}
          <div className="relative">
            <nav 
              ref={localNavRef}
              className="flex md:grid md:grid-cols-4 lg:grid-cols-6 items-stretch gap-3 overflow-x-auto md:overflow-x-visible pb-6 scrollbar-hide no-scrollbar -mx-4 px-4 md:mx-0 md:px-0" 
              aria-label="Categorias de locais"
            >
              {LOCAL_GUIDE_CATEGORIES.map((cat) => (
                <button 
                  key={cat.id} 
                  onClick={() => setActiveLocalCategory(cat.id)} 
                  aria-current={activeLocalCategory === cat.id}
                  className={`flex flex-col items-center justify-center p-5 rounded-3xl border-2 transition-all min-w-[110px] md:min-w-0 ${activeLocalCategory === cat.id ? 'bg-brand-lightYellow border-brand-yellow text-brand-brown shadow-xl md:scale-105 z-10 font-bold' : 'bg-white border-transparent text-gray-400 hover:border-brand-yellow/20 hover:text-brand-brown shadow-sm'}`}
                >
                  <div className={`mb-3 ${activeLocalCategory === cat.id ? 'text-brand-yellow' : 'text-gray-300'}`}>
                    {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 24 })}
                  </div>
                  <span className="text-[10px] md:text-xs uppercase tracking-widest text-center leading-tight">{cat.title}</span>
                </button>
              ))}
              <div className="min-w-[20px] md:hidden"></div>
            </nav>
            
            {/* Indicador visual para Mobile apenas */}
            <div className="absolute right-0 top-0 bottom-6 w-16 pointer-events-none md:hidden bg-gradient-to-l from-[#FDFCF7] to-transparent flex items-center justify-end pr-1">
              <div className="bg-white/80 p-1 rounded-full shadow-sm">
                <ChevronRight className="text-brand-yellow animate-bounce-x" size={24} />
              </div>
            </div>
          </div>

          {/* Listagem em Colunas */}
          <div className="space-y-8">
            <header className="flex items-center gap-4 border-l-8 border-brand-yellow pl-6 py-2">
               <h4 className="text-2xl font-bold text-brand-brown font-serif">{activeCategory.headerLabel}</h4>
               <span className="bg-brand-yellow text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm">{activeCategory.places.length} locais</span>
            </header>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
              {activeCategory.places.map((place, idx) => (
                <a 
                  key={idx} 
                  href={place.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Ver ${place.name} no Google Maps`}
                  className="group bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <header className="flex items-center justify-between">
                      <div className="bg-brand-lightYellow/50 p-4 rounded-2xl text-brand-yellow group-hover:bg-brand-yellow group-hover:text-white transition-all">
                        {React.cloneElement(activeCategory.icon as React.ReactElement<any>, { size: 24 })}
                      </div>
                      <ExternalLink size={20} className="text-gray-200 group-hover:text-brand-yellow transition-colors" />
                    </header>
                    <div className="space-y-2">
                      <h5 className="font-bold text-brand-brown text-xl leading-tight group-hover:text-brand-yellow transition-colors">{place.name}</h5>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{(place as any).description}</p>
                    </div>
                  </div>
                  <footer className="mt-8 pt-5 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-brand-yellow uppercase tracking-[0.2em]">Traçar Rota</span>
                    <ChevronRight size={18} className="text-brand-yellow group-hover:translate-x-2 transition-transform" />
                  </footer>
                </a>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    );
  };

  const renderCheckout = () => {
    const checklist = [
      {
        title: "Recolha as toalhas usadas",
        desc: "Por gentileza, deixar as toalhas estendidas",
        icon: <CheckCircle2 size={24} />,
        color: "text-brand-teal",
        bg: "bg-brand-teal",
        border: "border-brand-teal"
      },
      {
        title: "Tire o lixo",
        desc: "Coloque na lixeira no térreo, atrás do elevador",
        icon: <Trash2 size={24} />,
        color: "text-orange-500",
        bg: "bg-orange-500",
        border: "border-orange-500"
      },
      {
        title: "Desligue tudo",
        desc: "Desligue os equipamentos que não estão sendo utilizados",
        icon: <Power size={24} />,
        color: "text-blue-600",
        bg: "bg-blue-600",
        border: "border-blue-600"
      },
      {
        title: "Tranque tudo",
        desc: "Feche as janelas. A porta social não precisa trancar, basta fechá-la",
        icon: <Lock size={24} />,
        color: "text-purple-500",
        bg: "bg-purple-500",
        border: "border-purple-500"
      },
      {
        title: "Devolva as chaves",
        desc: "Deixe as tags e o controle remoto na caixa de correspondência 410 no térreo",
        icon: <Key size={24} />,
        color: "text-pink-500",
        bg: "bg-pink-500",
        border: "border-pink-500"
      }
    ];

    return (
      <SectionWrapper title="Check-out" subtitle="Obrigado por escolher o Mara 410" onBack={handleBack}>
        <div className="flex flex-col gap-8 max-w-2xl mx-auto w-full animate-fade-in px-2 md:px-0">
          {/* Banner Horário */}
          <div className="bg-brand-teal rounded-3xl p-8 flex items-center gap-6 shadow-xl text-white border border-white/10">
            <div className="bg-white/20 p-5 rounded-2xl backdrop-blur-md shadow-inner">
              <Clock size={48} />
            </div>
            <div className="space-y-1">
              <h3 className="text-4xl font-bold font-serif tracking-tight">Até às 11:00</h3>
              <p className="text-white/80 font-bold uppercase tracking-widest text-xs">Horário máximo de saída</p>
            </div>
          </div>

          <div className="bg-white/60 rounded-3xl p-8 shadow-sm border border-brand-yellow/10 text-center italic text-lg leading-relaxed text-gray-700">
            "Esperamos que sua estadia tenha sido incrível! 🏠"
          </div>

          <div className="flex flex-col gap-5" role="list">
            {checklist.map((item, idx) => (
              <div 
                key={idx} 
                role="listitem"
                className={`bg-white rounded-[2rem] border-t-8 ${item.border} shadow-lg p-6 flex items-center justify-between group transition-all hover:-translate-y-1`}
              >
                <div className="flex items-center gap-6">
                  <div className={`${item.bg} text-white p-4 rounded-2xl shadow-lg group-hover:rotate-6 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown text-xl">{item.title}</h4>
                    <p className="text-gray-500 text-base">{item.desc}</p>
                  </div>
                </div>
                <div className="text-gray-100 hidden sm:block">
                   <CheckCircle2 size={32} />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100 shadow-sm">
            <h5 className="text-orange-800 font-extrabold text-xs uppercase tracking-[0.25em] mb-3">Compromisso com Limpeza</h5>
            <p className="text-orange-700/80 text-lg leading-relaxed font-medium">
              Sua avaliação de limpeza é fundamental para nós. Solicitamos cordialmente que deixe o apartamento organizado para facilitar a próxima higienização.
            </p>
          </div>

          <div className="bg-brand-teal rounded-[2.5rem] p-10 text-center text-white shadow-2xl mt-4 border border-white/10">
             <Heart size={40} className="mx-auto mb-4 text-brand-yellow animate-pulse" />
             <h4 className="text-3xl font-serif font-bold mb-2">Foi um prazer receber você!</h4>
             <p className="text-white/80 text-lg font-medium">Até a próxima estadia 💚</p>
          </div>
        </div>
      </SectionWrapper>
    );
  };

  const renderEmergencia = () => (
    <SectionWrapper title="EMERGÊNCIAS" subtitle="Contatos úteis e suporte imediato" onBack={handleBack}>
      <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl border border-brand-yellow/5 animate-fade-in max-w-3xl mx-auto w-full">
        <div className="flex flex-col gap-10">
          <ul className="space-y-8" aria-label="Lista de telefones de emergência">
            {EMERGENCY_CONTACTS.map((contact, idx) => (
              <li key={idx} className="flex items-center gap-5 group border-b border-gray-50 pb-6 last:border-0">
                <div className="w-12 h-12 rounded-2xl bg-brand-lightYellow flex items-center justify-center text-brand-yellow shrink-0 group-hover:bg-brand-yellow group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-1">{contact.label}</p>
                  <a 
                    href={`tel:${contact.phone.replace(/[^\d]/g, '')}`} 
                    className="text-2xl md:text-3xl font-bold text-brand-brown hover:text-brand-yellow transition-all flex items-center gap-3 decoration-brand-yellow/30 underline underline-offset-8"
                  >
                    {contact.phone}
                    <ChevronRight size={24} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-14 pt-10 border-t border-brand-yellow/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-brand-brown text-2xl mb-2 font-serif">Algum problema no Ap?</h4>
            <p className="text-gray-500 font-medium">Estamos prontos para ajudar a qualquer hora.</p>
          </div>
          <a 
            href={WELLINGTON_WHATSAPP} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Pedir ajuda no WhatsApp"
            className="inline-flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-3xl font-extrabold text-xl shadow-xl hover:shadow-green-500/30 transition-all active:scale-95"
          >
            <MessageSquare size={28} /> Suporte via WhatsApp
          </a>
        </div>
      </div>
    </SectionWrapper>
  );

  const renderSection = () => {
    switch (currentSection) {
      case AppSection.APARTAMENTO:
        return (
          <SectionWrapper title="Nosso Apartamento" subtitle="Conheça cada detalhe do seu novo lar" onBack={handleBack}>
             <div className="space-y-10">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-brand-yellow/5">
                <p className="text-brand-brown/80 text-xl md:text-2xl leading-relaxed font-medium italic">"{APARTMENT_CONTENT.description}"</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {APARTMENT_CONTENT.amenities.map((amenity, idx) => {
                  const palette: any = {
                    teal: { bg: 'bg-teal-50', text: 'text-brand-teal', bullet: 'bg-brand-teal' },
                    orange: { bg: 'bg-orange-50', text: 'text-orange-700', bullet: 'bg-orange-400' },
                    blue: { bg: 'bg-blue-50', text: 'text-blue-700', bullet: 'bg-blue-400' },
                    purple: { bg: 'bg-purple-50', text: 'text-purple-700', bullet: 'bg-purple-400' },
                  };
                  const colorClasses = palette[amenity.color] || palette.teal;
                  return (
                    <div key={idx} className="bg-white rounded-[2rem] shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl transition-all">
                      <div className={`${colorClasses.bg} p-8 flex items-center gap-5 border-b border-black/5`}>
                        <div className="bg-white p-4 rounded-2xl shadow-sm">
                           <AmenityIcon name={amenity.icon} className={colorClasses.text} />
                        </div>
                        <h4 className={`font-bold text-2xl font-serif ${colorClasses.text}`}>{amenity.title}</h4>
                      </div>
                      <div className="p-8 space-y-5">
                        {amenity.items.map((item, iIdx) => (
                          <div key={iIdx} className="flex gap-4 items-start">
                            <span className={`w-2.5 h-2.5 rounded-full mt-2 shrink-0 ${colorClasses.bullet}`}></span>
                            <p className="text-lg text-gray-700 leading-snug font-medium">
                              {typeof item === 'string' ? item : <><span className="font-extrabold text-brand-brown">{item.label}:</span> {item.value}</>}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </SectionWrapper>
        );
      case AppSection.CHECKIN:
        return (
          <SectionWrapper title="Check-in" subtitle="Como entrar e se instalar com facilidade" onBack={handleBack}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-10">
                {/* Localização */}
                <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden h-fit">
                  <header className="bg-teal-50 p-6 px-10 flex items-center gap-4 border-b border-teal-100">
                    <MapPin className="text-brand-teal" size={24} />
                    <h3 className="font-bold text-gray-800 text-xl font-serif">Localização Exata</h3>
                  </header>
                  <div className="p-10 text-center space-y-6">
                    <p className="text-brand-brown leading-relaxed font-bold text-xl md:text-2xl">
                      R. T-47, 173, Apto 410<br/>Bloco C - St. Bueno, Goiânia - GO
                    </p>
                    <a 
                      href={APARTMENT_CONTENT.googleMapsUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-brand-yellow text-white px-8 py-4 rounded-2xl font-extrabold shadow-lg hover:shadow-brand-yellow/20 transition-all"
                    >
                      <MapPin size={20} /> Abrir no Google Maps
                    </a>
                  </div>
                </div>

                {/* Fechadura Digital */}
                <div className="bg-brand-lightYellow/50 border-4 border-brand-yellow p-10 rounded-[2rem] shadow-inner space-y-6">
                  <h4 className="font-bold text-brand-brown text-3xl flex items-center gap-4 font-serif"><Lock size={32} className="text-brand-yellow" /> Fechadura Digital</h4>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-yellow/20 space-y-4">
                    <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                      <p className="text-red-800 font-bold text-sm flex items-center gap-2">
                        <AlertTriangle size={18} /> CUIDADO MUITO IMPORTANTE
                      </p>
                      <p className="text-red-700 text-sm mt-1">
                        Digite a senha <strong>antes</strong> de colocar a mão na maçaneta. Se girar antes, a fechadura irá travar.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-brand-brown/70 text-sm font-bold uppercase tracking-widest">Formato da Senha:</p>
                      <div className="bg-brand-lightYellow/30 p-4 rounded-xl border border-brand-yellow/20">
                        <p className="text-xl font-extrabold text-brand-brown tracking-widest text-center">
                          * + DDD + 5 primeiros dígitos + #
                        </p>
                        <p className="text-[10px] text-gray-500 mt-2 text-center uppercase font-bold">
                          Exemplo: 62 98545-1980 → <span className="text-brand-teal">*6298545#</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-brand-brown/70 text-sm font-bold uppercase tracking-widest">Ordem correta:</p>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3 text-brand-brown font-medium">
                          <span className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center text-xs font-bold">1</span>
                          Digite a senha
                        </div>
                        <div className="flex items-center gap-3 text-brand-brown font-medium">
                          <span className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center text-xs font-bold">2</span>
                          Aguarde o bip de liberação
                        </div>
                        <div className="flex items-center gap-3 text-brand-brown font-medium">
                          <span className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center text-xs font-bold">3</span>
                          Gire a maçaneta
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Passo a Passo */}
              <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-gray-100">
                 <h3 className="font-bold text-3xl mb-10 font-serif border-b pb-6">Passo a Passo</h3>
                 <div className="space-y-12">
                   {/* Passo 1 */}
                   <div className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <span className="w-12 h-12 rounded-2xl bg-brand-yellow flex items-center justify-center font-black text-brand-brown text-xl shadow-lg shrink-0 group-hover:scale-110 transition-transform">1</span>
                      <div className="w-1 h-full bg-brand-yellow/20 mt-4 rounded-full"></div>
                    </div>
                    <div className="space-y-4 pb-8">
                      <div>
                        <h4 className="font-bold text-xl mb-1">Acesso ao Condomínio</h4>
                        <p className="text-gray-500 text-lg">Utilize o link da chave virtual enviado pelo anfitrião.</p>
                      </div>
                      
                      <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 space-y-3">
                        <p className="text-blue-800 text-sm font-medium">
                          <strong>Importante:</strong> O sistema pedirá acesso ao GPS. Clique em <strong>"Permitir"</strong> para que a chave funcione.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0 mt-1">
                            <Check size={14} />
                          </div>
                          <p className="text-gray-600 text-sm">Destrave a <strong>PORTA SOCIAL - 01</strong>.</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0 mt-1">
                            <Check size={14} />
                          </div>
                          <p className="text-gray-600 text-sm">Passe para a <strong>CLAUSURA - 02</strong> (só abre se a primeira estiver fechada).</p>
                        </div>
                      </div>
                      
                      <p className="text-xs text-gray-400 italic">Dica: Se precisar de ajuda, clique em "PORTARIA" no link da chave para falar com a portaria remota.</p>
                    </div>
                   </div>

                   {/* Passo 2 */}
                   <div className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <span className="w-12 h-12 rounded-2xl bg-brand-yellow flex items-center justify-center font-black text-brand-brown text-xl shadow-lg shrink-0 group-hover:scale-110 transition-transform">2</span>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-xl mb-1">Chegando ao Apartamento</h4>
                        <p className="text-gray-500 text-lg">Siga até o <strong>Bloco C</strong> (último bloco).</p>
                      </div>
                      <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex items-center gap-4">
                        <div className="bg-white p-3 rounded-xl shadow-sm text-brand-brown">
                          <LayoutGrid size={24} />
                        </div>
                        <p className="text-brand-brown font-medium">Elevador: Botão 4 (4º andar)</p>
                      </div>
                      <div className="bg-brand-brown text-white p-5 rounded-2xl shadow-lg flex items-center justify-between">
                        <span className="font-bold uppercase tracking-widest text-xs opacity-70">Apartamento</span>
                        <span className="text-3xl font-serif font-bold">410</span>
                      </div>
                    </div>
                   </div>
                 </div>
              </div>
            </div>
          </SectionWrapper>
        );
      case AppSection.GUIA_CASA: return renderGuiaCasa();
      case AppSection.GUIA_LOCAL: return renderGuiaLocal();
      case AppSection.REGRAS: 
        return (
          <SectionWrapper title="Regras da Casa" subtitle="Para uma convivência harmoniosa" onBack={handleBack}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 border-4 border-red-100 p-10 rounded-[2.5rem] text-center space-y-6 shadow-sm">
                <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <AlertTriangle className="text-white" size={40} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-red-800 font-serif">Lei do Silêncio</h3>
                  <p className="text-red-600 text-2xl font-black">22:00 às 08:00</p>
                </div>
                <p className="text-red-700/70 text-sm font-medium">Multas aplicadas pelo condomínio são de responsabilidade do hóspede.</p>
              </div>
              <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl space-y-8">
                <h4 className="text-2xl font-bold font-serif mb-4">Outras Normas</h4>
                <div className="flex items-center gap-5 group">
                  <div className="bg-gray-100 p-4 rounded-2xl text-gray-500 group-hover:bg-red-50 group-hover:text-red-500 transition-all">
                    <Wind size={24} />
                  </div>
                  <span className="text-lg font-bold text-gray-700 uppercase tracking-wide">Proibido fumar.</span>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="bg-gray-100 p-4 rounded-2xl text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-500 transition-all">
                    <Home size={24} />
                  </div>
                  <span className="text-lg font-bold text-gray-700 uppercase tracking-wide">Janelas fechadas ao sair.</span>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="bg-gray-100 p-4 rounded-2xl text-gray-500 group-hover:bg-teal-50 group-hover:text-teal-500 transition-all">
                    <Lock size={24} />
                  </div>
                  <span className="text-lg font-bold text-gray-700 uppercase tracking-wide">Segurança em 1º lugar.</span>
                </div>
              </div>
            </div>
          </SectionWrapper>
        );
      case AppSection.CHECKOUT: return renderCheckout();
      case AppSection.EMERGENCIA: return renderEmergencia();
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen w-full font-sans pb-10">
      {renderHeader()}
      <main className="p-4 md:p-12 md:pt-16">
        {currentSection === AppSection.HOME ? renderHome() : renderSection()}
      </main>
      
      {/* Tab bar inferior para mobile em seções internas */}
      {currentSection !== AppSection.HOME && (
        <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl p-4 border-t border-brand-yellow/10 flex justify-around items-center z-50 md:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
          <button 
            onClick={handleBack} 
            aria-label="Voltar para o início"
            className="flex flex-col items-center gap-1.5 text-brand-brown/50 hover:text-brand-yellow transition-all active:scale-90"
          >
            <Home size={28} /><span className="text-[10px] font-bold uppercase tracking-widest">Início</span>
          </button>
          <div className="w-px h-8 bg-brand-yellow/10"></div>
          <a 
            href={WELLINGTON_WHATSAPP} 
            target="_blank" 
            aria-label="Pedir ajuda no WhatsApp"
            className="flex flex-col items-center gap-1.5 text-brand-brown/50 hover:text-green-500 transition-all active:scale-90"
          >
            <MessageSquare size={28} /><span className="text-[10px] font-bold uppercase tracking-widest">Suporte</span>
          </a>
        </nav>
      )}

      {/* Botão Flutuante (FAB) para Desktop e Mobile */}
      <AnimatePresence>
        {currentSection !== AppSection.HOME && (
          <motion.button
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleBack}
            className="fixed bottom-24 right-6 md:bottom-10 md:right-10 z-50 bg-brand-yellow text-brand-brown p-4 rounded-full shadow-2xl hover:bg-brand-brown hover:text-white transition-colors flex items-center justify-center group border-2 border-white/20"
            title="Voltar ao Menu Principal"
          >
            <Home size={24} />
            <span className="absolute right-full mr-4 bg-brand-brown text-white px-4 py-2 rounded-xl text-xs font-bold opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none shadow-xl translate-x-2 group-hover:translate-x-0">
              Voltar ao Menu
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
