import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, Users, Target, Eye, Heart, Shield, Zap, 
  TrendingUp, Star, CheckCircle, Wrench, Sparkles,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from './lungauage';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { GiLargePaintBrush } from "react-icons/gi";
import { VscTools } from "react-icons/vsc";
import { GiCometSpark } from "react-icons/gi";
import { GiBullseye } from "react-icons/gi";
import { MdEmojiPeople } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { SiFsecure } from "react-icons/si";
import { SiSecurityscorecard } from "react-icons/si";
import { TbTrendingUp3 } from "react-icons/tb";
import { MdStarBorderPurple500 } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdOutlineStarRate } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";
import { GiSparkles } from "react-icons/gi";
import { TbMoodSpark } from "react-icons/tb";
import { LiaAwardSolid } from "react-icons/lia";


const OurBrand = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality workmanship and customer satisfaction.',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      icon: IoIosPeople,
      title: 'Integrity',
      description: 'Honesty and transparency guide all our interactions with clients, partners, and team members.',
      color: 'from-red-600 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously adopt the latest technologies and techniques to deliver cutting-edge solutions.',
      color: 'from-yellow-600 to-orange-500'
    },
    {
      icon: TbMoodSpark,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We go above and beyond to exceed your expectations.',
      color: 'from-green-600 to-emerald-500'
    },
    {
      icon: SiFsecure,
      title: 'Reliability',
      description: 'Count on us for consistent quality, timely delivery, and dependable service every time.',
      color: 'from-purple-600 to-indigo-500'
    },
    {
      icon: GrWorkshop,
      title: 'Craftsmanship',
      description: 'Every detail matters. Our skilled artisans treat each vehicle with meticulous care and precision.',
      color: 'from-pink-600 to-rose-500'
    }
  ];

  const milestones = [
    { year: '2010', title: 'Founded', description: 'Grand Auto Premier opens its doors in Harare' },
    { year: '2013', title: 'Expansion', description: 'Upgraded to a larger, state-of-the-art facility' },
    { year: '2016', title: '500 Projects', description: 'Celebrated completing 500 successful repairs' },
    { year: '2019', title: 'Recognition', description: 'Awarded "Best Auto Body Shop in Harare"' },
    { year: '2022', title: '1000+ Clients', description: 'Reached milestone of 1000 satisfied customers' },
    { year: '2025', title: 'Excellence', description: 'Continuing to set industry standards' }
  ];

  const team = [
    {
      name: 'Tendai Moyo',
      role: 'Founder & CEO',
      image: '👨🏾‍💼',
      description: '25+ years in automotive industry'
    },
    {
      name: 'Sarah Ncube',
      role: 'Operations Manager',
      image: '👩🏾‍💼',
      description: 'Ensuring smooth daily operations'
    },
    {
      name: 'James Chikwanda',
      role: 'Lead Technician',
      image: '👨🏾‍🔧',
      description: 'Master craftsman with 20+ years'
    },
    {
      name: 'Grace Mutasa',
      role: 'Customer Relations',
      image: '👩🏾‍💻',
      description: 'Your satisfaction advocate'
    }
  ];

  const achievements = [
    { icon: TbTrendingUp3, number: '1500+', label: 'Projects Completed' },
    { icon: MdStarBorderPurple500, number: '800+', label: 'Happy Clients' },
    { icon: LiaAwardSolid, number: '15+', label: 'Years Experience' },
    { icon: IoCheckmarkDoneSharp, number: '98%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section - With Blended Background Image */}
      <section className="relative h-[90vh] overflow-hidden">
        {/* Background Image with Blend */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600')",
              mixBlendMode: 'multiply'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/80 to-red-600/90" />
          <div className="absolute inset-0" style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1632823469941-1b588a0886c3?w=1600')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
            mixBlendMode: 'overlay'
          }} />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 h-full relative z-10 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-sm mb-8"
            >
              <VscTools className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wide">ABOUT US</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight"
            >
              Grand Auto<br />
              <span className="text-yellow-400">Premier</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl text-white/90 mb-6 font-light"
            >
              Define It, We Make It
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mb-8"
            >
              For over 15 years, we've been Harare's trusted choice for premium auto body repair and restoration. 
              Our commitment to excellence has made us the premier destination for vehicle owners who demand the best.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-white text-blue-600 rounded-sm font-bold text-lg shadow-2xl hover:shadow-yellow-400/50 transition-all flex items-center space-x-2"
            >
              <span>Discover Our Story</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-400/20 backdrop-blur-sm rounded-sm border border-white/30"
        />
      </section>

      {/* Mission, Vision, Values - Bento Box Layout */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-sm text-sm font-bold mb-4"
            >
              OUR FOUNDATION
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
              What Drives Us
            </h2>
          </motion.div>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Mission - Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-sm bg-gradient-to-br from-blue-600 to-cyan-500 p-12 shadow-2xl group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-sm blur-3xl transform translate-x-32 -translate-y-32" />
              <div className="relative z-10">
                <GiCometSpark className="w-16 h-16 text-white mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-4xl font-bold mb-6 text-white">{t('ourMission')}</h3>
                <p className="text-xl text-white/90 leading-relaxed">
                  To provide exceptional auto body services that exceed expectations through innovative solutions, 
                  skilled craftsmanship, and unwavering commitment to customer satisfaction.
                </p>
              </div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-10 right-10 w-24 h-24 border-4 border-white/20 rounded-sm"
              />
            </motion.div>

            {/* Vision - Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-sm bg-gradient-to-br from-purple-600 to-pink-500 p-10 shadow-2xl group"
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-sm blur-2xl" />
              <GiBullseye className="w-12 h-12 text-white mb-4 group-hover:scale-110 transition-transform relative z-10" />
              <h3 className="text-3xl font-bold mb-4 text-white relative z-10">{t('ourVision')}</h3>
              <p className="text-white/90 leading-relaxed relative z-10">
                To be Zimbabwe's leading auto body repair center, recognized for excellence and innovation.
              </p>
            </motion.div>

            {/* Promise - Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-sm bg-gradient-to-br from-red-600 to-orange-500 p-10 shadow-2xl group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-sm blur-2xl" />
              <MdEmojiPeople className="w-12 h-12 text-white mb-4 group-hover:scale-110 transition-transform relative z-10" />
              <h3 className="text-3xl font-bold mb-4 text-white relative z-10">Our Promise</h3>
              <p className="text-white/90 leading-relaxed relative z-10">
                Every vehicle that leaves our facility represents our dedication to quality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Creative Card Grid */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-sm text-sm font-bold mb-4"
            >
              CORE VALUES
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-600">
              The Principles That Guide Us
            </h2>
          </motion.div>

          {/* Asymmetric Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -15, rotate: 2, scale: 1.03 }}
                className={`
                  relative overflow-hidden rounded-sm p-8 shadow-xl hover:shadow-2xl transition-all
                  ${index === 0 ? 'lg:col-span-2 bg-gradient-to-br from-blue-600 to-cyan-500 text-white' : 
                    index === 3 ? 'lg:col-span-2 bg-gradient-to-br from-green-600 to-emerald-500 text-white' :
                    'bg-white'}
                `}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-sm blur-3xl" />
                
                <div className={`
                  w-16 h-16 bg-gradient-to-r ${value.color} rounded-sm flex items-center justify-center mb-6 
                  ${index === 0 || index === 3 ? 'bg-white/20' : ''} 
                  relative z-10 group-hover:scale-110 transition-transform
                `}>
                  <value.icon className={`w-8 h-8 ${index === 0 || index === 3 ? 'text-white' : 'text-white'}`} />
                </div>
                
                <h3 className={`
                  text-2xl md:text-3xl font-bold mb-4 relative z-10
                  ${index === 0 || index === 3 ? 'text-white' : 'text-gray-800'}
                `}>
                  {value.title}
                </h3>
                
                <p className={`
                  text-lg leading-relaxed relative z-10
                  ${index === 0 || index === 3 ? 'text-white/90' : 'text-gray-600'}
                `}>
                  {value.description}
                </p>

                {(index === 0 || index === 3) && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-5 right-5 w-20 h-20 border-2 border-white/30 rounded-sm"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Diagonal Wave Layout */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: 'repeating-linear-gradient(45deg, #3b82f6 0, #3b82f6 1px, transparent 0, transparent 50%)',
                 backgroundSize: '20px 20px'
               }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-sm text-sm font-bold mb-4"
            >
              OUR JOURNEY
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
              Building Excellence
            </h2>
            <p className="text-xl text-gray-600 mt-4">One milestone at a time</p>
          </motion.div>

          {/* Zigzag Timeline */}
          <div className="max-w-6xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`
                  flex items-center mb-16 last:mb-0
                  ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
                `}
              >
                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                  className={`
                    w-full md:w-5/12 bg-gradient-to-br from-white to-gray-50 rounded-sm p-8 shadow-xl
                    ${index % 2 === 0 ? 'text-left' : 'text-right'}
                  `}
                >
                  <span className="inline-block px-5 py-2 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-sm text-sm font-bold mb-4">
                    {milestone.year}
                  </span>
                  <h3 className="text-3xl font-bold mb-3 text-gray-800">{milestone.title}</h3>
                  <p className="text-gray-600 text-lg">{milestone.description}</p>
                </motion.div>

                {/* Center Connector */}
                <div className="hidden md:flex w-2/12 items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    className="w-8 h-8 bg-gradient-to-r from-blue-600 to-red-600 rounded-sm shadow-lg relative z-10"
                  >
                    <div className="absolute inset-0 bg-yellow-400 rounded-sm animate-ping opacity-50" />
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Bento Box Masonry */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-red-600 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-sm blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-sm blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-sm text-sm font-bold mb-4"
            >
              THE TEAM
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Meet the Experts
            </h2>
            <p className="text-xl text-white/80">Behind every perfect finish</p>
          </motion.div>

          {/* Bento Box Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -15, rotate: 3, scale: 1.05 }}
                className={`
                  relative overflow-hidden rounded-sm p-8 
                  bg-white/10 backdrop-blur-md border border-white/20
                  ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
                  group cursor-pointer
                `}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-sm blur-2xl group-hover:scale-150 transition-transform duration-500" />
                
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`
                    ${index === 0 ? 'text-9xl mb-8' : 'text-7xl mb-6'} 
                    relative z-10
                  `}
                >
                  {member.image}
                </motion.div>
                
                <h3 className={`
                  ${index === 0 ? 'text-3xl' : 'text-2xl'} 
                  font-bold mb-2 text-white relative z-10
                `}>
                  {member.name}
                </h3>
                
                <p className="text-yellow-400 font-bold mb-3 relative z-10 text-lg">
                  {member.role}
                </p>
                
                <p className="text-white/80 relative z-10">
                  {member.description}
                </p>

                {index === 0 && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/30 rounded-sm"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements - Floating Cards */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-sm text-sm font-bold mb-4"
            >
              ACHIEVEMENTS
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
              Numbers That Speak
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotate: -10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -20, 
                  rotate: 5,
                  scale: 1.1
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-sm blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-sm p-8 shadow-xl border-2 border-gray-100 group-hover:border-blue-300 transition-all">
                  <achievement.icon className="w-14 h-14 text-blue-600 mb-6 group-hover:scale-125 transition-transform" />
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 mb-3">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-semibold text-lg">{achievement.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Image Background with Overlay */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/95 to-red-600/95" />
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)'
               }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="inline-block mb-8"
            >
              <GiSparkles className="w-20 h-20 text-yellow-400" />
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Join Our Growing<br />
              <span className="text-yellow-400">Family</span>
            </h2>
            
            <p className="text-2xl text-white/90 mb-12 leading-relaxed">
              Experience the Grand Auto Premier difference. Let us take care of your vehicle 
              with the same dedication we've shown for over 15 years.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 bg-white text-blue-600 rounded-sm font-bold text-xl shadow-2xl hover:shadow-yellow-400/50 transition-all flex items-center justify-center space-x-2"
              >
                <span>{t('contactUs')}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white text-white rounded-sm font-bold text-xl hover:bg-white/20 transition-all"
              >
                View Gallery
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Decorative Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-24 h-24 border-4 border-white/30 rounded-sm"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-32 h-32 border-4 border-yellow-400/30 rounded-sm"
        />
      </section>
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

export default OurBrand;