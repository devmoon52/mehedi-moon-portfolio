import { useMemo, useState, useEffect, useRef } from "react";
import OverlayEffect from "./OverlayEffect";
import landingPage from "../assets/projects/optimize-landing-page.png";
import { motion } from "motion/react";
import { debounce } from "../utils/optimize";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Images
import eCommerce from "../assets/projects/e-commerce.png";
import dashboard from "../assets/projects/saas-dashboard.png";
import Card from "./Card";
import upcoming_eCommerce from "../assets/projects/upcoming-e-commerce.jpg";
import upcoming_bookingSystem from "../assets/projects/upcoming-booking-system.jpg";
import upcoming_delievery from "../assets/projects/upcoming-delievery.jpg";
import upcoming_saasLanding from "../assets/projects/upcoming-saas-landing-page.jpg";
import upcoming_chatApp from "../assets/projects/upcoming_real-time-chat.jpg";

// cards
const cardArr = [
  {
    id: 1,
    title: "Agency Landing Page",
    type: "completed",
    desc: "Optimizer - Modern & Minimalist landing page focused on speed, performance & smoothness.",
    image: landingPage,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: {
      github: "https://github.com/devmoon52/optimizer",
      live: "https://optimizer-web-spec.vercel.app/",
    },
  },
  {
    id: 2,
    title: "E-commarce Store UI",
    type: "completed",
    desc: "Bagg - Custom and minimalist online store UI with detailed product list and a simple checkout process.",
    image: eCommerce,
    tech: ["React", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
    link: {
      github: "https://github.com/devmoon52/bagg",
      live: "https://bagg-online-store.vercel.app/",
    },
  },
  {
    id: 3,
    title: "Saas Dashboard UI",
    type: "completed",
    desc: "Project Manager – Managing the activities of clients and team members through the systematic allocation of projects.",
    image: dashboard,
    tech: ["React", "Tailwind CSS", "Framer Motion", "Redux Toolkit"],
    link: {
      github: "https://github.com/devmoon52/dev-workspace",
      live: "https://devworkspace-jet.vercel.app/",
    },
  },
  {
    id: 4,
    title: "SaaS Landing Page",
    type: "upcoming",
    desc: "A modern SaaS landing page that will showcase products with clean design and smooth interactions.",
    image: upcoming_saasLanding,
    tech: ["Client & Server"],
    link: null,
  },
  {
    id: 5,
    title: "Full Stack E-Commerce Store",
    type: "upcoming",
    desc: "A modern online store that will offer smooth shopping and a simple checkout experience.",
    image: upcoming_eCommerce,
    tech: ["Client & Server"],
    link: null,
  },
  {
    id: 6,
    title: "Hotel Booking System",
    type: "upcoming",
    desc: "A smart booking platform that will simplify appointments and schedule management.",
    image: upcoming_bookingSystem,
    tech: ["Client & Server"],
    link: null,
  },
  {
    id: 7,
    title: "Food Delievery App",
    type: "upcoming",
    desc: "A delivery platform that will make order tracking and delivery management easier.",
    image: upcoming_delievery,
    tech: ["Client & Server"],
    link: null,
  },
  {
    id: 8,
    title: "Real Time Chat App",
    type: "upcoming",
    desc: "A real-time chat app that will provide fast and seamless online communication.",
    image: upcoming_chatApp,
    tech: ["Client & Server"],
    link: null,
  },
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("completed");
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [scrollPosition, setScrollPosition] = useState({
    isAbsoluteLeft: true,
    isAbsoluteRight: false,
  });

  const containerRef = useRef(null);
  const cardRef = useRef(null);

  // calculate - container overflowing
  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        const { scrollWidth, clientWidth } = containerRef.current;
        setIsOverflowing(scrollWidth > clientWidth);
      }
    };

    const debounced = debounce(checkOverflow, 200);

    const observer = new ResizeObserver(debounced);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      debounced.clear();
    };
  }, [activeTab]);

  // handle scroll
  function handleScroll(direction) {
    const { clientWidth } = cardRef.current;
    const total = clientWidth + 12;

    containerRef.current.scrollBy({
      left: direction === "left" ? -total : total,
      behavior: "smooth",
    });
  }

  // control scroll btns though scrollEnd
  function scrollEnd() {
    const { scrollLeft, clientWidth, scrollWidth } = containerRef.current;

    setScrollPosition({
      isAbsoluteLeft: scrollLeft <= 0,
      isAbsoluteRight: scrollLeft + clientWidth >= scrollWidth - 1,
    });
  }

  // filtered projects
  const filteredProjects = useMemo(() => {
    return cardArr.filter((project) => project.type === activeTab);
  }, [activeTab, cardArr]);

  return (
    <div className="px-3">
      {/* overlay effect */}
      <div className="absolute flex justify-center items-start inset-0 -z-10">
        <OverlayEffect />
      </div>

      <div className="md:space-y-8 space-y-4">
        {/* tab btns */}
        <div className="flex relative">
          <button
            onClick={() => setActiveTab("completed")}
            className={`font-medium cursor-pointer w-32 transition-colors duration-200 py-2 ${activeTab === "completed" && "bg-white/10"}`}
          >
            Completed
          </button>
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`font-medium transition-colors duration-200 cursor-pointer w-32 ${activeTab === "upcoming" && "bg-white/10"}`}
          >
            Upcoming
          </button>

          {/* line */}
          <div
            className={`bg-white absolute bottom-0 w-32 h-0.75 ${activeTab === "upcoming" ? "translate-x-32" : "translate-x-0"} transition-transform duration-200`}
          />
        </div>

        {/* contents */}
        <div className="relative">
          {/* scroll btns based on isOverflowing */}
          {isOverflowing && (
            <>
              <button
                aria-label="Move left"
                onClick={() => handleScroll("left")}
                className={`absolute left-0 top-1/2 -translate-y-1/2 bg-[#4c576d]/50 transition-colors duration-200 hover:bg-white/20 backdrop-blur-sm text-white border border-gray-500 cursor-pointer z-10 p-3 rounded-lg ${scrollPosition.isAbsoluteLeft ? "hidden" : "block"}`}
              >
                <FaChevronLeft aria-hidden="true" size={20} />
              </button>
              <button
                onClick={() => handleScroll("right")}
                aria-label="Move right"
                className={`absolute right-0 top-1/2 -translate-y-1/2 bg-[#4c576d]/50 hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm text-white border border-gray-500 cursor-pointer z-10 p-3 rounded-lg ${scrollPosition.isAbsoluteRight ? "hidden" : "block"}`}
              >
                <FaChevronRight aria-hidden="true" size={20} />
              </button>
            </>
          )}

          {/* projects list */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={activeTab}
            ref={containerRef}
            transition={{
              duration: 0.5,
            }}
            onScrollEnd={scrollEnd}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar"
          >
            {filteredProjects.map((project) => {
              return (
                <li
                  ref={cardRef}
                  className="section relative rounded-md overflow-hidden basis-78 grow shrink-0 snap-start "
                  key={project.id}
                >
                  <Card data={project} />

                  {project.type === "upcoming" && (
                    <div className="absolute top-2 left-1 rounded-full bg-teal-500 text-white px-3 py-1.5 text-sm">
                      Upcoming
                    </div>
                  )}
                </li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
