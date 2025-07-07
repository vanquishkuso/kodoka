export const locales = ['sv', 'en'] as const;
export type Locale = typeof locales[number];

export const translations = {
  sv: {
    // Navigation
    nav: {
      services: 'Tjänster',
      features: 'Funktioner',
      pricing: 'Priser',
      testimonials: 'Recensioner',
      contact: 'Kontakt',
      getStarted: 'Kom igång'
    },
    // Hero Section
    hero: {
      badge: 'Avancerade Digitala Lösningar',
      title: 'Förvandla Din Data Till',
      titleHighlight: 'Handlingskraftiga Insikter',
      description: 'Vi hjälper företag att låsa upp den fulla potentialen i deras data med expertanalysimplementering, optimering och strategiska insikter. Vi bygger även moderna webbplatser och e-handelslösningar som driver tillväxt.',
      cta: 'Starta Din Digitala Resa',
      viewWork: 'Se Vårt Arbete',
      stats: {
        projects: 'Projekt Slutförda',
        satisfaction: 'Kundnöjdhet',
        experience: 'Års Erfarenhet'
      }
    },
    // Services Section
    services: {
      badge: 'Våra Tjänster',
      title: 'Omfattande Digitala Lösningar',
      description: 'Från analys till webbplatser - vi tillhandahåller kompletta digitala lösningar som driver mätbara affärsresultat.',
      analytics: {
        title: 'Google Analytics Setup',
        description: 'Komplett Google Analytics 4-implementering med anpassad händelsespårning, konverteringsmål och avancerad rapportering.',
        features: ['GA4 Migration & Setup', 'Anpassad Händelsespårning', 'E-handelsintegration', 'Avancerad Rapportering']
      },
      matomo: {
        title: 'Matomo Analytics',
        description: 'Integritetsfokuserad analys med Matomo för företag som prioriterar dataägarskap och GDPR-efterlevnad.',
        features: ['Självhostade Installation', 'GDPR-efterlevnad', 'Anpassade Dashboards', 'Dataägarskap']
      },
      websites: {
        title: 'Webbplatsutveckling',
        description: 'Moderna, responsiva webbplatser byggda med de senaste teknologierna för optimal prestanda och användarupplevelse.',
        features: ['Responsiv Design', 'SEO-optimerad', 'Snabb Laddning', 'CMS Integration']
      },
      ecommerce: {
        title: 'E-handelslösningar',
        description: 'Kompletta e-handelsplattformar med integrerad analys, betalningslösningar och lagerhantering.',
        features: ['Betalningsintegration', 'Lagerhantering', 'Analysspårning', 'Mobiloptimerad']
      },
      custom: {
        title: 'Anpassade Lösningar',
        description: 'Skräddarsydda digitala lösningar med anpassade dashboards, KPI-spårning och business intelligence-integration.',
        features: ['Anpassade Dashboards', 'KPI-spårning', 'Datavisualisering', 'API Integration']
      },
      audit: {
        title: 'Prestandarevisioner',
        description: 'Omfattande revisioner för att identifiera problem, optimera spårning och förbättra datakvalitet.',
        features: ['Spårningsrevision', 'Datakvalitetskontroll', 'Optimeringsrapport', 'Implementeringsguide']
      }
    },
    // Features Section
    features: {
      badge: 'Varför Välja Oss',
      title: 'Datadriven Excellens',
      description: 'Vi kombinerar teknisk expertis med affärsförståelse för att leverera digitala lösningar som verkligen påverkar din resultat.',
      precision: {
        title: 'Precisionsspårning',
        description: 'Noggrann datainsamling med anpassad händelsespårning och avancerade mätprotokoll.'
      },
      growth: {
        title: 'Tillväxtfokuserad',
        description: 'Digitala lösningar designade för att identifiera tillväxtmöjligheter och optimera prestanda.'
      },
      privacy: {
        title: 'Integritet Först',
        description: 'GDPR-kompatibla lösningar som respekterar användarintegritet samtidigt som de levererar kraftfulla insikter.'
      },
      fast: {
        title: 'Snabb Implementering',
        description: 'Snabb installation och driftsättning med minimal störning av dina befintliga arbetsflöden.'
      }
    },
    // Pricing Section
    pricing: {
      badge: 'Priser',
      title: 'Välj Rätt Plan För Dig',
      description: 'Flexibla prissättningsalternativ för företag i alla storlekar.',
      monthly: 'Månadsvis',
      yearly: 'Årligen',
      save: 'Spara 20%',
      starter: {
        name: 'Starter',
        price: '2,999',
        description: 'Perfekt för små företag som vill komma igång med analys.',
        features: [
          'Google Analytics 4 Setup',
          'Grundläggande Händelsespårning',
          'Månadsrapporter',
          'E-postsupport',
          'GDPR-kompatibel Setup'
        ]
      },
      professional: {
        name: 'Professional',
        price: '7,999',
        description: 'För växande företag som behöver avancerade funktioner.',
        features: [
          'Allt i Starter',
          'Anpassade Dashboards',
          'E-handelsintegration',
          'Matomo Analytics',
          'Prioriterad Support',
          'Månadsoptimering'
        ],
        popular: 'Populär'
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Anpassad',
        description: 'Skräddarsydda lösningar för stora organisationer.',
        features: [
          'Allt i Professional',
          'Anpassad Utveckling',
          'Dedikerad Projektledare',
          'SLA Garanti',
          'Avancerad Integration',
          'Obegränsad Support'
        ]
      },
      getStarted: 'Kom igång',
      contactSales: 'Kontakta Försäljning'
    },
    // Testimonials
    testimonials: {
      badge: 'Recensioner',
      title: 'Vad Våra Kunder Säger',
      description: 'Ta inte bara vårt ord för det. Här är vad våra kunder säger om våra digitala tjänster.',
      reviews: [
        {
          text: 'AnalytiX Pro förvandlade vår förståelse av kundbeteende. Deras GA4-setup och anpassade spårning hjälpte oss att öka konverteringar med 40%.',
          name: 'John Smith',
          role: 'VD, TechCorp'
        },
        {
          text: 'Den integritetsfokuserade Matomo-implementeringen var precis vad vi behövde. Professionell service med utmärkt kontinuerlig support.',
          name: 'Maria Johnson',
          role: 'Marknadschef, EcoFlow'
        },
        {
          text: 'Anpassade analysdashboard gav oss insikter vi aldrig haft tidigare. Teamets expertis är oöverträffad. Rekommenderas varmt!',
          name: 'David Chen',
          role: 'Grundare, StartupX'
        }
      ]
    },
    // Contact Section
    contact: {
      badge: 'Kontakta Oss',
      title: 'Redo att Förvandla Din Digitala Närvaro?',
      description: 'Låt oss diskutera hur vi kan hjälpa dig att låsa upp den fulla potentialen i din data och digitala närvaro.',
      getStarted: 'Kom Igång Idag',
      freeAudit: 'Gratis Analysrevision',
      freeAuditDesc: 'Få en kostnadsfri genomgång av din nuvarande setup med handlingskraftiga rekommendationer.',
      form: {
        name: 'Ditt Namn',
        email: 'Din E-post',
        company: 'Företagsnamn',
        message: 'Berätta om dina digitala behov...',
        send: 'Skicka Meddelande'
      }
    },
    // Footer
    footer: {
      description: 'Förvandlar företag genom datadrivna insikter och avancerade digitala lösningar.',
      services: 'Tjänster',
      company: 'Företag',
      resources: 'Resurser',
      links: {
        about: 'Om Oss',
        caseStudies: 'Fallstudier',
        blog: 'Blogg',
        documentation: 'Dokumentation',
        support: 'Support',
        privacy: 'Integritetspolicy',
        terms: 'Användarvillkor'
      },
      copyright: '© 2025 AnalytiX Pro. Alla rättigheter förbehållna.'
    }
  },
  en: {
    // Navigation
    nav: {
      services: 'Services',
      features: 'Features',
      pricing: 'Pricing',
      testimonials: 'Testimonials',
      contact: 'Contact',
      getStarted: 'Get Started'
    },
    // Hero Section
    hero: {
      badge: 'Advanced Digital Solutions',
      title: 'Transform Your Data Into',
      titleHighlight: 'Actionable Insights',
      description: 'We help businesses unlock the full potential of their data with expert analytics implementation, optimization, and strategic insights. We also build modern websites and e-commerce solutions that drive growth.',
      cta: 'Start Your Digital Journey',
      viewWork: 'View Our Work',
      stats: {
        projects: 'Projects Completed',
        satisfaction: 'Client Satisfaction',
        experience: 'Years Experience'
      }
    },
    // Services Section
    services: {
      badge: 'Our Services',
      title: 'Comprehensive Digital Solutions',
      description: 'From analytics to websites - we provide end-to-end digital solutions that drive measurable business results.',
      analytics: {
        title: 'Google Analytics Setup',
        description: 'Complete Google Analytics 4 implementation with custom event tracking, conversion goals, and advanced reporting.',
        features: ['GA4 Migration & Setup', 'Custom Event Tracking', 'E-commerce Integration', 'Advanced Reporting']
      },
      matomo: {
        title: 'Matomo Analytics',
        description: 'Privacy-focused analytics with Matomo for businesses that prioritize data ownership and GDPR compliance.',
        features: ['Self-hosted Installation', 'GDPR Compliance', 'Custom Dashboards', 'Data Ownership']
      },
      websites: {
        title: 'Website Development',
        description: 'Modern, responsive websites built with the latest technologies for optimal performance and user experience.',
        features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'CMS Integration']
      },
      ecommerce: {
        title: 'E-commerce Solutions',
        description: 'Complete e-commerce platforms with integrated analytics, payment solutions, and inventory management.',
        features: ['Payment Integration', 'Inventory Management', 'Analytics Tracking', 'Mobile Optimized']
      },
      custom: {
        title: 'Custom Solutions',
        description: 'Tailored digital solutions with custom dashboards, KPI tracking, and business intelligence integration.',
        features: ['Custom Dashboards', 'KPI Tracking', 'Data Visualization', 'API Integration']
      },
      audit: {
        title: 'Performance Audits',
        description: 'Comprehensive audits to identify issues, optimize tracking, and improve data quality.',
        features: ['Tracking Audit', 'Data Quality Check', 'Optimization Report', 'Implementation Guide']
      }
    },
    // Features Section
    features: {
      badge: 'Why Choose Us',
      title: 'Data-Driven Excellence',
      description: 'We combine technical expertise with business acumen to deliver digital solutions that truly impact your bottom line.',
      precision: {
        title: 'Precision Tracking',
        description: 'Accurate data collection with custom event tracking and advanced measurement protocols.'
      },
      growth: {
        title: 'Growth Focused',
        description: 'Digital solutions designed to identify growth opportunities and optimize performance.'
      },
      privacy: {
        title: 'Privacy First',
        description: 'GDPR compliant solutions that respect user privacy while delivering powerful insights.'
      },
      fast: {
        title: 'Fast Implementation',
        description: 'Quick setup and deployment with minimal disruption to your existing workflows.'
      }
    },
    // Pricing Section
    pricing: {
      badge: 'Pricing',
      title: 'Choose the Right Plan for You',
      description: 'Flexible pricing options for businesses of all sizes.',
      monthly: 'Monthly',
      yearly: 'Yearly',
      save: 'Save 20%',
      starter: {
        name: 'Starter',
        price: '299',
        description: 'Perfect for small businesses getting started with analytics.',
        features: [
          'Google Analytics 4 Setup',
          'Basic Event Tracking',
          'Monthly Reports',
          'Email Support',
          'GDPR Compliant Setup'
        ]
      },
      professional: {
        name: 'Professional',
        price: '799',
        description: 'For growing businesses that need advanced features.',
        features: [
          'Everything in Starter',
          'Custom Dashboards',
          'E-commerce Integration',
          'Matomo Analytics',
          'Priority Support',
          'Monthly Optimization'
        ],
        popular: 'Popular'
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Tailored solutions for large organizations.',
        features: [
          'Everything in Professional',
          'Custom Development',
          'Dedicated Project Manager',
          'SLA Guarantee',
          'Advanced Integrations',
          'Unlimited Support'
        ]
      },
      getStarted: 'Get Started',
      contactSales: 'Contact Sales'
    },
    // Testimonials
    testimonials: {
      badge: 'Testimonials',
      title: 'What Our Clients Say',
      description: 'Don\'t just take our word for it. Here\'s what our clients have to say about our digital services.',
      reviews: [
        {
          text: 'AnalytiX Pro transformed our understanding of customer behavior. Their GA4 setup and custom tracking helped us increase conversions by 40%.',
          name: 'John Smith',
          role: 'CEO, TechCorp'
        },
        {
          text: 'The privacy-focused Matomo implementation was exactly what we needed. Professional service with excellent ongoing support.',
          name: 'Maria Johnson',
          role: 'Marketing Director, EcoFlow'
        },
        {
          text: 'Custom analytics dashboard gave us insights we never had before. The team\'s expertise is unmatched. Highly recommended!',
          name: 'David Chen',
          role: 'Founder, StartupX'
        }
      ]
    },
    // Contact Section
    contact: {
      badge: 'Get In Touch',
      title: 'Ready to Transform Your Digital Presence?',
      description: 'Let\'s discuss how we can help you unlock the full potential of your data and digital presence.',
      getStarted: 'Get Started Today',
      freeAudit: 'Free Analytics Audit',
      freeAuditDesc: 'Get a complimentary review of your current setup with actionable recommendations.',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        company: 'Company Name',
        message: 'Tell us about your digital needs...',
        send: 'Send Message'
      }
    },
    // Footer
    footer: {
      description: 'Transforming businesses through data-driven insights and advanced digital solutions.',
      services: 'Services',
      company: 'Company',
      resources: 'Resources',
      links: {
        about: 'About Us',
        caseStudies: 'Case Studies',
        blog: 'Blog',
        documentation: 'Documentation',
        support: 'Support',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      },
      copyright: '© 2025 AnalytiX Pro. All rights reserved.'
    }
  }
};

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.sv;
}