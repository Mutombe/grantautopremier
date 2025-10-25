import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, Send, Facebook, 
  Instagram, Twitter, Linkedin, MessageCircle, CheckCircle 
} from 'lucide-react';
import { useLanguage } from './lungauage';
import { toast } from 'sonner';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Body Repair',
    'Professional Painting',
    'Full Restoration',
    'Dent Removal',
    'Collision Repair',
    'Regular Maintenance',
    'Custom Work',
    'Other'
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: t('phone'),
      details: ['+263 242 500 743', '+263 77 283 6215'],
      action: 'tel:+263242500743',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      icon: Mail,
      title: t('email'),
      details: ['info@grandauto.co.zw'],
      action: 'mailto:info@grandauto.co.zw',
      color: 'from-red-600 to-pink-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['+263 77 283 6215'],
      action: 'https://wa.me/263772836215',
      color: 'from-green-600 to-emerald-500'
    },
    {
      icon: MapPin,
      title: t('location'),
      details: ['31 Airport Road', 'Hatfield, Harare', 'Zimbabwe'],
      action: 'https://maps.google.com/?q=31+Airport+Road+Hatfield+Harare',
      color: 'from-purple-600 to-indigo-500'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/grandautopremierzw', name: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/grandautopremierzw', name: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/grandautopremierzw', name: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/grandautopremier', name: 'LinkedIn' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you soon.', {
        duration: 5000,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-2 rounded-sm mb-6"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-bold">GET IN TOUCH</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
            {t('contact')}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question or ready to book your service? We'd love to hear from you. 
            Reach out and let's get your vehicle looking its best!
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.action}
              target={method.action.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="block"
            >
              <div className="bg-white rounded-sm p-6 shadow-lg hover:shadow-2xl transition h-full">
                <div className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-sm flex items-center justify-center mb-4`}>
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{method.title}</h3>
                {method.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white rounded-sm p-8 md:p-10 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-sm border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-sm border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('phone')} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-sm border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition"
                      placeholder="+263 ..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-sm border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-sm border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition resize-none"
                    placeholder="Tell us about your vehicle and what you need..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-sm font-semibold text-lg shadow-lg hover:shadow-xl transition flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-sm animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t('send')}</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Information Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Business Hours */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-sm p-8 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Business Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="font-semibold">Monday - Friday</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="font-semibold">Saturday</span>
                  <span>8:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Sunday</span>
                  <span className="text-white/70">Closed</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-sm overflow-hidden shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Visit Our Workshop</h4>
                    <p className="text-gray-600 mb-4">31 Airport Road, Hatfield, Harare</p>
                    <a
                      href="https://maps.google.com/?q=31+Airport+Road+Hatfield+Harare"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-blue-600 text-white rounded-sm font-semibold hover:bg-blue-700 transition"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-red-600 to-pink-600 rounded-sm p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <p className="text-white/90 mb-6">
                Stay updated with our latest projects, offers, and automotive tips!
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-sm flex items-center justify-center hover:bg-white/30 transition"
                    title={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-sm p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Why Choose Us?</h3>
              <div className="space-y-4">
                {[
                  '15+ Years of Excellence',
                  '1500+ Completed Projects',
                  '800+ Satisfied Clients',
                  '98% Customer Satisfaction',
                  'State-of-the-Art Equipment',
                  'Certified Technicians'
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (index * 0.05) }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{stat}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Emergency Contact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-sm p-8 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need Urgent Assistance?
          </h3>
          <p className="text-xl text-white/90 mb-6">
            For emergency repairs or urgent inquiries, call us directly!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+263242500743">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-orange-600 rounded-sm font-semibold text-lg shadow-xl hover:shadow-2xl transition flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: +263 242 500 743</span>
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
            {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition z-40"
      >
        ↑
      </motion.button>
    </div>
  );
};

export default Contact;