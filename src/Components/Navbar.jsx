

import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { SlMenu } from "react-icons/sl";
import { motion } from "framer-motion";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";

const Navbar = () => {
  const [mode, setMode] = useState("dark");
  const [openNav, setOpenNav] = useState(false);
  const location = useLocation(); // Get current route

  useEffect(() => {
    const savedMode = window.localStorage.getItem("mode") || "dark";
    document.body.classList.add(savedMode);
    setMode(savedMode);
  }, []);

  const handleMode = (newMode) => {
    if (newMode === "dark") {
      document.body.classList.add("dark");
      localStorage.setItem("mode", "dark");
      setMode("dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("mode", "light");
      setMode("light");
    }
  };

  // Function to handle navigation and scrolling
  const handleNavClick = (section) => {
    if (location.pathname !== "/") {
      // If not on Home, navigate to Home and scroll to section
      window.location.href = `/#${section}`;
    } else {
      // If on Home, just scroll
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpenNav(false); // Close mobile nav
  };

  return (
    <header className="dark:bg-slate-900/95 bg-white/95 backdrop-blur-lg border-b border-slate-200/20 dark:border-slate-700/30 header shadow-lg shadow-purple-500/10 dark:shadow-cyan-500/10 py-4 fixed top-0 left-0 w-full z-[999]">
      <div className="container flex items-center relative justify-between flex-wrap">
        <RouterLink to="/" onClick={() => window.scrollTo({ top: 0 })}>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="48"
            height="48"
            className="text-yellow-400 dark:text-yellow-300"
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <path
              d="M30 20 L20 20 L20 80 L30 80"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M70 20 L80 20 L80 80 L70 80"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="50" cy="35" r="5" fill="currentColor" />
            <circle cx="50" cy="50" r="5" fill="currentColor" />
            <circle cx="50" cy="65" r="5" fill="currentColor" />
            <path
              d="M35 35 L45 35 M55 35 L65 35 M35 50 L45 50 M55 50 L65 50 M35 65 L45 65 M55 65 L65 65"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </motion.svg>
        </RouterLink>
        <ul className="hidden items-center gap-[40px] md:flex">
          {["Hero", "About", "Services", "Projects"].map((section, index) => (
            <motion.li
              key={section}
              className="relative group"
              initial={{ translateY: 40, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 0.1 + index * 0.3 }}
            >
              {location.pathname === "/" ? (
                <ScrollLink
                  activeClass="active"
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={100}
                  className="text-[1.3rem] font-semibold text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                >
                  {section === "Hero" ? "Home" : section === "About" ? "About Me" : section}
                </ScrollLink>
              ) : (
                <span
                  onClick={() => handleNavClick(section)}
                  className="text-[1.3rem] font-semibold text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                >
                  {section === "Hero" ? "Home" : section === "About" ? "About Me" : section}
                </span>
              )}
              <HiDotsHorizontal
                size={20}
                className="text-violet-500 dark:text-cyan-400 absolute opacity-0 -bottom-8 group-hover:opacity-[1] group-hover:-bottom-4 transition-all duration-500 left-1/2 translate-x-[-50%]"
              />
            </motion.li>
          ))}
        </ul>
        <div className="hidden items-center gap-6 md:flex">
          <motion.button
            onClick={() => handleNavClick("contact")}
            initial={{ opacity: 0, translateY: 40 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.1, delay: 1.3 }}
            className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 dark:from-cyan-500 dark:to-blue-500 dark:hover:from-cyan-600 dark:hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-violet-500/30 dark:hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
          >
            Contact
          </motion.button>
          <motion.div
            initial={{ translateY: 40, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white cursor-pointer w-[42px] h-[42px] rounded-xl grid place-items-center shadow-lg hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300"
          >
            {mode === "dark" ? (
              <MdOutlineLightMode
                onClick={() => handleMode("light")}
                size={24}
                className="transition-all duration-100"
              />
            ) : (
              <MdOutlineDarkMode
                onClick={() => handleMode("dark")}
                size={24}
                className="transition-all duration-100"
              />
            )}
          </motion.div>
        </div>
        <div className="flex md:hidden">
          {openNav && (
            <div className="flex md:hidden bg-gradient-to-b from-violet-600/20 via-purple-600/20 to-pink-600/20 dark:from-cyan-600/20 dark:via-blue-600/20 dark:to-purple-600/20 backdrop-blur-lg w-full h-screen absolute top-16 left-0 -z-10"></div>
          )}
          <div className="flex items-center gap-4">
            {openNav ? (
              <IoIosCloseCircleOutline
                onClick={() => setOpenNav((prev) => !prev)}
                className="w-[32px] h-[32px] text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-cyan-400 transition-all duration-300 cursor-pointer"
              />
            ) : (
              <SlMenu
                onClick={() => setOpenNav((prev) => !prev)}
                className="w-[28px] h-[28px] text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                size={20}
              />
            )}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 820 }}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white cursor-pointer w-[40px] h-[40px] rounded-xl grid place-items-center shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
            >
              {mode === "dark" ? (
                <MdOutlineLightMode
                  onClick={() => handleMode("light")}
                  size={22}
                  className="transition-all duration-100"
                />
              ) : (
                <MdOutlineDarkMode
                  onClick={() => handleMode("dark")}
                  size={22}
                  className="transition-all duration-100"
                />
              )}
            </motion.div>
          </div>
          {openNav && (
            <motion.ul
              initial={{ opacity: 0, top: -200 }}
              animate={{
                opacity: 1,
                top: "150%",
                transition: { type: "spring", duration: 1 },
              }}
              className="flex items-center flex-col py-10 absolute top-[150%] left-[15px] rounded-2xl mobileNav bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border border-slate-200/20 dark:border-slate-700/30 shadow-2xl shadow-violet-500/10 dark:shadow-cyan-500/10 gap-[35px] md:hidden"
            >
              {["Hero", "About", "Services", "Projects"].map((section, index) => (
                <motion.li
                  key={section}
                  initial={{ translateY: 40, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.3 }}
                  className="w-[95%] text-center"
                >
                  {location.pathname === "/" ? (
                    <ScrollLink
                      activeClass="active"
                      to={section}
                      spy={true}
                      smooth={true}
                      offset={-200}
                      duration={100}
                      onClick={() => setOpenNav(false)}
                      className="text-[1.4rem] font-semibold text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                    >
                      {section === "Hero" ? "Home" : section === "About" ? "About Me" : section}
                    </ScrollLink>
                  ) : (
                    <span
                      onClick={() => handleNavClick(section)}
                      className="text-[1.4rem] font-semibold text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                    >
                      {section === "Hero" ? "Home" : section === "About" ? "About Me" : section}
                    </span>
                  )}
                </motion.li>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                onClick={() => handleNavClick("contact")}
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 dark:from-cyan-500 dark:to-blue-500 dark:hover:from-cyan-600 dark:hover:to-blue-600 text-white font-semibold py-3 px-10 rounded-xl shadow-lg hover:shadow-violet-500/30 dark:hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
              >
                Contact
              </motion.button>
            </motion.ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;