import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);
  const gridRef = useRef(null);
  const codeIconRef = useRef(null);
  const [connectedSkills, setConnectedSkills] = useState(new Set());
  const [energyFlowActive, setEnergyFlowActive] = useState(false);
  const skillRefs = useRef([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [marqueeFilter, setMarqueeFilter] = useState('All');

  const skills = [
    // Frontend Skills
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      name: 'JavaScript',
      progress: 90,
      color: '#F7DF1E',
      category: 'Frontend',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      name: 'HTML5',
      progress: 95,
      color: '#E34F26',
      category: 'Frontend',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      name: 'CSS3',
      progress: 90,
      color: '#1572B6',
      category: 'Frontend',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      name: 'Tailwind CSS',
      progress: 95,
      color: '#06B6D4',
      category: 'Frontend',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      name: 'React',
      progress: 85,
      color: '#61DAFB',
      category: 'Frontend',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
      name: 'Vite',
      progress: 80,
      color: '#646CFF',
      category: 'Frontend',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg',
      name: 'React Router',
      progress: 85,
      color: '#CA4245',
      category: 'Frontend',
    },
    {
      icon: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
      name: 'Next.js',
      progress: 55,
      color: '#000000',
      category: 'Frontend',
    },

    // Backend Skills
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      name: 'Node.js',
      progress: 80,
      color: '#339933',
      category: 'Backend',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      name: 'Express.js',
      progress: 85,
      color: '#68A063',
      invert: true,
      category: 'Backend',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      name: 'Python',
      progress: 80,
      color: '#3776AB',
      category: 'Backend',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
      name: 'Django',
      progress: 25,
      color: '#092E20',
      category: 'Backend',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      name: 'MongoDB',
      progress: 70,
      color: '#47A248',
      category: 'Backend',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      name: 'Firebase',
      progress: 80,
      color: '#FFCA28',
      category: 'Backend',
    },

    // Tools & Libraries
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg',
      name: 'Axios',
      progress: 80,
      color: '#5A29E4',
      category: 'Tools',
    },
    {
      icon: 'https://cdn.worldvectorlogo.com/logos/jwt-3.svg',
      name: 'JWT',
      progress: 85,
      color: '#D63AFF',
      category: 'Tools',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      name: 'VS Code',
      progress: 90,
      color: '#007ACC',
      category: 'Tools',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      name: 'Git',
      progress: 85,
      color: '#F05032',
      category: 'Tools',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
      name: 'Postman',
      progress: 75,
      color: '#FF6C37',
      category: 'Tools',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
      name: 'NPM',
      progress: 80,
      color: '#CB3837',
      category: 'Tools',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      name: 'Figma',
      progress: 70,
      color: '#F24E1E',
      category: 'Design',
    },
    {
      icon: 'https://pbs.twimg.com/media/FhkZv7KVQAAAINF.png',
      name: 'Pixso',
      progress: 60,
      color: '#1851FF',
      category: 'Design',
    },

    // UI Libraries
    {
      icon: 'https://ui.shadcn.com/favicon.ico',
      name: 'Shadcn UI',
      progress: 90,
      color: '#000000',
      category: 'UI Libraries',
    },
    {
      icon: 'https://daisyui.com/favicon.ico',
      name: 'Daisy UI',
      progress: 85,
      color: '#5ADAC9',
      category: 'UI Libraries',
    },
    {
      icon: 'https://i.ibb.co/wF9z8X3q/pngwing-com.png',
      name: 'Framer Motion',
      progress: 75,
      color: '#00A0FF',
      category: 'UI Libraries',
    },

    // Deployment & Hosting
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg',
      name: 'Netlify',
      progress: 80,
      color: '#00ADAD',
      category: 'Deployment',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg',
      name: 'Cloudflare',
      progress: 70,
      color: '#F38020',
      category: 'Deployment',
    },
    {
      icon: 'https://surge.sh/images/logos/svg/surge-logo.svg',
      name: 'Surge',
      progress: 85,
      color: '#212121',
      category: 'Deployment',
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
      name: 'Vercel',
      progress: 85,
      color: '#000000',
      category: 'Deployment',
    },
    {
      icon: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg',
      name: 'Stripe',
      progress: 75,
      color: '#635BFF',
      category: 'Tools',
    },

    // Additional Skills
    {
      icon: 'https://api.iconify.design/ic:baseline-devices.svg?color=%2310b981',
      name: 'Responsive Design',
      progress: 95,
      color: '#10B981',
      category: 'Frontend',
    },
  ];

  // Group skills by category for better organization
  // Category colors for consistent theming
  const filterCategoryColors = {
    All: '#6366F1',
    Frontend: '#61DAFB',
    Backend: '#339933',
    Tools: '#FF6C37',
    Design: '#F24E1E',
    'UI Libraries': '#8B5CF6',
    Deployment: '#00ADAD',
  };

  // Group skills by category for marquee display
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categoryColors = {
    Frontend: '#61DAFB',
    Backend: '#339933',
    Tools: '#FF6C37',
    Design: '#F24E1E',
    'UI Libraries': '#00A0FF',
    Deployment: '#00ADAD',
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
      gsap.fromTo(
        '.tech-header',
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

      // Animate marquee skills with stagger
      gsap.fromTo(
        '.skill-box-modern',
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: marqueeRef.current,
            start: 'top 85%',
          },
        }
      );

      // Animate main skills grid
      gsap.fromTo(
        '.skill-box2',
        { opacity: 0, y: 50, rotateY: 45 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            onComplete: () => {
              // Start energy flow animation after grid is visible
              setTimeout(() => {
                setEnergyFlowActive(true);
                startEnergyFlowAnimation();
              }, 1000);
            },
          },
        }
      );

      // Animate central code icon
      gsap.fromTo(
        codeIconRef.current,
        { opacity: 0, scale: 0, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: codeIconRef.current,
            start: 'top 85%',
          },
        }
      );

      // Continuous rotation for code icon
      gsap.to(codeIconRef.current?.querySelector('svg'), {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Energy Flow Animation System
  const startEnergyFlowAnimation = () => {
    const skills = skillRefs.current;
    if (!skills.length) return;

    // Calculate positions for energy paths
    const codeIconRect = codeIconRef.current?.getBoundingClientRect();
    const gridRect = gridRef.current?.getBoundingClientRect();

    if (!codeIconRect || !gridRect) return;

    // Create staggered energy flow to each skill
    skills.forEach((skillRef, index) => {
      if (!skillRef) return;

      setTimeout(() => {
        // Trigger energy flow animation
        animateEnergyFlow(skillRef, index);
      }, index * 150); // 150ms stagger delay
    });

    // Repeat the animation every 8 seconds
    setTimeout(() => {
      if (energyFlowActive) {
        setConnectedSkills(new Set());
        startEnergyFlowAnimation();
      }
    }, 8000);
  };

  const animateEnergyFlow = (skillRef, index) => {
    // Create energy pulse effect on the path
    const pathId = `energy-path-${index}`;
    const pathElement = document.getElementById(pathId);

    if (pathElement) {
      // Animate the energy pulse along the path
      gsap.fromTo(
        pathElement,
        {
          strokeDasharray: '0 1000',
          strokeDashoffset: 0,
          opacity: 0,
        },
        {
          strokeDasharray: '20 1000',
          strokeDashoffset: -1000,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
          onComplete: () => {
            // When energy reaches the skill, activate it
            activateSkill(skillRef, index);
            // Fade out the path
            gsap.to(pathElement, {
              opacity: 0,
              duration: 0.5,
              delay: 0.2,
            });
          },
        }
      );
    }
  };

  const activateSkill = (skillRef, index) => {
    setConnectedSkills(prev => new Set([...prev, index]));

    // Scale up and glow effect
    gsap.to(skillRef, {
      scale: 1.15,
      duration: 0.3,
      ease: 'back.out(1.7)',
      yoyo: true,
      repeat: 1,
    });

    // Add glow effect
    gsap.to(skillRef, {
      boxShadow:
        '0 0 30px rgba(99, 102, 241, 0.6), 0 0 60px rgba(99, 102, 241, 0.3)',
      duration: 0.5,
      yoyo: true,
      repeat: 1,
    });
  };

  // Generate curved SVG paths from center to each skill position
  const generateEnergyPaths = () => {
    const paths = [];
    const centerX = 50; // Center percentage
    const centerY = 95; // Bottom percentage

    // Calculate positions for each skill based on typical flex-wrap grid layout
    const skillPositions = [
      // Row 1 (top)
      { x: 15, y: 10 },
      { x: 25, y: 8 },
      { x: 35, y: 5 },
      { x: 45, y: 3 },
      { x: 55, y: 3 },
      { x: 65, y: 5 },
      { x: 75, y: 8 },
      { x: 85, y: 10 },
      // Row 2
      { x: 20, y: 25 },
      { x: 30, y: 22 },
      { x: 40, y: 20 },
      { x: 50, y: 18 },
      { x: 60, y: 20 },
      { x: 70, y: 22 },
      { x: 80, y: 25 },
      // Row 3
      { x: 25, y: 40 },
      { x: 35, y: 37 },
      { x: 45, y: 35 },
      { x: 55, y: 35 },
      { x: 65, y: 37 },
      { x: 75, y: 40 },
      // Row 4 (bottom)
      { x: 30, y: 55 },
      { x: 40, y: 52 },
      { x: 50, y: 50 },
      { x: 60, y: 52 },
      { x: 70, y: 55 },
    ];

    // Only generate paths for the number of skills we actually have
    const actualSkillCount = Math.min(mainSkills.length, skillPositions.length);

    for (let i = 0; i < actualSkillCount; i++) {
      const pos = skillPositions[i];

      // Create curved path from center to skill position
      const controlX1 = centerX + (pos.x - centerX) * 0.3;
      const controlY1 = centerY - 25;
      const controlX2 = pos.x + (centerX - pos.x) * 0.2;
      const controlY2 = pos.y + 15;

      const pathData = `M ${centerX} ${centerY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${pos.x} ${pos.y}`;

      paths.push({
        id: `energy-path-${i}`,
        d: pathData,
        index: i,
      });
    }

    return paths;
  };

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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

  const mainSkills = [
    // Languages
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      name: 'JavaScript',
      category: 'Languages',
      color: '#F7DF1E',
      progress: 95,
    },

    // Frontend
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      name: 'HTML5',
      category: 'Frontend',
      color: '#E34F26',
      progress: 95,
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      name: 'CSS3',
      category: 'Frontend',
      color: '#1572B6',
      progress: 90,
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      name: 'Tailwind CSS',
      category: 'Frontend',
      color: '#06B6D4',
      progress: 95,
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      name: 'React',
      category: 'Frontend',
      color: '#61DAFB',
      progress: 85,
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg',
      name: 'React Router',
      category: 'Frontend',
      color: '#CA4245',
      progress: 80,
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg',
      name: 'Axios',
      category: 'Frontend',
      color: '#5A29E4',
      progress: 75,
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      name: 'Firebase',
      category: 'Frontend',
      color: '#FFCA28',
      progress: 80,
    },

    // Backend
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      name: 'Node.js',
      category: 'Backend',
      color: '#339933',
      progress: 80,
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      name: 'Express.js',
      category: 'Backend',
      color: '#000000',
      progress: 75,
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      name: 'MongoDB',
      category: 'Backend',
      color: '#47A248',
      progress: 75,
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      name: 'Firebase',
      category: 'Backend',
      color: '#FFCA28',
      progress: 80,
    },

    // Tools & Platforms
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      name: 'Git',
      category: 'Tools',
      color: '#F05032',
      progress: 85,
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      name: 'GitHub',
      category: 'Tools',
      color: '#181717',
      progress: 90,
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
      name: 'NPM',
      category: 'Tools',
      color: '#CB3837',
      progress: 80,
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
      name: 'Postman',
      category: 'Tools',
      color: '#FF6C37',
      progress: 75,
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      name: 'VS Code',
      category: 'Tools',
      color: '#007ACC',
      progress: 90,
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      name: 'Figma',
      category: 'Tools',
      color: '#F24E1E',
      progress: 80,
    },
    {
      icon: 'https://cdn.worldvectorlogo.com/logos/jwt-3.svg',
      name: 'JWT',
      category: 'Tools',
      color: '#000000',
      progress: 70,
    },

    // UI Libraries
    {
      icon: 'https://i.ibb.co/wF9z8X3q/pngwing-com.png',
      name: 'Framer Motion',
      category: 'UI Libraries',
      color: '#00A0FF',
      progress: 75,
    },
    {
      icon: 'https://ui.shadcn.com/favicon.ico',
      name: 'Shadcn UI',
      category: 'UI Libraries',
      color: '#000000',
      progress: 90,
      rounded: true,
    },

    {
      icon: 'https://daisyui.com/favicon.ico',
      name: 'DaisyUI',
      category: 'UI Libraries',
      color: '#2563EB',
      progress: 75,
    },

    // Deployment
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg',
      name: 'Netlify',
      category: 'Deployment',
      color: '#00ADAD',
      progress: 80,
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
      name: 'Vercel',
      category: 'Deployment',
      color: '#000000',
      progress: 85,
    },
  ];

  // Get unique categories from mainSkills
  const categories = [
    'All',
    ...new Set(mainSkills.map(skill => skill.category)),
  ];

  // Filter skills based on active filter
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredSkills(mainSkills);
    } else {
      setFilteredSkills(
        mainSkills.filter(skill => skill.category === activeFilter)
      );
    }
  }, [activeFilter]);

  // Filter marquee skills based on marquee filter
  const filteredMarqueeSkills =
    marqueeFilter === 'All'
      ? skills
      : skills.filter(skill => skill.category === marqueeFilter);

  // Get unique marquee categories
  const marqueeCategories = [
    'All',
    ...new Set(skills.map(skill => skill.category)),
  ];

  return (
    <motion.section
      ref={sectionRef}
      id="technologies"
      className="font-display bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 antialiased"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="absolute inset-0 bg-background-light dark:bg-[#110e19] z-0">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
            animate={{
              background: [
                'radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))',
                'radial-gradient(ellipse_80%_80%_at_60%_-10%,rgba(120,119,198,0.4),rgba(255,255,255,0))',
                'radial-gradient(ellipse_80%_80%_at_40%_-30%,rgba(120,119,198,0.3),rgba(255,255,255,0))',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>

        <div className="w-full mx-auto z-10 space-y-12 py-10">
          {/* Section Header */}
          <motion.header className="mb-16 tech-header" variants={itemVariants}>
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
                Technologies
              </motion.h1>
              <motion.div
                className="flex-grow h-px bg-gradient-to-r from-blue-300/50 to-transparent dark:from-slate-700/50 dark:to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </motion.header>

          {/* Enhanced Categorized Skills Marquee */}
          <motion.div
            ref={marqueeRef}
            className="w-full py-8 overflow-hidden relative"
            variants={itemVariants}
          >
            {/* Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-white/50 via-white/40 to-transparent dark:from-[#110e19]/50 dark:via-[#110e19]/40 dark:to-transparent" />
            <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-white/50 via-white/40 to-transparent dark:from-[#110e19]/50 dark:via-[#110e19]/40 dark:to-transparent" />

            {/* Filter Skills Button */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.button
                onClick={() => setShowFilterPanel(!showFilterPanel)}
                className="relative px-6 py-3 rounded-full text-sm font-semibold backdrop-blur-sm border transition-all duration-300 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-indigo-500/30 text-indigo-400 hover:from-indigo-500/30 hover:to-purple-500/30 hover:border-indigo-500/50"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 8px 25px rgba(99, 102, 241, 0.25)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div className="flex items-center gap-2">
                  <span>Filter Skills</span>
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: showFilterPanel ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </motion.div>

                {/* Button glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.button>
            </motion.div>

            {/* Animated Filter Panel */}
            <AnimatePresence>
              {showFilterPanel && (
                <motion.div
                  className="flex justify-center items-center mb-6 flex-wrap gap-3 px-4 w-full"
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  {marqueeCategories.map((category, index) => (
                    <motion.button
                      key={category}
                      onClick={() => setMarqueeFilter(category)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-sm border transition-all duration-300 ${
                        marqueeFilter === category
                          ? 'shadow-lg scale-105'
                          : 'hover:scale-105'
                      }`}
                      style={{
                        backgroundColor:
                          marqueeFilter === category
                            ? `${categoryColors[category]}25`
                            : `${categoryColors[category]}10`,
                        borderColor:
                          marqueeFilter === category
                            ? `${categoryColors[category]}60`
                            : `${categoryColors[category]}30`,
                        color: categoryColors[category],
                        boxShadow:
                          marqueeFilter === category
                            ? `0 6px 20px ${categoryColors[category]}25`
                            : 'none',
                      }}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                        type: 'spring',
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: `0 4px 15px ${categoryColors[category]}30`,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category}
                      {marqueeFilter === category && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 opacity-40"
                          style={{ borderColor: categoryColors[category] }}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 0.4 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Category Labels */}

            <div className="flex marquee-container group">
              <motion.div
                className="flex gap-4 animate-marquee whitespace-nowrap px-4"
                animate={{ x: [0, -1200] }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {filteredMarqueeSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-box-modern group/item relative flex flex-col items-center min-w-[90px] p-3 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-xl border border-white/30 dark:border-gray-700/40 shadow-lg"
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                      type: 'spring',
                      stiffness: 120,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -6,
                      transition: {
                        duration: 0.2,
                        type: 'spring',
                        stiffness: 400,
                      },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Subtle Background Glow on Hover */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at center, ${skill.color}15, transparent 60%)`,
                        filter: 'blur(6px)',
                      }}
                    />

                    {/* Square Icon Container */}
                    <motion.div
                      className="relative mb-3 p-2.5 rounded-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-sm"
                      whileHover={{
                        boxShadow: `0 4px 20px ${skill.color}25`,
                        backgroundColor: 'rgba(255, 255, 255, 0.85)',
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.img
                        src={skill.icon}
                        className={`w-8 h-8 object-contain ${
                          skill.invert ? 'dark:invert' : ''
                        }`}
                        alt={skill.name}
                        whileHover={{
                          scale: 1.1,
                          filter: 'brightness(1.1) saturate(1.2)',
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>

                    {/* Progress Line Bar */}
                    <motion.div
                      className="w-full mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.03 }}
                    >
                      {/* Background Bar */}
                      <div className="w-full h-1.5 bg-gray-200/60 dark:bg-gray-700/60 rounded-full overflow-hidden backdrop-blur-sm">
                        {/* Progress Fill */}
                        <motion.div
                          className="h-full rounded-full relative"
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}CC)`,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.progress}%` }}
                          transition={{
                            duration: 1.2,
                            delay: index * 0.05 + 0.2,
                            ease: 'easeOut',
                          }}
                          whileHover={{
                            boxShadow: `0 0 8px ${skill.color}60`,
                            filter: 'brightness(1.1)',
                          }}
                        >
                          {/* Subtle Shine Effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{
                              x: ['-100%', '100%'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 4,
                              ease: 'easeInOut',
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Modern Progress Percentage - Shows on Hover */}
                    <motion.div
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/item:opacity-100 transition-all duration-300 pointer-events-none z-20"
                      initial={{ y: 10, scale: 0.8, opacity: 0 }}
                      whileInView={{
                        opacity: 0,
                        transition: { duration: 0 },
                      }}
                    >
                      <motion.div
                        className="relative px-3 py-1.5 rounded-lg backdrop-blur-md border shadow-lg"
                        style={{
                          backgroundColor: `${skill.color}15`,
                          borderColor: `${skill.color}40`,
                          boxShadow: `0 4px 20px ${skill.color}20, 0 0 0 1px ${skill.color}10`,
                        }}
                        animate={{
                          y: [0, -2, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <motion.span
                          className="text-xs font-bold tracking-wide"
                          style={{ color: skill.color }}
                        >
                          {skill.progress}%
                        </motion.span>

                        {/* Tooltip Arrow */}
                        <div
                          className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent"
                          style={{
                            borderTopColor: `${skill.color}15`,
                          }}
                        />

                        {/* Subtle glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-lg opacity-50"
                          style={{
                            background: `linear-gradient(45deg, ${skill.color}10, transparent, ${skill.color}10)`,
                          }}
                          animate={{
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      </motion.div>
                    </motion.div>

                    {/* Skill Name Tooltip - Shows on Hover */}
                    <motion.div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/item:opacity-100 transition-all duration-200 pointer-events-none z-10">
                      <motion.div
                        className="px-2 py-1 rounded-md backdrop-blur-sm border text-xs font-medium whitespace-nowrap shadow-lg"
                        style={{
                          color: skill.color,
                          backgroundColor: `rgba(255, 255, 255, 0.95)`,
                          borderColor: `${skill.color}40`,
                        }}
                        initial={{ y: 5, scale: 0.8 }}
                        whileHover={{ y: 0, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill.name}
                        {/* Tooltip Arrow */}
                        <div
                          className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent"
                          style={{
                            borderTopColor: 'rgba(255, 255, 255, 0.95)',
                          }}
                        />
                      </motion.div>
                    </motion.div>

                    {/* Subtle Border Glow on Hover */}
                    <motion.div
                      className="absolute inset-0 rounded-xl border opacity-0 group-hover/item:opacity-60"
                      style={{ borderColor: `${skill.color}60` }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Duplicate for seamless loop */}
              <motion.div
                className="flex gap-4 animate-marquee whitespace-nowrap px-4"
                animate={{ x: [0, -1200] }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {filteredMarqueeSkills.map((skill, index) => (
                  <motion.div
                    key={`duplicate-${index}`}
                    className="skill-box-modern group/item relative flex flex-col items-center min-w-[90px] p-3 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-xl border border-white/30 dark:border-gray-700/40 shadow-lg"
                    whileHover={{
                      scale: 1.05,
                      y: -6,
                      transition: {
                        duration: 0.2,
                        type: 'spring',
                        stiffness: 400,
                      },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Subtle Background Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at center, ${skill.color}15, transparent 60%)`,
                        filter: 'blur(6px)',
                      }}
                    />

                    {/* Square Icon Container */}
                    <motion.div
                      className="relative mb-3 p-2.5 rounded-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-sm"
                      whileHover={{
                        boxShadow: `0 4px 20px ${skill.color}25`,
                        backgroundColor: 'rgba(255, 255, 255, 0.85)',
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.img
                        src={skill.icon}
                        className={`w-8 h-8 object-contain ${
                          skill.invert ? 'dark:invert' : ''
                        }`}
                        alt={skill.name}
                        whileHover={{
                          scale: 1.1,
                          filter: 'brightness(1.1) saturate(1.2)',
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>

                    {/* Progress Line Bar */}
                    <motion.div className="w-full mb-2">
                      <div className="w-full h-1.5 bg-gray-200/60 dark:bg-gray-700/60 rounded-full overflow-hidden backdrop-blur-sm">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}CC)`,
                            width: `${skill.progress}%`,
                          }}
                          whileHover={{
                            boxShadow: `0 0 8px ${skill.color}60`,
                            filter: 'brightness(1.1)',
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Modern Progress Percentage - Shows on Hover */}
                    <motion.div
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/item:opacity-100 transition-all duration-300 pointer-events-none z-20"
                      initial={{ y: 10, scale: 0.8, opacity: 0 }}
                      whileInView={{
                        opacity: 0,
                        transition: { duration: 0 },
                      }}
                    >
                      <motion.div
                        className="relative px-3 py-1.5 rounded-lg backdrop-blur-md border shadow-lg"
                        style={{
                          backgroundColor: `${skill.color}15`,
                          borderColor: `${skill.color}40`,
                          boxShadow: `0 4px 20px ${skill.color}20, 0 0 0 1px ${skill.color}10`,
                        }}
                        animate={{
                          y: [0, -2, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <motion.span
                          className="text-xs font-bold tracking-wide"
                          style={{ color: skill.color }}
                        >
                          {skill.progress}%
                        </motion.span>

                        {/* Tooltip Arrow */}
                        <div
                          className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent"
                          style={{
                            borderTopColor: `${skill.color}15`,
                          }}
                        />

                        {/* Subtle glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-lg opacity-50"
                          style={{
                            background: `linear-gradient(45deg, ${skill.color}10, transparent, ${skill.color}10)`,
                          }}
                          animate={{
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      </motion.div>
                    </motion.div>

                    {/* Skill Name Tooltip */}
                    <motion.div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/item:opacity-100 transition-all duration-200 pointer-events-none z-10">
                      <motion.div
                        className="px-2 py-1 rounded-md backdrop-blur-sm border text-xs font-medium whitespace-nowrap shadow-lg"
                        style={{
                          color: skill.color,
                          backgroundColor: `rgba(255, 255, 255, 0.95)`,
                          borderColor: `${skill.color}40`,
                        }}
                      >
                        {skill.name}
                        <div
                          className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent"
                          style={{
                            borderTopColor: 'rgba(255, 255, 255, 0.95)',
                          }}
                        />
                      </motion.div>
                    </motion.div>

                    {/* Subtle Border Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-xl border opacity-0 group-hover/item:opacity-60"
                      style={{ borderColor: `${skill.color}60` }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Filterable Skills Grid */}
          <motion.div
            className="flex flex-col items-center space-y-16 py-6"
            variants={itemVariants}
          >
            <motion.div
              ref={gridRef}
              className="relative flex flex-wrap justify-center gap-4 max-w-4xl px-4"
              variants={containerVariants}
            >
              {/* Energy Flow SVG Overlay */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{
                  width: '100%',
                  height: '100%',
                  transform: 'scaleY(-1)', // Flip to make paths go from bottom to top
                }}
              >
                <defs>
                  <linearGradient
                    id="energyGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="rgba(99, 102, 241, 0)" />
                    <stop offset="30%" stopColor="rgba(99, 102, 241, 0.8)" />
                    <stop offset="70%" stopColor="rgba(139, 92, 246, 0.8)" />
                    <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
                  </linearGradient>
                  <filter id="energyGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {generateEnergyPaths().map(path => (
                  <motion.path
                    key={path.id}
                    id={path.id}
                    d={path.d}
                    stroke="url(#energyGradient)"
                    strokeWidth="2"
                    fill="none"
                    filter="url(#energyGlow)"
                    strokeLinecap="round"
                    initial={{
                      strokeDasharray: '0 1000',
                      strokeDashoffset: 0,
                      opacity: 0,
                    }}
                  />
                ))}
              </svg>

              {mainSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  ref={el => (skillRefs.current[index] = el)}
                  className={`skill-box2 ${
                    connectedSkills.has(index) ? 'connected' : ''
                  }`}
                  data-text={skill.name}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.1,
                    rotateY: 15,
                    z: 50,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={
                    connectedSkills.has(index)
                      ? {
                          boxShadow: [
                            '0 0 0px rgba(99, 102, 241, 0)',
                            '0 0 30px rgba(99, 102, 241, 0.6)',
                            '0 0 0px rgba(99, 102, 241, 0)',
                          ],
                        }
                      : {}
                  }
                  transition={{
                    boxShadow: {
                      duration: 1,
                      repeat: connectedSkills.has(index) ? Infinity : 0,
                    },
                  }}
                >
                  <motion.img
                    src={skill.icon}
                    className={`skill-icon2 ${
                      skill.rounded ? 'rounded-lg' : ''
                    } ${skill.invert ? 'invert' : ''}`}
                    alt={skill.name}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    animate={
                      connectedSkills.has(index)
                        ? {
                            filter: [
                              'brightness(1) saturate(1)',
                              'brightness(1.2) saturate(1.3)',
                              'brightness(1) saturate(1)',
                            ],
                          }
                        : {}
                    }
                  />

                  {/* Connection Indicator */}
                  {connectedSkills.has(index) && (
                    <motion.div
                      className="absolute -inset-1 rounded-xl border-2 border-indigo-400/50"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0.8, 1.1, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Central Code Icon */}
            <motion.div className="w-full flex flex-col items-center">
              <motion.div
                className="relative w-full max-w-4xl mx-auto h-20 -mb-8 flex justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <svg
                  className="absolute bottom-0 h-20 w-full"
                  preserveAspectRatio="none"
                  viewBox="0 0 400 100"
                >
                  {[
                    'M10 0 C10 50, 190 50, 190 100',
                    'M70 0 C70 50, 190 50, 185 100',
                    'M130 0 C130 50, 200 50, 195 100',
                    'M190 0 C190 50, 200 50, 200 100',
                    'M250 0 C250 50, 205 50, 205 100',
                    'M310 0 C310 50, 210 50, 210 100',
                    'M370 0 C370 50, 220 50, 220 100',
                  ].map((path, index) => (
                    <motion.path
                      key={index}
                      d={path}
                      stroke="url(#grad)"
                      strokeWidth="0.3"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        duration: 2,
                        delay: index * 0.2,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
                      <stop
                        offset="100%"
                        stopColor="#6366f1"
                        stopOpacity="0.8"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              <motion.div
                ref={codeIconRef}
                className="relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 mt-0"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={
                  energyFlowActive
                    ? {
                        boxShadow: [
                          '0 0 20px rgba(99, 102, 241, 0.3)',
                          '0 0 40px rgba(99, 102, 241, 0.6)',
                          '0 0 20px rgba(99, 102, 241, 0.3)',
                        ],
                      }
                    : {}
                }
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
              >
                {/* Energy Source Pulse Rings */}
                {energyFlowActive && (
                  <>
                    {[1, 2, 3].map(ring => (
                      <motion.div
                        key={ring}
                        className="absolute inset-0 rounded-full border-2 border-indigo-400/30"
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{
                          scale: [1, 2.5, 1],
                          opacity: [0.8, 0, 0.8],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: ring * 0.5,
                          ease: 'easeOut',
                        }}
                      />
                    ))}
                  </>
                )}

                <motion.div
                  className="absolute inset-0 rounded-full bg-indigo-500/20 dark:bg-indigo-400/20 blur-3xl"
                  animate={{
                    scale: energyFlowActive ? [1, 1.3, 1] : [1, 1.2, 1],
                    opacity: energyFlowActive
                      ? [0.3, 0.8, 0.3]
                      : [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: energyFlowActive ? 2 : 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="relative flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full border shadow-2xl border-white/10 dark:border-gray-700/20 bg-white/30 dark:bg-slate-900/40 backdrop-blur-xl"
                  whileHover={{
                    boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)',
                    borderColor: 'rgba(99, 102, 241, 0.3)',
                  }}
                  animate={
                    energyFlowActive
                      ? {
                          borderColor: [
                            'rgba(99, 102, 241, 0.2)',
                            'rgba(99, 102, 241, 0.6)',
                            'rgba(99, 102, 241, 0.2)',
                          ],
                        }
                      : {}
                  }
                  transition={{
                    borderColor: { duration: 2, repeat: Infinity },
                  }}
                >
                  <motion.svg
                    className="h-10 w-10 text-indigo-500 dark:text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    whileHover={{ scale: 1.2 }}
                    animate={
                      energyFlowActive
                        ? {
                            color: [
                              'rgb(99, 102, 241)',
                              'rgb(139, 92, 246)',
                              'rgb(99, 102, 241)',
                            ],
                          }
                        : {}
                    }
                    transition={{
                      color: { duration: 2, repeat: Infinity },
                    }}
                  >
                    <path
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Technologies;
