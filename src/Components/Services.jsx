
import React from "react";
import { motion } from "framer-motion";
import { Palette, Code, Settings, ArrowRight, Sparkles } from "lucide-react";

const MainTitle = ({ title, p }) => (
  <div className="text-center mb-16">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
    >
      {title}
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
    >
      {p}
    </motion.p>
  </div>
);

const ServiceCard = ({ service, index }) => {
  const { icon: Icon, title, desc, gradient, features } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          delay: index * 0.1,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      className="group relative h-full"
    >
      {/* Animated Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm scale-105`}
      ></div>

      {/* Main Card */}
      <div className="relative h-full bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full translate-y-12 -translate-x-12 opacity-30 group-hover:scale-125 transition-transform duration-700"></div>

        {/* Icon Container */}
        <div className="relative z-10 mb-6">
          <div
            className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -top-1 -right-1">
            <Sparkles className="w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
            {title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {desc}
          </p>

          {/* Feature List */}
          <div className="space-y-2 mb-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center text-sm text-gray-500 dark:text-gray-400"
              >
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                {feature}
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center text-purple-600 dark:text-purple-400 font-semibold group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
            <span className="mr-2">Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Frontend Development",
      desc: "Crafting responsive and modern UI/UX with React, Redux Toolkit, and Tailwind CSS, optimized for performance and accessibility.",
      icon: Palette,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "React & Redux Toolkit",
        "Tailwind CSS",
        "Responsive Design",
        "Performance Optimization",
      ],
    },
    {
      id: 2,
      title: "Backend Development",
      desc: "Building scalable RESTful APIs with Node.js, Express, and MongoDB, including JWT authentication, rate-limiting, and MongoDB aggregation.",
      icon: Code,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Node.js & Express",
        "MongoDB Integration",
        "JWT Authentication",
        "API Development",
      ],
    },
    {
      id: 3,
      title: "Full-Stack Solutions",
      desc: "Delivering end-to-end MERN stack applications with cloud deployment (AWS, Vercel, Railway), Docker, and advanced features like Stripe and AI integration.",
      icon: Settings,
      gradient: "from-orange-500 to-red-500",
      features: [
        "MERN Stack",
        "Cloud Deployment",
        "Docker & DevOps",
        "Payment Integration",
      ],
    },
  ];

  return (
    <div
      id="Services"
      className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <MainTitle title="Services" p="What I Can Do For You" />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <span className="mr-2">Ready to Start Your Project?</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
