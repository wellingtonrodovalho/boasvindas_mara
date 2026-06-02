
import React from 'react';
import { 
  Home, 
  Key, 
  FileText, 
  MapPin, 
  LogOut, 
  AlertTriangle,
  BookOpen,
  Wifi,
  Flame,
  Coffee,
  Tv,
  Car,
  PlusCircle,
  Utensils,
  Pizza,
  ShoppingCart,
  Heart,
  Trees,
  ShoppingBag,
  Landmark,
  Dumbbell,
  Clock,
  Calendar,
  Stethoscope,
  Pill,
  Sparkles
} from 'lucide-react';
import { AppSection, NavItem } from './types.ts';

export const LOGO_URL = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48Y2lyY2xlIGN4PSIyNTYiIGN5PSIxNTAiIHI9IjEwMCIgZmlsbD0iI2YxYjMxYyIvPjxjaXJjbGUgY3g9IjEyMCIgY3k9IjI4MCIgcj0iMTAwIiBmaWxsPSIjZjFiMzFjIi8+PGNpcmNsZSBjeD0iMzkyIiBjeT0iMjgwIiByPSIxMDAiIGZpbGw9IiNmMWIzMWMiLz48cGF0aCBkPSJNMjU2IDQ2MCBWMjAwIE0yNTYgMzgwIEwxNDAgMjgwIE0yNTYgMzgwIEwzNzIgMjgwIiBzdHJva2U9IiM1YzQwMjMiIHN0cm9rZS13aWR0aD0iMzIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==";

export const WELLINGTON_WHATSAPP = "https://wa.me/5562991514568"; 
export const GOOGLE_REVIEW_URL = "https://g.page/r/CY7WZ6hqY7-XEBM/review"; 

export const NAV_ITEMS: NavItem[] = [
  { id: AppSection.APARTAMENTO, label: 'Nosso Apartamento', icon: <Home size={20} /> },
  { id: AppSection.CHECKIN, label: 'Check-in', icon: <Key size={20} /> },
  { id: AppSection.GUIA_CASA, label: 'Guia da Casa', icon: <BookOpen size={20} /> },
  { id: AppSection.REGRAS, label: 'Regras da Casa', icon: <FileText size={20} /> },
  { id: AppSection.GUIA_LOCAL, label: 'Guia Local', icon: <MapPin size={20} /> },
  { id: AppSection.CHECKOUT, label: 'Checkout', icon: <LogOut size={20} /> },
  { id: AppSection.EMERGENCIA, label: 'Emergência', icon: <AlertTriangle size={20} /> },
];

export const HOUSE_GUIDE_CONTENT = [
  {
    id: 'wifi',
    label: 'WiFi',
    icon: <Wifi size={20} />,
    title: 'WiFi',
    fields: [
      { label: 'Nome da Rede', value: 'LIVE TIM_A610_5G' },
      { label: 'Senha', value: 'pmadj76ter' }
    ],
    footer: 'QR Code disponível na tampa do quadro de distribuição na cozinha'
  },
  {
    id: 'gas',
    label: 'Gás',
    icon: <Flame size={20} />,
    title: 'Gás e Chuveiros',
    fields: [
      { label: 'Registro do Gás', value: 'Localizado em baixo da bancada do cooktop.' },
      { label: 'Chuveiros', value: 'Os chuveiros do apartamento são elétricos.' }
    ],
    footer: 'Certifique-se de manter o registro fechado se não estiver em uso.'
  },
  {
    id: 'cafeteira',
    label: 'Cafeteira',
    icon: <Coffee size={20} />,
    title: 'Cafeteira 3 Corações',
    fields: [
      { label: 'Tutorial', value: 'Clique para abrir o guia de uso', url: 'https://docs.google.com/presentation/d/1npz-wlSkhDQNbPA5bACCCIG6XIrYGRtw1yEb621EBEg/edit?usp=drive_link' },
      { label: 'Uso', value: 'Certifique-se de abastecer o reservatório de água atrás da máquina.' }
    ],
    footer: 'Cápsulas compatíveis: Sistema Três Corações.'
  },
  {
    id: 'tv',
    label: 'TVs e Controles',
    icon: <Tv size={20} />,
    title: 'TV e Entretenimento',
    fields: [
      { label: 'Controle da Sala', value: 'Localizado no rack, embaixo da TV.' },
      { label: 'Suíte de Casal', value: 'Controles (Ar e TV) na mesinha de apoio al lado da cama.' }
    ],
    footer: 'As TVs são Smart e possuem acesso a diversos aplicativos.'
  },
  {
    id: 'garagem',
    label: 'Garagem & Portões',
    icon: <Car size={20} />,
    title: 'Acesso e Estacionamento',
    fields: [
      { label: 'Vaga de Garagem', value: 'Siga pela rua interna até os fundos do condomínio. Vaga 19 (ao lado da condensadora de ar-condicionado)' },
      { label: 'Controle Remoto (Garagem)', value: 'Primeiro botão abre o portão de entrada (Rua T-47) e o segundo abre o portão de saída (Rua T-27).' },
      { label: 'Tag Quadrada', value: 'Abre a fechadura digital do apartamento.' },
      { label: 'Tag Azul (Redonda)', value: 'Portas sociais do condomínio: Encoste na caixinha preta abaixo do interfone.' },
      { label: 'Tag Cinza (Redonda)', value: 'Portas sociais do condomínio: Encoste direto no próprio interfone.' }
    ],
    footer: 'Mantenha o controle e as tags sempre com você ao sair.'
  },
  {
    id: 'outros',
    label: 'Outros',
    icon: <PlusCircle size={20} />,
    title: 'Facilidades do Condomínio',
    isSpecial: true,
    subCards: [
      {
        title: 'Carrinho de Compras',
        icon: '🛒',
        description: 'Localizado nas escadas, em frente ao elevador no térreo',
        extra: 'Senha: 0-410-entra-1104-entra',
        variant: 'teal'
      },
      {
        title: 'Lixo',
        icon: '🗑️',
        description: 'Lixeiras no térreo, atrás do elevador',
        variant: 'teal'
      },
      {
        title: 'Emergência - Incêndio',
        icon: '🚨',
        description: 'Em caso de incêndio, NÃO USE O ELEVADOR. Utilize as escadas.',
        variant: 'red'
      }
    ],
    footer: 'Dúvidas? Fale com o anfitrião pelo WhatsApp.'
  }
];

export const APARTMENT_CONTENT = {
  address: "Rua T-47, 173, Apto 410, Bloco C, Setor Bueno, Goiânia-GO, CEP 74.210-180",
  googleMapsUrl: "https://g.co/kgs/7UcCUNA",
  specs: {
    quartos: 2,
    hospedes: 6,
    banheiros: 2,
    localizacao: "Goiânia-Goiás, Brazil"
  },
  description: "Apartamento Mara no Setor Bueno, bem confortável, charmoso com um toque diferenciado com tábuas corridas, excelente localização e vizinhança. Ideal para famílias, grupos de amigos e casais. O condomínio Mara está localizado no cruzamento das ruas T-27 e T-47 ao lado da CREMEGO.",
  wifi: {
    name: "LIVE TIM_A610_5G",
    pass: "pmadj76ter"
  },
  amenities: [
    {
      title: "Quartos",
      icon: "bed",
      color: "teal",
      items: [
        { label: "Suíte Principal", value: "Cama de casal (1,38m de largura)" },
        { label: "Segundo Quarto", value: "Duas camas box de solteiro" }
      ]
    },
    {
      title: "Sala de Estar",
      icon: "sofa",
      color: "orange",
      items: [
        "Sofá confortável",
        "Smart TV com WiFi",
        "Mesa para home office",
        "Mesa de refeições"
      ]
    },
    {
      title: "Cozinha",
      icon: "utensils",
      color: "blue",
      items: [
        "Totalmente equipada",
        "Geladeira e fogão cooktop",
        "Cafeteira 3 Corações"
      ]
    },
    {
      title: "Conforto",
      icon: "wind",
      color: "purple",
      items: [
        "Ar condicionado",
        "Dois banheiros completos (um com box e outro com cortina de plástico)",
        "Vaporizador e mesa de passar (guardados no guarda-roupas da suíte de casal)"
      ]
    }
  ]
};

export const EMERGENCY_CONTACTS = [
  { label: "Polícia Militar do Estado de Goiás", phone: "190" },
  { label: "Serviço de Atendimento Móvel de Urgência – SAMU", phone: "192" },
  { label: "Corpo de Bombeiros", phone: "193" },
  { label: "Polícia Federal", phone: "194" },
  { label: "Polícia Civil", phone: "197" },
  { label: "Guarda Municipal", phone: "153" },
  { label: "Hospital Estadual de Urgências de Goiás", phone: "62 3201-4455" },
  { label: "DEAM – Delegacia Especializada no Atendimento à Mulher", phone: "62 3201-2801" },
  { label: "DEAI – Delegacia do Idoso", phone: "62 3201-1501" },
  { label: "Ministério Público do Estado de Goiás", phone: "62 3243-8000" },
  { label: "Ministério Público Federal", phone: "62 3243-5400" },
];

export const LOCAL_GUIDE_CATEGORIES = [
  {
    id: 'restaurantes',
    title: "Restaurantes",
    headerLabel: "Onde Comer em Goiânia",
    icon: <Utensils size={20} />,
    places: [
      { name: "Engenho Restaurante", description: "Cozinha típica regional goiana.", url: "https://g.page/Engenho_Restaurante_Go?share" },
      { name: "Dolcci Empório", description: "Gastronomia refinada e vinhos.", url: "https://g.page/dolcciemporio?share" },
      { name: "Churrascaria Gramado", description: "Tradicional rodízio de carnes nobres e buffet variado.", url: "https://maps.app.goo.gl/srbC369XfiG7PDWi7" },
      { name: "JP Steak House", description: "Rodízio premium de alto padrão e carta de vinhos especial.", url: "https://maps.app.goo.gl/42oF6gpXRfvoZpx77" },
      { name: "Churrascaria Nativas Grill", description: "Churrasco premium, buffet de sushis e frutos do mar.", url: "https://maps.app.goo.gl/gcs1Loqim9HueSMs5" },
      { name: "Buenos Restaurante", description: "Cozinha acolhedora e pratos finos no coração do Setor Bueno.", url: "https://maps.app.goo.gl/6zjPqVnxKhyr4VzK7" },
      { name: "Costelaria Rocha", description: "Excelente restaurante de costela assada lentamente e carnes nobres grelhadas.", url: "https://maps.app.goo.gl/bJ2CoeHgZZSsiD528" }
    ]
  },
  {
    id: 'lanches',
    title: "Lanches",
    headerLabel: "Lanches e Cafetarias",
    icon: <Pizza size={20} />,
    places: [
      { name: "Vitaminas Lacerda", description: "Tradicional ponto de vitaminas e lanches.", url: "https://goo.gl/maps/aaadMcFU3dxwVT8q7" },
      { name: "Doce Lugar Cafeteria", description: "Doces artesanais e cafés especiais.", url: "https://goo.gl/maps/KWrS3QVvohJumKPQ7" },
      { name: "O Empadão T2", description: "O melhor empadão goiano da região.", url: "https://goo.gl/maps/D8FajFcmGQfcZF4A7" },
      { name: "McDonald's", description: "Fast food a poucos metros.", url: "https://goo.gl/maps/xaAWeBu9e5T6NSLP9" },
      { name: "Lanchonete Videira", description: "Lanches rápidos e sucos naturais.", url: "https://goo.gl/maps/NwUyi3hLST4YVAT48" },
      { name: "Bob's", description: "Hambúrgueres e milkshakes.", url: "https://goo.gl/maps/c6UDsbcAmvRvCtzB8" },
      { name: "Habib's", description: "Esfihas e comida árabe.", url: "https://goo.gl/maps/a24558XwQDegoe8m9" },
      { name: "D'Esfihas Oeste", description: "Variedade em esfihas abertas.", url: "https://g.page/desfihasoeste?share" },
      { name: "Malbec Burger e Lazer", description: "Hambúrgueres gourmet e excelente infraestrutura de lazer.", url: "https://maps.app.goo.gl/mLVdYi1sYvU88Tj78" },
      { name: "Território La Pizza", description: "Pizzas artesanais deliciosas e de massas crocantes.", url: "https://maps.app.goo.gl/aWu6HKWjLg11mmmJ8" }
    ]
  },
  {
    id: 'mercados',
    title: "Mercados",
    headerLabel: "Compras e Mantimentos",
    icon: <ShoppingCart size={20} />,
    places: [
      { name: "Hiper Moreira", description: "Supermercado completo com empório.", url: "https://goo.gl/maps/MQjhRdWSAEqis2F67" }
    ]
  },
  {
    id: 'academia',
    title: "Academia",
    headerLabel: "Saúde e Exercícios",
    icon: <Dumbbell size={20} />,
    places: [
      { name: "Smart Fit", description: "Unidade Setor Bueno.", url: "https://goo.gl/maps/fAZUKRsPdvfdYvcM9" }
    ]
  },
  {
    id: 'panificadora',
    title: "Padaria",
    headerLabel: "Pães e Cafés da Manhã",
    icon: <Coffee size={20} />,
    places: [
      { name: "Ricco Panificadora", description: "Padaria artesanal com buffet de café.", url: "https://g.page/ricco-panificadora-padaria?share" }
    ]
  },
  {
    id: 'farmacias',
    title: "Farmácias",
    headerLabel: "Medicamentos e Higiene",
    icon: <Pill size={20} />,
    places: [
      { name: "Drogaria Medfácil", description: "Farmácia 24h próxima.", url: "https://goo.gl/maps/uMLAuayib4opigMW8" },
      { name: "Drogaria Santa Marta", description: "Rede tradicional com variedade.", url: "https://goo.gl/maps/mx6Hnt2WgduYN4Yk7" }
    ]
  },
  {
    id: 'saude',
    title: "Saúde",
    headerLabel: "Emergência Médica",
    icon: <Stethoscope size={20} />,
    places: [
      { name: "Hospital Neurológico", description: "Referência em pronto atendimento.", url: "https://goo.gl/maps/1zA43E2KE1YCJXKG8" }
    ]
  },
  {
    id: 'lazer',
    title: "Lazer",
    headerLabel: "Parques e Museus",
    icon: <Trees size={20} />,
    places: [
      { name: "Zoológico", description: "Excelente passeio para famílias.", url: "https://goo.gl/maps/JRwghUkte5v45hWp8" },
      { name: "Parque Flamboyant", description: "Ideal para caminhadas e lazer.", url: "https://goo.gl/maps/pnkGBMzVamnCUxTG9" }
    ]
  },
  {
    id: 'shoppings',
    title: "Shopping",
    headerLabel: "Compras e Lazer",
    icon: <ShoppingBag size={20} />,
    places: [
      { name: "Goiânia Shopping", description: "Mix completo de lojas e cinema.", url: "https://g.page/GoianiaShoppingGO?share" },
      { name: "Shopping Bougainville", description: "Ambiente charmoso e sofisticado.", url: "https://goo.gl/maps/pnkGBMzVamnCUxTG9" }
    ]
  },
  {
    id: 'bancos',
    title: "Bancos",
    headerLabel: "Agências Bancárias",
    icon: <Landmark size={20} />,
    places: [
      { name: "Brasil", description: "Agência Banco do Brasil Setor Bueno.", url: "https://goo.gl/maps/QDo1JskPxOVneGQS7" },
      { name: "Santander", description: "Agência completa.", url: "https://goo.gl/maps/VcBpjgqdRzrR1nH8" },
      { name: "Itaú", description: "Agência Itaú Unibanco.", url: "https://goo.gl/maps/iq9KTjiuU9Y2DdvH7" },
      { name: "Bradesco", description: "Agência Bradesco.", url: "https://goo.gl/maps/PxCkRjNa2ChCrADL7" }
    ]
  },
  {
    id: 'feiras',
    title: "Feiras",
    headerLabel: "Feiras Tradicionais",
    icon: <Calendar size={20} />,
    places: [
      { name: "Feira do Moreira", description: "Roupas e lanches (Domingos de manhã).", url: "https://g.co/kgs/jY84xD" },
      { name: "Feira da Lua", description: "Aos sábados a partir das 15h.", url: "https://goo.gl/maps/5Ky9Z6VL7mK2yfZJ8" },
      { name: "Feira do Sol", description: "Aos domingos a partir das 15h.", url: "https://goo.gl/maps/qWCjm34MBKZMUQw29" }
    ]
  },
  {
    id: 'servicos',
    title: "Serviços",
    headerLabel: "Serviços e Praticidades",
    icon: <Sparkles size={20} />,
    places: [
      { name: "Clean Lavanderia", description: "Serviços profissionais e rápidos de lavagem e secagem de roupas.", url: "https://maps.app.goo.gl/LohDq5rmX9wnFpWf8" },
      { name: "HotBelle Salão de Beleza", description: "Manicure, cabelo e tratamentos de bem-estar com facilidade.", url: "https://maps.app.goo.gl/NSJm2ewCXo1YtnAe8" },
      { name: "Beleza no Olhar Micropigmentação", description: "Especialistas qualificados em cílios, sobrancelhas e micropigmentação estética.", url: "https://maps.app.goo.gl/ccfv89EZEsvmjLwo9" }
    ]
  }
];
