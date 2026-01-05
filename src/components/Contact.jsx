import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Facebook,
  Mail,
  MessageCircle,
  Linkedin,
  Send,
  Github,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const socialRef = useRef(null);

  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [errors, setErrors] = useState({});

  // EmailJS configuration (you'll need to set these up)
  const EMAILJS_SERVICE_ID = 'your_service_id';
  const EMAILJS_TEMPLATE_ID = 'your_template_id';
  const EMAILJS_PUBLIC_KEY = 'your_public_key';

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
      gsap.fromTo(
        '.contact-header',
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

      // Animate social links with stagger
      gsap.fromTo(
        '.social-link',
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: socialRef.current,
            start: 'top 85%',
          },
        }
      );

      // Animate form elements
      gsap.fromTo(
        '.form-element',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form input changes
  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // For demo purposes, we'll simulate email sending
      // Replace this with actual EmailJS implementation
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Uncomment and configure when you have EmailJS set up:
      /*
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Mahadi', // Your name
        },
        EMAILJS_PUBLIC_KEY
      );
      */

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');

      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

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

  // Contact information
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Address',
      value: 'maha609im@gmail.com',
      href: 'mailto:maha609im@gmail.com',
      color: 'text-blue-700 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      hoverBg: 'group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40',
      description: 'Send me an email anytime',
    },
    {
      icon: Phone,
      label: 'Phone Number',
      value: '+880 1609-216725',
      href: 'tel:+8801609216725',
      color: 'text-green-700 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      hoverBg: 'group-hover:bg-green-200 dark:group-hover:bg-green-800/40',
      description: 'Call me during business hours',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+880 1609-216725',
      href: 'https://wa.me/8801609216725',
      color: 'text-emerald-700 dark:text-emerald-400',
      bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
      hoverBg: 'group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/40',
      description: 'Message me on WhatsApp',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/mahadi609im',
      color: 'text-gray-700 dark:text-gray-300',
      bgColor: 'bg-gray-100 dark:bg-gray-800/40',
      hoverBg: 'group-hover:bg-gray-200 dark:group-hover:bg-gray-700/60',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mahadi609im/',
      color: 'text-blue-700 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      hoverBg: 'group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/mahadi609im/',
      color: 'text-indigo-700 dark:text-indigo-400',
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
      hoverBg: 'group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/40',
    },
    {
      name: 'Telegram',
      icon: Send,
      href: 'https://t.me/maha609im',
      color: 'text-sky-700 dark:text-sky-400',
      bgColor: 'bg-sky-100 dark:bg-sky-900/30',
      hoverBg: 'group-hover:bg-sky-200 dark:group-hover:bg-sky-800/40',
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      className="font-display bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 antialiased"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.div
          className="absolute inset-0 bg-background-light dark:bg-[#110e19] z-0"
          animate={{
            background: [
              'radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))',
              'radial-gradient(ellipse_80%_80%_at_70%_-10%,rgba(120,119,198,0.4),rgba(255,255,255,0))',
              'radial-gradient(ellipse_80%_80%_at_30%_-30%,rgba(120,119,198,0.3),rgba(255,255,255,0))',
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </motion.div>

        <div className="w-full mx-auto z-10 py-10">
          {/* Section Header */}
          <motion.header
            className="mb-16 contact-header"
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
                Contact
              </motion.h1>
              <motion.div
                className="flex-grow h-px bg-gradient-to-r from-blue-300/50 to-transparent dark:from-slate-700/50 dark:to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </motion.header>

          <motion.main
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start max-w-7xl mx-auto"
            variants={containerVariants}
          >
            {/* Left Column - Contact Info & Social */}
            <motion.div className="space-y-10" variants={itemVariants}>
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Let's Work{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                    Together
                  </span>
                </motion.h2>
                <motion.p
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Ready to bring your ideas to life? I'm always excited to take
                  on new challenges and collaborate on innovative projects.
                  Let's connect and create something amazing together.
                </motion.p>
              </motion.div>

              {/* Contact Information Cards */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      className={`group flex items-center p-6 bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/60 dark:border-white/10 hover:shadow-lg transition-all duration-300 ${contact.hoverBg}`}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 8, scale: 1.02 }}
                    >
                      <motion.div
                        className={`w-14 h-14 flex items-center justify-center rounded-xl ${contact.bgColor} ${contact.color} group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>
                      <div className="ml-4 flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                          {contact.label}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 font-medium">
                          {contact.value}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {contact.description}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Follow Me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center justify-center p-4 bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl border border-gray-200/60 dark:border-white/10 hover:shadow-lg transition-all duration-300 ${social.hoverBg}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        whileHover={{ y: -4, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          className={`w-8 h-8 flex items-center justify-center ${social.color}`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="w-5 h-5" />
                        </motion.div>
                        <span className="ml-3 font-medium text-gray-900 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          {social.name}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Enhanced Contact Form */}
            <motion.div
              variants={itemVariants}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white/90 dark:bg-slate-900/90 border border-gray-200/60 dark:border-white/10 shadow-2xl backdrop-blur-xl">
                <CardContent className="p-8">
                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Send Message
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Fill out the form below and I'll get back to you as soon
                      as possible.
                    </p>
                  </motion.div>

                  {/* Status Messages */}
                  <AnimatePresence>
                    {submitStatus && (
                      <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className={`mb-6 p-4 rounded-xl border ${
                          submitStatus === 'success'
                            ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200'
                            : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {submitStatus === 'success' ? (
                            <CheckCircle className="w-5 h-5 flex-shrink-0" />
                          ) : (
                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                          )}
                          <p className="font-medium">
                            {submitStatus === 'success'
                              ? "Message sent successfully! I'll get back to you soon."
                              : 'Failed to send message. Please try again or contact me directly.'}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    variants={containerVariants}
                  >
                    {/* Name Field */}
                    <motion.div
                      variants={itemVariants}
                      className="form-element"
                    >
                      <motion.label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        Full Name *
                      </motion.label>
                      <motion.div
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className={`w-full bg-white/80 dark:bg-slate-800/80 border-2 ${
                            errors.name
                              ? 'border-red-500 dark:border-red-400'
                              : 'border-gray-300 dark:border-gray-600'
                          } rounded-xl py-3 px-4 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
                          disabled={isSubmitting}
                        />
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-sm text-red-700 dark:text-red-300"
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </motion.div>
                    </motion.div>

                    {/* Email Field */}
                    <motion.div
                      variants={itemVariants}
                      className="form-element"
                    >
                      <motion.label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        Email Address *
                      </motion.label>
                      <motion.div
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          className={`w-full bg-white/80 dark:bg-slate-800/80 border-2 ${
                            errors.email
                              ? 'border-red-500 dark:border-red-400'
                              : 'border-gray-300 dark:border-gray-600'
                          } rounded-xl py-3 px-4 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
                          disabled={isSubmitting}
                        />
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-sm text-red-700 dark:text-red-300"
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </motion.div>
                    </motion.div>

                    {/* Subject Field */}
                    <motion.div
                      variants={itemVariants}
                      className="form-element"
                    >
                      <motion.label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        Subject *
                      </motion.label>
                      <motion.div
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                          className={`w-full bg-white/80 dark:bg-slate-800/80 border-2 ${
                            errors.subject
                              ? 'border-red-500 dark:border-red-400'
                              : 'border-gray-300 dark:border-gray-600'
                          } rounded-xl py-3 px-4 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
                          disabled={isSubmitting}
                        />
                        {errors.subject && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-sm text-red-700 dark:text-red-300"
                          >
                            {errors.subject}
                          </motion.p>
                        )}
                      </motion.div>
                    </motion.div>

                    {/* Message Field */}
                    <motion.div
                      variants={itemVariants}
                      className="form-element"
                    >
                      <motion.label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        Message *
                      </motion.label>
                      <motion.div
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project or how I can help you..."
                          rows={5}
                          className={`w-full bg-white/80 dark:bg-slate-800/80 border-2 ${
                            errors.message
                              ? 'border-red-500 dark:border-red-400'
                              : 'border-gray-300 dark:border-gray-600'
                          } rounded-xl py-3 px-4 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none`}
                          disabled={isSubmitting}
                        />
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-sm text-red-700 dark:text-red-300"
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </motion.div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      variants={itemVariants}
                      className="form-element pt-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <motion.div
                          className="flex items-center justify-center gap-3"
                          animate={isSubmitting ? { opacity: [1, 0.5, 1] } : {}}
                          transition={{
                            duration: 1,
                            repeat: isSubmitting ? Infinity : 0,
                          }}
                        >
                          {isSubmitting ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                          ) : (
                            <Send className="w-5 h-5" />
                          )}
                          <span>
                            {isSubmitting
                              ? 'Sending Message...'
                              : 'Send Message'}
                          </span>
                        </motion.div>
                      </Button>
                    </motion.div>
                  </motion.form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.main>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
