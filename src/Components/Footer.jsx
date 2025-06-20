
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdLocationOn, MdSchedule } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
  const links = [
    { id: 1, href: "#Hero", name: "Home" },
    { id: 2, href: "#About", name: "About" },
    { id: 3, href: "#Services", name: "Services" },
    { id: 4, href: "#Projects", name: "Portfolio" },
    { id: 5, href: "#Contact", name: "Contact" },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub />,
      href: "https://github.com/devahmed2025",
      color: "hover:bg-gray-900",
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/ahmedelshahat",
      color: "hover:bg-blue-700",
    },
    {
      id: 3,
      icon: <FaWhatsapp />,
      href: "https://wa.me/+201013148481",
      color: "hover:bg-green-600",
    },
    {
      id: 4,
      icon: <FaEnvelope />,
      href: "mailto:a7med.elshahhat@gmail.com",
      color: "hover:bg-red-600",
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Ahmed Elshahat
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Full Stack Developer (MERN)
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className={`p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-sm ${link.color} hover:text-white transition-colors`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <motion.li key={link.id} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                  >
                    <span className="mr-2">→</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MdLocationOn className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Riyadh, Saudi Arabia
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Originally from Egypt
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <MdSchedule className="text-orange-500 mr-3" />
                <p className="text-gray-600 dark:text-gray-400">
                  Sun-Thu: 9AM - 5PM (GMT+3)
                </p>
              </div>

              <div className="flex items-center">
                <FaPhoneAlt className="text-orange-500 mr-3" />
                <p className="text-gray-600 dark:text-gray-400">
                  +201013148481
                </p>
              </div>

              <div className="flex items-center">
                <FaEnvelope className="text-orange-500 mr-3" />
                <p className="text-gray-600 dark:text-gray-400">
                  a7med.elshahhat@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Ahmed Elshahat. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
