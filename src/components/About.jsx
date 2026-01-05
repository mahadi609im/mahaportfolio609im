import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import {
  MessageCircle,
  GraduationCap,
  Rocket,
  Target,
  Globe,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const profileRef = useRef(null);
  const contentRef = useRef(null);

  const languages = [
    { flag: 'https://flagcdn.com/bd.svg', name: 'Bengali', level: '(Native)' },
    { flag: 'https://flagcdn.com/gb.svg', name: 'English', level: '(Fluent)' },
    {
      flag: 'https://flagcdn.com/in.svg',
      name: 'Hindi',
      level: '(Conversational)',
    },
  ];

  const techStack = [
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      name: 'MongoDB',
      color: '#47A248',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      name: 'Express',
      color: '#68A063',
      invert: true,
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      name: 'React',
      color: '#61DAFB',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      name: 'Node.js',
      color: '#539E43',
    },
  ];

  const contentSections = [
    {
      icon: MessageCircle,
      title: 'Hello There!',
      content:
        "I'm a MERN Stack Developer with expertise in MongoDB, Express.js, React.js, and Node.js, and modern JavaScript, passionate about crafting clean, responsive, and user-friendly web interfaces.",
    },
    {
      icon: GraduationCap,
      title: 'Education',
      content:
        "I'm currently in my 3rd year of a BSS in Political Science at National University, while also exploring my interest in technology and web development.",
    },
    {
      icon: Rocket,
      title: 'What I Do',
      content:
        "I enjoy turning ideas into simple and interactive experiences using clean and efficient code. I have hands-on experience building full-stack web applications with the MERN stack and creating responsive web apps that solve real-world problems. Right now, I'm exploring new technologies and improving my English skills for professional communication to learn faster and build better projects.",
    },
    {
      icon: Target,
      title: 'Goals',
      content:
        "I'm seeking opportunities to apply my skills and grow with a collaborative team, while contributing to meaningful digital products. I am passionate about the JavaScript ecosystem and constantly learning new technologies and best practices to stay up-to-date and build better web applications.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Profile card animation
      gsap.fromTo(
        profileRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: profileRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content sections animation
      gsap.fromTo(
        contentRef.current.children,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Tech stack icons animation
      gsap.fromTo(
        '.tech-icon',
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.tech-stack',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="font-display bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 antialiased"
    >
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Background */}
        <div className="absolute inset-0 bg-background-light dark:bg-[#110e19] z-0">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]"
            animate={{
              background: [
                'radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))',
                'radial-gradient(ellipse_80%_80%_at_60%_-10%,rgba(120,119,198,0.35),rgba(255,255,255,0))',
                'radial-gradient(ellipse_80%_80%_at_40%_-30%,rgba(120,119,198,0.25),rgba(255,255,255,0))',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="w-full mx-auto z-10 py-10">
          {/* Section Header */}
          <motion.header
            className="mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-6">
              <motion.div
                className="flex-grow h-px bg-gradient-to-l from-blue-300/50 to-transparent dark:from-slate-700/50 dark:to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.h1
                className="text-center text-sm font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
              >
                About
              </motion.h1>
              <motion.div
                className="flex-grow h-px bg-gradient-to-r from-blue-300/50 to-transparent dark:from-slate-700/50 dark:to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </motion.header>

          {/* Main Content */}
          <main>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Profile */}
              <motion.div
                ref={profileRef}
                className="lg:col-span-1"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm border-gray-200 dark:border-slate-800 py-10 overflow-hidden">
                  <CardContent className="text-center relative">
                    {/* Decorative elements */}
                    <motion.div
                      className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />

                    <motion.div
                      className="relative inline-block mb-4"
                      variants={itemVariants}
                    >
                      <motion.img
                        className="rounded-full w-40 h-40 mx-auto object-cover border-4 border-gray-300 dark:border-slate-700/50"
                        src="https://i.ibb.co.com/2172Ff35/IMG-20251129-WA0013.jpg"
                        alt="Mahadi Hasan Milon"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full ring-4 ring-primary ring-offset-4 ring-offset-white dark:ring-offset-slate-900"
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </motion.div>

                    <motion.h2
                      className="text-2xl font-bold text-gray-900 dark:text-white mt-4"
                      variants={itemVariants}
                    >
                      Mahadi Hasan Milon
                    </motion.h2>
                    <motion.p
                      className="text-primary font-medium mt-1"
                      variants={itemVariants}
                    >
                      Junior MERN Stack Developer
                    </motion.p>

                    {/* Tech Stack Icons */}
                    <motion.div
                      className="tech-stack flex flex-row justify-center items-center gap-4 md:gap-5 mt-8"
                      variants={itemVariants}
                    >
                      {techStack.map((tech, index) => (
                        <motion.div
                          key={index}
                          className="tech-icon group relative"
                          whileHover={{
                            scale: 1.2,
                            rotate: 360,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div
                            className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 dark:bg-white/[0.02] backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 md:h-16 md:w-16`}
                            style={{ backgroundColor: `${tech.color}20` }}
                          >
                            <img
                              src={tech.icon}
                              className={`h-6 w-6 opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 md:h-8 md:w-8 ${
                                tech.invert ? 'invert' : ''
                              }`}
                              alt={tech.name}
                            />
                          </div>
                          <motion.div
                            className="absolute -bottom-1 left-1/2 -z-0 h-3 w-3 -translate-x-1/2 rounded-full opacity-0 blur-lg transition-all duration-500 group-hover:opacity-40 group-hover:scale-[4]"
                            style={{ backgroundColor: tech.color }}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>

                {/* Languages Section */}
                <motion.div className="mt-6" variants={itemVariants}>
                  <div className="flex items-center gap-2 mb-4 px-2">
                    <Globe className="w-5 h-5 text-blue-500" />
                    <h3 className="text-gray-900 dark:text-white font-bold text-lg tracking-wide">
                      Languages
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3 px-2">
                    {languages.map((lang, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 px-4 py-2 rounded-full bg-gray-200/50 dark:bg-[#1e293b]/40 border border-gray-300/20 dark:border-white/5 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 group"
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <img
                          src={lang.flag}
                          className="w-5 h-3.5 rounded-sm object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          alt={`${lang.name} Flag`}
                        />
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                          {lang.name}
                        </span>
                        <span className="text-xs text-gray-600 dark:text-slate-400 font-medium">
                          {lang.level}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Details */}
              <motion.div
                ref={contentRef}
                className="lg:col-span-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm border-gray-200 dark:border-slate-800 h-full relative overflow-hidden">
                  {/* Decorative circles */}
                  <motion.div
                    className="absolute -top-10 -right-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  <motion.div
                    className="absolute bottom-0 -left-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1,
                    }}
                  />

                  <CardContent className="space-y-8 relative p-8">
                    {contentSections.map((section, index) => {
                      const IconComponent = section.icon;
                      return (
                        <motion.div
                          key={index}
                          className="relative"
                          variants={itemVariants}
                          whileHover={{ x: 5 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <div className="flex items-center space-x-4 mb-3">
                            <motion.div
                              className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center"
                              whileHover={{
                                scale: 1.1,
                                rotate: 360,
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <IconComponent className="w-5 h-5" />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                              {section.title}
                            </h3>
                          </div>
                          <motion.p
                            className="text-gray-700 dark:text-gray-400 leading-relaxed"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                            {section.content}
                          </motion.p>
                        </motion.div>
                      );
                    })}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default About;
