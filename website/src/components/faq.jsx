import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, Phone, Mail, Clock, HelpCircle } from 'lucide-react';
import { useLanguage } from './lungauage';

const FAQs = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('general');

  const categories = [
    { id: 'general', name: 'General', icon: HelpCircle },
    { id: 'services', name: 'Services', icon: MessageCircle },
    { id: 'pricing', name: 'Pricing', icon: Clock },
    { id: 'process', name: 'Process', icon: Phone },
  ];

  const faqs = {
    general: [
      {
        question: 'What services does Grand Auto Premier offer?',
        answer: 'We offer comprehensive auto body services including collision repair, panel beating, professional painting, dent removal, full vehicle restoration, and regular maintenance. Our skilled technicians handle everything from minor scratches to major collision damage.'
      },
      {
        question: 'Where are you located?',
        answer: 'We are located at 31 Airport Road, Hatfield, Harare, Zimbabwe. Our facility is easily accessible and features state-of-the-art equipment for all your auto body repair needs.'
      },
      {
        question: 'What are your operating hours?',
        answer: 'We are open Monday to Friday from 8:00 AM to 5:00 PM, and Saturdays from 8:00 AM to 1:00 PM. We are closed on Sundays and public holidays. For emergencies, please call us to discuss special arrangements.'
      },
      {
        question: 'Do you work with insurance companies?',
        answer: 'Yes, we work with all major insurance companies in Zimbabwe. We can handle the entire insurance claim process on your behalf, making the repair process smooth and hassle-free for you.'
      },
      {
        question: 'How long have you been in business?',
        answer: 'Grand Auto Premier has been serving the Harare community for over 15 years. Our experienced team has completed over 1,500 successful projects and earned the trust of 800+ satisfied clients.'
      }
    ],
    services: [
      {
        question: 'What types of vehicles do you service?',
        answer: 'We service all types of vehicles including sedans, SUVs, trucks, vans, and even classic cars. Whether you drive a Toyota, Mercedes-Benz, BMW, Honda, or any other brand, our technicians have the expertise to handle your vehicle.'
      },
      {
        question: 'Do you offer mobile services?',
        answer: 'While our main services are performed at our facility to ensure the highest quality, we do offer mobile inspection services for insurance assessments and initial damage evaluation. Contact us to discuss your specific needs.'
      },
      {
        question: 'Can you match my car\'s paint color exactly?',
        answer: 'Absolutely! We use advanced color-matching technology to ensure your vehicle\'s paint matches perfectly. Our computerized system can match any factory color, and we also handle custom colors and special finishes.'
      },
      {
        question: 'Do you provide warranty on your work?',
        answer: 'Yes, all our work comes with a comprehensive warranty. Standard repairs include a 6-month warranty, while premium restoration packages come with up to 1-year warranty coverage. We stand behind the quality of our work.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept cash, bank transfers, mobile money (EcoCash, OneMoney), and major credit/debit cards. We also offer flexible payment plans for larger projects. Contact us to discuss payment options that work for you.'
      }
    ],
    pricing: [
      {
        question: 'How much does a typical repair cost?',
        answer: 'Repair costs vary depending on the extent of damage and type of service required. Minor dent repairs can start from $100, while major collision repairs can range from $1,000 to $3,000+. We provide free estimates before any work begins.'
      },
      {
        question: 'Do you offer free estimates?',
        answer: 'Yes! We provide completely free, no-obligation estimates for all services. Simply bring your vehicle to our facility or send us photos via WhatsApp or email, and we\'ll provide a detailed quote within 24 hours.'
      },
      {
        question: 'Are there any hidden fees?',
        answer: 'No, we believe in complete transparency. Our estimates include all labor, materials, and additional costs. If any unexpected issues arise during repair, we contact you immediately for approval before proceeding.'
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, we offer flexible payment plans for major repairs and restoration projects. Typically, we require a 30% deposit to start work, with the balance payable upon completion. Custom arrangements can be discussed based on your situation.'
      },
      {
        question: 'Can I get a discount for multiple services?',
        answer: 'Absolutely! We offer package deals and discounts for bundled services. Check our Offers page for current promotions, or contact us to discuss a custom package that fits your needs and budget.'
      }
    ],
    process: [
      {
        question: 'How long does a typical repair take?',
        answer: 'Timeline varies by project complexity. Minor repairs (dents, scratches) typically take 1-3 days, medium repairs (panel replacement, painting) take 1-2 weeks, and major restoration projects can take 2-4 weeks. We provide estimated completion dates with every quote.'
      },
      {
        question: 'Can I drop off my car after hours?',
        answer: 'Yes, we offer convenient drop-off and pick-up arrangements. Contact us in advance to schedule after-hours service, and we\'ll ensure your vehicle is secured and work begins as soon as possible.'
      },
      {
        question: 'Will you provide updates during the repair?',
        answer: 'Definitely! We believe in keeping our clients informed. You\'ll receive regular updates via phone or WhatsApp, including photos of progress. You\'re also welcome to visit our facility anytime during business hours to check on your vehicle.'
      },
      {
        question: 'Do you provide courtesy transportation?',
        answer: 'While we don\'t have a rental service, we can help arrange transportation through our partner companies at discounted rates. For major repairs, we also work with some insurance companies that provide courtesy vehicles.'
      },
      {
        question: 'What happens if I\'m not satisfied with the work?',
        answer: 'Customer satisfaction is our top priority. If you\'re not completely satisfied with any aspect of our work, we\'ll make it right at no additional cost. Our warranty ensures you\'re protected, and we stand behind every job we complete.'
      }
    ]
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-sm mb-6"
          >
            <HelpCircle className="w-5 h-5" />
            <span className="text-sm font-bold">HELP CENTER</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
            {t('frequentlyAsked')}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, pricing, and process. Can't find what you're looking for? Contact us directly!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenIndex(0);
                }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-sm font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {faqs[activeCategory].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition"
                >
                  <span className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-blue-600" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-sm p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-sm filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-sm filter blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Our friendly team is here to help! Get in touch and we'll respond as quickly as possible.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="tel:+263242500743">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 backdrop-blur-md rounded-sm p-6 hover:bg-white/20 transition cursor-pointer"
                  >
                    <Phone className="w-12 h-12 mx-auto mb-4" />
                    <h4 className="font-bold mb-2">Call Us</h4>
                    <p className="text-sm text-white/80">+263 242 500 743</p>
                  </motion.div>
                </a>

                <a href="mailto:info@grandauto.co.zw">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 backdrop-blur-md rounded-sm p-6 hover:bg-white/20 transition cursor-pointer"
                  >
                    <Mail className="w-12 h-12 mx-auto mb-4" />
                    <h4 className="font-bold mb-2">Email Us</h4>
                    <p className="text-sm text-white/80">info@grandauto.co.zw</p>
                  </motion.div>
                </a>

                <a href="https://wa.me/263772836215">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 backdrop-blur-md rounded-sm p-6 hover:bg-white/20 transition cursor-pointer"
                  >
                    <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                    <h4 className="font-bold mb-2">WhatsApp</h4>
                    <p className="text-sm text-white/80">Chat with us</p>
                  </motion.div>
                </a>
              </div>
            </div>
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

export default FAQs;