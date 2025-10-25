import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Wrench,
  Sparkles,
  Mail,
  Award,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Phone,
  Car,
  Paintbrush,
  Settings,
  ThumbsUp,
} from "lucide-react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { GiLargePaintBrush } from "react-icons/gi";
import { VscTools } from "react-icons/vsc";
import { HiOutlineSparkles } from "react-icons/hi2";
import { useLanguage } from "./lungauage";
import { toast } from "sonner";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiPhoneCallThin } from "react-icons/pi";
import { GoMail } from "react-icons/go";

const Home = () => {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const [counter, setCounter] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const navigate = useNavigate();

  // Animated counters
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => ({
        projects: prev.projects < 1500 ? prev.projects + 50 : 1500,
        clients: prev.clients < 800 ? prev.clients + 25 : 800,
        experience: prev.experience < 15 ? prev.experience + 1 : 15,
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: IoCarSportOutline,
      title: t("bodyRepair"),
      description: t("bodyRepairDesc"),
      color: "from-blue-500 to-cyan-500",
      features: ["Panel Beating", "Dent Removal", "Frame Straightening"],
    },
    {
      icon: GiLargePaintBrush,
      title: t("painting"),
      description: t("paintingDesc"),
      color: "from-red-500 to-pink-500",
      features: ["Color Matching", "Spray Painting", "Protective Coating"],
    },
    {
      icon: VscTools,
      title: t("restoration"),
      description: t("restorationDesc"),
      color: "from-yellow-500 to-orange-500",
      features: ["Full Restoration", "Classic Cars", "Modern Vehicles"],
    },
    {
      icon: Settings,
      title: t("maintenance"),
      description: t("maintenanceDesc"),
      color: "from-green-500 to-emerald-500",
      features: ["Regular Service", "Inspection", "Diagnostics"],
    },
  ];

  const testimonials = [
    {
      name: "John Mutasa",
      role: "Business Owner",
      text: "Grand Auto Premier transformed my damaged car into a masterpiece. The attention to detail is unmatched!",
      rating: 5,
      image: "👨🏾‍💼",
    },
    {
      name: "Sarah Ncube",
      role: "Teacher",
      text: "Professional service from start to finish. They kept me updated throughout the repair process.",
      rating: 5,
      image: "👩🏾‍🏫",
    },
    {
      name: "Michael Chidziva",
      role: "Engineer",
      text: "Best auto body shop in Harare! My car looks better than new. Highly recommended!",
      rating: 5,
      image: "👨🏾‍🔧",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Certified Experts",
      description: "Highly trained technicians",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "All work guaranteed",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Efficient service delivery",
    },
    {
      icon: ThumbsUp,
      title: "Customer Satisfaction",
      description: "98% satisfaction rate",
    },
  ];

        const handleAction = (action) => {
    if (action === "call") {
      window.location.href = "tel:+263785948128";
    } else if (action === "email") {
      window.location.href = "mailto:info@grandautopremier.co.zw";
    } else if (action === "whatsapp") {
      window.location.href = "https://wa.me/263785948128?text=Hello%20Grand%20Auto%20Premier!";
    }
  };


  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="section relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-slate-900 to-red-900 overflow-hidden">
        {/* Image Background Layer */}
        <div className="absolute inset-0">
          {/* Background image with gradient mask - higher opacity on right, lower on left */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/Auto.jpg')`,
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.4), rgba(0,0,0,0.8))",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.4), rgba(0,0,0,0.8))",
            }}
          />

          {/* Dark overlay on left for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>

          {/* Animated gradient overlays */}
          <motion.div style={{ y }} className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-sm filter blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-sm filter blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-500 rounded-sm filter blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 z-10 relative pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Text with Image Fill */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-sm mb-6"
              >
                <HiOutlineSparkles className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-semibold">
                  Premier Auto Body Specialists
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6 relative"
              >
                {/* Main title with image fill effect - using exact same technique as feature numbers */}
                <div className="relative">
                  <h1
                    className="text-7xl md:text-7xl lg:text-8xl font-bold leading-tight bg-cover bg-center bg-no-repeat select-none"
                    style={{
                      backgroundImage: `url('/logo.jpg')`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {t("heroTitle")}
                  </h1>
                  {/* Fallback/outline for browsers that don't support background-clip */}
                  <h1 className="absolute inset-0 text-8xl md:text-7xl lg:text-8xl font-bold leading-tight text-transparent bg-gradient-to-b from-gray-400/20 to-gray-600/10 bg-clip-text -z-10 select-none">
                    {t("heroTitle")}
                  </h1>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-200 mb-8 backdrop-blur-sm"
              >
                {t("heroDescription")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 rounded-sm font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 transition flex items-center justify-center space-x-2 group"
                  >
                    <span>{t("bookNow")}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                  </motion.button>
                </Link>

                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-sm font-semibold text-lg hover:bg-white/20 transition"
                  >
                    {t("projects")}
                  </motion.button>
                </Link>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-6 mt-12"
              >
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg py-4">
                  <div className="text-3xl font-bold text-yellow-400">
                    {counter.experience}+
                  </div>
                  <div className="text-sm text-gray-300">
                    {t("yearsExperience")}
                  </div>
                </div>
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-sm py-4">
                  <div className="text-3xl font-bold text-yellow-400">
                    {counter.projects}+
                  </div>
                  <div className="text-sm text-gray-300">
                    {t("projectsCompleted")}
                  </div>
                </div>
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-sm py-4">
                  <div className="text-3xl font-bold text-yellow-400">
                    {counter.clients}+
                  </div>
                  <div className="text-sm text-gray-300">
                    {t("happyClients")}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Blended with Background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full"
              >
                {/* Glowing border effect 
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-400 to-red-500 rounded-sm filter blur-3xl opacity-20"></div>*/}

                {/* Content card with glass effect - blends with background */}
                <div className="relative rounded-sm">
                  {/* Service highlights */}
                  <div className="space-y-6">
                    {["Expert Repairs", "Premium Finishes", "Fast Service"].map(
                      (item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                          className="flex items-center space-x-3 text-white bg-white/5 backdrop-blur-sm rounded-sm p-4 hover:bg-white/10 transition-all"
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-sm flex items-center justify-center">
                            <IoCheckmarkDoneCircleOutline className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-xl font-semibold">{item}</span>
                        </motion.div>
                      )
                    )}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-ping"></div>
                <div className="absolute top-1/2 -left-6 w-3 h-3 bg-blue-400 rounded-full opacity-40"></div>
                <div className="absolute bottom-8 right-12 w-4 h-4 border-2 border-cyan-400/50 rounded-full animate-pulse"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

            {/* Floating Action Elements */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button
          className="group bg-gradient-to-r from-blue-600 to-red-600 text-white hover:bg-green-300 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("whatsapp")}
        >
          <IoLogoWhatsapp className="w-6 h-6 group-hover:rotate-12 transition-transform text-white" />
        </button>
        <button
          className="group bg-gradient-to-r from-blue-600 to-red-600 text-white hover:bg-green-700 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("call")}
        >
          <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
        <button
          className="group bg-gradient-to-r from-blue-600 to-red-600 text-white hover:bg-blue-700 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("email")}
        >
          <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
              {t("services")}
            </h2>
            <p className="text-xl text-gray-600">{t("servicesTagline")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-sm p-8 hover:shadow-lg shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  <div
                    className={`w-16 h-16 rounded-sm bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 rounded-sm bg-blue-600 mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={()=>navigate('/offers')}
                    className="mt-6 text-blue-600 font-semibold flex items-center space-x-2 group-hover:text-red-600 transition"
                  >
                    <span>{t("learnMore")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Why Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
                  Grand Auto Premier?
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine decades of experience with cutting-edge technology to
                deliver unmatched quality in auto body repair and restoration.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 rounded-sm bg-gradient-to-r from-blue-600 to-red-600 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-sm overflow-hidden shadow-2xl">
                <img
                  src="/Auto.jpg"
                  alt="Workshop"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    State-of-the-Art Facility
                  </h3>
                  <p className="text-gray-200">
                    Located at 31 Airport Road, Hatfield, Harare
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300">
              Don't just take our word for it
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-md rounded-sm p-8 border border-white/20"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-200 mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-sm filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-sm filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t("readyToTransform")}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free quote today and experience the Grand Auto Premier
              difference
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-600 rounded-sm font-semibold text-lg shadow-2xl hover:shadow-white/50 transition flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t("contactUs")}</span>
                </motion.button>
              </Link>

              <a href="tel:+263242500743">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-sm font-semibold text-lg hover:bg-white/10 transition"
                >
                  {t("callUs")}
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
