
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
} from "react-icons/fa";
import { IoIosList } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { TbArrowBackUp } from "react-icons/tb";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import loading from "../../public/animation lottie/loading.json";

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
      <FaGraduationCap size={80} className="text-emerald-400" />
    ),
    "Hero Gym Management": <FaDumbbell size={80} className="text-purple-400" />,
    "Smartera Shop": <FaShoppingCart size={80} className="text-cyan-400" />,
    "Pitzza Menu App": <FaPizzaSlice size={80} className="text-amber-400" />,
  };

  return (
    <div
      id="Projects"
      className="rounded-2xl relative overflow-hidden hover:-translate-y-3 projectParent group transition-all duration-500 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-gray-700/50 shadow-2xl hover:shadow-purple-500/20"
    >
      {item.status === "favourite" && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-full p-2 shadow-lg">
            <MdFavorite className="text-white" size={16} />
          </div>
        </div>
      )}
      <div className="relative imgParent before:transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20 flex items-center justify-center h-[200px] backdrop-blur-sm">
        {projectIconMap[item.name]}
        <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-500 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex gap-4 items-center flex-wrap">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-violet-600 to-purple-600 relative -left-8 group-hover:left-0 transition-all duration-500 w-[50px] h-[50px] text-xl grid place-items-center text-white rounded-full shadow-lg hover:shadow-purple-500/50 hover:scale-110"
            href={item.linkProject}
          >
            <FaLink />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 relative left-8 group-hover:left-0 transition-all duration-500 w-[50px] h-[50px] text-xl grid place-items-center text-white rounded-full shadow-lg hover:shadow-cyan-500/50 hover:scale-110"
            href={item.linkProjectGH}
          >
            <FaCode />
          </a>
        </div>
      </div>
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 capitalize p-6">
        <div className="flex items-center border-b border-gray-600/50 pb-4 mb-4 flex-wrap justify-between">
          <h2 className="text-xl font-bold text-white ProName">{item.name}</h2>
          <div className="flex items-center gap-3">
            {item.techIcons.map((tech, index) => {
              const IconComponent = iconMap[tech];
              return (
                <IconComponent
                  key={index}
                  className="w-[28px] h-[28px] text-gray-400 group-hover:text-white transition-colors duration-300"
                />
              );
            })}
          </div>
        </div>
        <p className="text-gray-300 font-medium text-center flex justify-center items-center gap-2">
          <IoIosList className="text-emerald-400" size={22} />
          {item.tech}
        </p>
      </div>
    </div>
  );
};

const Projects = ({ AllBtn = false, moreBtn = true, backBtn = false }) => {
  const [activeBtn, setActiveBtn] = useState("ReactJs"); // Set default to "ReactJs"
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const projectData = [
    {
      id: 1,
      name: "LMS Platform (Dev-Hub)",
      linkProject: "https://dev-hub-front-end.vercel.app/",
      linkProjectGH: "https://github.com/devahmed2025/dev-hub",
      tech: "ReactJs, NodeJs, MongoDB",
      techIcons: ["react", "redux", "node", "mongodb", "stripe"],
      status: "favourite",
      description:
        "AI-powered learning platform with Stripe payments and community features",
    },
    {
      id: 2,
      name: "Hero Gym Management",
      linkProject: "https://hero-gym-react.vercel.app/login",
      linkProjectGH: "https://github.com/devahmed2025/hero-gym",
      tech: "ReactJs, NodeJs, MongoDB",
      techIcons: ["react", "node", "mongodb", "google", "docker"],
      status: "favourite",
      description: "Dockerized gym system with QR attendance",
    },
    {
      id: 3,
      name: "Smartera Shop",
      linkProject: "https://smartera-shop.netlify.app/",
      linkProjectGH: "https://github.com/devahmed2025/smartera-shop",
      tech: "ReactJs, NodeJs, MongoDB",
      techIcons: ["react", "node", "mongodb"],
      status: "",
      description: "E-commerce platform with JWT auth",
    },
    {
      id: 4,
      name: "Pitzza Menu App",
      linkProject: "https://pitzaa-deleivery-app.netlify.app/",
      linkProjectGH: "https://github.com/devahmed2025/pitzaa-delivery",
      tech: "ReactJs, Redux",
      techIcons: ["react", "redux"],
      status: "",
      description: "Food ordering app with Redux",
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
    filterProjects("ReactJs"); // Set default filter to "ReactJs"
  }, []);

  const handleFilter = (e) => {
    const filterValue = e.target.id || e;
    setActiveBtn(filterValue);
    filterProjects(filterValue);
  };

  return (
    <div
      className="py-[120px] bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 min-h-screen"
      id="Projects"
    >
      <div className="container relative">
        <ul className="flex tabs items-center w-fit mx-auto rounded-2xl gap-2 justify-center flex-wrap mb-12 bg-slate-800/50 backdrop-blur-lg p-2 border border-gray-700/50">
          {backBtn && (
            <li className="bg-gradient-to-r from-violet-600 to-purple-600 absolute left-2 -top-8 sm:top-0 w-12 h-12 rounded-full grid place-items-center sm:left-10 shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              <RouterLink to="/#Projects" className="text-white text-3xl">
                <TbArrowBackUp />
              </RouterLink>
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
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          }`}
        >
          {isLoading ? (
            <div className="col-span-full flex justify-center">
              <Lottie className="w-[200px]" animationData={loading} />
            </div>
          ) : projects.length === 0 ? (
            <p className="text-center text-gray-400 text-lg col-span-full">
              No projects found for this filter.
            </p>
          ) : (
            projects.map((item) => <ProjectBox key={item.id} item={item} />)
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
