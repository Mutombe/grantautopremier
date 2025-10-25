import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Tag, Clock, Gift, Sparkles, Check, ArrowRight, 
  Star, Percent, Calendar, Phone, Zap, TrendingUp
} from 'lucide-react';
import { useLanguage } from './lungauage';
import { toast } from 'sonner';

const Offers = () => {
  const { t } = useLanguage();
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const offers = [
    {
      id: 1,
      title: 'New Year Special',
      discount: '25% OFF',
      validUntil: 'December 31, 2025',
      description: 'Get 25% off on all body repair services',
      features: [
        'Full body inspection',
        'Professional panel beating',
        'Quality paint job',
        '6-month warranty'
      ],
      color: 'from-blue-600 to-cyan-500',
      icon: Sparkles,
      badge: 'POPULAR',
      originalPrice: '$1000',
      discountedPrice: '$750',
      size: 'large',
      layout: 'horizontal',
      bgImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80', // Car repair workshop
      imagePosition: 'center'
    },
    {
      id: 2,
      title: 'Paint Package Deal',
      discount: '30% OFF',
      validUntil: 'January 15, 2026',
      description: 'Premium paint services at unbeatable prices',
      features: [
        'Color matching technology',
        'Multi-layer coating',
        'Ceramic protection',
        'Free touch-up kit'
      ],
      color: 'from-red-600 to-pink-500',
      icon: Gift,
      badge: 'LIMITED',
      originalPrice: '$800',
      discountedPrice: '$560',
      size: 'medium',
      layout: 'vertical',
      bgImage: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80', // Car painting
      imagePosition: 'right'
    },
    {
      id: 3,
      title: 'Full Restoration Bundle',
      discount: '20% OFF',
      validUntil: 'February 28, 2026',
      description: 'Complete vehicle restoration package',
      features: [
        'Complete disassembly',
        'Rust treatment',
        'Full body work',
        'Complete repaint',
        'Interior detailing'
      ],
      color: 'from-yellow-600 to-orange-500',
      icon: Star,
      badge: 'PREMIUM',
      originalPrice: '$3000',
      discountedPrice: '$2400',
      size: 'large',
      layout: 'vertical',
      bgImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80', // Classic car restoration
      imagePosition: 'center'
    },
    {
      id: 4,
      title: 'Quick Fix Special',
      discount: '15% OFF',
      validUntil: 'January 30, 2026',
      description: 'Fast turnaround for minor repairs',
      features: [
        'Dent removal',
        'Scratch repair',
        'Minor paint touch-ups',
        'Same-day service'
      ],
      color: 'from-green-600 to-emerald-500',
      icon: Clock,
      badge: 'FAST',
      originalPrice: '$300',
      discountedPrice: '$255',
      size: 'small',
      layout: 'compact',
      bgImage: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&q=80', // Dent repair
      imagePosition: 'left'
    },
    {
      id: 5,
      title: 'Collision Repair Package',
      discount: '18% OFF',
      validUntil: 'March 15, 2026',
      description: 'Comprehensive collision damage repair',
      features: [
        'Insurance liaison',
        'Frame alignment',
        'Panel replacement',
        'Professional painting',
        '1-year warranty'
      ],
      color: 'from-purple-600 to-indigo-500',
      icon: Tag,
      badge: 'COMPREHENSIVE',
      originalPrice: '$2000',
      discountedPrice: '$1640',
      size: 'medium',
      layout: 'horizontal',
      bgImage: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80', // Collision repair
      imagePosition: 'center'
    },
    {
      id: 6,
      title: 'Seasonal Maintenance',
      discount: '22% OFF',
      validUntil: 'April 30, 2026',
      description: 'Complete vehicle inspection and maintenance',
      features: [
        'Full vehicle inspection',
        'Minor repairs included',
        'Fluid top-up',
        'Tire check',
        'Complimentary wash'
      ],
      color: 'from-teal-600 to-cyan-500',
      icon: Percent,
      badge: 'VALUE',
      originalPrice: '$150',
      discountedPrice: '$117',
      size: 'small',
      layout: 'compact',
      bgImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80', // Car maintenance
      imagePosition: 'right'
    }
  ];

  const handleClaimOffer = (offer) => {
    toast.success(`Great choice! We'll contact you about the ${offer.title} offer.`, {
      duration: 4000,
    });
    setSelectedOffer(offer);
  };

  const getGridClass = (size, layout) => {
    switch(size) {
      case 'large':
        return layout === 'horizontal' 
          ? 'md:col-span-2 md:row-span-1' 
          : 'md:col-span-1 md:row-span-2';
      case 'medium':
        return layout === 'horizontal'
          ? 'md:col-span-2 md:row-span-1'
          : 'md:col-span-1 md:row-span-1';
      case 'small':
        return 'md:col-span-1 md:row-span-1';
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  return (
    <div className="min-h-screen py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 max-w-7xl">
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-3 rounded-sm mb-6 shadow-lg"
          >
            <Zap className="w-5 h-5" />
            <span className="text-sm font-bold tracking-wide">{t('specialOffers')}</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-600">
            Exclusive Deals
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Save big on premium auto body services with our limited-time offers. Quality work at unbeatable prices!
          </p>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 auto-rows-fr">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className={`${getGridClass(offer.size, offer.layout)} relative group`}
              onMouseEnter={() => setHoveredCard(offer.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow effect on hover */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${offer.color} rounded-sm blur-xl opacity-0 group-hover:opacity-40 transition duration-500`}
              />

              <div className={`relative h-full bg-white rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500`}>
                
                {/* Background Image with Multiple Overlays */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Base Image */}
                  <motion.div
                    animate={hoveredCard === offer.id ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${offer.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: offer.imagePosition,
                    }}
                  />
                  
                  {/* Gradient Overlay - Primary Color */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-60`}
                  />
                  
                  {/* Dark Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Soft Light Blend Mode Overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${offer.color} mix-blend-soft-light opacity-50`}
                  />
                  
                  {/* Noise Texture (optional for premium feel) */}
                  <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                    style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
                    }}
                  />
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={hoveredCard === offer.id ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                  className="absolute top-4 right-4 z-20"
                >
                  <div className={`bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-sm text-xs font-bold shadow-2xl`}>
                    {offer.badge}
                  </div>
                </motion.div>

                {/* Content Layout */}
                <div className={`relative z-10 h-full flex flex-col ${
                  offer.layout === 'horizontal' ? 'md:flex-row md:items-center md:gap-8' : 'flex-col'
                } ${offer.size === 'large' ? 'p-8' : 'p-6'}`}>
                  
                  {/* Icon & Title Section */}
                  <div className={`${offer.layout === 'horizontal' ? 'md:w-1/2' : 'mb-6'}`}>
                    <motion.div
                      animate={hoveredCard === offer.id ? { scale: 1.1, rotate: 360 } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6 }}
                      className={`w-${offer.size === 'small' ? '14' : '20'} h-${offer.size === 'small' ? '14' : '20'} bg-white/20 backdrop-blur-xl border-2 border-white/30 rounded-sm flex items-center justify-center mb-4 shadow-2xl`}
                    >
                      <offer.icon className={`w-${offer.size === 'small' ? '7' : '10'} h-${offer.size === 'small' ? '7' : '10'} text-white drop-shadow-lg`} />
                    </motion.div>
                    
                    <h3 className={`font-bold mb-2 text-white drop-shadow-lg ${
                      offer.size === 'large' ? 'text-3xl' : offer.size === 'medium' ? 'text-2xl' : 'text-xl'
                    }`}>
                      {offer.title}
                    </h3>
                    
                    <p className={`text-white/90 mb-4 drop-shadow-md ${offer.size === 'small' ? 'text-sm' : 'text-base'}`}>
                      {offer.description}
                    </p>
                    
                    {/* Discount Badge */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`inline-flex items-center bg-white/25 backdrop-blur-xl border-2 border-white/40 text-white rounded-sm px-6 py-3 shadow-2xl`}
                    >
                      <span className={`font-black drop-shadow-lg ${offer.size === 'large' ? 'text-4xl' : 'text-3xl'}`}>
                        {offer.discount}
                      </span>
                    </motion.div>
                  </div>

                  {/* Details Section */}
                  <div className={`flex-1 ${offer.layout === 'horizontal' ? 'md:w-1/2' : 'mt-auto'}`}>
                    {/* Price Comparison */}
                    <div className="mb-4 p-4 bg-white/15 backdrop-blur-xl border border-white/30 rounded-sm shadow-2xl">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-white/60 line-through mb-1">{offer.originalPrice}</p>
                          <p className={`font-black text-white drop-shadow-lg ${
                            offer.size === 'large' ? 'text-3xl' : 'text-2xl'
                          }`}>
                            {offer.discountedPrice}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-white/80 mb-1">Save</p>
                          <motion.p 
                            whileHover={{ scale: 1.1 }}
                            className="text-2xl font-black text-green-300 drop-shadow-lg"
                          >
                            ${parseInt(offer.originalPrice.replace('$', '')) - parseInt(offer.discountedPrice.replace('$', ''))}
                          </motion.p>
                        </div>
                      </div>
                    </div>

                    {/* Features - Only show for medium and large cards */}
                    {offer.size !== 'small' && (
                      <div className="mb-4 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-sm">
                        <h4 className="font-bold text-white mb-3 text-sm flex items-center gap-2 drop-shadow-md">
                          <TrendingUp className="w-4 h-4" />
                          What's Included:
                        </h4>
                        <ul className="space-y-1.5">
                          {offer.features.slice(0, offer.size === 'large' ? 5 : 3).map((feature, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + i * 0.05 }}
                              className="flex items-start space-x-2 text-sm"
                            >
                              <Check className="w-4 h-4 text-green-300 flex-shrink-0 mt-0.5 drop-shadow-lg" />
                              <span className="text-white/90 drop-shadow-md">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Validity */}
                    <div className="flex items-center space-x-2 text-xs mb-4 p-2.5 bg-yellow-500/20 backdrop-blur-md border border-yellow-300/30 rounded-sm">
                      <Calendar className="w-3.5 h-3.5 text-yellow-200" />
                      <span className="text-yellow-100 drop-shadow-md">Until {offer.validUntil}</span>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleClaimOffer(offer)}
                      className={`w-full py-3.5 bg-white/95 backdrop-blur-sm text-gray-900 rounded-sm font-bold shadow-2xl transition flex items-center justify-center space-x-2 group relative overflow-hidden border-2 border-white/50`}
                    >
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${offer.color} opacity-0 group-hover:opacity-20 transition`}
                      />
                      <span className="relative z-10">Claim Offer</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-sm p-8 md:p-12 text-white overflow-hidden shadow-2xl"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1200&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/95 via-purple-600/95 to-red-600/95" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Animated Blobs */}
          <div className="absolute inset-0 opacity-20">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute top-0 left-0 w-64 h-64 bg-white rounded-sm filter blur-3xl"
            />
            <motion.div 
              animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
              transition={{ duration: 12, repeat: Infinity }}
              className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-sm filter blur-3xl"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                Need a Custom Quote?
              </h2>
              <p className="text-xl text-white/95 mb-6 leading-relaxed drop-shadow-md">
                Contact us for a personalized quote tailored to your specific requirements. We're always happy to work within your budget!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+263242500743">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-blue-600 rounded-sm font-bold shadow-2xl hover:shadow-3xl transition flex items-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Us Now</span>
                  </motion.button>
                </a>
                <a href="mailto:info@grandauto.co.zw">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-sm font-bold hover:bg-white/20 transition"
                  >
                    Email Request
                  </motion.button>
                </a>
              </div>
            </div>

            <div className="hidden md:flex justify-center items-center">
              <motion.div
                animate={{ 
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.1, 1, 1.1, 1]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="text-9xl filter drop-shadow-2xl"
              >
                💎
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Terms & Conditions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-sm text-gray-500 space-y-2"
        >
          <p>* Terms and conditions apply. Offers cannot be combined with other promotions.</p>
          <p>** Prices shown are estimates and may vary based on vehicle condition and specific requirements.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Offers;