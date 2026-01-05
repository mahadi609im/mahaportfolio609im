import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
      gsap.fromTo(
        '.projects-header',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Animate filter buttons
      gsap.fromTo(
        '.filter-btn',
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.filter-nav',
            start: 'top 85%',
          },
        }
      );

      // Animate project cards with stagger
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 100,
              rotateX: 45,
              scale: 0.8,
            },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
              duration: 1,
              delay: index * 0.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animation variants
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateY: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: 'power3.out',
      },
    },
    hover: {
      y: -10,
      rotateY: 5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: 'RedDrop - Blood Donation Platform',
      category: 'MERN Stack Application',
      categoryColor: 'text-red-600',
      description:
        'A comprehensive solution connecting donors with recipients, featuring role-based dashboards and real-time request tracking.',
      image:
        'https://i.ibb.co.com/S7Xvp4K5/reddrop-client-01-05-2026-12-58-PM.png',
      features: [
        'Role-based Access Control (Admin, Volunteer, Donor)',
        'Secure JWT Authentication & Stripe Fund Integration',
        'Real-time Blood Search & Donation Management',
      ],
      techStack: [
        {
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          name: 'MongoDB',
        },
        {
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
          name: 'Express',
          invert: true,
        },
        {
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          name: 'React',
        },
        {
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
          name: 'Node.js',
        },
      ],
      accentColor: 'bg-red-500',
      buttonBg: 'bg-red-500/10',
      buttonText: 'text-red-600',
      buttonHover: 'hover:bg-red-500',
      hoverShadow: 'hover:shadow-2xl hover:shadow-red-500/10',
      mainTechStack: [
        'MongoDB',
        'Express.js',
        'React.js',
        'Node.js',
        'JWT',
        'Stripe API',
        'Tailwind CSS',
        'Firebase',
      ],
      briefDescription:
        'RedDrop is a comprehensive blood donation platform that bridges the gap between blood donors and recipients. The platform features a sophisticated role-based system with three distinct user types: Admin, Volunteer, and Donor.',
      liveProjectLink: 'https://red-drop-maha609im.netlify.app/',
      githubRepositoryLink: 'https://github.com/mahadi609im/redDrop',
      challengesFaced: [
        'Implementing secure role-based access control with JWT authentication',
        'Integrating Stripe payment gateway for donation processing',
        'Managing real-time blood request updates across multiple user dashboards',
      ],
      futurePlans: [
        'Add real-time notifications using WebSocket for urgent blood requests',
        'Implement geolocation-based donor matching for faster response times',
        'Add mobile app version using React Native',
      ],
    },
    {
      id: 2,
      title: 'PawMart — Pet Adoption & Supplies',
      category: 'MERN Full Stack Portal',
      categoryColor: 'text-orange-500',
      description:
        'A community-driven platform for pet adoption and pet-care products, featuring seamless listing management and automated order processing.',
      image:
        'https://i.ibb.co.com/NnfcrSMn/Home-paw-Mart-01-05-2026-01-07-PM.png',
      features: [
        'Dynamic Listing & Multi-category Pet Filtering',
        'Private User Dashboard (My Listings & Orders)',
        'PDF Report Generation for Orders (jsPDF)',
      ],
      techStack: [
        {
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          name: 'MongoDB',
        },
        {
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
          name: 'Express',
          invert: true,
        },
        {
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          name: 'React',
        },
        {
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
          name: 'Firebase',
        },
      ],
      accentColor: 'bg-orange-500',
      buttonBg: 'bg-orange-500/10',
      buttonText: 'text-orange-600',
      buttonHover: 'hover:bg-orange-500',
      hoverShadow: 'hover:shadow-2xl hover:shadow-orange-500/10',
      mainTechStack: [
        'MongoDB',
        'Express.js',
        'React.js',
        'Firebase',
        'jsPDF',
        'Tailwind CSS',
        'Node.js',
        'Cloudinary',
      ],
      briefDescription:
        'PawMart is a comprehensive pet adoption and supplies platform that connects pet lovers with adoptable animals and essential pet care products. The platform features dynamic listing management and advanced filtering systems.',
      liveProjectLink: 'https://pawmart-maha609im.netlify.app/',
      githubRepositoryLink: 'https://github.com/mahadi609im/pawMart-client',
      challengesFaced: [
        'Implementing complex multi-category filtering system for pets and products',
        'Managing image uploads and optimization for pet listings using Cloudinary',
        'Creating dynamic PDF reports with jsPDF for order summaries',
      ],
      futurePlans: [
        'Add video calling feature for virtual pet meet-and-greets',
        'Implement AI-powered pet matching based on user preferences',
        'Add subscription service for recurring pet supply orders',
      ],
    },
    {
      id: 3,
      title: 'Gamehub — Discovery Library',
      category: 'Gaming & Library',
      categoryColor: 'text-indigo-500',
      description:
        'A vibrant, urban-themed digital library for indie games with secure Firebase authentication and dynamic content management.',
      image: 'https://i.ibb.co.com/JFjY5TVc/Home-page-01-05-2026-01-29-PM.png',
      features: [
        'Interactive Game Slider & Rating-based Popularity',
        'Secure Forget Password & Profile Update System',
        'Motion/GSAP Animations for Urban UI Feel',
      ],
      techStack: [
        {
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          name: 'React',
        },
        {
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
          name: 'Firebase',
        },
        {
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
          name: 'Tailwind',
        },
        {
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg',
          name: 'Framer Motion',
          invert: true,
        },
      ],
      accentColor: 'bg-indigo-500',
      buttonBg: 'bg-indigo-500/10',
      buttonText: 'text-indigo-600',
      buttonHover: 'hover:bg-indigo-500',
      hoverShadow: 'hover:shadow-2xl hover:shadow-indigo-500/10',
      mainTechStack: [
        'React.js',
        'Firebase',
        'Tailwind CSS',
        'Framer Motion',
        'GSAP',
        'React Router',
        'Context API',
      ],
      briefDescription:
        'Gamehub is a modern digital library and discovery platform for indie games, featuring an urban-themed design with smooth animations and interactive elements.',
      liveProjectLink: 'https://endgame-maha609im.netlify.app/',
      githubRepositoryLink: 'https://github.com/mahadi609im/EndGame',
      challengesFaced: [
        'Creating smooth, performance-optimized animations with GSAP and Framer Motion',
        'Implementing complex game filtering and sorting algorithms',
        'Managing Firebase real-time database for user preferences and game data',
      ],
      futurePlans: [
        'Launch game developer portal for indie game submissions',
        'Add virtual reality game support and discovery',
        'Implement blockchain-based game ownership and trading',
      ],
    },
    {
      id: 4,
      title: 'Hero App IO — App Portal',
      category: 'Mobile App Management',
      categoryColor: 'text-sky-500',
      description:
        'A responsive app discovery platform featuring live search, detailed analytics via Recharts, and a LocalStorage-based installation manager.',
      image:
        'https://i.ibb.co.com/Vcwj67qR/hero-app-io-01-05-2026-01-19-PM.png',
      features: [
        'Live Case-Insensitive Search & High-Low Sorting',
        'Visual Data Insights with Responsive Recharts',
        'Persistence with LocalStorage Installation Sync',
      ],
      techStack: [
        {
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          name: 'React',
        },
        {
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
          name: 'Tailwind',
        },
        {
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          name: 'JavaScript',
        },
        {
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          name: 'Recharts',
        },
      ],
      accentColor: 'bg-sky-500',
      buttonBg: 'bg-sky-500/10',
      buttonText: 'text-sky-600',
      buttonHover: 'hover:bg-sky-500',
      hoverShadow: 'hover:shadow-2xl hover:shadow-sky-500/10',
      mainTechStack: [
        'React.js',
        'Tailwind CSS',
        'Recharts',
        'LocalStorage API',
        'JavaScript ES6+',
        'Responsive Design',
      ],
      briefDescription:
        'Hero App IO is a comprehensive mobile app discovery and management platform that provides users with detailed analytics, live search capabilities, and installation tracking.',
      liveProjectLink: 'https://hero-app-io-mahadi609im.netlify.app/',
      githubRepositoryLink: 'https://github.com/mahadi609im/hero-apps-io',
      challengesFaced: [
        'Implementing efficient live search with case-insensitive filtering',
        'Creating responsive and interactive charts using Recharts library',
        'Managing complex state synchronization with LocalStorage',
      ],
      futurePlans: [
        'Integrate with major app stores for real-time app data',
        'Add developer dashboard for app performance tracking',
        'Implement AI-powered app recommendation system',
      ],
    },
  ];

  const categories = [
    'All Projects',
    'MERN Stack',
    'Frontend',
    'Full Stack',
    'React',
    'Firebase',
  ];

  // Filter projects based on active filter
  useEffect(() => {
    if (activeFilter === 'All Projects') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => {
        // Check if the filter matches category or tech stack
        const matchesCategory = project.category
          .toLowerCase()
          .includes(activeFilter.toLowerCase());
        const matchesTechStack = project.mainTechStack.some(tech =>
          tech.toLowerCase().includes(activeFilter.toLowerCase())
        );

        // Special filtering logic
        if (activeFilter === 'MERN Stack') {
          return (
            project.category.includes('MERN') ||
            (project.mainTechStack.includes('MongoDB') &&
              project.mainTechStack.includes('Express.js') &&
              project.mainTechStack.includes('React.js') &&
              project.mainTechStack.includes('Node.js'))
          );
        }

        if (activeFilter === 'Frontend') {
          return (
            project.category.includes('Frontend') ||
            project.category.includes('Gaming') ||
            project.category.includes('Mobile App') ||
            project.mainTechStack.includes('React.js') ||
            project.mainTechStack.includes('Tailwind CSS')
          );
        }

        if (activeFilter === 'Full Stack') {
          return (
            project.category.includes('MERN') ||
            project.category.includes('Full Stack')
          );
        }

        if (activeFilter === 'React') {
          return project.mainTechStack.includes('React.js');
        }

        if (activeFilter === 'Firebase') {
          return project.mainTechStack.includes('Firebase');
        }

        return matchesCategory || matchesTechStack;
      });
      setFilteredProjects(filtered);
    }
  }, [activeFilter, projects]);

  // Initialize filtered projects
  useEffect(() => {
    setFilteredProjects(projects);
  }, []);

  // Handle filter change
  const handleFilterChange = filter => {
    setActiveFilter(filter);
  };

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="font-display bg-background-light dark:bg-[#110e19] text-gray-900 dark:text-gray-100 antialiased overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="relative min-h-screen w-full flex flex-col items-center p-4 sm:p-6 lg:p-10">
        <motion.div
          className="absolute inset-0 bg-background-light dark:bg-[#110e19] z-0"
          animate={{
            background: [
              'radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))',
              'radial-gradient(ellipse_80%_80%_at_30%_-10%,rgba(120,119,198,0.4),rgba(255,255,255,0))',
              'radial-gradient(ellipse_80%_80%_at_70%_-30%,rgba(120,119,198,0.3),rgba(255,255,255,0))',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </motion.div>

        <div className="w-full max-w-7xl mx-auto z-10 py-10">
          {/* Section Header */}
          <motion.header
            className="mb-12 projects-header"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center gap-6">
              <motion.div
                className="flex-grow h-px bg-gradient-to-l from-blue-300/50 to-transparent dark:from-slate-700/50 dark:to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.h1
                className="text-center text-sm font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Projects
              </motion.h1>
              <motion.div
                className="flex-grow h-px bg-gradient-to-r from-blue-300/50 to-transparent dark:from-slate-700/50 dark:to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>

            <motion.div
              className="my-10 max-w-3xl mx-auto text-center"
              variants={itemVariants}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Project Showcase
                <motion.span
                  className="ml-3 text-lg font-normal text-gray-500 dark:text-gray-400"
                  key={filteredProjects.length}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  ({filteredProjects.length}{' '}
                  {filteredProjects.length === 1 ? 'project' : 'projects'})
                </motion.span>
              </motion.h2>
              <motion.p
                className="text-sm md:text-base text-gray-500 dark:text-slate-400 leading-relaxed max-w-xl mx-auto font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                A showcase of high-end digital solutions, demonstrating advanced
                technical architecture, seamless performance, and
                industry-standard development practices.
              </motion.p>
            </motion.div>
          </motion.header>

          {/* Filter Navigation */}
          <motion.nav
            className="filter-nav flex flex-wrap justify-center gap-3 mb-16"
            variants={containerVariants}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => handleFilterChange(category)}
                  variant={activeFilter === category ? 'gradient' : 'outline'}
                  className={`filter-btn px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeFilter === category
                      ? 'shadow-lg shadow-blue-500/25 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0'
                      : 'bg-white/50 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-cyan-400 hover:text-blue-500 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {category}
                  {activeFilter !== 'All Projects' &&
                    activeFilter === category && (
                      <motion.span
                        className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {filteredProjects.length}
                      </motion.span>
                    )}
                </Button>
              </motion.div>
            ))}
          </motion.nav>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              layout
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    ref={el => (cardsRef.current[index] = el)}
                    variants={cardVariants}
                    whileHover="hover"
                    className="perspective-1000"
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -50 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      layout: { duration: 0.3 },
                    }}
                  >
                    <Card
                      className={`group relative flex flex-col rounded-[2.5rem] bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-gray-200 dark:border-white/5 overflow-hidden transition-all duration-500 ${project.hoverShadow}`}
                    >
                      {/* Project Image */}
                      <motion.div
                        className="w-full h-64 md:h-72 overflow-hidden relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      >
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          initial={{ scale: 1.1, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 1 }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-white/40 dark:from-slate-900/40 to-transparent opacity-20"
                          whileHover={{ opacity: 0.1 }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Action Icons Overlay */}
                        <motion.div
                          className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <motion.a
                            href={project.liveProjectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                          <motion.a
                            href={project.githubRepositoryLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ scale: 0, rotate: 180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            <Github className="w-5 h-5" />
                          </motion.a>
                        </motion.div>
                      </motion.div>

                      <CardContent className="p-8 flex flex-col justify-between flex-grow">
                        <div>
                          <motion.span
                            className={`text-[10px] font-black uppercase tracking-widest ${project.categoryColor} mb-2 block`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          >
                            {project.category}
                          </motion.span>

                          <motion.h3
                            className="text-2xl font-bold dark:text-white mb-3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                          >
                            {project.title}
                          </motion.h3>

                          <motion.p
                            className="text-gray-700 dark:text-slate-300 text-sm mb-4"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                          >
                            {project.description}
                          </motion.p>

                          {/* Brief Description */}
                          <motion.div
                            className="mb-6 p-4 bg-gray-50/50 dark:bg-gray-800/30 rounded-xl border border-gray-200/50 dark:border-gray-700/50"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                          >
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                              {project.briefDescription}
                            </p>
                          </motion.div>

                          {/* Key Features */}
                          <motion.ul
                            className="space-y-2 mb-6"
                            variants={containerVariants}
                          >
                            {project.features.map((feature, featureIndex) => (
                              <motion.li
                                key={featureIndex}
                                className="flex items-start text-xs text-gray-600 dark:text-slate-400"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.5,
                                  delay: 0.6 + featureIndex * 0.1,
                                }}
                              >
                                <ChevronRight className="w-3 h-3 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                                <span className="leading-relaxed">
                                  {feature}
                                </span>
                              </motion.li>
                            ))}
                          </motion.ul>

                          {/* Tech Stack Tags */}
                          <motion.div
                            className="flex flex-wrap gap-2 mb-4"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                          >
                            {project.mainTechStack
                              .slice(0, 4)
                              .map((tech, techIndex) => (
                                <motion.span
                                  key={techIndex}
                                  className="px-2 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.8 + techIndex * 0.05 }}
                                  whileHover={{ scale: 1.05 }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            {project.mainTechStack.length > 4 && (
                              <motion.span
                                className="px-2 py-1 bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 rounded-md text-xs font-medium"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 }}
                              >
                                +{project.mainTechStack.length - 4} more
                              </motion.span>
                            )}
                          </motion.div>
                        </div>

                        {/* Footer with Tech Icons */}
                        <motion.div
                          className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200/50 dark:border-white/5"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.8 }}
                        >
                          <motion.div
                            className="flex gap-3"
                            variants={containerVariants}
                          >
                            {project.techStack.map((tech, techIndex) => (
                              <motion.img
                                key={techIndex}
                                src={tech.icon}
                                className={`w-6 h-6 ${
                                  tech.invert ? 'dark:invert' : ''
                                }`}
                                alt={tech.name}
                                title={tech.name}
                                initial={{
                                  opacity: 0,
                                  scale: 0,
                                  rotate: -180,
                                }}
                                whileInView={{
                                  opacity: 1,
                                  scale: 1,
                                  rotate: 0,
                                }}
                                whileHover={{
                                  scale: 1.2,
                                  rotate: 360,
                                  transition: { duration: 0.5 },
                                }}
                                transition={{
                                  duration: 0.6,
                                  delay: 0.9 + techIndex * 0.1,
                                  type: 'spring',
                                  stiffness: 200,
                                }}
                              />
                            ))}
                          </motion.div>

                          {/* Project Links */}
                          <motion.div
                            className="flex gap-2"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                          >
                            <motion.a
                              href={project.liveProjectLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 bg-blue-100/80 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200/80 dark:hover:bg-blue-800/50 transition-all duration-300"
                              whileHover={{ scale: 1.1, y: -2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </motion.a>
                            <motion.a
                              href={project.githubRepositoryLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 bg-gray-100/80 dark:bg-gray-800/80 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 transition-all duration-300"
                              whileHover={{ scale: 1.1, y: -2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Github className="w-4 h-4" />
                            </motion.a>
                          </motion.div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  className="col-span-full flex flex-col items-center justify-center py-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  >
                    <motion.span
                      className="text-4xl"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      🔍
                    </motion.span>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    No Projects Found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
                    No projects match the selected filter "{activeFilter}". Try
                    selecting a different category.
                  </p>
                  <motion.button
                    onClick={() => handleFilterChange('All Projects')}
                    className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Show All Projects
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
