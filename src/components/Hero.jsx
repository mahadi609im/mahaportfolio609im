import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Download, Eye, Sparkles } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Animate background elements
    gsap.set('.bg-element', { scale: 0, opacity: 0 });
    gsap.to('.bg-element', {
      scale: 1,
      opacity: 1,
      duration: 2,
      stagger: 0.3,
      ease: 'power2.out',
    });

    // Animate floating badges
    gsap.fromTo(
      '.floating-badge',
      { y: 50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        delay: 1,
      }
    );

    // Animate stats
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 1.2,
        }
      );
    }

    // Continuous floating animation for image
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -10,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center p-4 lg:p-8 overflow-hidden relative font-display"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="bg-element absolute top-1/4 left-1/2 w-48 h-48 bg-blue-900/50 dark:bg-blue-900/30 rounded-full blur-3xl transform -translate-x-1/4 -translate-y-1/4"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="bg-element absolute bottom-1/4 right-1/2 w-48 h-48 bg-purple-900/50 dark:bg-purple-900/30 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      <motion.div
        className="bg-element absolute top-1/2 left-1/3 w-24 h-24 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-lg blur-2xl transform -translate-x-1/2 -translate-y-1/2 rotate-45"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="container mx-auto z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Status Badge */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
              variants={itemVariants}
            >
              <motion.span
                className="relative flex h-3 w-3"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </motion.span>
              <motion.p
                className="text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4" />
                Available for work
              </motion.p>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white leading-tight"
              variants={itemVariants}
            >
              Junior
              <motion.span
                className="text-gradient block lg:inline"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                {' '}
                MERN STACK
              </motion.span>{' '}
              Developer
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mt-6 text-base lg:text-lg text-gray-600 dark:text-gray-400 mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Hello, I'm{' '}
              <motion.b whileHover={{ color: '#4F46E5' }}>
                Mahadi Hasan Milon
              </motion.b>
              , a passionate{' '}
              <motion.b whileHover={{ color: '#4F46E5' }}>
                JavaScript-focused Full-Stack Developer
              </motion.b>
              . I build web applications from scratch—from{' '}
              <motion.b whileHover={{ color: '#4F46E5' }}>
                frontend to backend
              </motion.b>
              —using modern JavaScript technologies, with a strong interest in
              mastering the full{' '}
              <motion.b whileHover={{ color: '#4F46E5' }}>
                JavaScript ecosystem
              </motion.b>{' '}
              to create clean, scalable, and user-friendly solutions.
            </motion.p>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              className="mt-8 flex justify-center lg:justify-start space-x-8"
              variants={itemVariants}
            >
              {[
                { number: '2+', label: 'Years Exp.' },
                { number: '5+', label: 'Projects' },
                { number: '9+', label: 'Technologies' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.p
                    className="text-3xl font-bold text-gradient"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 1.5 + index * 0.2,
                      type: 'spring',
                      stiffness: 200,
                    }}
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="gradient"
                  className="w-full sm:w-auto rounded-xl group relative overflow-hidden"
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    View My Work
                  </span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="glass"
                  className="w-full sm:w-auto rounded-xl group"
                  onClick={() => {
                    // Convert Google Drive view link to direct download link
                    const fileId = '1L5VbrlZ3RNzPFlkXNBQBsAQTHNbfGS6p';
                    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

                    // Create a temporary link element and trigger download
                    const link = document.createElement('a');
                    link.href = downloadUrl;
                    link.download = 'Mahadi_Hasan_Milon_Resume.pdf';
                    link.target = '_blank';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="relative flex justify-center lg:justify-end items-center mt-10 lg:mt-0"
            variants={itemVariants}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Floating Tech Badges */}
              <motion.div
                className="floating-badge absolute top-4 right-0 transform translate-x-1/4 -translate-y-1/4 z-10"
                variants={badgeVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
              >
                <div className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full shadow-lg text-sm font-medium border border-white/20">
                  <img
                    className="w-4 h-4"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                  />
                  JavaScript
                </div>
              </motion.div>

              <motion.div
                className="floating-badge absolute top-16 left-6 -translate-x-1/2 transform z-10"
                variants={badgeVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                }}
              >
                <div className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full shadow-lg text-sm font-medium border border-white/20">
                  <img
                    className="w-4 h-4"
                    src="https://i.ibb.co.com/4R6zrCd9/becomeamernstackdeveloper-mobile.png"
                    alt="MERN"
                  />
                  MERN stack
                </div>
              </motion.div>

              <motion.div
                className="floating-badge absolute bottom-4 left-0 transform -translate-x-1/4 z-10"
                variants={badgeVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: 3,
                }}
              >
                <div className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full shadow-lg text-sm font-medium border border-white/20">
                  🎨 Perfect UI
                </div>
              </motion.div>

              {/* Main Image Container */}
              <motion.div
                ref={imageRef}
                className="w-full h-full p-2 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-lg relative"
                whileHover={{
                  scale: 1.02,
                  rotate: 1,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-full h-full bg-background-light dark:bg-background-dark p-2 rounded-lg overflow-hidden">
                  <motion.img
                    alt="Portrait of Mahadi Hasan Milon"
                    className="w-full h-full object-cover rounded-lg"
                    src="https://i.ibb.co.com/NnsHYG1Q/IMG-20251129-WA0013-removebg-preview.png"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Code Icon */}
                <motion.div
                  className="absolute -bottom-5 -right-5 flex items-center justify-center h-12 w-12 bg-background-light dark:bg-background-dark rounded-lg border border-slate-300 dark:border-slate-700 shadow-lg"
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
