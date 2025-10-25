import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navigation
    home: 'Home',
    offers: 'Offers',
    faqs: 'FAQs',
    projects: 'Projects',
    ourBrand: 'Our Brand',
    contact: 'Contact',
    
    // Home Page
    heroTitle: 'Define It, We Make It',
    heroSubtitle: 'Premier Auto Body Repair & Restoration in Harare',
    heroDescription: 'Transform your vehicle from damaged to exceptional. We bring your automotive vision to life with precision, passion, and premier craftsmanship.',
    bookNow: 'Book Now',
    learnMore: 'Learn More',
    getQuote: 'Get Quote',
    
    // Services
    services: 'Our Services',
    servicesTagline: 'Excellence in Every Detail',
    bodyRepair: 'Body Repair',
    bodyRepairDesc: 'Expert collision repair and panel beating services',
    painting: 'Professional Painting',
    paintingDesc: 'Premium paint jobs with color matching technology',
    restoration: 'Full Restoration',
    restorationDesc: 'Complete vehicle restoration to factory standards',
    maintenance: 'Maintenance',
    maintenanceDesc: 'Regular servicing to keep your car in top shape',
    
    // Stats
    yearsExperience: 'Years Experience',
    projectsCompleted: 'Projects Completed',
    happyClients: 'Happy Clients',
    expertTechnicians: 'Expert Technicians',
    
    // CTA
    readyToTransform: 'Ready to Transform Your Vehicle?',
    contactUs: 'Contact Us Today',
    
    // Footer
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved',
    
    // Contact
    getInTouch: 'Get In Touch',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    send: 'Send Message',
    location: 'Location',
    callUs: 'Call Us',
    emailUs: 'Email Us',
    
    // Projects
    ourProjects: 'Our Projects',
    viewProject: 'View Project',
    before: 'Before',
    after: 'After',
    
    // Offers
    specialOffers: 'Special Offers',
    limitedTime: 'Limited Time',
    viewOffer: 'View Offer',
    
    // FAQs
    frequentlyAsked: 'Frequently Asked Questions',
    
    // Brand
    aboutUs: 'About Us',
    ourStory: 'Our Story',
    ourMission: 'Our Mission',
    ourVision: 'Our Vision',
  },
  
  nd: {
    // Navigation (Ndebele)
    home: 'Ikhaya',
    offers: 'Iminikelo',
    faqs: 'Imibuzo',
    projects: 'Imisebenzi',
    ourBrand: 'Ibizo Lethu',
    contact: 'Xhumana',
    
    // Home Page
    heroTitle: 'Chaza, Sikwenze',
    heroSubtitle: 'Ukulungisa Imoto Okuhle Kakhulu eHarare',
    heroDescription: 'Siyaguqula imoto yakho ibe enhle kakhulu. Silethela iphupho lakho lemoto ngobuchwepheshe nobungcweti.',
    bookNow: 'Bhukha Manje',
    learnMore: 'Funda Okunengi',
    getQuote: 'Thola Intengo',
    
    // Services
    services: 'Imithi Yethu',
    servicesTagline: 'Ubuhle Ezintweni Zonke',
    bodyRepair: 'Ukulungisa Umzimba',
    bodyRepairDesc: 'Ukulungisa imoto elimele nangokuyishaya',
    painting: 'Ukupenda Kuhle',
    paintingDesc: 'Ukupenda okuhle kakhulu ngombala ofanayo',
    restoration: 'Ukuvuselela',
    restorationDesc: 'Ukuvuselela imoto ibe njengentsha',
    maintenance: 'Ukunakekela',
    maintenanceDesc: 'Ukunakekela imoto yakho njalo',
    
    // Stats
    yearsExperience: 'Iminyaka Yesipiliyoni',
    projectsCompleted: 'Imisebenzi Ephelele',
    happyClients: 'Amakhasimende Athokozile',
    expertTechnicians: 'Abasebenzi Abangcweti',
    
    // CTA
    readyToTransform: 'Ulungele Ukuguqula Imoto Yakho?',
    contactUs: 'Sixhumane Namuhla',
    
    // Footer
    quickLinks: 'Izixhumanisi Ezisheshayo',
    followUs: 'Slandele',
    allRightsReserved: 'Wonke amalungelo agodliwe',
    
    // Contact
    getInTouch: 'Sixhumane',
    name: 'Ibizo',
    email: 'I-imeyili',
    phone: 'Ucingo',
    message: 'Umlayezo',
    send: 'Thumela',
    location: 'Indawo',
    callUs: 'Sitshalele',
    emailUs: 'Sithumelele',
    
    // Projects
    ourProjects: 'Imisebenzi Yethu',
    viewProject: 'Bona Umsebenzi',
    before: 'Ngaphambili',
    after: 'Ngemva',
    
    // Offers
    specialOffers: 'Iminikelo Ekhethekile',
    limitedTime: 'Isikhathi Esilinganiselwe',
    viewOffer: 'Bona Umnikelo',
    
    // FAQs
    frequentlyAsked: 'Imibuzo Ebuzwa Kanengi',
    
    // Brand
    aboutUs: 'Ngathi',
    ourStory: 'Indaba Yethu',
    ourMission: 'Injongo Yethu',
    ourVision: 'Umbono Wethu',
  },
  
  es: {
    // Navigation (Spanish)
    home: 'Inicio',
    offers: 'Ofertas',
    faqs: 'Preguntas',
    projects: 'Proyectos',
    ourBrand: 'Nuestra Marca',
    contact: 'Contacto',
    
    // Home Page
    heroTitle: 'Defínelo, Lo Hacemos',
    heroSubtitle: 'Reparación Premier de Carrocería en Harare',
    heroDescription: 'Transformamos su vehículo de dañado a excepcional. Damos vida a su visión automotriz con precisión, pasión y artesanía premier.',
    bookNow: 'Reservar Ahora',
    learnMore: 'Saber Más',
    getQuote: 'Obtener Cotización',
    
    // Services
    services: 'Nuestros Servicios',
    servicesTagline: 'Excelencia en Cada Detalle',
    bodyRepair: 'Reparación de Carrocería',
    bodyRepairDesc: 'Servicios expertos de reparación de colisiones',
    painting: 'Pintura Profesional',
    paintingDesc: 'Trabajos de pintura premium con tecnología de igualación de color',
    restoration: 'Restauración Completa',
    restorationDesc: 'Restauración completa del vehículo a estándares de fábrica',
    maintenance: 'Mantenimiento',
    maintenanceDesc: 'Servicio regular para mantener su auto en óptimas condiciones',
    
    // Stats
    yearsExperience: 'Años de Experiencia',
    projectsCompleted: 'Proyectos Completados',
    happyClients: 'Clientes Felices',
    expertTechnicians: 'Técnicos Expertos',
    
    // CTA
    readyToTransform: '¿Listo para Transformar su Vehículo?',
    contactUs: 'Contáctenos Hoy',
    
    // Footer
    quickLinks: 'Enlaces Rápidos',
    followUs: 'Síguenos',
    allRightsReserved: 'Todos los derechos reservados',
    
    // Contact
    getInTouch: 'Póngase en Contacto',
    name: 'Nombre',
    email: 'Correo',
    phone: 'Teléfono',
    message: 'Mensaje',
    send: 'Enviar Mensaje',
    location: 'Ubicación',
    callUs: 'Llámenos',
    emailUs: 'Envíenos un Correo',
    
    // Projects
    ourProjects: 'Nuestros Proyectos',
    viewProject: 'Ver Proyecto',
    before: 'Antes',
    after: 'Después',
    
    // Offers
    specialOffers: 'Ofertas Especiales',
    limitedTime: 'Tiempo Limitado',
    viewOffer: 'Ver Oferta',
    
    // FAQs
    frequentlyAsked: 'Preguntas Frecuentes',
    
    // Brand
    aboutUs: 'Sobre Nosotros',
    ourStory: 'Nuestra Historia',
    ourMission: 'Nuestra Misión',
    ourVision: 'Nuestra Visión',
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  const t = (key) => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};