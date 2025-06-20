
import { DiReact } from "react-icons/di";
import {
  SiMongodb,
  SiNodedotjs,
  SiRedux,
  SiStripe,
  SiDocker,
  SiGoogle,
} from "react-icons/si";
import {
  FaLink,
  FaCode,
  FaGraduationCap,
  FaDumbbell,
  FaShoppingCart,
  FaPizzaSlice,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
} from "react-icons/fa";
import { IoIosList } from "react-icons/io";
import { MdFavorite, MdClose } from "react-icons/md";
import { TbArrowBackUp } from "react-icons/tb";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const ImageModal = ({ isOpen, onClose, images, currentIndex, onNavigate }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="relative max-w-6xl max-h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-red-400 text-2xl z-10"
          >
            <MdClose />
          </button>

          <div className="relative">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={() => onNavigate("prev")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={() => onNavigate("next")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                >
                  <FaChevronRight />
                </button>
              </>
            )}
          </div>

          <div className="text-center mt-4">
            <p className="text-white text-sm">{images[currentIndex].caption}</p>
            {images.length > 1 && (
              <p className="text-gray-400 text-xs mt-1">
                {currentIndex + 1} of {images.length}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const ImageGallery = ({ images, projectName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const navigate = (direction) => {
    if (direction === "next") {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <div className="relative group" id="Projects">
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20">
          <img
            src={images[0].url}
            alt={`${projectName} - ${images[0].caption}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />

          {images.length > 1 && (
            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
              +{images.length - 1} more
            </div>
          )}

          <button
            onClick={() => openModal(0)}
            className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <FaExpand size={12} />
          </button>
        </div>

        {images.length > 1 && (
          <div className="flex gap-2 mt-3 overflow-x-auto">
            {images.slice(1).map((image, index) => (
              <button
                key={index + 1}
                onClick={() => openModal(index + 1)}
                className="flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 border-transparent hover:border-purple-400 transition-all duration-300"
              >
                <img
                  src={image.url}
                  alt={`${projectName} - ${image.caption}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={images}
        currentIndex={currentIndex}
        onNavigate={navigate}
      />
    </>
  );
};

const ProjectBox = ({ item }) => {
  const iconMap = {
    react: DiReact,
    node: SiNodedotjs,
    mongodb: SiMongodb,
    redux: SiRedux,
    stripe: SiStripe,
    docker: SiDocker,
    google: SiGoogle,
  };

  const projectIconMap = {
    "LMS Platform (Dev-Hub)": (
      <FaGraduationCap size={60} className="text-emerald-400" />
    ),
    "Hero Gym Management": <FaDumbbell size={60} className="text-purple-400" />,
    "Smartera Shop": <FaShoppingCart size={60} className="text-cyan-400" />,
    "Pitzza Menu App": <FaPizzaSlice size={60} className="text-amber-400" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl relative overflow-hidden hover:-translate-y-2 group transition-all duration-500 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-gray-700/50 shadow-2xl hover:shadow-purple-500/20"
    >
      {item.status === "favourite" && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-full p-2 shadow-lg">
            <MdFavorite className="text-white" size={16} />
          </div>
        </div>
      )}

      {/* Image Gallery Section */}
      <div className="p-4">
        <ImageGallery images={item.images} projectName={item.name} />
      </div>

      {/* Project Info Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {projectIconMap[item.name]}
            <h2 className="text-xl font-bold text-white">{item.name}</h2>
          </div>
          <div className="flex items-center gap-2">
            {item.techIcons.map((tech, index) => {
              const IconComponent = iconMap[tech];
              return (
                <IconComponent
                  key={index}
                  className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300"
                />
              );
            })}
          </div>
        </div>

        <div className="border-t border-gray-600/50 pt-4">
          <p className="text-gray-300 text-sm mb-3 leading-relaxed">
            {item.description}
          </p>

          <div className="flex items-center justify-center gap-2 mb-4">
            <IoIosList className="text-emerald-400" size={18} />
            <span className="text-gray-300 font-medium text-sm">
              {item.tech}
            </span>
          </div>

          <div className="flex gap-3 justify-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition-all duration-300 px-4 py-2 text-white rounded-lg shadow-lg hover:shadow-purple-500/50 hover:scale-105 flex items-center gap-2 text-sm font-medium"
              href={item.linkProject}
            >
              <FaLink size={14} />
              Live Demo
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 px-4 py-2 text-white rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:scale-105 flex items-center gap-2 text-sm font-medium"
              href={item.linkProjectGH}
            >
              <FaCode size={14} />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ AllBtn = false, moreBtn = true, backBtn = false }) => {
  const [activeBtn, setActiveBtn] = useState("ReactJs");
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const projectData = [
    {
      id: 1,
      name: "LMS Platform (Dev-Hub)",
      linkProject: "https://dev-hub-front-end.vercel.app/",
      linkProjectGH: "https://github.com/devahmed2025/dev-hub",
      tech: "ReactJs, NodeJs, MongoDB, Stripe, Redux",
      techIcons: ["react", "redux", "node", "mongodb", "stripe"],
      status: "favourite",
      description:
        "AI-powered learning management system with comprehensive course management, Stripe payment integration, video streaming, community features, and advanced analytics dashboard.",
      images: [
        {
          url: "https://res.cloudinary.com/djzcvjwuv/image/upload/v1750380081/screencapture-dev-hub-front-end-vercel-app-2025-06-20-03_35_48_bzhnzp.jpg",
          caption: "Homepage - Clean and modern landing page",
        },
        {
          url: "https://res.cloudinary.com/djzcvjwuv/image/upload/v1750380200/screencapture-dev-hub-front-end-vercel-app-courses-2025-06-20-03_36_18_cxplzp.jpg",
          caption: "Courses Page - Browse and enroll in courses",
        },
        {
          url: "https://res.cloudinary.com/djzcvjwuv/image/upload/v1750380141/screencapture-dev-hub-front-end-vercel-app-courses-684b223e5f01a06dcea770a8-videos-undefined-2025-06-20-03_38_16_fw8jye.jpg",
          caption: "Video Player - Interactive learning experience",
        },
        {
          url: "https://res.cloudinary.com/djzcvjwuv/image/upload/v1750380207/devv_sirkel.jpg",
          caption: "Dashboard - Track progress and achievements",
        },
      ],
    },
    {
      id: 2,
      name: "Hero Gym Management",
      linkProject: "https://hero-gym-react.vercel.app/login",
      linkProjectGH: "https://github.com/devahmed2025/hero-gym",
      tech: "ReactJs, NodeJs, MongoDB, Docker, Socket.io",
      techIcons: ["react", "node", "mongodb", "google", "docker"],
      status: "favourite",
      description:
        "Complete gym management system with QR code attendance tracking, member profiles with personalized diet plans and subscriptions assigned by captains, real-time notifications via Socket.io, and JWT-authenticated daily QR codes for secure access.",
      images: [
        {
          url: "https://res.cloudinary.com/djzcvjwuv/image/upload/v1750380049/hero_vfseus.jpg",
          caption: "Dashboard - Comprehensive gym management overview",
        },
        {
          url: "https://res.cloudinary.com/djzcvjwuv/image/upload/v1750380135/HeroGYm1_nj6zss.jpg",
          caption: "Member Management - Track memberships and profiles",
        },
        {
          url: "https://res.cloudinary.com/djzcvjwuv/image/upload/v1750380043/hero-gym2_y4eljf.jpg",
          caption:
            "QR Code Scanner - Real-time attendance tracking with Socket.io",
        },
        {
          url: "https://res.cloudinary.com/djzcvjwuv/image/upload/v1750380140/screencapture-hero-gym-react-vercel-app-invoices-2025-06-20-03_30_55_prbmqu.jpg",
          caption: "Invoicing System - Manage payments and subscriptions",
        },
      ],
    },
    {
      id: 3,
      name: "Smartera Shop",
      linkProject: "https://smartera-shop.netlify.app/",
      linkProjectGH: "https://github.com/devahmed2025/smartera-shop",
      tech: "ReactJs, NodeJs, MongoDB",
      techIcons: ["react", "node", "mongodb"],
      status: "",
      description:
        "Modern e-commerce platform with secure JWT authentication, product catalog management, shopping cart functionality, order processing, and responsive design for optimal shopping experience.",
      images: [
        {
          url: "https://res.cloudinary.com/djzcvjwuv/image/upload/v1750380050/smartera_icinwj.jpg",
          caption: "Homepage - Modern e-commerce design",
        },
        {
          url: "https://res.cloudinary.com/djzcvjwuv/image/upload/v1750380177/screencapture-smartera-shop-netlify-app-products-2025-06-20-03_34_31_htt5pt.jpg",
          caption: "Products Page - Browse and filter products",
        },
      ],
    },
    {
      id: 4,
      name: "Pitzza Menu App",
      linkProject: "https://pitzaa-deleivery-app.netlify.app/",
      linkProjectGH: "https://github.com/devahmed2025/pitzaa-delivery",
      tech: "ReactJs, Redux",
      techIcons: ["react", "redux"],
      status: "",
      description:
        "Interactive pizza ordering application built with React and Redux for state management. Features include menu browsing, customizable orders, cart management, and order tracking with a smooth user experience.",
      images: [
        {
          url: "https://res.cloudinary.com/djzcvjwuv/image/upload/v1750380097/screencapture-pitzaa-deleivery-app-netlify-app-2025-06-20-03_32_56_bajve3.jpg",
          caption: "Pizza Menu - Browse delicious pizza options",
        },
      ],
    },
  ];

  const filterProjects = (filter) => {
    setIsLoading(true);
    let filteredProjects = [];
    if (filter === "fav") {
      filteredProjects = projectData.filter(
        (item) => item.status === "favourite"
      );
    } else if (filter === "All") {
      filteredProjects = projectData;
    } else {
      filteredProjects = projectData.filter((item) =>
        item.tech.includes(filter)
      );
    }
    setProjects(filteredProjects);
    setTimeout(() => setIsLoading(false), 500);
  };

  useEffect(() => {
    filterProjects("ReactJs");
  }, []);

  const handleFilter = (e) => {
    const filterValue = e.target.id || e;
    setActiveBtn(filterValue);
    filterProjects(filterValue);
  };

  return (
    <div className="py-[120px] bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 min-h-screen">
      <div className="container relative px-4 max-w-7xl mx-auto">
        <ul className="flex tabs items-center w-fit mx-auto rounded-2xl gap-2 justify-center flex-wrap mb-12 bg-slate-800/50 backdrop-blur-lg p-2 border border-gray-700/50">
          {backBtn && (
            <li className="bg-gradient-to-r from-violet-600 to-purple-600 absolute left-2 -top-8 sm:top-0 w-12 h-12 rounded-full grid place-items-center sm:left-10 shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              <button className="text-white text-3xl">
                <TbArrowBackUp />
              </button>
            </li>
          )}
          {AllBtn && (
            <li
              id="All"
              onClick={handleFilter}
              className={`${
                activeBtn === "All"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30"
                  : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500"
              } cursor-pointer text-[1.2rem] sm:text-[1.4rem] font-semibold transition-all duration-300 flex items-center justify-center w-[140px] h-[48px] rounded-xl`}
            >
              All
            </li>
          )}
          <li
            id="fav"
            onClick={handleFilter}
            className={`${
              activeBtn === "fav"
                ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30"
                : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500"
            } cursor-pointer text-[1.2rem] sm:text-[1.4rem] font-semibold transition-all duration-300 flex items-center justify-center w-[140px] h-[48px] rounded-xl`}
          >
            Favorite
          </li>
          <li
            id="ReactJs"
            onClick={handleFilter}
            className={`${
              activeBtn === "ReactJs"
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30"
                : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500"
            } cursor-pointer text-[1.2rem] sm:text-[1.4rem] font-semibold transition-all duration-300 flex items-center justify-center w-[140px] h-[48px] rounded-xl`}
          >
            ALL Projects
          </li>
          <li
            id="NodeJs"
            onClick={handleFilter}
            className={`${
              activeBtn === "NodeJs"
                ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30"
                : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500"
            } cursor-pointer text-[1.2rem] sm:text-[1.4rem] font-semibold transition-all duration-300 flex items-center justify-center w-[140px] h-[48px] rounded-xl`}
          >
            NodeJs
          </li>
        </ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className={`grid ${
            projects.length === 0 && !isLoading
              ? "grid-cols-1 place-items-center"
              : "grid-cols-1 lg:grid-cols-2 gap-8"
          }`}
        >
          {isLoading ? (
            <div className="col-span-full flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          ) : projects.length === 0 ? (
            <p className="text-center text-gray-400 text-lg col-span-full py-20">
              No projects found for this filter.
            </p>
          ) : (
            projects.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 },
                }}
              >
                <ProjectBox item={item} />
              </motion.div>
            ))
          )}
        </motion.div>

        {moreBtn && (
          <RouterLink
            to="/Elshahat-Projects"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-gradient-to-r from-violet-600 to-purple-600 w-[150px] text-center leading-[50px] h-[50px] text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 mt-12 mx-auto block rounded-xl"
          >
            See More
          </RouterLink>
        )}
      </div>
    </div>
  );
};

export default Projects;
