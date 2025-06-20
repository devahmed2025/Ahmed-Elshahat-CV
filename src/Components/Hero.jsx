// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   FaFacebookF,
//   FaGithub,
//   FaLinkedinIn,
//   FaWhatsapp,
//   FaCloudDownloadAlt,
//   FaCode,
//   FaRocket,
// } from "react-icons/fa";
// import { IoLogoInstagram } from "react-icons/io";

// const Hero = () => {
//   const [currentText, setCurrentText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTyping, setIsTyping] = useState(true);

//   const texts = [
//     "Full Stack Developer",
//     "MERN Stack Expert",
//     "Backend Specialist",
//     "Problem Solver",
//   ];

//   // Typewriter effect
//   useEffect(() => {
//     const text = texts[currentIndex];

//     if (isTyping) {
//       if (currentText.length < text.length) {
//         const timeout = setTimeout(() => {
//           setCurrentText(text.slice(0, currentText.length + 1));
//         }, 100);
//         return () => clearTimeout(timeout);
//       } else {
//         const timeout = setTimeout(() => setIsTyping(false), 2000);
//         return () => clearTimeout(timeout);
//       }
//     } else {
//       if (currentText.length > 0) {
//         const timeout = setTimeout(() => {
//           setCurrentText(currentText.slice(0, -1));
//         }, 50);
//         return () => clearTimeout(timeout);
//       } else {
//         setCurrentIndex((prev) => (prev + 1) % texts.length);
//         setIsTyping(true);
//       }
//     }
//   }, [currentText, currentIndex, isTyping, texts]);

//   const socialLinks = [
//     {
//       id: 1,
//       link: "https://www.facebook.com/ahmed.mohamed.345491",
//       icon: <FaFacebookF />,
//       color: "from-blue-600 to-blue-500",
//       hoverColor: "hover:shadow-blue-500/50",
//       name: "Facebook",
//     },
//     {
//       id: 2,
//       link: "https://github.com/devahmed2025",
//       icon: <FaGithub />,
//       color: "from-gray-800 to-gray-600",
//       hoverColor: "hover:shadow-gray-500/50",
//       name: "GitHub",
//     },
//     {
//       id: 3,
//       link: "https://www.instagram.com/a7medelsh7at/",
//       icon: <IoLogoInstagram />,
//       color: "from-pink-600 to-orange-500",
//       hoverColor: "hover:shadow-pink-500/50",
//       name: "Instagram",
//     },
//     {
//       id: 4,
//       link: "https://wa.me/+201013148481",
//       icon: <FaWhatsapp />,
//       color: "from-green-600 to-green-500",
//       hoverColor: "hover:shadow-green-500/50",
//       name: "WhatsApp",
//     },
//     {
//       id: 5,
//       link: "https://www.linkedin.com/in/ahmed-elshahat-43ab792a4",
//       icon: <FaLinkedinIn />,
//       color: "from-blue-700 to-blue-600",
//       hoverColor: "hover:shadow-blue-600/50",
//       name: "LinkedIn",
//     },
//   ];

//   const floatingElements = [
//     {
//       icon: <FaCode />,
//       position: "top-20 left-20",
//       delay: 0,
//       color: "text-blue-500",
//     },
//     {
//       icon: <FaRocket />,
//       position: "top-40 right-32",
//       delay: 1,
//       color: "text-purple-500",
//     },
//     {
//       icon: "{ }",
//       position: "bottom-32 left-16",
//       delay: 2,
//       color: "text-green-500",
//     },
//     {
//       icon: "</>",
//       position: "bottom-20 right-20",
//       delay: 3,
//       color: "text-orange-500",
//     },
//   ];

//   return (
//     <div
//       id="Hero"
//       className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 overflow-hidden"
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         {/* Floating geometric shapes */}
//         <motion.div
//           animate={{ rotate: 360, scale: [1, 1.2, 1] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-blue-300/30 rounded-full"
//         />
//         <motion.div
//           animate={{ rotate: -360, scale: [1, 0.8, 1] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//           className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-purple-300/30 rounded-full"
//         />

//         {/* Floating code elements */}
//         {floatingElements.map((element, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{
//               opacity: [0.3, 0.7, 0.3],
//               y: [0, -20, 0],
//               rotate: [0, 10, -10, 0],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               delay: element.delay,
//               ease: "easeInOut",
//             }}
//             className={`absolute ${element.position} ${element.color} text-2xl font-bold hidden lg:block`}
//           >
//             {element.icon}
//           </motion.div>
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-8 text-center lg:text-left"
//           >
//             {/* Welcome Badge */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.5, duration: 0.6 }}
//               className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50"
//             >
//               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//               <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
//                 Available for work
//               </span>
//             </motion.div>

//             {/* Main Heading */}
//             <div className="space-y-4">
//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.7, duration: 0.8 }}
//                 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
//               >
//                 <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
//                   Hello, I'm
//                 </span>
//                 <br />
//                 <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
//                   Ahmed Elshahat
//                 </span>
//               </motion.h1>

//               {/* Typewriter Effect */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1.2, duration: 0.8 }}
//                 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 h-16 flex items-center justify-center lg:justify-start"
//               >
//                 <span className="border-r-2 border-blue-500 pr-1 animate-pulse">
//                   {currentText}
//                 </span>
//               </motion.div>
//             </div>

//             {/* Description */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.5, duration: 0.8 }}
//               className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
//             >
//               Engineering graduate with expertise in full-stack JavaScript
//               development. Specialized in building scalable backend systems with
//               Node.js and creating modern web applications that solve real-world
//               problems.
//             </motion.p>

//             {/* Social Links */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.8, duration: 0.8 }}
//               className="flex flex-wrap justify-center lg:justify-start gap-4"
//             >
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={social.id}
//                   href={social.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 2 + index * 0.1, duration: 0.5 }}
//                   whileHover={{
//                     scale: 1.1,
//                     y: -5,
//                     transition: { duration: 0.2 },
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg ${social.hoverColor} hover:shadow-xl transition-all duration-300 group`}
//                   title={social.name}
//                 >
//                   <span className="text-lg group-hover:scale-110 transition-transform duration-200">
//                     {social.icon}
//                   </span>
//                 </motion.a>
//               ))}
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 2.5, duration: 0.8 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
//             >
//               <motion.a
//                 href="https://docs.google.com/document/d/1zHMazaM3S8ZPqwb2rUav9QD3xwdGUheP/edit?usp=sharing"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 group"
//               >
//                 <FaCloudDownloadAlt className="group-hover:animate-bounce" />
//                 Download Resume
//               </motion.a>

//               <motion.a
//                 href="#About"
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-200 font-semibold rounded-full shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300"
//               >
//                 View My Work
//                 <span className="group-hover:translate-x-1 transition-transform">
//                   →
//                 </span>
//               </motion.a>
//             </motion.div>
//           </motion.div>

//           {/* Right Content - Profile Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8, x: 100 }}
//             animate={{ opacity: 1, scale: 1, x: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="relative flex justify-center lg:justify-end"
//           >
//             {/* Decorative elements around image */}
//             <div className="relative">
//               {/* Glowing background */}
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 scale-110"></div>

//               {/* Image container */}
//               <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 p-2">
//                 <motion.img
//                   src="https://res.cloudinary.com/djzcvjwuv/image/upload/w_400,h_400,c_fill,r_max,f_auto,q_auto/IMG_6230_okuq6e.jpg"
//                   alt="Ahmed Elshahat - Full Stack Developer"
//                   className="w-full h-full object-cover rounded-full"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </div>

//               {/* Floating tech icons around image */}
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 className="absolute inset-0 w-80 h-80 md:w-96 md:h-96"
//               >
//                 {["⚛️", "🟢", "⚡", "🚀", "💻", "🔥"].map((emoji, index) => (
//                   <motion.div
//                     key={index}
//                     className="absolute w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg text-xl"
//                     style={{
//                       top: `${50 + 45 * Math.sin((index * Math.PI * 2) / 6)}%`,
//                       left: `${50 + 45 * Math.cos((index * Math.PI * 2) / 6)}%`,
//                       transform: "translate(-50%, -50%)",
//                     }}
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     {emoji}
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 3, duration: 1 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
//         >
//           <motion.a
//             href="#About"
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
//           >
//             <span className="text-sm font-medium">Scroll Down</span>
//             <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
//               <motion.div
//                 animate={{ y: [0, 12, 0] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="w-1 h-3 bg-current rounded-full mt-2"
//               />
//             </div>
//           </motion.a>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaCloudDownloadAlt,
  FaCode,
  FaRocket,
  FaTerminal,
  FaPlay,
  FaFolder,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
} from "react-icons/vsc";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [terminalCommands, setTerminalCommands] = useState([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [isTerminalActive, setIsTerminalActive] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const terminalRef = useRef(null);

  const texts = [
    "Full Stack Developer",
    "MERN Stack Expert",
    "Backend Specialist",
    "Problem Solver",
  ];

  const bashCommands = [
    { command: "whoami", output: "ahmed-elshahat" },
    { command: "pwd", output: "/home/ahmed/projects" },
    {
      command: "ls -la",
      output: "portfolio.js\nbackend-api/\nreact-apps/\nmern-projects/",
    },
    {
      command: "cat skills.txt",
      output:
        "JavaScript, Node.js, React, MongoDB, Express\nPython, Docker, AWS, Git",
    },
    { command: "node --version", output: "v18.17.0" },
    {
      command: "npm list --global",
      output: "create-react-app@5.0.1\nexpress-generator@4.16.1",
    },
    {
      command: "git status",
      output: "On branch main\nYour branch is up to date with 'origin/main'.",
    },
    {
      command: "echo 'Ready to build amazing apps!'",
      output: "Ready to build amazing apps!",
    },
  ];

  const codeFiles = [
    {
      name: "ahmed.js",
      icon: <FaJs className="text-yellow-500" />,
      content: `const developer = {
  name: "Ahmed Elshahat",
  role: "Full Stack Developer",
  location: "Riyadh, Saudi Arabia",
  skills: ["JavaScript", "Node.js", "React", "MongoDB"],
  experience: "2+ years",
  passion: "Building scalable applications",
  
  getCurrentProject() {
    return "Amazing Portfolio Website";
  },
  
  getStatus() {
    return "Available for hire! 🚀";
  }
};

console.log(developer.getStatus());`,
    },
    {
      name: "portfolio.jsx",
      icon: <FaReact className="text-blue-500" />,
      content: `import React from 'react';

const Portfolio = () => {
  const projects = [
    "E-commerce Platform",
    "Social Media App",
    "Task Management System"
  ];
  
  return (
    <div className="portfolio">
      <h1>Welcome to my portfolio!</h1>
      {projects.map(project => (
        <ProjectCard key={project} name={project} />
      ))}
    </div>
  );
};

export default Portfolio;`,
    },
  ];

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

  useEffect(() => {
    if (isTerminalActive) {
      const runCommands = async () => {
        for (let i = 0; i < bashCommands.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 1500));
          setCurrentCommand(bashCommands[i].command);
          await new Promise((resolve) => setTimeout(resolve, 800));
          setTerminalCommands((prev) => [...prev, bashCommands[i]]);
          setCurrentCommand("");
        }
      };
      runCommands();
    }
  }, [
    isTerminalActive,
    terminalCommands,
    bashCommands,
    setCurrentCommand,
    setTerminalCommands,
  ]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalCommands]);

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

  return (
    <div
      id="Hero"
      className=" relative min-h-[auto] sm:min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden w-full space-y-10"
    >
      {/* Matrix rain background effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: "100vh", opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute text-green-400 text-xs font-mono"
            style={{ left: `${Math.random() * 100}%` }}
          >
            {Math.random().toString(36).substring(7)}
          </motion.div>
        ))}
      </div>

      <div className="mx-auto px-4 sm:px-6 pt-8 pb-12 relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 pt-8 sm:pt-12"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex justify-center sm:justify-start"
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40  ">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-30 scale-110"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                  <motion.img
                    src="https://res.cloudinary.com/djzcvjwuv/image/upload/w_400,h_400,c_fill,r_max,f_auto,q_auto/IMG_6230_okuq6e.jpg"
                    alt="Ahmed Elshahat"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-full border border-green-500/30"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs sm:text-sm font-mono text-green-400">
                status: available_for_hire
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-mono text-center sm:text-left"
              >
                <span className="text-gray-300">$ echo "</span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                  Ahmed Elshahat
                </span>
                <span className="text-gray-300">"</span>
              </motion.h1>

              {/* Typewriter Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-lg sm:text-xl md:text-2xl font-mono text-blue-400 h-10 sm:h-12 flex items-center justify-center sm:justify-start"
              >
                <span className="text-gray-500">// </span>
                <span className="border-r-2 border-blue-400 pr-1 animate-pulse">
                  {currentText}
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 backdrop-blur"
            >
              <p className="text-gray-300 leading-relaxed font-mono text-xs sm:text-sm">
                <span className="text-yellow-400">/**</span>
                <br />
                <span className="text-yellow-400">
                  {" "}
                  * Engineering graduate specializing in full-stack
                </span>
                <br />
                <span className="text-yellow-400">
                  {" "}
                  * JavaScript development. Expert in building
                </span>
                <br />
                <span className="text-yellow-400">
                  {" "}
                  * scalable backend systems and modern web apps.
                </span>
                <br />
                <span className="text-yellow-400"> */</span>
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start"
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
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-gray-800/80 border border-gray-600/50 flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500/50 transition-all duration-300"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
            >
              <motion.a
                href="https://docs.google.com/document/d/1zHMazaM3S8ZPqwb2rUav9QD3xwdGUheP/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-mono rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 group"
              >
                <FaCloudDownloadAlt className="group-hover:animate-bounce" />
                ./download-resume.sh
              </motion.a>

              <motion.button
                onClick={() => setIsTerminalActive(true)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gray-800/80 border border-gray-600/50 text-green-400 font-mono rounded-lg hover:border-green-500/50 transition-all duration-300"
              >
                <FaPlay className="text-xs sm:text-sm" />
                ./run-demo.sh
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - VS Code Window */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative pt-8 sm:pt-12 w-full"
          >
            <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden w-full">
              <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <VscChromeClose className="text-red-500 hover:bg-red-500/20 p-1 rounded text-lg cursor-pointer" />
                    <VscChromeMinimize className="text-yellow-500 hover:bg-yellow-500/20 p-1 rounded text-lg cursor-pointer" />
                    <VscChromeMaximize className="text-green-500 hover:bg-green-500/20 p-1 rounded text-lg cursor-pointer" />
                  </div>
                  <span className="text-gray-400 text-xs sm:text-sm font-mono ml-4">
                    ahmed-portfolio - Visual Studio Code
                  </span>
                </div>
              </div>

              <div className="bg-gray-800 border-b border-gray-700">
                <div className="flex flex-wrap">
                  {codeFiles.map((file, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`flex items-center gap-2 px-2 sm:px-4 py-2 text-xs sm:text-sm font-mono border-r border-gray-700 transition-colors ${
                        activeTab === index
                          ? "bg-gray-900 text-white border-b-2 border-blue-500"
                          : "text-gray-400 hover:text-white hover:bg-gray-750"
                      }`}
                    >
                      {file.icon}
                      {file.name}
                    </button>
                  ))}
                  <button
                    onClick={() => setActiveTab(2)}
                    className={`flex items-center gap-2 px-2 sm:px-4 py-2 text-xs sm:text-sm font-mono border-r border-gray-700 transition-colors ${
                      activeTab === 2
                        ? "bg-gray-900 text-white border-b-2 border-green-500"
                        : "text-gray-400 hover:text-white hover:bg-gray-750"
                    }`}
                  >
                    <FaTerminal className="text-green-500" />
                    terminal
                  </button>
                </div>
              </div>

              <div className="h-80 sm:h-96 overflow-hidden">
                <AnimatePresence mode="wait">
                  {activeTab < 2 ? (
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="p-4 h-full overflow-auto"
                    >
                      <pre className="text-gray-300 text-xs sm:text-sm font-mono leading-relaxed">
                        <code className="language-javascript">
                          {codeFiles[activeTab].content}
                        </code>
                      </pre>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-black h-full p-4 font-mono text-xs sm:text-sm overflow-auto"
                      ref={terminalRef}
                    >
                      <div className="text-green-400 mb-2">
                        ahmed@portfolio:~${" "}
                        <span className="animate-pulse">|</span>
                      </div>

                      {terminalCommands.map((cmd, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mb-2"
                        >
                          <div className="text-green-400">
                            ahmed@portfolio:~$ {cmd.command}
                          </div>
                          <div className="text-gray-300 whitespace-pre-line mb-2">
                            {cmd.output}
                          </div>
                        </motion.div>
                      ))}

                      {currentCommand && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-green-400"
                        >
                          ahmed@portfolio:~$ {currentCommand}
                          <span className="animate-pulse">|</span>
                        </motion.div>
                      )}

                      {!isTerminalActive && (
                        <div className="text-gray-500">
                          Click "Run Demo" to start the terminal session...
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

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
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors duration-300"
          >
            <span className="text-xs sm:text-sm font-mono">./scroll-down</span>
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
