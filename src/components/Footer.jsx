import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate footer elements
      gsap.fromTo(
        '.footer-content',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
          },
        }
      );

      // Animate social icons
      gsap.fromTo(
        '.footer-social',
        { opacity: 0, scale: 0, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: 'back.out(1.7)',
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      y: -3,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/mahadi609im',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mahadi609im/',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:maha609im@gmail.com',
    },
  ];

  return (
    <motion.footer
      ref={footerRef}
      className="bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-700 py-12 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <motion.div
        className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10"
        variants={containerVariants}
      >
        {/* Left: Name & Copyright */}
        <motion.div
          className="text-center lg:text-left footer-content"
          variants={itemVariants}
        >
          <motion.p
            className="text-gray-700 dark:text-gray-300 text-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            &copy; 2025{' '}
            <motion.span
              className="font-bold text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              Mahadi Hasan Milon
            </motion.span>
            . All rights reserved.
          </motion.p>
        </motion.div>

        {/* Center: Social Links */}
        <motion.div
          className="flex items-center gap-4 footer-content"
          variants={containerVariants}
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social flex items-center justify-center w-10 h-10 rounded-full bg-gray-200/30 dark:bg-gray-800/40 text-gray-800 dark:text-gray-200 hover:bg-gray-300/50 dark:hover:bg-gray-700/50 transition-colors relative overflow-hidden"
                aria-label={social.name}
                variants={socialVariants}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <IconComponent className="w-5 h-5 relative z-10" />

                {/* Ripple effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0"
                  whileHover={{
                    scale: [1, 1.5, 2],
                    opacity: [0.5, 0.2, 0],
                  }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Right: Credit */}
        <motion.div
          className="text-center lg:text-right text-gray-500 dark:text-gray-400 text-sm footer-content"
          variants={itemVariants}
        >
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Made with{' '}
            <motion.span
              className="inline-block"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              💖
            </motion.span>{' '}
            using{' '}
            <motion.span
              className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500"
              whileHover={{ scale: 1.05 }}
            >
              MERN
            </motion.span>{' '}
            &{' '}
            <motion.span
              className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500"
              whileHover={{ scale: 1.05 }}
            >
              Tailwind CSS
            </motion.span>
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Animated bottom border */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </motion.footer>
  );
};

export default Footer;
