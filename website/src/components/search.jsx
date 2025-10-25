import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, FileText, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from './lungauage';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef(null);
  const { t } = useLanguage();

  // Sample searchable content - you can expand this based on your actual content
  const searchableContent = [
    {
      title: t('home'),
      path: '/',
      description: 'Grand Auto Premier - Your trusted automotive service provider',
      keywords: ['home', 'main', 'landing', 'start', 'automotive', 'service'],
      category: 'Page'
    },
    {
      title: t('offers'),
      path: '/offers',
      description: 'Special offers and promotions on our automotive services',
      keywords: ['offers', 'deals', 'promotions', 'discounts', 'special', 'pricing'],
      category: 'Page'
    },
    {
      title: t('projects'),
      path: '/projects',
      description: 'View our completed automotive projects and portfolio',
      keywords: ['projects', 'portfolio', 'work', 'completed', 'showcase', 'gallery'],
      category: 'Page'
    },
    {
      title: t('ourBrand'),
      path: '/our-brand',
      description: 'Learn about Grand Auto Premier brand and values',
      keywords: ['brand', 'about', 'company', 'values', 'mission', 'vision', 'team'],
      category: 'Page'
    },
    {
      title: t('faqs'),
      path: '/faqs',
      description: 'Frequently asked questions about our services',
      keywords: ['faq', 'questions', 'answers', 'help', 'support', 'information'],
      category: 'Page'
    },
    {
      title: t('contact'),
      path: '/contact',
      description: 'Get in touch with Grand Auto Premier',
      keywords: ['contact', 'reach', 'location', 'address', 'phone', 'email', 'map'],
      category: 'Page'
    },
    {
      title: 'Phone: +263 242 500 743',
      path: 'tel:+263242500743',
      description: 'Call us for inquiries and appointments',
      keywords: ['phone', 'call', 'telephone', 'contact', 'reach'],
      category: 'Contact',
      isExternal: true
    },
    {
      title: 'Email: info@grandauto.co.zw',
      path: 'mailto:info@grandauto.co.zw',
      description: 'Send us an email for inquiries',
      keywords: ['email', 'mail', 'message', 'contact', 'write'],
      category: 'Contact',
      isExternal: true
    },
    {
      title: '31 Airport Road, Hatfield, Harare',
      path: '/contact',
      description: 'Visit our location in Harare',
      keywords: ['location', 'address', 'map', 'directions', 'visit', 'harare', 'airport road'],
      category: 'Location'
    }
  ];

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const results = searchableContent.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(query);
        const descriptionMatch = item.description.toLowerCase().includes(query);
        const keywordsMatch = item.keywords.some(keyword => 
          keyword.toLowerCase().includes(query)
        );
        return titleMatch || descriptionMatch || keywordsMatch;
      });
      setSearchResults(results);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Close on Escape
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      // Open on Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (!isOpen) {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleClose = () => {
    setSearchQuery('');
    setSearchResults([]);
    onClose();
  };

  const handleResultClick = () => {
    handleClose();
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Contact':
        return <Phone className="w-4 h-4" />;
      case 'Location':
        return <Mail className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4 pt-20"
          >
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 p-4 border-b border-gray-200">
                <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for pages, services, or information..."
                  className="flex-1 outline-none text-gray-900 placeholder-gray-400 text-lg"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                )}
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {searchQuery.trim() === '' ? (
                  <div className="p-8 text-center">
                    <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500 text-sm">
                      Start typing to search...
                    </p>
                    <p className="text-gray-400 text-xs mt-2">
                      Try searching for pages, services, or contact information
                    </p>
                  </div>
                ) : isSearching ? (
                  <div className="p-8 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      {[0, 0.2, 0.4].map((delay, index) => (
                        <motion.div
                          key={index}
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1.3, 0.8],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: delay,
                            ease: "easeInOut",
                          }}
                          className="w-2 h-2 bg-gradient-to-r from-blue-500 to-red-500 rounded-full"
                        />
                      ))}
                    </div>
                    <p className="text-gray-500 text-sm mt-3">Searching...</p>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="py-2">
                    {searchResults.map((result, index) => (
                      result.isExternal ? (
                        <a
                          key={index}
                          href={result.path}
                          onClick={handleResultClick}
                          className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                            {getCategoryIcon(result.category)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-sm font-semibold text-gray-900 truncate">
                                {result.title}
                              </h3>
                              <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full flex-shrink-0">
                                {result.category}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 line-clamp-1">
                              {result.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 flex-shrink-0 transition-colors" />
                        </a>
                      ) : (
                        <Link
                          key={index}
                          to={result.path}
                          onClick={handleResultClick}
                          className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                            {getCategoryIcon(result.category)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-sm font-semibold text-gray-900 truncate">
                                {result.title}
                              </h3>
                              <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full flex-shrink-0">
                                {result.category}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 line-clamp-1">
                              {result.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 flex-shrink-0 transition-colors" />
                        </Link>
                      )
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-600 font-medium mb-1">No results found</p>
                    <p className="text-gray-400 text-sm">
                      Try searching with different keywords
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              {searchQuery.trim() === '' && (
                <div className="border-t border-gray-200 px-4 py-3 bg-gray-50">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">↵</kbd>
                        to select
                      </span>
                      <span className="flex items-center gap-1">
                        <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">ESC</kbd>
                        to close
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;