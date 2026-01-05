import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useLenis } from './hooks/useLenis';

function App() {
  // Initialize Lenis smooth scrolling
  useLenis();

  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen w-full flex flex-col items-center justify-center p-4 lg:p-8 relative overflow-hidden font-display bg-background-light dark:bg-transparent text-white/80 dark:text-white/80"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background-light dark:bg-background-dark antialiased"></div>

      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(128, 90, 213, 0.15) 1px, transparent 1px), 
              linear-gradient(to bottom, rgba(128, 90, 213, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            maskImage:
              'radial-gradient(ellipse at center, black, transparent 85%)',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px', '0px 0px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="absolute bottom-0 w-full h-[60vh] origin-bottom"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(128, 90, 213, 0.2) 1px, transparent 1px), 
              linear-gradient(to bottom, rgba(128, 90, 213, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'perspective(600px) rotateX(65deg)',
            maskImage: 'linear-gradient(to top, black, transparent)',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px', '0px 0px'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>

      {/* Main Content */}
      <div className="w-full mx-auto z-10">
        <Header />

        <motion.section
          className="antialiased"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Hero />
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <About />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <Technologies />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <Projects />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <Contact />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Footer />
      </motion.div>

      <ScrollToTop />
    </motion.div>
  );
}

export default App;
