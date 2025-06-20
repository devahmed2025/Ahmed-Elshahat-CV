

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaCloudDownloadAlt,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const texts = [
    "Full Stack Developer",
    "MERN Stack Expert",
    "Backend Specialist",
    "Problem Solver",
  ];

  // Typewriter effect
  useEffect(() => {
    const text = texts[currentIndex];

    if (isTyping) {
      if (currentText.length < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText(text.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [currentText, currentIndex, isTyping, texts]);

  const socialLinks = [
    {
      id: 1,
      link: "https://www.facebook.com/ahmed.mohamed.345491",
      icon: <FaFacebookF />,
      color: "from-blue-600 to-blue-500",
      hoverColor: "hover:shadow-blue-500/50",
      name: "Facebook",
    },
    {
      id: 2,
      link: "https://github.com/devahmed2025",
      icon: <FaGithub />,
      color: "from-gray-800 to-gray-600",
      hoverColor: "hover:shadow-gray-500/50",
      name: "GitHub",
    },
    {
      id: 3,
      link: "https://www.instagram.com/a7medelsh7at/",
      icon: <IoLogoInstagram />,
      color: "from-pink-600 to-orange-500",
      hoverColor: "hover:shadow-pink-500/50",
      name: "Instagram",
    },
    {
      id: 4,
      link: "https://wa.me/+201013148481",
      icon: <FaWhatsapp />,
      color: "from-green-600 to-green-500",
      hoverColor: "hover:shadow-green-500/50",
      name: "WhatsApp",
    },
    {
      id: 5,
      link: "https://www.linkedin.com/in/ahmed-elshahat-43ab792a4",
      icon: <FaLinkedinIn />,
      color: "from-blue-700 to-blue-600",
      hoverColor: "hover:shadow-blue-600/50",
      name: "LinkedIn",
    },
  ];

  const floatingElements = [
    {
      icon: <FaCode />,
      position: "top-20 left-20",
      delay: 0,
      color: "text-blue-500",
    },
    {
      icon: <FaRocket />,
      position: "top-40 right-32",
      delay: 1,
      color: "text-purple-500",
    },
    {
      icon: "{ }",
      position: "bottom-32 left-16",
      delay: 2,
      color: "text-green-500",
    },
    {
      icon: "</>",
      position: "bottom-20 right-20",
      delay: 3,
      color: "text-orange-500",
    },
  ];

  return (
    <div
      id="Hero"
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-blue-300/30 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 0.8, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-purple-300/30 rounded-full"
        />

        {/* Floating code elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut",
            }}
            className={`absolute ${element.position} ${element.color} text-2xl font-bold hidden lg:block`}
          >
            {element.icon}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Available for work
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Hello, I'm
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Ahmed Elshahat
                </span>
              </motion.h1>

              {/* Typewriter Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 h-16 flex items-center justify-center lg:justify-start"
              >
                <span className="border-r-2 border-blue-500 pr-1 animate-pulse">
                  {currentText}
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
            >
              Engineering graduate with expertise in full-stack JavaScript
              development. Specialized in building scalable backend systems with
              Node.js and creating modern web applications that solve real-world
              problems.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 + index * 0.1, duration: 0.5 }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg ${social.hoverColor} hover:shadow-xl transition-all duration-300 group`}
                  title={social.name}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="https://docs.google.com/document/d/1zHMazaM3S8ZPqwb2rUav9QD3xwdGUheP/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 group"
              >
                <FaCloudDownloadAlt className="group-hover:animate-bounce" />
                Download Resume
              </motion.a>

              <motion.a
                href="#About"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-200 font-semibold rounded-full shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300"
              >
                View My Work
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Decorative elements around image */}
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 scale-110"></div>

              {/* Image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 p-2">
                <motion.img
                  src="https://res.cloudinary.com/djzcvjwuv/image/upload/w_400,h_400,c_fill,r_max,f_auto,q_auto/IMG_6230_okuq6e.jpg"
                  alt="Ahmed Elshahat - Full Stack Developer"
                  className="w-full h-full object-cover rounded-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Floating tech icons around image */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-80 h-80 md:w-96 md:h-96"
              >
                {["⚛️", "🟢", "⚡", "🚀", "💻", "🔥"].map((emoji, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg text-xl"
                    style={{
                      top: `${50 + 45 * Math.sin((index * Math.PI * 2) / 6)}%`,
                      left: `${50 + 45 * Math.cos((index * Math.PI * 2) / 6)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {emoji}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <motion.a
            href="#About"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-current rounded-full mt-2"
              />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
