import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ja' | 'zh' | 'es' | 'fr' | 'it';

interface Translations {
  [key: string]: {
    en: string;
    ja: string;
    zh: string;
    es: string;
    fr: string;
    it: string;
  };
}

const translations: Translations = {
  // Navbar
  'nav.home': {
    en: 'Home',
    ja: 'ホーム',
    zh: '首页',
    es: 'Inicio',
    fr: 'Accueil',
    it: 'Home'
  },
  'nav.about': {
    en: 'About',
    ja: '概要',
    zh: '关于',
    es: 'Sobre mí',
    fr: 'À propos',
    it: 'Chi sono'
  },
  'nav.projects': {
    en: 'Projects',
    ja: 'プロジェクト',
    zh: '项目',
    es: 'Proyectos',
    fr: 'Projets',
    it: 'Progetti'
  },
  'nav.skills': {
    en: 'Skills',
    ja: 'スキル',
    zh: '技能',
    es: 'Habilidades',
    fr: 'Compétences',
    it: 'Competenze'
  },
  'nav.contact': {
    en: 'Contact',
    ja: '連絡先',
    zh: '联系',
    es: 'Contacto',
    fr: 'Contact',
    it: 'Contatti'
  },
  'nav.portfolio': {
    en: 'Portfolio',
    ja: 'ポートフォリオ',
    zh: '作品集',
    es: 'Portafolio',
    fr: 'Portfolio',
    it: 'Portfolio'
  },
  'theme.light': {
    en: 'Light Mode',
    ja: 'ライトモード',
    zh: '浅色模式',
    es: 'Modo claro',
    fr: 'Mode clair',
    it: 'Modalità chiara'
  },
  'theme.dark': {
    en: 'Dark Mode',
    ja: 'ダークモード',
    zh: '深色模式',
    es: 'Modo oscuro',
    fr: 'Mode sombre',
    it: 'Modalità scura'
  },

  // Home
  'home.greeting': {
    en: "Hi, I'm",
    ja: 'こんにちは、',
    zh: '你好，我是',
    es: 'Hola, soy',
    fr: 'Bonjour, je suis',
    it: 'Ciao, sono'
  },
  'home.role': {
    en: 'Web & Mobile App Developer',
    ja: 'Web & モバイルアプリ開発者',
    zh: 'Web和移动应用开发者',
    es: 'Desarrollador de Apps Web y Móviles',
    fr: 'Développeur d\'Applications Web et Mobile',
    it: 'Sviluppatore di App Web e Mobile'
  },
  'home.description': {
    en: 'With 6 years of experience in web and mobile development, I specialize in creating innovative, user-centric applications. I transform complex ideas into elegant, efficient solutions that drive business success.',
    ja: 'Web とモバイル開発で 6 年の経験を持ち、革新的でユーザー中心のアプリケーション作成を専門としています。複雑なアイデアをエレガントで効率的なソリューションに変換し、ビジネスの成功を推進します。',
    zh: '在 Web 和移动开发领域拥有 6 年经验，专注于创建创新的、以用户为中心的应用程序。我将复杂的想法转化为优雅、高效的解决方案，推动业务成功。',
    es: 'Con 6 años de experiencia en desarrollo web y móvil, me especializo en crear aplicaciones innovadoras centradas en el usuario. Transformo ideas complejas en soluciones elegantes y eficientes que impulsan el éxito empresarial.',
    fr: 'Avec 6 ans d\'expérience en développement web et mobile, je me spécialise dans la création d\'applications innovantes centrées sur l\'utilisateur. Je transforme des idées complexes en solutions élégantes et efficaces qui favorisent le succès commercial.',
    it: 'Con 6 anni di esperienza nello sviluppo web e mobile, mi specializzo nella creazione di applicazioni innovative incentrate sull\'utente. Trasformo idee complesse in soluzioni eleganti ed efficienti che guidano il successo aziendale.'
  },
  'home.cta.contact': {
    en: 'Get in Touch',
    ja: 'お問い合わせ',
    zh: '联系我',
    es: 'Contactar',
    fr: 'Me contacter',
    it: 'Contattami'
  },
  'home.cta.projects': {
    en: 'View Projects',
    ja: 'プロジェクトを見る',
    zh: '查看项目',
    es: 'Ver Proyectos',
    fr: 'Voir les Projets',
    it: 'Vedi Progetti'
  },

  // Language names (for the language switcher)
  'language.name.en': {
    en: 'English',
    ja: 'English',
    zh: 'English',
    es: 'English',
    fr: 'English',
    it: 'English'
  },
  'language.name.ja': {
    en: '日本語',
    ja: '日本語',
    zh: '日本語',
    es: '日本語',
    fr: '日本語',
    it: '日本語'
  },
  'language.name.zh': {
    en: '中文',
    ja: '中文',
    zh: '中文',
    es: '中文',
    fr: '中文',
    it: '中文'
  },
  'language.name.es': {
    en: 'Español',
    ja: 'Español',
    zh: 'Español',
    es: 'Español',
    fr: 'Español',
    it: 'Español'
  },
  'language.name.fr': {
    en: 'Français',
    ja: 'Français',
    zh: 'Français',
    es: 'Français',
    fr: 'Français',
    it: 'Français'
  },
  'language.name.it': {
    en: 'Italiano',
    ja: 'Italiano',
    zh: 'Italiano',
    es: 'Italiano',
    fr: 'Italiano',
    it: 'Italiano'
  },
  
  'language.select': {
    en: 'Select Language',
    ja: '言語を選択',
    zh: '选择语言',
    es: 'Seleccionar idioma',
    fr: 'Choisir la langue',
    it: 'Seleziona lingua'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isLoading: boolean;
  availableLanguages: Language[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getInitialLanguage = (): Language => {
  // Try to get language from localStorage
  const savedLanguage = localStorage.getItem('preferredLanguage') as Language;
  if (savedLanguage && ['en', 'ja', 'zh', 'es', 'fr', 'it'].includes(savedLanguage)) {
    return savedLanguage;
  }

  // Try to detect browser language
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('ja')) return 'ja';
  if (browserLang.startsWith('zh')) return 'zh';
  if (browserLang.startsWith('es')) return 'es';
  if (browserLang.startsWith('fr')) return 'fr';
  if (browserLang.startsWith('it')) return 'it';

  // Default to English
  return 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [isLoading, setIsLoading] = useState(true);

  const availableLanguages: Language[] = ['en', 'ja', 'zh', 'es', 'fr', 'it'];

  useEffect(() => {
    // Save language preference to localStorage whenever it changes
    localStorage.setItem('preferredLanguage', language);
    setIsLoading(false);
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setIsLoading(true);
    setLanguage(lang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: handleSetLanguage, 
      t,
      isLoading,
      availableLanguages
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 