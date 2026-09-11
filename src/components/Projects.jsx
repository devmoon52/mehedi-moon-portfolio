import SectionHead from "./SectionHead";
import Card from "./Card";
// Images
import landignPage from "../assets/projects/optimize-landing-page.png";
import eCommerce from "../assets/projects/e-commerce.png";
import dashboard from "../assets/projects/saas-dashboard.png";

import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { debounce } from "../utils/optimize";

const headData = {
  title: "Featured Projects",
};

// cards
const cardArr = [
  {
    id: 1,
    title: "Agency Landing Page",
    desc: "Optimizer - Modern & Minimalist landing page focused on speed, performance & smoothness.",
    image: landignPage,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: {
      github: "https://github.com/devmoon52/optimizer",
      live: "https://optimizer-web-spec.vercel.app/",
    },
  },
  {
    id: 2,
    title: "E-commarce Store UI",
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
    desc: "Project Manager – Managing the activities of clients and team members through the systematic allocation of projects.",
    image: dashboard,
    tech: ["React", "Tailwind CSS", "Framer Motion", "Redux Toolkit"],
    link: {
      github: "https://github.com/devmoon52/dev-workspace",
      live: "https://devworkspace-jet.vercel.app/",
    },
  },
];

const Projects = () => {
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
  }, []);

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

  return (
    <div className="max-w-7xl mx-auto md:space-y-12 space-y-8 overflow-x-clip">
      <SectionHead
        h1={"text-center"}
        data={headData}
      />
      <div className="flex gap-3 relative">
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

        <ul
          ref={containerRef}
          onScrollEnd={scrollEnd}
          className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory"
        >
          {cardArr.map((card) => (
            <li
              ref={cardRef}
              key={card.id}
              className="grow sm:basis-80 basis-full rounded-md shrink-0 overflow-hidden bodyBG snap-start"
            >
              <Card data={card} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
