
import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Dumbbell,
  Briefcase,
  Building2,
  Code2,
  ExternalLink,
} from "lucide-react";

const MainTitle = ({ title, p }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
      {title}
    </h2>
    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
      {p}
    </p>
  </div>
);

const TimelineItem = ({
  icon: Icon,
  title,
  period,
  description,
  tech,
  isLeft = false,
  hasLink = false,
  linkHref = "#",
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 30 }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          delay: delay,
          duration: 0.6,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true }}
      className={`relative flex items-center mb-12 ${
        isLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline Line Connector */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-purple-400 to-pink-400 opacity-30"></div>

      {/* Icon Container */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Content Card */}
      <div
        className={`flex-1 ${
          isLeft ? "md:pr-8" : "md:pl-8 pl-6"
        } max-w-md md:max-w-lg`}
      >
        <div className="relative group">
          {/* Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
            {/* Link Button */}
            {hasLink && (
              <a
                href={linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
            )}

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {title}
            </h3>

            {/* Period/Tech */}
            <div className="text-sm font-semibold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-3">
              {period}
            </div>

            {/* Tech Stack */}
            {tech && (
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium">
                {tech}
              </div>
            )}

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Arrow */}
          <div
            className={`absolute top-8 ${
              isLeft ? "md:left-full md:right-auto right-full" : "left-full"
            } w-0 h-0 border-8 ${
              isLeft
                ? "md:border-l-white md:dark:border-l-gray-800 md:border-r-transparent border-r-white dark:border-r-gray-800 border-l-transparent"
                : "border-r-white dark:border-r-gray-800 border-l-transparent"
            } border-t-transparent border-b-transparent`}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

const Journey = () => {
  const timelineData = [
    {
      icon: GraduationCap,
      title: "Education",
      period: "2017 - 2022",
      description:
        "I am a graduate of the College of Engineering Electronics and Communication Department",
      isLeft: true,
      delay: 0.1,
    },
    {
      icon: Dumbbell,
      title: "HERO GYM",
      period: "First Project",
      tech: "Node.js • Express.js • React.js • MongoDB",
      description:
        "I got into programming when we wanted a software solution to manage my uncle's gym and I started learning web development from scratch to build a website for my uncle's gym.",
      isLeft: false,
      delay: 0.2,
    },
    {
      icon: Code2,
      title: "Experience",
      period: "+2 Years",
      description:
        "I have over three years of experience in building full apps in React.js and Node.js. I have worked on a variety of projects including a LMS app, an E-Commerce app, and Gym management system.",
      isLeft: true,
      delay: 0.3,
    },
    {
      icon: Building2,
      title: "The Job",
      period: "NOKIA",
      tech: "Back Office TX L2 Engineer",
      description:
        "I have been working at NOKIA as Back Office TX L2 Engineer for two years, and during that time, I created Scripts for automating repetitive complex tasks also eliminates human error and making the company more efficient and effective.",
      isLeft: false,
      delay: 0.4,
    },
    {
      icon: Briefcase,
      title: "Framework",
      period: "React & EXPRESS",
      description:
        "I use both React.js and Express.js for building web applications. React.js is a popular JavaScript library for building user interfaces, and Express.js is a popular web application framework for building APIs.",
      isLeft: true,
      hasLink: true,
      linkHref: "#", // Replace with actual certificate link
      delay: 0.5,
    },
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <MainTitle
          title="My Journey"
          p="My journey from my college years to working at NOKIA to the present"
        />

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 via-pink-400 to-purple-400 rounded-full opacity-20"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                icon={item.icon}
                title={item.title}
                period={item.period}
                tech={item.tech}
                description={item.description}
                isLeft={item.isLeft}
                hasLink={item.hasLink}
                linkHref={item.linkHref}
                delay={item.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
