import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Facebook, Instagram, 
  Twitter, Linkedin, Clock, Wrench 
} from 'lucide-react';
import { useLanguage } from './lungauage';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: t('home') },
    { path: '/offers', label: t('offers') },
    { path: '/projects', label: t('projects') },
    { path: '/our-brand', label: t('ourBrand') },
    { path: '/faqs', label: t('faqs') },
    { path: '/contact', label: t('contact') },
  ];

  const services = [
    'Body Repair & Restoration',
    'Professional Painting',
    'Collision Repair',
    'Panel Beating',
    'Dent Removal',
    'Full Vehicle Servicing',
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/grandautopremierzw', color: 'hover:text-blue-600' },
    { icon: Instagram, href: 'https://instagram.com/grandautopremierzw', color: 'hover:text-pink-600' },
    { icon: Twitter, href: 'https://twitter.com/grandautopremierzw', color: 'hover:text-sky-500' },
    { icon: Linkedin, href: 'https://linkedin.com/company/grandautopremier', color: 'hover:text-blue-700' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-red-500 p-0.5">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Grand Auto</h3>
                <p className="text-sm text-yellow-400 font-semibold">PREMIER</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              {t('heroSubtitle')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 text-yellow-400">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition transform"
                  >
                    › {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-yellow-400">{t('services')}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span className="hover:text-white transition">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 text-yellow-400">{t('contact')}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">31 Airport Road</p>
                  <p className="text-gray-300">Hatfield, Harare</p>
                  <p className="text-gray-300">Zimbabwe</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <a href="tel:+263242500743" className="text-gray-300 hover:text-white transition block">
                    +263 242 500 743
                  </a>
                  <a href="tel:+263772836215" className="text-gray-300 hover:text-white transition block">
                    +263 77 283 6215
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@grandauto.co.zw" className="text-gray-300 hover:text-white transition">
                  info@grandauto.co.zw
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Mon - Fri: 8AM - 5PM</p>
                  <p className="text-gray-300">Sat: 8AM - 1PM</p>
                  <p className="text-gray-300">Sun: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Grand Auto Premier. {t('allRightsReserved')}.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;