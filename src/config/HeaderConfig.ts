// Type for multilingual text

export type linkSegment = {
  text: string;
  href: string;
  text_en: string;
  text_fr?: string;
  text_es?: string;
  text_de?: string;
  text_ja?: string;
  text_it?: string;
  text_ar?: string;
  text_hi?: string;
  text_th?: string;
  text_zh?: string;
};

// Type for the links with optional nested links
export type translatedlink = {
  text: string;
  icon?: string;
  href: string;
  links?: linkSegment[]; // Adjusted to support arrays of multilingual links
  text_en: string;
  text_fr?: string;
  text_es?: string;
  text_de?: string;
  text_ja?: string;
  text_it?: string;
  text_ar?: string;
  text_hi?: string;
  text_th?: string;
  text_zh?: string;
};

// Type for the header configuration, including actions
type headerConfig = {
  i18n: {
    language: string;
    nativeName: string;
    link: string;
  }[];
  links: translatedlink[];
  actions?: {
    text: string;
    href: string;
    target?: string;
  }[];
};

// The actual data implementation
//headerConfig
export const headerConfig: headerConfig = {
  i18n: [
    {
      language: "English",
      nativeName: "English",
      link: "/en",
    },
    {
      language: "Deutsch",
      nativeName: "Deutsch",
      link: "/de",
    },
    {
      language: "Chinese",
      nativeName: "简体中文",
      link: "/zh",
    },
    {
      language: "Spanish",
      nativeName: "Español",
      link: "/es",
    },
    {
      language: "French",
      nativeName: "Français",
      link: "/fr",
    },
    {
      language: "Italian",
      nativeName: "Italiano",
      link: "/it",
    },
    {
      language: "Japanese",
      nativeName: "日本語",
      link: "/ja",
    },
  ],

  links: [
    {
      text: "Home",
      text_en: "Home",
      text_fr: "Accueil",
      href: "/",
    },
    {
      text: "Today",
      href: "/test",
      text_en: "Today",
    },
    {
      text: "translation",
      text_en: "translation",
      href: "/translation",
      text_de: "Übersetzung",
      text_es: "Traducción",
      text_fr: "Traduction",
      text_ja: "翻訳",
      text_it: "Traduzione",
      text_ar: "ترجمة",
      text_hi: "अनुवाद",
      text_th: "แปล",
      text_zh: "翻譯",
      links: [
        {
          text: "info",
          href: "/info",
          text_en: "some",
        },
        {
          text: "test",
          href: "/test",
          text_en: "some",
        },
        {
          text: "about",
          href: "/about",
          text_en: "some",
        },
      ],

      
    },
  ],

  actions: [
    // {
    //   text: "Search",
    //   href: "/search",
    //   target: "_self",
    // },
  ],
};
