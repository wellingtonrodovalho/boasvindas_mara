
import React, { useState, useEffect } from 'react';
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

// Componente Wrapper para as seções
const SectionWrapper: React.FC<{ 
  title: string; 
  subtitle?: string; 
  children: React.ReactNode; 
  onBack: () => void;
}> = ({ title, subtitle, children, onBack }) => (
  <div className="flex flex-col gap-6 pb-20 animate-fadeIn max-w-6xl mx-auto w-full">
    <button 
      onClick={onBack}
      className="flex items-center gap-2 text-brand-brown font-semibold hover:text-brand-yellow transition-colors group w-fit mb-2"
    >
      <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Retornar ao Menu
    </button>
    
    <div className="flex flex-col gap-1 mb-2">
      <div className="flex flex-col">
        <h2 className="text-4xl font-bold text-brand-brown font-serif">{title}</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-[#0D9488] to-orange-500 mt-1 rounded-full"></div>
      </div>
      {subtitle && <p className="text-gray-500 font-medium mt-2">{subtitle}</p>}
    </div>

    <div className="w-full">
      {children}
    </div>
  </div>
);

const AmenityIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  switch (name) {
    case 'bed': return <Bed className={className} size={20} />;
    case 'sofa': return <LayoutGrid className={className} size={20} />;
    case 'utensils': return <Utensils className={className} size={20} />;
    case 'wind': return <Wind className={className} size={20} />;
    default: return <Info className={className} size={20} />;
  }
};

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<AppSection>(AppSection.HOME);
  const [activeGuideTab, setActiveGuideTab] = useState(HOUSE_GUIDE_CONTENT?.[0]?.id || 'wifi');
  const [activeLocalCategory, setActiveLocalCategory] = useState(LOCAL_GUIDE_CATEGORIES?.[0]?.id || 'restaurantes');
  const [copiedWifi, setCopiedWifi] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSection]);

  const handleBack = () => setCurrentSection(AppSection.HOME);

  const renderHeader = () => (
    <header className="bg-white border-b border-brand-yellow/20 sticky top-0 z-50 py-3 px-4 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between w-full">
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleBack}>
          <img src={LOGO_URL} alt="Logo Ap Mara" className="h-10 w-10 object-contain" />
          <div>
            <h1 className="font-serif text-brand-brown text-lg md:text-xl leading-tight">Ap Mara</h1>
            <p className="text-[10px] md:text-xs text-brand-yellow font-bold uppercase tracking-wider">Guia do Hóspede</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href={WELLINGTON_WHATSAPP} 
            target="_blank" 
            rel="noopener noreferrer"
            className="md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-md transition-all font-bold text-sm hidden"
          >
            <MessageSquare size={18} /> Falar com Anfitrião
          </a>
          <a 
            href={WELLINGTON_WHATSAPP} 
            target="_blank" 
            rel="noopener noreferrer"
            className="md:hidden bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg transition-transform"
          >
            <MessageSquare size={20} />
          </a>
        </div>
      </div>
    </header>
  );

  const renderHome = () => (
    <div className="flex flex-col gap-6 animate-fadeIn max-w-6xl mx-auto w-full">
      <div className="relative h-64 md:h-80 w-full rounded-3xl overflow-hidden shadow-xl mb-2 bg-brand-brown flex items-center justify-center text-center p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-brown via-brand-darkBrown to-brand-brown opacity-95"></div>
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10 space-y-4">
          <div className="bg-white/10 p-4 rounded-full inline-block backdrop-blur-sm shadow-inner mb-2">
            <img src={LOGO_URL} alt="Logo Ap Mara" className="h-20 w-20 md:h-24 mx-auto drop-shadow-[0_5px_15px_rgba(241,179,28,0.4)]" />
          </div>
          <h2 className="text-white text-4xl md:text-6xl font-serif leading-tight drop-shadow-lg">Bem-vindo ao Ap Mara</h2>
          <p className="text-brand-yellow text-xl md:text-2xl font-medium italic drop-shadow-md">Sua estadia com conforto no Setor Bueno.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentSection(item.id)}
            className="flex flex-col items-center justify-center p-5 bg-white border border-brand-yellow/10 rounded-2xl shadow-sm hover:shadow-xl hover:border-brand-yellow/40 transition-all group aspect-square lg:aspect-auto lg:py-8"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-lightYellow rounded-xl flex items-center justify-center text-brand-yellow mb-3 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <span className="text-xs md:text-sm font-semibold text-brand-brown text-center leading-tight">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-4 p-6 md:p-8 bg-brand-brown text-white rounded-3xl shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-brand-yellow font-bold mb-2 flex items-center gap-2 text-lg">
            <MapPin size={22} /> Localização Premium
          </h3>
          <p className="text-sm md:text-base opacity-90 leading-relaxed">{APARTMENT_CONTENT.address}</p>
        </div>
        <div className="flex gap-2">
           <a 
            href={APARTMENT_CONTENT.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all border border-white/20"
          >
            <ExternalLink size={16} /> Ver no Mapa
          </a>
        </div>
      </div>
    </div>
  );

  const renderGuiaCasa = () => {
    const activeContent = HOUSE_GUIDE_CONTENT.find(c => c.id === activeGuideTab) || HOUSE_GUIDE_CONTENT[0];
    return (
      <SectionWrapper 
        title="Guia da Casa" 
        subtitle="Tudo que você precisa saber sobre os equipamentos e facilidades"
        onBack={handleBack}
      >
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
            {HOUSE_GUIDE_CONTENT.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveGuideTab(tab.id)}
                className={`flex flex-col items-center justify-center min-w-[100px] md:min-w-[140px] p-4 rounded-xl border-2 transition-all shrink-0 ${
                  activeGuideTab === tab.id 
                  ? 'bg-white border-teal-400 text-teal-600 shadow-md ring-1 ring-teal-400/20' 
                  : 'bg-white/50 border-gray-200 text-gray-500 hover:border-gray-300'
                }`}
              >
                <div className={`mb-2 transition-colors ${activeGuideTab === tab.id ? 'text-teal-500' : 'text-gray-400'}`}>
                  {tab.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-wide">{tab.label}</span>
              </button>
            ))}
          </div>
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden animate-fadeIn">
            <div className={`h-2 w-full ${activeContent.id === 'outros' ? 'bg-[#0D9488]' : 'bg-blue-600'}`} />
            <div className="p-6 md:p-10 space-y-8">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg ${activeContent.id === 'outros' ? 'bg-[#0D9488]' : 'bg-blue-600'}`}>
                  {activeContent.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{activeContent.title}</h3>
              </div>
              {(activeContent as any).isSpecial ? (
                <div className="grid grid-cols-1 gap-4">
                  {(activeContent as any).subCards?.map((sub: any, sIdx: number) => (
                    <div key={sIdx} className={`p-6 rounded-2xl border ${sub.variant === 'red' ? 'bg-red-50 border-red-100' : 'bg-[#F0FDF9] border-[#DCFCE7]'}`}>
                      <h4 className={`font-bold flex items-center gap-2 mb-2 ${sub.variant === 'red' ? 'text-red-800' : 'text-[#0D9488]'}`}>
                        <span className="text-lg">{sub.icon}</span> {sub.title}
                      </h4>
                      <p className={`text-sm md:text-base leading-relaxed ${sub.variant === 'red' ? 'text-red-700' : 'text-gray-600'}`}>{sub.description}</p>
                      {sub.extra && <p className="mt-2 text-sm font-bold text-gray-700">{sub.extra}</p>}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6">
                  {activeContent.fields.map((field, idx) => (
                    <div key={idx} className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50">
                      <p className="text-blue-500 font-semibold text-xs uppercase tracking-widest mb-2">{field.label}</p>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <p className="text-brand-brown text-lg md:text-xl font-bold tracking-tight">{field.value}</p>
                        <div className="flex gap-2">
                          {(field as any).url && (
                            <a href={(field as any).url} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-md hover:bg-blue-700 transition-all active:scale-95">
                              <ExternalLink size={16} /> Ver Tutorial
                            </a>
                          )}
                          {activeContent.id === 'wifi' && (
                            <button onClick={() => { navigator.clipboard.writeText(field.value); setCopiedWifi(true); setTimeout(() => setCopiedWifi(false), 2000); }} className="bg-white text-blue-600 p-2 rounded-lg shadow-sm hover:shadow transition-all active:scale-95">
                              {copiedWifi ? <Check size={18} /> : <Copy size={18} />}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex items-start gap-3 pt-4 text-gray-500 border-t border-gray-100">
                <Lightbulb size={20} className="text-yellow-500 shrink-0 mt-0.5" />
                <p className="text-sm font-medium italic">{activeContent.footer}</p>
              </div>
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
          <div className="flex flex-col items-center text-center gap-3">
             <div className="bg-brand-yellow p-4 rounded-2xl shadow-xl -mb-6 z-10 text-brand-brown">
              <MapPin size={32} />
            </div>
            <div className="pt-6">
              <h3 className="text-4xl font-bold text-brand-brown font-serif">Guia Local</h3>
              <p className="text-gray-500 font-medium italic">Selecione uma categoria para ver as opções</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {LOCAL_GUIDE_CATEGORIES.map((cat) => (
              <button key={cat.id} onClick={() => setActiveLocalCategory(cat.id)} className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all ${activeLocalCategory === cat.id ? 'bg-brand-lightYellow border-brand-yellow text-brand-brown shadow-md scale-105 z-10 font-bold' : 'bg-white border-transparent text-gray-400 hover:border-brand-yellow/20 hover:text-brand-brown shadow-sm'}`}>
                <div className={`mb-2 ${activeLocalCategory === cat.id ? 'text-brand-yellow' : 'text-gray-300'}`}>{cat.icon}</div>
                <span className="text-[10px] md:text-xs uppercase tracking-wider">{cat.title}</span>
              </button>
            ))}
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-l-4 border-brand-yellow pl-4">
               <h4 className="text-xl font-bold text-brand-brown">{activeCategory.headerLabel}</h4>
               <span className="bg-brand-lightYellow text-brand-yellow text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">{activeCategory.places.length} locais</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
              {activeCategory.places.map((place, idx) => (
                <a key={idx} href={place.url} target="_blank" rel="noopener noreferrer" className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-brand-lightYellow/50 p-3 rounded-2xl text-brand-yellow group-hover:scale-110 transition-transform">{activeCategory.icon}</div>
                      <ExternalLink size={16} className="text-gray-300 group-hover:text-brand-yellow transition-colors" />
                    </div>
                    <h5 className="font-bold text-brand-brown text-lg leading-tight mb-2 group-hover:text-brand-yellow transition-colors">{place.name}</h5>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{(place as any).description}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-brand-yellow uppercase tracking-widest">Abrir no Maps</span>
                    <ChevronRight size={14} className="text-brand-yellow group-hover:translate-x-1 transition-transform" />
                  </div>
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
        color: "text-[#0D9488]",
        bg: "bg-[#0D9488]",
        border: "border-[#0D9488]"
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
      <SectionWrapper title="Check-out" onBack={handleBack}>
        <div className="flex flex-col gap-6 max-w-2xl mx-auto w-full animate-fadeIn">
          {/* Banner Horário */}
          <div className="bg-[#0D9488] rounded-2xl p-6 flex items-center gap-6 shadow-md text-white">
            <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
              <Clock size={40} />
            </div>
            <div>
              <h3 className="text-3xl font-bold">Até às 11:00</h3>
              <p className="text-white/80 font-medium">Horário máximo para check-out</p>
            </div>
          </div>

          {/* Intro Text */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <p className="text-gray-600 leading-relaxed">
              Esperamos que sua estadia tenha sido agradável! 🏠<br/>
              Aqui estão alguns passos simples para facilitar sua saída:
            </p>
          </div>

          {/* Checklist */}
          <div className="flex flex-col gap-4">
            {checklist.map((item, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl border-t-4 ${item.border} shadow-sm p-5 flex items-center justify-between group transition-all hover:shadow-md hover:-translate-y-0.5`}
              >
                <div className="flex items-center gap-5">
                  <div className={`${item.bg} text-white p-3 rounded-xl shadow-inner group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown text-lg">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
                <div className="text-gray-200">
                   <CheckCircle2 size={28} />
                </div>
              </div>
            ))}
          </div>

          {/* Limpeza Section */}
          <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100/50">
            <h5 className="text-orange-800 font-bold text-sm uppercase tracking-wider mb-2">Limpeza</h5>
            <p className="text-orange-700/80 text-sm leading-relaxed">
              O apartamento sempre é entregue limpo e higienizado de acordo com as regras de higienização. Solicitamos cordialmente que deixe-o como encontrou: ambiente e louças limpos, lixo recolhido e organizado.
            </p>
          </div>

          {/* Final Message */}
          <div className="bg-[#0D9488] rounded-3xl p-8 text-center text-white shadow-xl mt-4">
             <h4 className="text-2xl font-bold mb-1">Obrigado por sua estadia!</h4>
             <p className="text-white/90 font-medium">Esperamos recebê-lo novamente em breve 💚</p>
          </div>
        </div>
      </SectionWrapper>
    );
  };

  const renderEmergencia = () => (
    <SectionWrapper title="EMERGÊNCIAS" onBack={handleBack}>
      <div className="bg-white/40 rounded-3xl p-8 md:p-12 shadow-sm border border-brand-yellow/5 animate-fadeIn max-w-3xl mx-auto w-full">
        <div className="flex flex-col gap-6">
          <ul className="space-y-6">
            {EMERGENCY_CONTACTS.map((contact, idx) => (
              <li key={idx} className="flex items-start gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-brown/40 mt-2.5 shrink-0 group-hover:bg-brand-yellow transition-colors"></div>
                <p className="text-gray-600 text-lg leading-snug">
                  {contact.label} –{' '}
                  <a 
                    href={`tel:${contact.phone.replace(/\s+/g, '')}`} 
                    className="font-bold text-brand-brown hover:text-brand-yellow transition-colors decoration-brand-yellow/30 underline underline-offset-4"
                  >
                    {contact.phone}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-12 pt-8 border-t border-brand-yellow/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-bold text-brand-brown text-xl mb-1">Dúvidas sobre a estadia?</h4>
            <p className="text-gray-500 italic">Fale diretamente com o anfitrião Wellington</p>
          </div>
          <a 
            href={WELLINGTON_WHATSAPP} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-green-500/20 transition-all active:scale-95"
          >
            <MessageSquare size={24} /> Chamar no WhatsApp
          </a>
        </div>
      </div>
    </SectionWrapper>
  );

  const renderSection = () => {
    switch (currentSection) {
      case AppSection.APARTAMENTO:
        return (
          <SectionWrapper title="Nosso Apartamento" onBack={handleBack}>
             <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-yellow/10">
                <p className="text-brand-brown/80 text-lg leading-relaxed">{APARTMENT_CONTENT.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {APARTMENT_CONTENT.amenities.map((amenity, idx) => {
                  const palette: any = {
                    teal: { bg: 'bg-teal-50', text: 'text-teal-700', bullet: 'bg-teal-400' },
                    orange: { bg: 'bg-orange-50', text: 'text-orange-700', bullet: 'bg-orange-400' },
                    blue: { bg: 'bg-blue-50', text: 'text-blue-700', bullet: 'bg-blue-400' },
                    purple: { bg: 'bg-purple-50', text: 'text-purple-700', bullet: 'bg-purple-400' },
                  };
                  const colorClasses = palette[amenity.color] || palette.teal;
                  return (
                    <div key={idx} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                      <div className={`${colorClasses.bg} p-5 flex items-center gap-3 border-b border-black/5`}>
                        <AmenityIcon name={amenity.icon} className={colorClasses.text} />
                        <h4 className={`font-bold text-lg ${colorClasses.text}`}>{amenity.title}</h4>
                      </div>
                      <div className="p-6 space-y-4">
                        {amenity.items.map((item, iIdx) => (
                          <div key={iIdx} className="flex gap-3 items-start">
                            <span className={`w-2 h-2 rounded-full mt-2 shrink-0 ${colorClasses.bullet}`}></span>
                            <p className="text-base text-gray-700 leading-snug">{typeof item === 'string' ? item : <><span className="font-bold">{item.label}:</span> {item.value}</>}</p>
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
        return <SectionWrapper title="Check-in" onBack={handleBack}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-8">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden h-fit">
                <div className="bg-[#F0FDF4] p-4 px-6 flex items-center gap-3 border-b border-[#DCFCE7]">
                  <MapPin className="text-[#0D9488]" size={20} />
                  <h3 className="font-bold text-gray-800">Localização</h3>
                </div>
                <div className="p-8 text-center space-y-4">
                  <p className="text-gray-600 leading-relaxed font-medium md:text-lg">Rua T-47, 173, Apto 410 - Bloco C<br/>Setor Bueno, Goiânia-GO</p>
                  <a href={APARTMENT_CONTENT.googleMapsUrl} target="_blank" className="text-blue-600 font-bold underline">Ver no Google Maps</a>
                </div>
              </div>
              <div className="bg-brand-lightYellow border-2 border-brand-yellow p-8 rounded-3xl shadow-sm space-y-4">
                <h4 className="font-bold text-brand-brown text-2xl flex items-center gap-2"><Lock size={24} /> Senha da Porta</h4>
                <p className="text-brand-brown/70">Digite: * (asterisco) + DDD + Prefixo do Telefone + # (jogo da velha)</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
               <h3 className="font-bold text-2xl mb-6">Instruções de Acesso</h3>
               <ol className="space-y-6">
                 <li className="flex gap-4"><span className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center font-bold text-brand-brown">1</span> <p>Identifique-se na portaria remota pelo interfone.</p></li>
                 <li className="flex gap-4"><span className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center font-bold text-brand-brown">2</span> <p>Dirija-se ao Bloco C, Apartamento 410.</p></li>
               </ol>
            </div>
          </div>
        </SectionWrapper>;
      case AppSection.GUIA_CASA: return renderGuiaCasa();
      case AppSection.GUIA_LOCAL: return renderGuiaLocal();
      case AppSection.REGRAS: 
        return <SectionWrapper title="Regras da Casa" onBack={handleBack}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 border-2 border-red-100 p-8 rounded-3xl text-center space-y-4">
              <AlertTriangle className="mx-auto text-red-600" size={48} />
              <h3 className="text-2xl font-bold text-red-800">Silêncio Absoluto</h3>
              <p className="text-red-700 text-xl font-bold">22:00 às 08:00</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <div className="flex items-center gap-3"><Wind className="text-brand-yellow" /> <span>Proibido fumar.</span></div>
              <div className="flex items-center gap-3"><Home className="text-brand-yellow" /> <span>Mantenha as janelas fechadas ao sair.</span></div>
            </div>
          </div>
        </SectionWrapper>;
      case AppSection.CHECKOUT: return renderCheckout();
      case AppSection.EMERGENCIA: return renderEmergencia();
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen w-full bg-pattern font-sans pb-10">
      {renderHeader()}
      <main className="p-4 md:p-8 md:pt-10">
        {currentSection === AppSection.HOME ? renderHome() : renderSection()}
      </main>
      
      {currentSection !== AppSection.HOME && (
        <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl p-3 border-t border-brand-yellow/10 flex justify-around items-center z-50 md:hidden">
          <button onClick={handleBack} className="flex flex-col items-center gap-1 text-brand-brown/60 hover:text-brand-yellow transition-colors">
            <Home size={24} /><span className="text-[10px] font-bold uppercase">Início</span>
          </button>
          <div className="w-px h-8 bg-brand-yellow/10"></div>
          <a href={WELLINGTON_WHATSAPP} target="_blank" className="flex flex-col items-center gap-1 text-brand-brown/60 hover:text-green-500 transition-colors">
            <MessageSquare size={24} /><span className="text-[10px] font-bold uppercase">Ajuda</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
