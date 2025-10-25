import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Globe, MapPin, Search } from 'lucide-react';
import { useLanguage } from './lungauage';
import { CiMenuFries } from "react-icons/ci";
import { GiWireframeGlobe } from "react-icons/gi";
import SearchModal from './search';
import { GiWorld } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('home') },
    { path: '/offers', label: t('offers') },
    { path: '/projects', label: t('projects') },
    { path: '/our-brand', label: t('ourBrand') },
    { path: '/faqs', label: t('faqs') },
    { path: '/contact', label: t('contact') },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'nd', name: 'Ndebele', flag: '🇿🇼' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  return (
    <div className="w-full">
      {/* Search Modal */}
      <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />

      {/* Top Bar */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:block w-full bg-gradient-to-r from-blue-900 via-blue-800 to-red-600 text-white py-2 px-4"
      >
        <div className="container mx-auto max-w-7xl flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a 
              href="tel:+263242500743" 
              className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+263 242 500 743</span>
            </a>
            <a 
              href="mailto:info@grandauto.co.zw" 
              className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span className="font-medium">info@grandauto.co.zw</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="font-medium">31 Airport Road, Hatfield, Harare</span>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white shadow-lg backdrop-blur-md bg-opacity-95' 
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative flex-shrink-0"
              >
                <div className="w-16 h-16 sm:w-16 sm:h-16 p-1">
                  <div className="w-full h-full rounded-sm bg-white flex items-center justify-center">
                    <img src='/logo2.png' alt="Grand Auto Premier" className="w-14 h-12 sm:w-14 sm:h-14" />
                  </div>
                </div>
              </motion.div>
              <div className="">
                <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
                  Grand Auto
                </h1>
                <p className="text-xs text-gray-600 font-semibold tracking-wide">PREMIER</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group px-4 py-2"
                >
                  <span className={`gellix-font font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}>
                    {link.label}
                  </span>
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-red-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Search, Language Switcher & CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSearch(true)}
                className="p-2.5 rounded-sm hover:bg-gray-100 transition-colors duration-300 group"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </motion.button>

              <div className="relative">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="flex items-center gap-2 px-3 py-2 rounded-sm hover:bg-gray-100 transition-colors duration-300"
                >
                  <GiWireframeGlobe className="w-4 h-4 text-gray-600" />
                  <span className="text-xl">
                    {languages.find(l => l.code === language)?.flag}
                  </span>
                </button>
                <AnimatePresence>
                  {showLangMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-sm shadow-xl border border-gray-200 py-2 overflow-hidden"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setShowLangMenu(false);
                          }}
                          className={`w-full px-4 py-2 text-left hover:bg-blue-50 transition-colors duration-200 flex items-center gap-3 ${
                            language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                          }`}
                        >
                          <span className="text-xl">{lang.flag}</span>
                          <span className="gellix-font text-sm font-medium">{lang.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {t('bookNow')}
                </motion.button>
              </Link>
            </div>

            {/* Mobile Search and Menu Buttons */}
            <div className="lg:hidden flex items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSearch(true)}
                className="p-2 rounded-sm hover:bg-gray-100 transition-colors duration-300"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-gray-700" />
              </motion.button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-sm hover:bg-gray-100 transition-colors duration-300"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <CiMenuFries className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200 bg-white"
            >
              <div className="container mx-auto px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors duration-300 ${
                      location.pathname === link.path
                        ? 'bg-blue-50 text-blue-600 font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-3 px-4 font-medium">Language</p>
                  <div className="grid grid-cols-3 gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsOpen(false);
                        }}
                        className={`px-3 py-2 rounded-sm text-sm font-medium transition-colors duration-300 ${
                          language === lang.code
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <span className="block text-lg mb-1">{lang.flag}</span>
                        <span className="block text-xs">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {t('bookNow')}
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;