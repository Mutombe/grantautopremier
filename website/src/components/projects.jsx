import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useLanguage } from "./lungauage";

const Projects = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);
  const [currentComparisonIndex, setCurrentComparisonIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
  const sliderRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Toyota Land Cruiser Restoration",
      category: "restoration",
      beforeImage: "/nv02.jpeg",
      afterImage: "/nv01.jpeg",
      description: "Complete front-end restoration after major collision",
      duration: "2 weeks",
      services: ["Panel Beating", "Painting", "Assembly"],
      clientName: "John Mutasa",
      rating: 5,
      testimonial:
        "Outstanding work! My Land Cruiser looks brand new. The attention to detail was exceptional.",
    },
    {
      id: 2,
      title: "Mercedes-Benz Paint Job",
      category: "painting",
      afterImage: "/fortuner1.jpeg",
      beforeImage: "/fortuner2.jpeg",
      description: "Premium metallic paint with ceramic coating",
      duration: "1 week",
      services: ["Color Matching", "Spray Painting", "Coating"],
      clientName: "Sarah Moyo",
      rating: 5,
      testimonial:
        "The paint finish is flawless. Better than I could have imagined!",
    },
    {
      id: 3,
      title: "BMW 3 Series Body Repair",
      category: "repair",
      afterImage: "/pb7.jpg",
      beforeImage: "/pb8.jpg",
      description: "Side panel repair and refinishing",
      duration: "4 days",
      services: ["Dent Removal", "Panel Beating", "Painting"],
      clientName: "David Ncube",
      rating: 5,
      testimonial:
        "Professional service from start to finish. You cannot tell there was ever damage.",
    },
    {
      id: 4,
      title: "Toyota Hilux Collision Repair",
      category: "repair",
      afterImage: "/is2.jpeg",
      beforeImage: "/is1.jpeg",
      description: "Rear-end collision repair and restoration",
      duration: "10 days",
      services: ["Frame Straightening", "Panel Replacement", "Painting"],
      clientName: "Michael Chikwanha",
      rating: 5,
      testimonial:
        "They saved my Hilux! The repair work is absolutely perfect.",
    },
    {
      id: 5,
      title: "Nissan Patrol Full Restoration",
      category: "restoration",
      afterImage: "/pb1.jpg",
      beforeImage: "/pb2.jpg",
      description: "Complete vehicle restoration to factory condition",
      duration: "3 weeks",
      services: ["Full Disassembly", "Rust Removal", "Complete Repaint"],
      clientName: "Patricia Sithole",
      rating: 5,
      testimonial:
        "Incredible transformation! They brought my old Patrol back to life.",
    },
    {
      id: 6,
      title: "Honda Civic Custom Paint",
      category: "painting",
      afterImage: "/pb9.jpg",
      beforeImage: "/pb10.jpg",
      description: "Custom two-tone paint with graphics",
      duration: "5 days",
      services: ["Custom Design", "Spray Painting", "Clear Coat"],
      clientName: "Tendai Mpofu",
      rating: 5,
      testimonial:
        "The custom paint job exceeded all my expectations. True artists!",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "restoration", name: "Restoration" },
    { id: "repair", name: "Repair" },
    { id: "painting", name: "Painting" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const openComparisonModal = (index) => {
    setCurrentComparisonIndex(index);
    setIsComparisonModalOpen(true);
    setSliderValue(50); // Reset slider to middle
  };

  const closeComparisonModal = () => {
    setIsComparisonModalOpen(false);
  };

  const navigateComparison = (direction) => {
    setCurrentComparisonIndex((prev) => {
      const newIndex = prev + direction;
      if (newIndex < 0) return filteredProjects.length - 1;
      if (newIndex >= filteredProjects.length) return 0;
      return newIndex;
    });
    setSliderValue(50); // Reset slider when navigating
  };

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const handleTouchMove = (e) => {
    if (!sliderRef.current) return;
    const touch = e.touches[0];
    const rect = sliderRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderValue(Math.max(0, Math.min(100, percentage)));
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
            <span className="text-sm font-bold">OUR PORTFOLIO</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
            {t("ourProjects")}
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest projects and see the transformations we've
            delivered for satisfied clients across Harare
          </p>
        </motion.div>

        {/* Filter Buttons */}
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
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-sm font-semibold transition ${
                filter === category.id
                  ? "bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openComparisonModal(index)}
              >
                <div className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={project.beforeImage}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      initial={false}
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-bold text-lg bg-blue-600 px-6 py-3 rounded-sm">
                        View Transformation
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-blue-600 text-white rounded-sm text-xs font-bold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">
                        Duration: {project.duration}
                      </span>
                      <div className="flex">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded-sm text-xs"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Before/After Comparison Modal */}
        <AnimatePresence>
          {isComparisonModalOpen &&
            filteredProjects[currentComparisonIndex] && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              >
                <div className="absolute top-4 right-4 flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeComparisonModal}
                    className="bg-white/10 backdrop-blur-sm p-2 rounded-sm hover:bg-white/20"
                  >
                    <X size={24} className="text-white" />
                  </motion.button>
                </div>

                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigateComparison(-1)}
                    className="bg-white/10 backdrop-blur-sm p-2 rounded-sm hover:bg-white/20"
                  >
                    <ArrowLeft size={24} className="text-white" />
                  </motion.button>
                </div>

                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigateComparison(1)}
                    className="bg-white/10 backdrop-blur-sm p-2 rounded-sm hover:bg-white/20"
                  >
                    <ArrowRight size={24} className="text-white" />
                  </motion.button>
                </div>

                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="w-full max-w-5xl flex flex-col"
                >
                  <div className="bg-white/5 backdrop-blur-md rounded-t-sm p-4 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {filteredProjects[currentComparisonIndex].title}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {filteredProjects[currentComparisonIndex].description}
                      </p>
                    </div>
                    <div className="bg-red-500 rounded-sm px-4 py-1 text-sm font-medium">
                      {filteredProjects[currentComparisonIndex].category}
                    </div>
                  </div>

                  {/* Before/After Comparison Slider */}
                  <div
                    className="relative w-full h-[60vh] md:h-[70vh] bg-black overflow-hidden"
                    ref={sliderRef}
                    onTouchMove={handleTouchMove}
                  >
                    {/* Before Image (Full Width) */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${filteredProjects[currentComparisonIndex].beforeImage})`,
                      }}
                    />

                    {/* After Image (Clipped by slider) */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${filteredProjects[currentComparisonIndex].afterImage})`,
                        clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`,
                      }}
                    />

                    {/* Divider Line */}
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-white"
                      style={{ left: `${sliderValue}%` }}
                    />

                    {/* Slider Handle */}
                    <div
                      className="absolute top-1/2 w-10 h-10 bg-white rounded-sm shadow-lg flex items-center justify-center cursor-move transform -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${sliderValue}%` }}
                    >
                      <div className="flex items-center">
                        <ArrowLeft size={12} className="text-gray-700" />
                        <ArrowRight size={12} className="text-gray-700" />
                      </div>
                    </div>

                    {/* Before/After Labels */}
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-sm text-white font-medium">
                      Before
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-sm text-white font-medium">
                      After
                    </div>

                    {/* Hidden slider for accessibility */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderValue}
                      onChange={handleSliderChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      aria-label="Before and after comparison slider"
                    />
                  </div>

                  {/* Testimonial Section */}
                  <div className="bg-white/5 backdrop-blur-md rounded-b-sm p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-500 rounded-sm w-12 h-12 flex items-center justify-center text-lg font-bold text-white shrink-0">
                        {filteredProjects[
                          currentComparisonIndex
                        ].clientName.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-medium text-white">
                            {
                              filteredProjects[currentComparisonIndex]
                                .clientName
                            }
                          </h4>
                          <div className="flex">
                            {[
                              ...Array(
                                filteredProjects[currentComparisonIndex].rating
                              ),
                            ].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className="fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-white/80 italic">
                          "
                          {filteredProjects[currentComparisonIndex].testimonial}
                          "
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-6 text-white/60 text-sm">
                    <span>
                      Drag slider to compare before and after • Use arrows to
                      view more projects
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-sm p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Vehicle?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our list of satisfied clients and experience the Grand Auto
              Premier difference
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-sm font-semibold text-lg shadow-xl hover:shadow-2xl transition"
            >
              {t("getQuote")}
            </motion.button>
          </div>
        </motion.div>
      </div>
      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition z-40"
      >
        ↑
      </motion.button>
    </div>
  );
};

export default Projects;
