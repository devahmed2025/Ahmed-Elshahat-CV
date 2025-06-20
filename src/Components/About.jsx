
import { useState } from "react";
import { motion } from "framer-motion";
import { DiReact, DiNodejs, DiJavascript } from "react-icons/di";
import {
  SiMongodb,
  SiExpress,
  SiDocker,
  SiAmazonaws,
  SiTypescript,
} from "react-icons/si";

const About = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for tech stack (replace with your actual data import)
  const techStack = [
    {
      id: 1,
      name: "React",
      icon: DiReact,
      category: "frontend",
    },
    {
      id: 2,
      name: "Node.js",
      icon: DiNodejs,
      category: "backend",
    },
    {
      id: 3,
      name: "MongoDB",
      icon: SiMongodb,
      category: "database",
    },
    {
      id: 4,
      name: "Express",
      icon: SiExpress,
      category: "backend",
    },
    {
      id: 5,
      name: "Docker",
      icon: SiDocker,
      category: "devops",
    },
    // {
    //   id: 6,
    //   name: "AWS",
    //   icon: SiAmazonaws,
    //   category: "cloud",
    // },
    {
      id: 7,
      name: "JavaScript",
      icon: DiJavascript,
      category: "language",
    },
    {
      id: 8,
      name: "TypeScript",
      icon: SiTypescript,
      category: "language",
    },
  ];
  const projects = [
    {
      title: "Dev-Hub LMS Platform",
      link: "https://dev-hub-front-end.vercel.app/",
      stack: ["React", "Node.js", "MongoDB", "Stripe", "OpenAI"],
      description:
        "AI-powered Learning Management System with video hosting, payment integration, and community features.",
      status: "Live",
      image: "/api/placeholder/300/200",
    },
    {
      title: "Hero Gym Management",
      link: "https://hero-gym-react.vercel.app/login",
      stack: ["React", "Docker", "MongoDB", "Google API"],
      description:
        "Complete gym management solution with QR-based entry system and voice announcements.",
      status: "Live",
      image: "/api/placeholder/300/200",
    },
    {
      title: "Smartera Shop",
      link: "https://smartera-shop.netlify.app/",
      stack: ["React", "Node.js", "MongoDB", "Context API"],
      description:
        "Full-featured e-commerce platform with admin dashboard and analytics.",
      status: "Live",
      image: "/api/placeholder/300/200",
    },
    {
      title: "Pitzaa Delivery App",
      link: "https://pitzaa-deleivery-app.netlify.app/",
      stack: ["React", "Redux", "LocalStorage"],
      description:
        "Modern pizza ordering interface with dark mode and smooth UX.",
      status: "Live",
      image: "/api/placeholder/300/200",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "React Router",
        "Redux",
        "React Query",
        "TypeScript",
        "Tailwind CSS",
        "Context API",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "MongoDB",
        "Radis Caching",
        "Stripe",
        "paymob",
        "AI",
        "chat bots",
      ],
    },
    {
      category: "Deployment",
      items: ["Docker", "CI/CD GITHUB ACTIONS", "Nginx", "Vercel", "Railway"],
    },
    {
      category: "Tools",
      items: ["Git", "Figma", "Postman", "VS Code", "swagger"],
    },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: "👋" },
    { id: "skills", label: "Skills", icon: "🚀" },
    { id: "projects", label: "Projects", icon: "💼" },
    { id: "experience", label: "Experience", icon: "📈" },
  ];

  return (
    <div
      id="About"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden pt-20 pb-16"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-400/20 dark:to-purple-400/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-4xl font-bold text-gray-700 dark:text-gray-200">
                  AE
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Ahmed Mohamed Elshahat
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
                Full Stack JavaScript Developer
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Riyadh, Saudi Arabia
                </span>
                <span>📧 a7med.elshahhat@gmail.com</span>
                <span>📱 +20 101 314 8481</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6">
          <nav className="flex justify-center">
            <div className="flex space-x-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-16">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Building the Future, One Line at a Time
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  I'm a passionate full-stack developer specializing in the MERN
                  stack. With expertise in backend architecture, scalable
                  systems, and modern web technologies, I create solutions that
                  make a difference.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      4+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      2+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">🚀</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Skills Tab */}
        {activeTab === "skills" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Technical Expertise
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Technologies I work with to bring ideas to life
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-300">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Some of my recent work that I'm proud of
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center">
                    <div className="text-4xl">💻</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded-full">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                    >
                      View Project
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Experience Tab */}
        {activeTab === "experience" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Professional Journey
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                My career path and educational background
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  TX L2 Engineer
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">
                  Nokia • Jun 2024 - Feb 2025
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Led technical operations and troubleshooting for
                  telecommunications infrastructure.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Front Office TX Engineer
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">
                  Nokia • Mar 2023 - Jun 2024
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Managed front-office operations and client-facing technical
                  support.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  BSc in Electronics & Communication Engineering
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">
                  Misr Higher Institute • 2017-2022
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Graduation Project: Skin Cancer Detection via Dermoscopy (2nd
                  place – IEEE/ITC)
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default About;
