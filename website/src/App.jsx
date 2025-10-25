import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AnimatePresence, motion } from 'framer-motion';
import { Car, Wrench, Award } from 'lucide-react';
import { LanguageProvider } from './components/lungauage';
import Navbar from './components/nav';
import Home from './components/home';
import Offers from './components/offers';
import Projects from './components/projects';
import OurBrand from './components/brand';
import Footer from './components/footer';
import Contact from './components/contact';
import FAQs from './components/faq';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};

// Loading Screen Component with Grand Auto Premier Branding
const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative inline-block"
        >
          {/* Logo Container */}
          <div className="relative flex items-center justify-center mb-6">
            {/* Animated Car Icon */}

            {/* Company Logo - You can replace this with actual logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="px-12"
            >
              <div className="relative">
                {/* If you have a logo image, use: */}
                <img 
                  src="/logo2.png" 
                  alt="Grand Auto Premier Logo" 
                  className="h-24 w-auto filter drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>

          {/* Glow effect */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 -z-10 blur-3xl"
          >
            <div className="w-full h-full bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 opacity-40 rounded-full" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          {/* Loading dots */}
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
                className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full shadow-lg"
              />
            ))}
          </div>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-blue-900 text-sm mt-6 font-medium tracking-wider"
          >
            Preparing your premier auto experience...
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Page Wrapper for transitions
const PageWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="gellix-font min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 page-wrapper gellix-font">
          <style jsx>{`
            @font-face {
              font-family: "Gravesend Sans";
              src: url("./fonts/fonnts.com-Gravesend_Sans_Light.otf")
                format("opentype");
              font-weight: 300;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Gravesend Sans";
              src: url("./fonts/fonnts.com-Gravesend_Sans_Medium.otf")
                format("opentype");
              font-weight: 500;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Gravesend Sans";
              src: url("./fonts/fonnts.com-Gravesend_Sans_Bold.otf")
                format("opentype");
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }

            /* Century Gothic Font Face */
            @font-face {
              font-family: "Century Gothic Custom";
              src: url("./fonts/weezerfont.ttf") format("truetype");
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Gellix";
              src: url("./fonts/Gellix-Light.ttf") format("truetype");
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: "Gellix";
              src: url("./fonts/Gellix-Regular.ttf") format("truetype");
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }

            /* Font utility classes */
            .gravesend-sans {
              font-family: "Gravesend Sans", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }

            .roboto-font {
              font-family: "Roboto", "Inter", "Segoe UI", Tahoma, Geneva, Verdana,
                sans-serif;
            }

            .gellix-font {
              font-family: "Gellix", "Inter", "Segoe UI", Tahoma, Geneva, Verdana,
                sans-serif;
            }

            body {
              overflow-x: hidden;
            }

            /* Smooth scrolling */
            html {
              scroll-behavior: smooth;
            }
          `}</style>
          <Navbar />
          <PageWrapper>
            <main className="flex-grow main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/our-brand" element={<OurBrand />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </PageWrapper>
          <Footer />
          <Toaster 
            position="top-right" 
            toastOptions={{
              style: {
                background: '#1e40af',
                color: '#fff',
              },
            }}
          />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;